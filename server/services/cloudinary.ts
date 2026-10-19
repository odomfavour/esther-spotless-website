import { createHash } from "node:crypto";

export function signUpload(params: Record<string, string>, secret: string) {
  return createHash("sha1").update(Object.keys(params).sort().map((key) => `${key}=${params[key]}`).join("&") + secret).digest("hex");
}

export function cloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME?.trim();
  const apiKey = process.env.CLOUDINARY_API_KEY?.trim();
  const apiSecret = process.env.CLOUDINARY_API_SECRET?.trim();
  if (!cloudName || !apiKey || !apiSecret) throw new Error("Cloudinary uploads are not configured.");
  return { cloudName, apiKey, apiSecret };
}

export function validateUpload(file: { type: string; size: number }) {
  if (!file.size) throw new Error("The file is empty.");
  const image = ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type);
  const video = ["video/mp4", "video/webm", "video/quicktime"].includes(file.type);
  if (!image && !video) throw new Error("Choose PNG, JPG, WebP, GIF, MP4, WebM or MOV files.");
  if (file.size > (image ? 5 : 50) * 1024 * 1024) throw new Error(`Files must be ${image ? 5 : 50} MB or smaller.`);
  return image ? "image" : "video";
}
