"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type TimelineYear = "Now" | 2025 | 2020 | 2015 | 2010 | 2005 | 2000;

export type ExperienceTimelineItem = {
  role: string;
  company: string;
  type: string;
  highlight: string;
  isCurrent?: boolean;
};

type ExperienceTimelineSectionProps = {
  items: ExperienceTimelineItem[];
};

const timelineTickYears = ["Now", 2025, 2020, 2015, 2010, 2005, 2000] as const;
const milestoneAlignedTimelineTicks = new Set<TimelineYear>(["Now", 2015, 2005]);

export default function ExperienceTimelineSection({ items }: ExperienceTimelineSectionProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [previewCueIndex, setPreviewCueIndex] = useState<number | null>(null);
  const [settledPreviewIndex, setSettledPreviewIndex] = useState<number | null>(null);
  const hasPreviewedRef = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineItemCount = items.length;
  const timelineYearAnchors = [
    { year: "Now" as const, column: 1 },
    { year: 2025 as const, column: 1.75 },
    { year: 2024, column: 2 },
    { year: 2022, column: 3 },
    { year: 2019, column: 4 },
    { year: 2016, column: 5 },
    { year: 2015 as const, column: 6 },
    { year: 2014, column: 7 },
    { year: 2005 as const, column: 8 },
    { year: 2000 as const, column: 9.4 },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1281px)");
    const updateIsDesktop = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);

    return () => {
      mediaQuery.removeEventListener("change", updateIsDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !sectionRef.current || hasPreviewedRef.current) {
      return;
    }

    let clearId: number | null = null;
    const stepTimeoutIds: number[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasPreviewedRef.current) {
          return;
        }

        hasPreviewedRef.current = true;
        setSettledPreviewIndex(null);
        const orderedIndices = Array.from({ length: timelineItemCount }, (_, index) => index).reverse();
        const stepDurations = orderedIndices.map((_, index) => Math.min(520, 180 + (index * 40)));
        let elapsed = 0;

        setPreviewIndex(orderedIndices[0] ?? null);
        setPreviewCueIndex(orderedIndices[1] ?? null);

        orderedIndices.forEach((itemIndex, sequenceIndex) => {
          if (sequenceIndex === 0) {
            return;
          }

          elapsed += stepDurations[sequenceIndex - 1] ?? 0;
          const timeoutId = window.setTimeout(() => {
            setPreviewIndex(itemIndex);
            setPreviewCueIndex(orderedIndices[sequenceIndex + 1] ?? null);
          }, elapsed);

          stepTimeoutIds.push(timeoutId);
        });

        elapsed += stepDurations[orderedIndices.length - 1] ?? 0;
        clearId = window.setTimeout(() => {
          setPreviewIndex(null);
          setPreviewCueIndex(null);
          setSettledPreviewIndex(0);
        }, elapsed + 900);

        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.3,
      },
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (clearId) {
        window.clearTimeout(clearId);
      }
      stepTimeoutIds.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
    };
  }, [isDesktop, timelineItemCount]);

  if (!isDesktop) {
    return null;
  }

  function clearPreviewState() {
    setPreviewIndex(null);
    setPreviewCueIndex(null);
    setSettledPreviewIndex(null);
  }

  function getTimelineTickPosition(year: TimelineYear) {
    const exactAnchor = timelineYearAnchors.find((anchor) => anchor.year === year);

    if (exactAnchor) {
      return ((exactAnchor.column - 0.5) / timelineItemCount) * 100;
    }

    if (typeof year !== "number") {
      return 0;
    }

    for (let index = 0; index < timelineYearAnchors.length - 1; index += 1) {
      const newer = timelineYearAnchors[index];
      const older = timelineYearAnchors[index + 1];

      if (typeof newer.year !== "number" || typeof older.year !== "number") {
        continue;
      }

      if (year < newer.year && year > older.year) {
        const progress = (newer.year - year) / (newer.year - older.year);
        const interpolatedColumn = newer.column + ((older.column - newer.column) * progress);

        return ((interpolatedColumn - 0.5) / timelineItemCount) * 100;
      }
    }

    return 0;
  }

  function getTimelineTickColumn(year: TimelineYear) {
    return timelineYearAnchors.find((anchor) => anchor.year === year)?.column;
  }

  return (
    <section ref={sectionRef} className="experience-timeline-section">
      <div className="page-container experience-timeline-header">
        <h2 id="career-timeline"><a href="#career-timeline">Career Timeline</a></h2>
      </div>
      <div
        className="experience-timeline-wrap"
        style={
          {
            "--timeline-items": timelineItemCount,
          } as CSSProperties
        }
      >
        <div className="experience-timeline-ruler" aria-hidden="true">
          {timelineTickYears.map((year) => (
            <span
              key={year}
              className={`experience-timeline-ruler-tick${milestoneAlignedTimelineTicks.has(year) ? " is-milestone-aligned" : ""}${year === "Now" ? " is-now" : ""}`}
              style={
                {
                  "--timeline-tick-position": `${getTimelineTickPosition(year)}%`,
                  "--timeline-tick-column": getTimelineTickColumn(year),
                } as CSSProperties
              }
            >
              {year}
            </span>
          ))}
        </div>
        <div className="experience-timeline" aria-label="Career timeline summary">
          {items.map((item, index) => (
            <article
              key={`${item.company}-${item.role}`}
              className={`experience-timeline-item${item.isCurrent ? " is-current" : ""}${previewIndex === index ? " is-preview" : ""}${previewIndex === index && previewCueIndex === null ? " is-preview-final" : ""}${previewCueIndex === index ? " is-preview-cue" : ""}${settledPreviewIndex === index ? " is-preview-settled" : ""}${index % 2 === 0 ? " is-top" : " is-bottom"}`}
              style={{ "--timeline-column": index + 1 } as CSSProperties}
              onMouseEnter={clearPreviewState}
              onFocus={clearPreviewState}
            >
              <div className="experience-timeline-summary">
                <h3 className="experience-timeline-role">{item.role}</h3>
              </div>
              <div className="experience-timeline-detail">
                <p className="experience-timeline-type">{item.type}</p>
                <p className="experience-timeline-company">{item.company}</p>
                <p className="experience-timeline-highlight">{item.highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
