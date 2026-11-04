import type { Metadata } from "next";
import CvSheet from "../CvSheet";

// Tidak ditautkan dari navbar atau halaman mana pun: CV ini dikirim manual untuk lowongan infrastruktur.
export const metadata: Metadata = {
  title: "CV Infrastruktur | Feriman",
  robots: { index: false, follow: false },
};

export default function CvInfraPage() {
  return <CvSheet variant="infra" />;
}
