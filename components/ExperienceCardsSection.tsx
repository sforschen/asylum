"use client";

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import ContentSection from "./ContentSection";
import MediaModalImage from "./MediaModalImage";
import MediaModalLink from "./MediaModalLink";
import { getMediaTypeFromUrl } from "../lib/media";

export type ExperienceItem = {
  id?: string;
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
  const mediaType = getMediaTypeFromUrl(href);

  return (
    <p className="experience-link-item">
      {mediaType ? (
        <MediaModalLink href={href} modalTitle={label}>
          {content}
        </MediaModalLink>
      ) : isExternal ? (
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
  return (
    <li id={item.id}>
      {item.imageSrc ? (
        <MediaModalImage
          buttonClassName="cards-card-image media-modal-image-button"
          src={item.imageSrc}
          alt={item.imageAlt ?? item.title}
          width={1200}
          height={600}
          sizes="(min-width: 960px) 50vw, 100vw"
        >
          <div className="overlay-text">OPEN</div>
        </MediaModalImage>
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
