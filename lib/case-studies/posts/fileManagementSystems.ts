import type { CaseStudyPost } from "../types";
import { siteAssets } from "../../../content/siteAssets";
import { siteDocuments } from "../../../content/siteDocuments";

export const fileManagementSystemsCaseStudy: CaseStudyPost = {
  slug: "file-management-systems",
  title: "Building file & asset management systems people actually use",
  category: "Operations & Digital Systems",
  publishedAt: "2024-02-15",
  readTime: "4 min read",
  summary:
    "A practical framework for auditing storage, training teams, and designing file systems that support how content really moves across an organization.",
  imageSrc: siteAssets.caseStudies.fileManagementSystemsHero,
  imageAlt: "Workspace with organized materials",
  portfolioTitle: "File Management Systems",
  portfolioSectionId: "web-design-and-management",
  relatedExperience: [
    { href: "/experience#xkig", label: "XKIG" },
    { href: "/experience#elixir", label: "Elixir" },
    { href: "/experience#optum", label: "Optum" },
    { href: "/experience#castle-cooke", label: "Castle & Cooke" },
  ],
  takeaways: [
    {
      href: siteDocuments.caseStudies.fileManagementSystems,
      label: "Download File Management Systems PDF",
    },
  ],
  metrics: [
    { label: "Focus", value: "Files + assets" },
    { label: "Scale", value: "Teams to enterprise" },
    {
      label: "Discovery PDF",
      value: "Step-by-step instructions",
      href: siteDocuments.caseStudies.fileManagementSystems,
      linkLabel: "Download the PDF",
    },
  ],
  sections: [
    {
      title: "Where I Have Implemented These Systems",
      paragraphs: [
        "My approach to file management systems comes from hands-on work across very different organizations and team structures. I have implemented, maintained, and improved these systems for XKIG, Elixir, Optum, and Castle & Cooke Mortgage, adapting the structure to fit each team's tools, content, and operating habits.",
        "That foundation started at Helix Education, where I was part of the team that created their file system. That experience shaped how I think about storage, naming, permissions, documentation, and the everyday behaviors that determine whether a system is useful or quietly ignored.",
      ],
      sectionClassName: "highlight-blue selected-strength-section",
      asideIcon: "network-enterprise",
    },
    {
      title: "The Big Picture",
      paragraphs: [
        "We are all part of an extensive digital and asset ecosystem, from personal files to large-scale company operations. Every company, department, team, and individual produces content that fuels growth, and each contribution affects how work moves.",
        "Cloud storage, shared drives, asset libraries, desktops, and servers can all support productivity when people understand how to use them. The challenge is that many companies moved into cloud systems without giving teams enough training on how shared files and spaces should work.",
      ],
      sectionClassName: "highlight",
    },
    {
      title: "The Gap",
      paragraphs: [
        "I see a real gap between old-school server storage habits and modern cloud storage practices. Shared systems can make work easier, but only when teams understand the benefits and the expectations.",
        "I have spent a lot of time showing teams what Microsoft, Adobe, Google, and other platforms can do to simplify work. The best conversations usually start with a team describing how they work today, then exploring what could become easier together.",
      ],
      bullets: [
        "Teams often inherit different storage habits across departments.",
        "File and data management can be overlooked unless it is attached directly to a product or service.",
        "Silos can protect sensitive work, but they can also create communication barriers.",
        "The way data moves between teams deserves regular examination.",
      ],
    },
    {
      title: "Operational Best Practices",
      paragraphs: [
        "File and storage management works best when it is treated as an operational system, not a one-time cleanup project. The same principles apply at both company and team scale.",
      ],
      bullets: [
        "Audit software, files, and storage use annually to find opportunities for improvement.",
        "Evaluate overall software functionality, not only current use, because underused tools can hide cost savings and collaboration opportunities.",
        "Create shared understanding by training people in practical digital file management.",
        "Plan consolidation carefully, look for unexpected dependencies, and let teams explore alternatives before forcing change.",
        "Prioritize ease of use because complex processes and software will eventually be abandoned or worked around.",
      ],
      sectionClassName: "highlight-light-green",
    },
    {
      title: "From Systems to Pixels",
      paragraphs: [
        "Once the larger ecosystem is understood, the work moves down into the pixels: the granular practices that help file management systems thrive. Files and content can have many relationships, and identifying those relationships helps teams convey the right information quickly.",
        "Understanding company products, goals, software, departments, and workflows makes it easier to create a file system that is robust, usable, and specific to the people who need to maintain it.",
      ],
      bullets: [
        "Map how content is created, reviewed, approved, stored, reused, and archived.",
        "Define the details people need to find files quickly.",
        "Write rules that support real behavior instead of idealized behavior.",
        "Accept that no system is perfect, then build one that is clear enough to keep improving.",
      ],
      bulletLayout: "cards",
    },
    {
      title: "Takeaway",
      paragraphs: [
        "The downloadable PDF includes a file system discovery questionnaire and a page of file system best practices. It is designed to help teams uncover the relationships, rules, and practical decisions that shape a usable file/content ecosystem.",
      ],
      sectionClassName: "highlight-light-green",
    },
  ],
};
