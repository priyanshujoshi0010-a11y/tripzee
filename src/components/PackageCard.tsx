import { Link } from "@tanstack/react-router";
import { Clock, Heart, Star } from "lucide-react";
import { formatINR, type Package as TravelPackage } from "@/data/travel";

type PackageCardProps = {
  pkg: TravelPackage;
  delay?: number;
};

export function getDiscountPercent(pkg: TravelPackage) {
  if (!pkg.oldPrice || pkg.oldPrice <= pkg.price) return null;
  return Math.round(((pkg.oldPrice - pkg.price) / pkg.oldPrice) * 100);
}

export function PackageCard({ pkg }: PackageCardProps) {
  const discount = getDiscountPercent(pkg);

  return (
    <Link to="/package/$id" params={{ id: pkg.slug }} className="group block h-full">
      <article className="bg-card rounded-2xl overflow-hidden shadow-card hover-lift flex flex-col h-full">
        <div className="relative hover-zoom-img aspect-[16/10]">
          <img
            src={pkg.image}
            alt={pkg.title}
            loading="lazy"
            width={1024}
            height={640}
            className="absolute inset-0 size-full object-cover"
          />
          {discount && (
            <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
              Save {discount}%
            </span>
          )}
          <span className="absolute top-3 right-3 grid place-items-center size-9 rounded-full glass text-foreground group-hover:text-destructive transition-colors">
            <Heart className="size-4" />
          </span>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" /> {pkg.duration}</span>
            <span className="inline-flex items-center gap-1 font-semibold text-foreground">
              <Star className="size-3.5 fill-accent text-accent" /> {pkg.rating} <span className="text-muted-foreground font-normal">({pkg.reviews})</span>
            </span>
          </div>
          <h3 className="font-display text-xl font-bold mt-2 leading-snug group-hover:text-primary transition-colors">{pkg.title}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">{pkg.summary}</p>
          <div className="flex items-end justify-between mt-5 pt-4 border-t border-border">
            <div>
              <span className="block text-[11px] text-muted-foreground">Starting from</span>
              <span className="font-display text-2xl font-bold text-primary">₹{formatINR(pkg.price)}</span>
              {pkg.oldPrice && <span className="ml-2 text-sm text-muted-foreground line-through">₹{formatINR(pkg.oldPrice)}</span>}
            </div>
            <span className="inline-flex items-center justify-center rounded-md px-3 py-2 text-xs font-semibold gradient-primary text-primary-foreground shadow-soft transition-smooth group-hover:shadow-elegant">
              View Itinerary
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}