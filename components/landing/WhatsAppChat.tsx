import { MessageCircle } from "lucide-react";
import { org } from "@/lib/config";

const enquiry = "Hello Esther’s Spotless Touch! I’d like to enquire about your cleaning services.";

export default function WhatsAppChat() {
  const chatUrl = `${org.whatsappUrl}?text=${encodeURIComponent(enquiry)}`;

  return (
    <a
      href={chatUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Esther’s Spotless Touch on WhatsApp (opens in a new tab)"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#007486] px-4 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/30 transition-colors hover:bg-[#005c6b] sm:bottom-8 sm:right-8 sm:px-5"
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
