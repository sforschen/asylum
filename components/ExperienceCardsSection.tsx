"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import ContentSection from "./ContentSection";

export type ExperienceItem = {
  title: string;
  company: string;
  locationAndDates: string;
  summary: ReactNode;
  bullets?: string[];
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  relatedAssets?: Array<{
    href: string;
    label: string;
    emphasis?: "strong";
  }>;
  relatedCaseStudies?: Array<{
    href: string;
    label: string;
    emphasis?: "strong";
  }>;
};

type Props = {
  id: string;
  title: string;
  items: ExperienceItem[];
  sectionClassName?: string;
  cardsClassName?: string;
};

type ExperienceLinkItem = {
  href: string;
  label: string;
  emphasis?: "strong";
};

function ExperienceLink({ href, label, emphasis }: ExperienceLinkItem) {
  const content = emphasis === "strong" ? <strong>{label}</strong> : label;
  const isExternal = href.startsWith("http");

  return (
    <p className="experience-link-item">
      {isExternal ? (
        <a href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <Link href={href}>
          {content}
        </Link>
      )}
    </p>
  );
}

function ExperienceLinkGroup({ title, links }: { title: string; links: ExperienceLinkItem[] }) {
  return (
    <div className="experience-link-group">
      <h4>{title}</h4>
      <div className="experience-link-list">
        {links.map((link) => (
          <ExperienceLink key={`${title}-${link.href}`} {...link} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      {item.imageSrc ? (
        <div
          className={`cards-card-image${expanded ? " expanded" : ""}`}
          onClick={() => setExpanded((current) => !current)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setExpanded((current) => !current);
            }
          }}
        >
          <Image
            src={item.imageSrc}
            alt={item.imageAlt ?? item.title}
            width={1200}
            height={600}
            sizes="(min-width: 960px) 50vw, 100vw"
          />
          <div className="overlay-text">{expanded ? "CLOSE" : "EXPAND"}</div>
        </div>
      ) : null}
      <div className="cards-card-body">
        <h3>
          <strong>{item.title}</strong>
        </h3>
        <p>
          {item.company}
          <br />
          {item.locationAndDates}
        </p>
        <p>{item.summary}</p>
        {item.bullets ? (
          <ul className="experience-bullet-list">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        {item.relatedCaseStudies?.length ? (
          <ExperienceLinkGroup title="Related Case Studies" links={item.relatedCaseStudies} />
        ) : null}
        {item.relatedAssets?.length ? (
          <ExperienceLinkGroup title="Related Assets" links={item.relatedAssets} />
        ) : null}
      </div>
    </li>
  );
}

export default function ExperienceCardsSection({ id, title, items, sectionClassName, cardsClassName }: Props) {
  return (
    <ContentSection
      id={id}
      title={title}
      addSpacer
      outerClassName={sectionClassName ? `section ${sectionClassName}` : "page-container experience-section"}
      innerClassName={sectionClassName ? "page-container page-section-content" : undefined}
    >
      <div className={`cards${cardsClassName ? ` ${cardsClassName}` : ""}`}>
        <ul>
          {items.map((item) => (
            <ExperienceCard key={`${item.company}-${item.title}`} item={item} />
          ))}
        </ul>
      </div>
    </ContentSection>
  );
}
