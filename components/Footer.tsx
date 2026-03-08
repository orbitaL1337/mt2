import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import SectionContainer from "./ui/SectionContainer";

export default function Footer() {
  return (
    <footer className="bg-white/40 py-6">
      <SectionContainer>
        <ul className="flex flex-col items-center justify-center gap-4 text-sm font-bold text-ink/70 md:flex-row md:gap-10">
          <li className="inline-flex items-center gap-2">
            <Sparkles size={16} /> Szybka realizacja
          </li>
          <li className="inline-flex items-center gap-2">
            <Heart size={16} /> Personalizowane wzory
          </li>
          <li className="inline-flex items-center gap-2">
            <ShieldCheck size={16} /> Wysoka jakość
          </li>
        </ul>
      </SectionContainer>
    </footer>
  );
}
