import JoyCtaSection from "@/components/cta";
import Footer from "@/components/footer";
import HeroParallax from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroParallax />
      <JoyCtaSection />
      <Footer />
    </main>
  );
}
