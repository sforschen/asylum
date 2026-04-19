export type MediaType = "image" | "pdf";

const imageExtensions = [".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"];

function normalizeUrl(url: string) {
  return url.split("#")[0]?.split("?")[0] ?? url;
}

export function getMediaTypeFromUrl(url: string): MediaType | null {
  const normalizedUrl = normalizeUrl(url).toLowerCase();

  if (normalizedUrl.endsWith(".pdf")) {
    return "pdf";
  }

  if (imageExtensions.some((extension) => normalizedUrl.endsWith(extension))) {
    return "image";
  }

  return null;
}
