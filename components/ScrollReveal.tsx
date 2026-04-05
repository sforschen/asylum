"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds a lightweight in-view class to page sections as they enter the viewport.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("has-scroll-reveal");

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"))
      .filter((section) => !section.classList.contains("hero-container"));

    if (!sections.length) {
      document.documentElement.classList.remove("has-scroll-reveal");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
    });

    const frame = window.requestAnimationFrame(() => {
      sections.forEach((section) => {
        observer.observe(section);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
      sections.forEach((section) => {
        section.classList.remove("scroll-reveal", "is-visible");
      });
    };
  }, [pathname]);

  return null;
}
