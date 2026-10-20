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
    period: "2025 - Sekarang",
    role: "Full Stack Developer & IT Staff",
    org: AL_FAKHIR,
    current: true,
    points: [
      "Mengembangkan ekosistem aplikasi sekolah: LMS, pembayaran, presensi, dan aplikasi Android.",
      "Membangun dan mengelola infrastruktur jaringan sekolah: switch, access point, routing, dan QoS.",
      "Membangun absensi RFID/QR dengan notifikasi WhatsApp otomatis ke orang tua, serta portal registrasi dan dashboard admin PWA.",
    ],
  },
  {
    period: "2020 - Sekarang",
    role: "Freelance IT & Otomasi AI",
    org: "Freelance · Remote",
    current: true,
    points: [
      "Membangun dashboard pembayaran siswa (SPP, PPDB, kwitansi, laporan Excel) untuk MI Unwanul Huda 1.",
      "Mengembangkan platform pencarian lawan sparing (Cari Sparingan) dan sistem bantu CS toko online (SAMAQU).",
      "Merancang jaringan dan membangun otomasi AI (LLM, n8n, WhatsApp) sesuai kebutuhan klien.",
    ],
  },
  {
    period: "2 bulan",
    role: "Growth YouTube",
    org: "Sea Today · Kontrak",
    points: ["Menaikkan subscriber kanal YouTube dari 40.000 menjadi 80.000 (2x lipat) selama masa kontrak."],
  },
  {
    period: "2020 - 2023",
    role: "System Administrator",
    org: "Jaringan Lokal & Server Fisik",
    points: ["Merawat server fisik dan menjaga jaringan lokal tetap aman dan lancar."],
  },
];
