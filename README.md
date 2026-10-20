# Feriman — Portofolio

Portofolio pribadi Feriman, Full Stack Developer & IT Staff di SD & SMP Islam Modern Al-Fakhir yang mencari peluang kerja di bidang IT (jaringan, developer, IT umum). Dibangun dengan Next.js (App Router), Tailwind CSS, dan kartu ID 3D interaktif di hero.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm run lint
```

Disarankan memakai Node 22 (dependensi `camera-controls` meminta Node >= 22).

## Mengubah isi

Semua teks ada di `src/data/`, tidak perlu menyentuh komponen:

| File | Isi |
|---|---|
| `site.ts` | Email, lokasi, website, akun sosial (`socials`), dan URL CV (`cvUrl`) |
| `experience.ts` | Riwayat pengalaman kerja |
| `projects.ts` | Daftar proyek (gambar di `public/projects/`) |
| `skills.ts` | Keahlian inti dan pendukung |
| `nav.ts` | Menu navigasi |

Teks halaman Profil, Pendidikan, dan Kontak ada langsung di `src/app/<halaman>/page.tsx`.

## Kartu ID 3D

`src/components/Lanyard.tsx` memakai React Three Fiber dan Rapier (fisika). Foto dilukis langsung ke UV `public/card.glb` lewat `public/card-photo-gray.webp` dan `card-photo-color.webp` (muka depan: u 0..0.5, v 0..0.75), jadi tidak bisa bergeser dari model 3D. Tali memakai `public/feriman-band.png`.

## Deploy

Cocok untuk Vercel: hubungkan repositori, tanpa konfigurasi tambahan.
