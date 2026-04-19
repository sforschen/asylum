"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
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
};

type MediaModalContextValue = {
  openMedia: (item: MediaModalItem) => void;
  closeMedia: () => void;
};

const MediaModalContext = createContext<MediaModalContextValue | null>(null);

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

  const closeMedia = useCallback(() => {
    setActiveItem(null);
  }, []);

  const openMedia = useCallback((item: MediaModalItem) => {
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
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
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
                    className={`media-modal-action-link${activeItem.actionLabel.toLowerCase().includes("case study") ? " is-case-study" : ""}`}
                    href={activeItem.actionHref}
                    target={activeItem.actionHref.startsWith("http") ? "_blank" : undefined}
                    rel={activeItem.actionHref.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {activeItem.actionLabel}
                  </a>
                ) : null}
                <a href={activeItem.src} target="_blank" rel="noreferrer">
                  Open in new tab
                </a>
                <button type="button" className="media-modal-close" onClick={closeMedia}>
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
