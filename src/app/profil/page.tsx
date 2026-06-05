"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

export default function Profil() {
  useFadeUp();

  return (
    <section className="grid grid-cols-1 md:grid-cols-[300px_1fr] border-b border-bau-border flex-1" id="profil">
      <div className="p-9 md:p-[48px_40px] border-b md:border-b-0 md:border-r border-bau-border bg-bau-bg2 flex flex-col fade-up">
        <div className="font-mono text-[8px] tracking-widest uppercase text-bau-muted mb-3">02 / Profil</div>
        <h2 className="font-serif text-[28px] leading-[1.1]">Tentang <em className="italic text-bau-muted">Feri.</em></h2>
        <p className="text-[12.5px] text-bau-ink2 leading-[1.8] mb-6 mt-4">
          Saya Feriman. Seorang IT Infrastructure Engineer dengan fokus pada arsitektur jaringan, otomasi AI, dan komputasi awan. Berpengalaman dalam mendesain sistem berskala enterprise, merutekan infrastruktur server, dan membangun alur kerja cerdas yang berorientasi pada efisiensi.
        </p>
        <div className="flex flex-col gap-2.5 mb-6">
          {[
            { icon: "✉", text: "feriman.getup@gmail.com", sub: "Email utama" },
            { icon: "⌖", text: "Jakarta", sub: "Indonesia" },
            { icon: "◎", text: "portofol.io/feriman", sub: "Website portfolio" }
          ].map((c, i) => (
            <div key={i} className="flex items-start gap-2.5 text-[12px] text-bau-ink2">
              <span className="text-[13px] text-bau-muted mt-px shrink-0">{c.icon}</span>
              <div className="leading-[1.4]">
                <div>{c.text}</div>
                <div className="text-[10px] text-bau-muted">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-bau-border pt-5 mt-1">
          <div className="font-mono text-[8px] tracking-[0.12em] uppercase text-bau-muted mb-3">Sertifikasi & Fokus</div>
          <div className="flex gap-2.5 py-2.5 border-b border-bau-border items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-bau-ink shrink-0 mt-[5px]"></div>
            <div>
              <div className="text-[12.5px] font-semibold text-bau-ink mb-0.5">Network Architecture</div>
              <div className="text-[11px] text-bau-muted">Enterprise Networking & Routing</div>
            </div>
          </div>
          <div className="flex gap-2.5 py-2.5 border-b border-bau-border items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-bau-ink shrink-0 mt-[5px]"></div>
            <div>
              <div className="text-[12.5px] font-semibold text-bau-ink mb-0.5">Cloud Orchestration</div>
              <div className="text-[11px] text-bau-muted">VPS, AWS, & Proxmox</div>
            </div>
          </div>
          <div className="flex gap-2.5 py-2.5 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-bau-ink shrink-0 mt-[5px]"></div>
            <div>
              <div className="text-[12.5px] font-semibold text-bau-ink mb-0.5">AI Automation Workflows</div>
              <div className="text-[11px] text-bau-muted">LLM Integration & Scripting</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-9 md:p-[48px_44px] fade-up">
        <div className="font-mono text-[8px] tracking-widest uppercase text-bau-muted mb-3">Riwayat Pengalaman</div>
        <div className="flex flex-col mt-5">
          <div className="grid grid-cols-[80px_1px_1fr] gap-x-[22px] py-5 border-t border-bau-border">
            <span className="font-mono text-[10px] text-bau-ink font-bold pt-[3px]">Sekarang</span>
            <div className="bg-bau-border w-px"></div>
            <div>
              <p className="font-serif text-[16px] leading-[1.2] mb-[3px] text-bau-ink">AI Infrastructure Consultant</p>
              <p className="font-mono text-[9px] text-bau-muted tracking-wider mb-2">Freelance · Remote · Enterprise Clients</p>
              <ul className="list-none p-0 space-y-1">
                <li className="text-[12px] text-bau-ink2 pl-4 relative leading-[1.55] before:content-['→'] before:absolute before:left-0 before:text-bau-muted before:text-[10px] before:top-1">
                  Mendesain sistem jaringan yang scalable dan mengintegrasikan pipeline otomasi AI untuk klien enterprise.
                </li>
                <li className="text-[12px] text-bau-ink2 pl-4 relative leading-[1.55] before:content-['→'] before:absolute before:left-0 before:text-bau-muted before:text-[10px] before:top-1">
                  Fokus pada efisiensi sistem dan keandalan tinggi (high availability).
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-[80px_1px_1fr] gap-x-[22px] py-5 border-t border-bau-border">
            <span className="font-mono text-[10px] text-bau-muted pt-[3px]">2023 - 2024</span>
            <div className="bg-bau-border w-px"></div>
            <div>
              <p className="font-serif text-[16px] leading-[1.2] mb-[3px] text-bau-ink2">IT Operations & Network Lead</p>
              <p className="font-mono text-[9px] text-bau-muted tracking-wider mb-2">Educational Platforms</p>
              <ul className="list-none p-0 space-y-1">
                <li className="text-[12px] text-bau-ink2 pl-4 relative leading-[1.55] before:content-['→'] before:absolute before:left-0 before:text-bau-muted before:text-[10px] before:top-1">
                  Mengelola 99.9% uptime untuk platform edukasi inti.
                </li>
                <li className="text-[12px] text-bau-ink2 pl-4 relative leading-[1.55] before:content-['→'] before:absolute before:left-0 before:text-bau-muted before:text-[10px] before:top-1">
                  Melakukan deploy infrastruktur VPS cloud dan mengotomasi administrasi server.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-[80px_1px_1fr] gap-x-[22px] py-5 border-t border-bau-border">
            <span className="font-mono text-[10px] text-bau-muted pt-[3px]">2020 - 2023</span>
            <div className="bg-bau-border w-px"></div>
            <div>
              <p className="font-serif text-[16px] leading-[1.2] mb-[3px] text-bau-ink2">System Administrator</p>
              <p className="font-mono text-[9px] text-bau-muted tracking-wider mb-2">Local Networks & Physical Servers</p>
              <ul className="list-none p-0 space-y-1">
                <li className="text-[12px] text-bau-ink2 pl-4 relative leading-[1.55] before:content-['→'] before:absolute before:left-0 before:text-bau-muted before:text-[10px] before:top-1">
                  Memelihara server fisik dan mengorkestrasi lingkungan jaringan lokal.
                </li>
                <li className="text-[12px] text-bau-ink2 pl-4 relative leading-[1.55] before:content-['→'] before:absolute before:left-0 before:text-bau-muted before:text-[10px] before:top-1">
                  Menjamin keamanan dan kelancaran arus lalu lintas jaringan dasar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
