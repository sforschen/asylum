import Link from "next/link";

import { getCaseStudies, getCaseStudyUrl } from "@/lib/case-studies";

type Props = {
  title?: string;
  intro?: string;
  limit?: number;
  showViewAll?: boolean;
};

export default function CaseStudyFeed({ title = "From the case study archive", intro, limit, showViewAll = false }: Props) {
  const posts = getCaseStudies();
  const visiblePosts = typeof limit === "number" ? posts.slice(0, limit) : posts;

  return (
    <section className="section highlight-light-green">
      <div className="page-container page-section-content">
        <div className="case-study-feed-header">
          <div>
            <h2 className="section-title">{title}</h2>
            {intro ? <p className="case-study-feed-intro">{intro}</p> : null}
          </div>
          {showViewAll ? (
            <p className="case-study-feed-action">
              <Link className="button secondary" href="/blog">
                View All Posts
              </Link>
            </p>
          ) : null}
        </div>

        <div className="case-study-feed-grid">
          {visiblePosts.map((post) => (
            <article key={post.slug} className="case-study-card">
              <p className="case-study-card-meta">
                <span>{post.category}</span>
                <span className="case-study-card-read-time">{post.readTime}</span>
              </p>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <p className="case-study-card-action">
                <Link className="button" href={getCaseStudyUrl(post.slug)}>
                  Read Case Study
                </Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
