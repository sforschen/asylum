"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

type Props = {
  id: string;
  title: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  children: ReactNode;
  panelAlign?: "left" | "right";
};

export default function ParallaxImageSection({
  id,
  title,
  imageSrc,
  children,
  panelAlign = "left",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;

    if (!section || !media) {
      return undefined;
    }

    let frame = 0;

    const updateOffset = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const offset = Math.round(rect.top * -0.2);
      media.style.setProperty("--parallax-offset", `${offset}px`);
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="parallax-section" ref={sectionRef}>
      <div
        ref={mediaRef}
        className="parallax-section-media"
        aria-hidden="true"
      >
        <Image
          className="parallax-section-image"
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          priority={false}
        />
      </div>
      <div
        className={`page-container page-section-content parallax-section-content${panelAlign === "right" ? " is-right" : ""}`}
      >
        <div className="parallax-section-panel">
          <h2 id={id} className="section-title">
            <a href={`#${id}`}>{title}</a>
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
