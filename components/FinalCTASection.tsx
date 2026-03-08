import FadeInSection from "./ui/FadeInSection";
import PrimaryButton from "./ui/PrimaryButton";
import SectionContainer from "./ui/SectionContainer";

export default function FinalCTASection() {
  return (
    <section className="py-16">
      <SectionContainer>
        <FadeInSection className="rounded-[3rem] bg-sky-pale/80 px-6 py-14 text-center shadow-soft md:px-10">
          <h2 className="font-display text-5xl text-ink md:text-6xl">Zamów swoją metryczkę już dziś!</h2>
          <p className="mt-3 text-xl font-semibold text-ink/80">Stwórz wyjątkowy prezent dla swojego maluszka.</p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton href="#">Zamów teraz</PrimaryButton>
            <PrimaryButton href="#" variant="blue">
              Kontakt
            </PrimaryButton>
          </div>
        </FadeInSection>
      </SectionContainer>
    </section>
  );
}
