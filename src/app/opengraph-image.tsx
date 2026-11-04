import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { CV_SHARED, CV_VARIANTS } from "@/data/cv";
import { SITE } from "@/data/site";

// Warna mengikuti token di globals.css (--color-bau-*).
const INK = "#18181A";
const BG = "#F7F6F2";
const MUTED = "#888888";
const GREEN = "#3CB371";

const headline = CV_VARIANTS.fullstack.headline;

export const alt = `${CV_SHARED.fullName} — ${headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [serif, mono] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/DMSerifDisplay-Regular.ttf")),
    readFile(join(process.cwd(), "assets/fonts/SpaceMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "88px 80px 72px",
          background: INK,
          // Garis kisi tipis seperti latar blueprint di hero situs.
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          color: BG,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "DM Serif Display",
              fontSize: 134,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {CV_SHARED.fullName}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 44,
              fontFamily: "Space Mono",
              fontSize: 26,
              color: "#b5b5b5",
            }}
          >
            {headline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 64, height: 8, background: GREEN, marginBottom: 28 }} />
          <div style={{ display: "flex", fontFamily: "Space Mono", fontSize: 26, color: MUTED }}>
            {`${SITE.status} · ${SITE.location}`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "DM Serif Display", data: serif, style: "normal", weight: 400 },
        { name: "Space Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
