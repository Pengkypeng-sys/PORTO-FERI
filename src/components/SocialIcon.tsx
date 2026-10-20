import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

const ICONS: Record<string, typeof FaGithub> = {
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  WhatsApp: FaWhatsapp,
};

/** Brand icon for a social label (see SITE.socials); renders nothing for unknown labels. */
export default function SocialIcon({ label, className }: { label: string; className?: string }) {
  const Icon = ICONS[label];
  return Icon ? <Icon className={className} aria-hidden /> : null;
}
