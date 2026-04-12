import type { ReactNode } from "react";
import type { CSSProperties } from "react";

type Props = {
  title: ReactNode;
  titleId?: string;
  body: ReactNode;
  aside?: ReactNode;
  asidePosition?: "left" | "right";
  headingAs?: "h1" | "h2" | "h3";
  titleClassName?: string;
  className?: string;
  columns?: number;
  mainSpan?: number;
  sideSpan?: number;
};

export default function ThreeColumnCopy({
  title,
  titleId,
  body,
  aside,
  asidePosition = "right",
  headingAs = "h2",
  titleClassName,
  className,
  columns = 3,
  mainSpan = 2,
  sideSpan = 1,
}: Props) {
  const HeadingTag = headingAs;
  const safeColumns = Math.max(1, columns);
  const safeMainSpan = Math.min(Math.max(1, mainSpan), safeColumns);
  const safeSideSpan = Math.min(Math.max(1, sideSpan), safeColumns);
  const mainStart = asidePosition === "left" ? Math.min(safeSideSpan + 1, safeColumns) : 1;
  const sideStart = asidePosition === "left" ? 1 : Math.max(1, safeColumns - safeSideSpan + 1);
  const layoutVars = {
    "--three-column-columns": `${safeColumns}`,
    "--three-column-main-start": `${mainStart}`,
    "--three-column-main-span": `${safeMainSpan}`,
    "--three-column-side-start": `${sideStart}`,
    "--three-column-side-span": `${safeSideSpan}`,
  } as CSSProperties;

  return (
    <div
      className={`three-column-copy three-column-copy--${asidePosition}${className ? ` ${className}` : ""}`}
      style={layoutVars}
    >
      <div className="three-column-copy-main">
        <HeadingTag id={titleId} className={titleClassName}>
          {title}
        </HeadingTag>
        {body}
      </div>
      <div className={`three-column-copy-side${aside ? "" : " is-empty"}`}>{aside}</div>
    </div>
  );
}
