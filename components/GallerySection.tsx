import type { ReactNode } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";

import ContentSection from "./ContentSection";
import MediaModalImage from "./MediaModalImage";
import MediaModalLink from "./MediaModalLink";
import { getMediaTypeFromUrl } from "../lib/media";

export type GalleryItemLink = {
  href: string;
  label: string;
  emphasis?: "strong";
};

export type GalleryItem = {
  title: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  links: GalleryItemLink[];
  note?: {
    text: string;
    href: string;
    label: string;
  };
};

type Props = {
  id: string;
  title: string;
  intro?: ReactNode;
  items: GalleryItem[];
  sectionClassName?: string;
  eagerFirstImage?: boolean;
};

function GalleryLink({ href, label, emphasis }: GalleryItemLink) {
  const content = emphasis === "strong" ? <strong>{label}</strong> : label;
  const isExternal = href.startsWith("http");
  const mediaType = getMediaTypeFromUrl(href);

  return (
    <p>
      {mediaType ? (
        <MediaModalLink className="button" href={href} modalTitle={label}>
          {content}
        </MediaModalLink>
      ) : isExternal ? (
        <a className="button" href={href} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <Link className="button" href={href}>
          {content}
        </Link>
      )}
    </p>
  );
}

export default function GallerySection({ id, title, intro, items, sectionClassName, eagerFirstImage = false }: Props) {
  return (
    <ContentSection
      id={id}
      title={title}
      addSpacer
      outerClassName={sectionClassName ? `section ${sectionClassName}` : "page-container portfolio-section"}
      innerClassName={sectionClassName ? "page-container page-section-content" : undefined}
    >
      {intro ? <div className="section-intro">{intro}</div> : null}
      <div className="gallery">
        <ul>
          {items.map((item, index) => {
            const modalLink = item.links.find((link) => getMediaTypeFromUrl(link.href));
            const modalActionLink = item.links.find((link) => !getMediaTypeFromUrl(link.href));

            return (
            <li key={`${id}-${item.title}-${index}`}>
              <MediaModalImage
                buttonClassName="gallery-card-image media-modal-image-button"
                modalSrc={modalLink?.href}
                modalTitle={item.imageAlt ?? item.title}
                modalType={modalLink ? getMediaTypeFromUrl(modalLink.href) ?? "image" : "image"}
                modalActionHref={modalActionLink?.href}
                modalActionLabel={modalActionLink?.label}
                src={item.imageSrc}
                alt={item.imageAlt ?? item.title}
                width={1200}
                height={1200}
                loading={eagerFirstImage && index === 0 ? "eager" : undefined}
                sizes="(min-width: 960px) 33vw, (min-width: 792px) 50vw, 100vw"
              />
              <div className="gallery-card-body">
                <h3>
                  <strong>{item.title}</strong>
                </h3>
                {item.note ? (
                  <p>
                    {item.note.text}{" "}
                    <a href={item.note.href} target="_blank" rel="noreferrer">
                      {item.note.label}
                    </a>
                  </p>
                ) : null}
                {item.links.map((link) => (
                  <GalleryLink key={link.href} {...link} />
                ))}
              </div>
            </li>
            );
          })}
        </ul>
      </div>
    </ContentSection>
  );
}
