"use client";

import { useEffect, useRef, useState } from "react";

export type SkillItem = {
  name: string;
  percent: number;
};

type Props = {
  id: string;
  title: string;
  items: SkillItem[];
  showTitle?: boolean;
};

function getSkillColor(percent: number) {
  if (percent <= 25) return "var(--clr-blue)";
  if (percent <= 45) return "var(--clr-red)";
  if (percent <= 65) return "var(--clr-orange)";
  if (percent <= 85) return "var(--clr-light-blue)";
  return "var(--clr-green)";
}

function SkillBar({ skill }: { skill: SkillItem }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedWidth(skill.percent);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [skill.percent]);

  return (
    <div
      ref={ref}
      className="k-bar"
      style={{ width: `${animatedWidth}%`, backgroundColor: getSkillColor(skill.percent) }}
    >
      {skill.percent}%
    </div>
  );
}

export default function SkillBarGroup({ id, title, items, showTitle = true }: Props) {
  return (
    <div className="knowledge-skill-group">
      {showTitle ? <h3 id={id}>{title}</h3> : null}
      <ul className="k-list">
        {items.map((skill) => (
          <li key={`${id}-${skill.name}`} className="k-card">
            <div className="k-body">
              <strong>{skill.name}</strong>
            </div>
            <SkillBar skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}
