"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import ContentSection from "./ContentSection";

export type ExperienceItem = {
  title: string;
  company: string;
  locationAndDates: string;
  summary: ReactNode;
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  link?: {
    href: string;
    label: string;
    emphasis?: "strong";
  };
};

type Props = {
  id: string;
  title: string;
  items: ExperienceItem[];
  sectionClassName?: string;
  cardsClassName?: string;
};

function ExperienceLink({ href, label, emphasis }: NonNullable<ExperienceItem["link"]>) {
  const content = emphasis === "strong" ? <strong>{label}</strong> : label;

  return (
    <p>
      <a className="button" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    </p>
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
          <img src={item.imageSrc} alt={item.imageAlt ?? item.title} loading="lazy" />
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
        {item.link ? <ExperienceLink {...item.link} /> : null}
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
