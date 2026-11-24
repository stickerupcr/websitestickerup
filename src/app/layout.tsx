import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ variable: "--font-rubik", subsets: ["latin"], style: ["italic"], weight: ["800", "900"], display: "swap" });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], weight: ["300", "400", "500", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "StickerUp by Publistudio · Stickers personalizados en Costa Rica",
  description: "Stickers troquelados, circulares, etiquetas, transparentes, holográficos y magnetos con tu diseño, hechos por Publistudio. Armá tu pedido y cotizá por WhatsApp.",
  openGraph: {
    title: "StickerUp by Publistudio",
    description: "Stickers y etiquetas personalizados en Costa Rica. Cotizá por WhatsApp.",
    locale: "es_CR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CR" className={`${rubik.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
