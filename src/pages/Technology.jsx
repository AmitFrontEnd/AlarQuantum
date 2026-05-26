import TechHero from "@/components/technology/TechHero"
import QKDSection from "@/components/technology/QKDSection"
import QRNGSection from "@/components/technology/QRNGSection"
import PQCSection from "@/components/technology/PQCSection"
import PlatformSection from "@/components/technology/PlatformSection"
import ResearchSection from "@/components/technology/ResearchSection"
import TechCta from "@/components/technology/TechCta"

export default function Technology() {
  return (
    <>
      <TechHero />
      <QKDSection />
      <QRNGSection />
      <PQCSection />
      <PlatformSection />
      <ResearchSection />
      <TechCta />
    </>
  )
}