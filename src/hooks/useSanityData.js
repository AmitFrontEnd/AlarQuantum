import { useState, useEffect } from "react";
import { client } from "@/lib/sanity";

export function useSanityData(sectionName, fallbackData) {
  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    // Technology page sections
    const technologySections = ["techHero", "qkd", "qrng", "pqc", "platform", "research", "techCta"];
    // Solutions page sections
    const solutionsSections = ["solutionsHero", "comparison", "sectors", "solutionsCta"];
    // Academy page sections
    const academySections = ["academyHero", "programs", "curriculum", "academyTestimonials", "academyCta"];
    // Research page sections
    const researchSections = ["researchHero", "researchAreas", "publications", "collaborations", "researchCta"];
    // About page sections
    const aboutSections = ["aboutHero", "mission", "timeline", "team", "values", "aboutCta"];
    // Contact page sections
    const contactSections = ["contactHero", "contactInfo", "inquiryTypes", "offices"];
    
    let documentType = "homepage";
    if (technologySections.includes(sectionName)) documentType = "technologyPage";
    if (solutionsSections.includes(sectionName)) documentType = "solutionsPage";
    if (academySections.includes(sectionName)) documentType = "academyPage";
    if (researchSections.includes(sectionName)) documentType = "researchPage";
    if (aboutSections.includes(sectionName)) documentType = "aboutPage";
    if (contactSections.includes(sectionName)) documentType = "contactPage";

    client
      .fetch(`*[_type == "${documentType}"][0]{ ${sectionName} }`)
      .then((res) => {
        if (res && res[sectionName]) {
          setData(res[sectionName]);
        }
      })
      .catch(() => {});
  }, [sectionName]);

  return data;
}