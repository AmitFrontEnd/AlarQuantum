import HeroSection from "@/components/home/HeroSection"
import TrustedBy from "@/components/home/TrustedBy"
import ThreatSection from "@/components/home/ThreatSection"
import FeaturesSection from "@/components/home/FeaturesSection"
import HowItWorks from "@/components/home/HowItWorks"
import StatsSection from "@/components/home/StatsSection"
import IndustrySection from "@/components/home/IndustrySection"
import Testimonials from "@/components/home/Testimonials"
import CtaBanner from "@/components/home/CtaBanner"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ThreatSection />
      <FeaturesSection />
      <HowItWorks />
      <StatsSection />
      <IndustrySection />
      <Testimonials />
      <CtaBanner />
    </>
  )
}