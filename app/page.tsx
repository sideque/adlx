import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LifecycleSection from "@/components/LifecycleSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PreventiveSupportSection from "@/components/PreventiveSupportSection";
import AudienceSection from "@/components/AudienceSection";
import InsightsSection from "@/components/InsightsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <LifecycleSection />
      <ExpertiseSection />
      <PreventiveSupportSection />
      <AudienceSection />
      <InsightsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
