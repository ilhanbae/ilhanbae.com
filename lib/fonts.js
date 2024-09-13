import { Chivo_Mono, Overpass_Mono } from "next/font/google";

export const OverpassMono = Overpass_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-overpass-mono",
});

export const ChivoMono = Chivo_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo-mono",
});
