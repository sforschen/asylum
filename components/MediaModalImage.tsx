"use client";

import type { ReactNode } from "react";
import Image, { type ImageProps } from "next/image";

import { useMediaModal } from "./MediaModalProvider";
import type { MediaType } from "../lib/media";

type Props = Omit<ImageProps, "alt" | "src"> & {
  src: ImageProps["src"];
  alt: string;
  buttonClassName?: string;
  modalSrc?: string;
  modalTitle?: string;
  modalType?: MediaType;
  modalActionHref?: string;
  modalActionLabel?: string;
  modalExperienceHref?: string;
  modalExperienceLabel?: string;
  children?: ReactNode;
};

function resolveImageSrc(src: ImageProps["src"]) {
  if (typeof src === "string") {
    return src;
  }

  return "default" in src ? src.default.src : src.src;
}

export default function MediaModalImage({
  src,
  alt,
  buttonClassName,
  modalSrc,
  modalTitle,
  modalType = "image",
  modalActionHref,
  modalActionLabel,
  modalExperienceHref,
  modalExperienceLabel,
  children,
  ...imageProps
}: Props) {
  const { openMedia } = useMediaModal();
  const resolvedSrc = resolveImageSrc(src);

  return (
    <button
      type="button"
      className={buttonClassName ?? "media-modal-image-button"}
      onClick={() =>
        openMedia({
          src: modalSrc ?? resolvedSrc,
          title: modalTitle ?? alt,
          type: modalType,
          actionHref: modalActionHref,
          actionLabel: modalActionLabel,
          experienceHref: modalExperienceHref,
          experienceLabel: modalExperienceLabel,
        })
      }
      aria-label={`Open ${alt} in a large modal`}
    >
      <Image src={src} alt={alt} {...imageProps} />
      {children}
    </button>
  );
}
