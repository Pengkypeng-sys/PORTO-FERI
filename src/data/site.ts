export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export const SITE = {
  name: "Feriman",
  email: "feriman.getup@gmail.com",
  location: "Jakarta, Indonesia",
  website: { label: "portofol.io/feriman", url: "https://portofol.io/feriman" },
  /** Tambahkan akun di sini (GitHub, LinkedIn, Instagram, WhatsApp, ...); otomatis tampil di halaman Kontak. */
  socials: [
    { label: "LinkedIn", handle: "in/ferimann", url: "https://www.linkedin.com/in/ferimann/" },
    { label: "Instagram", handle: "@ferimnn", url: "https://www.instagram.com/ferimnn/" },
    { label: "YouTube", handle: "@One22.", url: "https://www.youtube.com/@One22." },
  ] as SocialLink[],
  /** Isi dengan URL CV (mis. "/cv-feriman.pdf" di folder public) agar tombol "Unduh CV" muncul di halaman Kontak. */
  cvUrl: "",
};
