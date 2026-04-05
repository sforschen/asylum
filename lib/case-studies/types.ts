export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  images?: CaseStudyImage[];
  sectionClassName?: "highlight" | "highlight-light-green" | "highlight-white-center";
};

export type CaseStudyPost = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  summary: string;
  imageSrc: string;
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
