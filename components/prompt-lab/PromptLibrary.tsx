"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "@carbon/icons-react";

import { getPromptCategory, promptCategories, prompts } from "../../lib/prompt-lab/prompts";
import { getLibraryEntry, getTierLabel, isSimpleTask, libraryEntries, promptWorkflows, type WorkTier } from "../../lib/prompt-lab/library";
import { simpleTasks } from "../../lib/prompt-lab/tasks";
import { filterPrompts, getWorkflowEntries } from "../../lib/prompt-lab/prompt-utils";
import styles from "./prompt-lab.module.css";

export default function PromptLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [workflow, setWorkflow] = useState("");
  const [tier, setTier] = useState<WorkTier>("all");
  const activeWorkflow = promptWorkflows.find((item) => item.id === workflow);
  const results = filterPrompts(libraryEntries, query, category, activeWorkflow?.steps.map((step) => step.slug), tier);
  const orderedResults = activeWorkflow
    ? getWorkflowEntries(activeWorkflow.steps.map((step) => step.slug), results)
    : results;

  function resetFilters() {
    setQuery("");
    setCategory("all");
    setWorkflow("");
    setTier("all");
  }

  function chooseTier(value: WorkTier) {
    resetFilters();
    setTier(value);
  }

  return (
    <>
      <section id="work-tiers" className={styles.tierSection} aria-labelledby="tiers-title">
        <div className={styles.sectionHeading}>
          <h2 id="tiers-title">Three tiers of AI work</h2>
          <p>Handle one repeatable job, work through a decision, or connect both into a practical process.</p>
        </div>
        <div className={styles.tierGrid}>
          <article className={styles.workflowCard}>
            <span className={styles.stepNumber}>{simpleTasks.length} reusable tasks</span>
            <h3>Simple tasks</h3>
            <p>One clear job with defined inputs and outputs. Use it once or download instructions to add as a skill in a compatible tool.</p>
            <a href="#library" className={styles.textAction} onClick={() => chooseTier("task")}>Explore simple tasks <ArrowRight size={18} aria-hidden="true" /></a>
          </article>
          <article className={styles.workflowCard}>
            <span className={styles.stepNumber}>{prompts.length} thinking partners</span>
            <h3>Strategic prompts</h3>
            <p>Bring context, explore options, and make informed creative or marketing decisions. Your point of view leads the work.</p>
            <a href="#library" className={styles.textAction} onClick={() => chooseTier("prompt")}>Explore strategic prompts <ArrowRight size={18} aria-hidden="true" /></a>
          </article>
          <article className={styles.workflowCard}>
            <span className={styles.stepNumber}>{promptWorkflows.length} connected processes</span>
            <h3>Workflows</h3>
            <p>Combine tasks and strategic prompts in sequence, with a human check and a clear handoff between steps.</p>
            <a href="#workflows" className={styles.textAction}>Explore workflows <ArrowRight size={18} aria-hidden="true" /></a>
          </article>
        </div>
      </section>

      <section id="library" className={styles.librarySection} aria-labelledby="library-title">
        <div className={styles.sectionHeading}>
          <h2 id="library-title">Tasks &amp; strategic prompts</h2>
          <p>Start with a focused task or work through a bigger decision. Every resource includes instructions and a human review step.</p>
        </div>
        <div className={styles.filters}>
          <div className={styles.searchField}>
            <label htmlFor="prompt-search">Search tasks &amp; prompts</label>
            <div className={styles.searchControl}>
              <Search size={20} aria-hidden="true" />
              <input id="prompt-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try resize images, file names, campaign…" />
            </div>
          </div>
          <div className={styles.categoryField}>
            <label htmlFor="work-tier">Type of work</label>
            <select id="work-tier" value={tier} onChange={(event) => setTier(event.target.value as WorkTier)}>
              <option value="all">Tasks &amp; strategic prompts</option>
              <option value="task">Simple tasks</option>
              <option value="prompt">Strategic prompts</option>
            </select>
          </div>
          <div className={styles.categoryField}>
            <label htmlFor="prompt-category">Area of work</label>
            <select id="prompt-category" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="all">All disciplines</option>
              {promptCategories.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </div>
          <div className={styles.categoryField}>
            <label htmlFor="prompt-workflow">Workflow</label>
            <select id="prompt-workflow" value={workflow} onChange={(event) => setWorkflow(event.target.value)}>
              <option value="">All workflows</option>
              {promptWorkflows.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
          </div>
        </div>
        <div className={styles.resultsBar}>
          <p role="status">{results.length} {results.length === 1 ? "resource" : "resources"}{activeWorkflow ? ` in “${activeWorkflow.title}”` : " to explore"}</p>
          {query || category !== "all" || workflow || tier !== "all" ? <button type="button" className="secondary" onClick={resetFilters}>Clear filters</button> : null}
        </div>
        {activeWorkflow ? (
          <div className={styles.workflowNote}>
            <h3>{activeWorkflow.title}</h3>
            <p>{activeWorkflow.description} Review each result and carry the agreed output forward. Your project details do not transfer automatically.</p>
            <Link className={styles.textAction} href={`/resources/prompt-lab/workflows/${activeWorkflow.id}`}>Open the full workflow <ArrowRight size={18} aria-hidden="true" /></Link>
            <ol>
              {activeWorkflow.steps.map((step) => {
                const entry = getLibraryEntry(step.slug)!;
                return <li key={step.slug}><Link href={`/resources/prompt-lab/${step.slug}`}>{entry.title}</Link> <span className={styles.inlineTier}>{getTierLabel(entry)}</span></li>;
              })}
            </ol>
          </div>
        ) : null}
        {orderedResults.length ? (
          <div className={styles.promptGrid}>
            {orderedResults.map((prompt) => (
              <article key={prompt.slug} className={styles.promptCard}>
                <p className={styles.cardCategory} data-category={prompt.category}>{getTierLabel(prompt)} / {getPromptCategory(prompt.category).shortLabel}</p>
                <h3><Link href={`/resources/prompt-lab/${prompt.slug}`}>{prompt.title}</Link></h3>
                <p>{prompt.description}</p>
                <div className={styles.humanNote}><strong>You bring</strong><p>{prompt.humanContribution}</p></div>
                <ul className={styles.tags} aria-label="Topics">{prompt.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <Link className={styles.textAction} href={`/resources/prompt-lab/${prompt.slug}`}>{prompt.quickStart ? "Get the ready-to-use prompt" : isSimpleTask(prompt) ? "Use task or download skill" : "Customize strategic prompt"} <ArrowRight size={18} aria-hidden="true" /><span className={styles.srOnly}>: {prompt.title}</span></Link>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>No resources match those filters</h3>
            <p>Try a broader task, a different discipline, or clear the filters to see the full library.</p>
            <button type="button" className="secondary" onClick={resetFilters}>Show all resources</button>
          </div>
        )}
      </section>
      <section id="workflows" className={styles.workflowSection} aria-labelledby="workflow-title">
        <div className={styles.sectionHeading}>
          <h2 id="workflow-title">Tasks + strategic prompts = a working process</h2>
          <p>Follow a sequence with explicit handoffs. Some steps happen in your AI tool; the decisions, approvals, and real-world work stay with your team.</p>
        </div>
        <div className={styles.workflowGrid}>
          {promptWorkflows.map((item) => (
            <article key={item.id} className={styles.workflowCard}>
              <span className={styles.stepNumber}>{item.steps.length} steps / Tasks + strategic prompts</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link className={styles.textAction} href={`/resources/prompt-lab/workflows/${item.id}`}>Follow this workflow <ArrowRight size={18} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
