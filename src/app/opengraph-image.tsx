import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Qualywatch — Pilotez l'expérience client en temps réel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FFB36B 0%, #FA700D 45%, #C8540F 100%)",
          color: "#0F0E0C",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top-left: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#0F0E0C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FA700D",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            Q
          </div>
          <span style={{ fontSize: 32, fontWeight: 800, color: "#0F0E0C" }}>
            Qualywatch
          </span>
        </div>

        {/* Center: title + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#0F0E0C",
              letterSpacing: "-0.02em",
            }}
          >
            Ne laissez plus vos clients
            <br />
            <span
              style={{
                color: "#FFFFFF",
                fontStyle: "italic",
                background: "#0F0E0C",
                padding: "0 16px",
              }}
            >
              partir en silence.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#0F0E0C",
              opacity: 0.8,
              maxWidth: 900,
            }}
          >
            Captez chaque signal client. Réagissez en temps réel. Retenez.
          </div>
        </div>

        {/* Bottom: URL + tags */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#0F0E0C",
              opacity: 0.85,
            }}
          >
            qualywatch.com
          </span>
          <div style={{ display: "flex", gap: 12 }}>
            {["QR · WhatsApp · Email", "Temps réel", "IA d'analyse"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    background: "#0F0E0C",
                    padding: "8px 16px",
                    borderRadius: 999,
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
