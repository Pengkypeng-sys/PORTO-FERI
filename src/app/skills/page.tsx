"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

export default function Skills() {
  useFadeUp();

  return (
    <section className="bg-bau-bg2 border-b border-bau-border flex-1" id="skills">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end p-[32px_24px_20px] md:p-[44px_48px_24px] gap-2 md:gap-0 fade-up">
        <div>
          <div className="font-mono text-[8px] tracking-widest uppercase text-bau-muted mb-3">03 / Kemampuan</div>
          <h2 className="font-serif text-[28px] leading-[1.1] mt-2">Technical <span className="text-bau-muted">Stack.</span></h2>
        </div>
        <span className="font-mono text-[9px] text-bau-muted">6 modul sistem · Tersertifikasi</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-bau-border">
        {[
          {
            name: "INFRASTRUCTURE",
            pips: 5,
            tags: ["MikroTik", "Cisco", "Ubiquiti", "VLAN", "BGP"],
            desc: "Konfigurasi dan pemeliharaan jaringan enterprise level, mencakup routing, switching, dan troubleshooting menggunakan MikroTik, Cisco, dan Ubiquiti.",
            borders: "border-b lg:border-b-0 border-r-0 lg:border-r"
          },
          {
            name: "CLOUD ENGINEERING",
            pips: 5,
            tags: ["Proxmox VE", "LXC", "Docker", "MinIO (S3)", "PostgreSQL"],
            desc: "Manajemen Private Cloud menggunakan Proxmox VE (LXC/VM), orkestrasi Docker, serta self-hosting layanan mandiri berskala enterprise seperti MinIO (Object Storage) dan PostgreSQL.",
            borders: "border-b border-r-0 lg:border-r"
          },
          {
            name: "AI AUTOMATION",
            pips: 4,
            tags: ["Gemini API", "Cloudflare Workers", "Python", "Node.js"],
            desc: "Mengintegrasikan API AI seperti Gemini dengan platform serverless Cloudflare Workers menggunakan Python dan Node.js untuk otomasi pipeline.",
            borders: "border-b lg:border-b"
          },
          {
            name: "FULL-STACK DEV",
            pips: 5,
            tags: ["Next.js 15", "TypeScript", "Prisma", "Redux", "Sanity CMS", "PWA"],
            desc: "Pengembangan web modern berbasis React dan Next.js dengan arsitektur scalable, state management Redux, integrasi Sanity CMS, backend Prisma, serta Progressive Web Apps (PWA).",
            borders: "border-b md:border-b-0 border-r-0 lg:border-r"
          },
          {
            name: "CYBERSECURITY",
            pips: 3,
            tags: ["Kali Linux", "Firewalls", "VPNs", "Access Control", "Auditing"],
            desc: "Implementasi keamanan jaringan enterprise, otomasi firewall, virtual private network (VPN), dan security auditing menggunakan Kali Linux.",
            borders: "border-b md:border-b-0 border-r-0 lg:border-r"
          },
          {
            name: "EDTECH & GOOGLE API",
            pips: 5,
            tags: ["Moodle 4.x", "Google Apps Script", "Google Workspace", "SSO OAuth"],
            desc: "Administrasi LMS Moodle skala besar, integrasi SSO Google Workspace, dan otomatisasi alur kerja menggunakan Google Apps Script.",
            borders: ""
          }
        ].map((sk, i) => (
          <div key={i} className={`p-[26px_30px] border-bau-border fade-up hover:bg-bau-white transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] group ${sk.borders} ${i % 2 === 0 ? "md:border-r lg:border-r" : ""}`}>
            <div className="font-mono text-[9px] tracking-[0.12em] uppercase font-bold text-bau-ink mb-3 group-hover:text-bau-green transition-colors">{sk.name}</div>
            <div className="flex gap-[3px] mb-3">
              {[1,2,3,4,5].map(p => (
                <div key={p} className={`w-5 h-[3px] transition-colors duration-500 ${p <= sk.pips ? 'bg-bau-ink group-hover:bg-bau-green' : 'bg-bau-bg3'}`}></div>
              ))}
            </div>
            <div className="flex flex-wrap gap-[5px] mb-3">
              {sk.tags.map(t => (
                <span key={t} className="font-mono text-[8px] py-[3px] px-2 border border-bau-border text-bau-muted bg-bau-white">{t}</span>
              ))}
            </div>
            <div className="text-[11.5px] text-bau-muted leading-[1.65]">{sk.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
