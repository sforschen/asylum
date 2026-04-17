import type { ReactNode } from "react";

import Image from "next/image";

import ContentSection from "../../components/ContentSection";
import GallerySection, { type GalleryItem } from "../../components/GallerySection";
import { siteAssets } from "../../content/siteAssets";
import { siteDocuments } from "../../content/siteDocuments";
import KnowledgeCard from "../../components/KnowledgeCard";
import PageIntro from "../../components/PageIntro";

export const metadata = {
  title: "About",
  description:
    "Learn more about Serenity Forschen, including personal background, creative interests, everyday life, and links to resume, LinkedIn, and GitHub.",
};

// Text-first cards used for the lighter personal facts section.
type AboutInfoCard = {
  title: string;
  body: ReactNode;
};

const aboutGalleryItems: GalleryItem[] = [
  {
    title: "Snort",
    imageSrc: siteAssets.about.snortThumb,
    links: [{ href: siteAssets.about.snortFull.src, label: "View Image" }],
  },
  {
    title: "Grunt",
    imageSrc: siteAssets.about.gruntThumb,
    links: [{ href: siteAssets.about.gruntFull.src, label: "View Image" }],
  },
  {
    title: "My Garden",
    imageSrc: siteAssets.about.gardenThumb,
    links: [{ href: siteAssets.about.gardenFull.src, label: "View Image" }],
  },
];

// Personal trivia and personality notes for the about page.
const randomInfo: AboutInfoCard[] = [
  {
    title: "Hyperfocus Music",
    body: "Albums: Fear Inoculum by Tool or Another Brick in the Wall by Pink Floyd. I also love to dive into classic rock like Led Zeppelin, Heart, or Supertramp.",
  },
  {
    title: "Preferred Work Schedule",
    body: "My preferred work schedule is Eastern Time: 8-5 p.m. However, I am adaptable and can work in any time zone as needed. I find the early morning hours to be incredibly productive, and love to start my day early.",
  },
  {
    title: "Current Obsession",
    body: (
      <>
        I obsessively paint owls and other birds. My garden is a place of zen. I also collect brass objects. Of
        course, my dogs are my #1 obsession.
        <br />
        <br />
        <a className="button" href="/portfolio#art">Bird Admiration</a>
      </>
    ),
  },
  {
    title: "Tsundoku (積ん読)",
    body: "I am guilty of buying books and never finishing them or sometimes never reading them. I have a mini library in my office, and about half of it was purchased with good intentions.",
  },
  {
    title: "Serenity Now",
    body: "Insanity later.",
  },
  {
    title: "Inbox Style",
    body: "I have zero unread items, with tasks flagged for follow-up. I am that weird person who goes deep into Outlook's settings and optimizes everything I can to work more efficiently.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      {/* Short intro matching the live about page framing. */}
      <PageIntro
        title="About Me"
        titleId="about-me"
        variant="default"
        body={<p>More about my weird disposition.</p>}
      />

      {/* Personal intro block with portrait and short bio. */}
      <section className="section highlight">
        <div className="page-container page-section-content about-highlight">
          <div className="about-profile-image">
            <Image
              src={siteAssets.about.portrait}
              alt="Serenity Forschen portrait"
              width={750}
              height={750}
              loading="eager"
              sizes="(min-width: 900px) 24rem, 100vw"
            />
          </div>
          <div className="about-profile-copy">
            <p>
              I live in Utah&apos;s Salt Lake Metro area with two dogs, Snort and Grunt. I enjoy gardening, and we
              went a bit stir-crazy during the pandemic and built a pond. I am a lifelong gamer and enjoy hard rock
              and metal music, which fuels my creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Image-led cards for dogs and garden use the shared gallery pattern. */}
      <GallerySection id="about-gallery" title="Everyday Life" items={aboutGalleryItems} />

      {/* Text-only personal facts reuse the simple card component. */}
      <ContentSection
        id="random-info"
        title="Random Info"
        outerClassName="section highlight-light-green"
        innerClassName="page-container page-section-content"
      >
        <div className="k-grid about-facts-grid">
          {randomInfo.map((item) => (
            <KnowledgeCard key={item.title} title={item.title} description={item.body} />
          ))}
        </div>
      </ContentSection>

      {/* Closing links to resume and external profiles. */}
      <ContentSection id="hey-there" title="Hey there!" outerClassName="page-container" threeColumn>
        <p className="about-links-copy">
          To learn more about my background and skills, check out my{" "}
          <a
            href={siteDocuments.about.resume}
            target="_blank"
            rel="noreferrer"
          >
            resume
          </a>
          , <a href="https://www.linkedin.com/in/serenityforschen/" target="_blank" rel="noreferrer">LinkedIn</a>{" "}
          profile, or <a href="https://github.com/sforschen" target="_blank" rel="noreferrer">GitHub</a>. They provide
          a great snapshot of my experiences and what I can offer.
        </p>
      </ContentSection>
    </main>
  );
}
