import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LC | Orden y Claridad — Consultoría Estratégica",
  description:
    "Convertimos complejidad en claridad. Consultoría para emprendimientos y PYMES que necesitan ordenar su gestión y tomar mejores decisiones.",
  keywords: [
    "consultoría",
    "estrategia",
    "PYME",
    "emprendimiento",
    "gestión",
    "orden",
    "claridad",
    "Chile",
  ],
  openGraph: {
    title: "LC | Orden y Claridad",
    description: "El orden ayuda a tomar mejores decisiones.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
