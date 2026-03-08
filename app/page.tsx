import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Navbar from "@/components/Navbar";
import SectionSeparator from "@/components/SectionSeparator";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <SectionSeparator variant="cloud-separator-1" tone="bright" />
      <HowItWorksSection />
      <SectionSeparator variant="cloud-separator-2" compact tone="sky" />
      <GallerySection />
      <SectionSeparator variant="cloud-separator-1" flip tone="soft" />
      <TestimonialsSection />
      <SectionSeparator variant="cloud-separator-2" compact flip tone="bright" />
      <CTASection />
      <SectionSeparator variant="cloud-separator-1" compact tone="sky" />
      <Footer />
    </main>
  );
}
