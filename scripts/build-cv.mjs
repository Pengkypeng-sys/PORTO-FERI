// Cetak halaman /cv menjadi PDF A4 memakai Chrome headless.
//
//   npm run build && npm run cv
//     -> public/cv-feriman.pdf (versi publik, tanpa nomor HP)
//   CV_PHONE="+62 8xx-xxxx-xxxx" CV_OUT=~/Downloads/CV_Feriman.pdf npm run cv
//     -> versi pribadi dengan nomor HP
//
// Syarat: `npm run build` sudah dijalankan dan Google Chrome terpasang (atau set CHROME_BIN).
//
// Dibuat tahan banting karena Chrome headless bisa lambat atau tidak mau keluar saat mesin sibuk:
// - Menolak jalan bila port sudah dipakai, dan mematikan server beserta anak prosesnya. Server `next start`
//   lama yang masih hidup memakai build usang (file JS-nya terhapus oleh `npm run build`), sehingga halaman
//   error "This page couldn't load" tercetak sebagai PDF "sukses".
// - Skrip menunggu file PDF muncul dan stabil, lalu mematikan Chrome sendiri (tidak menunggu Chrome keluar).
// - Hasil dicetak ke file sementara, diperiksa isinya (butuh `pdftotext` dari poppler-utils), dan baru
//   menimpa CV_OUT kalau valid, jadi cetak yang gagal tidak pernah merusak PDF yang sudah ada.
import { spawn, execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdtempSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import os from "node:os";

const PORT = process.env.CV_PORT ?? "4173";
const chrome = process.env.CHROME_BIN ?? "google-chrome";
const out = path.resolve((process.env.CV_OUT ?? "public/cv-feriman.pdf").replace(/^~(?=\/)/, os.homedir()));
const query = process.env.CV_PHONE ? `?tel=${encodeURIComponent(process.env.CV_PHONE)}` : "";
const url = `http://127.0.0.1:${PORT}/cv${query}`;
const ATTEMPTS = 3;
const PRINT_TIMEOUT_S = 120;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Jangan pernah memakai server lama yang kebetulan masih hidup di port ini: build-nya bisa sudah usang
// (file JS-nya terhapus oleh `npm run build`) sehingga hasil cetak rusak tanpa pesan error.
try {
  await fetch(`http://127.0.0.1:${PORT}/`);
  console.error(`Port ${PORT} sudah dipakai proses lain. Hentikan dulu, atau set CV_PORT ke port lain.`);
  process.exit(1);
} catch {}

// detached + kill grup proses: `npx` hanya pembungkus, `next-server` di bawahnya harus ikut mati.
const server = spawn("npx", ["next", "start", "-p", PORT], { stdio: "ignore", detached: true });
const stop = () => {
  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {}
};
process.on("exit", stop);

async function waitUntilUp() {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {}
    await sleep(500);
  }
  throw new Error(`Server tidak merespons di ${url}. Sudah menjalankan "npm run build"?`);
}

const workdir = mkdtempSync(path.join(os.tmpdir(), "cv-chrome-"));
const tmpPdf = path.join(workdir, "cv.pdf");

/** Jalankan Chrome sampai tmpPdf muncul dan ukurannya stabil. Mengembalikan true bila file jadi. */
async function printPdf() {
  rmSync(tmpPdf, { force: true });
  // Profil sementara: tanpa ini, Chrome headless menumpang ke jendela Chrome yang sedang terbuka
  // (profil default) dan proses tidak pernah selesai.
  const proc = spawn(
    chrome,
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--no-first-run",
      `--user-data-dir=${path.join(workdir, "profile")}`,
      "--no-pdf-header-footer",
      `--print-to-pdf=${tmpPdf}`,
      url,
    ],
    { stdio: "ignore", detached: true },
  );
  try {
    let last = -1;
    for (let s = 0; s < PRINT_TIMEOUT_S; s++) {
      await sleep(1000);
      const size = existsSync(tmpPdf) ? statSync(tmpPdf).size : 0;
      if (size > 0 && size === last) return true;
      last = size;
    }
    return false;
  } finally {
    // Matikan seluruh grup proses Chrome (anak prosesnya ikut), jangan hanya induknya.
    try {
      process.kill(-proc.pid, "SIGKILL");
    } catch {}
  }
}

function pdfText() {
  try {
    return execFileSync("pdftotext", [tmpPdf, "-"], { encoding: "utf8" });
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
    console.warn("pdftotext tidak terpasang: isi PDF tidak bisa diverifikasi.");
    return "pengalaman";
  }
}

let saved = false;
try {
  await waitUntilUp();

  for (let attempt = 1; attempt <= ATTEMPTS && !saved; attempt++) {
    if (!(await printPdf())) {
      console.warn(`Percobaan ${attempt}/${ATTEMPTS}: Chrome tidak menghasilkan PDF dalam ${PRINT_TIMEOUT_S} detik.`);
      continue;
    }
    const text = pdfText();
    // Halaman error Next.js bisa ikut tercetak sebagai PDF "sukses", jadi pastikan isinya benar-benar CV.
    if (/pengalaman/i.test(text) && !/couldn.t load/i.test(text)) {
      copyFileSync(tmpPdf, out);
      console.log(`PDF tersimpan: ${out}`);
      saved = true;
    } else {
      console.warn(`Percobaan ${attempt}/${ATTEMPTS}: isi PDF bukan CV, mengulang.`);
    }
  }

  if (!saved) {
    console.error(`Gagal membuat CV setelah ${ATTEMPTS} percobaan; ${out} tidak diubah.`);
    process.exitCode = 1;
  }
} finally {
  stop();
  rmSync(workdir, { recursive: true, force: true });
}
