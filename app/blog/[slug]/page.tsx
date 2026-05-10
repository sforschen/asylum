import type { Metadata } from "next";
import { FlowData, NetworkEnterprise, Renew, Rule, Search } from "@carbon/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import MediaModalImage from "@/components/MediaModalImage";
import { getCaseStudies, getCaseStudy } from "@/lib/case-studies";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const bulletCardIcons = [FlowData, Search, Rule, Renew];
const sectionAsideIcons = {
  "network-enterprise": NetworkEnterprise,
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
            {post.relatedExperience?.length ? (
              <p className="case-study-related-experience">
                Related experience:{" "}
                {post.relatedExperience.map((experience, index) => (
                  <span key={experience.href}>
                    <Link href={experience.href}>{experience.label}</Link>
                    {index < post.relatedExperience!.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            ) : null}
          </div>

          <div className="case-study-hero-media">
            <MediaModalImage
              buttonClassName="media-modal-image-button"
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
                    {metric.href ? (
                      <p className="case-study-metric-link">
                        <a href={metric.href} download>
                          {metric.linkLabel ?? "Download PDF"}
                        </a>
                      </p>
                    ) : null}
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
              <div className={section.asideIcon ? "case-study-section case-study-section-with-aside" : "case-study-section"}>
                <div className="case-study-section-main">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className={section.bulletLayout === "cards" ? "case-study-bullet-cards" : "case-study-list"}>
                    {section.bullets.map((bullet, index) => {
                      const BulletIcon = bulletCardIcons[index % bulletCardIcons.length];

                      return (
                        <li key={bullet}>
                          {section.bulletLayout === "cards" ? (
                            <span className="case-study-bullet-card-icon" aria-hidden="true">
                              <BulletIcon />
                            </span>
                          ) : null}
                          <span>{bullet}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
                {section.title === "Takeaway" && post.takeaways?.length ? (
                  <div className="case-study-takeaway-actions">
                    {post.takeaways.map((takeaway) => (
                      <a key={takeaway.href} className="button" href={takeaway.href} download>
                        {takeaway.label}
                      </a>
                    ))}
                  </div>
                ) : null}
                </div>
                {section.asideIcon ? (
                  <div className="case-study-section-aside-icon" aria-hidden="true">
                    {(() => {
                      const AsideIcon = sectionAsideIcons[section.asideIcon];

                      return <AsideIcon />;
                    })()}
                  </div>
                ) : null}
              </div>

              {section.images?.length ? (
                <div
                  className={`case-study-image-grid case-study-image-grid-${section.images.length > 1 ? "multi" : "single"}${section.imagesLayout === "masonry" ? " case-study-image-grid-masonry" : ""}${section.imagesLayout === "masonry-two-column" ? " case-study-image-grid-masonry-two-column" : ""}${section.imagesLayout === "two-column-last-full" ? " case-study-image-grid-two-column-last-full" : ""}${section.firstImageFullWidth ? " case-study-image-grid-first-full" : ""}`}
                >
                  {section.images.map((image, index) => (
                    <figure key={`${image.alt}-${index}`} className="case-study-figure">
                      <MediaModalImage
                        buttonClassName="media-modal-image-button"
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

      </article>
    </main>
  );
}
