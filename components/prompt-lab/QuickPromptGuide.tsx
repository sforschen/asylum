"use client";

import { useRef, useState } from "react";
import { Copy, Download, Launch } from "@carbon/icons-react";

import { isSimpleTask, type LibraryEntry } from "../../lib/prompt-lab/library";
import { buildQuickPrompt, buildSkill, getInitialValues, type PromptValues } from "../../lib/prompt-lab/prompt-utils";
import SkillGuide from "./SkillGuide";
import styles from "./prompt-lab.module.css";

export default function QuickPromptGuide({ prompt }: { prompt: LibraryEntry }) {
  const [feedback, setFeedback] = useState("");
  const [values, setValues] = useState<PromptValues>(() => getInitialValues(prompt));
  const previewRef = useRef<HTMLTextAreaElement>(null);
  const task = isSimpleTask(prompt) ? prompt : undefined;
  const quickStart = prompt.quickStart;
  const fields = prompt.fields.filter((field) => quickStart?.inputIds?.includes(field.id));
  const generatedPrompt = buildQuickPrompt(prompt, values);
  if (!quickStart) return null;

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setFeedback("Prompt copied. Paste it into your AI tool with your source material.");
    } catch {
      previewRef.current?.focus();
      previewRef.current?.select();
      setFeedback("Clipboard access is unavailable. The prompt is selected; use your device's copy command or download it.");
    }
  }

  function download(content: string, filename: string, skill = false) {
    const url = URL.createObjectURL(new Blob([content], { type: skill ? "text/markdown;charset=utf-8" : "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setFeedback(skill ? "SKILL.md downloaded. Follow the setup steps to reuse this task." : "Prompt downloaded as a TXT file.");
  }

  return (
    <section id="prompt-builder" className={styles.builderSection} aria-label="Instructions and ready-to-use prompt">
      <div className={styles.builder}>
        <div className={styles.quickInstructions}>
          <h2>How to use it</h2>
          <ol className={styles.quickSteps}>
            {quickStart.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.description}</p></li>)}
          </ol>
          {fields.length ? <div className={styles.fields}>
            {fields.map((field) => <div key={field.id} className={styles.field}>
              <label htmlFor={`quick-task-${field.id}`}>
                <span>{field.label}{field.inputType === "date" ? " (optional)" : ""}</span>
                {field.inputType === "date" ? <input
                  id={`quick-task-${field.id}`}
                  type="date"
                  value={values[field.id] ?? ""}
                  onChange={(event) => {
                    setValues((current) => ({ ...current, [field.id]: event.target.value }));
                    setFeedback("");
                  }}
                /> : <textarea
                  id={`quick-task-${field.id}`}
                  rows={field.rows ?? 2}
                  placeholder={field.placeholder}
                  value={values[field.id] ?? ""}
                  onChange={(event) => {
                    setValues((current) => ({ ...current, [field.id]: event.target.value }));
                    setFeedback("");
                  }}
                />}
              </label>
              {field.tips?.length ? <details className={styles.fieldTips}>
                <summary>Tips to customize this hierarchy</summary>
                <ul>{field.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
              </details> : null}
            </div>)}
            <p className={styles.helper}>Add your requirements here or replace the brackets after copying. Provide your source material in your AI tool; this page only prepares the prompt.</p>
          </div> : null}
          {task ? <details className={styles.reuseDetails}>
            <summary>Save this task as a reusable skill</summary>
            <SkillGuide task={task} />
            <button type="button" className="secondary" onClick={() => download(buildSkill(task), "SKILL.md", true)}><Download size={18} aria-hidden="true" /> Download SKILL.md</button>
          </details> : null}
        </div>
        <div className={styles.previewPanel}>
          <h2>Your prompt</h2>
          <label className={styles.srOnly} htmlFor="ready-task-prompt">Ready-to-use task prompt</label>
          <textarea id="ready-task-prompt" className={styles.preview} ref={previewRef} value={generatedPrompt} readOnly rows={18} spellCheck={false} />
          <div className={styles.actions}>
            <button type="button" className="resource-button resource-button-small" onClick={copyPrompt}><Copy size={18} aria-hidden="true" /> Copy prompt</button>
            <button type="button" className="secondary" onClick={() => download(generatedPrompt, `prompt-lab-${prompt.slug}.txt`)}><Download size={18} aria-hidden="true" /> Download TXT</button>
          </div>
          <p className={styles.feedback} role="status">{feedback}</p>
          <div className={styles.platformLinks}>
            <span>Copy the prompt, then open your AI tool:</span>
            <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">ChatGPT <Launch size={14} aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span></a>
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude <Launch size={14} aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
