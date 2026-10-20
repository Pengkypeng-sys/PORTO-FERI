import { SITE } from "@/data/site";
import SocialIcon from "@/components/SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-bau-ink border-t border-white/10 p-[18px_24px] md:p-[20px_48px] flex flex-col md:flex-row items-center justify-between gap-3 mt-auto w-full">
      <div className="flex items-center gap-4">
        <span className="font-serif italic text-[15px] text-white/40">{SITE.name}</span>
        <ul className="flex gap-3 list-none">
          {SITE.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} ${s.handle}`}
                className="grid place-items-center w-7 h-7 border border-white/15 text-white/50 hover:text-bau-ink hover:bg-bau-green hover:border-bau-green transition-colors"
              >
                <SocialIcon label={s.label} className="w-3.5 h-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <span className="font-mono text-[10px] text-white/40 tracking-wider">
        © {new Date().getFullYear()} {SITE.name} · {SITE.location}
      </span>
    </footer>
  );
}
