"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

export default function Kontak() {
  useFadeUp();

  return (
    <section className="bg-bau-ink grid grid-cols-1 md:grid-cols-2 flex-1" id="kontak">
      <div className="p-11 md:p-[56px_48px] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between fade-up">
        <div>
          <div className="font-mono text-[8px] tracking-widest uppercase text-white/35 mb-5">06 / Kontak</div>
          <h2 className="font-serif text-[40px] text-bau-bg leading-[1.05] mb-8">Mari bangun sesuatu yang <em className="italic text-[#f5f3ee]/45">solid.</em></h2>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5 text-[12px] text-white/50">
            <div className="w-[7px] h-[7px] rounded-full bg-bau-green shrink-0"></div>
            Terbuka untuk kolaborasi · Freelance · Remote
          </div>
          <div className="flex items-center gap-2.5 text-[12px] text-white/50">
            <span className="text-[12px] text-white/30">⌖</span>
            Jakarta, Indonesia
          </div>
          <div className="flex items-center gap-2.5 text-[12px] text-white/50">
            <span className="text-[12px] text-white/30">◎</span>
            IT Infrastructure · AI Automation · Cloud Engineering
          </div>
        </div>
      </div>
      <div className="p-11 md:p-[56px_48px] flex flex-col justify-between fade-up">
        <div className="flex flex-col mb-7">
          <a href="mailto:feriman.getup@gmail.com" className="flex items-center justify-between py-[18px] border-t border-white/10 hover:opacity-70 transition-opacity">
            <div>
              <div className="text-[13px] text-white/80 mb-0.5">feriman.getup@gmail.com</div>
              <div className="font-mono text-[9px] text-white/30">Email langsung · Respons cepat</div>
            </div>
            <span className="text-white/30 text-[18px]">↗</span>
          </a>
          <a href="https://portofol.io/feriman" className="flex items-center justify-between py-[18px] border-t border-b border-white/10 hover:opacity-70 transition-opacity" target="_blank">
            <div>
              <div className="text-[13px] text-white/80 mb-0.5">portofol.io/feriman</div>
              <div className="font-mono text-[9px] text-white/30">Website portfolio lengkap</div>
            </div>
            <span className="text-white/30 text-[18px]">↗</span>
          </a>
        </div>
        <a href="mailto:feriman.getup@gmail.com" className="bg-bau-white text-bau-ink p-[16px_22px] flex items-center justify-between hover:bg-bau-bg2 transition-colors">
          <span className="font-mono text-[9px] tracking-widest uppercase">Mulai percakapan</span>
          <span className="font-mono text-[9px] tracking-widest uppercase">↗</span>
        </a>
      </div>
    </section>
  );
}
