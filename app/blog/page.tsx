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
    </main>
  );
}
