export interface Experience {
  period: string;
  role: string;
  org: string;
  points: string[];
  current?: boolean;
}

const AL_FAKHIR = "SD & SMP Islam Modern Al-Fakhir · Sawangan, Depok";

export const EXPERIENCE: Experience[] = [
  {
    period: "2025 - Juli 2027",
    role: "Full Stack Developer & IT Staff",
    org: AL_FAKHIR,
    current: true,
    points: [
      "Membangun LMS sekolah seorang diri dengan bantuan AI coding assistant, untuk ±600 siswa dan ±100 guru: presensi, nilai, rapor, SPP, dan aplikasi Android.",
      "Mengelola jaringan dua unit sekolah (hingga ±1.000 perangkat): switch, access point, routing, dan QoS MikroTik.",
      "Menjalankan server Proxmox dan Docker untuk layanan internal melalui Cloudflare Tunnel, serta mengotomasi pembuatan akun pengguna dengan n8n.",
      "Membangun absensi RFID/QR dengan notifikasi WhatsApp otomatis ke orang tua, serta portal registrasi, aplikasi kuitansi, dan dashboard admin PWA.",
    ],
  },
  {
    period: "2020 - Sekarang",
    role: "Freelance IT & Otomasi AI",
    org: "Freelance · Remote · Paruh waktu",
    current: true,
    points: [
      "Membangun dashboard pembayaran siswa (SPP, PPDB, kuitansi, laporan Excel) untuk MI Unwanul Huda 1.",
      "Mengembangkan platform pencarian lawan sparing (Cari Sparingan) dan sistem bantu CS toko online (SAMAQU).",
      "Merancang jaringan dan membangun otomasi AI (LLM, n8n, WhatsApp) sesuai kebutuhan klien.",
    ],
  },
  {
    period: "Pertengahan 2022",
    role: "Content & Growth Specialist",
    org: "SEA Today · Kontrak 2 bulan",
    points: ["Menaikkan subscriber kanal YouTube dari 40.000 menjadi 80.000 (2x lipat) dalam 2 bulan kontrak."],
  },
  {
    period: "2020 - 2023",
    role: "System Administrator",
    org: AL_FAKHIR,
    points: ["Merawat server fisik dan menjaga jaringan lokal sekolah tetap aman dan lancar."],
  },
];
