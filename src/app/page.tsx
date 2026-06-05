"use client";

import dynamic from "next/dynamic";
import { useFadeUp } from "@/hooks/useFadeUp";

const Lanyard = dynamic(() => import("@/components/Lanyard"), { ssr: false });

export default function Home() {
  useFadeUp();

  return (
    <>
      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-bau-border flex-1 min-h-[440px]">
        <div className="p-8 md:p-14 flex flex-col justify-between border-b md:border-b-0 md:border-r border-bau-border fade-up">
          <div>
            <div className="flex gap-1.5 flex-wrap mb-8">
              <span className="font-mono text-[8px] tracking-widest uppercase py-1.5 px-3 border border-bau-ink text-bau-white bg-bau-ink">
                IT Infrastructure
              </span>
              {["Cloud Engineering", "AI Automation", "Network", "Full-Stack Dev"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[8px] tracking-widest uppercase py-1.5 px-3 border border-bau-border text-bau-muted bg-bau-white hover:bg-bau-ink hover:text-bau-white hover:border-bau-ink cursor-default transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-[44px] md:text-[62px] leading-[0.93] tracking-[-2px] mb-6">
              Infra<br />
              <em className="italic text-bau-muted">structure</em><br />
              for the<br />
              AI Era.
            </h1>
            <p className="text-[13px] text-bau-ink2 leading-[1.75] max-w-[380px] mb-9">
              Seorang IT Infrastructure Engineer dengan fokus pada arsitektur jaringan, otomasi AI, dan komputasi awan. Berpengalaman dalam mendesain sistem berskala enterprise, merutekan infrastruktur server, dan membangun alur kerja cerdas yang berorientasi pada efisiensi.
            </p>
          </div>
          <div className="flex items-center gap-5 border-t border-bau-border pt-4 flex-wrap">
            <span className="font-mono text-[8px] tracking-widest uppercase text-bau-muted">
              Jakarta, <strong className="text-bau-ink font-bold">Indonesia</strong>
            </span>
            <span className="font-mono text-[8px] tracking-widest uppercase text-bau-muted">
              Est. <strong className="text-bau-ink font-bold">2020</strong>
            </span>
            <span className="font-mono text-[8px] tracking-widest uppercase text-bau-muted">
              AI <strong className="text-bau-ink font-bold">Automation</strong>
            </span>
            <span className="font-mono text-[8px] tracking-widest uppercase text-bau-muted">
              Cloud <strong className="text-bau-ink font-bold">Orchestration</strong>
            </span>
          </div>
        </div>

        <div className="bg-bau-bg2 grid grid-rows-[1fr_auto] fade-up">
          <div className="p-9 flex items-center justify-center relative border-b border-bau-border h-full min-h-[440px] md:min-h-0">
            <span className="absolute top-[18px] right-[20px] font-mono text-[8px] text-bau-muted tracking-widest animate-float z-20 pointer-events-none">
              01 / IDENTITY
            </span>
            
            <div className="absolute inset-0 z-10 w-full h-full overflow-visible">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>

            <span className="absolute bottom-[18px] left-[20px] font-mono text-[8px] text-bau-muted tracking-wider z-20 pointer-events-none">
              FERIMAN · TEKNIK KOMPUTER
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="p-[18px_20px] border-r border-bau-border">
              <div className="font-serif text-[28px] leading-none mb-1">99.9%</div>
              <div className="font-mono text-[8px] uppercase tracking-widest text-bau-muted leading-[1.4]">
                Network<br />Uptime
              </div>
            </div>
            <div className="p-[18px_20px] border-r-0 md:border-r border-bau-border">
              <div className="font-serif text-[28px] leading-none mb-1">3k+</div>
              <div className="font-mono text-[8px] uppercase tracking-widest text-bau-muted leading-[1.4]">
                MSG/DAY<br />AI Gateway
              </div>
            </div>
            <div className="p-[18px_20px] border-r border-bau-border border-t md:border-t-0">
              <div className="font-serif text-[28px] leading-none mb-1">500+</div>
              <div className="font-mono text-[8px] uppercase tracking-widest text-bau-muted leading-[1.4]">
                STUDENTS<br />Moodle LMS
              </div>
            </div>
            <div className="p-[18px_20px] border-t md:border-t-0">
              <div className="font-serif text-[28px] leading-none mb-1">6</div>
              <div className="font-mono text-[8px] uppercase tracking-widest text-bau-muted leading-[1.4]">
                VPS<br />Managed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-bau-ink py-2.5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((set) => (
            <div key={set} className="flex">
              {["Infrastructure", "Cloud Engineering", "AI Automation", "MikroTik", "AWS Cloud", "Network Architecture", "Next.js", "Docker & VPS", "Moodle LMS"].map((item, idx) => (
                <div key={idx} className="flex items-center hover:scale-105 transition-transform duration-300 cursor-default">
                  <span className="font-mono text-[9px] tracking-widest uppercase text-white/85 px-5 hover:text-bau-green transition-colors">{item}</span>
                  <span className="font-mono text-[9px] text-white/25 px-0.5">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
