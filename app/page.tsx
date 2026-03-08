import DecorativeBackground from "@/components/DecorativeBackground";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SectionSeparator from "@/components/SectionSeparator";
import TestimonialSection from "@/components/TestimonialSection";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <DecorativeBackground />
      <Header />
      <HeroSection />
      <SectionSeparator />
      <HowItWorksSection />
      <SectionSeparator />
      <GallerySection />
      <SectionSeparator />
      <TestimonialSection />
      <SectionSeparator />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
