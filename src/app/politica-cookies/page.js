import LegalPage from "@/components/LegalPage/LegalPage";
import { legalPages } from "@/data/legalPages";

export const metadata = {
  title: "Política de cookies | Viziona",
  description: "Política de cookies de Viziona MKT.",
};

export default function PoliticaCookiesPage() {
  return <LegalPage page={legalPages["politica-cookies"]} />;
}
