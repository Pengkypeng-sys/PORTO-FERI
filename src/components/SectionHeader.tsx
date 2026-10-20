interface SectionHeaderProps {
  label: string;
  title: string;
  accent: string;
  meta?: string;
}

/** Shared page header: small label above a serif title with a muted accent word. */
export default function SectionHeader({ label, title, accent, meta }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 p-[40px_24px_32px] md:p-[64px_48px_40px] fade-up">
      <div>
        <div className="font-mono text-[11px] tracking-widest uppercase text-bau-muted mb-4">{label}</div>
        <h2 className="font-serif text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-0.02em]">
          {title} <em className="text-bau-muted">{accent}</em>
        </h2>
      </div>
      {meta && <span className="font-mono text-[11px] tracking-wider text-bau-muted">{meta}</span>}
    </div>
  );
}
