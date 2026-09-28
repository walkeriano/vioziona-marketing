import LegalPage from "@/components/LegalPage/LegalPage";
import { legalPages } from "@/data/legalPages";

export const metadata = {
  title: "Aviso legal | Viziona",
  description: "Aviso legal de Viziona MKT.",
};

export default function AvisoLegalPage() {
  return <LegalPage page={legalPages["aviso-legal"]} />;
}
