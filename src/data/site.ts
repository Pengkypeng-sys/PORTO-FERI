export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export const SITE = {
  name: "Feriman",
  email: "feriman.getup@gmail.com",
  location: "Depok, Jawa Barat",
  /** Status ketersediaan, dipakai di navbar dan hero. */
  status: "Terbuka untuk peluang baru",
  website: { label: "porto-feri.vercel.app", url: "https://porto-feri.vercel.app" },
  /** Tambahkan akun di sini (GitHub, LinkedIn, Instagram, WhatsApp, ...); otomatis tampil di halaman Kontak. */
  socials: [
    { label: "GitHub", handle: "Pengkypeng-sys", url: "https://github.com/Pengkypeng-sys" },
    { label: "LinkedIn", handle: "in/ferimann", url: "https://www.linkedin.com/in/ferimann/" },
    { label: "Instagram", handle: "@ferimnn", url: "https://www.instagram.com/ferimnn/" },
    { label: "YouTube", handle: "@One22.", url: "https://www.youtube.com/@One22." },
  ] as SocialLink[],
  /** Nomor tidak ditampilkan sebagai teks di situs; hanya tombol yang membuka WhatsApp. */
  whatsapp: { label: "WhatsApp", handle: "Chat via WhatsApp", url: "https://wa.me/6282339116603" } as SocialLink,
  /** CV publik (versi Full Stack), dibuat dengan `npm run cv`. Kosongkan untuk menyembunyikan tombol "Unduh CV". */
  cvUrl: "/CV_Feriman_FullStack_Developer.pdf",
};
