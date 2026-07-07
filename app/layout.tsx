import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://somoslex.com.ar"),
  title: {
    default: "LEX",
    template: "%s · LEX",
  },
  description:
    "Marketplace que conecta talento universitario verificado con clientes del NEA. Servicios digitales, clases y salud supervisada, con pagos en escrow.",
  keywords: [
    "marketplace universitario",
    "estudiantes NEA",
    "servicios freelance",
    "UNNE",
    "Corrientes",
    "verificación institucional",
    "escrow",
  ],
  authors: [{ name: "LEX" }],
  icons: {
    icon: "/logo - lex.png",
  },
  // TODO: subir /public/og-image.png (1200x630)
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://somoslex.com.ar",
    siteName: "LEX",
    title: "LEX — Marketplace universitario del NEA",
    description:
      "Contratá talento universitario verificado del NEA. Servicios digitales, clases y salud supervisada, con pagos en escrow.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LEX — Marketplace universitario del NEA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEX — Marketplace universitario del NEA",
    description:
      "Contratá talento universitario verificado del NEA. Servicios digitales, clases y salud supervisada, con pagos en escrow.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} bg-background`}>
      <body className={`${poppins.variable} antialiased font-sans`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
