import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { destinations, packages, packagesByDestination } from "@/data/travel";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Tripze Travels" },
      { name: "description", content: "Browse all curated tour packages — Kashmir, Kerala, Rajasthan, Bali and more, with day-wise itineraries and transparent pricing." },
      { property: "og:title", content: "Tour Packages — Tripze Travels" },
      { property: "og:description", content: "Curated packages with transparent pricing." },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <Layout>
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(800px 400px at 80% 50%, var(--accent), transparent)" }} />
        <div className="container mx-auto px-4 relative text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Curated</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-3">
            All <span className="text-gradient">Packages</span>
          </h1>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Day-wise itineraries, handpicked stays, and transparent pricing. Pick a package, customise it, go.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <Reveal className="mb-10">
          <div className="flex flex-wrap gap-3">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                to="/destination/$id"
                params={{ id: destination.slug }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft hover:border-primary hover:text-primary transition-smooth"
              >
                {destination.emoji} {destination.name}
                <span className="text-xs text-muted-foreground">{packagesByDestination(destination.slug).length}</span>
                <ArrowRight className="size-3.5" />
              </Link>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 60}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
