import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  outerClassName?: string;
  innerClassName?: string;
  addSpacer?: boolean;
  headingAs?: "h2" | "h3";
  linkTitle?: boolean;
};

export default function ContentSection({
  id,
  title,
  children,
  outerClassName = "page-container",
  innerClassName,
  addSpacer = false,
  headingAs = "h2",
  linkTitle = true,
}: Props) {
  const HeadingTag = headingAs;
  const content = (
    <>
      <HeadingTag id={id}>{linkTitle ? <a href={`#${id}`}>{title}</a> : title}</HeadingTag>
      {addSpacer ? <div className="spacer m" /> : null}
      {children}
    </>
  );

  return (
    <section className={outerClassName}>
      {innerClassName ? <div className={innerClassName}>{content}</div> : content}
    </section>
  );
}
