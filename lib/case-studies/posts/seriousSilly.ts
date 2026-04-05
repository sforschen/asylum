import type { CaseStudyPost } from "../types";

export const seriousSillyCaseStudy: CaseStudyPost = {
  slug: "serious-silly",
  title: "Building a playful bumper sticker series with a clear point of view",
  category: "Print & Misc",
  publishedAt: "2023-10-03",
  readTime: "2 min read",
  summary:
    "Developed a lighthearted print concept that paired strong visual direction with a memorable, personality-driven campaign idea.",
  imageSrc:
    "https://www.youneedserenity.com/portfolio/media_12b43469a7051486fdb1399392fd347e29a1475b2.png?width=2000&format=png&optimize=medium",
  imageAlt: "Seriously Silly bumper sticker hero image from the original case study",
  portfolioTitle: "Punny Bumper Stickers",
  portfolioSectionId: "print--misc",
  externalSource: "https://www.youneedserenity.com/portfolio/serious-silly",
  metrics: [
    { label: "Format", value: "Print concept series" },
    { label: "Tone", value: "Playful and bold" },
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
          src: "https://www.youneedserenity.com/portfolio/media_13f9a25af60117c46ae3713e2fb8dd57b8cc03b88.png?width=2000&format=png&optimize=medium",
          alt: "First bumper sticker strip from the original case study",
        },
        {
          src: "https://www.youneedserenity.com/portfolio/media_18b32b35f189de6ab4a023d2369673a36e0f24b9f.png?width=2000&format=png&optimize=medium",
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
          src: "https://www.youneedserenity.com/portfolio/media_108215377b391257db96c7780608a188b0844a484.png?width=2000&format=png&optimize=medium",
          alt: "Employee or social response image from the original case study",
        },
        {
          src: "https://www.youneedserenity.com/portfolio/media_1c12664ff5d3203e3d75aabe628f87708cd1247d3.png?width=2000&format=png&optimize=medium",
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
