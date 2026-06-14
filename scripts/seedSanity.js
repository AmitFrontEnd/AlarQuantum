import { createClient } from "@sanity/client"
import * as homeData from "../src/data/homeData.js"
import * as techData from "../src/data/technologyData.js"
import * as solutionsData from "../src/data/solutionsData.js"
import * as academyData from "../src/data/academyData.js"
import * as researchData from "../src/data/researchData.js"
import * as aboutData from "../src/data/aboutData.js"
import * as contactData from "../src/data/contactData.js"

const client = createClient({
  projectId: "5wk4o7k6",
  dataset: "production",
  apiVersion: "2025-06-05",
  token: "skvAgdtxMro1inhj8IwfcxaXC03PVCNz5oEighIYI1XIRXLDnYNIvyOvhvcNcM4qV4BlISEAcvmz7O0rRq8V6bN143u4wwpgfE5WJvXbBxZpBrLgyEDztBAZyQMU1d7mIFrppI8nOv07f0NOhbIaYeofMfM9UpLpTHEplQN4rteuNQbu424c",
  useCdn: false,
})

function addKeys(items) {
  if (!items || !Array.isArray(items)) return items
  return items.map((item, index) => ({
    ...item,
    _key: `${Date.now()}_${index}_${Math.random().toString(36).substr(2, 6)}`,
  }))
}

async function seed() {
  console.log("🚀 Uploading all pages data to Sanity...\n")

  // ========== HOMEPAGE ==========
  console.log("📄 Uploading Homepage...")
  const homepageDoc = {
    _type: "homepage",
    _id: "homepage",

    hero: {
      badge: homeData.heroData.badge,
      heading: homeData.heroData.heading,
      headingAccent: homeData.heroData.headingAccent,
      subtext: homeData.heroData.subtext,
      ctaPrimaryLabel: homeData.heroData.ctaPrimary.label,
      ctaPrimaryHref: homeData.heroData.ctaPrimary.href,
      ctaSecondaryLabel: homeData.heroData.ctaSecondary.label,
      ctaSecondaryHref: homeData.heroData.ctaSecondary.href,
      stats: addKeys(homeData.heroData.stats),
    },

    trustedBy: {
      heading: homeData.trustedByData.heading,
      logos: addKeys(homeData.trustedByData.logos),
    },

    threat: homeData.threatData,

    features: homeData.featuresData,

    howItWorks: homeData.howItWorksData,

    stats: addKeys(homeData.statsData),

    industries: homeData.industryData,

    testimonials: homeData.testimonialsData,

    ctaBanner: {
      heading: homeData.ctaBannerData.heading,
      subtext: homeData.ctaBannerData.subtext,
      ctaPrimaryLabel: homeData.ctaBannerData.ctaPrimary.label,
      ctaPrimaryHref: homeData.ctaBannerData.ctaPrimary.href,
      ctaSecondaryLabel: homeData.ctaBannerData.ctaSecondary.label,
      ctaSecondaryHref: homeData.ctaBannerData.ctaSecondary.href,
    },
  }
  await client.createOrReplace(homepageDoc)
  console.log("  ✅ Homepage done")

  // ========== TECHNOLOGY PAGE ==========
  console.log("\n📄 Uploading Technology Page...")
  const technologyDoc = {
    _type: "technologyPage",
    _id: "technologyPage",

    techHero: {
      badge: techData.techHeroData.badge,
      heading: techData.techHeroData.heading,
      headingAccent: techData.techHeroData.headingAccent,
      subtext: techData.techHeroData.subtext,
    },

    qkd: {
      badge: techData.qkdData.badge,
      tag: techData.qkdData.tag,
      heading: techData.qkdData.heading,
      subtext: techData.qkdData.subtext,
      howItWorks: addKeys(techData.qkdData.howItWorks),
      specs: addKeys(techData.qkdData.specs),
    },

    qrng: {
      badge: techData.qrngData.badge,
      tag: techData.qrngData.tag,
      heading: techData.qrngData.heading,
      subtext: techData.qrngData.subtext,
      comparison: addKeys(techData.qrngData.comparison),
      specs: addKeys(techData.qrngData.specs),
    },

    pqc: {
      badge: techData.pqcData.badge,
      tag: techData.pqcData.tag,
      heading: techData.pqcData.heading,
      subtext: techData.pqcData.subtext,
      algorithms: addKeys(techData.pqcData.algorithms),
      migrationSteps: addKeys(techData.pqcData.migrationSteps),
    },

    platform: {
      badge: techData.platformData.badge,
      heading: techData.platformData.heading,
      subtext: techData.platformData.subtext,
      layers: addKeys(techData.platformData.layers.map(layer => ({
        ...layer,
        components: layer.components || [],
      }))),
    },

    research: {
      badge: techData.researchData.badge,
      heading: techData.researchData.heading,
      papers: addKeys(techData.researchData.papers),
    },

    techCta: {
      heading: techData.techCtaData.heading,
      subtext: techData.techCtaData.subtext,
      ctaPrimaryLabel: techData.techCtaData.ctaPrimary.label,
      ctaPrimaryHref: techData.techCtaData.ctaPrimary.href,
      ctaSecondaryLabel: techData.techCtaData.ctaSecondary.label,
      ctaSecondaryHref: techData.techCtaData.ctaSecondary.href,
    },
  }
  await client.createOrReplace(technologyDoc)
  console.log("  ✅ Technology Page done")

  // ========== SOLUTIONS PAGE ==========
  console.log("\n📄 Uploading Solutions Page...")
  const solutionsDoc = {
    _type: "solutionsPage",
    _id: "solutionsPage",

    solutionsHero: {
      badge: solutionsData.solutionsHeroData.badge,
      heading: solutionsData.solutionsHeroData.heading,
      headingAccent: solutionsData.solutionsHeroData.headingAccent,
      subtext: solutionsData.solutionsHeroData.subtext,
    },

    comparison: {
      badge: solutionsData.comparisonData.badge,
      heading: solutionsData.comparisonData.heading,
      subtext: solutionsData.comparisonData.subtext,
      rows: addKeys(solutionsData.comparisonData.rows),
    },

    sectors: addKeys(solutionsData.sectorsData.map(sector => ({
      ...sector,
      problems: addKeys(sector.problems),
      deployments: sector.deployments,
      compliance: sector.compliance,
    }))),

    solutionsCta: {
      heading: solutionsData.solutionsCtaData.heading,
      subtext: solutionsData.solutionsCtaData.subtext,
      ctaPrimaryLabel: solutionsData.solutionsCtaData.ctaPrimary.label,
      ctaPrimaryHref: solutionsData.solutionsCtaData.ctaPrimary.href,
      ctaSecondaryLabel: solutionsData.solutionsCtaData.ctaSecondary.label,
      ctaSecondaryHref: solutionsData.solutionsCtaData.ctaSecondary.href,
    },
  }
  await client.createOrReplace(solutionsDoc)
  console.log("  ✅ Solutions Page done")
  // After Solutions Page, add:
console.log("\n📄 Uploading Academy Page...")

const academyDoc = {
  _type: "academyPage",
  _id: "academyPage",
  
  academyHero: {
    badge: academyData.academyHeroData.badge,
    heading: academyData.academyHeroData.heading,
    headingAccent: academyData.academyHeroData.headingAccent,
    subtext: academyData.academyHeroData.subtext,
    stats: addKeys(academyData.academyHeroData.stats),
  },
  
  programs: {
    badge: academyData.programsData.badge,
    heading: academyData.programsData.heading,
    subtext: academyData.programsData.subtext,
    tracks: addKeys(academyData.programsData.tracks.map(track => ({
      ...track,
      modules: track.modules || [],
    }))),
  },
  
  curriculum: {
    badge: academyData.curriculumData.badge,
    heading: academyData.curriculumData.heading,
    modules: addKeys(academyData.curriculumData.modules),
  },
  
  academyTestimonials: {
    badge: academyData.testimonialsData.badge,
    heading: academyData.testimonialsData.heading,
    items: addKeys(academyData.testimonialsData.items),
  },
  
  academyCta: {
    heading: academyData.academyCtaData.heading,
    subtext: academyData.academyCtaData.subtext,
    ctaPrimaryLabel: academyData.academyCtaData.ctaPrimary.label,
    ctaPrimaryHref: academyData.academyCtaData.ctaPrimary.href,
    ctaSecondaryLabel: academyData.academyCtaData.ctaSecondary.label,
    ctaSecondaryHref: academyData.academyCtaData.ctaSecondary.href,
  },
}
await client.createOrReplace(academyDoc)
console.log("  ✅ Academy Page done")

  console.log("\n🎉 All pages uploaded successfully!")
 // After Academy Page, add:
console.log("\n📄 Uploading Research Page...")

const researchDoc = {
  _type: "researchPage",
  _id: "researchPage",
  
  researchHero: {
    badge: researchData.researchHeroData.badge,
    heading: researchData.researchHeroData.heading,
    headingAccent: researchData.researchHeroData.headingAccent,
    subtext: researchData.researchHeroData.subtext,
    stats: addKeys(researchData.researchHeroData.stats),
  },
  
  researchAreas: {
    badge: researchData.researchAreasData.badge,
    heading: researchData.researchAreasData.heading,
    areas: addKeys(researchData.researchAreasData.areas),
  },
  
  publications: {
    badge: researchData.papersData.badge,
    heading: researchData.papersData.heading,
    filters: researchData.papersData.filters,
    papers: addKeys(researchData.papersData.papers),
  },
  
  collaborations: {
    badge: researchData.collaborationsData.badge,
    heading: researchData.collaborationsData.heading,
    partners: addKeys(researchData.collaborationsData.partners),
  },
  
  researchCta: {
    heading: researchData.researchCtaData.heading,
    subtext: researchData.researchCtaData.subtext,
    ctaPrimaryLabel: researchData.researchCtaData.ctaPrimary.label,
    ctaPrimaryHref: researchData.researchCtaData.ctaPrimary.href,
    ctaSecondaryLabel: researchData.researchCtaData.ctaSecondary.label,
    ctaSecondaryHref: researchData.researchCtaData.ctaSecondary.href,
  },
}
await client.createOrReplace(researchDoc)
console.log("  ✅ Research Page done")
// After Research Page, add:
console.log("\n📄 Uploading About Page...")

const aboutDoc = {
  _type: "aboutPage",
  _id: "aboutPage",
  
  aboutHero: {
    badge: aboutData.aboutHeroData.badge,
    heading: aboutData.aboutHeroData.heading,
    headingAccent: aboutData.aboutHeroData.headingAccent,
    subtext: aboutData.aboutHeroData.subtext,
  },
  
  mission: {
    badge: aboutData.missionData.badge,
    heading: aboutData.missionData.heading,
    subtext: aboutData.missionData.subtext,
    pillars: addKeys(aboutData.missionData.pillars),
  },
  
  timeline: {
    badge: aboutData.timelineData.badge,
    heading: aboutData.timelineData.heading,
    events: addKeys(aboutData.timelineData.events),
  },
  
  team: {
    badge: aboutData.teamData.badge,
    heading: aboutData.teamData.heading,
    members: addKeys(aboutData.teamData.members.map(member => ({
      ...member,
      expertise: member.expertise || [],
    }))),
  },
  
  values: {
    badge: aboutData.valuesData.badge,
    heading: aboutData.valuesData.heading,
    values: addKeys(aboutData.valuesData.values),
  },
  
  aboutCta: {
    heading: aboutData.aboutCtaData.heading,
    subtext: aboutData.aboutCtaData.subtext,
    ctaPrimaryLabel: aboutData.aboutCtaData.ctaPrimary.label,
    ctaPrimaryHref: aboutData.aboutCtaData.ctaPrimary.href,
    ctaSecondaryLabel: aboutData.aboutCtaData.ctaSecondary.label,
    ctaSecondaryHref: aboutData.aboutCtaData.ctaSecondary.href,
  },
}
await client.createOrReplace(aboutDoc)
console.log("  ✅ About Page done")
// After About Page, add:
console.log("\n📄 Uploading Contact Page...")

const contactDoc = {
  _type: "contactPage",
  _id: "contactPage",
  
  contactHero: {
    badge: contactData.contactHeroData.badge,
    heading: contactData.contactHeroData.heading,
    headingAccent: contactData.contactHeroData.headingAccent,
    subtext: contactData.contactHeroData.subtext,
  },
  
  contactInfo: addKeys(contactData.contactInfoData),
  
  inquiryTypes: addKeys(contactData.inquiryTypes),
  
  offices: {
    badge: contactData.officesData.badge,
    heading: contactData.officesData.heading,
    locations: addKeys(contactData.officesData.locations),
  },
}
await client.createOrReplace(contactDoc)
console.log("✅ Contact Page done")
}

seed().catch(console.error)