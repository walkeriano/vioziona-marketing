import LegalPage from "@/components/LegalPage/LegalPage";
import { legalPages } from "@/data/legalPages";

export const metadata = {
  title: "Política de privacidad | Viziona",
  description: "Política de privacidad de Viziona MKT.",
};

export default function PoliticaPrivacidadPage() {
  return <LegalPage page={legalPages["politica-privacidad"]} />;
}
