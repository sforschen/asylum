import type { CaseStudyPost } from "../types";
import { siteAssets } from "../../../content/siteAssets";

export const optumSiteCaseStudy: CaseStudyPost = {
  slug: "optum-site",
  title: "Launching a new Optum website on an accelerated migration timeline",
  category: "Web Design & Management",
  publishedAt: "2022-06-15",
  readTime: "3 min read",
  summary:
    "Managed a fast website migration to Adobe Experience Manager and helped launch the redesigned site in just three months.",
  imageSrc: siteAssets.caseStudies.optumSiteHero,
  imageAlt: "Optum website planning image from the original case study",
  portfolioTitle: "Optum Website",
  portfolioSectionId: "web-design-and-management",
  externalSource: "https://www.youneedserenity.com/portfolio/optum-site",
  metrics: [
    { label: "Launch timeline", value: "3 months" },
    { label: "Platform", value: "Adobe AEM" },
    { label: "Workstream", value: "Design + migration" },
  ],
  sections: [
    {
      title: "Challenge",
      paragraphs: [
        "I managed the migration to a new website platform, Adobe Experience Manager, and designed and launched the new site in three months.",
        "With careful page mapping and navigation planning, I reorganized the old site into a cleaner structure that better served both industry professionals and injured persons.",
      ],
  
      sectionClassName: "highlight",
    },
    {
      title: "Before",
      paragraphs: [
        "Before the redesign, the priorities were straightforward: make the site easier to navigate, improve access to educational and industry resources, and create a cleaner user experience overall.",
      ],
      bullets: [
        "Defined the audience and clarified site goals.",
        "Reduced buried content and overcomplicated navigation patterns.",
        "Prepared the foundation for stronger calls to action and more usable content paths.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.optumSiteBefore,
          alt: "Optum website before state screenshot from the original case study",
        },
      ],
      sectionClassName: "highlight-white-center",
    },
    {
      title: "After",
      paragraphs: [
        "The redesigned site introduced cleaner navigation, stronger content hierarchy, and more breathing room across page layouts.",
        "A consistent grid system and reusable structure also made the site easier to maintain through later rebranding work.",
      ],
      bullets: [
        "Moved key content out of dozens of small sub-pages and into clearer main-page structures.",
        "Added consistent related-content space to help natural cross-linking.",
        "Created a stronger long-term foundation for ongoing site management.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.optumSiteAfter,
          alt: "Optum website after state screenshot from the original case study",
        },
        {
          src: siteAssets.caseStudies.optumSiteRebrand,
          alt: "Optum site guidelines through rebranding screenshot from the original case study",
        },
      ],
      sectionClassName: "highlight-light-green",
    },
  ],
};
