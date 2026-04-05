import type { ReactNode } from "react";

import Image, { type StaticImageData } from "next/image";

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
    <article className="k-card">
      <div className="k-media">
        {imgSrc ? (
          <Image className="k-img" src={imgSrc} alt={title} sizes="(min-width: 768px) 33vw, 100vw" />
        ) : null}
      </div>
      <div className="k-body">
        <TitleTag className="k-title">{title}</TitleTag>
        {isPlainText ? <p className="k-text">{description}</p> : <div className="k-text">{description}</div>}
      </div>
    </article>
  );
}
