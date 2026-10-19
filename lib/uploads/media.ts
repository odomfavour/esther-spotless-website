/** Determine the player from the persisted URL, including extensionless Cloudinary videos. */
export function isVideoUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return (url.hostname === "res.cloudinary.com" && url.pathname.includes("/video/upload/")) || /\.(mp4|webm|mov)$/i.test(url.pathname);
  } catch {
    return false;
  }
}
