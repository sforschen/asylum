"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds a lightweight in-view class to section content as each section enters the viewport.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/resources/file-management-system") {
      document.documentElement.classList.remove("has-scroll-reveal");
      return;
    }

    document.documentElement.classList.add("has-scroll-reveal");

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"))
      .filter((section) => (
        !section.classList.contains("hero-container")
        && !section.classList.contains("cta-section")
      ));

    if (!sections.length) {
      document.documentElement.classList.remove("has-scroll-reveal");
      return;
    }

    const sectionRevealPairs = sections
      .map((section) => ({
        section,
        revealTargets: Array.from(section.children).filter((child): child is HTMLElement => (
          child instanceof HTMLElement && !child.hasAttribute("aria-hidden")
        )),
      }))
      .filter(({ revealTargets }) => revealTargets.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            const revealPair = sectionRevealPairs.find((pair) => pair.section === section);

            revealPair?.revealTargets.forEach((target) => {
              target.classList.add("is-visible");
            });

            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    sectionRevealPairs.forEach(({ revealTargets }) => {
      revealTargets.forEach((target) => {
        target.classList.add("scroll-reveal");
      });
    });

    const frame = window.requestAnimationFrame(() => {
      sectionRevealPairs.forEach(({ section }) => {
        observer.observe(section);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
      sectionRevealPairs.forEach(({ revealTargets }) => {
        revealTargets.forEach((target) => {
          target.classList.remove("scroll-reveal", "is-visible");
        });
      });
    };
  }, [pathname]);

  return null;
}
