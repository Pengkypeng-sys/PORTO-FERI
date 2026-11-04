// Cetak CV (dua varian) menjadi PDF A4 memakai Chrome headless.
//
//   npm run cv
//     -> public/CV_Feriman_FullStack_Developer.pdf   (halaman /cv)
//     -> public/CV_Feriman_IT_Infrastructure.pdf     (halaman /cv/infra)
//     -> public/cv-feriman.pdf                       (salinan versi Full Stack, agar link lama tetap hidup)
//
// Alur: build -> start server -> tunggu siap -> cetak tiap PDF -> server SELALU dimatikan (juga saat error / Ctrl+C).
//
// Nomor HP, tanggal lahir, dan status pernikahan hanya ada di PDF. Isi scripts/cv-private.json (git-ignored, lihat
// scripts/cv-private.example.json) atau set env CV_PHONE, CV_DOB, dan CV_STATUS.
//
// Syarat: Google Chrome terpasang (atau set CHROME_BIN). `pdftotext` (poppler-utils) dipakai untuk memeriksa hasil.
//
// Dibuat tahan banting karena Chrome headless bisa lambat atau tidak mau keluar saat mesin sibuk:
// - Menolak jalan bila port sudah dipakai, dan mematikan server beserta anak prosesnya. Server `next start`
//   lama yang masih hidup memakai build usang (file JS-nya terhapus oleh `npm run build`), sehingga halaman
//   error "This page couldn't load" tercetak sebagai PDF "sukses".
// - Chrome memakai profil sementara dan dimatikan oleh skrip setelah file PDF muncul dan ukurannya stabil.
//   Tanpa profil sementara, Chrome headless menumpang ke jendela Chrome yang sedang terbuka dan tidak pernah selesai.
// - Hasil dicetak ke file sementara, diperiksa isinya, dan baru menimpa file tujuan kalau valid, jadi cetak
//   yang gagal tidak pernah merusak PDF yang sudah ada.
import { spawn, execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdtempSync, readFileSync, rmSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import net from "node:net";
import os from "node:os";
import path from "node:path";

const PORT = Number(process.env.CV_PORT ?? 4173);
const chrome = process.env.CHROME_BIN ?? "google-chrome";
const root = path.resolve(import.meta.dirname, "..");
const nextBin = createRequire(import.meta.url).resolve("next/dist/bin/next");
const ATTEMPTS = 3;
const PRINT_TIMEOUT_S = 120;

const TARGETS = [
  { route: "/cv", file: "public/CV_Feriman_FullStack_Developer.pdf" },
  { route: "/cv/infra", file: "public/CV_Feriman_IT_Infrastructure.pdf" },
];
const LEGACY_COPY = "public/cv-feriman.pdf";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function loadPrivate() {
  const file = path.join(root, "scripts/cv-private.json");
  const fromFile = existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : {};
  const tel = process.env.CV_PHONE ?? fromFile.tel;
  const dob = process.env.CV_DOB ?? fromFile.dob;
  const status = process.env.CV_STATUS ?? fromFile.status;
  if (!tel || !dob || !status) {
    throw new Error(
      "Nomor HP / tanggal lahir / status pernikahan belum diisi. Salin scripts/cv-private.example.json menjadi scripts/cv-private.json, atau set CV_PHONE, CV_DOB, dan CV_STATUS.",
    );
  }
  return { tel, dob, status };
}

function assertPortFree(port) {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.once("error", () =>
      reject(new Error(`Port ${port} sudah terpakai (kemungkinan sisa server lama). Matikan prosesnya atau set CV_PORT.`)),
    );
    probe.once("listening", () => probe.close(resolve));
    probe.listen(port);
  });
}

async function waitUntilUp(url) {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {}
    await sleep(500);
  }
  throw new Error(`Server tidak merespons di ${url}.`);
}

// detached + kill grup proses: yang dimatikan harus benar-benar server-nya beserta anak prosesnya.
let server;
function stopServer() {
  if (!server?.pid) return;
  try {
    process.kill(-server.pid, "SIGTERM");
  } catch {}
  server = undefined;
}
for (const sig of ["SIGINT", "SIGTERM", "SIGHUP"]) {
  process.on(sig, () => {
    stopServer();
    process.exit(130);
  });
}
process.on("exit", stopServer);

const workdir = mkdtempSync(path.join(os.tmpdir(), "cv-chrome-"));
const tmpPdf = path.join(workdir, "cv.pdf");

/** Jalankan Chrome sampai tmpPdf muncul dan ukurannya stabil. Mengembalikan true bila file jadi. */
async function printPdf(url) {
  rmSync(tmpPdf, { force: true });
  const proc = spawn(
    chrome,
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--no-first-run",
      `--user-data-dir=${path.join(workdir, "profile")}`,
      "--no-pdf-header-footer",
      "--virtual-time-budget=15000",
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
    return null;
  }
}

/** Halaman error Next.js bisa ikut tercetak sebagai PDF "sukses", jadi pastikan isinya benar-benar CV lengkap. */
function looksLikeCv(text) {
  if (text === null) return true;
  return /pengalaman/i.test(text) && /Lahir:/.test(text) && !/couldn.t load/i.test(text);
}

try {
  const { tel, dob, status } = loadPrivate();
  await assertPortFree(PORT);

  execFileSync(process.execPath, [nextBin, "build"], { cwd: root, stdio: "inherit" });

  server = spawn(process.execPath, [nextBin, "start", "-p", String(PORT)], { cwd: root, stdio: "ignore", detached: true });
  const origin = `http://127.0.0.1:${PORT}`;
  await waitUntilUp(`${origin}/cv`);

  const query = `?tel=${encodeURIComponent(tel)}&dob=${encodeURIComponent(dob)}&status=${encodeURIComponent(status)}`;
  for (const { route, file } of TARGETS) {
    const out = path.join(root, file);
    let saved = false;
    for (let attempt = 1; attempt <= ATTEMPTS && !saved; attempt++) {
      if (!(await printPdf(`${origin}${route}${query}`))) {
        console.warn(`${route} percobaan ${attempt}/${ATTEMPTS}: Chrome tidak menghasilkan PDF dalam ${PRINT_TIMEOUT_S} detik.`);
        continue;
      }
      if (looksLikeCv(pdfText())) {
        copyFileSync(tmpPdf, out);
        console.log(`PDF tersimpan: ${out}`);
        saved = true;
      } else {
        console.warn(`${route} percobaan ${attempt}/${ATTEMPTS}: isi PDF bukan CV lengkap, mengulang.`);
      }
    }
    if (!saved) throw new Error(`Gagal membuat ${file} setelah ${ATTEMPTS} percobaan; file itu tidak diubah.`);
  }
  copyFileSync(path.join(root, TARGETS[0].file), path.join(root, LEGACY_COPY));
  console.log(`Salinan: ${path.join(root, LEGACY_COPY)}`);
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  process.exitCode = 1;
} finally {
  stopServer();
  rmSync(workdir, { recursive: true, force: true });
}
