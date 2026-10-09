import type { StaticImageData } from "next/image";

export type CaseStudyImage = {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
  actionHref?: string;
  actionLabel?: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs: string[];
  linksTitle?: string;
  links?: Array<{
    href: string;
    label: string;
    iconSrc: string | StaticImageData;
  }>;
  subsections?: Array<{
    title: string;
    paragraphs: string[];
  }>;
  bullets?: string[];
  bulletLayout?: "list" | "cards";
  asideIcon?: "network-enterprise" | "user-role";
  asidePosition?: "left" | "right";
  images?: CaseStudyImage[];
  imagesLayout?: "grid" | "masonry" | "masonry-two-column" | "two-column-last-full";
  contentLayout?: "image-left" | "image-right";
  firstImageFullWidth?: boolean;
  sectionClassName?: string;
};

export type CaseStudyPost = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  summary: string;
  heroParagraphs?: string[];
  imageSrc: string | StaticImageData;
  imageAlt: string;
  portfolioTitle: string;
  portfolioSectionId: string;
  externalSource?: string;
  relatedExperience?: Array<{
    href: string;
    label: string;
  }>;
  takeaways?: Array<{
    href: string;
    label: string;
    download?: boolean;
    resource?: boolean;
  }>;
  metrics?: Array<{
    label: string;
    value: string;
    href?: string;
    linkLabel?: string;
    download?: boolean;
    resource?: boolean;
  }>;
  sections: CaseStudySection[];
};
