"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: <T,>(idText: T, enText: T) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("id");

  const toggleLang = () => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  };

  const t = <T,>(idText: T, enText: T): T => {
    return lang === "id" ? idText : enText;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
