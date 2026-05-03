import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Award, Globe, Heart, Users } from "lucide-react";
import bali from "@/assets/hero-bali.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tripze Travels" },
      { name: "description", content: "Tripze Travels is a passionate team of travel experts crafting personalised journeys since 2014. Meet the team behind your next adventure." },
      { property: "og:title", content: "About — Tripze Travels" },
      { property: "og:description", content: "A passionate team of travel experts since 2014." },
      { property: "og:image", content: bali },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { icon: Users, value: "50,000+", label: "Happy travellers" },
  { icon: Globe, value: "120+", label: "Destinations" },
  { icon: Award, value: "11", label: "Years of expertise" },
  { icon: Heart, value: "4.9/5", label: "Avg. rating" },
];

function AboutPage() {
  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={bali} alt="About Tripze Travels" className="absolute inset-0 size-full object-cover animate-ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12 text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our story</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-2">About <span className="text-gradient">Tripze Travels</span></h1>
          <p className="max-w-2xl mt-3 text-lg opacity-90">Travel designers, mountain lovers, beach bums and storytellers — at your service.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Why we exist</span>
          <h2 className="font-display text-4xl font-bold mt-3 mb-6">Travel that feels personal, never packaged.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Tripze Travels was born in the heart of Kullu, Himachal Pradesh — by a team of mountain locals who grew up tracing every hidden valley, frozen pass and monastery trail in the region.
            Today we design unforgettable journeys across India and beyond, one traveller at a time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We don't believe in cookie-cutter itineraries. Every trip we craft is shaped by your pace, taste and budget — combined with our
            decades of insider knowledge from every corner of India and Asia.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-6 text-center shadow-soft hover-lift">
                <div className="mx-auto grid place-items-center size-12 rounded-xl gradient-accent text-accent-foreground mb-3">
                  <s.icon className="size-5" />
                </div>
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            { title: "Personalised", desc: "Every itinerary is hand-crafted around your interests, pace and budget." },
            { title: "Transparent", desc: "Honest pricing — no hidden fees, no last-minute surprises." },
            { title: "Always-on support", desc: "Real humans, on chat or call, 24×7 — wherever in the world you are." },
          ].map((x, i) => (
            <Reveal key={x.title} delay={i * 80}>
              <div className="bg-card rounded-2xl p-7 border border-border shadow-soft h-full">
                <h3 className="font-display text-2xl font-bold">{x.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{x.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
