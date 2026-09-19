import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  IoMenuOutline,
  IoCallOutline,
  IoChatbubbleEllipsesOutline,
  IoLocationOutline,
  IoTimeOutline,
  IoOpenOutline,
} from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "Our Story", to: "/about" as const },
  { label: "Services & Menus", to: "/services" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Book Us", to: "/contact" as const },
];

function Crest({ inverse = false }: { inverse?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className="size-10 shrink-0" aria-hidden="true">
      <circle cx="50" cy="50" r="47" strokeWidth="2" className={`stroke-gold ${inverse ? "fill-transparent" : "fill-primary"}`} />
      <circle cx="50" cy="50" r="41" strokeWidth="0.75" className="fill-none stroke-gold" />
      <g transform="rotate(-45 50 50)">
        <ellipse cx="50" cy="18" rx="7.5" ry="10" className="fill-gold" />
        <rect x="47.3" y="27" width="3.4" height="58" rx="1.7" className="fill-gold" />
      </g>
      <g transform="rotate(45 50 50)">
        <path d="M50,8 C36,22 36,34 44,44" strokeWidth="2.2" strokeLinecap="round" className="fill-none stroke-gold" />
        <path d="M50,8 C50,26 50,34 50,44" strokeWidth="2.2" strokeLinecap="round" className="fill-none stroke-gold" />
        <path d="M50,8 C64,22 64,34 56,44" strokeWidth="2.2" strokeLinecap="round" className="fill-none stroke-gold" />
        <rect x="47.3" y="44" width="3.4" height="42" rx="1.7" className="fill-gold" />
      </g>
    </svg>
  );
}

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Nana'kaJobe home">
      <Crest inverse={inverse} />
      <span className={`leading-none ${inverse ? "text-primary-foreground" : "text-foreground"}`}>
        <span className="block font-display text-lg font-semibold">NANA'KAJOBE</span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">Catering & Baking</span>
      </span>
    </Link>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{children}</p>
      </div>
    </section>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 lg:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" asChild><a href="tel:+27724371482"><IoCallOutline />Call Now</a></Button>
          <Button asChild><Link to="/contact">Book Now <IoOpenOutline /></Link></Button>
        </div>
        <Sheet>
          <SheetTrigger asChild><Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu"><IoMenuOutline /></Button></SheetTrigger>
          <SheetContent className="flex w-[88%] flex-col bg-background p-7">
            <BrandMark />
            <nav className="mt-12 flex flex-col" aria-label="Mobile navigation">
              {nav.map((item) => (
                <SheetClose asChild key={item.to}><Link to={item.to} activeOptions={{ exact: item.to === "/" }} className="border-b border-border py-5 font-display text-2xl text-foreground data-[status=active]:text-gold">{item.label}</Link></SheetClose>
              ))}
            </nav>
            <div className="mt-auto grid gap-3">
              <Button variant="outline" asChild><a href="tel:+27724371482"><IoCallOutline />072 437 1482</a></Button>
              <Button asChild><Link to="/contact">Book Your Event</Link></Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="h-2 beadwork-border" />
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <BrandMark inverse />
          <p className="mt-6 max-w-md text-sm leading-7 text-primary-foreground/70">Authentic flavour, generous hospitality and beautiful presentation for celebrations across KwaZulu-Natal and beyond.</p>
          <p className="mt-5 font-display text-xl text-gold">Siya deliver noma ngabe ukuphi nendawo.</p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Visit & contact</h2>
          <div className="mt-5 space-y-4 text-sm text-primary-foreground/75">
            <a className="flex gap-3 hover:text-gold" href="tel:+27724371482"><IoCallOutline className="size-4 shrink-0" />072 437 1482</a>
            <a className="flex gap-3 hover:text-gold" href="mailto:info@nanakajobecatering.co.za"><IoChatbubbleEllipsesOutline className="size-4 shrink-0" />info@nanakajobecatering.co.za</a>
            <div className="flex gap-3"><IoLocationOutline className="size-4 shrink-0" /><span>Nquthu, eCassino<br />KwaZulu-Natal</span></div>
            <div className="flex gap-3"><IoTimeOutline className="size-4 shrink-0" /><span>Mon–Sat, 08:00–18:00<br />Events by arrangement</span></div>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Explore</h2>
          <nav className="mt-5 flex flex-col gap-4 text-sm text-primary-foreground/75" aria-label="Footer navigation">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-gold">{item.label}</Link>
            ))}
          </nav>
          <p className="mt-7 border-l-2 border-gold pl-4 text-sm font-semibold leading-6 text-primary-foreground">Serving the whole of KwaZulu-Natal & beyond</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 border-t border-primary-foreground/15 px-5 py-6 text-center text-xs text-primary-foreground/60 sm:flex-row sm:justify-between lg:px-8">
        <span>© {new Date().getFullYear()} Nana'kaJobe Catering & Baking. Made with Ubuntu in KwaZulu-Natal.</span>
        <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
      </div>
    </footer>
  );
}
