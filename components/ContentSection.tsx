import type { ReactNode } from "react";
import ThreeColumnCopy from "./ThreeColumnCopy";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  outerClassName?: string;
  innerClassName?: string;
  contentClassName?: string;
  addSpacer?: boolean;
  headingAs?: "h2" | "h3";
  linkTitle?: boolean;
  threeColumn?: boolean;
  aside?: ReactNode;
  asidePosition?: "left" | "right";
  columns?: number;
  mainSpan?: number;
  sideSpan?: number;
};

export default function ContentSection({
  id,
  title,
  children,
  outerClassName = "page-container",
  innerClassName,
  contentClassName,
  addSpacer = false,
  headingAs = "h2",
  linkTitle = true,
  threeColumn = false,
  aside,
  asidePosition = "right",
  columns,
  mainSpan,
  sideSpan,
}: Props) {
  const HeadingTag = headingAs;
  const headingContent = linkTitle ? <a href={`#${id}`}>{title}</a> : title;
  const bodyContent = (
    <>
      {addSpacer ? <div className="spacer m" /> : null}
      {children}
    </>
  );
  const content = threeColumn ? (
    <ThreeColumnCopy
      title={headingContent}
      titleId={id}
      headingAs={headingAs}
      body={bodyContent}
      aside={aside}
      asidePosition={asidePosition}
      className={contentClassName}
      columns={columns}
      mainSpan={mainSpan}
      sideSpan={sideSpan}
    />
  ) : (
    <>
      <HeadingTag id={id}>{headingContent}</HeadingTag>
      {bodyContent}
    </>
  );

  return (
    <section className={outerClassName}>
      {innerClassName ? <div className={innerClassName}>{content}</div> : content}
    </section>
  );
}
