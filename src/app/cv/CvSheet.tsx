import { Fragment } from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { CV_SHARED, CV_VARIANTS, type CvSection, type CvVariant } from "@/data/cv";
import { SITE } from "@/data/site";
import CvPrivate from "./CvPrivate";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "800"] });

const linkedin = SITE.socials.find((s) => s.label === "LinkedIn");
const github = SITE.socials.find((s) => s.label === "GitHub");

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="cv-section">
      <h2>{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function CvSheet({ variant }: { variant: CvVariant }) {
  const cv = CV_VARIANTS[variant];

  const blocks: Record<CvSection, React.ReactNode> = {
    projects: (
      <Section label="Proyek Pilihan">
        <ul className={cv.projectColumns ? "cv-cols" : undefined}>
          {cv.projects.map((p) => (
            <li key={p.name}>
              {p.name}
              {p.detail && ` — ${p.detail}`}
              {p.url && (
                <>
                  {" · "}
                  <span className="cv-link">{p.url}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </Section>
    ),
    education: (
      <Section label="Pendidikan">
        {CV_SHARED.education.map((ed) => (
          <div key={ed.title} className="cv-item">
            <div className="cv-row">
              <strong>{ed.title}</strong>
              <span>{ed.period}</span>
            </div>
            {"org" in ed && <div className="cv-sub">{ed.org}</div>}
            {"thesis" in ed && (
              <ul>
                <li>{ed.thesis}</li>
                {cv.publication && <li>{ed.publication}</li>}
              </ul>
            )}
          </div>
        ))}
      </Section>
    ),
    certificates: (
      <Section label="Sertifikat Pelatihan">
        <ul>
          {cv.certificateOrder.map((id) => (
            <li key={id}>{CV_SHARED.certificates[id]}</li>
          ))}
        </ul>
      </Section>
    ),
  };

  return (
    <div className="cv-wrap">
      <article className={`cv-sheet ${jakarta.className}`}>
        <header className="cv-head">
          <Image src="/feri1.jpeg" alt="Foto Feriman" width={160} height={192} priority className="cv-photo" />
          <div className="cv-id">
            <h1>{CV_SHARED.fullName}</h1>
            <p>{cv.headline}</p>
          </div>
          <ul className="cv-contact">
            <li>
              <FiMail aria-hidden />
              <span>{SITE.email}</span>
            </li>
            <CvPrivate />
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
          <p>{cv.summary}</p>
        </Section>

        <Section label="Pengalaman">
          {cv.experience.map((ex) => (
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
          {cv.earlier && (
            <p className="cv-earlier">
              <strong>{cv.earlier.title}</strong> · {cv.earlier.detail}
            </p>
          )}
        </Section>

        {cv.sections.map((s) => (
          <Fragment key={s}>{blocks[s]}</Fragment>
        ))}

        <Section label="Keahlian">
          {cv.skills.map((g) => (
            <p key={g.label}>
              <strong>{g.label}</strong> {g.items.join(", ")}
            </p>
          ))}
        </Section>
      </article>
    </div>
  );
}
