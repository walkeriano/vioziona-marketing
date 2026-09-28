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
  title: "Viziona - Agencia de marketing digital",
  description: "Agencia de marketing digital especializada en SEO, SEM, redes sociales y desarrollo web. Impulsa tu negocio con estrategias efectivas y resultados medibles.",
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
