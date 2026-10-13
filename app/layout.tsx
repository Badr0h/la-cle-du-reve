import type { Metadata } from "next";
import { Figtree, Great_Vibes } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "La clé du Rêve, agence immobilière à Rabat",
  description:
    "Vente, location, gestion locative et estimation gratuite à Rabat. Agence à Massira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${figtree.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
