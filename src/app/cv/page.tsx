import type { Metadata } from "next";
import CvSheet from "./CvSheet";

export const metadata: Metadata = {
  title: "CV | Feriman",
  robots: { index: false },
};

export default function CvPage() {
  return <CvSheet variant="fullstack" />;
}
