import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/data";
import PrimaryButton from "./ui/PrimaryButton";
import SectionContainer from "./ui/SectionContainer";

export default function Header() {
  return (
    <header className="pt-5">
      <SectionContainer>
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/brand/logo-metryczki.svg" alt="Metryczki Dla Dzieci" width={220} height={70} />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item, i) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`font-semibold ${
                    i === 0
                      ? "text-ink underline decoration-coral underline-offset-8"
                      : "text-ink/85 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <PrimaryButton href="#" className="hidden md:inline-flex">
            Zamów teraz
          </PrimaryButton>
        </nav>
      </SectionContainer>
    </header>
  );
}
