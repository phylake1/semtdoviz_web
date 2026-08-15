import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e2038",
          color: "#d9b972",
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "sans-serif",
          borderRadius: "50%",
        }}
      >
        SD
      </div>
    ),
    { ...size }
  );
}
