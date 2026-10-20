import type { Metadata } from "next";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { CV } from "@/data/cv";
import { EXPERIENCE } from "@/data/experience";
import { CERTIFICATES, ORGANIZATIONS } from "@/data/education";
import { SITE } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "800"] });

export const metadata: Metadata = {
  title: "CV | Feriman",
  robots: { index: false },
};

const linkedin = SITE.socials.find((s) => s.label === "LinkedIn");
const github = SITE.socials.find((s) => s.label === "GitHub");

// Nomor HP tidak ada di data publik: CV pribadi dicetak lewat /cv?tel=... (lihat scripts/build-cv.mjs).
// Hanya format nomor telepon yang diterima, supaya URL tidak bisa dipakai menampilkan teks sembarang.
const PHONE_PATTERN = /^\+?[0-9 ()-]{6,20}$/;

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="cv-section">
      <h2>{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default async function CvPage({ searchParams }: { searchParams: Promise<{ tel?: string | string[] }> }) {
  const { tel } = await searchParams;
  const phone = typeof tel === "string" && PHONE_PATTERN.test(tel) ? tel : null;

  return (
    <div className="cv-wrap">
      <article className={`cv-sheet ${jakarta.className}`}>
        <header className="cv-head">
          <Image src="/feri1.jpeg" alt="Foto Feriman" width={160} height={192} priority className="cv-photo" />
          <div className="cv-id">
            <h1>{CV.fullName}</h1>
            <p>{CV.headline}</p>
          </div>
          <ul className="cv-contact">
            <li>
              <FiMail aria-hidden />
              <span>{SITE.email}</span>
            </li>
            {phone && (
              <li>
                <FiPhone aria-hidden />
                <span>{phone}</span>
              </li>
            )}
            <li>
              <FiMapPin aria-hidden />
              <span>{SITE.location}</span>
            </li>
            <li>
              <FiGlobe aria-hidden />
              <span className="cv-link">{SITE.website.label}</span>
            </li>
            {linkedin && (
              <li>
                <FiLinkedin aria-hidden />
                <span className="cv-link">linkedin.com/{linkedin.handle}</span>
              </li>
            )}
            {github && (
              <li>
                <FiGithub aria-hidden />
                <span className="cv-link">github.com/{github.handle}</span>
              </li>
            )}
          </ul>
        </header>

        <Section label="Profil">
          <p>{CV.summary}</p>
        </Section>

        <Section label="Pengalaman">
          {EXPERIENCE.map((ex) => (
            <div key={`${ex.role}-${ex.period}`} className="cv-item">
              <div className="cv-row">
                <strong>{ex.role}</strong>
                <span>{ex.period.replace(" - ", " – ")}</span>
              </div>
              <div className="cv-sub">{ex.org}</div>
              <ul>
                {ex.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section label="Pendidikan">
          {CV.education.map((ed) => (
            <div key={ed.title} className="cv-item">
              <div className="cv-row">
                <strong>{ed.title}</strong>
                <span>{ed.period}</span>
              </div>
              {ed.org && <div className="cv-sub">{ed.org}</div>}
              {ed.points.length > 0 && (
                <ul>
                  {ed.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>

        <Section label="Sertifikat Pelatihan">
          <ul>
            {CERTIFICATES.map((c) => (
              <li key={c.name}>
                {c.name} — {c.issuer} <span className="cv-muted">({c.period})</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Keahlian">
          <p>
            <strong>Inti</strong> {CV.skills.core.join(", ")}
          </p>
          <p>
            <strong>Pendukung</strong> {CV.skills.support.join(", ")}
          </p>
        </Section>

        <Section label="Organisasi">
          {ORGANIZATIONS.map((o) => (
            <div key={o.role} className="cv-row cv-org">
              <span>
                <strong>{o.role}</strong> — {o.org}
              </span>
              <span>{o.period}</span>
            </div>
          ))}
        </Section>
      </article>
    </div>
  );
}
