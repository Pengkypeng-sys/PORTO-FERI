export interface Project {
  id: string;
  name: string;
  desc: string;
  /** Short status line, e.g. "Web app · Live". */
  status: string;
  image: string;
  link?: string;
  /** Flagship project: rendered as a full-width banner with its stack listed. */
  featured?: boolean;
  stack?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "lms",
    name: "Al-Fakhir School LMS",
    desc: "Sistem informasi sekolah untuk SD dan SMP (±600 siswa, ±100 guru): absensi gerbang RFID/QR, nilai dan rapor, pembayaran SPP, serta notifikasi WhatsApp ke orang tua. Dijalankan sendiri di server Proxmox, lengkap dengan portal admin, guru, dan aplikasi mobile.",
    status: "LMS · Live",
    image: "/projects/lms-login.webp",
    link: "https://admin.smpialfakhir.sch.id",
    featured: true,
    stack: ["Express + TypeScript", "Next.js", "Flutter", "PostgreSQL", "n8n", "Docker"],
  },
  {
    id: "portal",
    name: "Portal & Registrasi SDI Al-Fakhir",
    desc: "Portal sekolah dengan pendaftaran siswa yang terhubung ke Google API, dari formulir sampai laporan data.",
    status: "Web app · Live",
    image: "/projects/alfakhir-web.webp",
    link: "https://www.sdialfakhir.sch.id/",
  },
  {
    id: "smp",
    name: "Website SMP Islam Modern Al-Fakhir",
    desc: "Situs resmi SMP dengan konten yang mudah diperbarui lewat Sanity CMS dan formulir pendaftaran multi-langkah yang tersimpan otomatis ke Google Sheets.",
    status: "Web app · Live",
    image: "/projects/smp.webp",
    link: "https://smpialfakhir.sch.id",
  },
  {
    id: "dashboard",
    name: "Al-Fakhir Admin Dashboard",
    desc: "Aplikasi PWA untuk admin dan pewawancara penerimaan siswa baru. Login dengan Google, data tersimpan di PostgreSQL dan tersinkron dengan Google Forms dan Sheets.",
    status: "PWA · Live",
    image: "/projects/alfakhir-dash.webp",
    link: "https://dashboard-alfakhir-seven.vercel.app/admin/admin",
  },
  {
    id: "osis",
    name: "OSALFA, Pemilihan OSIS Digital",
    desc: "Sistem pemilihan ketua OSIS: siswa masuk dengan kode pemilih acak sekali pakai, dan panitia menghitung suara secara langsung. Dijalankan di server Proxmox.",
    status: "Web app · Live",
    image: "/projects/osis.webp",
    link: "https://voting.smpialfakhir.sch.id",
  },
  {
    id: "miuh1",
    name: "Dashboard Pembayaran MI Unwanul Huda 1",
    desc: "Dashboard untuk mencatat SPP, PPDB, dan pembayaran lain: cicilan otomatis, rekap per kelas, kuitansi, dan laporan Excel. Admin punya kontrol penuh, wali kelas hanya bisa melihat.",
    status: "Freelance · Live",
    image: "/projects/miuh1.webp",
    link: "https://miuh1.vercel.app",
  },
  {
    id: "sewahtku",
    name: "Sewa HTKu",
    desc: "Situs penyewaan walkie-talkie (HT) yang dioptimasi untuk SEO lokal, supaya mudah ditemukan pelanggan di mesin pencari.",
    status: "Situs · Live",
    image: "/projects/sewahtku.webp",
    link: "https://www.sewahtku.com/",
  },
];

export interface MoreProject {
  id: string;
  name: string;
  desc: string;
  status: string;
  stack: string[];
  link?: string;
}

/** Proyek tanpa tampilan publik: ditampilkan sebagai daftar teks. */
export const MORE_PROJECTS: MoreProject[] = [
  {
    id: "smarthome",
    name: "Smart Home Voice Control",
    desc: "Kontrol perangkat rumah pintar lewat perintah suara (Voice Recognition Module V3 dan Arduino) serta bot Telegram dari jarak jauh. Terbit di The Indonesian Journal of Computer Science (SINTA 3).",
    status: "IoT · Publikasi",
    stack: ["Arduino", "ESP8266", "Telegram Bot"],
    link: "https://doi.org/10.33022/ijcs.v13i5.4398",
  },
  {
    id: "cari-sparingan",
    name: "Cari Sparingan",
    desc: "Platform pencarian lawan sparing untuk komunitas olahraga (futsal, mini soccer, badminton). Tim mengajukan sparing, admin mencarikan lawan, dan konfirmasi dikirim lewat WhatsApp.",
    status: "Freelance · Fase 1 selesai",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "WhatsApp (WAHA)"],
  },
  {
    id: "samaqu",
    name: "SAMAQU",
    desc: "Sistem bantu admin CS toko online: keyboard Android berisi template chat dan cek ongkir, ditambah backend dan dashboard untuk produk, order, serta verifikasi pembayaran, tanpa API resmi WhatsApp atau Instagram.",
    status: "Freelance · Dipakai klien",
    stack: ["Kotlin", "NestJS", "Next.js", "PostgreSQL"],
  },
];
