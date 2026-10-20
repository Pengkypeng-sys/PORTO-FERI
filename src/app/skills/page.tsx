"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import SectionHeader from "@/components/SectionHeader";
import { CORE_SKILLS, SUPPORT_SKILLS } from "@/data/skills";

export default function Skills() {
  useFadeUp();

  return (
    <section className="border-b border-bau-border flex-1" id="skills">
      <SectionHeader label="Keahlian" title="Yang paling saya" accent="kuasai." />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bau-border border-t border-bau-border">
        {CORE_SKILLS.map((sk) => (
          <article key={sk.name} className="bg-bau-bg p-[32px_32px_36px] md:p-[40px_40px_48px] fade-up flex flex-col">
            <h3 className="font-serif text-[26px] leading-[1.15] tracking-[-0.01em] mb-3">{sk.name}</h3>
            <p className="text-[14.5px] text-bau-ink2 leading-[1.7] mb-6">{sk.desc}</p>
            <ul className="flex flex-wrap gap-1.5 mt-auto list-none p-0">
              {sk.tags.map((t) => (
                <li key={t} className="font-mono text-[11px] py-1 px-2.5 border border-bau-border text-bau-ink2 bg-bau-white">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="bg-bau-bg2 border-t border-bau-border p-[40px_24px_48px] md:p-[56px_48px_64px]">
        <h3 className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-8 fade-up">Keahlian pendukung</h3>
        <ul className="list-none p-0 grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {SUPPORT_SKILLS.map((sk) => (
            <li key={sk.name} className="py-5 border-t border-bau-border fade-up">
              <div className="font-serif text-[19px] leading-[1.2] mb-1">{sk.name}</div>
              <p className="text-[13.5px] text-bau-ink2 leading-[1.65] mb-2">{sk.desc}</p>
              <p className="font-mono text-[11px] text-bau-muted">{sk.tags.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
