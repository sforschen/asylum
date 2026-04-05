import type { CaseStudyPost } from "../types";
import { siteAssets } from "../../../content/siteAssets";

export const elixirSiteCaseStudy: CaseStudyPost = {
  slug: "elixir-site",
  title: "Rebuilding Elixir's Website for speed, accessibility, and easier publishing",
  category: "Web Design and Management",
  publishedAt: "2024-02-20",
  readTime: "4 min read",
  summary:
    "Led the move to Adobe AEM Live, improved authoring support, and helped raise Lighthouse scores from the mid-60s to 98-100.",
  imageSrc: siteAssets.portfolio.elixirWebsiteThumb,
  imageAlt: "Elixir website redesign preview",
  portfolioTitle: "Elixir's Website",
  portfolioSectionId: "web-design-and-management",
  externalSource: "https://www.youneedserenity.com/portfolio/elixir-site",
  metrics: [
    { label: "Platform launch", value: "Under 5 months" },
    { label: "Performance lift", value: "65 to 98-100" },
    { label: "Focus", value: "Accessibility + governance" },
  ],
  sections: [
    {
      title: "Challenge",
      paragraphs: [
        "I managed the transfer of elixirsolutions.com to Adobe AEM Live in under five months and used the move as an opportunity to modernize the overall experience instead of simply recreating the old site.",
        "The goal was to bring the website up to modern standards, improve accessibility, and create a better user experience that went beyond the minimum definition of success.",
      ],
      sectionClassName: "highlight",
    },
    {
      title: "What I led",
      paragraphs: [
        "Using GitHub issues, milestones, and bi-weekly sprint planning, I tracked deliverables, assigned work, and kept the team aligned around priorities and site philosophy.",
      ],
      bullets: [
        "Transferred content and confirmed the new site worked end to end.",
        "Audited the base code and made structural, design, and accessibility improvements.",
        "Led usability testing, screen reader reviews, post-launch testing, and ongoing enhancements.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.elixirSiteBody,
          alt: "Full-page Elixir website case study image from the original portfolio page",
        },
      ],
      sectionClassName: "highlight-white-center",
    },
    {
      title: "Outcome",
      paragraphs: [
        "The new site launched in under five months with stronger usability and a more durable publishing model.",
        "Performance improved dramatically, with Google Lighthouse scores rising from an average around 65 to a consistent 98-100 range.",
      ],
      sectionClassName: "highlight-light-green",
    },
  ],
};
