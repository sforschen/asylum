import Image from "next/image";

import ContentSection from "./ContentSection";

export type GalleryItemLink = {
  href: string;
  label: string;
  emphasis?: "strong";
};

export type GalleryItem = {
  title: string;
  imageSrc: string;
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
  items: GalleryItem[];
  sectionClassName?: string;
};

function GalleryLink({ href, label, emphasis }: GalleryItemLink) {
  const content = emphasis === "strong" ? <strong>{label}</strong> : label;

  return (
    <p>
      <a className="button" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    </p>
  );
}

export default function GallerySection({ id, title, items, sectionClassName }: Props) {
  return (
    <ContentSection
      id={id}
      title={title}
      addSpacer
      outerClassName={sectionClassName ? `section ${sectionClassName}` : "page-container portfolio-section"}
      innerClassName={sectionClassName ? "page-container page-section-content" : undefined}
    >
      <div className="gallery">
        <ul>
          {items.map((item, index) => (
            <li key={`${id}-${item.title}-${index}`}>
              <div className="gallery-card-image">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.title}
                  width={1200}
                  height={1200}
                  sizes="(min-width: 960px) 33vw, (min-width: 792px) 50vw, 100vw"
                />
              </div>
              <div className="gallery-card-body">
                <p>
                  <strong>{item.title}</strong>
                </p>
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
          ))}
        </ul>
      </div>
    </ContentSection>
  );
}
