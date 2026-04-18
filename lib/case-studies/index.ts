import { elixirSiteCaseStudy } from "./posts/elixirSite";
import { optumCeCampaignCaseStudy } from "./posts/optumCeCampaign";
import { optumSiteCaseStudy } from "./posts/optumSite";
import { seriousSillyCaseStudy } from "./posts/seriousSilly";
import { tAndUEventSignageCaseStudy } from "./posts/tAndUEventSignage";
import type { CaseStudyPost } from "./types";

const caseStudies: CaseStudyPost[] = [
  elixirSiteCaseStudy,
  optumCeCampaignCaseStudy,
  optumSiteCaseStudy,
  tAndUEventSignageCaseStudy,
  seriousSillyCaseStudy,
];

export type { CaseStudyPost, CaseStudySection } from "./types";

export function getCaseStudies(): CaseStudyPost[] {
  return [...caseStudies].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getCaseStudy(slug: string): CaseStudyPost | undefined {
  return caseStudies.find((post) => post.slug === slug);
}

export function getCaseStudyUrl(slug: string): string {
  return `/blog/${slug}`;
}
