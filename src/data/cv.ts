import { AL_FAKHIR, EXPERIENCE, SEA_TODAY, SOLE_IT_STAFF, type Experience } from "./experience";

/**
 * Teks khusus CV. Kontak diambil dari site.ts, pengalaman Full Stack dari experience.ts (sama dengan
 * halaman Profil). Nomor HP dan tanggal lahir TIDAK disimpan di sini: keduanya hanya dicetak ke PDF
 * lewat query `?tel=` dan `?dob=` (lihat scripts/build-cv.mjs dan app/cv/CvPrivate.tsx).
 */
export type CvVariant = "fullstack" | "infra";

export interface CvProject {
  name: string;
  /** Penjelasan singkat, ditulis setelah nama dengan tanda "—". */
  detail?: string;
  /** Domain atau DOI, ditulis setelah nama dengan tanda "·". */
  url?: string;
}

export interface CvSkillLine {
  label: string;
  items: string[];
}

export type CvSection = "projects" | "education" | "certificates";

export interface CvVariantData {
  /** Nama file PDF di folder public. */
  pdf: string;
  headline: string;
  summary: string;
  experience: Experience[];
  /** Entri lama yang diringkas jadi satu baris tanpa bullet, ditulis setelah daftar pengalaman. */
  earlier?: { title: string; detail: string };
  projects: CvProject[];
  /** Proyek dua kolom hanya jika semua entri pendek. */
  projectColumns: boolean;
  skills: CvSkillLine[];
  /** Urutan section setelah Pengalaman. Keahlian selalu terakhir. */
  sections: CvSection[];
  /** Sertakan sitasi publikasi di Pendidikan. */
  publication: boolean;
  certificateOrder: CertificateId[];
}

export type CertificateId = "aws" | "ccna-ent" | "ccna-intro";

/** Satu sumber untuk kedua varian. */
export const CV_SHARED = {
  fullName: "Feriman, S.Kom.",
  education: [
    {
      title: "S1 Teknik Komputer",
      period: "Nov 2020 – Jan 2025",
      org: "Universitas Amikom Yogyakarta · IPK 3,29 / 4,00",
      thesis: "Tugas akhir: smart home IoT berbasis perintah suara, akurasi 96,2%, nilai A.",
      publication:
        "Publikasi: The Indonesian Journal of Computer Science, Vol. 13 No. 5 (SINTA 3), doi:10.33022/ijcs.v13i5.4398.",
    },
  ],
  certificates: {
    aws: "AWS Full Stack Cloud Engineer — MSIB Angkatan 6, SEAL (2024)",
    "ccna-ent": "CCNAv7: Enterprise Networking, Security, and Automation — Cisco (2022)",
    "ccna-intro": "CCNAv7: Introduction to Networks — Cisco (2021)",
  } satisfies Record<CertificateId, string>,
} as const;

const fullstack: CvVariantData = {
  pdf: "CV_Feriman_FullStack_Developer.pdf",
  headline: "Full Stack Developer — TypeScript · Next.js · NestJS · Flutter",
  summary:
    "Full Stack Developer yang membangun dan menjalankan sistem informasi sekolah secara end-to-end: desain database, API, web, dan aplikasi mobile, hingga deployment di server self-hosted. Sistem yang saya bangun digunakan setiap hari oleh ±600 siswa, ±100 guru, dan orang tua. Lulusan S1 Teknik Komputer dengan latar belakang jaringan (Cisco CCNA) dan cloud (AWS).",
  experience: EXPERIENCE.filter((e) => e !== SEA_TODAY),
  earlier: {
    title: "Content & Growth Specialist",
    detail: "SEA Today (kontrak 2 bulan, 2022) — subscriber YouTube 40.000 → 80.000.",
  },
  projects: [
    { name: "Al-Fakhir School LMS", url: "smpialfakhir.sch.id" },
    { name: "OSALFA E-Voting", url: "voting.smpialfakhir.sch.id" },
    { name: "Dashboard Pembayaran MI", url: "miuh1.vercel.app" },
    { name: "Smart Home Voice Control", url: "doi:10.33022/ijcs.v13i5.4398" },
  ],
  projectColumns: true,
  skills: [
    { label: "Frontend", items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "PWA"] },
    { label: "Backend", items: ["Node.js", "Express", "NestJS", "Prisma", "PostgreSQL", "Redis", "REST API"] },
    { label: "Mobile", items: ["Flutter", "Kotlin"] },
    { label: "DevOps", items: ["Docker", "Linux", "Nginx", "Proxmox VE", "Cloudflare Tunnel", "MinIO", "Git"] },
    { label: "Lainnya", items: ["n8n", "WAHA (WhatsApp HTTP API)", "Google Apps Script", "MikroTik"] },
  ],
  sections: ["projects", "education", "certificates"],
  publication: true,
  certificateOrder: ["aws", "ccna-ent", "ccna-intro"],
};

const infra: CvVariantData = {
  pdf: "CV_Feriman_IT_Infrastructure.pdf",
  headline: "IT Infrastructure & Network Engineer — MikroTik · Proxmox · Docker",
  summary:
    "IT Engineer yang mengelola jaringan dua unit sekolah (±1.000 perangkat) dan infrastruktur server self-hosted berbasis Proxmox VE dan Docker. Berpengalaman mengelola switch, access point, routing, dan QoS MikroTik, mengamankan akses layanan dengan Cloudflare Tunnel, serta mengotomasi operasional IT dengan n8n. Bersertifikat Cisco CCNAv7 dan AWS Cloud, dengan kemampuan membangun aplikasi internal sendiri.",
  experience: [
    {
      period: "Des 2025 - Sekarang",
      role: "IT Staff (Infrastructure & Development)",
      org: AL_FAKHIR,
      current: true,
      points: [
        SOLE_IT_STAFF,
        "Mengelola jaringan dua unit sekolah (±1.000 perangkat): switch, access point, routing, dan QoS MikroTik.",
        "Menjalankan server Proxmox VE dengan 6 container LXC dan 22 container Docker, mencakup frontend multi-portal, backend API, PostgreSQL, Redis, MinIO, n8n, dan gateway WhatsApp. Akses publik melalui Nginx dan Cloudflare Tunnel tanpa IP publik.",
        "Mengotomasi provisioning akun pengguna dengan n8n.",
        "Menyediakan dan memelihara layanan self-hosted yang dipakai ±600 siswa dan ±100 guru: LMS, presensi RFID/QR, e-voting OSIS, dan portal registrasi.",
      ],
    },
    {
      period: "2020 - Sekarang",
      role: "Freelance IT & Automation",
      org: "Freelance · Remote · Paruh waktu",
      current: true,
      points: [
        "Merancang jaringan dan membangun otomasi (n8n, WhatsApp, LLM) sesuai kebutuhan klien.",
        "Membangun dan men-deploy dashboard pembayaran untuk MI Unwanul Huda 1.",
        "Merawat server dan jaringan lokal SD & SMP Islam Modern Al-Fakhir secara paruh waktu sebelum bergabung penuh pada Desember 2025.",
      ],
    },
    SEA_TODAY,
  ],
  projects: [
    { name: "Infrastruktur jaringan & server dua unit sekolah", detail: "Proxmox, Docker, MikroTik, Cloudflare Tunnel" },
    { name: "OSALFA E-Voting (self-hosted di Proxmox)", url: "voting.smpialfakhir.sch.id" },
    { name: "Smart Home Voice Control", detail: "Arduino, ESP8266, Telegram Bot (SINTA 3)", url: "doi:10.33022/ijcs.v13i5.4398" },
  ],
  projectColumns: false,
  skills: [
    { label: "Jaringan", items: ["MikroTik", "routing", "QoS", "switch & access point", "Cisco (CCNAv7)"] },
    { label: "Server", items: ["Proxmox VE", "Linux", "Docker", "Nginx", "Redis", "MinIO", "Cloudflare Tunnel"] },
    { label: "Otomasi", items: ["n8n", "WAHA (WhatsApp HTTP API)", "Google Apps Script", "integrasi WhatsApp"] },
    { label: "Development", items: ["TypeScript", "Node.js", "Next.js", "PostgreSQL", "Flutter"] },
    { label: "Lainnya", items: ["Google Workspace"] },
  ],
  sections: ["certificates", "projects", "education"],
  publication: false,
  certificateOrder: ["ccna-ent", "ccna-intro", "aws"],
};

export const CV_VARIANTS: Record<CvVariant, CvVariantData> = { fullstack, infra };
