"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useFadeUp } from "@/hooks/useFadeUp";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

const Lanyard = dynamic(() => import("@/components/Lanyard"), { ssr: false });

const FEATURED = PROJECTS.slice(0, 3);

const OFFERS = [
  { title: "Jaringan & server", desc: "Perancangan jaringan, private cloud, dan perawatan server." },
  { title: "Operasional IT & otomasi", desc: "Administrasi sistem dan layanan IT, serta otomasi dengan n8n dan AI." },
  { title: "Pengembangan sistem & web", desc: "LMS, portal registrasi, dan aplikasi web atau PWA." },
];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Home() {
  useFadeUp();

  return (
    <>
      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-bau-border flex-1 min-h-[520px]">
        <div className="relative p-8 md:p-14 flex flex-col justify-between border-b md:border-b-0 md:border-r border-bau-border overflow-hidden">
          <div className="bg-blueprint absolute inset-0 pointer-events-none" aria-hidden />

          <div className="relative pt-4">
            <p className="hero-in font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-6" style={delay(0)}>
              Full Stack Developer · IT Staff · Jaringan
            </p>
            <h1 className="font-serif text-[clamp(3rem,5.6vw,5.75rem)] leading-[0.95] tracking-[-0.035em] mb-8">
              <span className="line-mask"><span style={delay(100)}>Infrastruktur</span></span>
              <span className="line-mask"><span style={delay(190)}>IT yang bekerja</span></span>
              <span className="line-mask">
                <span className="text-bau-muted" style={delay(280)}>
                  diam-diam<span className="text-bau-green">.</span>
                </span>
              </span>
            </h1>

            <p className="hero-in text-[16px] text-bau-ink2 leading-[1.7] max-w-[460px] mb-9" style={delay(420)}>
              Saya <strong className="text-bau-ink font-semibold">Feriman</strong>, Full Stack Developer &amp; IT Staff dengan pengalaman mengelola jaringan sekolah dan membangun aplikasi seperti LMS, pembayaran, dan presensi. <strong className="text-bau-ink font-semibold">Sedang mencari pekerjaan</strong> di bidang IT: jaringan, developer, atau IT umum.
            </p>

            <div className="hero-in flex gap-3 flex-wrap" style={delay(540)}>
              <Link
                href="/proyek"
                className="group font-mono text-[11px] tracking-widest uppercase py-3.5 px-6 bg-bau-ink text-bau-white border border-bau-ink hover:bg-bau-green hover:border-bau-green transition-colors"
              >
                Lihat Proyek <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/kontak"
                className="font-mono text-[11px] tracking-widest uppercase py-3.5 px-6 border border-bau-ink text-bau-ink hover:bg-bau-ink hover:text-bau-white transition-colors"
              >
                Hubungi Saya
              </Link>
              {SITE.cvUrl && (
                <a
                  href={SITE.cvUrl}
                  download="CV_Feriman.pdf"
                  className="font-mono text-[11px] tracking-widest uppercase py-3.5 px-6 border border-bau-border text-bau-ink2 hover:border-bau-ink hover:text-bau-ink transition-colors"
                >
                  Unduh CV ↓
                </a>
              )}
            </div>
          </div>

          <p className="hero-in relative mt-12 pt-5 border-t border-bau-border font-mono text-[11px] tracking-widest uppercase text-bau-muted" style={delay(680)}>
            {SITE.location} · {SITE.status}
          </p>
        </div>

        <div className="hero-in relative bg-bau-bg2 min-h-[460px]" style={delay(250)}>
          <div className="absolute inset-0 z-10">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
          <span className="absolute bottom-[18px] right-[20px] font-mono text-[11px] text-bau-muted tracking-wider z-20 pointer-events-none hidden md:block">
            ↕ tarik kartunya
          </span>
        </div>
      </section>

      {/* PROYEK PILIHAN */}
      <section className="border-b border-bau-border" aria-labelledby="home-projects">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-3 p-[48px_24px_28px] md:p-[72px_56px_36px] fade-up">
          <h2 id="home-projects" className="font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.02em]">
            Proyek <em className="text-bau-muted">pilihan.</em>
          </h2>
          <Link href="/proyek" className="font-mono text-[11px] tracking-widest uppercase text-bau-ink link-underline self-start md:self-auto">
            Semua proyek ↗
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-px bg-bau-border border-t border-bau-border md:h-[560px]">
          {FEATURED.map((pr, i) => (
            <Link
              key={pr.id}
              href="/proyek"
              className={`group relative overflow-hidden bg-bau-ink min-h-[240px] fade-up ${i === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-2"}`}
            >
              <Image
                src={pr.image}
                alt={`Tampilan proyek ${pr.name}`}
                fill
                sizes={i === 0 ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-bau-ink to-transparent ${
                  i === 0 ? "from-5% via-bau-ink/45 via-30%" : "from-20% via-bau-ink/75 via-50%"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-bau-white">
                <div className="font-mono text-[11px] tracking-widest text-white/65 mb-2">{pr.status}</div>
                <h3 className={`font-serif leading-[1.1] ${i === 0 ? "text-[28px] md:text-[34px]" : "text-[21px]"}`}>{pr.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* YANG BISA SAYA BANTU */}
      <section className="bg-bau-bg2 border-b border-bau-border" aria-labelledby="home-offers">
        <div className="p-[48px_24px_28px] md:p-[72px_56px_36px] fade-up">
          <h2 id="home-offers" className="font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.02em]">
            Bidang yang <em className="text-bau-muted">saya kerjakan.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bau-border border-t border-bau-border">
          {OFFERS.map((o) => (
            <div key={o.title} className="bg-bau-bg2 p-[28px_28px_32px] md:p-[36px_40px_44px] fade-up">
              <h3 className="font-serif text-[22px] leading-[1.2] mb-2">{o.title}</h3>
              <p className="text-[14px] text-bau-ink2 leading-[1.7]">{o.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-[24px_24px_32px] md:p-[28px_56px_40px] flex items-center gap-4 flex-wrap border-t border-bau-border fade-up">
          <Link href="/skills" className="font-mono text-[11px] tracking-widest uppercase text-bau-ink link-underline">
            Lihat keahlian ↗
          </Link>
          <Link href="/kontak" className="font-mono text-[11px] tracking-widest uppercase text-bau-ink link-underline">
            Hubungi saya ↗
          </Link>
        </div>
      </section>
    </>
  );
}
