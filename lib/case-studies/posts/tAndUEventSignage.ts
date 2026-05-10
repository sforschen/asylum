import type { CaseStudyPost } from "../types";
import { siteAssets } from "../../../content/siteAssets";

export const tAndUEventSignageCaseStudy: CaseStudyPost = {
  slug: "t-and-u-event-signage",
  title: "Designing event signage that extended the brand beyond the booth",
  category: "Branding",
  publishedAt: "2023-09-12",
  readTime: "2 min read",
  summary:
    "Created customer event signage that translated campaign goals into an in-person environment with clear branding and strong visual impact.",
  imageSrc: siteAssets.caseStudies.tAndUEntranceBanner,
  imageAlt: "Trees and Utilities entrance banner from the original case study",
  portfolioTitle: "Customer Event Signage",
  portfolioSectionId: "branding",
  externalSource: "https://www.youneedserenity.com/portfolio/t-and-u-event-signage",
  metrics: [
    { label: "Format", value: "Large-scale signage" },
    { label: "Goal", value: "Event visibility" },
    { label: "Focus", value: "Brand consistency" },
  ],
  sections: [
    {
      title: "Challenge",
      paragraphs: [
        "Xylem and Kendall host an exclusive customer event during the annual Trees & Utilities conference to build relationships, understand customer needs, and create a more meaningful event experience.",
        "The event needed signage that felt polished, clear, and fully aligned with the atmosphere of the gathering.",
      ],
      sectionClassName: "highlight",
    },
    {
      title: "What I created",
      paragraphs: [
        "I supported the event with tailored signage, including an entrance banner and elegant menu-style signage that helped shape a seamless and engaging environment for attendees.",
      ],
      bullets: [
        "Translated marketing goals into clear environmental graphics.",
        "Balanced readability, hierarchy, and branded design choices.",
        "Created assets that could support both visibility and practical event use.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.tAndUEntranceBanner,
          alt: "Trees and Utilities entrance banner",
          caption: "Entrance Banner",
        },
        {
          src: siteAssets.caseStudies.tAndUDrinkSign,
          alt: "Trees and Utilities drink sign",
          caption: "Drink Sign",
        },
        {
          src: siteAssets.caseStudies.tAndUCigarSign,
          alt: "Trees and Utilities cigar sign",
          caption: "Cigar Sign",
        },
      ],
      sectionClassName: "highlight-white-center",
    },
    {
      title: "Outcome",
      paragraphs: [
        "The final signage helped the event feel cohesive and intentional rather than pieced together.",
        "Photography from Deandre Redmon also helped document how the work functioned in the real event environment, not just as standalone design files.",
      ],
      sectionClassName: "highlight-light-green",
    },
  ],
};
