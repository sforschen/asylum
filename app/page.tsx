import type { ReactNode } from "react";
import { FeaturePicker, SkillLevelAdvanced, Webhook } from "@carbon/icons-react";

import websiteHeader from "../content/website-header.png";
import CaseStudyFeed from "../components/CaseStudyFeed";

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
      <FeaturePicker aria-hidden="true" />
    ),
    href: "/leadership",
    ctaLabel: "Explore Leadership",
  },
  {
    title: "Marketing operations that scale",
    description:
      "From campaign planning to asset governance, I build structures, workflows, and relationships that support multi-brand marketing without slowing teams down.",
    icon: (
      <SkillLevelAdvanced aria-hidden="true" />
    ),
    href: "/experience",
    ctaLabel: "View Experience",
  },
  {
    title: "Design and tech systems that last",
    description:
      "I connect content, creative, platforms, and process so websites, DAMs, project management, and reporting can evolve without constant rework.",
    icon: (
      <Webhook aria-hidden="true" />
    ),
    href: "/knowledge",
    ctaLabel: "See Knowledge",
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
      <h3 className="home-stat-value">{value}</h3>
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
          <p>
            I lead teams and build the operational foundations behind content, creative, websites, and digital
            platforms so organizations can scale with less chaos and better results.
          </p>
          <p>
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

      <CaseStudyFeed
        title="Latest Case Studies"
        intro="Selected portfolio pieces now live as posts, so visitors can scan recent work right from the home page."
        limit={2}
        showViewAll
      />
    </main>
  );
}
