import type { ReactNode } from "react";
import ThreeColumnCopy from "./ThreeColumnCopy";

type Props = {
  title: string;
  titleId: string;
  body: ReactNode;
  links?: ReactNode;
  aside?: ReactNode;
  asidePosition?: "left" | "right";
  variant?: "default" | "knowledge" | "copy";
  columns?: number;
  mainSpan?: number;
  sideSpan?: number;
};

const variantClassName: Record<NonNullable<Props["variant"]>, string> = {
  default: "page-intro-header",
  knowledge: "knowledge-page-intro",
  copy: "page-copy",
};

export default function PageIntro({
  title,
  titleId,
  body,
  links,
  aside,
  asidePosition = "right",
  variant = "default",
  columns,
  mainSpan,
  sideSpan,
}: Props) {
  return (
    <section className={`page-container ${variantClassName[variant]}`}>
      <ThreeColumnCopy
        title={title}
        titleId={titleId}
        headingAs="h1"
        body={
          <>
            {body}
            {links}
          </>
        }
        aside={aside}
        asidePosition={asidePosition}
        columns={columns}
        mainSpan={mainSpan}
        sideSpan={sideSpan}
      />
    </section>
  );
}
