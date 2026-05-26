import AcademyHero from "@/components/academy/AcademyHero"
import ProgramsSection from "@/components/academy/ProgramsSection"
import CurriculumSection from "@/components/academy/CurriculumSection"
import AcademyTestimonials from "@/components/academy/AcademyTestimonials"
import AcademyCta from "@/components/academy/AcademyCta"

export default function Academy() {
  return (
    <>
      <AcademyHero />
      <ProgramsSection />
      <CurriculumSection />
      <AcademyTestimonials />
      <AcademyCta />
    </>
  )
}