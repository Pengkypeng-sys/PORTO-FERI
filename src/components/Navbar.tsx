"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = ["Profil", "Skills", "Proyek", "Pendidikan", "Kontak"];
  
  return (
    <nav className="bg-bau-bg/95 border-b border-bau-border px-6 md:px-12 flex items-center justify-between h-[60px] sticky top-0 z-50 backdrop-blur-[10px]">
      <Link href="/" className="font-serif italic text-[18px] text-bau-ink decoration-transparent" onClick={() => setIsOpen(false)}>
        Feriman
      </Link>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 list-none">
        {menuItems.map((item) => {
          const path = `/${item.toLowerCase()}`;
          const isActive = pathname === path;
          return (
            <li key={item}>
              <Link
                href={path}
                className={`font-mono text-[9px] tracking-widest uppercase transition-colors link-underline ${
                  isActive ? "text-bau-ink font-bold" : "text-bau-muted hover:text-bau-ink"
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
      
      {/* Right Side: Status & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-[7px] h-[7px] rounded-full bg-bau-green animate-pulse"></div>
          <span className="font-mono text-[9px] text-bau-green tracking-widest">Available</span>
        </div>
        <button 
          className="md:hidden font-mono text-[9px] tracking-widest uppercase text-bau-ink border border-bau-border px-2 py-1 rounded-sm hover:bg-bau-ink hover:text-bau-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "TUTUP" : "MENU"}
        </button>
      </div>

      {/* Mobile Dropdown Overlay */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-bau-bg border-b border-bau-border md:hidden flex flex-col px-6 py-4 shadow-xl animate-fade-in z-40">
          <ul className="flex flex-col gap-4 list-none">
            {menuItems.map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = pathname === path;
              return (
                <li key={item} className="border-b border-bau-border/30 pb-2">
                  <Link
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className={`font-mono text-[11px] tracking-widest uppercase block ${
                      isActive ? "text-bau-ink font-bold" : "text-bau-muted"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
