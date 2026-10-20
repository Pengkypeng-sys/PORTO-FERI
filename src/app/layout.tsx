import type { Metadata } from "next";
import { Instrument_Sans, DM_Serif_Display, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontBody = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

// Vercel menyuntikkan domain produksi; di lokal jatuh ke localhost.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Feriman | Full Stack Developer & IT Staff",
  description: "Portofolio Feriman, Full Stack Developer & IT Staff dengan keahlian jaringan, server, dan pengembangan sistem. Mencari peluang kerja di bidang IT.",
  openGraph: {
    title: "Feriman | Full Stack Developer & IT Staff",
    description: "Portofolio Feriman: Full Stack Developer & IT Staff dengan keahlian jaringan, server, dan pengembangan sistem.",
    url: "/",
    siteName: "Feriman Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feriman | Full Stack Developer & IT Staff",
    description: "Portofolio Feriman: Full Stack Developer & IT Staff dengan keahlian jaringan, server, dan pengembangan sistem.",
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
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontDMSerifDisplay.variable} ${fontSpaceMono.variable} antialiased`}
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
