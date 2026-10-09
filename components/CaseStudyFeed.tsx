import Link from "next/link";
import Image from "next/image";

import { getCaseStudies, getCaseStudyUrl } from "@/lib/case-studies";

type Props = {
  title?: string;
  intro?: string;
  limit?: number;
  listAfter?: number;
  showViewAll?: boolean;
};

export default function CaseStudyFeed({
  title = "From the case study archive",
  intro,
  limit,
  listAfter,
  showViewAll = false,
}: Props) {
  const posts = getCaseStudies();
  const visiblePosts = typeof limit === "number" ? posts.slice(0, limit) : posts;
  const cardPosts = typeof listAfter === "number" ? visiblePosts.slice(0, listAfter) : visiblePosts;
  const listedPosts = typeof listAfter === "number" ? visiblePosts.slice(listAfter) : [];
  const hasHeader = Boolean(title || intro || showViewAll);

  return (
    <section className="section highlight-light-green">
      <div className="page-container page-section-content">
        {hasHeader ? (
          <div className="case-study-feed-header">
            <div>
              {title ? <h2 className="section-title">{title}</h2> : null}
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
        ) : null}

        <div className="case-study-feed-grid">
          {cardPosts.map((post, index) => (
            <article key={post.slug} className="case-study-card">
              <div className="case-study-card-media">
                <Image src={post.imageSrc} alt={post.imageAlt} fill sizes="98px" style={{ objectFit: "cover" }} />
                <span className={`case-study-card-media-overlay gradient-${(index % 6) + 1}`} aria-hidden="true" />
              </div>
              <div className="case-study-card-copy">
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
              </div>
            </article>
          ))}
        </div>

        {listedPosts.length ? (
          <div className="case-study-feed-archive">
            <h2>More Case Studies</h2>
            <ul className="case-study-feed-list">
              {listedPosts.map((post) => (
                <li key={post.slug}>
                  <Link className="case-study-feed-list-row" href={getCaseStudyUrl(post.slug)}>
                    <div className="case-study-feed-list-copy">
                      <p className="case-study-card-meta case-study-feed-list-meta">
                        <span>{post.category}</span>
                      </p>
                      <h3>{post.title}</h3>
                    </div>
                    <span className="case-study-feed-list-action">Read Case Study</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
