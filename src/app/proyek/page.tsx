"use client";

import Image from "next/image";
import { useFadeUp } from "@/hooks/useFadeUp";
import SectionHeader from "@/components/SectionHeader";
import { PROJECTS, MORE_PROJECTS, BUILD_LABEL, type Project } from "@/data/projects";

function ProjectCard({ pr, priority = false, wide = false }: { pr: Project; priority?: boolean; wide?: boolean }) {
  const feat = pr.featured;
  // Featured and "wide" (odd one out in the 2-column grid) cards use the side-by-side layout.
  const split = feat || wide;
  const body = (
    <>
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-bau-bg2 border-b border-bau-border ${
          split ? `lg:aspect-auto ${feat ? "lg:min-h-[440px]" : "lg:min-h-[340px]"} lg:border-b-0 lg:border-r` : ""
        }`}
      >
        <Image
          src={pr.image}
          alt={`Tampilan proyek ${pr.name}`}
          fill
          priority={priority}
          sizes={split ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          className={`transition-transform duration-700 ease-out group-hover:scale-[1.04] object-cover object-top`}
        />
      </div>
      <div className={`flex flex-col flex-1 ${split ? "p-[24px_24px_26px] lg:p-[44px_44px_40px]" : "p-[20px_22px_22px]"}`}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className={`font-serif leading-[1.15] text-bau-ink group-hover:text-bau-green transition-colors ${feat ? "text-[28px] lg:text-[36px] tracking-[-0.02em]" : "text-[19px]"}`}>
            {pr.name}
          </h3>
          {pr.link && (
            <span className="font-mono text-[14px] text-bau-muted group-hover:text-bau-green transition-colors" aria-hidden>
              ↗
            </span>
          )}
        </div>
        <p className={`text-bau-ink2 mb-5 ${feat ? "text-[15px] leading-[1.75]" : "text-[14px] leading-[1.7]"}`}>{pr.desc}</p>
        {pr.stack && (
          <ul className="flex flex-wrap gap-1.5 list-none p-0 mb-6">
            {pr.stack.map((t) => (
              <li key={t} className="font-mono text-[11px] py-1 px-2.5 border border-bau-border text-bau-ink2 bg-bau-white">
                {t}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto border-t border-bau-border pt-4 flex items-center justify-between gap-3 flex-wrap">
          <span className="font-mono text-[11px] tracking-widest uppercase text-bau-muted">{pr.status}</span>
          {pr.build && (
            <span className="font-mono text-[10px] tracking-wider text-bau-ink2 border border-bau-border bg-bau-white px-2 py-0.5">
              {BUILD_LABEL[pr.build]}
            </span>
          )}
        </div>
      </div>
    </>
  );

  const cls =
    "group flex flex-col bg-bau-bg hover:bg-bau-white transition-colors duration-500 fade-up";
  const layout = split ? `${cls} md:col-span-2 lg:grid lg:grid-cols-[1.35fr_1fr]` : cls;

  return pr.link ? (
    <a href={pr.link} target="_blank" rel="noopener noreferrer" className={layout}>
      {body}
    </a>
  ) : (
    <div className={layout}>{body}</div>
  );
}

export default function Proyek() {
  useFadeUp();

  return (
    <section className="border-b border-bau-border flex-1" id="proyek">
      <SectionHeader label="Proyek" title="Yang sudah" accent="berjalan." />

      <div className="p-[0_24px_32px] md:p-[0_48px_40px] fade-up">
        <p className="text-[14px] text-bau-ink2 leading-[1.7] max-w-[760px] border-l-2 border-bau-green pl-4">
          Proyek perangkat lunak di bawah saya kerjakan sendiri bersama AI coding assistant. Bagian saya: merancang
          kebutuhan dan alur, mengintegrasikan, men-deploy, lalu mengoperasikannya di lingkungan nyata.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bau-border border-t border-bau-border">
        {PROJECTS.map((pr, i) => (
          <ProjectCard
            key={pr.id}
            pr={pr}
            priority={i < 3}
            wide={!pr.featured && i === PROJECTS.length - 1 && (PROJECTS.length - 1) % 2 === 1}
          />
        ))}
      </div>

      <div className="p-[40px_24px_48px] md:p-[56px_48px_64px] bg-bau-bg2 border-t border-bau-border">
        <h3 className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-8 fade-up">Proyek lainnya</h3>
        <ul className="list-none p-0">
          {MORE_PROJECTS.map((m) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <span className="font-serif text-[21px] leading-[1.2] group-hover:text-bau-green transition-colors">{m.name}</span>
                  <span className="font-mono text-[11px] tracking-widest uppercase text-bau-muted shrink-0 pt-1 text-right">
                    {m.status}
                    {m.build && <> · {BUILD_LABEL[m.build]}</>}
                  </span>
                </div>
                <p className="text-[14px] text-bau-ink2 leading-[1.7] max-w-[760px] mb-3">{m.desc}</p>
                <p className="font-mono text-[11px] text-bau-muted">{m.stack.join(" · ")}</p>
              </>
            );
            return (
              <li key={m.id} className="border-t border-bau-border fade-up">
                {m.link ? (
                  <a href={m.link} target="_blank" rel="noopener noreferrer" className="group block py-6">
                    {inner}
                  </a>
                ) : (
                  <div className="group py-6">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
