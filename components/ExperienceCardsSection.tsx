"use client";

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { ArrowRight, ImageCopy, ImageSearch } from "@carbon/icons-react";
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
  const linkContent = (
    <>
      <span>{content}</span>
      <ArrowRight aria-hidden="true" />
    </>
  );

  return (
    <li className="experience-link-item">
      {mediaType ? (
        <MediaModalLink href={href} modalTitle={label}>
          {linkContent}
        </MediaModalLink>
      ) : isExternal ? (
        <a href={href} target="_blank" rel="noreferrer">
          {linkContent}
        </a>
      ) : (
        <Link href={href}>
          {linkContent}
        </Link>
      )}
    </li>
  );
}

function ExperienceLinkGroup({
  title,
  links,
  type,
}: {
  title: string;
  links: ExperienceLinkItem[];
  type: "case-studies" | "assets";
}) {
  const GroupIcon = type === "case-studies" ? ImageSearch : ImageCopy;
  const itemLabel = type === "case-studies" ? "case study" : "asset";

  return (
    <section className={`experience-link-group experience-link-group-${type}`}>
      <div className="experience-link-group-header">
        <span className="experience-link-group-icon" aria-hidden="true">
          <GroupIcon />
        </span>
        <div>
          <h4>{title}</h4>
          <p>
            {links.length} {itemLabel}{links.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>
      <ul className="experience-link-list">
        {links.map((link) => (
          <ExperienceLink key={`${title}-${link.href}`} {...link} />
        ))}
      </ul>
    </section>
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
        {item.relatedCaseStudies?.length || item.relatedAssets?.length ? (
          <div className="experience-link-groups">
            {item.relatedCaseStudies?.length ? (
              <ExperienceLinkGroup
                title="Related Case Studies"
                links={item.relatedCaseStudies}
                type="case-studies"
              />
            ) : null}
            {item.relatedAssets?.length ? (
              <ExperienceLinkGroup title="Related Assets" links={item.relatedAssets} type="assets" />
            ) : null}
          </div>
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
