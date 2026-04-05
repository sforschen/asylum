import type { ReactNode } from "react";

import websiteHeader from "../content/website-header.png";
import CaseStudyFeed from "../components/CaseStudyFeed";
import ExperienceCardsSection, { type ExperienceItem } from "../components/ExperienceCardsSection";
import { getCaseStudyUrl } from "../lib/case-studies";

// Home page feature cards summarizing the main value pillars of the site.
type HomePillar = {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  ctaLabel: string;
};

const homePillars: HomePillar[] = [
  {
    title: "Leadership that creates clarity",
    description:
      "I lead small, energetic teams through complex work by setting direction, reducing friction, and building systems people can actually use.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="13" r="7" />
        <path d="M10 39c1-7 7-12 14-12s13 5 14 12" />
        <path d="M8 21h10" />
        <path d="M30 21h10" />
      </svg>
    ),
    href: "/leadership",
    ctaLabel: "Explore Leadership",
  },
  {
    title: "Marketing operations that scale",
    description:
      "From campaign planning to asset governance, I build structures, workflows, and relationships that support multi-brand marketing without slowing teams down.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="26" width="8" height="14" rx="1" />
        <rect x="20" y="18" width="8" height="22" rx="1" />
        <rect x="32" y="10" width="8" height="30" rx="1" />
        <path d="M8 10l10 6 8-5 14-3" />
      </svg>
    ),
    href: "/experience",
    ctaLabel: "View Experience",
  },
  {
    title: "Design and tech systems that last",
    description:
      "I connect content, creative, platforms, and process so websites, DAMs, project management, and reporting can evolve without constant rework.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="6" y="10" width="14" height="10" rx="2" />
        <rect x="28" y="10" width="14" height="10" rx="2" />
        <rect x="17" y="28" width="14" height="10" rx="2" />
        <path d="M20 15h8" />
        <path d="M24 20v8" />
      </svg>
    ),
    href: "/knowledge",
    ctaLabel: "See Knowledge",
  },
];

// Recent proof points reused from the broader experience page.
const featuredExperience: ExperienceItem[] = [
  {
    title: "Creative Services Director",
    company: "XKIG",
    locationAndDates: "Remote | 8/24-Current",
    summary: (
      <>
        Designing a robust marketing and creative technology ecosystem to drive growth and empower teams to do their
        best work. Identifying the right technology and migration plan to eliminate redundant software and keep costs
        in check while creating a stronger operational foundation.
      </>
    ),
    bullets: [
      "Built an operational excellence program with the VP of Marketing and Communications, including training materials and adoption support.",
      "Created a Smartsheet-based project management system that improves visibility, delivery, and team organization.",
      "Onboarded Brandfolder and built a scalable asset management system for multiple brands.",
    ],
  },
  {
    title: "Digital Content Marketing Manager",
    company: "Elixir",
    locationAndDates: "Remote | 6/22-2/24",
    summary: (
      <>
        Led digital content, accessibility, and platform work across multiple teams. Managed the move to Adobe AEM
        Live in under five months and improved site performance with{" "}
        <strong>Google Lighthouse scores rising from an average of 65 to 98-100.</strong>
      </>
    ),
    bullets: [
      "Managed a development partner and helped establish authoring and development documentation.",
      "Owned HubSpot and vendor relationships while reducing unnecessary annual costs.",
      "Led accessibility improvements across digital and print platforms.",
    ],
    imageSrc:
      "https://www.youneedserenity.com/media_1457d32de283c663183fce53b5a5017f02e24b4a3.png?width=750&format=png&optimize=medium",
    link: {
      href: getCaseStudyUrl("elixir-site"),
      label: "View Case Study",
    },
  },
];

function HomePillarCard({ title, description, icon, href, ctaLabel }: HomePillar) {
  return (
    <article className="home-pillar">
      <div className="home-pillar-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="home-pillar-action">
        <a className="button" href={href}>
          {ctaLabel}
        </a>
      </p>
    </article>
  );
}

function Stat({ value, label }: { value: string; label: ReactNode }) {
  return (
    <div className="home-stat">
      <p className="home-stat-value">{value}</p>
      <p className="home-stat-label">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      {/* Visual header image for the home page. */}
      <section className="hero-container">
        <div className="hero">
          <h1>Leadership for marketing, design, and technology systems</h1>
          <picture>
            <img src={websiteHeader.src} alt="Creative and digital systems work" />
          </picture>
        </div>
      </section>

      {/* Core positioning statement and quick CTAs. */}
      <section className="page-container page-intro home-intro">
        <div className="page-intro-copy home-intro-copy">
          <h1 className="page-title">Leadership for exceptional marketing teams who handle complex design systems, and advanced tech stacks</h1>
          <p className="page-lead home-page-lead">
            I lead teams and build the operational foundations behind content, creative, websites, and digital
            platforms so organizations can scale with less chaos and better results.
          </p>
          <p className="home-supporting-copy">
            My work sits at the intersection of leadership, marketing operations, design systems, website management,
            and technical implementation. That includes migrations, accessibility, asset management, content
            governance, vendor coordination, and the processes that help teams deliver strong work consistently.
          </p>
          <div className="home-actions">
            <a className="button" href="/experience">
              Explore Experience
            </a>
            <a className="button secondary" href="/portfolio">
              View Portfolio
            </a>
          </div>
        </div>

        <div className="home-stat-grid" aria-label="Highlights">
          <Stat value="10+ Years" label="Leading creative, web, and marketing work across teams and platforms." />
          <Stat value="Multi-Brand" label="Building governance, asset systems, and workflows that support scale." />
          <Stat value="High-Performing" label="Leading teams with clear direction, practical systems, and stronger delivery." />
        </div>
      </section>

      {/* High-level offer summary. */}
      <section className="section highlight-light-green">
        <div className="page-container page-section-content">
          <h2 className="section-title">What I Build</h2>
          <div className="home-pillars">
            {homePillars.map((pillar) => (
              <HomePillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership narrative paired with a quick focus-area list. */}
      <section className="page-container home-leadership-callout">
        <div className="home-callout-copy">
          <h2 className="section-title">Leadership That Keeps Work Moving</h2>
          <p>
            I enjoy leading teams in operations, marketing, creative projects, and website management initiatives. It
            is especially rewarding to guide small, energetic teams through high-impact work together.
          </p>
          <p>
            My approach is hands-on and systems-minded: clear direction, open communication, useful process, and the
            right technology choices so teams can take ownership and deliver confidently.
          </p>
        </div>
        <div className="home-callout-card">
          <h3>Core focus areas</h3>
          <ul className="home-focus-list">
            <li>Website migrations and CMS governance</li>
            <li>Marketing operations and project management systems</li>
            <li>Accessibility, content standards, and team enablement</li>
            <li>Creative production across web, print, social, and internal communications</li>
          </ul>
          <p>
            <a className="button" href="/leadership">
              Read More About Leadership
            </a>
          </p>
        </div>
      </section>

      {/* Selected experience cards that reinforce the home page message. */}
      <ExperienceCardsSection
        id="leadership-in-practice"
        title="Leadership In Practice"
        items={featuredExperience}
        sectionClassName="highlight"
        cardsClassName="cards-archive"
      />

      <CaseStudyFeed
        title="Latest Case Studies"
        intro="Selected portfolio pieces now live as posts, so visitors can scan recent work right from the home page."
        limit={3}
        showViewAll
      />

      {/* Closing CTA for visitors who want work samples next. */}
      <section className="section highlight-light-green">
        <div className="page-container page-section-content home-cta">
          <h2 className="section-title">Built For Complex Teams</h2>
          <p>
            If the work involves aligning marketing, design, websites, content, process, and technology, that is where
            I do some of my best work.
          </p>
          <p>
            <a className="button" href="/portfolio">
              See Selected Work
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
