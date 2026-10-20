/**
 * Teks khusus CV. Pengalaman, organisasi, sertifikat, dan kontak diambil dari modul data lain
 * (experience.ts, education.ts, site.ts) supaya CV dan situs selalu sama.
 */
export const CV = {
  fullName: "Feriman, S.Kom.",
  headline: "IT Staff — Jaringan, Server & Aplikasi Internal",
  summary:
    "IT Staff yang mengelola jaringan, server, dan aplikasi internal. Lulusan S1 Teknik Komputer dengan sertifikat pelatihan Cisco CCNA dan AWS Cloud Computing. Menjalankan server Proxmox self-hosted, serta membangun aplikasi presensi, pembayaran, dan e-voting dengan bantuan AI coding assistant. Sedang mencari pekerjaan di bidang IT: jaringan, server, atau developer.",
  education: [
    {
      title: "S1 Teknik Komputer",
      period: "Nov 2020 – Jan 2025",
      org: "Universitas Amikom Yogyakarta · IPK 3,29 / 4,00",
      points: [
        "Tugas akhir: smart home IoT berbasis perintah suara, akurasi 96,2%, nilai A.",
        "Publikasi: Feriman & Banu Santoso (2024), The Indonesian Journal of Computer Science, Vol. 13 No. 5 (SINTA 3), doi:10.33022/ijcs.v13i5.4398.",
      ],
    },
    {
      title: "S1 Teknologi Pendidikan (FKIP)",
      period: "Sedang berjalan",
      org: "",
      points: [] as string[],
    },
  ],
  skills: {
    core: ["MikroTik", "Proxmox VE", "Docker", "Linux", "Cloudflare Tunnel", "PostgreSQL", "TypeScript", "Next.js", "n8n"],
    support: ["Nginx", "MinIO", "Express/NestJS", "Prisma", "Flutter", "Kotlin", "Google Workspace", "Apps Script"],
  },
} as const;
