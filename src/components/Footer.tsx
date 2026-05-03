import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, Plane, Heart } from "lucide-react";
import {
  CONTACT_EMAIL,
  PHONE_NUMBER,
  PHONE_NUMBER_ALT,
  OFFICE_ADDRESS,
  destinations,
  buildDesignerLink,
  DESIGNER_NAME,
} from "@/data/travel";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center size-10 rounded-xl gradient-accent shadow-accent">
              <Plane className="size-5 text-accent-foreground" />
            </span>
            <span className="font-display text-2xl font-bold">Tripze Travels</span>
          </Link>
          <p className="text-sm opacity-80 leading-relaxed">
            Crafting personalised journeys to the Himalayas, India's most magical destinations and beyond — straight from the heart of Kullu.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid place-items-center size-9 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-accent">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-accent">Packages</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Top Destinations</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {destinations.slice(0, 6).map((d) => (
              <li key={d.slug}>
                <Link to="/destination/$id" params={{ id: d.slug }} className="hover:text-accent">
                  {d.emoji} {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 shrink-0 text-accent" /> {OFFICE_ADDRESS}</li>
            <li className="flex items-center gap-3"><Phone className="size-4 text-accent" /> <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a></li>
            <li className="flex items-center gap-3"><Phone className="size-4 text-accent" /> <a href={`tel:${PHONE_NUMBER_ALT}`}>{PHONE_NUMBER_ALT}</a></li>
            <li className="flex items-center gap-3"><Mail className="size-4 text-accent" /> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container mx-auto px-4 py-5 text-xs flex flex-col md:flex-row items-center justify-between gap-2 opacity-90">
          <p>© {new Date().getFullYear()} Tripze Travels. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="size-3.5 fill-accent text-accent inline" /> by{" "}
            <a
              href={buildDesignerLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              {DESIGNER_NAME}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
