import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0d10",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "2px solid #f0b64a",
            color: "#f0b64a",
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          SD
        </div>
        <div style={{ display: "flex", fontSize: 64, color: "white", fontWeight: 700 }}>
          Semt Döviz
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#f0b64a",
            marginTop: 20,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
            marginTop: 32,
          }}
        >
          Güncel Döviz Kurları · Hızlı ve Güvenilir İşlem
        </div>
      </div>
    ),
    { ...size }
  );
}
