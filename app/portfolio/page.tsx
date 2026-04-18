import CtaSection from "../../components/CtaSection";
import GallerySection, { type GalleryItem } from "../../components/GallerySection";
import { siteAssets } from "../../content/siteAssets";
import { siteDocuments } from "../../content/siteDocuments";
import PageIntro from "../../components/PageIntro";
import { getCaseStudyUrl } from "../../lib/case-studies";

export const metadata = {
  title: "Portfolio",
  description:
    "Browse portfolio work from Serenity Forschen across web design and management, social media, print, branding, and personal art.",
};

// Gallery data mirrors the sections on the live portfolio site.
type PortfolioSection = {
  id: string;
  title: string;
  intro: string;
  sectionClassName?: string;
  items: GalleryItem[];
};

const portfolioSections: PortfolioSection[] = [
  {
    id: "web-design-and-management",
    title: "Web Design and Management",
    intro:
      "This section highlights website strategy, design direction, publishing workflows, and the practical systems that help teams keep digital experiences current. The work spans redesigns, migrations, authoring support, and content structures built to scale.",
    sectionClassName: "highlight",
    items: [
      {
        title: "Elixir's Website",
        imageSrc: siteAssets.portfolio.elixirWebsiteThumb,
        links: [{ href: getCaseStudyUrl("elixir-site"), label: "Read Case Study" }],
      },
      {
        title: "Optum Website",
        imageSrc: siteAssets.portfolio.optumWebsiteThumb,
        links: [{ href: getCaseStudyUrl("optum-site"), label: "Read Case Study" }],
      },
      {
        title: "Optum Continuing Education Campaign",
        imageSrc: siteAssets.portfolio.optumCeThumbnail,
        links: [{ href: getCaseStudyUrl("optum-ce-campaign"), label: "Read Case Study" }],
      },
      {
        title: "CPMI Solutions Website",
        imageSrc: siteAssets.portfolio.cpmiSolutionsWebsiteThumb,
        links: [{ href: siteDocuments.portfolio.cpmiSolutionsWebsite, label: "View Image" }],
      },
      {
        title: "C.R. England Page",
        imageSrc: siteAssets.portfolio.crEnglandPageThumb,
        links: [{ href: siteDocuments.portfolio.crEnglandPage, label: "View Image" }],
      },
      {
        title: "C.R. England Recruiting",
        imageSrc: siteAssets.portfolio.crEnglandRecruitingThumb,
        links: [{ href: siteDocuments.portfolio.crEnglandRecruiting, label: "View Image" }],
      },
    ],
  },
  {
    id: "social-media",
    title: "Social Media",
    intro:
      "These pieces show how I shape social content that supports campaigns, announcements, and brand storytelling across channels. The work balances visual clarity, audience engagement, and messaging that is concise enough to perform well in fast-moving feeds.",
    items: [
      {
        title: "Safety Month Post",
        imageSrc: siteAssets.social.safetyMonthPostThumb,
        links: [{ href: "https://www.linkedin.com/posts/kendallvegetation_nationalsafetymonth-staysafe-kendallsafety-activity-7336519759825436672-Od33?utm_source=share&utm_medium=member_desktop&rcm=ACoAAADjjKoBrLu0hYpMutgsETO7iPh4dsJBBeU", label: "View on LinkedIn" }],
      },
      {
        title: "Video Post",
        imageSrc: siteAssets.social.socialVideoPostOneThumb,
        links: [{ href: "https://www.linkedin.com/feed/update/urn:li:activity:7062426632422076416?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Holiday Post",
        imageSrc: siteAssets.social.holidayPostThumb,
        links: [{ href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_happy-holidays-from-the-elixir-team-we-are-activity-7142891357659934720-4IuP?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Video Post",
        imageSrc: siteAssets.social.socialVideoPostTwoThumb,
        links: [{ href: "https://www.linkedin.com/posts/serenityforschen_defeatdiabetes-elixirpbm-activity-7053744684485005312-fSyj?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Event announcement",
        imageSrc: siteAssets.social.eventAnnouncementThumb,
        links: [{ href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_elixirpbm-activity-7087111883664625665-7zAi?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Blog Post",
        imageSrc: siteAssets.social.blogPostThumb,
        links: [{ href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_flu-season-is-right-around-the-corner-read-activity-7101971724866371584-VgWY?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
    ],
  },
  {
    id: "print--misc",
    title: "Print & Misc",
    intro:
      "This collection brings together print design, branded collateral, event materials, and one-off creative pieces with a strong point of view. It reflects the kind of work that helps brands feel tangible, memorable, and human beyond the screen.",
    sectionClassName: "highlight-light-green",
    items: [
      {
        title: "Event Mug Design",
        imageSrc: siteAssets.portfolio.eventMugDesignThumb,
        note: {
          text: "Photography courtesy of Deandre Redmon",
          href: "https://www.instagram.com/drevisualsphotography",
          label: "@drevisualsphotography",
        },
        links: [{ href: siteAssets.portfolio.eventMugDesignFull.src, label: "View Image" }],
      },
      {
        title: "Customer Event Signage",
        imageSrc: siteAssets.portfolio.customerEventSignageThumb,
        note: {
          text: "Photography courtesy of Deandre Redmon",
          href: "https://www.instagram.com/drevisualsphotography",
          label: "@drevisualsphotography",
        },
        links: [{ href: getCaseStudyUrl("t-and-u-event-signage"), label: "Read Case Study" }],
      },
      {
        title: "Punny Bumper Stickers",
        imageSrc: siteAssets.portfolio.punnyBumperStickersThumb,
        note: {
          text: "Photography courtesy of Deandre Redmon",
          href: "https://www.instagram.com/drevisualsphotography",
          label: "@drevisualsphotography",
        },
        links: [{ href: getCaseStudyUrl("serious-silly"), label: "Read Case Study" }],
      },
      {
        title: "Castle & Cooke Brochure",
        imageSrc: siteAssets.portfolio.castleCookeBrochureThumb,
        links: [{ href: siteDocuments.portfolio.castleCookeHomebuyersGuide, label: "View Brochure" }],
      },
      {
        title: "CPMI Brochure",
        imageSrc: siteAssets.portfolio.cpmiBrochureThumb,
        links: [{ href: siteDocuments.portfolio.cpmiBrochure, label: "View Brochure" }],
      },
      {
        title: "Logo Design on Hat",
        imageSrc: siteAssets.portfolio.logoDesignOnHatThumb,
        links: [{ href: siteDocuments.portfolio.logoDesignOnHat, label: "View Image", emphasis: "strong" }],
      },
      {
        title: "Logo Design & Signage",
        imageSrc: siteAssets.portfolio.logoDesignSignageThumb,
        links: [{ href: siteDocuments.portfolio.logoDesignSignage, label: "View Image", emphasis: "strong" }],
      },
    ],
  },
  {
    id: "art",
    title: "Art",
    intro:
      "These personal illustration and art pieces show the playful, expressive side of my creative practice. They are a space for experimentation with color, character, texture, and mood that continues to influence my broader design work.",
    items: [
      {
        title: "Space Owl",
        imageSrc: siteAssets.portfolio.spaceOwlThumb,
        links: [{ href: siteDocuments.portfolio.spaceOwl, label: "View Image" }],
      },
      {
        title: "Fire Owl",
        imageSrc: siteAssets.portfolio.fireOwlThumb,
        links: [{ href: siteDocuments.portfolio.fireOwl, label: "View Image" }],
      },
      {
        title: "Pink Owl",
        imageSrc: siteAssets.portfolio.pinkOwlThumb,
        links: [{ href: siteDocuments.portfolio.pinkOwl, label: "View Image" }],
      },
      {
        title: "Angry Woodland",
        imageSrc: siteAssets.portfolio.angryWoodlandThumb,
        links: [{ href: siteDocuments.portfolio.angryWoodland, label: "View Image" }],
      },
      {
        title: "Crane",
        imageSrc: siteAssets.portfolio.craneThumb,
        links: [{ href: siteDocuments.portfolio.crane, label: "View Image" }],
      },
      {
        title: "Magpie",
        imageSrc: siteAssets.portfolio.magpieThumb,
        links: [{ href: siteDocuments.portfolio.magpie, label: "View Image" }],
      },
      {
        title: "Neon Owl",
        imageSrc: siteAssets.portfolio.neonOwlThumb,
        links: [{ href: siteDocuments.portfolio.neonOwl, label: "View Image" }],
      },
      {
        title: "Winter Hummingbird",
        imageSrc: siteAssets.portfolio.winterHummingbirdThumb,
        links: [{ href: siteDocuments.portfolio.winterHummingbird, label: "View Image" }],
      },
      {
        title: "Colorful Bird",
        imageSrc: siteAssets.portfolio.colorfulBirdThumb,
        links: [{ href: siteDocuments.portfolio.colorfulBird, label: "View Image" }],
      },
      {
        title: "Weird Crane",
        imageSrc: siteAssets.portfolio.weirdCraneThumb,
        links: [{ href: siteDocuments.portfolio.weirdCrane, label: "View Image" }],
      },
      {
        title: "Hummingbird",
        imageSrc: siteAssets.portfolio.hummingbirdThumb,
        links: [{ href: siteDocuments.portfolio.hummingbirdRufous, label: "View Image" }],
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="page-shell">
      {/* Intro and jump links for the portfolio gallery sections. */}
      <PageIntro
        title="Portfolio"
        titleId="portfolio"
        variant="default"
        body={
          <>
            <p>
              Where creativity meets business needs and growth: This curated collection showcases my expertise in web
              design and management, social media, print, and branding.
            </p>
            <p>
              Some work shown here was created as part of my employment with current and former employers. Please see
              the <a href="/disclaimer">Portfolio Disclaimer</a> for more context.
            </p>
          </>
        }
        links={
          <p className="portfolio-jump-links">
            <a href="#web-design-and-management">Web Design &amp; Management</a> | <a href="#social-media">Social Media</a>{" "}
            | <a href="#print--misc">Print &amp; Misc</a> | <a href="#art">Art</a>
          </p>
        }
      />

      {/* Each portfolio category is rendered through the shared gallery component. */}
      {portfolioSections.map((section) => (
        <GallerySection
          key={section.id}
          id={section.id}
          title={section.title}
          intro={<p>{section.intro}</p>}
          items={section.items}
          sectionClassName={section.sectionClassName}
        />
      ))}

      <CtaSection title="Excited about what you have seen?">
        If you would like to connect, ask a question, or talk about working together, I would love to hear from you.
      </CtaSection>
    </main>
  );
}
