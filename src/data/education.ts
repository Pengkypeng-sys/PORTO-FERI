export interface Organization {
  period: string;
  role: string;
  org: string;
  desc: string;
}

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
  {
    period: "2023",
    role: "Tim Pelaksana",
    org: "Lomba Cyber Security & Amikom Video Community",
    desc: "Mengoordinasi sisi teknis dan penyelenggaraan kompetisi tingkat kampus.",
  },
];

export interface Certificate {
  name: string;
  issuer: string;
  period: string;
  detail?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    name: "AWS Certification: Full Stack Cloud Engineer",
    issuer: "Studi Independen Bersertifikat (MSIB) Angkatan 6 · SEAL",
    period: "Feb – Jun 2024",
    detail:
      "Materi (20 SKS): Cloud Computing, Infrastructure Automation & Management, Container Management & Orchestration, Logging & Monitoring, Operating System, Version Control System, dan Programming for DevOps.",
  },
  {
    name: "CCNAv7: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    period: "Sep 2022",
  },
  {
    name: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    period: "Agu 2021",
  },
];
