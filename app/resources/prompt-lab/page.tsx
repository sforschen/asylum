import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Idea, UserMultiple, WorkflowAutomation } from "@carbon/icons-react";

import PromptLibrary from "../../../components/prompt-lab/PromptLibrary";
import CtaSection from "../../../components/CtaSection";
import ContentSection from "../../../components/ContentSection";
import AiHighlightCard from "../../../components/AiHighlightCard";
import { prompts } from "../../../lib/prompt-lab/prompts";
import { simpleTasks } from "../../../lib/prompt-lab/tasks";
import { promptWorkflows } from "../../../lib/prompt-lab/library";
import styles from "../../../components/prompt-lab/prompt-lab.module.css";

export const metadata: Metadata = {
  title: "Prompt Lab | AI Toolkit for Designers & Marketers",
  description: "Simple AI tasks you can reuse as skills, strategic prompts, and connected workflows for designers and marketers. Keep human judgment in every step.",
};

export default function PromptLabPage() {
  return (
    <main className={`page-shell ${styles.lab}`}>
      <div className={`page-container ${styles.container}`}>
        <section className={styles.hero} aria-labelledby="prompt-lab-title">
          <div>
            <p className="page-kicker">A creative toolkit by You Need Serenity</p>
            <h1 id="prompt-lab-title">Prompt Lab<span>Better inputs.<br />More human work.</span></h1>
            <p className={styles.lead}>A place for designers and marketers to use AI with purpose. Bring your experience, explore a direction, and build something that still sounds and feels like you.</p>
            <div className={styles.actions}>
              <a className="button resource-button resource-button-small" href="#work-tiers">Explore the three tiers <ArrowRight size={18} aria-hidden="true" /></a>
              <a className="button secondary" href="#how-to-use">How to use the lab</a>
            </div>
            <p className={styles.heroMeta}>{simpleTasks.length} simple tasks · {prompts.length} strategic prompts · {promptWorkflows.length} workflows</p>
          </div>
          <aside className={styles.featured} aria-labelledby="featured-prompt-title">
            <p className={styles.stepNumber}>See the tiers working together</p>
            <div className={styles.featuredIcon}><WorkflowAutomation size={56} aria-hidden="true" /></div>
            <h2 id="featured-prompt-title">From approved photos to delivery-ready assets.</h2>
            <p>Plan the work, resize around the focal point, check the exports, and create an inventory. You choose the direction and review the handoffs.</p>
            <Link href="/resources/prompt-lab/workflows/image-production" className={styles.textAction}>Follow the image workflow <ArrowRight size={18} aria-hidden="true" /></Link>
          </aside>
        </section>
      </div>
      <ContentSection
        id="how-to-use"
        title="AI Prompt Library for Creatives"
        outerClassName="section highlight-light-green"
        innerClassName="page-container page-section-content"
        linkTitle={false}
      >
        <p>
          There’s no shortage of AI prompts online, but I’ve found surprisingly few that focus on the actual work
          of designers and creative professionals. Most resources lean heavily into content generation, marketing
          copy, or broad productivity tips, leaving a gap when it comes to design thinking, creative problem-solving,
          and production workflows.
        </p>
        <p>So, I decided to build the resource I was looking for.</p>
        <p>
          This library is a collection of practical AI prompts designed to support the creative process, from early
          exploration and strategy to design systems, production, and execution. These aren&apos;t prompts meant to
          replace creative expertise or decision-making. They&apos;re tools to help you think through challenges,
          streamline repetitive work, explore possibilities, and spend more time on the parts of the process that
          benefit most from human creativity.
        </p>
        <p>
          The goal is simple: <strong>Make AI a better creative partner, not a replacement for the creative process.</strong>
        </p>
        <div className="ai-highlight-grid">
          <AiHighlightCard
            title="Start with something real"
            description="Your observation, a rough draft, research, or a problem you understand. Give the work a point of view before asking for options."
            icon={<Idea aria-hidden="true" />}
          />
          <AiHighlightCard
            title="Choose the right help"
            description="Run a simple task, save its procedure as a skill, or shape a strategic prompt. Use a workflow when the work needs several connected steps."
            icon={<WorkflowAutomation aria-hidden="true" />}
          />
          <AiHighlightCard
            title="Make the final call"
            description="Check facts, involve the right people, and edit for your audience. Treat the response as working material and choose what deserves to move forward."
            icon={<UserMultiple aria-hidden="true" />}
          />
        </div>
      </ContentSection>
      <div className={`page-container ${styles.container}`}>
        <PromptLibrary />

      </div>
      <CtaSection
        title="Connect AI to your everyday creative work"
        href="/resources/connected-ai"
        buttonLabel="Explore Practical AI Use Cases"
      >
        See how email, creative files, marketing data, and planning tools can work together. Explore practical
        examples for revisions, reporting, weekly planning, and better handoffs.
      </CtaSection>
    </main>
  );
}
