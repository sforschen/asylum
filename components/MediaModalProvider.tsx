"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";

import type { MediaType } from "../lib/media";

type MediaModalItem = {
  src: string;
  title?: string;
  type: MediaType;
  actionHref?: string;
  actionLabel?: string;
  experienceHref?: string;
  experienceLabel?: string;
};

type MediaModalContextValue = {
  openMedia: (item: MediaModalItem) => void;
  closeMedia: () => void;
};

const MediaModalContext = createContext<MediaModalContextValue | null>(null);

function getModalActionClassName(href: string, label: string) {
  const actionClassNames = ["media-modal-action-link"];

  if (label.toLowerCase().includes("case study")) {
    actionClassNames.push("is-case-study");
  }

  if (href.startsWith("/experience")) {
    actionClassNames.push("is-experience");
  }

  return actionClassNames.join(" ");
}

export function useMediaModal() {
  const context = useContext(MediaModalContext);

  if (!context) {
    throw new Error("useMediaModal must be used within MediaModalProvider");
  }

  return context;
}

export default function MediaModalProvider({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState<MediaModalItem | null>(null);
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const closeMedia = useCallback(() => {
    setActiveItem(null);
    window.requestAnimationFrame(() => {
      previouslyFocusedElementRef.current?.focus();
      previouslyFocusedElementRef.current = null;
    });
  }, []);

  const openMedia = useCallback((item: MediaModalItem) => {
    const activeElement = document.activeElement;

    previouslyFocusedElementRef.current = activeElement instanceof HTMLElement ? activeElement : null;
    setActiveItem(item);
  }, []);

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMedia();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;

      if (!dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);

      if (!focusableElements.length) {
        event.preventDefault();
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const frame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, closeMedia]);

  const value = useMemo(
    () => ({
      openMedia,
      closeMedia,
    }),
    [closeMedia, openMedia],
  );

  return (
    <MediaModalContext.Provider value={value}>
      {children}

      {activeItem ? (
        <div className="media-modal-backdrop" onClick={closeMedia}>
          <div
            ref={dialogRef}
            className="media-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="media-modal-toolbar">
              <p id={titleId} className="media-modal-title">
                {activeItem.title ?? (activeItem.type === "pdf" ? "Document preview" : "Image preview")}
              </p>
              <div className="media-modal-actions">
                {activeItem.actionHref && activeItem.actionLabel ? (
                  <a
                    className={getModalActionClassName(activeItem.actionHref, activeItem.actionLabel)}
                    href={activeItem.actionHref}
                    target={activeItem.actionHref.startsWith("http") ? "_blank" : undefined}
                    rel={activeItem.actionHref.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {activeItem.actionLabel}
                  </a>
                ) : null}
                {activeItem.experienceHref && activeItem.experienceLabel ? (
                  <a
                    className={getModalActionClassName(activeItem.experienceHref, activeItem.experienceLabel)}
                    href={activeItem.experienceHref}
                  >
                    {activeItem.experienceLabel}
                  </a>
                ) : null}
                <a href={activeItem.src} target="_blank" rel="noreferrer">
                  Open in new tab
                </a>
                <button ref={closeButtonRef} type="button" className="media-modal-close" onClick={closeMedia}>
                  Close
                </button>
              </div>
            </div>

            <div className={`media-modal-content media-modal-content-${activeItem.type}`}>
              {activeItem.type === "pdf" ? (
                <iframe src={activeItem.src} title={activeItem.title ?? "Document preview"} />
              ) : (
                <Image
                  src={activeItem.src}
                  alt={activeItem.title ?? ""}
                  fill
                  unoptimized
                  sizes="100vw"
                />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </MediaModalContext.Provider>
  );
}
