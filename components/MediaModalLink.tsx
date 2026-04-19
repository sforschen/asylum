"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { useMediaModal } from "./MediaModalProvider";
import { getMediaTypeFromUrl, type MediaType } from "../lib/media";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  mediaType?: MediaType;
  modalTitle?: string;
};

export default function MediaModalLink({
  href,
  children,
  mediaType,
  modalTitle,
  onClick,
  ...anchorProps
}: Props) {
  const { openMedia } = useMediaModal();
  const resolvedType = mediaType ?? getMediaTypeFromUrl(href);

  return (
    <a
      {...anchorProps}
      href={href}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented || !resolvedType) {
          return;
        }

        event.preventDefault();
        openMedia({
          src: href,
          title: modalTitle,
          type: resolvedType,
        });
      }}
    >
      {children}
    </a>
  );
}
