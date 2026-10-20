"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import SectionHeader from "@/components/SectionHeader";

const FACTS = [
  { label: "Periode", value: "2020 – 2024" },
  { label: "IPK", value: "3.29", unit: "/ 4.00" },
  { label: "Proyek Akhir", value: "A", unit: "nilai sempurna" },
];

const ORGANIZATIONS = [
  {
    period: "Des 2020 – Okt 2023",
    role: "Wakil Ketua Bidang PDD",
    org: "Himpunan Teknik Komputer, Universitas Amikom Yogyakarta",
    desc: "Memimpin divisi Pengembangan & Dokumentasi himpunan.",
  },
  {
    period: "2023",
    role: "Koordinator Dokumentasi",
    org: "Musyawarah Besar Kampus",
    desc: "Mengelola arsip, publikasi, dan dokumentasi resmi acara.",
  },
  {
    period: "2023",
    role: "Tim Pelaksana",
    org: "Lomba Cyber Security & Amikom Video Community",
    desc: "Mengoordinasi sisi teknis dan penyelenggaraan kompetisi tingkat kampus.",
  },
];

export default function Pendidikan() {
  useFadeUp();

  return (
    <section className="border-b border-bau-border flex-1" id="pendidikan">
      <SectionHeader label="Pendidikan" title="Latar" accent="belakang." />

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] border-t border-bau-border">
        {/* Pendidikan & publikasi */}
        <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-bau-border flex flex-col gap-6 fade-up">
          <div className="mb-2">
            <div className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-2">Pendidikan &amp; Publikasi</div>
            <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] tracking-[-0.02em]">
              Studi <em className="text-bau-muted">formal.</em>
            </h3>
          </div>
          <article className="bg-bau-white border border-bau-border">
            <div className="p-[28px_28px_24px] border-b border-bau-border">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] tracking-[-0.01em]">
                  Universitas Amikom Yogyakarta
                </h3>
                <span className="shrink-0 flex items-center gap-1.5 font-mono text-[11px] tracking-widest uppercase text-bau-green border border-bau-green/40 px-2 py-1">
                  <span className="w-[6px] h-[6px] rounded-full bg-bau-green" />
                  Lulus
                </span>
              </div>
              <p className="font-mono text-[11px] tracking-wider text-bau-muted">S1 Teknik Komputer</p>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-bau-border">
              {FACTS.map((f) => (
                <div key={f.label} className="p-[18px_28px]">
                  <dt className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-2">{f.label}</dt>
                  <dd className="font-serif text-[22px] leading-none">
                    {f.value}
                    {f.unit && <span className="font-mono text-[11px] text-bau-muted ml-1.5 tracking-wide">{f.unit}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="bg-bau-white border border-bau-border p-[22px_28px] flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.15] tracking-[-0.01em] mb-1.5">
                S1 Teknologi Pendidikan
              </h3>
              <p className="font-mono text-[11px] tracking-wider text-bau-muted">Fakultas Keguruan dan Ilmu Pendidikan</p>
            </div>
            <span className="shrink-0 flex items-center gap-1.5 font-mono text-[11px] tracking-widest uppercase text-bau-ink2 border border-bau-border px-2 py-1">
              <span className="w-[6px] h-[6px] rounded-full bg-bau-muted" />
              Berjalan
            </span>
          </article>

          <article className="bg-bau-ink text-bau-white p-[28px_28px_26px]">
            <div className="font-mono text-[11px] tracking-widest uppercase text-bau-green mb-4">Publikasi Ilmiah · SINTA 3</div>
            <h3 className="font-serif text-[clamp(1.2rem,1.8vw,1.5rem)] leading-[1.3] mb-4 relative">
              Sistem Kontrol Elektronik pada Rumah Pintar dengan Input Suara pada Module Pengenalan Suara V3 Berbasis IoT
            </h3>
            <p className="text-[14px] text-white/75 leading-[1.7] mb-5 max-w-[520px]">
              Rumah pintar yang dikontrol lewat perintah suara dan bot Telegram dari jarak jauh. Pada pengujian dengan suara pemilik, modul berhasil mengenali perintah dengan rata-rata 96,2%.
            </p>
            <div className="font-mono text-[11px] tracking-wider text-white/50 mb-5">
              Feriman &amp; Banu Santoso · The Indonesian Journal of Computer Science, Vol. 13 No. 5, Okt 2024
            </div>
            <a
              href="https://doi.org/10.33022/ijcs.v13i5.4398"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[11px] tracking-widest uppercase text-bau-white border-b border-bau-green pb-0.5 hover:text-bau-green transition-colors"
            >
              Baca artikel ↗
            </a>
            <a
              href="http://sinta.kemdiktisaintek.go.id/journals/profile/4997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-6 font-mono text-[11px] tracking-widest uppercase text-white/60 border-b border-white/30 pb-0.5 hover:text-bau-green transition-colors"
            >
              Jurnal di SINTA ↗
            </a>
          </article>

          <article className="bg-bau-white border border-bau-border p-[22px_28px]">
            <div className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-4">Sertifikat Pelatihan</div>
            <ul className="list-none p-0 divide-y divide-bau-border">
              {[
                "Cisco CCNA: Enterprise Networking, Security, and Automation",
                "AWS Cloud Computing: Full Stack Cloud Engineer",
              ].map((c) => (
                <li key={c} className="py-3 first:pt-0 last:pb-0 text-[14px] text-bau-ink">
                  {c}
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Organisasi */}
        <div className="p-6 md:p-12 bg-bau-bg2 fade-up">
          <div className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-2">Pengalaman Organisasi</div>
          <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] tracking-[-0.02em] mb-8">
            Peran <em className="text-bau-muted">Kepemimpinan.</em>
          </h3>
          <ol className="list-none p-0">
            {ORGANIZATIONS.map((o) => (
              <li key={o.role} className="grid grid-cols-[1px_1fr] gap-x-6 pb-8 last:pb-0">
                <div className="bg-bau-border w-px relative">
                  <span className="absolute -left-[3px] top-[7px] w-[7px] h-[7px] rounded-full bg-bau-ink" />
                </div>
                <div>
                  <div className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-1.5">{o.period}</div>
                  <div className="font-serif text-[20px] leading-[1.2] mb-1">{o.role}</div>
                  <div className="font-mono text-[11px] tracking-wider text-bau-muted mb-2">{o.org}</div>
                  <p className="text-[13px] text-bau-ink2 leading-[1.65]">{o.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
