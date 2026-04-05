import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCaseStudies, getCaseStudy } from "@/lib/case-studies";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getCaseStudies().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getCaseStudy(slug);

  if (!post) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${post.portfolioTitle} | Case Study`,
    description: post.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const post = getCaseStudy(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-shell">
      <article>
        <section className="page-container page-intro case-study-hero">
          <div className="case-study-hero-copy">
            <p className="case-study-hero-meta">
              <span>{post.category}</span>
              <span>{post.readTime}</span>
            </p>
            <h1 id={post.slug}>{post.title}</h1>
            <p className="page-lead">{post.summary}</p>
            <div className="case-study-hero-actions">
              <Link className="button" href="/portfolio">
                Back to Portfolio
              </Link>
              <Link className="button secondary" href="/blog">
                More Case Studies
              </Link>
            </div>
          </div>

          <div className="case-study-hero-media">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              width={1600}
              height={1200}
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </div>
        </section>

        {post.metrics?.length ? (
          <section className="section highlight-light-green">
            <div className="page-container page-section-content">
              <div className="case-study-metrics">
                {post.metrics.map((metric) => (
                  <div key={metric.label} className="case-study-metric">
                    <p className="case-study-metric-value">{metric.value}</p>
                    <p className="case-study-metric-label">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {post.sections.map((section) => (
          <section
            key={section.title}
            className={section.sectionClassName ? `section ${section.sectionClassName}` : "section"}
          >
            <div className="page-container page-section-content case-study-content">
              <div className="case-study-section">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="case-study-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {section.images?.length ? (
                <div className={`case-study-image-grid case-study-image-grid-${section.images.length > 1 ? "multi" : "single"}`}>
                  {section.images.map((image) => (
                    <figure key={image.src} className="case-study-figure">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={2000}
                        height={1600}
                        sizes="(min-width: 900px) 80vw, 100vw"
                      />
                      {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                    </figure>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}

        {post.externalSource ? (
          <section className="page-container page-section-content">
            <p className="case-study-source">
              Original portfolio source:{" "}
              <a href={post.externalSource} target="_blank" rel="noreferrer">
                {post.externalSource}
              </a>
            </p>
          </section>
        ) : null}
      </article>
    </main>
  );
}
