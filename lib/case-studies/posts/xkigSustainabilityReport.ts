import { siteAssets } from "../../../content/siteAssets";
import { siteDocuments } from "../../../content/siteDocuments";
import type { CaseStudyPost } from "../types";

export const xkigSustainabilityReportCaseStudy: CaseStudyPost = {
  slug: "xkig-sustainability-report",
  title: "The visual system for XKIG’s sustainability report",
  category: "Corporate Design",
  publishedAt: "2026-09-27",
  readTime: "2 min read",
  summary:
    "A 35-page sustainability report shaped through a practical grid, repeatable typography, and a visual rhythm that brought many topics and operating companies into one story.",
  imageSrc: siteAssets.caseStudies.xkigSustainabilityReportWhoWeAre,
  imageAlt: "Who We Are spread from XKIG’s 2025 sustainability report",
  portfolioTitle: "XKIG Sustainability Report",
  portfolioSectionId: "branding",
  relatedExperience: [{ href: "/experience#xkig", label: "XKIG" }],
  metrics: [
    {
      label: "Report",
      value: "35 pages",
      href: siteDocuments.caseStudies.xkigSustainabilityReport,
      linkLabel: "View the full report",
      download: false,
    },
    { label: "Format", value: "PowerPoint" },
    { label: "Focus", value: "Visual systems" },
  ],
  sections: [
    {
      title: "The Challenge",
      paragraphs: [
        "XKIG’s first sustainability report needed to bring many topics and operating companies into one clear visual story. Across 35 pages, it had to move from safety and employee development to community involvement, fleet practices, and future goals while still feeling like one publication.",
        "The report was built in PowerPoint, a common format for sustainability reports and one that made collaboration practical. I had envisioned a different format for a designed report, and I struggled at first to see how to achieve the level of polish I wanted within it. The content also varied from page to page: some sections called for photography and short statements, while others needed room for detailed information.",
        "I needed a design approach flexible enough to handle those differences without losing consistency. Finding it took longer than I expected, and this became one of those projects where I had to trust the design process before I could see the finished result.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.xkigSustainabilityReportCover,
          alt: "Cover of XKIG’s 2025 sustainability report",
          caption: "The final 35-page report established a visual foundation for XKIG’s sustainability story.",
        },
      ],
      contentLayout: "image-left",
      sectionClassName: "highlight case-study-two-thirds-one-third",
    },
    {
      title: "The Process",
      paragraphs: [
        "When the design wasn’t coming together, I went back to the basics. I set up a grid system, defined font styles, and identified patterns that could carry through the report. That gave me a framework for making decisions instead of trying to find a new idea for every page.",
        "I worked through the content section by section, testing layouts and adjusting how photography, color, and data fit within that framework. Some pages came together quickly; others took several rounds to resolve. As those decisions built on one another, the report developed a consistent visual rhythm across its 35 pages.",
      ],
      images: [
        {
          src: siteAssets.caseStudies.xkigSustainabilityReportScope,
          alt: "Reporting Scope and Framework spread from the XKIG sustainability report",
        },
        {
          src: siteAssets.caseStudies.xkigSustainabilityReportCeoLetter,
          alt: "Letter from the CEO spread from the XKIG sustainability report",
        },
        {
          src: siteAssets.caseStudies.xkigSustainabilityReportWhoWeAre,
          alt: "Who We Are spread from the XKIG sustainability report",
        },
        {
          src: siteAssets.caseStudies.xkigSustainabilityReportDriverTraining,
          alt: "Commercial Driver Training spread from the XKIG sustainability report",
        },
        {
          src: siteAssets.caseStudies.xkigSustainabilityReportDiversity,
          alt: "Diversity, Inclusion and Belonging spread with data visualizations",
        },
        {
          src: siteAssets.caseStudies.xkigSustainabilityReportCommunity,
          alt: "Community partner spread from the XKIG sustainability report",
        },
      ],
      sectionClassName: "highlight-white-center",
    },
    {
      title: "Outcome",
      paragraphs: [
        "The report received a lot of praise, and I am proud of the outcome. What makes that response especially meaningful is the process behind it. This project reminded me that strong design does not always begin with a clear vision. Sometimes it comes from continuing to work, evaluate, and improve until the solution takes shape.",
        "The finished report was shared on LinkedIn and published across sustainability pages for companies throughout the XKIG network, extending the work from a long-form publication into a coordinated digital launch.",
        "My role in these published pieces included designing the materials and managing the process through publication across the network.",
      ],
      linksTitle: "View the sustainability pages",
      links: [
        {
          href: "https://xkig.com/sustainability/",
          label: "XKIG",
          iconSrc: siteAssets.caseStudies.xkigFavicon,
        },
        {
          href: "https://xylemtree.com/sustainability/",
          label: "Xylem Tree Experts",
          iconSrc: siteAssets.caseStudies.xylemFavicon,
        },
        {
          href: "https://kendallco.net/sustainability/",
          label: "Kendall Vegetation Services",
          iconSrc: siteAssets.caseStudies.kendallFavicon,
        },
        {
          href: "https://rivercityelectric.com/sustainability/",
          label: "River City Construction",
          iconSrc: siteAssets.caseStudies.riverCityFavicon,
        },
        {
          href: "https://canopyinfrastructure.com/sustainability/",
          label: "Canopy Infrastructure Solutions",
          iconSrc: siteAssets.caseStudies.canopyFavicon,
        },
      ],
      images: [
        {
          src: siteAssets.caseStudies.xkigSustainabilityReportSocial,
          alt: "Social post announcing XKIG’s 2025 sustainability report",
          caption: "The social launch translated the report’s visual language into a shareable announcement.",
          actionHref: "https://lnkd.in/p/ggJ27n3S",
          actionLabel: "View the LinkedIn post",
        },
      ],
      contentLayout: "image-right",
      sectionClassName: "highlight-light-green",
    },
  ],
};
