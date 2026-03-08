import { ClipboardCheck, FileImage, Gift } from "lucide-react";
import { steps } from "@/lib/data";
import FadeInSection from "./ui/FadeInSection";
import SectionContainer from "./ui/SectionContainer";

const icons = [FileImage, ClipboardCheck, Gift];

export default function HowItWorksSection() {
  return (
    <section className="section-divider bg-white/45 py-16">
      <SectionContainer>
        <FadeInSection>
          <h2 className="text-center font-display text-5xl text-ink">Jak to działa?</h2>
        </FadeInSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <FadeInSection key={step.title} delay={idx * 0.06}>
                <article className="rounded-3xl bg-white/70 p-6 text-center shadow-soft">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-sky-pale text-sky">
                    <Icon size={34} />
                  </div>
                  <h3 className="font-display text-3xl text-ink">{step.title}</h3>
                  <p className="mt-2 font-semibold text-ink/75">{step.desc}</p>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
