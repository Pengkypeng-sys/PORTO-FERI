export interface Experience {
  period: string;
  role: string;
  org: string;
  points: string[];
  current?: boolean;
}

export const AL_FAKHIR = "SD & SMP Islam Modern Al-Fakhir · Sawangan, Depok";

/** Bullet pembuka pengalaman Al-Fakhir, dipakai di semua varian CV dan di situs. */
export const SOLE_IT_STAFF = "Satu-satunya staf IT untuk dua unit sekolah, mencakup jaringan, server, dan pengembangan aplikasi.";

export const SEA_TODAY: Experience = {
  period: "Pertengahan 2022",
  role: "Content & Growth Specialist",
  org: "SEA Today · Kontrak 2 bulan",
  points: ["Menaikkan subscriber kanal YouTube dari 40.000 menjadi 80.000 (2x lipat) dalam 2 bulan kontrak."],
};

export const EXPERIENCE: Experience[] = [
  {
    period: "Des 2025 - Sekarang",
    role: "Full Stack Developer & IT Staff",
    org: AL_FAKHIR,
    current: true,
    points: [
      SOLE_IT_STAFF,
      "Membangun LMS sekolah seorang diri (Express + TypeScript, Next.js, Flutter, PostgreSQL) untuk ±600 siswa dan ±100 guru: presensi, nilai, rapor, SPP, dan aplikasi Android.",
      "Mengembangkan presensi gerbang RFID/QR dengan notifikasi WhatsApp otomatis ke orang tua, menggantikan absensi manual.",
      "Membangun portal registrasi siswa, dashboard admin PWA (Google OAuth, sinkronisasi Google Sheets), dan sistem e-voting OSIS dengan kode pemilih sekali pakai.",
      "Men-deploy 10 portal web (admin, guru, dan orang tua untuk SD dan SMP), backend API, PostgreSQL, Redis, dan MinIO sebagai 22 container Docker di Proxmox, dengan akses publik melalui Cloudflare Tunnel; mengotomasi provisioning akun pengguna dengan n8n.",
      "Mengelola jaringan dua unit sekolah (±1.000 perangkat): switch, access point, routing, dan QoS MikroTik.",
    ],
  },
  {
    period: "2020 - Sekarang",
    role: "Freelance Developer",
    org: "Freelance · Remote · Paruh waktu",
    current: true,
    points: [
      "Dashboard Pembayaran MI Unwanul Huda 1: SPP, PPDB, cicilan otomatis, kuitansi, laporan Excel, dan akses berbasis role.",
      "SAMAQU: keyboard Android (Kotlin) untuk CS toko online, dengan backend NestJS dan dashboard Next.js; digunakan klien.",
      "Cari Sparingan: platform pencarian lawan sparing untuk tim olahraga (NestJS, Prisma, PostgreSQL, Next.js, integrasi WhatsApp).",
      "Merawat server dan jaringan lokal SD & SMP Islam Modern Al-Fakhir secara paruh waktu sebelum bergabung penuh pada Desember 2025.",
    ],
  },
  SEA_TODAY,
];
