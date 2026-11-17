import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@carbon/icons-react";

import CtaSection from "../../../../../components/CtaSection";
import ContentSection from "../../../../../components/ContentSection";
import { getLibraryEntry, getTierLabel, getWorkflow, promptWorkflows } from "../../../../../lib/prompt-lab/library";
import styles from "../../../../../components/prompt-lab/prompt-lab.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return promptWorkflows.map((workflow) => ({ slug: workflow.id }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const workflow = getWorkflow((await params).slug);
  if (!workflow) notFound();
  return { title: `${workflow.title} | Prompt Lab Workflow`, description: workflow.description };
}

export default async function WorkflowPage({ params }: Props) {
  const workflow = getWorkflow((await params).slug);
  if (!workflow) notFound();

  return (
    <main className={`page-shell ${styles.lab}`}>
      <div className={`page-container ${styles.container}`}>
        <nav className={styles.backLink} aria-label="Prompt Lab"><Link href="/resources/prompt-lab#workflows"><ArrowLeft size={18} aria-hidden="true" /> Back to workflows</Link></nav>
        <section className={styles.detailHero} aria-labelledby="workflow-page-title">
          <p className="page-kicker">Tier 03 / Workflow / {workflow.steps.length} steps</p>
          <h1 id="workflow-page-title">{workflow.title}</h1>
          <p className={styles.lead}>{workflow.description}</p>
        </section>
      </div>
      <ContentSection
        id="workflow-outcome"
        title="What you are working toward"
        outerClassName="section highlight-light-green"
        innerClassName="page-container page-section-content"
        linkTitle={false}
      >
          <p>{workflow.outcome}</p>
          <p>Work through the steps in order. Open each task or prompt, supply the required inputs, and run it in a suitable AI tool. Review the result and pass the agreed material to the next step. Files and context do not move between builders automatically.</p>
      </ContentSection>
      <div className="page-container page-section-content">
        <ol className={styles.workflowSteps} aria-label="Workflow steps">
          {workflow.steps.map((step, index) => {
            const entry = getLibraryEntry(step.slug)!;
            return (
              <li key={step.slug}>
                <article className={styles.workflowStep}>
                  <p className={styles.stepNumber}>Step {index + 1} / {getTierLabel(entry)}</p>
                  <h2>{entry.title}</h2>
                  <p>{entry.description}</p>
                  <div className={styles.stepHandoff}><h3>You check</h3><p>{entry.review[0]}</p><h3>Carry this forward</h3><p>{step.handoff}</p></div>
                  <Link className={styles.textAction} href={`/resources/prompt-lab/${entry.slug}`}>Open this {entry.kind === "task" ? "task" : "strategic prompt"} <ArrowRight size={18} aria-hidden="true" /></Link>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
      <CtaSection title="Choose the next process to improve" href="/resources/prompt-lab#workflows" buttonLabel="Explore More Workflows">
        Connect reusable tasks with strategic thinking, and keep the decisions and approvals with the people doing the work.
      </CtaSection>
    </main>
  );
}
