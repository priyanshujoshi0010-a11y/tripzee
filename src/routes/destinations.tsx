import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { destinations, formatINR, packagesByDestination } from "@/data/travel";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Tripze Travels" },
      { name: "description", content: "Browse 8 handpicked travel destinations across India and beyond — Kashmir, Kerala, Bali and more." },
      { property: "og:title", content: "Destinations — Tripze Travels" },
      { property: "og:description", content: "Browse 8 handpicked travel destinations." },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <Layout>
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(800px 400px at 20% 50%, var(--accent), transparent)" }} />
        <div className="container mx-auto px-4 relative text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Discover</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">
            All <span className="text-gradient">Destinations</span>
          </h1>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            From Himalayan snow to tropical sands — eight unforgettable destinations, infinite possibilities.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {destinations.map((d, idx) => {
            const count = packagesByDestination(d.slug).length;
            return (
              <Reveal key={d.slug} delay={idx * 60}>
                <Link
                  to="/destination/$id"
                  params={{ id: d.slug }}
                  className="group grid sm:grid-cols-2 rounded-3xl overflow-hidden bg-card shadow-card hover-lift"
                >
                  <div className="relative hover-zoom-img aspect-[4/3] sm:aspect-auto">
                    <img src={d.image} alt={d.name} loading="lazy" width={800} height={600} className="absolute inset-0 size-full object-cover" />
                    <div className="absolute top-4 left-4 glass-dark text-primary-foreground text-xs px-3 py-1.5 rounded-full font-semibold">
                      {count} packages
                    </div>
                  </div>
                  <div className="p-7 flex flex-col">
                    <div className="text-3xl mb-2">{d.emoji}</div>
                    <h3 className="font-display text-3xl font-bold">{d.name}</h3>
                    <p className="text-accent font-semibold text-sm mt-1">{d.tagline}</p>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{d.description}</p>
                    <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="size-4 text-accent" /> {d.bestTime}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="size-4 text-accent" /> from ₹{formatINR(d.startingPrice)}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 mt-5 font-semibold text-primary group-hover:text-accent transition-colors">
                      Explore packages <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
