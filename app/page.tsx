import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
