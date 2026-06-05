"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

export default function Proyek() {
  useFadeUp();

  return (
    <section className="p-9 md:p-[48px] border-b border-bau-border flex-1" id="proyek">
      <div className="flex justify-between items-end mb-9 fade-up">
        <div>
          <div className="font-mono text-[8px] tracking-widest uppercase text-bau-muted mb-3">04 / Proyek & Pencapaian</div>
          <h2 className="font-serif text-[28px] leading-[1.1] mt-2">Studi Kasus <em className="italic text-bau-muted">Proyek.</em></h2>
        </div>
        <span className="font-mono text-[9px] text-bau-muted tracking-wider">ACTIVE / LIVE</span>
      </div>

      {[
        {
          idx: "01", name: "Portal & Registrasi SDI Al-Fakhir",
          desc: "Pengembangan sistem portal dan registrasi siswa dengan integrasi Google API. Menangani alur pendaftaran dari formulir hingga pelaporan data.",
          badge: "WEB APP\nLIVE",
          metric: "Website", metricSub: "sdialfakhir.sch.id",
          link: "https://www.sdialfakhir.sch.id/"
        },
        {
          idx: "02", name: "Al-Fakhir Admin Dashboard",
          desc: "Aplikasi PWA Dashboard Administrator untuk mengelola data siswa, terhubung secara real-time dengan sistem database produksi PostgreSQL.",
          badge: "PWA / ADMIN\nLIVE",
          metric: "Portal", metricSub: "Dashboard Vercel",
          link: "https://dashboard-alfakhir-seven.vercel.app/admin/admin"
        },
        {
          idx: "03", name: "Sewa HTKu Rental Platform",
          desc: "Platform penyedia layanan penyewaan walkie-talkie (HT) yang dioptimasi khusus untuk mendominasi SEO pada mesin pencari lokal.",
          badge: "SEO / RENTAL\nLIVE",
          metric: "Rental", metricSub: "sewahtku.com",
          link: "https://www.sewahtku.com/"
        },
        {
          idx: "04", name: "WhatsApp AI Gateway",
          desc: "Enterprise-grade conversational AI pipeline mengintegrasikan LLM untuk routing layanan pelanggan otomatis dan pembuatan respons.",
          badge: "AI / AUTOMATION\nACTIVE",
          metric: "3k+", metricSub: "MSG/DAY"
        },
        {
          idx: "05", name: "Fibernet Network Architecture",
          desc: "Sistem distribusi jaringan fiber optik high-availability dengan redundant failover dan manajemen bandwidth terpusat.",
          badge: "INFRASTRUCTURE\nACTIVE",
          metric: "99.9%", metricSub: "UPTIME"
        }
      ].map((pr, i) => {
        const Wrapper = pr.link ? "a" : "div";
        return (
          <Wrapper 
            key={i} 
            href={pr.link} 
            target={pr.link ? "_blank" : undefined}
            rel={pr.link ? "noopener noreferrer" : undefined}
            className="grid grid-cols-[36px_1fr] md:grid-cols-[40px_1fr_140px_110px] items-start gap-5 py-5 border-t border-bau-border fade-up hover:bg-bau-white transition-colors duration-500 ease-in-out px-2 md:-mx-2 rounded-sm group cursor-pointer"
          >
            <span className="font-mono text-[9px] text-bau-muted pt-1 group-hover:text-bau-ink transition-colors">{pr.idx}</span>
            <div>
              <div className="font-serif text-[17px] leading-[1.2] mb-[5px] text-bau-ink group-hover:text-bau-green transition-colors flex items-center gap-2">
                {pr.name}
                {pr.link && (
                  <span className="font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-bau-green">↗</span>
                )}
              </div>
              <div className="text-[12px] text-bau-ink2 leading-[1.65] mt-1 group-hover:text-bau-ink transition-colors">{pr.desc}</div>
            </div>
            <div className="hidden md:block font-mono text-[8px] tracking-widest uppercase text-bau-muted text-right pt-1 leading-[1.8] whitespace-pre-line group-hover:text-bau-ink transition-colors">
              {pr.badge}
            </div>
            <div className="hidden md:block text-right">
              <div className={`font-serif text-bau-ink leading-none text-[26px] ${pr.metric.length > 5 ? 'text-[20px]' : ''} group-hover:text-bau-green transition-colors`}>{pr.metric}</div>
              <div className="font-mono text-[8px] text-bau-muted mt-1 group-hover:text-bau-ink transition-colors">{pr.metricSub}</div>
            </div>
          </Wrapper>
        );
      })}
    </section>
  );
}
