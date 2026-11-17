import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function AiHighlightCard({ title, description, icon }: Props) {
  return (
    <article className="ai-highlight-card">
      <div className="ai-highlight-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
