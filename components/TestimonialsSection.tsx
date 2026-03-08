import Image from "next/image";
import FadeInSection from "./ui/FadeInSection";
import SectionContainer from "./ui/SectionContainer";

export default function TestimonialsSection() {
  return (
    <section className="py-8 md:py-12">
      <SectionContainer>
        <FadeInSection>
          <article className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-[2.5rem] bg-white/90 p-5 shadow-soft md:flex-row md:p-7">
            <Image
              src="/assets/avatars/client-anna.svg"
              alt="Anna K. z dzieckiem"
              width={100}
              height={100}
              className="rounded-full border-4 border-white object-cover shadow-soft"
            />
            <div>
              <h3 className="font-display text-4xl text-ink">Opinie naszych klientów</h3>
              <p className="mt-2 text-lg font-semibold text-ink/80">„Piękne metryczki! Idealna pamiątka na całe życie.”</p>
              <p className="mt-2 text-right font-bold text-ink/80">— Anna K.</p>
            </div>
          </article>
        </FadeInSection>
      </SectionContainer>
    </section>
  );
}
