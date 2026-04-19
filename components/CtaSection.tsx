import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  href?: string;
  buttonLabel?: string;
};

export default function CtaSection({ title, children, href = "/contact", buttonLabel = "Contact Me" }: Props) {
  return (
    <section className="section highlight-red cta-section">
      <div className="page-container page-section-content">
        <h2 className="section-title">{title}</h2>
        <p>{children}</p>
        <p>
          <Link className="button" href={href}>
            {buttonLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
