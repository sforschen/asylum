import type { ReactNode } from "react";

import type { StaticImageData } from "next/image";

import MediaModalImage from "./MediaModalImage";

type Props = {
  title: string;
  description: ReactNode;
  imgSrc?: string | StaticImageData;
  titleAs?: "h2" | "h3";
};

export default function KnowledgeCard({ title, description, imgSrc, titleAs = "h3" }: Props) {
  const TitleTag = titleAs;
  const isPlainText = typeof description === "string" || typeof description === "number";

  return (
    <article className={`k-card k-card-copy${imgSrc ? " k-card-with-media" : ""}`}>
      <div className="k-media">
        {imgSrc ? (
          <MediaModalImage
            buttonClassName="media-modal-image-button"
            className="k-img"
            src={imgSrc}
            alt={title}
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : null}
      </div>
      <div className="k-body k-copy-body">
        <TitleTag className="k-title">{title}</TitleTag>
        {isPlainText ? <p className="k-text">{description}</p> : <div className="k-text">{description}</div>}
      </div>
    </article>
  );
}
