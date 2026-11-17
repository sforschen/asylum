import type { TaskDefinition } from "../../lib/prompt-lab/tasks";
import styles from "./prompt-lab.module.css";

export default function SkillGuide({ task }: { task: TaskDefinition }) {
  return (
    <div className={styles.skillGuide}>
      <h3>Make this task reusable</h3>
      <p>A skill stores the procedure so you can bring new files and requirements each time. This download contains instructions; your AI tool supplies the file access and processing capabilities.</p>
      <h4>What your tool needs</h4>
      <ul>{task.skill.requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul>
      <h4>Add it as a local Codex skill</h4>
      <ol>
        <li>Download the <code>SKILL.md</code> file for this task.</li>
        <li>Create a folder named <code>{task.skill.name}</code> inside your project&apos;s <code>.agents/skills/</code> folder. Put <code>SKILL.md</code> inside it.</li>
        <li>Open the project in Codex and select the skill with <code>${task.skill.name}</code>. If it does not appear, restart Codex.</li>
        <li>Supply the files or authorized location and your requirements for this run. Inspect the first result before reusing the task on a larger batch.</li>
      </ol>
      <p className={styles.helper}>Project location: <code>.agents/skills/{task.skill.name}/SKILL.md</code></p>
      <h4>Ask for the task</h4>
      <p className={styles.followUpText}>{task.skill.invocation}</p>
      <p className={styles.helper}>These steps follow the <a href="https://learn.chatgpt.com/docs/build-skills" target="_blank" rel="noopener noreferrer">official OpenAI skill documentation<span className={styles.srOnly}> (opens in a new tab)</span></a>. For another AI tool, use its supported skill format or paste the run-once instructions. Installing a skill does not grant access to your files.</p>
    </div>
  );
}
