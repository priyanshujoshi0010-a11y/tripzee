import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Check, Clock, MapPin, Star } from "lucide-react";
import { findDestination, formatINR, packagesByDestination } from "@/data/travel";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const dest = findDestination(params.slug);
    if (!dest) throw notFound();
    return { dest, packages: packagesByDestination(params.slug) };
  },
  head: ({ loaderData }) => {
    const dest = loaderData?.dest;
    if (!dest) return { meta: [{ title: "Destination not found" }] };
    return {
      meta: [
        { title: `${dest.name} Tour Packages — Tripze Travels` },
        { name: "description", content: `${dest.tagline}. ${dest.description}` },
        { property: "og:title", content: `${dest.name} — ${dest.tagline}` },
        { property: "og:description", content: dest.description },
        { property: "og:image", content: dest.image },
        { name: "twitter:image", content: dest.image },
      ],
    };
  },
  component: DestinationDetail,
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Destination not found</h1>
        <Link to="/destinations" className="text-primary underline mt-4 inline-block">Back to destinations</Link>
      </div>
    </Layout>
  ),
});

function DestinationDetail() {
  const { dest, packages } = Route.useLoaderData();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={dest.image} alt={dest.name} className="absolute inset-0 size-full object-cover animate-ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-14 text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">{dest.tagline}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mt-2">
            {dest.emoji} {dest.name}
          </h1>
          <p className="max-w-2xl mt-4 text-lg opacity-90">{dest.description}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="glass-dark px-4 py-2 rounded-full text-sm flex items-center gap-2"><Calendar className="size-4 text-accent" /> Best time: {dest.bestTime}</span>
            <span className="glass-dark px-4 py-2 rounded-full text-sm flex items-center gap-2"><MapPin className="size-4 text-accent" /> from ₹{formatINR(dest.startingPrice)}</span>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Highlights of {dest.name}</h2>
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {dest.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/60 border border-border">
                    <span className="grid place-items-center size-8 rounded-lg gradient-accent text-accent-foreground shrink-0">
                      <Check className="size-4" />
                    </span>
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Packages for {dest.name}</h2>
              {packages.length === 0 ? (
                <p className="text-muted-foreground">More packages coming soon. Send us an enquiry to plan a custom trip!</p>
              ) : (
                <div className="grid gap-5 md:grid-cols-2">
                  {packages.map((p) => (
                    <article key={p.slug} className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift">
                      <Link to="/package/$id" params={{ id: p.slug }} className="block hover-zoom-img aspect-[16/10] relative">
                        <img src={p.image} alt={p.title} loading="lazy" width={1024} height={640} className="absolute inset-0 size-full object-cover" />
                      </Link>
                      <div className="p-5">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" /> {p.duration}</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                            <Star className="size-3.5 fill-accent text-accent" /> {p.rating}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-bold mt-1">{p.title}</h3>
                        <div className="flex items-end justify-between mt-4">
                          <span className="font-display text-xl font-bold text-primary">₹{formatINR(p.price)}</span>
                          <Button asChild size="sm" className="gradient-primary text-primary-foreground ripple">
                            <Link to="/package/$id" params={{ id: p.slug }}>View <ArrowRight className="size-3" /></Link>
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </Reveal>
          </div>

          {/* Enquiry sidebar */}
          <aside>
            <Reveal>
              <div className="sticky top-28 bg-card border border-border rounded-2xl shadow-card p-6">
                <h3 className="font-display text-2xl font-bold">Plan your {dest.name} trip</h3>
                <p className="text-sm text-muted-foreground mt-1">Tell us your preferences — we'll craft a custom itinerary.</p>
                <div className="mt-5">
                  <EnquiryForm defaultDestination={dest.name} />
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
