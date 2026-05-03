import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { CONTACT_EMAIL, PHONE_NUMBER, PHONE_NUMBER_ALT, OFFICE_ADDRESS } from "@/data/travel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Tripze Travels" },
      { name: "description", content: "Get in touch with Tripze Travels in Kullu, Himachal Pradesh to plan your next trip. Call, email or WhatsApp our travel experts — we reply within 30 minutes." },
      { property: "og:title", content: "Contact Tripze Travels" },
      { property: "og:description", content: "Plan your trip with our travel experts in Kullu, Himachal." },
    ],
  }),
  component: ContactPage,
});

const INFO = [
  { icon: Phone, title: "Call us", value: PHONE_NUMBER, href: `tel:${PHONE_NUMBER}` },
  { icon: Phone, title: "Alternate", value: PHONE_NUMBER_ALT, href: `tel:${PHONE_NUMBER_ALT}` },
  { icon: Mail, title: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: MapPin, title: "Office", value: OFFICE_ADDRESS, href: "#" },
  { icon: Clock, title: "Hours", value: "Mon – Sat, 9 AM – 9 PM IST", href: "#" },
];

function ContactPage() {
  return (
    <Layout>
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(800px 400px at 50% 0%, var(--accent), transparent)" }} />
        <div className="container mx-auto px-4 relative text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Get in touch</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">Let's plan your <span className="text-gradient">next trip</span></h1>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">A travel expert will reach out within 30 minutes — promise.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {INFO.map((i) => (
              <a
                key={i.title}
                href={i.href}
                className="bg-card border border-border rounded-2xl p-5 shadow-soft hover-lift block"
              >
                <span className="grid place-items-center size-10 rounded-lg gradient-accent text-accent-foreground mb-3">
                  <i.icon className="size-5" />
                </span>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.title}</p>
                <p className="font-semibold mt-1">{i.value}</p>
              </a>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3]">
            <iframe
              title="Office location — Kullu, Himachal Pradesh"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.0900%2C31.9500%2C77.1400%2C31.9900&layer=mapnik&marker=31.9700,77.1100"
              className="size-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-card border border-border rounded-2xl shadow-card p-6 md:p-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Request a callback</h2>
            <p className="text-sm text-muted-foreground mt-1">Fill in your details and we'll WhatsApp you a tailored quote.</p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
