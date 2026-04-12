import Link from "next/link";

import CaseStudyFeed from "@/components/CaseStudyFeed";
import PageIntro from "@/components/PageIntro";

export default function BlogPage() {
  return (
    <main className="page-shell">
      <PageIntro
        title="Case Studies"
        titleId="case-studies"
        variant="default"
        body={
          <p>
            A growing archive of project stories focused on web launches, campaign systems, and the creative work that
            connected strategy to execution.
          </p>
        }
      />

      <CaseStudyFeed
        title="All Posts"
        intro="These posts turn selected portfolio pieces into fuller stories about the challenge, the work, and the outcome."
      />

      <section className="section highlight-orange cta-section">
        <div className="page-container page-section-content">
          <h2 className="section-title">Want to talk about work like this?</h2>
          <p>
            If you would like to connect, ask a question, or talk about a project with similar needs, I would love to
            hear from you.
          </p>
          <p>
            <Link className="button" href="/contact">
              Contact Me
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
