import Image from "next/image";
import { galleryItems } from "@/lib/data";
import FadeInSection from "./ui/FadeInSection";
import PrimaryButton from "./ui/PrimaryButton";
import SectionContainer from "./ui/SectionContainer";

export default function GallerySection() {
  return (
    <section className="section-divider py-16">
      <SectionContainer>
        <FadeInSection>
          <h2 className="text-center font-display text-5xl text-ink">Nasze przykładowe realizacje</h2>
        </FadeInSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <FadeInSection key={item.name} delay={idx * 0.08}>
              <article className="rounded-2xl border-8 border-white bg-white p-2 shadow-soft-lg">
                <Image
                  src={item.image}
                  alt={`Metryczka ${item.name}`}
                  width={420}
                  height={560}
                  className="h-auto w-full rounded-xl"
                />
              </article>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="mt-10 flex justify-center">
          <PrimaryButton href="#">Zobacz więcej</PrimaryButton>
        </FadeInSection>
      </SectionContainer>
    </section>
  );
}
