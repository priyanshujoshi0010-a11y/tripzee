import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Calendar, Check, MapPin } from "lucide-react";
import { findDestination, formatINR, packagesByDestination } from "@/data/travel";

function DestinationError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Destination could not load</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </Layout>
  );
}

export const Route = createFileRoute("/destination/$id")({
  loader: ({ params }) => {
    const dest = findDestination(params.id);
    if (!dest) throw notFound();
    return { dest, packages: packagesByDestination(params.id) };
  },
  head: ({ loaderData }) => {
    const dest = loaderData?.dest;
    if (!dest) return { meta: [{ title: "Destination not found" }] };
    return {
      meta: [
        { title: `${dest.name} Packages — Tripze Travels` },
        { name: "description", content: `Explore ${dest.name} tour packages with day-wise itineraries, pricing and inclusions from Tripze Travels.` },
        { property: "og:title", content: `${dest.name} Tour Packages` },
        { property: "og:description", content: dest.description },
        { property: "og:image", content: dest.image },
        { name: "twitter:image", content: dest.image },
      ],
    };
  },
  component: DestinationPackagesPage,
  errorComponent: DestinationError,
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Destination not found</h1>
        <Link to="/destinations" className="text-primary underline mt-4 inline-block">Back to destinations</Link>
      </div>
    </Layout>
  ),
});

function DestinationPackagesPage() {
  const { dest, packages } = Route.useLoaderData();

  return (
    <Layout>
      <section className="relative h-[58vh] min-h-[420px] overflow-hidden">
        <img src={dest.image} alt={dest.name} className="absolute inset-0 size-full object-cover animate-ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-14 text-primary-foreground">
          <Link to="/destinations" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition">← All destinations</Link>
          <span className="mt-4 text-xs uppercase tracking-[0.3em] text-accent font-semibold">{dest.tagline}</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mt-2">{dest.emoji} {dest.name} Packages</h1>
          <p className="max-w-2xl mt-4 text-lg opacity-90">{dest.description}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="glass-dark px-4 py-2 rounded-full text-sm flex items-center gap-2"><Calendar className="size-4 text-accent" /> Best time: {dest.bestTime}</span>
            <span className="glass-dark px-4 py-2 rounded-full text-sm flex items-center gap-2"><MapPin className="size-4 text-accent" /> from ₹{formatINR(dest.startingPrice)}</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Highlights of {dest.name}</h2>
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {dest.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/60 border border-border">
                    <span className="grid place-items-center size-8 rounded-lg gradient-accent text-accent-foreground shrink-0"><Check className="size-4" /></span>
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Available Trips</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Packages for {dest.name}</h2>
                </div>
                <span className="text-sm font-semibold text-primary">{packages.length} packages found</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {packages.map((pkg, idx) => (
                  <Reveal key={pkg.slug} delay={idx * 70}>
                    <PackageCard pkg={pkg} />
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>

          <aside>
            <Reveal>
              <div className="sticky top-28 bg-card border border-border rounded-2xl shadow-card p-6">
                <h3 className="font-display text-2xl font-bold">Plan your {dest.name} trip</h3>
                <p className="text-sm text-muted-foreground mt-1">Tell us your preferences — we'll craft a custom itinerary.</p>
                <div className="mt-5"><EnquiryForm defaultDestination={dest.name} /></div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </Layout>
  );
}