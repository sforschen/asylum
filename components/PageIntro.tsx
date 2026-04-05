import type { ReactNode } from "react";

type Props = {
  title: string;
  titleId: string;
  body: ReactNode;
  links?: ReactNode;
  variant?: "default" | "knowledge" | "copy";
};

const variantClassName: Record<NonNullable<Props["variant"]>, string> = {
  default: "page-intro-header",
  knowledge: "knowledge-page-intro",
  copy: "page-copy",
};

export default function PageIntro({ title, titleId, body, links, variant = "default" }: Props) {
  return (
    <section className={`page-container ${variantClassName[variant]}`}>
      <h1 id={titleId}>{title}</h1>
      {body}
      {links}
    </section>
  );
}
