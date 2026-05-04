import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { DEFAULT_ENQUIRY_MESSAGE } from "@/data/travel";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number too long")
    .regex(/^[+()\d\s-]+$/, "Invalid phone number"),
  destination: z.string().trim().min(2).max(80),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

interface Props {
  defaultDestination?: string;
  packageTitle?: string;
}

export function EnquiryForm({ defaultDestination = "", packageTitle }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: defaultDestination,
    message: "",
  });
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof typeof form, v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }

    const intro = packageTitle
      ? `${DEFAULT_ENQUIRY_MESSAGE}\n\n*Package:* ${packageTitle}`
      : `Hello Tripze Travels, I'd like to plan a trip to *${parsed.data.destination}*.`;

    const msg = `${intro}

*Name:* ${parsed.data.name}
*Phone:* ${parsed.data.phone}
*Destination:* ${parsed.data.destination}
${parsed.data.message ? `*Message:* ${parsed.data.message}` : ""}`;

    // ✅ FIXED WhatsApp link (no freeze)
    const url = `https://wa.me/917807804069?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          placeholder="Your name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          maxLength={80}
          required
        />
        <Input
          placeholder="Phone number"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          maxLength={20}
          required
        />
      </div>
      <Input
        placeholder="Destination"
        value={form.destination}
        onChange={(e) => update("destination", e.target.value)}
        maxLength={80}
        required
      />
      <Textarea
        placeholder="Tell us about your trip — dates, travellers, preferences…"
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        maxLength={500}
        rows={4}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-success text-success-foreground hover:bg-success/90 shadow-glow ripple font-semibold"
      >
        <MessageCircle className="size-5" />
        Enquire on WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Submitting opens WhatsApp with your enquiry pre-filled — no spam, ever.
      </p>
    </form>
  );
}