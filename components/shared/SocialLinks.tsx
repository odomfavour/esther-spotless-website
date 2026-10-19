import { Facebook, Instagram } from "lucide-react";
import { socialLinks } from "@/lib/social-links";

export default function SocialLinks({ className = "flex gap-3", linkClassName }: { className?: string; linkClassName?: string }) {
  return (
    <div className={className}>
      {socialLinks.map(link => (
        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Esther’s Spotless Touch on ${link.name} (opens in a new tab)`} className={linkClassName}>
          {link.name === "Facebook" ? <Facebook className="size-5" aria-hidden="true" /> : link.name === "Instagram" ? <Instagram className="size-5" aria-hidden="true" /> : link.name === "Google" ? (
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.89-1.74 2.98-4.3 2.98-7.36ZM12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22ZM6.41 13.92a6 6 0 0 1 0-3.84V7.49H3.07a10 10 0 0 0 0 9.02l3.34-2.59ZM12 5.96c1.47 0 2.79.51 3.83 1.51l2.87-2.87A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.93 5.49l3.34 2.59A5.99 5.99 0 0 1 12 5.96Z" /></svg>
          ) : (
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3.4v13.2a2.8 2.8 0 1 1-2.4-2.8V9a6.2 6.2 0 1 0 5.8 6.2V8.5a8.1 8.1 0 0 0 4.7 1.5V6.6A4.7 4.7 0 0 1 16.6 2Z" /></svg>
          )}
        </a>
      ))}
    </div>
  );
}
