import type { Metadata } from "next";
import { ArrowRight } from "@carbon/icons-react";

import ContentSection from "../../../components/ContentSection";
import CtaSection from "../../../components/CtaSection";
import PageIntro from "../../../components/PageIntro";
import { capabilitySources, connectedExamples, exampleGroups, type SourceId } from "../../../lib/connected-ai/examples";
import styles from "./connected-ai.module.css";

export const metadata: Metadata = {
  title: "Connected AI for Creatives",
  description: "Practical ways to connect email, creative files, marketing data, and planning tools with AI: PDF feedback, IDML revisions, reports, weekly plans, and better handoffs.",
};

function CapabilityLink({ source }: { source: SourceId }) {
  const reference = capabilitySources[source];
  return <a href={reference.href} target="_blank" rel="noopener noreferrer">{reference.title}<span className={styles.srOnly}> (opens in a new tab)</span></a>;
}

export default function ConnectedAiPage() {
  return (
    <main className={`page-shell ${styles.page}`}>
      <PageIntro
        title="Connected AI for Creatives"
        titleId="connected-ai"
        kicker="Practical ways to connect your work"
        body={<>
          <p>A lot of creative work happens between the actual creative work: finding feedback, translating requests, collecting numbers, and figuring out what needs to happen next.</p>
          <p>Connecting an AI assistant to the tools you already use can help bring those pieces together. The useful question is what you want to get done with the information it finds.</p>
        </>}
        links={<nav aria-label="On this page" className={styles.jumpLinks}><a href="#practical-examples">Explore the examples <ArrowRight size={18} aria-hidden="true" /></a><a href="#connected-context">Why connections help</a><a href="#start-small">Try one connection</a><a href="#ai-learning">Learning resources</a></nav>}
        aside={<div className={styles.introAside}><h2>From feedback to the next revision</h2><ol><li>Find the right email thread.</li><li>Match the feedback to the current file.</li><li>Prepare a marked-up copy or change list.</li><li>Review it and make the creative decisions.</li></ol><p>The value is in the handoff between those steps.</p></div>}
      />

      <ContentSection
        id="connected-context"
        title="Let your AI assistant help with the busy work"
        outerClassName="section highlight-light-green"
        innerClassName="page-container page-section-content"
        linkTitle={false}
      >
        <p>AI assistants like ChatGPT and Claude become more useful when they can work with the context behind your projects. Connect your work email, marketing software, calendar, and project files so your assistant can help bring the information you need into one place.</p>
        <p>Ask it to gather feedback, organize requests, pull together a report, or draft a plan for the week. Those everyday jobs take time and attention. With the right connections, your assistant can help you work through them and prepare something you can review and use.</p>
        <p>You bring the ideas, creative direction, and judgment. Let your assistant help with the busy work so you have more time and energy to create amazing things.</p>
      </ContentSection>

      <section className="page-container page-section-content" aria-labelledby="practical-examples">
        <h2 id="practical-examples">Practical ways to connect the work</h2>
        <p className={styles.sectionLead}>These are example workflows to adapt to your tools. Each one shows the connections, a useful result, and the judgment that stays with you. Open the ‘How it works’ dropdown for setup instructions and a simpler way to start.</p>
        <nav className={styles.jumpLinks} aria-label="Example categories">{exampleGroups.map((group) => <a key={group.id} href={`#${group.id}`}>{group.title}</a>)}</nav>

        {exampleGroups.map((group) => (
          <section key={group.id} className={styles.exampleGroup} aria-labelledby={group.id}>
            <div className={styles.groupHeading}><h3 id={group.id}>{group.title}</h3><p>{group.description}</p></div>
            <ul className={styles.exampleList}>
              {connectedExamples.filter((example) => example.group === group.id).map((example) => (
                <li key={example.id}>
                  <article id={example.id} className={styles.example} aria-labelledby={`${example.id}-title`}>
                    <div className={styles.exampleHeader}><h4 id={`${example.id}-title`}>{example.title}</h4></div>
                    <div className={styles.overview}>
                      <div>
                        <blockquote>{example.ask}</blockquote>
                        <ul className={styles.connections} aria-label="Sources and tools">{example.connections.map((connection) => <li key={connection}>{connection}</li>)}</ul>
                        <p className={styles.route}>{example.route}</p>
                      </div>
                      <dl className={styles.result}><dt>A useful result</dt><dd>{example.output}</dd><dt>You still decide</dt><dd>{example.humanCheck}</dd></dl>
                    </div>
                    <details className={styles.handoff}>
                      <summary>How it works</summary>
                      <ol>{example.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                      <dl><dt>What needs to be available</dt><dd>{example.setup}</dd><dt>A simpler way to start</dt><dd>{example.fallback}</dd></dl>
                      <p className={styles.reference}>Capability references: {example.sources.map((source, index) => <span key={source}>{index ? " · " : ""}<CapabilityLink source={source} /></span>)}</p>
                    </details>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      <ContentSection
        id="start-small"
        title="Start with one job you already do"
        outerClassName="section highlight-light-green"
        innerClassName="page-container page-section-content"
        linkTitle={false}
      >
        <p>Choose a handoff that slows you down: moving feedback into a revision list, preparing a weekly report, or reconciling requests with your calendar. Start with a small set of real material and a result you can check.</p>
        <ol className={styles.startSteps}>
          <li><h3>Connect the source you need</h3><p>Find the email, document, calendar, or marketing connection in your assistant&apos;s tool directory. Review what it can read and change. An export or uploaded copy also works for a first attempt.</p></li>
          <li><h3>Describe the finished result</h3><p>Name the project, files, time period, output format, and what should remain untouched. A marked-up PDF, a draft weekly plan, or a report with calculations gives the task a clear destination.</p></li>
          <li><h3>Review the handoff before repeating it</h3><p>Check the sources and the output in the tool where the work will be used. Keep creative decisions, publication, and commitments with the responsible people. Once the process is useful, save its instructions for next time.</p></li>
        </ol>
      </ContentSection>

      <ContentSection
        id="ai-learning"
        title="Learn to work with your AI assistant"
        linkTitle={false}
      >
        <p>Get to know your assistant, practice giving it clear direction, and learn how to review its work. These official learning resources are a useful place to start before trying the examples above.</p>
        <ul>
          <li>
            <p><strong><a href="https://academy.openai.com/" target="_blank" rel="noopener noreferrer">ChatGPT: OpenAI Academy<span className={styles.srOnly}> (opens in a new tab)</span></a></strong><br />Explore courses, events, and resources on using AI at work, with practice in prompting, reviewing results, and building repeatable workflows.</p>
          </li>
          <li>
            <p><strong><a href="https://academy.claude.com/" target="_blank" rel="noopener noreferrer">Claude: Claude Academy<span className={styles.srOnly}> (opens in a new tab)</span></a></strong><br />Find courses, tutorials, and use cases from Anthropic, covering working with Claude, AI fluency, and understanding what AI can and cannot do.</p>
          </li>
        </ul>
      </ContentSection>

      <CtaSection title="Make a useful task easier to repeat" href="/resources/prompt-lab" buttonLabel="Explore Prompt Lab">
        Find ready-to-use tasks, strategic prompts, and connected workflows. Bring your own context and keep the creative decisions in your hands.
      </CtaSection>
    </main>
  );
}
