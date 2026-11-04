"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FiCalendar, FiPhone } from "react-icons/fi";

// Hanya format yang masuk akal yang diterima, supaya URL /cv tidak bisa dipakai menampilkan teks sembarang.
const TEL_PATTERN = /^\+?[0-9 ()-]{6,20}( \([A-Za-z]{1,10}\))?$/;
const DOB_PATTERN = /^\d{1,2} [A-Za-z]{3,12} \d{4}$/;
const STATUS_PATTERN = /^[A-Za-z ]{3,20}$/;

function valid(value: string | null, pattern: RegExp) {
  return value !== null && pattern.test(value) ? value : null;
}

function Private() {
  const params = useSearchParams();
  const tel = valid(params.get("tel"), TEL_PATTERN);
  const dob = valid(params.get("dob"), DOB_PATTERN);
  const status = valid(params.get("status"), STATUS_PATTERN);
  return (
    <>
      {tel && (
        <li>
          <FiPhone aria-hidden />
          <span>{tel}</span>
        </li>
      )}
      {dob && (
        <li>
          <FiCalendar aria-hidden />
          <span>
            Lahir: {dob}
            {status && ` · Status: ${status}`}
          </span>
        </li>
      )}
    </>
  );
}

/**
 * Nomor HP, tanggal lahir, dan status pernikahan sengaja tidak ada di data situs yang publik. PDF dicetak dengan
 * `/cv?tel=...&dob=...&status=...` (lihat scripts/build-cv.mjs), sedangkan halaman publik tampil tanpa ketiganya.
 */
export default function CvPrivate() {
  return (
    <Suspense fallback={null}>
      <Private />
    </Suspense>
  );
}
