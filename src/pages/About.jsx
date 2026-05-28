import AboutHero from "@/components/about/AboutHero"
import MissionSection from "@/components/about/MissionSection"
import TimelineSection from "@/components/about/TimelineSection"
import TeamSection from "@/components/about/TeamSection"
import ValuesSection from "@/components/about/ValuesSection"
import AboutCta from "@/components/about/AboutCta"

export default function About() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TimelineSection />
      <TeamSection />
      <ValuesSection />
      <AboutCta />
    </>
  )
}