"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FiPhone } from "react-icons/fi";

function Phone() {
  const tel = useSearchParams().get("tel");
  if (!tel) return null;
  return (
    <li>
      <FiPhone aria-hidden />
      <span>{tel}</span>
    </li>
  );
}

/**
 * Nomor HP sengaja tidak ada di data situs yang publik. CV pribadi dicetak dengan `/cv?tel=...`
 * (lihat scripts/build-cv.mjs), sedangkan versi publik tampil tanpa nomor.
 */
export default function CvPhone() {
  return (
    <Suspense fallback={null}>
      <Phone />
    </Suspense>
  );
}
