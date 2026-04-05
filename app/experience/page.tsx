import ExperienceCardsSection, { type ExperienceItem } from "../../components/ExperienceCardsSection";
import PageIntro from "../../components/PageIntro";

// Full experience inventory, later split into featured and archive sections.
const experienceItems: ExperienceItem[] = [
  {
    title: "Creative Services Director",
    company: "XKIG",
    locationAndDates: "Remote | 8/24-Current",
    summary:
      "Designing a robust marketing and creative technology ecosystem to drive growth and empower teams to do their best work. Identifying the right technology and migration plan to eliminate redundant software and keep costs in check.",
    bullets: [
      "Created an operational excellence program with the VP of Marketing and Communications. Establishing a company-wide program, including training materials and sessions to encourage program adoption.",
      "Built a project management system in Smartsheet, which is familiar to the team, easy to use, helps deliver projects on time, and keeps us organized.",
      "Onboarded Brandfolder and built an asset management system that works with multiple brands and scales with company growth.",
      "Led technology integration initiatives to ensure all software works together.",
      "Executing various creative tasks, including print, social media, emails, presentations, and internal documents.",
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
    imageSrc:
      "https://www.youneedserenity.com/media_1457d32de283c663183fce53b5a5017f02e24b4a3.png?width=750&format=png&optimize=medium",
    link: {
      href: "https://www.youneedserenity.com/portfolio/elixir-site",
      label: "View Case Study",
    },
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

      {/* Older roles are condensed into the archive grid. */}
      <ExperienceCardsSection
        id="earlier-experience"
        title="Earlier Experience"
        items={archivedExperience}
        cardsClassName="cards-archive"
      />
    </main>
  );
}
