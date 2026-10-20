export interface SkillGroup {
  name: string;
  desc: string;
  tags: string[];
}

/** Keahlian inti: tiga bidang yang paling saya kuasai dan paling sering saya kerjakan. */
export const CORE_SKILLS: SkillGroup[] = [
  {
    name: "Jaringan & Infrastruktur",
    desc: "Merancang, mengonfigurasi, dan merawat jaringan: routing, switching, failover, sampai troubleshooting.",
    tags: ["MikroTik", "Cisco", "Ubiquiti", "VLAN", "BGP", "QoS"],
  },
  {
    name: "Cloud & Server",
    desc: "Membangun private cloud dan menjalankan layanan sendiri di VPS maupun server fisik.",
    tags: ["Proxmox VE", "Docker", "PostgreSQL", "MinIO", "Nginx", "Cloudflare Tunnel", "Linux"],
  },
  {
    name: "Web & Sistem",
    desc: "Membuat aplikasi web dan sistem sekolah dari backend sampai tampilan, termasuk PWA dan aplikasi mobile.",
    tags: ["Next.js", "TypeScript", "Express / NestJS", "Prisma", "Supabase", "Flutter", "Kotlin", "Tailwind CSS"],
  },
];

/** Keahlian pendukung, ditampilkan ringkas. */
export const SUPPORT_SKILLS: SkillGroup[] = [
  {
    name: "Otomasi AI & WhatsApp",
    desc: "LLM (Gemini), Cloudflare Workers, n8n, dan gateway WhatsApp.",
    tags: ["Gemini API", "n8n", "Cloudflare Workers", "Python"],
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
