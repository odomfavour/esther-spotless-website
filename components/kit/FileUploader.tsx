"use client";
import { useCallback, useRef, useState } from "react";
import { ImagePlus, UploadCloud, X } from "lucide-react";
import { isVideoUrl } from "@/lib/uploads/media";
import { uploadFile } from "@/lib/uploads/cloudinary";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export interface UploadedFile { id: string; name: string; url: string }

/** Uploads attachments to permanent Cloudinary URLs before adding them to the form. */
export function FileUploader({ value, onChange, max = 6, label, compact, onUploadingChange, hint = "Photos up to 5 MB; MP4, WebM or MOV videos up to 50 MB. Sign in to upload videos." }: {
  value: UploadedFile[]; onChange: (f: UploadedFile[]) => void; max?: number; label?: string; compact?: boolean; hint?: string; onUploadingChange?: (uploading: boolean) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const busy = useRef(false);
  const [uploading, setUploading] = useState(false);
  const [drag, setDrag] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const add = useCallback(async (list: FileList | null) => {
    if (!list || busy.current || input.current?.matches(":disabled")) return;
    busy.current = true;
    setUploading(true);
    onUploadingChange?.(true);
    setError(null);
    const next = [...value];
    try {
      for (const f of Array.from(list)) {
        if (!["image/jpeg", "image/png", "image/webp", "image/gif", "video/mp4", "video/webm", "video/quicktime"].includes(f.type)) { setError("Choose PNG, JPG, WebP, GIF, MP4, WebM or MOV files."); continue; }
        const sizeLimit = f.type.startsWith("video/") ? 50 : 5;
        if (f.size > sizeLimit * 1024 * 1024) { setError(`${f.name} is larger than ${sizeLimit} MB.`); continue; }
        if (next.length >= max) { setError(`You can add up to ${max} attachments.`); break; }
        try { next.push(await uploadFile(f)); }
        catch (error) { setError(error instanceof Error ? error.message : "Upload failed."); }
      }
      onChange(next);
    } finally {
      busy.current = false;
      setUploading(false);
      onUploadingChange?.(false);
    }
  }, [value, max, onChange, onUploadingChange]);

  return (
    <div>
      {label && <Label className="mb-1.5" onClick={() => input.current?.focus()}>{label}</Label>}
      <div
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files); }}
        className={cn("rounded-xl border-2 border-dashed text-center transition-colors", compact ? "p-4" : "p-6 sm:p-8",
          drag ? "border-blue-600 bg-blue-50" : "border-border bg-muted/40/60 hover:border-gray-400")}>
        <input ref={input} type="file" disabled={uploading} accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,video/quicktime" multiple className="sr-only" onChange={(e) => { add(e.target.files); e.target.value = ""; }} aria-label={label ?? "Upload photos or videos"} />
        <div className={cn("mx-auto mb-2 flex items-center justify-center rounded-full bg-white text-primary shadow-sm", compact ? "h-9 w-9" : "h-12 w-12")}>
          <UploadCloud className={compact ? "h-4 w-4" : "h-6 w-6"} />
        </div>
        <p className="text-sm text-foreground/80">
          <span className="hidden sm:inline">Drag photos or videos here, or </span>
          <Button type="button" disabled={uploading} variant="link" className="h-auto p-0" onClick={() => input.current?.click()}>
            <span className="sm:hidden">Choose photos or videos</span><span className="hidden sm:inline">browse your files</span>
          </Button>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      </div>
      {uploading && <p role="status" className="mt-2 text-sm text-muted-foreground">Uploading attachments…</p>}
      {error && <p role="alert" className="mt-2 text-sm text-destructive">{error}</p>}
      {value.length > 0 && (
        <ul className="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
          {value.map((f) => (
            <li key={f.id} className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted">
              {isVideoUrl(f.url) ? <video src={f.url} controls playsInline preload="metadata" aria-label={f.name} className="h-full w-full object-contain" /> : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={f.url} alt={f.name} className="h-full w-full object-cover" />
              )}
              <Button type="button" disabled={uploading} variant="ghost" size="icon" onClick={() => onChange(value.filter((x) => x.id !== f.id))} aria-label={`Remove ${f.name}`}
                className="absolute right-1 top-1 size-7 rounded-full bg-gray-900/70 text-white hover:bg-gray-900 hover:text-white"><X className="size-3.5" /></Button>
            </li>
          ))}
          {value.length < max && (
            <li><Button type="button" disabled={uploading} variant="outline" onClick={() => input.current?.click()} className="aspect-square h-auto w-full border-dashed text-muted-foreground/70 hover:border-blue-500 hover:bg-transparent hover:text-blue-600" aria-label="Add more photos or videos"><ImagePlus className="size-5" /></Button></li>
          )}
        </ul>
      )}
    </div>
  );
}

/** Backward-compatible attachment grid for existing photo URL arrays. */
export function PhotoGrid({ photos, alt = "Attachment" }: { photos: string[]; alt?: string }) {
  if (!photos.length) return <p className="text-sm text-muted-foreground">No photos or videos added.</p>;
  return (
    <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {photos.map((url, index) => (
        <li key={url + index} className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
          {isVideoUrl(url) ? <video src={url} controls playsInline preload="metadata" aria-label={`${alt} video ${index + 1}`} className="h-full w-full object-contain" /> : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={url} alt={`${alt} ${index + 1}`} className="h-full w-full object-cover" />
          )}
        </li>
      ))}
    </ul>
  );
}
