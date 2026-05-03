import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AlertCircle, Calendar, Check, Clock, CreditCard, Hotel, MessageCircle, Star, X } from "lucide-react";
import {
  buildWhatsAppLink,
  DEFAULT_ENQUIRY_MESSAGE,
  DEFAULT_POLICIES,
  findDestination,
  findPackage,
  formatINR,
} from "@/data/travel";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = findPackage(params.slug);
    if (!pkg) throw notFound();
    const dest = findDestination(pkg.destinationSlug);
    return { pkg, dest };
  },
  head: ({ loaderData }) => {
    const pkg = loaderData?.pkg;
    if (!pkg) return { meta: [{ title: "Package not found" }] };
    return {
      meta: [
        { title: `${pkg.title} — ${pkg.duration} | Tripze Travels` },
        { name: "description", content: pkg.summary },
        { property: "og:title", content: pkg.title },
        { property: "og:description", content: pkg.summary },
        { property: "og:image", content: pkg.image },
        { name: "twitter:image", content: pkg.image },
      ],
    };
  },
  component: PackageDetail,
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Package not found</h1>
        <Link to="/packages" className="text-primary underline mt-4 inline-block">Back to packages</Link>
      </div>
    </Layout>
  ),
});

function PackageDetail() {
  const { pkg, dest } = Route.useLoaderData();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="absolute inset-0 size-full object-cover animate-ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12 text-primary-foreground">
          {dest && (
            <Link to="/destinations/$slug" params={{ slug: dest.slug }} className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition">
              ← {dest.emoji} {dest.name}
            </Link>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-2 max-w-3xl">{pkg.title}</h1>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <span className="glass-dark px-4 py-2 rounded-full text-sm flex items-center gap-2"><Clock className="size-4 text-accent" /> {pkg.duration}</span>
            <span className="glass-dark px-4 py-2 rounded-full text-sm flex items-center gap-2"><Star className="size-4 fill-accent text-accent" /> {pkg.rating} ({pkg.reviews} reviews)</span>
            <span className="glass-dark px-4 py-2 rounded-full text-sm flex items-center gap-2"><Calendar className="size-4 text-accent" /> {pkg.days} days, {pkg.nights} nights</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <Reveal>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full grid grid-cols-3 h-auto p-1.5 bg-muted rounded-xl">
                  <TabsTrigger
                    value="overview"
                    className="rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-soft"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="itinerary"
                    className="rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-soft"
                  >
                    Itinerary
                  </TabsTrigger>
                  <TabsTrigger
                    value="policies"
                    className="rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-soft"
                  >
                    Policies
                  </TabsTrigger>
                </TabsList>

                {/* OVERVIEW */}
                <TabsContent value="overview" className="mt-8 space-y-10 animate-fade-in">
                  <div>
                    <h2 className="font-display text-3xl font-bold mb-3">Trip Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{pkg.summary}</p>
                  </div>

                  {/* Quick facts */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-5 bg-card border border-border rounded-xl shadow-soft">
                      <Clock className="size-6 text-accent" />
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground mt-3">Duration</span>
                      <p className="font-display text-lg font-semibold mt-0.5">{pkg.duration}</p>
                    </div>
                    <div className="p-5 bg-card border border-border rounded-xl shadow-soft">
                      <Hotel className="size-6 text-accent" />
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground mt-3">Stays</span>
                      <p className="font-display text-lg font-semibold mt-0.5">{pkg.hotels.length} handpicked hotels</p>
                    </div>
                    <div className="p-5 bg-card border border-border rounded-xl shadow-soft">
                      <Star className="size-6 text-accent fill-accent" />
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground mt-3">Rating</span>
                      <p className="font-display text-lg font-semibold mt-0.5">{pkg.rating} / 5 · {pkg.reviews} reviews</p>
                    </div>
                  </div>

                  {/* Inclusions / Exclusions */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                      <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="grid place-items-center size-8 rounded-lg bg-success text-success-foreground"><Check className="size-4" /></span>
                        Inclusions
                      </h3>
                      <ul className="space-y-3">
                        {pkg.inclusions.map((i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <Check className="size-4 text-success mt-0.5 shrink-0" /> <span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                      <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="grid place-items-center size-8 rounded-lg bg-destructive text-destructive-foreground"><X className="size-4" /></span>
                        Exclusions
                      </h3>
                      <ul className="space-y-3">
                        {pkg.exclusions.map((i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <X className="size-4 text-destructive mt-0.5 shrink-0" /> <span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hotels */}
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-5 flex items-center gap-2">
                      <Hotel className="size-6 text-accent" /> Where you'll stay
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {pkg.hotels.map((h) => (
                        <div key={h.city} className="p-5 bg-card border border-border rounded-xl shadow-soft">
                          <span className="text-xs uppercase tracking-wider text-accent font-semibold">{h.city}</span>
                          <p className="font-display text-lg font-semibold mt-1">{h.name}</p>
                          <p className="text-sm text-muted-foreground">{h.category}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* ITINERARY */}
                <TabsContent value="itinerary" className="mt-8 animate-fade-in">
                  <h2 className="font-display text-3xl font-bold mb-2">Day-wise Itinerary</h2>
                  <p className="text-muted-foreground mb-6">A clear, day-by-day plan of your {pkg.duration} journey.</p>
                  <Accordion type="single" collapsible defaultValue={pkg.itinerary[0]?.day} className="space-y-3">
                    {pkg.itinerary.map((d, idx) => (
                      <AccordionItem
                        key={d.day}
                        value={d.day}
                        className="border border-border rounded-xl px-5 bg-card shadow-soft"
                      >
                        <AccordionTrigger className="py-5 hover:no-underline">
                          <div className="flex items-center gap-4 text-left">
                            <span className="grid place-items-center size-10 rounded-lg gradient-primary text-primary-foreground font-bold shrink-0">
                              {idx + 1}
                            </span>
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-accent font-semibold">{d.day}</span>
                              <span className="font-display text-lg font-semibold">{d.title}</span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pl-14">
                          {d.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                {/* POLICIES */}
                <TabsContent value="policies" className="mt-8 space-y-6 animate-fade-in">
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                    <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="grid place-items-center size-8 rounded-lg bg-accent text-accent-foreground"><AlertCircle className="size-4" /></span>
                      Important Notes
                    </h3>
                    <ul className="space-y-3">
                      {DEFAULT_POLICIES.importantNotes.map((n) => (
                        <li key={n} className="flex items-start gap-3 text-sm leading-relaxed">
                          <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                    <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="grid place-items-center size-8 rounded-lg bg-destructive text-destructive-foreground"><X className="size-4" /></span>
                      Cancellation Policy
                    </h3>
                    <ul className="space-y-3">
                      {DEFAULT_POLICIES.cancellation.map((n) => (
                        <li key={n} className="flex items-start gap-3 text-sm leading-relaxed">
                          <span className="size-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                    <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="grid place-items-center size-8 rounded-lg bg-success text-success-foreground"><CreditCard className="size-4" /></span>
                      Payment Terms
                    </h3>
                    <ul className="space-y-3">
                      {DEFAULT_POLICIES.payment.map((n) => (
                        <li key={n} className="flex items-start gap-3 text-sm leading-relaxed">
                          <span className="size-1.5 rounded-full bg-success mt-2 shrink-0" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-28 space-y-5">
              <Reveal>
                <div className="bg-card border border-border rounded-2xl shadow-card p-6">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Price per person</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display text-4xl font-bold text-primary">₹{formatINR(pkg.price)}</span>
                    {pkg.oldPrice && (
                      <span className="text-lg text-muted-foreground line-through">₹{formatINR(pkg.oldPrice)}</span>
                    )}
                  </div>
                  {pkg.oldPrice && (
                    <span className="inline-block mt-2 text-xs font-bold text-success">
                      You save ₹{formatINR(pkg.oldPrice - pkg.price)}
                    </span>
                  )}
                  <Button
                    asChild
                    size="lg"
                    className="w-full mt-5 bg-success text-success-foreground hover:bg-success/90 shadow-glow ripple font-semibold"
                  >
                    <a
                      href={buildWhatsAppLink(`${DEFAULT_ENQUIRY_MESSAGE}\n\n*Package:* ${pkg.title}\n*Duration:* ${pkg.duration}\n*Price:* ₹${formatINR(pkg.price)}/person`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-5" /> Enquire on WhatsApp
                    </a>
                  </Button>
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-card border border-border rounded-2xl shadow-card p-6">
                  <h3 className="font-display text-xl font-bold">Send an enquiry</h3>
                  <p className="text-sm text-muted-foreground mt-1">We'll get back within 30 minutes.</p>
                  <div className="mt-4">
                    <EnquiryForm defaultDestination={dest?.name ?? ""} packageTitle={pkg.title} />
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
