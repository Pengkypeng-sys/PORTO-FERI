"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/data/nav";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bau-bg/90 border-b border-bau-border px-6 md:px-12 flex items-center justify-between h-[64px] sticky top-0 z-50 backdrop-blur-[12px]">
      <Link
        href="/"
        className="flex items-center gap-2.5 text-bau-ink"
        onClick={() => setIsOpen(false)}
        aria-label="Feriman, beranda"
      >
        <span className="grid place-items-center w-7 h-7 bg-bau-ink text-bau-bg font-serif text-[17px] leading-none">F</span>
        <span className="font-serif text-[19px] tracking-[-0.01em]">Feriman</span>
      </Link>

      <ul className="hidden md:flex gap-9 list-none">
        {NAV.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`group relative font-mono text-[11px] tracking-widest uppercase transition-colors ${
                  active ? "text-bau-ink font-bold" : "text-bau-muted hover:text-bau-ink"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-[22px] left-0 h-[2px] bg-bau-ink transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-4">
        <span className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-bau-ink tracking-widest uppercase">
          <span className="w-[7px] h-[7px] rounded-full bg-bau-green" />
          Terbuka untuk kerja
        </span>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden font-mono text-[11px] tracking-widest uppercase text-bau-ink border border-bau-ink px-3 py-1.5 hover:bg-bau-ink hover:text-bau-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Tutup" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-[64px] left-0 w-full bg-bau-bg border-b border-bau-border md:hidden px-6 py-2 shadow-xl animate-fade-in z-40"
        >
          <ul className="list-none">
            {NAV.map(({ label, href }) => (
              <li key={href} className="border-b border-bau-border last:border-b-0">
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-4 font-serif text-[26px] leading-none ${pathname === href ? "text-bau-ink" : "text-bau-ink/70"}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
