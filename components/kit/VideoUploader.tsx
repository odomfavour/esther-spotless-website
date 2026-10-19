"use client";

import { useState } from "react";
import { uploadFile } from "@/lib/uploads/cloudinary";

export function VideoUploader() {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  return <div className="space-y-3">
    <label className="block text-sm font-medium" htmlFor="website-video">Upload a video</label>
    <input id="website-video" type="file" accept="video/mp4,video/webm,video/quicktime" disabled={uploading} onChange={async (event) => {
      const file = event.target.files?.[0];
      event.target.value = "";
      if (!file) return;
      if (file.size > 50 * 1024 * 1024) { setError("Videos must be 50 MB or smaller."); return; }
      setUploading(true);
      setError("");
      try { setUrl((await uploadFile(file, true)).url); }
      catch (error) { setError(error instanceof Error ? error.message : "Video upload failed."); }
      finally { setUploading(false); }
    }} />
    <p className="text-xs text-muted-foreground">MP4, WebM or MOV, up to 50 MB.</p>
    {uploading && <p role="status">Uploading video…</p>}
    {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
    {url && <>
      <video src={url} controls playsInline className="w-full rounded-lg" />
      <label className="block text-sm" htmlFor="uploaded-video-url">Uploaded video URL</label>
      <input id="uploaded-video-url" readOnly value={url} onFocus={(event) => event.target.select()} className="w-full rounded border p-2 text-sm" />
      <p className="text-sm text-muted-foreground">Copy this URL into NEXT_PUBLIC_CLOUDINARY_VIDEO_URL in your environment configuration, then rebuild the site to use it in the video section.</p>
    </>}
  </div>;
}
