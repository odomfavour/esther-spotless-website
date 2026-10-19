export async function uploadFile(file: File, video = file.type.startsWith("video/")): Promise<{ id: string; name: string; url: string }> {
  let response: Response;
  const form = new FormData();
  form.set("file", file);
  if (video) {
    const signed = await fetch("/api/uploads/sign", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: file.type, size: file.size }) });
    const data = await signed.json();
    if (!signed.ok) throw new Error(data.message || "Unable to prepare upload.");
    form.set("api_key", data.apiKey);
    form.set("signature", data.signature);
    for (const [key, value] of Object.entries(data.params)) form.set(key, String(value));
    response = await fetch(data.url, { method: "POST", body: form });
  } else {
    response = await fetch("/api/uploads", { method: "POST", body: form });
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Upload failed. Please try again.");
  const url = video ? data.secure_url : data.url;
  const id = video ? data.public_id : data.id;
  if (!url || !id) throw new Error("Upload did not return a file URL.");
  return { id, url, name: file.name };
}
