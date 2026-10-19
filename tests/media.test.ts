import assert from "node:assert/strict";
import { test } from "node:test";
import { isVideoUrl } from "../lib/uploads/media";
import { uploadFile } from "../lib/uploads/cloudinary";

test("saved Cloudinary videos render as videos, including extensionless URLs", () => {
  assert.equal(isVideoUrl("https://res.cloudinary.com/example/video/upload/v1/report"), true);
  assert.equal(isVideoUrl("https://res.cloudinary.com/example/video/upload/v1/report.mp4"), true);
  assert.equal(isVideoUrl("https://res.cloudinary.com/example/image/upload/v1/room.jpg"), false);
  assert.equal(isVideoUrl("https://example.com/clip.webm?version=1"), true);
  assert.equal(isVideoUrl("invalid"), false);
});

test("video uploads automatically use a signed direct Cloudinary upload", async () => {
  const original = globalThis.fetch;
  const calls: string[] = [];
  globalThis.fetch = async (url, options) => {
    calls.push(String(url));
    if (url === "/api/uploads/sign") return Response.json({ url: "https://api.cloudinary.com/v1_1/demo/video/upload", apiKey: "public-key", signature: "signed", params: { timestamp: "123" } });
    const form = options?.body as FormData;
    assert.equal(form.get("signature"), "signed");
    return Response.json({ public_id: "clip", secure_url: "https://res.cloudinary.com/demo/video/upload/clip.mp4" });
  };
  try {
    const file = Object.assign(new Blob(["video"], { type: "video/mp4" }), { name: "clip.mp4" }) as File;
    const result = await uploadFile(file);
    assert.deepEqual(calls, ["/api/uploads/sign", "https://api.cloudinary.com/v1_1/demo/video/upload"]);
    assert.equal(result.url, "https://res.cloudinary.com/demo/video/upload/clip.mp4");
    assert.equal(result.name, "clip.mp4");
  } finally { globalThis.fetch = original; }
});

test("signed upload refusal is shown without attempting a Cloudinary upload", async () => {
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return Response.json({ message: "Login required." }, { status: 401 });
  };
  try {
    const file = Object.assign(new Blob(["video"], { type: "video/mp4" }), { name: "clip.mp4" }) as File;
    await assert.rejects(uploadFile(file), /Login required/);
    assert.equal(calls, 1);
  } finally { globalThis.fetch = original; }
});

test("photos retain the guest-compatible photo upload endpoint", async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async (url) => {
    assert.equal(url, "/api/uploads");
    return Response.json({ id: "photo", url: "https://res.cloudinary.com/demo/image/upload/photo.png" });
  };
  try {
    const file = Object.assign(new Blob(["photo"], { type: "image/png" }), { name: "room.png" }) as File;
    assert.equal((await uploadFile(file)).id, "photo");
  } finally { globalThis.fetch = original; }
});
