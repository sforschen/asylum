import CtaSection from "../../components/CtaSection";
import GallerySection, { type GalleryItem } from "../../components/GallerySection";
import { siteAssets } from "../../content/siteAssets";
import { siteDocuments } from "../../content/siteDocuments";
import PageIntro from "../../components/PageIntro";
import { getCaseStudyUrl } from "../../lib/case-studies";

export const metadata = {
  title: "Portfolio",
  description:
    "Browse portfolio work from Serenity Forschen across web design and management, branding, social media, and personal art.",
};

// Gallery data mirrors the sections on the live portfolio site.
type PortfolioSection = {
  id: string;
  title: string;
  intro: string;
  sectionClassName?: string;
  items: GalleryItem[];
};

const experienceLinks = {
  castleCooke: "/experience#castle-cooke",
  cpmi: "/experience#cpmi-solutions",
  crEngland: "/experience#cr-england",
  elixir: "/experience#elixir",
  optum: "/experience#optum",
  xkig: "/experience#xkig",
};

const experienceLabel = "View Related Experience";

const portfolioSections: PortfolioSection[] = [
  {
    id: "web-design-and-management",
    title: "Web Design & Management",
    intro:
      "This section highlights website strategy, design direction, publishing workflows, and the practical systems that help teams keep digital experiences current. The work spans redesigns, migrations, authoring support, and content structures built to scale.",
    sectionClassName: "highlight",
    items: [
      {
        title: "Website Migration & Redesign",
        imageSrc: siteAssets.portfolio.elixirWebsiteThumb,
        experienceHref: experienceLinks.elixir,
        experienceLabel,
        links: [{ href: getCaseStudyUrl("elixir-site"), label: "Read Case Study" }],
      },
      {
        title: "Website Migration & Launch",
        imageSrc: siteAssets.portfolio.optumWebsiteThumb,
        experienceHref: experienceLinks.optum,
        experienceLabel,
        links: [{ href: getCaseStudyUrl("optum-site"), label: "Read Case Study" }],
      },
      {
        title: "Continuing Education Campaign",
        imageSrc: siteAssets.portfolio.optumCeThumbnail,
        experienceHref: experienceLinks.optum,
        experienceLabel,
        links: [{ href: getCaseStudyUrl("optum-ce-campaign"), label: "Read Case Study" }],
      },
      {
        title: "Custom Solutions Website",
        imageSrc: siteAssets.portfolio.cpmiSolutionsWebsiteThumb,
        experienceHref: experienceLinks.cpmi,
        experienceLabel,
        links: [{ href: siteDocuments.portfolio.cpmiSolutionsWebsite, label: "View Image" }],
      },
      {
        title: "Landing Page Design",
        imageSrc: siteAssets.portfolio.crEnglandPageThumb,
        experienceHref: experienceLinks.crEngland,
        experienceLabel,
        links: [{ href: siteDocuments.portfolio.crEnglandPage, label: "View Image" }],
      },
      {
        title: "Recruiting Campaign Page",
        imageSrc: siteAssets.portfolio.crEnglandRecruitingThumb,
        experienceHref: experienceLinks.crEngland,
        experienceLabel,
        links: [{ href: siteDocuments.portfolio.crEnglandRecruiting, label: "View Image" }],
      },
    ],
  },
  {
    id: "branding",
    title: "Branding",
    intro:
      "This collection brings together print design, branded collateral, event materials, and one-off creative pieces with a strong point of view. It reflects the kind of work that helps brands feel tangible, memorable, and human beyond the screen.",
    items: [
      {
        title: "Confidential Performance Communications",
        imageSrc: siteAssets.caseStudies.confidentialPerformanceCommunicationsHero,
        imageAlt: "Person working at a laptop, representing a confidential automated communication workflow",
        experienceHref: experienceLinks.xkig,
        experienceLabel,
        links: [{ href: getCaseStudyUrl("confidential-performance-communications"), label: "Read Case Study" }],
      },
      {
        title: "Event Mug Design",
        imageSrc: siteAssets.portfolio.eventMugDesignThumb,
        experienceHref: experienceLinks.xkig,
        experienceLabel,
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
        experienceHref: experienceLinks.xkig,
        experienceLabel,
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
        experienceHref: experienceLinks.xkig,
        experienceLabel,
        note: {
          text: "Photography courtesy of Deandre Redmon",
          href: "https://www.instagram.com/drevisualsphotography",
          label: "@drevisualsphotography",
        },
        links: [{ href: getCaseStudyUrl("serious-silly"), label: "Read Case Study" }],
      },
      {
        title: "Homebuyers Guide Brochure",
        imageSrc: siteAssets.portfolio.castleCookeBrochureThumb,
        experienceHref: experienceLinks.castleCooke,
        experienceLabel,
        links: [{ href: siteDocuments.portfolio.castleCookeHomebuyersGuide, label: "View Brochure" }],
      },
      {
        title: "Capabilities Brochure",
        imageSrc: siteAssets.portfolio.cpmiBrochureThumb,
        experienceHref: experienceLinks.cpmi,
        experienceLabel,
        links: [{ href: siteDocuments.portfolio.cpmiBrochure, label: "View Brochure" }],
      },
      {
        title: "Logo Design on Hat",
        imageSrc: siteAssets.portfolio.logoDesignOnHatThumb,
        experienceHref: experienceLinks.cpmi,
        experienceLabel,
        links: [{ href: siteDocuments.portfolio.logoDesignOnHat, label: "View Image", emphasis: "strong" }],
      },
      {
        title: "Logo Design & Signage",
        imageSrc: siteAssets.portfolio.logoDesignSignageThumb,
        experienceHref: experienceLinks.cpmi,
        experienceLabel,
        links: [{ href: siteDocuments.portfolio.logoDesignSignage, label: "View Image", emphasis: "strong" }],
      },
    ],
  },
  {
    id: "social-media",
    title: "Social Media",
    intro:
      "These pieces show how I shape social content that supports campaigns, announcements, and brand storytelling across channels. The work balances visual clarity, audience engagement, and messaging that is concise enough to perform well in fast-moving feeds.",
    sectionClassName: "highlight-light-green",
    items: [
      {
        title: "Safety Month Social Post",
        imageSrc: siteAssets.social.safetyMonthPostThumb,
        experienceHref: experienceLinks.xkig,
        experienceLabel,
        links: [{ href: "https://www.linkedin.com/posts/kendallvegetation_nationalsafetymonth-staysafe-kendallsafety-activity-7336519759825436672-Od33?utm_source=share&utm_medium=member_desktop&rcm=ACoAAADjjKoBrLu0hYpMutgsETO7iPh4dsJBBeU", label: "View on LinkedIn" }],
      },
      {
        title: "Campaign Video Post",
        imageSrc: siteAssets.social.socialVideoPostOneThumb,
        experienceHref: experienceLinks.elixir,
        experienceLabel,
        links: [{ href: "https://www.linkedin.com/feed/update/urn:li:activity:7062426632422076416?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Holiday Social Post",
        imageSrc: siteAssets.social.holidayPostThumb,
        experienceHref: experienceLinks.elixir,
        experienceLabel,
        links: [{ href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_happy-holidays-from-the-elixir-team-we-are-activity-7142891357659934720-4IuP?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Diabetes Awareness Video Post",
        imageSrc: siteAssets.social.socialVideoPostTwoThumb,
        experienceHref: experienceLinks.elixir,
        experienceLabel,
        links: [{ href: "https://www.linkedin.com/posts/serenityforschen_defeatdiabetes-elixirpbm-activity-7053744684485005312-fSyj?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Event Announcement Social Post",
        imageSrc: siteAssets.social.eventAnnouncementThumb,
        experienceHref: experienceLinks.elixir,
        experienceLabel,
        links: [{ href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_elixirpbm-activity-7087111883664625665-7zAi?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
      },
      {
        title: "Flu Season Blog Promotion",
        imageSrc: siteAssets.social.blogPostThumb,
        experienceHref: experienceLinks.elixir,
        experienceLabel,
        links: [{ href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_flu-season-is-right-around-the-corner-read-activity-7101971724866371584-VgWY?utm_source=share&utm_medium=member_desktop", label: "View on LinkedIn" }],
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
    <main className="page-shell portfolio-page">
      {/* Intro and jump links for the portfolio gallery sections. */}
      <PageIntro
        title="Portfolio"
        titleId="portfolio"
        kicker="Selected works"
        variant="default"
        body={
          <>
            <p>
              Where creativity meets business needs and growth: This curated collection showcases my expertise in web
              design and management, branding, and social media.
            </p>
            <p>
              Much of the work shown here was created as part of my employment with current and former employers. Please see
              the <a href="/disclaimer">Portfolio Disclaimer</a> for more context.
            </p>
          </>
        }
        links={
          <p className="portfolio-jump-links">
            <a href="#web-design-and-management">Web Design &amp; Management</a> | <a href="#branding">Branding</a>{" "}
            | <a href="#social-media">Social Media</a> | <a href="#art">Art</a>
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
          eagerFirstImage={section.id === "web-design-and-management"}
        />
      ))}

      <CtaSection title="Like what you see?">
        If you would like to connect, ask a question, or talk about working together, I would love to hear from you.
      </CtaSection>
    </main>
  );
}
