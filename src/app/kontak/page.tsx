"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import { SITE } from "@/data/site";
import SocialIcon from "@/components/SocialIcon";
import type { ReactNode } from "react";
import { FiDownload } from "react-icons/fi";

interface ContactRow {
  title: string;
  sub: string;
  href: string;
  icon: ReactNode;
}

const ICON_CLS = "w-4 h-4";

const ROWS: ContactRow[] = [
  ...SITE.socials.map((s) => ({ title: s.handle, sub: s.label, href: s.url, icon: <SocialIcon label={s.label} className={ICON_CLS} /> })),
  ...(SITE.cvUrl
    ? [{ title: "Unduh CV", sub: "Curriculum Vitae (PDF)", href: SITE.cvUrl, icon: <FiDownload className={ICON_CLS} aria-hidden /> }]
    : []),
];

export default function Kontak() {
  useFadeUp();

  return (
    <section className="bg-bau-ink grid grid-cols-1 md:grid-cols-2 flex-1" id="kontak">
      <div className="p-11 md:p-[56px_48px] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between gap-10 fade-up">
        <div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-white/50 mb-5">Kontak</div>
          <h2 className="font-serif text-[clamp(2.5rem,4.6vw,4.25rem)] text-bau-bg leading-[1] tracking-[-0.03em]">
            Tertarik bekerja sama? <em className="text-[#f5f3ee]/50">Mari bicara.</em>
          </h2>
          <a
            href={`mailto:${SITE.email}`}
            className="group inline-flex items-center gap-3 mt-8 font-serif text-[clamp(1.1rem,2vw,1.6rem)] text-bau-green break-all"
          >
            <span className="link-underline">{SITE.email}</span>
            <span className="font-mono text-[14px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
        <ul className="flex flex-col gap-3 list-none p-0">
          <li className="flex items-center gap-2.5 text-[13px] text-white/60">
            <span className="w-[7px] h-[7px] rounded-full bg-bau-green shrink-0" />
            Terbuka untuk peluang kerja di bidang IT: jaringan, developer, dan IT umum
          </li>
          <li className="flex items-center gap-2.5 text-[13px] text-white/60">
            <span className="text-[13px] text-white/40">⌖</span>
            {SITE.location}
          </li>
        </ul>
      </div>

      <div className="p-11 md:p-[56px_48px] flex flex-col justify-between gap-8 fade-up">
        <ul className="flex flex-col list-none p-0 border-b border-white/10">
          {ROWS.map((r) => (
            <li key={r.href} className="border-t border-white/10">
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-[18px] hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="grid place-items-center w-9 h-9 shrink-0 border border-white/15 text-white/70 group-hover:bg-bau-green group-hover:border-bau-green group-hover:text-bau-ink transition-colors">
                    {r.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[14px] text-white/85 mb-0.5 truncate">{r.title}</div>
                    <div className="font-mono text-[10px] text-white/45">{r.sub}</div>
                  </div>
                </div>
                <span className="text-white/40 text-[18px] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${SITE.email}`}
          className="bg-bau-white text-bau-ink p-[16px_22px] flex items-center justify-between hover:bg-bau-bg2 transition-colors"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">Mulai percakapan</span>
          <span className="font-mono text-[10px] tracking-widest uppercase">↗</span>
        </a>
      </div>
    </section>
  );
}
