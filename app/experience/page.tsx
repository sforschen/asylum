import CtaSection from "../../components/CtaSection";
import ExperienceCardsSection, { type ExperienceItem } from "../../components/ExperienceCardsSection";
import ExperienceTimelineSection, { type ExperienceTimelineItem } from "../../components/ExperienceTimelineSection";
import { siteAssets } from "../../content/siteAssets";
import { siteDocuments } from "../../content/siteDocuments";
import PageIntro from "../../components/PageIntro";
import { getCaseStudyUrl } from "../../lib/case-studies";

export const metadata = {
  title: "Experience",
  description:
    "Explore Serenity Forschen's experience across leadership, digital marketing, creative operations, website management, and production work.",
};

// Full experience inventory, later split into featured and archive sections.
const experienceItems: ExperienceItem[] = [
  {
    title: "Creative Services Director",
    company: "XKIG",
    locationAndDates: "Remote | 8/24-Current",
    summary: (
      <>
        Led creative services and marketing department operations, people, and marketing technology to increase
        throughput, consistency, and on-time delivery across a multi-brand organization.{" "}
        <strong className="text-orange">
          Built scalable systems that enable teams to collaborate effectively, execute efficiently, and produce
          high-quality work.
        </strong>
      </>
    ),
    bullets: [
      "Led a cross-functional creative services team (Developer; Photo/Video Specialist), setting priorities, clarifying roles, and removing blockers to maintain the highest productivity in the department.",
      "Ran department meetings and operating rhythms to align stakeholders, review pipeline status, and ensure accountable follow-through across initiatives.",
      "Owned the project management and file management ecosystem, establishing standards for intake, tracking, and delivery to improve visibility, consistency, and speed.",
      "Modernized operations with the team by onboarding WordPress, Brandfolder, HubSpot, and Staffbase; building a scalable, multi-brand asset management structure to improve governance, access, and reuse.",
      "Led the launch of River City's new website, coordinating planning, development execution, and stakeholder alignment to deliver a successful go-live.",
      "Co-created an Operational Excellence program with the VP of Marketing & Communications, developing training materials and facilitating company-wide sessions to drive adoption and performance.",
      "Fostered a collaborative, high-trust team environment while maintaining clear structure, ensuring teams could do their best work without losing cohesion or standards.",
      "Partnered with marketing leadership to translate business goals into actionable creative roadmaps across digital, print, email, presentations, and internal communications.",
    ],
    relatedCaseStudies: [
      {
        href: getCaseStudyUrl("t-and-u-event-signage"),
        label: "Customer Event Signage",
      },
      {
        href: getCaseStudyUrl("serious-silly"),
        label: "Punny Bumper Stickers",
      },
    ],
    relatedAssets: [
      {
        href: "https://www.linkedin.com/posts/kendallvegetation_nationalsafetymonth-staysafe-kendallsafety-activity-7336519759825436672-Od33?utm_source=share&utm_medium=member_desktop&rcm=ACoAAADjjKoBrLu0hYpMutgsETO7iPh4dsJBBeU",
        label: "Safety Month Post",
      },
      {
        href: siteDocuments.portfolio.eventMugDesign,
        label: "Event Mug Design",
      },
    ],
  },
  {
    title: "Digital Content Marketing Manager",
    company: "Elixir",
    locationAndDates: "Remote | 6/22-2/24",
    summary: (
      <>
        Managed digital content and enhanced user experience across multiple platforms. Implemented accessibility
        compliance and digital solutions that delivered information efficiently. Managed the transfer of
        elixirsolutions.com to a new Adobe platform, AEM Live (also known as Franklin or Helix), in under five months
        and updated the code base, resulting in{" "}
        <strong>Google Lighthouse scores going from an average of 65 to a near-perfect 98-100.</strong>
      </>
    ),
    bullets: [
      "Managed a small development team and Adobe partnership. Worked with the developer to create comprehensive authoring and development documentation on SharePoint.",
      "Owned HubSpot and vendor relationships and reduced annual costs by removing unused add-ons.",
      "Created a product marketing & sales SharePoint site and trained stakeholders on its use and upkeep.",
      "Advised departments on Microsoft 365 capabilities and helped them utilize cloud capabilities.",
      "Led the marketing team to higher accessibility standards by advising on 508 and WCAG requirements and implementing changes across print and digital platforms.",
      "Managed and produced blog and email campaigns.",
    ],
    imageSrc: siteAssets.experience.elixir,
    relatedCaseStudies: [
      {
        href: getCaseStudyUrl("elixir-site"),
        label: "Elixir Website Case Study",
      },
    ],
    relatedAssets: [
      {
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7062426632422076416?utm_source=share&utm_medium=member_desktop",
        label: "Video Post",
      },
      {
        href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_happy-holidays-from-the-elixir-team-we-are-activity-7142891357659934720-4IuP?utm_source=share&utm_medium=member_desktop",
        label: "Holiday Post",
      },
      {
        href: "https://www.linkedin.com/posts/serenityforschen_defeatdiabetes-elixirpbm-activity-7053744684485005312-fSyj?utm_source=share&utm_medium=member_desktop",
        label: "Defeat Diabetes Video Post",
      },
      {
        href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_elixirpbm-activity-7087111883664625665-7zAi?utm_source=share&utm_medium=member_desktop",
        label: "Event Announcement",
      },
      {
        href: "https://www.linkedin.com/posts/elixir-craftedrxsolutions_flu-season-is-right-around-the-corner-read-activity-7101971724866371584-VgWY?utm_source=share&utm_medium=member_desktop",
        label: "Blog Post Promotion",
      },
    ],
  },
  {
    title: "Marketing Specialist II",
    company: "Optum",
    locationAndDates: "Remote | 6/19-6/22",
    summary: (
      <>
        Critically thought through digital and print projects for various healthcare topics and audiences, and launched
        them.{" "}
        <strong>
          Managed the migration to a new website platform (AEM) and designed and launched the company&apos;s new website
          in three months.
        </strong>{" "}
        Developed and implemented a task-tracking project management system to increase interdepartmental visibility and
        better report our activities.
      </>
    ),
    bullets: [
      "Managed migration of marketing collateral to a new SharePoint site with the IT team.",
      "In collaboration with the Continuing Education Program manager, we developed an advertising campaign for each course throughout the year. I was responsible for the design, project timelines, and timely distribution. Our efforts led to a 30% increase in webinar attendance within a year.",
      "Met federal contractual obligations by adhering to design and communications standards.",
      "Managed blogs and digital content.",
    ],
    relatedCaseStudies: [
      {
        href: getCaseStudyUrl("optum-site"),
        label: "Optum Website Case Study",
      },
      {
        href: getCaseStudyUrl("optum-ce-campaign"),
        label: "Optum CE Campaign Case Study",
      },
    ],
  },
  {
    title: "Creative Director",
    company: "CPMI Solutions",
    locationAndDates: "Salt Lake City | 8/16-2/19",
    summary: (
      <>
        Working in a small team environment, I managed, developed, and implemented cost-saving processes for creative
        projects. <strong>I also advised our sales team on design, production, and challenges.</strong> Managed
        production process from design and reviews to making artwork press-ready and running the digital presses.
        Designed and managed company website and custom digital storefronts for clients.
      </>
    ),
    relatedAssets: [
      {
        href: siteDocuments.portfolio.cpmiSolutionsWebsite,
        label: "CPMI Website",
      },
      {
        href: siteDocuments.portfolio.cpmiBrochure,
        label: "CPMI Brochure",
      },
      {
        href: siteDocuments.portfolio.logoDesignSignage,
        label: "Logo Design & Signage",
      },
    ],
  },
  {
    title: "Front End Web and Graphic Designer",
    company: "C.R. England",
    locationAndDates: "Salt Lake City | 5/15-6/16",
    summary: (
      <>
        Designed and managed projects, including websites, emails, posters, PDFs, etc. Through strategic design and
        process optimization, I created a landing page testing environment that{" "}
        <strong>steadily increased response rates while maintaining a professional, trustworthy aesthetic.</strong>
      </>
    ),
    relatedAssets: [
      {
        href: siteDocuments.portfolio.crEnglandPage,
        label: "C.R. England Page",
      },
      {
        href: siteDocuments.portfolio.crEnglandRecruiting,
        label: "C.R. England Recruiting",
      },
    ],
  },
  {
    title: "Marketing Specialist",
    company: "Castle & Cooke Mortgage LLC",
    locationAndDates: "Salt Lake City | 6/14-2/15",
    summary: (
      <>
        Responsible for creating all marketing content, I developed brand-appropriate, regulation-compliant materials.{" "}
        <strong>Maintained a broad portfolio of customized assets</strong> delivered to vendors and over 30 branches.
      </>
    ),
    relatedAssets: [
      {
        href: siteDocuments.portfolio.castleCookeHomebuyersGuide,
        label: "Castle & Cooke Brochure",
      },
    ],
  },
  {
    title: "Graphic Designer",
    company: "Helix Education",
    locationAndDates: "Salt Lake City | 10/05-5/14",
    summary: (
      <>
        Created concepts for direct marketing, worked in a team environment, handled the majority of clients, and
        balanced new projects while maintaining a <strong>95+ percent on-time rate.</strong> Developed training and
        operations materials.
      </>
    ),
  },
];

const featuredExperience = experienceItems.slice(0, 3);
const archivedExperience = experienceItems.slice(3);
const experienceTimeline: ExperienceTimelineItem[] = [
  {
    role: "You Are Here",
    company: "Leading the future of creativity and marketing",
    type: "Current Focus",
    highlight: "This marks the current point in the story: leadership, digital operations, creative execution, and practical systems thinking working together.",
    isCurrent: true,
  },
  {
    role: "Creative Services Director",
    company: "XKIG",
    type: "Leadership",
    highlight: "Built marketing systems, DAM structure, and operational support for a growing multi-brand environment.",
  },
  {
    role: "Digital Content Marketing Manager",
    company: "Elixir",
    type: "Digital",
    highlight: "Led web, accessibility, and platform work, including a major site migration with near-perfect Lighthouse scores.",
  },
  {
    role: "Marketing Specialist II",
    company: "Optum",
    type: "Web + Campaigns",
    highlight: "Managed web launches, campaign execution, and process visibility across complex healthcare marketing work.",
  },
  {
    role: "Creative Director",
    company: "CPMI Solutions",
    type: "Creative Ops",
    highlight: "Directed production, client design work, and storefront/web projects in a fast-moving small team.",
  },
  {
    role: "Front End Web and Graphic Designer",
    company: "C.R. England",
    type: "Web Design",
    highlight: "Designed landing pages, emails, and campaign assets with a focus on testing and stronger response rates.",
  },
  {
    role: "Marketing Specialist",
    company: "Castle & Cooke Mortgage LLC",
    type: "Brand + Print",
    highlight: "Produced compliant branch marketing materials and broad supporting collateral across the business.",
  },
  {
    role: "Graphic Designer",
    company: "Helix Education",
    type: "Production Design",
    highlight: "Balanced high-volume client work, concept development, and training material creation with a strong on-time rate.",
  },
  {
    role: "AAS in Visual Art & Design",
    company: "Salt Lake Community College",
    type: "Education",
    highlight: "Graphic Design emphasis with honors, forming the visual and production foundation behind the work that followed.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      {/* Uses the same intro treatment as the knowledge page. */}
      <PageIntro
        title="Experience"
        titleId="experience"
        variant="knowledge"
        body={
          <p>
            A selection of recent leadership and digital marketing roles, followed by earlier experience across web,
            creative, and production work.
          </p>
        }
      />

      {/* Recent roles get the more prominent layout treatment. */}
      <ExperienceCardsSection
        id="recent-experience"
        title="Recent Experience"
        items={featuredExperience}
        sectionClassName="highlight"
        cardsClassName="cards-featured"
      />

      <ExperienceTimelineSection items={experienceTimeline} />

      {/* Older roles are condensed into the archive grid. */}
      <ExperienceCardsSection
        id="earlier-experience"
        title="Earlier Experience"
        items={archivedExperience}
        sectionClassName="highlight-light-green"
        cardsClassName="cards-archive"
      />

      <CtaSection title="Interested in the experience behind the work?">
        If you would like to connect, ask a question, or talk about how I could support your team, I would love to
        hear from you.
      </CtaSection>
    </main>
  );
}
