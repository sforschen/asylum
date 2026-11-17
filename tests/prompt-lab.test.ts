import assert from "node:assert/strict";
import { test } from "node:test";

import { commonPromptFields, promptCategories, prompts } from "../lib/prompt-lab/prompts";
import { getLibraryEntry, libraryEntries, promptWorkflows } from "../lib/prompt-lab/library";
import { simpleTasks } from "../lib/prompt-lab/tasks";
import { buildPrompt, buildQuickPrompt, buildSkill, filterPrompts, getExampleValues, getInitialValues, getPromptFields, getWorkflowEntries } from "../lib/prompt-lab/prompt-utils";

test("every prompt has a unique shareable slug, valid category, and unambiguous field ids", () => {
  assert.equal(new Set(libraryEntries.map((prompt) => prompt.slug)).size, libraryEntries.length);
  for (const prompt of libraryEntries) {
    assert.match(prompt.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(promptCategories.some((category) => category.id === prompt.category));
    const fields = getPromptFields(prompt);
    assert.equal(new Set(fields.map((field) => field.id)).size, fields.length, prompt.slug);
    if (prompt.kind !== "task") {
      assert.ok(prompt.quickStart, `${prompt.slug} needs a three-step guide`);
      assert.equal(fields[0].id, prompt.slug === "design-critique" ? "criteria" : "brief");
      assert.ok(!fields.some((field) => ["audience", "goal", "humanDirection", "sources"].includes(field.id)), prompt.slug);
      const dueDate = fields.find((field) => field.id === "dueDate");
      if (dueDate) {
        assert.equal(dueDate.inputType, "date");
        assert.match(dueDate.example, /^\d{4}-\d{2}-\d{2}$/);
      }
    }
  }
  for (const category of promptCategories) {
    assert.ok(prompts.some((prompt) => prompt.category === category.id));
  }
});

test("a customized prompt preserves multiline input, original thinking, task instructions, and human review", () => {
  for (const prompt of libraryEntries) {
    const values = getExampleValues(prompt);
    const customField = prompt.kind === "task" || prompt.quickStart ? prompt.fields[0].id : "brief";
    values[customField] = "My original observation.\nA detail with $&, {braces}, and <markup>.";
    const result = buildPrompt(prompt, values);
    assert.ok(result.includes(values[customField]));
    assert.ok(result.includes(prompt.task));
    if (prompt.kind !== "task") {
      assert.ok(result.includes("Use the source files I upload or link in this conversation."));
      assert.ok(!result.includes("[Add source"));
    }
    for (const field of getPromptFields(prompt)) assert.ok(result.includes(values[field.id]));
    for (const instruction of prompt.instructions) assert.ok(result.includes(instruction));
    for (const review of prompt.review) assert.ok(result.includes(review));
    assert.ok(!result.includes("[Add "), prompt.slug);
    assert.ok(!result.includes("undefined"), prompt.slug);
  }
});

test("missing and whitespace-only inputs remain explicit rather than inventing project context", () => {
  const prompt = prompts[0];
  const result = buildQuickPrompt(prompt, { brief: "  ", dueDate: "2026-12-04" });
  assert.ok(result.includes("[Add project goals & requirements]"));
  assert.ok(result.includes("DUE DATE (optional)\n2026-12-04"));
  assert.ok(result.includes("relative milestones rather than inventing deadlines"));
  assert.ok(result.includes("ask a few focused questions"));
  assert.ok(!result.includes(commonPromptFields[0].example));
  const withoutDate = buildQuickPrompt(prompt, { brief: "Keep this direction", dueDate: "  " });
  assert.ok(withoutDate.includes("Not set; use relative milestones"));
  assert.ok(!withoutDate.includes("[Add due date]"));
});

test("strategic quick prompts preserve user direction, keep dates on planning, and retain typography starter content", () => {
  const planning = new Set(["creative-brief-to-production-plan", "campaign-strategy", "editorial-calendar", "email-sequence", "project-intake", "review-and-approval-workflow", "creative-capacity-plan"]);
  for (const prompt of prompts) {
    const fields = getPromptFields(prompt);
    const values = getExampleValues(prompt);
    const direction = "My own direction.\nKeep $&, <markup>, and {{brief}} exactly as typed.";
    values[fields[0].id] = direction;
    const result = buildQuickPrompt(prompt, values);
    assert.ok(result.includes(direction), prompt.slug);
    for (const field of fields) assert.ok(result.includes(values[field.id]), `${prompt.slug}: ${field.id}`);
    assert.ok(!result.includes("[Add "), prompt.slug);
    assert.equal(fields.some((field) => field.inputType === "date"), planning.has(prompt.slug), prompt.slug);
    assert.equal(result.includes("DUE DATE (optional)"), planning.has(prompt.slug), prompt.slug);
  }
  const typography = prompts.find((prompt) => prompt.slug === "typography-hierarchy")!;
  const initial = getInitialValues(typography);
  assert.ok(initial.content.includes("H1"));
  assert.ok(initial.content.includes("Caption:"));
  assert.ok(buildQuickPrompt(typography, initial).includes(initial.content));
  assert.ok(typography.fields.find((field) => field.id === "content")?.tips?.some((tip) => tip.includes("Captions:")));
});

test("quick image resizing needs only export specs and keeps customization literal", () => {
  const task = simpleTasks.find((task) => task.slug === "resize-images-focal-point")!;
  assert.deepEqual(getPromptFields(task).map((field) => field.id), ["sizes", "formats"]);
  const empty = buildQuickPrompt(task, { sizes: "  " });
  assert.ok(empty.includes("[Add output sizes]"));
  assert.ok(empty.includes("[Add export formats]"));
  const sizes = "1080 x 1080\n1600 x 900";
  const formats = "JPEG and WebP; keep $& and {{sizes}} as typed.";
  const result = buildQuickPrompt(task, { sizes, formats });
  assert.ok(result.includes(sizes));
  assert.ok(result.includes(formats));
  assert.ok(!result.includes("[Add "));
  for (const staticTask of simpleTasks.filter((task) => task.quickStart && !task.quickStart.inputIds)) {
    assert.equal(buildQuickPrompt(staticTask), staticTask.quickStart!.prompt);
  }
});

test("search combines terms, ignores case and extra spaces, and respects category and workflow filters", () => {
  assert.ok(filterPrompts(prompts, "  CREATIVE   BRIEF ", "all").some((prompt) => prompt.slug === "creative-brief-to-production-plan"));
  assert.deepEqual(filterPrompts(prompts, "", "design"), prompts.filter((prompt) => prompt.category === "design"));
  assert.deepEqual(filterPrompts(prompts, "not-a-real-topic-123", "all"), []);
  const workflow = promptWorkflows[0];
  const workflowSlugs = workflow.steps.map((step) => step.slug);
  const matches = filterPrompts(libraryEntries, "", "all", workflowSlugs);
  assert.equal(matches.length, workflow.steps.length);
  assert.ok(matches.every((prompt) => workflowSlugs.includes(prompt.slug)));
  const combined = filterPrompts(libraryEntries, "", "operations", workflowSlugs);
  assert.ok(combined.length > 0);
  assert.ok(combined.every((prompt) => prompt.category === "operations"));
  assert.deepEqual(getWorkflowEntries(workflowSlugs, matches).map((entry) => entry.slug), workflowSlugs);
});

test("each workflow combines tasks and strategic prompts with valid links and explicit handoffs", () => {
  for (const workflow of promptWorkflows) {
    assert.equal(new Set(workflow.steps.map((step) => step.slug)).size, workflow.steps.length);
    for (const step of workflow.steps) {
      assert.ok(getLibraryEntry(step.slug), `${workflow.id}: ${step.slug}`);
      assert.ok(step.handoff.trim().length > 0);
    }
    assert.ok(workflow.steps.some((step) => getLibraryEntry(step.slug)?.kind === "task"));
    assert.ok(workflow.steps.some((step) => getLibraryEntry(step.slug)?.kind !== "task"));
  }
});

test("tier filters isolate tasks and strategic prompts, including combined workflow and category filters", () => {
  assert.deepEqual(filterPrompts(libraryEntries, "", "all", undefined, "task"), simpleTasks);
  assert.deepEqual(filterPrompts(libraryEntries, "", "all", undefined, "prompt"), prompts);
  assert.ok(filterPrompts(libraryEntries, "resize focal", "design", undefined, "task").some((entry) => entry.slug === "resize-images-focal-point"));
  assert.deepEqual(filterPrompts(libraryEntries, "resize focal", "design", undefined, "prompt"), []);
  const slugs = promptWorkflows[0].steps.map((step) => step.slug);
  const tasks = filterPrompts(libraryEntries, "", "web", slugs, "task");
  assert.ok(tasks.length > 0);
  assert.ok(tasks.every((entry) => entry.kind === "task" && entry.category === "web" && slugs.includes(entry.slug)));
});

test("simple tasks use their focused inputs and export reusable skills without example project data", () => {
  for (const task of simpleTasks) {
    assert.deepEqual(getPromptFields(task), task.fields);
    assert.ok(task.quickStart, `${task.slug} needs a simple task guide`);
    const quickPrompt = buildQuickPrompt(task, getExampleValues(task));
    assert.ok(quickPrompt.trim().length > 0, task.slug);
    assert.ok(!/\{\{[a-zA-Z0-9]+\}\}/.test(quickPrompt), `${task.slug} has an unresolved prompt input`);
    for (const id of task.quickStart.inputIds ?? []) {
      const field = task.fields.find((field) => field.id === id);
      assert.ok(field, `${task.slug}: unknown input ${id}`);
      assert.ok(quickPrompt.includes(field.example), `${task.slug}: input ${id} was not included`);
    }
    const markdown = buildSkill(task);
    assert.match(markdown, /^---\nname: [a-z0-9-]+\ndescription: ".+"\n---\n/);
    assert.equal(task.skill.name, task.slug);
    assert.ok(!markdown.includes("[Add "));
    assert.ok(!markdown.includes("undefined"));
    for (const field of task.fields) assert.ok(!markdown.includes(field.example), task.slug);
    for (const instruction of task.instructions) assert.ok(markdown.includes(instruction));
    for (const requirement of task.skill.requirements) {
      assert.ok(markdown.includes(requirement));
      assert.ok(buildPrompt(task, getExampleValues(task)).includes(requirement));
    }
  }
});
