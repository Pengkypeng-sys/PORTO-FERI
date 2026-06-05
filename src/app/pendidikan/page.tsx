"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

export default function Pendidikan() {
  useFadeUp();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-bau-border flex-1" id="pendidikan">
      <div className="p-9 md:p-[48px] border-b md:border-b-0 md:border-r border-bau-border fade-up">
        <div className="font-mono text-[8px] tracking-widest uppercase text-bau-muted mb-3">05 / Pendidikan</div>
        <h2 className="font-serif text-[28px] leading-[1.1] mt-2">Latar <em className="italic text-bau-muted">Belakang.</em></h2>
        <div className="bg-bau-white border border-bau-border p-[22px_24px] mt-5">
          <div className="font-serif text-[19px] mb-1">Universitas Amikom Yogyakarta</div>
          <div className="text-[12px] text-bau-muted mb-[14px] font-mono tracking-wider">S1 Teknik Komputer</div>
          {[
            { l: "Periode", r: "Nov 2020 – Des 2024" },
            { l: "Indeks Prestasi Kumulatif", r: "3.29 / 4.00" },
            { l: "Nilai Proyek Akhir", r: "A (Sempurna)" },
            { l: "Status", r: "Lulus ✓" }
          ].map((row, i) => (
            <div key={i} className="flex justify-between items-center py-[9px] border-t border-bau-border text-[12px]">
              <span className="text-bau-muted">{row.l}</span>
              <span className="font-semibold text-bau-ink">{row.r}</span>
            </div>
          ))}
        </div>
        <div className="bg-bau-ink text-bau-white p-[22px_24px] mt-4">
          <div className="font-mono text-[8px] tracking-widest uppercase text-white/40 mb-2.5">Publikasi Ilmiah</div>
          <div className="text-[12.5px] text-white/90 leading-[1.7]">Sistem Kontrol Elektronik pada Rumah Pintar Dengan Input Suara pada Module Pengenalan Suara V3 Berbasis IoT yang berhasil meningkatkan efisiensi pengelolaan perangkat rumah hingga 90%</div>
          <div className="font-mono text-[9px] text-white/40 mt-2.5">The Indonesian Journal of Computer Science · SINTA 3</div>
        </div>
      </div>
      <div className="p-9 md:p-[48px] bg-bau-bg2 fade-up">
        <div className="font-mono text-[8px] tracking-widest uppercase text-bau-muted mb-3">Pengalaman Organisasi</div>
        <h2 className="font-serif text-[28px] leading-[1.1] mt-2">Peran <em className="italic text-bau-muted">Kepemimpinan.</em></h2>
        <div className="mt-5">
          {[
            {
              title: "Wakil Ketua Bidang PDD",
              sub: "Himpunan Teknik Komputer, Universitas Amikom Yogyakarta\nDes 2020 – Okt 2023 · Memimpin divisi Pengembangan & Dokumentasi"
            },
            {
              title: "Koordinator Dokumentasi",
              sub: "Musyawarah Besar Kampus · 2023\nMengelola seluruh arsip, publikasi, dan dokumentasi resmi acara"
            },
            {
              title: "Tim Pelaksana",
              sub: "Lomba Cyber Security & Amikom Video Community · 2023\nKoordinasi teknis dan penyelenggaraan kompetisi tingkat kampus"
            }
          ].map((org, i) => (
            <div key={i} className="flex gap-[14px] items-start py-[14px] border-t border-bau-border">
              <span className="text-[15px] text-bau-muted shrink-0 pt-0.5">◈</span>
              <div>
                <div className="text-[13px] font-semibold text-bau-ink mb-1">{org.title}</div>
                <div className="text-[11.5px] text-bau-muted leading-normal whitespace-pre-line">{org.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
