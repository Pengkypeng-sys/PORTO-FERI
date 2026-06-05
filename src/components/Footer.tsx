import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bau-ink border-t border-white/10 p-[18px_24px] md:p-[20px_48px] flex flex-col md:flex-row items-center justify-between gap-3 text-center mt-auto w-full">
      <span className="font-serif italic text-[15px] text-white/25">Feriman</span>
      <ul className="flex gap-6 list-none flex-wrap justify-center">
        {["Profil", "Skills", "Proyek", "Pendidikan", "Kontak"].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`} className="font-mono text-[8px] tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <span className="font-mono text-[8px] text-white/20 tracking-wider">© 2026 Feriman · Jakarta, Indonesia</span>
    </footer>
  );
}
