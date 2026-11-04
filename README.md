# Feriman — Portofolio

Portofolio pribadi **Feriman, S.Kom.**, Full Stack Developer yang membangun sistem dari kode sampai server.
Situs ini juga menjadi sumber tunggal untuk dua versi CV (PDF) yang dirender langsung dari data yang sama.

**Live:** [porto-feri.vercel.app](https://porto-feri.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=threedotjs)

## Isi

- **Beranda** dengan kartu ID 3D interaktif (fisika Rapier), bisa ditarik dengan kursor maupun sentuhan di HP
- **Profil, Keahlian, Proyek, Pendidikan, Kontak**
- **Dua CV satu halaman A4** yang dibuat dari data situs: `Full Stack Developer` dan `IT Infrastructure`
- Open Graph image dan metadata SEO

## Teknologi

| Bagian | Yang dipakai |
|---|---|
| Framework | Next.js (App Router), React 19, TypeScript |
| Tampilan | Tailwind CSS 4, font Instrument Sans, DM Serif Display, Space Mono |
| 3D | React Three Fiber, drei, Rapier, meshline |
| PDF CV | Chrome headless (`--print-to-pdf`) |
| Deploy | Vercel |

## Menjalankan

Butuh Node 22 atau lebih baru.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run lint
```

## Struktur

```text
src/
├─ app/
│  ├─ page.tsx            beranda (hero, proyek pilihan, bidang kerja)
│  ├─ profil/ skills/ proyek/ pendidikan/ kontak/
│  └─ cv/
│     ├─ page.tsx         CV Full Stack      (/cv)
│     ├─ infra/page.tsx   CV Infrastruktur   (/cv/infra, noindex, tidak ditautkan)
│     ├─ CvSheet.tsx      komponen CV bersama
│     └─ CvPrivate.tsx    data pribadi yang hanya muncul di PDF
├─ components/            Navbar, Footer, Lanyard (kartu 3D), dll.
└─ data/                  semua teks situs dan CV
scripts/
└─ build-cv.mjs           pembuat PDF CV
public/                   gambar proyek, model kartu 3D, hasil PDF CV
```

## Mengubah isi

Hampir semua teks ada di `src/data/`, tanpa perlu menyentuh komponen:

| File | Isi |
|---|---|
| `site.ts` | Email, lokasi, website, akun sosial, tombol WhatsApp, dan URL CV (`cvUrl`) |
| `experience.ts` | Riwayat pengalaman kerja (dipakai halaman Profil dan CV Full Stack) |
| `projects.ts` | Daftar proyek, stack, badge, dan catatan untuk proyek tanpa tautan publik |
| `skills.ts` | Keahlian inti dan pendukung di halaman Keahlian |
| `education.ts` | Organisasi dan sertifikat pelatihan |
| `cv.ts` | Isi dua varian CV: judul, profil, pengalaman, proyek, keahlian, urutan section |
| `nav.ts` | Menu navigasi |

Teks halaman Profil, Pendidikan, dan Kontak ada langsung di `src/app/<halaman>/page.tsx`.

## CV (PDF)

Dua varian dirender dari halaman `/cv` dan `/cv/infra`, lalu dicetak menjadi PDF A4 satu halaman:

| Varian | Halaman | File PDF |
|---|---|---|
| Full Stack Developer | `/cv` | `public/CV_Feriman_FullStack_Developer.pdf` |
| IT Infrastructure & Network | `/cv/infra` | `public/CV_Feriman_IT_Infrastructure.pdf` |

`public/cv-feriman.pdf` adalah salinan versi Full Stack agar tautan lama tetap berfungsi.
Tombol "Unduh CV" di situs menunjuk ke versi Full Stack. Versi Infrastruktur sengaja tidak ditautkan dari situs dan dikirim manual untuk lowongan yang relevan.

### Membuat ulang PDF

```bash
npm run cv
```

Script akan build, menjalankan server sementara, mencetak kedua PDF, lalu selalu mematikan servernya, termasuk saat terjadi error. Script berhenti dengan pesan jelas jika port 4173 sudah terpakai (ubah dengan `CV_PORT`).

Butuh Google Chrome, atau set `CHROME_BIN`. Setelah mencetak, cek bahwa kedua PDF tetap satu halaman.

### Data pribadi

Nomor HP, tanggal lahir, dan status pernikahan hanya boleh muncul di PDF, tidak di halaman situs mana pun. Ketiganya tidak disimpan di data situs, tetapi dibaca script dari `scripts/cv-private.json` (sudah di-`.gitignore`) lalu diteruskan lewat query saat dicetak.

```bash
cp scripts/cv-private.example.json scripts/cv-private.json
# isi tel, dob, dan status, lalu jalankan npm run cv
```

Alternatifnya, set environment variable `CV_PHONE`, `CV_DOB`, dan `CV_STATUS`. Tanpa salah satunya script berhenti dengan pesan error.

## Kartu ID 3D

`src/components/Lanyard.tsx` memakai React Three Fiber dan Rapier untuk fisika tali dan kartu.

- Foto dilukis langsung ke UV `public/card.glb` lewat `public/card-photo-gray.webp` dan `card-photo-color.webp` (muka depan: u 0..0.5, v 0..0.75), jadi tidak bisa bergeser dari model 3D. Tali memakai `public/feriman-band.png`.
- Kartu abu-abu saat diam dan berwarna saat disentuh atau ditunjuk.
- Di layar sentuh, menarik kartu menahan scroll halaman hanya selama jari berada di kartu. Menyentuh area di luar kartu tetap menggulir halaman.

## Deploy

Cocok untuk Vercel: hubungkan repositori, tanpa konfigurasi tambahan. File PDF di `public/` ikut ter-deploy, jadi jalankan `npm run cv` dan commit hasilnya sebelum push jika isi CV berubah.
