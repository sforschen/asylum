import type { ReactNode } from "react";
import { FeaturePicker, SkillLevelAdvanced, Webhook } from "@carbon/icons-react";
import Image from "next/image";

import resourceFeatureImage from "../content/site-assets/alexander-grey-tn57JI3CewI-unsplash.jpg";
import websiteHeader from "../content/site-assets/header-site-optimized.jpg";
import CaseStudyFeed from "../components/CaseStudyFeed";

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

type HomeFeature = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  highlights: string[];
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

const featuredHomeResource: HomeFeature = {
  eyebrow: "Featured resource",
  title: "Build a basic file & folder system",
  description:
    "A fillable tool for turning messy shared drives, asset libraries, and naming habits into a practical starter system with downloadable guides.",
  href: "/resources/file-management-system",
  ctaLabel: "Open the Resource",
  secondaryHref: "/blog/file-management-systems",
  secondaryLabel: "Read the Case Study",
  highlights: [
    "Create a folder map from selected workstreams, departments, products, services, or custom sections.",
    "Build naming conventions, asset library folders, and reusable asset abbreviations.",
    "Download an AI prompt, Word or TXT guide, asset index CSV, and setup script.",
  ],
};

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
            <Image
              src={websiteHeader}
              alt="Creative and digital systems work"
              fill
              quality={70}
              sizes="(max-width: 49.5rem) 1px, 100vw"
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

          <div className="home-stat-grid" aria-label="Highlights">
            <Stat value="10+ Years" label="Leading creative, web, and marketing work across teams and platforms." />
            <Stat value="Multi-Brand" label="Building governance, asset systems, and workflows that support scale." />
            <Stat value="High-Performing" label="Leading teams with clear direction, practical systems, and stronger delivery." />
          </div>
        </div>

        <aside className="home-feature-sidebar" aria-labelledby="home-feature-title">
          <div className="home-feature-image">
            <Image
              src={resourceFeatureImage}
              alt="A stack of colorful folders and papers"
              fill
              sizes="(max-width: 56.25rem) 100vw, 24rem"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="home-feature-sidebar-header">
            <p>{featuredHomeResource.eyebrow}</p>
            <h2 id="home-feature-title">{featuredHomeResource.title}</h2>
          </div>
          <p>{featuredHomeResource.description}</p>
          <ul className="home-feature-list">
            {featuredHomeResource.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="home-feature-actions">
            <a className="button on-dark" href={featuredHomeResource.href}>
              {featuredHomeResource.ctaLabel}
            </a>
            <a className="button secondary" href={featuredHomeResource.secondaryHref}>
              {featuredHomeResource.secondaryLabel}
            </a>
          </div>
        </aside>
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

      <CaseStudyFeed
        title="Latest Case Studies"
        intro="A closer look at selected projects, the thinking behind them, and the work to bring them to life."
        limit={2}
        showViewAll
      />
    </main>
  );
}
