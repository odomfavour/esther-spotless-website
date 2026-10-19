import { cloudinaryConfig, signUpload, validateUpload } from "@/server/services/cloudinary";

export const runtime = "nodejs";

// Guest requests can attach photos without creating an account. Videos use the authenticated signing route.
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ message: "Invalid origin." }, { status: 403 });
  if (Number(request.headers.get("content-length")) > 5 * 1024 * 1024 + 65536) return Response.json({ message: "Photos must be 5 MB or smaller." }, { status: 413 });
  try {
    const data = await request.formData();
    const file = data.get("file");
    if (!file || typeof file === "string") return Response.json({ message: "Choose a photo." }, { status: 400 });
    try {
      if (validateUpload(file) !== "image") return Response.json({ message: "Only photos are allowed here." }, { status: 400 });
    } catch (error) { return Response.json({ message: (error as Error).message }, { status: 400 }); }
    const { cloudName, apiKey, apiSecret } = cloudinaryConfig();
    const params = { timestamp: String(Math.floor(Date.now() / 1000)), folder: "cleaning-app/requests", allowed_formats: "jpg,jpeg,png,webp,gif" };
    const form = new FormData();
    form.set("file", file);
    form.set("api_key", apiKey);
    for (const [key, value] of Object.entries(params)) form.set(key, value);
    form.set("signature", signUpload(params, apiSecret));
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: "POST", body: form, signal: AbortSignal.timeout(60000) });
    const result = await response.json();
    if (!response.ok || !result.secure_url || !result.public_id) return Response.json({ message: "Photo upload failed. Please try again." }, { status: 502 });
    return Response.json({ id: result.public_id, url: result.secure_url, name: file.name });
  } catch {
    return Response.json({ message: "Unable to upload. Check your connection and the server Cloudinary configuration." }, { status: 503 });
  }
}
