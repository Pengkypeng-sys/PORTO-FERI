// Cetak halaman /cv menjadi PDF A4 memakai Chrome headless.
//
//   npm run build && npm run cv
//     -> public/cv-feriman.pdf (versi publik, tanpa nomor HP)
//   CV_PHONE="+62 8xx-xxxx-xxxx" CV_OUT=~/Downloads/CV_Feriman.pdf npm run cv
//     -> versi pribadi dengan nomor HP
//
// Syarat: `npm run build` sudah dijalankan dan Google Chrome terpasang (atau set CHROME_BIN).
import { spawn, execFileSync } from "node:child_process";
import path from "node:path";
import os from "node:os";

const PORT = process.env.CV_PORT ?? "4173";
const chrome = process.env.CHROME_BIN ?? "google-chrome";
const out = (process.env.CV_OUT ?? "public/cv-feriman.pdf").replace(/^~(?=\/)/, os.homedir());
const query = process.env.CV_PHONE ? `?tel=${encodeURIComponent(process.env.CV_PHONE)}` : "";
const url = `http://127.0.0.1:${PORT}/cv${query}`;

const server = spawn("npx", ["next", "start", "-p", PORT], { stdio: "ignore" });
const stop = () => server.kill("SIGTERM");
process.on("exit", stop);

async function waitUntilUp() {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server tidak merespons di ${url}. Sudah menjalankan "npm run build"?`);
}

try {
  await waitUntilUp();
  execFileSync(
    chrome,
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--virtual-time-budget=15000",
      `--print-to-pdf=${path.resolve(out)}`,
      url,
    ],
    { stdio: "inherit" },
  );
  console.log(`PDF tersimpan: ${path.resolve(out)}`);
} finally {
  stop();
}
