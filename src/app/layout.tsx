import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fontDMSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const fontSpaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Feriman | IT Infrastructure Engineer",
  description: "IT Infrastructure Engineer & Full-Stack Developer focusing on Network Architecture, Private Cloud Orchestration, and AI Automation.",
  openGraph: {
    title: "Feriman | IT Infrastructure Engineer",
    description: "Portofolio Profesional Feriman. Membangun infrastruktur cloud skala enterprise, otomasi AI, dan aplikasi web modern.",
    url: "https://feriman.com",
    siteName: "Feriman Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feriman | IT Infrastructure Engineer",
    description: "Portofolio Profesional Feriman. Membangun infrastruktur cloud skala enterprise, otomasi AI, dan aplikasi web modern.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${fontInter.variable} ${fontDMSerifDisplay.variable} ${fontSpaceMono.variable} antialiased`}
    >
      <body className="font-sans bg-bau-bg text-bau-ink min-h-screen text-[14px] leading-[1.6] overflow-x-hidden flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
