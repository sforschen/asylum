import type { CaseStudyPost } from "../types";
import { siteAssets } from "../../../content/siteAssets";

export const seriousSillyCaseStudy: CaseStudyPost = {
  slug: "serious-silly",
  title: "Building a playful but serious bumper sticker series",
  category: "Branding",
  publishedAt: "2024-03-01",
  readTime: "2 min read",
  summary:
    "Developed a lighthearted print concept that paired strong visual direction with a memorable, personality-driven campaign idea.",
  imageSrc: siteAssets.caseStudies.seriousSillyHero,
  imageAlt: "Seriously Silly bumper sticker hero image from the original case study",
  portfolioTitle: "Punny Bumper Stickers",
  portfolioSectionId: "branding",
  relatedExperience: [{ href: "/experience#xkig", label: "XKIG" }],
  externalSource: "https://www.youneedserenity.com/portfolio/serious-silly",
  metrics: [
    { label: "Format", value: "Print concept series" },
    { label: "Tone", value: "Playful & bold" },
    { label: "Strength", value: "Memorable creative" },
  ],
  sections: [
    {
      title: "Challenge",
      paragraphs: [
        "How do you make your company memorable while maintaining the level of professionalism that is appropriate for your industry? This project explored the idea that professional does not have to mean strict or stuffy.",
        "The goal was to create something human, fun, and memorable enough to make even serious audiences smile.",
      ],
      sectionClassName: "highlight",
    },
    {
      title: "Testing something funny",
      paragraphs: [
        "The idea started while planning for the annual Trees & Utilities conference. I wanted to test something funny, simple, and inexpensive to produce as an additional giveaway for the booth.",
      ],
      bullets: [
        "Explored punchy messaging paired with simple, readable layouts.",
        "Used color and type deliberately so the jokes landed quickly.",
        "Built a set that felt cohesive as a group while still giving each design its own personality.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.seriousSillyStripOne,
          alt: "First bumper sticker strip from the original case study",
        },
        {
          src: siteAssets.caseStudies.seriousSillyStripTwo,
          alt: "Second bumper sticker strip from the original case study",
        },
      ],
      sectionClassName: "highlight-white-center",
    },
    {
      title: "The reception",
      paragraphs: [
        "What started as a test giveaway became a conversation starter, a social media touchpoint, and something employees connected with enough to use and share.",
        "The concept helped business development start conversations while also bringing a little joy and pride into the work itself.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.seriousSillyReceptionOne,
          alt: "Employee or social response image from the original case study",
        },
        {
          src: siteAssets.caseStudies.seriousSillyReceptionTwo,
          alt: "Expanded reception image from the original case study",
        },
      ],
      sectionClassName: "highlight-light-green",
    },
    {
      title: "Why fun matters",
      paragraphs: [
        "Small moments of fun can build positive workplace culture, strengthen relationships with customers and vendors, and create a more memorable association with the brand.",
        "Being a little silly will not change the world, but it can absolutely help people connect with the work and the people behind it. In that sense, being silly can be serious business.",
      ],
    },
  ],
};
