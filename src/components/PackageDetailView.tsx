import { Link } from "@tanstack/react-router";
import { AlertCircle, Calendar, Check, Clock, CreditCard, Hotel, MessageCircle, Star, X } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buildWhatsAppLink, DEFAULT_ENQUIRY_MESSAGE, DEFAULT_POLICIES, formatINR, type Destination, type Package as TravelPackage } from "@/data/travel";

export function PackageDetailView({ pkg, dest }: { pkg: TravelPackage; dest?: Destination }) {
  return (
    <>
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="absolute inset-0 size-full object-cover animate-ken-burns" width={1920} height={1080} />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12 text-primary-foreground">
          {dest && (
            <Link to="/destination/$id" params={{ id: dest.slug }} className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition">
              ← {dest.emoji} {dest.name} packages
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
                  <TabsTrigger value="overview" className="rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-soft">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary" className="rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-soft">Itinerary</TabsTrigger>
                  <TabsTrigger value="policies" className="rounded-lg py-2.5 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-soft">Policies</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8 space-y-10 animate-fade-in">
                  <div>
                    <h2 className="font-display text-3xl font-bold mb-3">Trip Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{pkg.summary}</p>
                  </div>

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

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                      <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="grid place-items-center size-8 rounded-lg bg-success text-success-foreground"><Check className="size-4" /></span>
                        Inclusions
                      </h3>
                      <ul className="space-y-3">
                        {pkg.inclusions.map((i) => <li key={i} className="flex items-start gap-3 text-sm"><Check className="size-4 text-success mt-0.5 shrink-0" /> <span>{i}</span></li>)}
                      </ul>
                    </div>
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                      <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="grid place-items-center size-8 rounded-lg bg-destructive text-destructive-foreground"><X className="size-4" /></span>
                        Exclusions
                      </h3>
                      <ul className="space-y-3">
                        {pkg.exclusions.map((i) => <li key={i} className="flex items-start gap-3 text-sm"><X className="size-4 text-destructive mt-0.5 shrink-0" /> <span>{i}</span></li>)}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="mt-8 animate-fade-in">
                  <h2 className="font-display text-3xl font-bold mb-2">Day-wise Itinerary</h2>
                  <p className="text-muted-foreground mb-6">A clear, day-by-day plan of your {pkg.duration} journey.</p>
                  <Accordion type="single" collapsible defaultValue={pkg.itinerary[0]?.day} className="space-y-3">
                    {pkg.itinerary.map((d, idx) => (
                      <AccordionItem key={d.day} value={d.day} className="border border-border rounded-xl px-5 bg-card shadow-soft">
                        <AccordionTrigger className="py-5 hover:no-underline">
                          <div className="flex items-center gap-4 text-left">
                            <span className="grid place-items-center size-10 rounded-lg gradient-primary text-primary-foreground font-bold shrink-0">{idx + 1}</span>
                            <div><span className="block text-xs uppercase tracking-wider text-accent font-semibold">{d.day}</span><span className="font-display text-lg font-semibold">{d.title}</span></div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pl-14">{d.description}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="policies" className="mt-8 space-y-6 animate-fade-in">
                  <PolicyBlock icon={<AlertCircle className="size-4" />} title="Important Notes" items={DEFAULT_POLICIES.importantNotes} tone="accent" />
                  <PolicyBlock icon={<X className="size-4" />} title="Cancellation Policy" items={DEFAULT_POLICIES.cancellation} tone="destructive" />
                  <PolicyBlock icon={<CreditCard className="size-4" />} title="Payment Terms" items={DEFAULT_POLICIES.payment} tone="success" />
                </TabsContent>
              </Tabs>
            </Reveal>
          </div>

          <aside>
            <div className="sticky top-28 space-y-5">
              <Reveal>
                <div className="bg-card border border-border rounded-2xl shadow-card p-6">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Price per person</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display text-4xl font-bold text-primary">₹{formatINR(pkg.price)}</span>
                    {pkg.oldPrice && <span className="text-lg text-muted-foreground line-through">₹{formatINR(pkg.oldPrice)}</span>}
                  </div>
                  {pkg.oldPrice && <span className="inline-block mt-2 text-xs font-bold text-success">You save ₹{formatINR(pkg.oldPrice - pkg.price)}</span>}
                  <Button asChild size="lg" className="w-full mt-5 bg-success text-success-foreground hover:bg-success/90 shadow-glow ripple font-semibold">
                    <a href={buildWhatsAppLink(`${DEFAULT_ENQUIRY_MESSAGE}\n\n*Package:* ${pkg.title}\n*Duration:* ${pkg.duration}\n*Price:* ₹${formatINR(pkg.price)}/person`)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="size-5" /> Enquire on WhatsApp
                    </a>
                  </Button>
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-card border border-border rounded-2xl shadow-card p-6">
                  <h3 className="font-display text-xl font-bold">Send an enquiry</h3>
                  <p className="text-sm text-muted-foreground mt-1">We'll get back within 30 minutes.</p>
                  <div className="mt-4"><EnquiryForm defaultDestination={dest?.name ?? ""} packageTitle={pkg.title} /></div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function PolicyBlock({ icon, title, items, tone }: { icon: React.ReactNode; title: string; items: string[]; tone: "accent" | "destructive" | "success" }) {
  const toneClass = tone === "accent" ? "bg-accent text-accent-foreground" : tone === "destructive" ? "bg-destructive text-destructive-foreground" : "bg-success text-success-foreground";
  const dotClass = tone === "accent" ? "bg-accent" : tone === "destructive" ? "bg-destructive" : "bg-success";

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
      <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2"><span className={`grid place-items-center size-8 rounded-lg ${toneClass}`}>{icon}</span>{title}</h3>
      <ul className="space-y-3">
        {items.map((n) => <li key={n} className="flex items-start gap-3 text-sm leading-relaxed"><span className={`size-1.5 rounded-full ${dotClass} mt-2 shrink-0`} /><span>{n}</span></li>)}
      </ul>
    </div>
  );
}