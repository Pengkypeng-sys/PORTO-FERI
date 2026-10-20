/** Cara proyek dikerjakan. Ditampilkan sebagai penanda di halaman Proyek. */
export type BuildMode = "ai" | "mandiri" | "campuran";

export const BUILD_LABEL: Record<BuildMode, string> = {
  ai: "Dibantu AI",
  mandiri: "Dikerjakan sendiri",
  campuran: "Sendiri + AI",
};

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
  build?: BuildMode;
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
    build: "campuran",
  },
  {
    id: "portal",
    name: "Portal & Registrasi SDI Al-Fakhir",
    desc: "Portal sekolah dengan pendaftaran siswa yang terhubung ke Google API, dari formulir sampai laporan data.",
    status: "Web app · Live",
    image: "/projects/alfakhir-web.webp",
    link: "https://www.sdialfakhir.sch.id/",
    stack: ["Next.js", "Sanity CMS", "Google Cloud"],
    build: "campuran",
  },
  {
    id: "smp",
    name: "Website SMP Islam Modern Al-Fakhir",
    desc: "Situs resmi SMP dengan konten yang mudah diperbarui lewat Sanity CMS dan formulir pendaftaran multi-langkah yang tersimpan otomatis ke Google Sheets.",
    status: "Web app · Live",
    image: "/projects/smp.webp",
    link: "https://smpialfakhir.sch.id",
    stack: ["Next.js", "TypeScript", "Sanity CMS", "Redux Toolkit"],
    build: "campuran",
  },
  {
    id: "dashboard",
    name: "Al-Fakhir Admin Dashboard",
    desc: "Aplikasi PWA untuk admin dan pewawancara penerimaan siswa baru. Login dengan Google, data tersimpan di PostgreSQL dan tersinkron dengan Google Forms dan Sheets.",
    status: "PWA · Live",
    image: "/projects/alfakhir-dash.webp",
    link: "https://dashboard-alfakhir-seven.vercel.app/admin/admin",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Gemini API", "Apps Script"],
    build: "campuran",
  },
  {
    id: "osis",
    name: "OSALFA, Pemilihan OSIS Digital",
    desc: "Sistem pemilihan ketua OSIS: siswa masuk dengan kode pemilih acak sekali pakai, dan panitia menghitung suara secara langsung. Dijalankan di server Proxmox.",
    status: "Web app · Live",
    image: "/projects/osis.webp",
    link: "https://voting.smpialfakhir.sch.id",
    stack: ["NestJS", "Prisma", "Next.js", "Tailwind CSS", "Proxmox"],
    build: "campuran",
  },
  {
    id: "miuh1",
    name: "Dashboard Pembayaran MI Unwanul Huda 1",
    desc: "Dashboard untuk mencatat SPP, PPDB, dan pembayaran lain: cicilan otomatis, rekap per kelas, kuitansi, dan laporan Excel. Admin punya kontrol penuh, wali kelas hanya bisa melihat.",
    status: "Freelance · Live",
    image: "/projects/miuh1.webp",
    link: "https://miuh1.vercel.app",
    stack: ["Next.js", "Vercel"],
    build: "campuran",
  },
  {
    id: "kuitansi",
    name: "Kuitansi & Bukti Pembayaran Sekolah",
    desc: "Aplikasi pembuat kuitansi untuk SD dan SMP Al-Fakhir: rincian SPP, uang pangkal, ekskul, dan UKT, potongan atau beasiswa, nominal terbilang otomatis, cetak A4 atau A5, serta riwayat dan draft yang tersimpan di browser.",
    status: "Aplikasi sekolah · Live",
    image: "/projects/kuitansi.webp",
    link: "https://kuitansi.smpialfakhir.sch.id/",
    stack: ["HTML", "CSS", "JavaScript"],
    build: "campuran",
  },
  {
    id: "sewahtku",
    name: "Sewa HTKu",
    desc: "Situs penyewaan walkie-talkie (HT) yang dioptimasi untuk SEO lokal, supaya mudah ditemukan pelanggan di mesin pencari.",
    status: "Situs · Live",
    image: "/projects/sewahtku.webp",
    link: "https://www.sewahtku.com/",
    build: "campuran",
  },
];

export interface MoreProject {
  id: string;
  name: string;
  desc: string;
  status: string;
  stack: string[];
  link?: string;
  build?: BuildMode;
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
    id: "ibadah-planner",
    name: "Ibadah Planner",
    desc: "Aplikasi pencatatan ibadah harian (Mutaba'ah Yaumiyyah) untuk siswa SMP Al-Fakhir: form shalat, tilawah, murojaah, dan checklist akhlak. Admin merekap laporan per kelas dan tanggal, serta mengubah daftar soal untuk kelas 7, 8, dan 9.",
    status: "Aplikasi sekolah · PWA & Android",
    stack: ["Next.js", "Prisma", "PostgreSQL", "next-auth", "Capacitor (Android)", "PWA"],
    build: "campuran",
  },
  {
    id: "n8n-sekolah",
    name: "Otomasi n8n untuk Administrasi Sekolah",
    desc: "Workflow n8n yang menyimpan akun guru dan siswa baru ke Google Sheets lewat webhook, serta membuat folder dan spreadsheet rekap absensi untuk tiap mata pelajaran secara otomatis di Google Drive.",
    status: "Otomasi · n8n",
    stack: ["n8n", "Webhook", "Google Sheets", "Google Drive"],
    build: "campuran",
  },
  {
    id: "cari-sparingan",
    name: "Cari Sparingan",
    desc: "Platform pencarian lawan sparing untuk komunitas olahraga (futsal, mini soccer, badminton). Tim mengajukan sparing, admin mencarikan lawan, dan konfirmasi dikirim lewat WhatsApp.",
    status: "Freelance · Fase 1 selesai",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "WhatsApp (WAHA)"],
    build: "campuran",
  },
  {
    id: "samaqu",
    name: "SAMAQU",
    desc: "Sistem bantu admin CS toko online: keyboard Android berisi template chat dan cek ongkir, ditambah backend dan dashboard untuk produk, order, serta verifikasi pembayaran, tanpa API resmi WhatsApp atau Instagram.",
    status: "Freelance · Dipakai klien",
    stack: ["Kotlin", "NestJS", "Next.js", "PostgreSQL"],
    build: "campuran",
  },
];
