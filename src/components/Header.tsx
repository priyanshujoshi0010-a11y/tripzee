import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Mail, Menu, X, Facebook, Instagram, Youtube, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL, PHONE_NUMBER } from "@/data/travel";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
  {/* Top bar */}
<div className="hidden lg:block bg-black text-white text-xs">
  <div className="container mx-auto flex items-center justify-between px-4 py-2">
    <div className="flex items-center gap-5">
      <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
        <Phone className="size-3.5" /> {PHONE_NUMBER}
      </a>
      <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
        <Mail className="size-3.5" /> {CONTACT_EMAIL}
      </a>
    </div>
    <div className="flex items-center gap-3">
      <span className="opacity-80">Follow us:</span>
      <a aria-label="Facebook" href="#" className="hover:text-gray-300 transition-colors">
        <Facebook className="size-3.5" />
      </a>
      <a aria-label="Instagram" href="#" className="hover:text-gray-300 transition-colors">
        <Instagram className="size-3.5" />
      </a>
      <a aria-label="Youtube" href="#" className="hover:text-gray-300 transition-colors">
        <Youtube className="size-3.5" />
      </a>
    </div>
  </div>
</div>

      {/* Main nav */}
      <div
        className={cn(
          "transition-smooth border-b",
          scrolled
            ? "glass border-border/40 shadow-soft"
            : "bg-background/80 backdrop-blur border-transparent",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 
                h-12 md:h-25">

          <Link to="/" className="flex items-center group h-full">
            <img
              src={logo}
              alt="Tripze Travels Logo"
              className="h-20 md:h-50 w-auto object-contain 
                 transition-transform duration-300 
                 group-hover:scale-110"
            />
          </Link>


          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-smooth data-[status=active]:text-primary data-[status=active]:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => navigate({ to: "/contact" })}
              className="hidden sm:inline-flex gradient-accent text-accent-foreground hover:opacity-90 shadow-accent ripple font-semibold"
            >
              Request Callback
            </Button>
            <button
              className="md:hidden grid place-items-center size-10 rounded-lg border border-border"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <nav className="container mx-auto px-4 py-3 flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  className="py-3 text-base font-medium border-b border-border last:border-0 data-[status=active]:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setOpen(false);
                  navigate({ to: "/contact" });
                }}
                className="mt-3 w-full gradient-accent text-accent-foreground"
              >
                Request Callback
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
