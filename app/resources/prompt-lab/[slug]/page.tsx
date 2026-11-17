import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@carbon/icons-react";

import PromptBuilder from "../../../../components/prompt-lab/PromptBuilder";
import QuickPromptGuide from "../../../../components/prompt-lab/QuickPromptGuide";
import CtaSection from "../../../../components/CtaSection";
import ContentSection from "../../../../components/ContentSection";
import { getPromptCategory } from "../../../../lib/prompt-lab/prompts";
import { getLibraryEntry, getTierLabel, libraryEntries, promptWorkflows } from "../../../../lib/prompt-lab/library";
import styles from "../../../../components/prompt-lab/prompt-lab.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return libraryEntries.map((entry) => ({ slug: entry.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prompt = getLibraryEntry((await params).slug);
  if (!prompt) notFound();
  return { title: `${prompt.title} | Prompt Lab`, description: prompt.description };
}

export default async function PromptDetailPage({ params }: Props) {
  const prompt = getLibraryEntry((await params).slug);
  if (!prompt) notFound();
  const category = getPromptCategory(prompt.category);
  const quickPrompt = Boolean(prompt.quickStart);
  const workflows = promptWorkflows.filter((workflow) => workflow.steps.some((step) => step.slug === prompt.slug));

  return (
    <main className={`page-shell ${styles.lab}`}>
      <div className={`page-container ${styles.container}`}>
        <nav aria-label="Prompt Lab" className={styles.backLink}><Link href="/resources/prompt-lab#library"><ArrowLeft size={18} aria-hidden="true" /> Back to the library</Link></nav>
        <section className={styles.detailHero} aria-labelledby="prompt-title">
          <p className="page-kicker">{getTierLabel(prompt)} / {category.label}</p>
          <h1 id="prompt-title">{prompt.title}</h1>
          <p className={styles.lead}>{prompt.description}</p>
          <ul className={styles.tags} aria-label="Topics">{prompt.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </section>
        {!quickPrompt ? <div className={styles.contextGrid}>
          <section><h2>When to use it</h2><p>{prompt.whenToUse}</p></section>
          <section><h2>Why this structure helps</h2><p>{prompt.whyItWorks}</p></section>
          <section className={styles.yourPart}><h2>Your part in the work</h2><p>{prompt.humanContribution}</p></section>
        </div> : null}
        {quickPrompt ? <QuickPromptGuide key={prompt.slug} prompt={prompt} /> : <PromptBuilder key={prompt.slug} prompt={prompt} />}
      </div>
      {!quickPrompt ? <ContentSection
        id="review-title"
        title="Bring it back to the real work."
        outerClassName="section highlight-light-green"
        innerClassName="page-container page-section-content"
        linkTitle={false}
        threeColumn
        aside={<ul>{prompt.review.map((item) => <li key={item}>{item}</li>)}<li>Keep the specific details and language that make the work yours.</li></ul>}
      >
        <p>A polished response can still miss the point. Use your experience and the people around you to decide what is useful.</p>
      </ContentSection> : null}
      {workflows.length ? (
        <div className="page-container page-section-content">
          <section aria-labelledby="connected-title">
            <div className={styles.sectionHeading}><h2 id="connected-title">Use it in a workflow</h2><p>Connect this step with other tasks and strategic prompts. Review the output before carrying it forward; files and context do not transfer automatically.</p></div>
            <div className={styles.workflowGrid}>
              {workflows.map((workflow) => {
                const currentIndex = workflow.steps.findIndex((step) => step.slug === prompt.slug);
                const nextStep = workflow.steps[currentIndex + 1];
                const nextPrompt = nextStep ? getLibraryEntry(nextStep.slug) : undefined;
                return (
                  <article key={workflow.id} className={styles.workflowCard}>
                    <span className={styles.stepNumber}>Step {currentIndex + 1} of {workflow.steps.length}</span>
                    <h3>{workflow.title}</h3>
                    <p><strong>Your handoff:</strong> {workflow.steps[currentIndex].handoff}</p>
                    <ol>{workflow.steps.map((step) => {
                      const entry = getLibraryEntry(step.slug)!;
                      return <li key={step.slug}>{step.slug === prompt.slug ? <strong aria-current="step">{entry.title}</strong> : <Link href={`/resources/prompt-lab/${step.slug}`}>{entry.title}</Link>} <span className={styles.inlineTier}>{getTierLabel(entry)}</span></li>;
                    })}</ol>
                    <Link className={styles.textAction} href={`/resources/prompt-lab/workflows/${workflow.id}`}>View the full process <ArrowRight size={18} aria-hidden="true" /></Link>
                    {nextPrompt ? <Link className={styles.textAction} href={`/resources/prompt-lab/${nextPrompt.slug}`}>Next: {nextPrompt.title} <ArrowRight size={18} aria-hidden="true" /></Link> : <Link className={styles.textAction} href="/resources/prompt-lab#workflows">Explore another workflow <ArrowRight size={18} aria-hidden="true" /></Link>}
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      ) : null}
      <CtaSection
        title="Find the next step for your project"
        href="/resources/prompt-lab#library"
        buttonLabel="Explore the Library"
      >
        Browse simple tasks, strategic prompts, and workflows. Bring your reviewed work and your own
        point of view into the next step.
      </CtaSection>
    </main>
  );
}
