import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { test } from "node:test";
import { signUpload, validateUpload } from "../server/services/cloudinary";

test("upload signature covers the folder and timestamp", () => {
  assert.equal(signUpload({ timestamp: "123", folder: "cleaning-app/images" }, "secret"), createHash("sha1").update("folder=cleaning-app/images&timestamp=123secret").digest("hex"));
});
test("upload validation rejects unsupported and oversized files", () => {
  assert.equal(validateUpload({ type: "image/jpeg", size: 100 }), "image");
  assert.equal(validateUpload({ type: "video/mp4", size: 100 }), "video");
  assert.throws(() => validateUpload({ type: "image/svg+xml", size: 100 }), /PNG/);
  assert.throws(() => validateUpload({ type: "image/png", size: 6 * 1024 * 1024 }), /5 MB/);
  assert.throws(() => validateUpload({ type: "video/mp4", size: 51 * 1024 * 1024 }), /50 MB/);
  assert.throws(() => validateUpload({ type: "image/png", size: 0 }), /empty/);
});
