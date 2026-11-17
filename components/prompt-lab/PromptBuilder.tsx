"use client";

import { useRef, useState } from "react";
import { Copy, Download, Launch, Reset } from "@carbon/icons-react";

import { isSimpleTask, type LibraryEntry } from "../../lib/prompt-lab/library";
import { buildPrompt, buildSkill, getExampleValues, getInitialValues, getPromptFields, type PromptValues } from "../../lib/prompt-lab/prompt-utils";
import SkillGuide from "./SkillGuide";
import styles from "./prompt-lab.module.css";

export default function PromptBuilder({ prompt }: { prompt: LibraryEntry }) {
  const [values, setValues] = useState<PromptValues>(() => getInitialValues(prompt));
  const [feedback, setFeedback] = useState("");
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [mode, setMode] = useState<"run" | "skill">("run");
  const task = isSimpleTask(prompt) ? prompt : undefined;
  const isSkillMode = Boolean(task && mode === "skill");
  const previewRef = useRef<HTMLTextAreaElement>(null);
  const fields = getPromptFields(prompt);
  const generatedPrompt = isSkillMode && task ? buildSkill(task) : buildPrompt(prompt, values);
  const missing = fields.filter((field) => field.required && !values[field.id]?.trim());
  const hasValues = Object.values(values).some((value) => value.trim());
  const hasStarterContent = fields.some((field) => field.defaultValue !== undefined);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setFeedback(isSkillMode ? "Skill instructions copied. Save them as SKILL.md in the skill's folder." : "Instructions copied. Paste them into your AI tool, then review the response yourself.");
    } catch {
      previewRef.current?.focus();
      previewRef.current?.select();
      setFeedback("Clipboard access is unavailable. The instructions are selected; use your device's copy command or download the file.");
    }
  }

  function downloadPrompt() {
    const blob = new Blob([generatedPrompt], { type: isSkillMode ? "text/markdown;charset=utf-8" : "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = isSkillMode ? "SKILL.md" : `prompt-lab-${prompt.slug}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setFeedback(isSkillMode ? "SKILL.md downloaded. Follow the setup steps to add it to your project." : "Instructions downloaded as a TXT file.");
  }

  return (
    <section id="prompt-builder" className={styles.builderSection} aria-labelledby="builder-title">
      <div className={styles.sectionHeading}>
        <h2 id="builder-title">{task ? "Use this task once or make it a skill" : "Build your strategic prompt"}</h2>
        <p>{task ? "Prepare instructions here, then run them in an AI tool with the required access. This page does not inspect folders or process your images." : "Bring your context and your point of view. The prompt updates as you type."}</p>
        {task ? <div className={styles.modePicker} role="group" aria-label="Instruction format">
          <button type="button" className="secondary" aria-pressed={!isSkillMode} onClick={() => { setMode("run"); setFeedback(""); }}>Use once</button>
          <button type="button" className="secondary" aria-pressed={isSkillMode} onClick={() => { setMode("skill"); setFeedback(""); }}>Add as a skill</button>
        </div> : null}
      </div>
      <div className={styles.builder}>
        <div className={styles.formPanel}>
          {isSkillMode && task ? <SkillGuide task={task} /> : <>
          <div className={styles.panelHeading}>
            <h3>Your project</h3>
            <button type="button" className="secondary" onClick={() => {
              setValues(getExampleValues(prompt));
              setFeedback("Example inputs loaded. Replace them with your own files and requirements.");
            }}>Try an example</button>
          </div>
          <p className={styles.helper}>The example uses fictional workshop material. Keep private client or personal information out of material you share with an AI tool.</p>
          {task ? <div className={styles.taskRequirements}><strong>Before you run it</strong><ul>{task.skill.requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul><p>Fill the fields, copy the instructions, and provide the actual files or authorized access in your AI tool. A path alone does not provide file access.</p></div> : null}
          <div className={styles.fields}>
            {fields.map((field) => (
              <div key={field.id} className={styles.field}>
              <label htmlFor={`prompt-${field.id}`}>
                <span>{field.label} {field.required ? <span className={styles.required}>· Start here</span> : null}</span>
                {field.inputType === "date" ? <input
                  id={`prompt-${field.id}`}
                  type="date"
                  value={values[field.id] ?? ""}
                  onChange={(event) => {
                    setValues((current) => ({ ...current, [field.id]: event.target.value }));
                    setFeedback("");
                  }}
                /> : <textarea
                  id={`prompt-${field.id}`}
                  rows={field.rows ?? 3}
                  placeholder={field.placeholder}
                  value={values[field.id] ?? ""}
                  onChange={(event) => {
                    setValues((current) => ({ ...current, [field.id]: event.target.value }));
                    setFeedback("");
                  }}
                />}
              </label>
              {field.tips?.length ? <div className={styles.fieldTips}>
                <p>Customize this hierarchy</p>
                <ul>{field.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
              </div> : null}
              </div>
            ))}
            {!task ? <div className={styles.sourceGuidance}>
              <h3>Source materials</h3>
              <p className={styles.helper}>Upload or link the source files directly in your AI assistant after copying the prompt.</p>
            </div> : null}
          </div>
          <div className={styles.actions}>
            {hasStarterContent ? <button type="button" className="secondary" onClick={() => {
              setValues((current) => ({ ...current, ...getInitialValues(prompt) }));
              setFeedback("Starter content restored. Your other project details are kept.");
            }}>Restore starter content</button> : null}
            <button type="button" className="secondary" disabled={!hasValues} onClick={() => {
              setValues({});
              setFeedback("Project fields cleared.");
            }}><Reset size={18} aria-hidden="true" /> Clear fields</button>
          </div>
          <p className={styles.helper}>Your entries stay on this page and clear when you leave or reload it. Copying and downloading use your browser. Opening an AI tool does not send your prompt.</p>
          </>}
        </div>

        <div className={styles.previewPanel}>
          <div className={styles.panelHeading}>
            <h3>{isSkillMode ? "Reusable SKILL.md" : task ? "Your task instructions" : "Your assembled prompt"}</h3>
            <span className={styles.badge}>{isSkillMode ? "Reusable procedure" : missing.length ? "Add your context" : "Ready to review"}</span>
          </div>
          <p id="prompt-preview-help" className={styles.helper}>
            {isSkillMode ? "The skill contains the reusable procedure, not your current project entries. Supply new files and requirements each time you run it." : missing.length
              ? `Start with: ${missing.map((field) => field.label.toLowerCase()).join(", ")}. Unfilled fields remain as brackets to complete later.`
              : "Read the instructions before using them. Fill any remaining brackets or let the AI ask for the missing details."}
          </p>
          <label className={styles.srOnly} htmlFor="assembled-prompt">{isSkillMode ? "Skill file preview" : "Assembled instruction preview"}</label>
          <textarea id="assembled-prompt" className={styles.preview} ref={previewRef} value={generatedPrompt} readOnly rows={22} aria-describedby="prompt-preview-help" spellCheck={false} />
          <div className={styles.actions}>
            <button type="button" className="resource-button resource-button-small" onClick={copyPrompt}><Copy size={18} aria-hidden="true" /> {isSkillMode ? "Copy skill" : task ? "Copy task" : "Copy prompt"}</button>
            <button type="button" className="secondary" onClick={downloadPrompt}><Download size={18} aria-hidden="true" /> {isSkillMode ? "Download SKILL.md" : "Download TXT"}</button>
          </div>
          <p className={styles.feedback} role="status">{feedback}</p>
          {!isSkillMode ? <><div className={styles.platformLinks}>
            <span>Copy first, then open your tool:</span>
            <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">ChatGPT <Launch size={14} aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span></a>
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">Claude <Launch size={14} aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span></a>
          </div>
          </> : null}
          {!isSkillMode ? <div className={styles.followUp}>
            <button type="button" className="secondary" aria-expanded={showFollowUp} aria-controls="follow-up-prompt" onClick={() => setShowFollowUp(!showFollowUp)}>After the first response</button>
            {showFollowUp ? <div id="follow-up-prompt"><p>Choose what works, correct what does not, and keep the conversation specific. Try this follow-up:</p><p className={styles.followUpText}>{prompt.followUp}</p></div> : null}
          </div> : null}
        </div>
      </div>
    </section>
  );
}
