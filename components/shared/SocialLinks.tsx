import { Facebook, Instagram } from "lucide-react";
import { socialLinks } from "@/lib/social-links";

export default function SocialLinks({ className = "flex gap-3", linkClassName }: { className?: string; linkClassName?: string }) {
  return (
    <div className={className}>
      {socialLinks.map(link => (
        <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Esther’s Spotless Touch on ${link.name} (opens in a new tab)`} className={linkClassName}>
          {link.name === "Facebook" ? <Facebook className="size-5" aria-hidden="true" /> : link.name === "Instagram" ? <Instagram className="size-5" aria-hidden="true" /> : (
            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3.4v13.2a2.8 2.8 0 1 1-2.4-2.8V9a6.2 6.2 0 1 0 5.8 6.2V8.5a8.1 8.1 0 0 0 4.7 1.5V6.6A4.7 4.7 0 0 1 16.6 2Z" /></svg>
          )}
        </a>
      ))}
    </div>
  );
}
