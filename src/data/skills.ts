export interface SkillGroup {
  name: string;
  desc: string;
  tags: string[];
}

/** Keahlian inti: tiga bidang yang paling saya kuasai dan paling sering saya kerjakan. */
export const CORE_SKILLS: SkillGroup[] = [
  {
    name: "Web & Sistem",
    desc: "Membuat aplikasi web dan sistem sekolah dari backend sampai tampilan, termasuk PWA dan aplikasi mobile.",
    tags: ["React", "Next.js", "TypeScript", "Express / NestJS", "Prisma", "Supabase", "Flutter", "Kotlin", "Tailwind CSS"],
  },
  {
    name: "Cloud & Server",
    desc: "Membangun private cloud dan menjalankan layanan sendiri di VPS maupun server fisik.",
    tags: ["Proxmox VE", "Docker", "PostgreSQL", "Redis", "MinIO", "Nginx", "Cloudflare Tunnel", "Linux"],
  },
  {
    name: "Jaringan & Infrastruktur",
    desc: "Merancang, mengonfigurasi, dan merawat jaringan: routing, switching, failover, sampai troubleshooting.",
    tags: ["MikroTik", "Cisco", "VLAN", "QoS"],
  },
];

/** Keahlian pendukung, ditampilkan ringkas. */
export const SUPPORT_SKILLS: SkillGroup[] = [
  {
    name: "Otomasi & WhatsApp",
    desc: "n8n, Cloudflare Workers, gateway WhatsApp, dan integrasi LLM (Gemini).",
    tags: ["n8n", "WAHA (WhatsApp HTTP API)", "Cloudflare Workers", "Gemini API", "Python"],
  },
  {
    name: "Keamanan Jaringan",
    desc: "Firewall, VPN, kontrol akses, dan pengujian dengan Kali Linux.",
    tags: ["Firewall", "VPN", "Kali Linux"],
  },
  {
    name: "EdTech & Google API",
    desc: "Pengembangan LMS sekolah, SSO Google Workspace, dan otomasi dengan Apps Script.",
    tags: ["LMS", "Google Workspace", "Apps Script"],
  },
  {
    name: "IoT",
    desc: "Kontrol perangkat berbasis suara, hasil risetnya terbit di jurnal SINTA 3.",
    tags: ["IoT", "Arduino", "Voice Recognition"],
  },
  {
    name: "Growth YouTube",
    desc: "Strategi konten: subscriber SEA Today naik dari 40.000 ke 80.000.",
    tags: ["Content Strategy"],
  },
  {
    name: "Kepemimpinan",
    desc: "Memimpin divisi dokumentasi himpunan mahasiswa dan mengoordinasi acara kampus.",
    tags: ["Tim", "Event", "Dokumentasi"],
  },
];
