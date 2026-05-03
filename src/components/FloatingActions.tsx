import { Phone, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, buildWhatsAppLink, DEFAULT_ENQUIRY_MESSAGE } from "@/data/travel";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={buildWhatsAppLink(DEFAULT_ENQUIRY_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid place-items-center size-14 rounded-full bg-success text-success-foreground shadow-elegant hover:scale-110 transition-bounce animate-pulse-glow"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call us"
        className="grid place-items-center size-14 rounded-full gradient-primary text-primary-foreground shadow-elegant hover:scale-110 transition-bounce"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
