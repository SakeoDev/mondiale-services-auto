import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mondialeservicesauto.com"),
  title: {
    default: "Mondiale Services Auto | Garage Onnaing & Dépannage Remorquage Europe 24/7",
    template: "%s | Mondiale Services Auto",
  },
  description:
    "Garage automobile à Onnaing (59264) près de Valenciennes. Dépannage, remorquage rapide 24h/24 & 7j/7, entretien mécanique et transport de véhicules toute France et Europe. Contactez le 06 67 90 55 71.",
  keywords: [
    "Garage Onnaing",
    "Dépannage auto Valenciennes",
    "Remorquage Onnaing 59264",
    "Garage automobile Valenciennes",
    "Dépannage auto Nord",
    "Remorquage Europe 24/7",
    "Rapatriement véhicule Europe",
    "Mondiale Services Auto",
    "Transport automobile international",
    "Devis mécanique Onnaing"
  ],
  openGraph: {
    title: "Mondiale Services Auto | Dépannage Onnaing, Valenciennes & Europe 24/7",
    description: "Assistance, dépannage, révision mécanique et transport de véhicules sur Onnaing, Valenciennes, toute la France et toute l'Europe.",
    url: "https://mondialeservicesauto.fr",
    siteName: "Mondiale Services Auto",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/msa-logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body 
        className="bg-zinc-950 text-zinc-100 antialiased selection:bg-red-600 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}