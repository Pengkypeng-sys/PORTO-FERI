"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import { SITE } from "@/data/site";
import SocialIcon from "@/components/SocialIcon";
import { FiArrowUpRight, FiGlobe, FiMail, FiMapPin } from "react-icons/fi";
import { EXPERIENCE } from "@/data/experience";

export default function Profil() {
  useFadeUp();

  return (
    <section className="grid grid-cols-1 md:grid-cols-[300px_1fr] border-b border-bau-border flex-1" id="profil">
      <div className="p-9 md:p-[48px_40px] border-b md:border-b-0 md:border-r border-bau-border bg-bau-bg2 flex flex-col fade-up">
        <div className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-3">Profil</div>
        <h2 className="font-serif text-[36px] leading-[1.05] tracking-[-0.02em]">Tentang <em className="text-bau-muted">Feriman.</em></h2>
        <p className="text-[15px] text-bau-ink2 leading-[1.75] mb-7 mt-4">
          Lulusan S1 Teknik Komputer Universitas Amikom Yogyakarta (IPK 3.29), berpengalaman sebagai Full Stack Developer dan IT Staff di bidang jaringan, server, dan pengembangan sistem.
        </p>
        <ul className="flex flex-col gap-4 mb-7 list-none p-0">
          {[
            { Icon: FiMail, text: SITE.email, sub: "Email", href: `mailto:${SITE.email}` },
            { Icon: FiMapPin, text: SITE.location.split(", ")[0], sub: SITE.location.split(", ")[1] ?? "" },
            { Icon: FiGlobe, text: SITE.website.label, sub: "Portofolio", href: SITE.website.url },
          ].map(({ Icon, text, sub, href }) => (
            <li key={sub} className="flex items-start gap-3">
              <span className="grid place-items-center w-8 h-8 shrink-0 border border-bau-border bg-bau-white text-bau-ink2">
                <Icon className="w-3.5 h-3.5" aria-hidden />
              </span>
              <div className="leading-[1.35] min-w-0">
                {href ? (
                  <a href={href} className="text-[13px] text-bau-ink break-all link-underline">{text}</a>
                ) : (
                  <div className="text-[13px] text-bau-ink">{text}</div>
                )}
                <div className="font-mono text-[10px] text-bau-muted">{sub}</div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col list-none p-0 border-t border-bau-border">
          {SITE.socials.map((s) => (
            <li key={s.label} className="border-b border-bau-border">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 py-3 hover:bg-bau-white transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="grid place-items-center w-8 h-8 border border-bau-border bg-bau-white text-bau-ink2 group-hover:bg-bau-ink group-hover:border-bau-ink group-hover:text-bau-white transition-colors">
                    <SocialIcon label={s.label} className="w-3.5 h-3.5" />
                  </span>
                  <span className="leading-[1.35]">
                    <span className="block text-[13px] text-bau-ink">{s.handle}</span>
                    <span className="block font-mono text-[10px] text-bau-muted">{s.label}</span>
                  </span>
                </span>
                <FiArrowUpRight className="w-4 h-4 text-bau-muted group-hover:text-bau-ink transition-colors" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-9 md:p-[48px_44px] fade-up">
        <div className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-3">Pengalaman</div>
        <div className="flex flex-col mt-5">
          {EXPERIENCE.map((ex, i) => (
            <div key={i} className="grid grid-cols-[112px_1px_1fr] gap-x-[22px] py-5 border-t border-bau-border">
              <span className={`font-mono text-[11px] pt-[5px] ${ex.current ? "text-bau-ink font-bold" : "text-bau-muted"}`}>
                {ex.period}
              </span>
              <div className="bg-bau-border w-px relative">
                <span
                  className={`absolute -left-[3px] top-[6px] w-[7px] h-[7px] rounded-full ${
                    ex.current ? "bg-bau-green ring-4 ring-bau-green/20" : "bg-bau-muted/50"
                  }`}
                />
              </div>
              <div>
                <p className={`font-serif text-[20px] leading-[1.2] mb-1 ${ex.current ? "text-bau-ink" : "text-bau-ink2"}`}>{ex.role}</p>
                <p className="font-mono text-[11px] text-bau-muted tracking-wider mb-3">{ex.org}</p>
                <ul className="list-none p-0 space-y-1">
                  {ex.points.map((pt) => (
                    <li
                      key={pt}
                      className="text-[14px] text-bau-ink2 pl-5 relative leading-[1.6] before:content-['→'] before:absolute before:left-0 before:text-bau-muted before:text-[11px] before:top-[3px]"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
