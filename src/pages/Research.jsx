import ResearchHero from "@/components/research/ResearchHero"
import ResearchAreas from "@/components/research/ResearchAreas"
import PublicationsSection from "@/components/research/PublicationsSection"
import CollaborationsSection from "@/components/research/CollaborationsSection"
import ResearchCta from "@/components/research/ResearchCta"

export default function Research() {
  return (
    <>
      <ResearchHero />
      <ResearchAreas />
      <PublicationsSection />
      <CollaborationsSection />
      <ResearchCta />
    </>
  )
}