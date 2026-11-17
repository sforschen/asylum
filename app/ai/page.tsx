import type { Metadata } from "next";
import Link from "next/link";

import ContentSection from "../../components/ContentSection";
import CtaSection from "../../components/CtaSection";
import PageIntro from "../../components/PageIntro";
import MediaModalImage from "../../components/MediaModalImage";
import { siteAssets } from "../../content/siteAssets";
import styles from "./ai.module.css";

export const metadata: Metadata = {
  title: "AI for Creatives",
  description: "Practical AI resources for creative work: simple tasks, strategic prompts, workflows, and ways to connect your everyday tools while keeping human judgment in the process.",
};

export default function AiPage() {
  return (
    <main className="page-shell">
      <PageIntro
        title="AI for Creatives"
        titleId="ai-for-creatives"
        kicker="More room for human creativity"
        body={<>
          <p>I know some creatives worry that AI will steal their creativity. I’ve found that it can help us spend more time on the creative parts of our jobs. I use it to think through challenges, speed up repetitive tasks, and pull the pieces of a project together. That gives me more room to explore ideas, shape the work, and make the creative decisions myself.</p>
          <p><strong>Did I use AI to build this? Yes, AI helped me write and build these pages, guided by my real-world experience using similar prompts and tasks.</strong></p>
          <p>These resources share practical ways to bring AI into the work you already do, from transcribing handwritten notes to turning project feedback into a clear next step.</p>
        </>}
        links={<div className="case-study-hero-actions">
          <Link className="button" href="/resources/prompt-lab">Explore Prompt Lab</Link>
          <Link className="button" href="/resources/connected-ai">Explore Connected AI</Link>
        </div>}
        aside={<div className="case-study-hero-media">
          <MediaModalImage
            src={siteAssets.resources.aiCreativeHero}
            alt="Hands drawing a green and navy owl beside color swatches and digital crop previews."
            modalTitle="AI for Creatives"
            sizes="(min-width: 900px) 33vw, (min-width: 500px) 450px, 90vw"
            placeholder="blur"
          />
        </div>}
      />

      <ContentSection
        id="human-creative-process"
        title="Keep your thinking in the process"
        outerClassName="section highlight-light-green"
        innerClassName="page-container page-section-content"
        linkTitle={false}
        threeColumn
        aside={<ul><li>Bring real context and your own point of view.</li><li>Check the result against the original material.</li><li>Make the final creative decisions yourself.</li></ul>}
      >
        <p>A useful AI result gives you something to work with: a draft to question, a structure to refine, or a task you can review. It still needs your knowledge of the audience, the project, and what good work looks like.</p>
        <p>Start with one small job. Keep what helps, change what misses the point, and build a process that leaves more time for the work that needs your creativity.</p>
      </ContentSection>

      <ContentSection
        id="ai-resources"
        title="Find a useful place to start"
        outerClassName="page-container page-section-content"
        linkTitle={false}
      >
        <div className={styles.resources}>
          <article className={`ai-highlight-card ${styles.resourceCard}`}>
            <h3>AI Prompt Library for Creatives</h3>
            <p>Use a ready-made task, customize a strategic prompt, or follow a workflow that brings several steps together. Prompt Lab helps you prepare useful instructions for your own projects.</p>
            <ul>
              <li>Transcribe notes and prepare everyday production tasks.</li>
              <li>Think through typography, creative briefs, and campaign direction.</li>
              <li>Combine tasks and prompts into a repeatable process.</li>
            </ul>
            <Link className={`button ${styles.resourceAction}`} href="/resources/prompt-lab">Explore Prompt Lab</Link>
          </article>
          <article className={`ai-highlight-card ${styles.resourceCard}`}>
            <h3>Connected AI for Creatives</h3>
            <p>Explore what becomes possible when an assistant has the right project context and tools. See the source material, handoff, and human review behind each practical example.</p>
            <ul>
              <li>Turn email feedback into a PDF markup or revision list.</li>
              <li>Bring marketing data together for a useful report.</li>
              <li>Use requests and commitments to plan the work week.</li>
            </ul>
            <Link className={`button ${styles.resourceAction}`} href="/resources/connected-ai">Explore Connected AI</Link>
          </article>
        </div>
      </ContentSection>

      <CtaSection title="Try it on something you’re working on" href="/resources/prompt-lab" buttonLabel="Explore Prompt Lab">
        Choose a simple task, a strategic prompt, or a workflow. Bring your own project and make the instructions yours.
      </CtaSection>
    </main>
  );
}
