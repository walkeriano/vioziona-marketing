import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://viziona.es"),
  title: {
    default: "Viziona | Agencia de marketing digital en Barcelona",
    template: "%s | Viziona",
  },
  description:
    "Agencia de marketing digital en Barcelona especializada en gestión de redes sociales, SEO, publicidad digital, branding y desarrollo web para empresas que quieren crecer.",
  keywords: [
    "agencia de marketing digital",
    "agencia de marketing digital en Barcelona",
    "agencia de marketing en Barcelona",
    "agencia de redes sociales en Barcelona",
    "agencia de redes sociales precios",
    "agencia de marketing digital en España",
    "agencia de marketing y publicidad Barcelona",
    "gestión de redes sociales Barcelona",
    "redes sociales en Barcelona",
    "empresas que gestionan redes sociales",
    "empresas que gestionan redes sociales en Barcelona",
    "SEO Barcelona",
    "publicidad digital Barcelona",
    "desarrollo web Barcelona",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Viziona | Agencia de marketing digital en Barcelona",
    description:
      "Marketing digital, gestión de redes sociales, SEO, publicidad digital, branding y desarrollo web para negocios y empresas en Barcelona.",
    url: "/",
    siteName: "Viziona",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/bg-hero-oficial.png",
        width: 1672,
        height: 941,
        alt: "Viziona, agencia de marketing digital en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viziona | Agencia de marketing digital en Barcelona",
    description:
      "Agencia de marketing y publicidad en Barcelona para redes sociales, SEO, branding, publicidad digital y desarrollo web.",
    images: ["/bg-hero-oficial.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "marketing digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
