import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Wallet,
  Star,
  ShieldCheck,
  Headphones,
  Wand2,
  ChevronLeft,
  ChevronRight,
  Quote,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  destinations,
  packages,
  formatINR,
} from "@/data/travel";

import kashmir from "@/assets/hero-kashmir.jpg";
import kerala from "@/assets/hero-kerala.jpg";
import rajasthan from "@/assets/hero-rajasthan.jpg";
import bali from "@/assets/hero-bali.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tripze Travels — Plan Your Dream Trip | Tailored Tour Packages" },
      {
        name: "description",
        content:
          "Plan your dream trip with Tripze Travels. Handpicked tour packages to Kashmir, Kerala, Rajasthan, Bali and more — best price guaranteed, 24/7 support.",
      },
      { property: "og:title", content: "Tripze Travels — Plan Your Dream Trip" },
      { property: "og:description", content: "Handpicked tour packages with best price guarantee." },
      { property: "og:image", content: kashmir },
      { name: "twitter:image", content: kashmir },
    ],
  }),
  component: HomePage,
});

const SLIDES = [
  { img: kashmir, title: "Plan Your Dream Trip", subtitle: "Discover the magic of Kashmir's serene valleys" },
  { img: kerala, title: "Where Nature Speaks", subtitle: "Cruise the timeless backwaters of Kerala" },
  { img: rajasthan, title: "Live Like Royalty", subtitle: "Walk through Rajasthan's regal palaces" },
  { img: bali, title: "Find Your Paradise", subtitle: "Sunsets, surf and serenity in Bali" },
];

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === idx ? 1 : 0 }}
          aria-hidden={i !== idx}
        >
          <img
            src={s.img}
            alt={s.subtitle}
            className="absolute inset-0 size-full object-cover animate-ken-burns"
            loading={idx === 0 ? "eager" : "lazy"}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        <div key={i} className="max-w-3xl text-primary-foreground animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs uppercase tracking-widest mb-5">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" /> Trusted by 50,000+ travellers
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
            {SLIDES[i].title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">{SLIDES[i].title.split(" ").slice(-1)}</span>
          </h1>
          <p className="mt-5 text-lg md:text-2xl opacity-90 max-w-xl">{SLIDES[i].subtitle}</p>
        </div>

        {/* Search Form */}
        <div className="relative z-10 mt-10 max-w-5xl">
          <SearchForm />
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        <button
          onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
          className="grid place-items-center size-10 rounded-full glass-dark text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5" />
        </button>
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-10 bg-accent" : "w-2 bg-primary-foreground/50"}`}
          />
        ))}
        <button
          onClick={() => setI((p) => (p + 1) % SLIDES.length)}
          className="grid place-items-center size-10 rounded-full glass-dark text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
          aria-label="Next slide"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}

function SearchForm() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (destination) {
          navigate({ to: "/destination/$id", params: { id: destination } });
          return;
        }
        navigate({ to: "/packages" });
      }}
      className="glass rounded-2xl p-3 md:p-4 shadow-elegant grid gap-2 md:gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto]"
    >
      <label className="flex items-center gap-3 px-3 py-3 rounded-xl bg-background/70">
        <MapPin className="size-5 text-accent shrink-0" />
        <div className="flex-1">
          <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">Destination</span>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full bg-transparent text-sm font-medium outline-none">
            <option value="">Where to?</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
          </select>
        </div>
      </label>
      <label className="flex items-center gap-3 px-3 py-3 rounded-xl bg-background/70">
        <Calendar className="size-5 text-accent shrink-0" />
        <div className="flex-1">
          <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">Travel date</span>
          <input type="date" className="w-full bg-transparent text-sm font-medium outline-none" />
        </div>
      </label>
      <label className="flex items-center gap-3 px-3 py-3 rounded-xl bg-background/70">
        <Wallet className="size-5 text-accent shrink-0" />
        <div className="flex-1">
          <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">Budget</span>
          <select className="w-full bg-transparent text-sm font-medium outline-none">
            <option>Any budget</option>
            <option>Under ₹15,000</option>
            <option>₹15,000 – ₹30,000</option>
            <option>₹30,000 – ₹60,000</option>
            <option>Above ₹60,000</option>
          </select>
        </div>
      </label>
      <Button type="submit" size="lg" className="gradient-accent text-accent-foreground shadow-accent ripple font-semibold h-auto">
        <Search className="size-5" /> Search
      </Button>
    </form>
  );
}

function DestinationsSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Explore</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Top <span className="text-gradient">Destinations</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Eight bucket-list destinations, hundreds of curated experiences. Pick yours.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d, idx) => (
          <Reveal key={d.slug} delay={idx * 60}>
            <Link
              to="/destination/$id"
              params={{ id: d.slug }}
              className="group block relative rounded-2xl overflow-hidden hover-zoom-img shadow-card hover-lift bg-card aspect-[3/4]"
            >
              <img
                src={d.image}
                alt={d.name}
                loading="lazy"
                width={800}
                height={1000}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 gradient-card-overlay" />
              <div className="absolute top-4 right-4 glass-dark text-primary-foreground text-xs px-3 py-1.5 rounded-full font-semibold">
                from ₹{formatINR(d.startingPrice)}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                <div className="text-2xl mb-1">{d.emoji}</div>
                <h3 className="font-display text-2xl font-bold">{d.name}</h3>
                <p className="text-sm opacity-90 mt-1 transition-all duration-500 group-hover:translate-x-1">
                  {d.tagline}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold text-accent mt-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                  Explore <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Curated</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
              Best-Selling <span className="text-gradient">Packages</span>
            </h2>
          </div>
          <Link to="/packages" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors">
            View all packages <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.slice(0, 6).map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 80}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: Wallet, title: "Best Price Guarantee", desc: "Find a lower price elsewhere? We'll match it and add an upgrade." },
  { icon: Headphones, title: "24×7 Trip Support", desc: "Real humans on chat and call — wherever you wander, we're a ring away." },
  { icon: Wand2, title: "100% Customisable", desc: "Tweak any package to suit your dates, pace and budget — in minutes." },
  { icon: ShieldCheck, title: "Trusted by 50,000+", desc: "Government-licensed operator with a 4.9/5 traveller satisfaction score." },
];

function WhyUs() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Why us</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Travel Made <span className="text-gradient">Effortless</span>
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, idx) => (
          <Reveal key={f.title} delay={idx * 80}>
            <div className="group bg-card rounded-2xl p-7 border border-border hover-lift text-center h-full">
              <div className="mx-auto grid place-items-center size-16 rounded-2xl gradient-primary text-primary-foreground shadow-soft mb-5 group-hover:rotate-6 transition-transform">
                <f.icon className="size-7" />
              </div>
              <h3 className="font-display text-xl font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Aanya & Rohan", trip: "Bali Honeymoon", text: "Every detail — from the floral bath at arrival to the sunset cruise — was straight out of a movie. Tripze Travels made our honeymoon unforgettable.", rating: 5 },
  { name: "Vikram Iyer", trip: "Kashmir Snow Escape", text: "Our shikara host became a friend. The snow at Gulmarg, the houseboat dinners — Tripze Travels got every single thing right.", rating: 5 },
  { name: "The Mehta Family", trip: "Rajasthan Royal Trail", text: "Travelling with kids and grandparents was a breeze. Heritage hotels, pre-booked everything — we just showed up and enjoyed.", rating: 5 },
  { name: "Priya Nair", trip: "Kerala Backwaters", text: "I've travelled with three other agencies — none come close. The houseboat, the chef, the route — pure magic.", rating: 5 },
];

function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(800px 400px at 20% 0%, var(--accent), transparent), radial-gradient(600px 400px at 80% 100%, var(--primary-glow), transparent)" }} />
      <div className="container mx-auto px-4 relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Loved by travellers</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Stories from the <span className="text-gradient">Road</span>
          </h2>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div key={i} className="glass-dark rounded-3xl p-8 md:p-12 text-center animate-fade-in">
              <Quote className="size-10 text-accent mx-auto mb-5" />
              <p className="text-xl md:text-2xl font-display leading-relaxed">
                "{TESTIMONIALS[i].text}"
              </p>
              <div className="flex items-center justify-center gap-1 mt-6">
                {Array.from({ length: TESTIMONIALS[i].rating }).map((_, k) => (
                  <Star key={k} className="size-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 font-semibold text-lg">{TESTIMONIALS[i].name}</p>
              <p className="text-sm opacity-75">{TESTIMONIALS[i].trip}</p>
            </div>
          </Reveal>
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-10 bg-accent" : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const imgs = destinations.slice(0, 8);
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <Reveal className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Through the lens</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Postcards from <span className="text-gradient">Our Travellers</span>
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map((d, idx) => (
          <Reveal key={d.slug} delay={idx * 50} className={idx % 5 === 0 ? "row-span-2 md:row-span-2" : ""}>
            <div className={`relative rounded-2xl overflow-hidden hover-zoom-img shadow-soft ${idx % 5 === 0 ? "aspect-[3/4] md:aspect-[3/4]" : "aspect-square"}`}>
              <img src={d.image} alt={d.name} loading="lazy" width={800} height={800} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 gradient-card-overlay opacity-60" />
              <span className="absolute bottom-3 left-3 text-primary-foreground font-semibold text-sm">{d.emoji} {d.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="container mx-auto px-4 pb-8">
      <Reveal>
        <div className="rounded-3xl p-10 md:p-14 gradient-primary text-primary-foreground shadow-elegant relative overflow-hidden">
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 size-64 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold">Get travel inspiration in your inbox</h3>
              <p className="opacity-90 mt-3">Monthly destination guides, exclusive deals and itineraries — no spam, unsubscribe anytime.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                <Input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="pl-12 h-14 rounded-xl bg-background text-foreground border-0"
                />
              </div>
              <Button type="submit" size="lg" className="h-14 gradient-accent text-accent-foreground shadow-accent ripple font-semibold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HomePage() {
  return (
    <Layout>
      <HeroSlider />
      <DestinationsSection />
      <PackagesSection />
      <WhyUs />
      <Testimonials />
      <GallerySection />
      <Newsletter />
    </Layout>
  );
}
