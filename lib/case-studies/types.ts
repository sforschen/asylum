import type { StaticImageData } from "next/image";

export type CaseStudyImage = {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  images?: CaseStudyImage[];
  imagesLayout?: "grid" | "masonry" | "masonry-two-column" | "two-column-last-full";
  firstImageFullWidth?: boolean;
  sectionClassName?: "highlight" | "highlight-light-green" | "highlight-white-center";
};

export type CaseStudyPost = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  summary: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  portfolioTitle: string;
  portfolioSectionId: string;
  externalSource?: string;
  metrics?: Array<{
    label: string;
    value: string;
  }>;
  sections: CaseStudySection[];
};
