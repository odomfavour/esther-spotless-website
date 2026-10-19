import { getCurrentUser } from "@/lib/auth/session";
import { cloudinaryConfig, signUpload, validateUpload } from "@/server/services/cloudinary";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ message: "Invalid origin." }, { status: 403 });
  try {
    const user = await getCurrentUser();
    if (!user) return Response.json({ message: "Login required." }, { status: 401 });
    const body = await request.json();
    if (typeof body.type !== "string" || typeof body.size !== "number" || !Number.isFinite(body.size) || body.size <= 0) return Response.json({ message: "Invalid file." }, { status: 400 });
    let resourceType: "image" | "video";
    try { resourceType = validateUpload(body); } catch (error) {
      return Response.json({ message: (error as Error).message }, { status: 400 });
    }
    const { cloudName, apiKey, apiSecret } = cloudinaryConfig();
    const params = {
      timestamp: String(Math.floor(Date.now() / 1000)),
      folder: `cleaning-app/${resourceType}s/${user.id}`,
      allowed_formats: resourceType === "image" ? "jpg,jpeg,png,webp,gif" : "mp4,webm,mov",
    };
    return Response.json({ url: `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, apiKey, params, signature: signUpload(params, apiSecret) }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ message: "Unable to prepare upload. Check the server Cloudinary configuration." }, { status: 503 });
  }
}
