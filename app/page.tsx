import type { ReactNode } from "react";
import { FeaturePicker, SkillLevelAdvanced, Webhook } from "@carbon/icons-react";

import websiteHeader from "../content/website-header.png";
import CaseStudyFeed from "../components/CaseStudyFeed";
import MediaModalImage from "../components/MediaModalImage";

export const metadata = {
  title: "Home",
  description:
    "Leadership, marketing operations, and design systems work from Serenity Forschen, with experience across websites, digital platforms, accessibility, and team operations.",
};

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
    title: "Design & tech systems that last",
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
          <h1>Leadership for marketing, design, &amp; technology systems</h1>
          <div className="hero-media">
            <MediaModalImage
              buttonClassName="hero-media-button media-modal-image-button"
              src={websiteHeader}
              alt="Creative and digital systems work"
              fill
              priority
              quality={70}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Core positioning statement and quick CTAs. */}
      <section className="page-container page-intro home-intro">
        <div className="page-intro-copy home-intro-copy">
          <h1>Leadership for Exceptional Marketing Teams</h1>
          <p className="page-kicker">
            Complex systems, tech stacks, and dedicated teams building scalable, efficient foundations.
          </p>
          <p>
            My work sits at the intersection of business development, marketing operations, design systems, website management, and technical implementation. That includes migrations, accessibility, asset management, content governance, vendor coordination, and the processes that help teams consistently deliver strong work.
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
      <section className="section highlight-blue home-build-section">
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
            My approach is all about being supportive, hands-on, and a little bit playful—clear direction, open communication, and practical processes. With the right tools and plenty of encouragement, I help teams take ownership and deliver their best work with confidence.
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
        intro="A closer look at selected projects, the thinking behind them, and the work to bring them to life."
        limit={2}
        showViewAll
      />
    </main>
  );
}
