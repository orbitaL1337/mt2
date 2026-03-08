import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";
import FadeInSection from "./ui/FadeInSection";
import SectionContainer from "./ui/SectionContainer";

export default function HeroSection() {
  return (
    <section className="bg-clouds relative pb-16 pt-10 md:pb-24">
      <SectionContainer className="grid items-center gap-8 md:grid-cols-2">
        <FadeInSection>
          <h1 className="font-display text-5xl leading-tight text-ink md:text-7xl">
            Urocze metryczki <br />
            <span className="text-coral">dla dzieci</span>
          </h1>
          <p className="mt-5 text-xl font-bold text-ink/80">Personalizowane pamiątki narodzin</p>
          <PrimaryButton href="#" className="mt-8">
            Stwórz metryczkę
          </PrimaryButton>
        </FadeInSection>

        <FadeInSection delay={0.1} className="relative mx-auto w-full max-w-[500px]">
          <div className="relative h-[370px]">
            <Image
              src="/assets/posters/poster-zosia.svg"
              alt="Przykładowa metryczka Zosia"
              width={280}
              height={360}
              className="absolute left-3 top-4 rotate-[-2deg] rounded-2xl border-8 border-white shadow-soft-lg"
            />
            <Image
              src="/assets/posters/poster-olivier.svg"
              alt="Przykładowa metryczka Olivier"
              width={280}
              height={360}
              className="absolute right-0 top-10 rotate-[2deg] rounded-2xl border-8 border-white shadow-soft-lg"
            />
          </div>
        </FadeInSection>
      </SectionContainer>
    </section>
  );
}
