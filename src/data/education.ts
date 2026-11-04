export interface Organization {
  period: string;
  role: string;
  org: string;
  desc?: string;
}

/** Kepanitiaan kampus. Dipakai halaman Pendidikan dan CV Infrastruktur. */
export const COMMITTEES: Organization[] = [
  {
    period: "Sep 2022",
    role: "Anggota Panitia",
    org: "Ready for Challenge 2022, kegiatan Badan Siber dan Sandi Negara (BSSN) di Universitas Amikom Yogyakarta",
    desc: "Kegiatan keamanan siber yang diselenggarakan Badan Siber dan Sandi Negara di Universitas Amikom Yogyakarta, 20–21 September 2022.",
  },
  {
    period: "2022",
    role: "Dokumentasi & Live Streaming (OBS)",
    org: "ANNOFEST dan Amikom Video Competition (AVC), Universitas Amikom Yogyakarta",
    desc: "Divisi dokumentasi dan live streaming acara menggunakan OBS Studio.",
  },
];

export const ORGANIZATIONS: Organization[] = [
  {
    period: "Des 2020 – Okt 2023",
    role: "Wakil Ketua Bidang PDD",
    org: "Himpunan Teknik Komputer, Universitas Amikom Yogyakarta",
    desc: "Memimpin divisi Pengembangan & Dokumentasi himpunan.",
  },
  {
    period: "2023",
    role: "Koordinator Dokumentasi",
    org: "Musyawarah Besar Kampus",
    desc: "Mengelola arsip, publikasi, dan dokumentasi resmi acara.",
  },
  ...COMMITTEES,
];

export interface Certificate {
  name: string;
  issuer: string;
  period: string;
  detail?: string;
}

/** Keduanya sertifikat program pelatihan, bukan sertifikasi resmi hasil ujian AWS atau Cisco. */
export const CERTIFICATES: Certificate[] = [
  {
    name: "Program AWS Full Stack Cloud Engineer",
    issuer: "MSIB Angkatan 6 · SEAL",
    period: "Feb–Jun 2024 · 20 SKS",
    detail:
      "Materi: Cloud Computing, Infrastructure Automation & Management, Container Management & Orchestration, Logging & Monitoring, Operating System, Version Control System, dan Programming for DevOps.",
  },
  {
    name: "CCNAv7: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    period: "2022",
  },
  {
    name: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    period: "2021",
  },
];
