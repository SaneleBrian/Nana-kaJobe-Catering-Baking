import { createFileRoute, Link } from "@tanstack/react-router";
import {
  IoArrowForwardOutline,
  IoGiftOutline,
  IoRestaurantOutline,
  IoHeartOutline,
  IoLocationOutline,
  IoStar,
  IoPeopleOutline,
} from "react-icons/io5";
import { Button } from "@/components/ui/button";
import hero from "@/assets/nanaka-hero.jpg";
import feast from "@/assets/traditional-feast.jpg";
import cake from "@/assets/celebration-cake.jpg";
import platters from "@/assets/corporate-platters.jpg";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Nana'kaJobe Catering & Baking | Authentic KZN Catering" },
    { name: "description", content: "Authentic Zulu catering, beautiful cakes and professional event service from Nquthu across KwaZulu-Natal and beyond." },
    { property: "og:title", content: "Nana'kaJobe Catering & Baking" },
    { property: "og:description", content: "Generous flavour and heartfelt hospitality for every gathering." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[65vh] items-end overflow-hidden bg-primary sm:min-h-[75vh] lg:min-h-[calc(100vh-5rem)]">
        <img src={hero} alt="A joyful Zulu celebration with a generous catered feast" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/5" />
        <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-16 pt-28 lg:px-8 lg:pb-20">
          <p className="eyebrow">Siyanamukela · Welcome to our table</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-primary-foreground sm:text-7xl lg:text-8xl">Flavour made for gathering.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/85 sm:text-lg">Authentic Zulu cooking, beautiful baking and wholehearted service for your most meaningful celebrations.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold/90" asChild><Link to="/contact">Book Your Event <IoArrowForwardOutline /></Link></Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/50 bg-primary/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link to="/services">Explore Our Menus</Link></Button>
          </div>
          <div className="mt-12 flex items-center gap-3 text-sm text-primary-foreground/80"><IoLocationOutline className="size-4 text-gold" />Nquthu, eCassino · Serving all of KZN & national bookings</div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="eyebrow">What we bring</p><h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">One table. Every occasion.</h2></div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">From intimate family moments to hundreds of wedding guests, every menu is prepared with care, abundance and the warmth of home.</p>
          </div>
          <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: IoHeartOutline, title: "Weddings", text: "Modern and traditional celebrations, beautifully served." },
              { icon: IoPeopleOutline, title: "Corporate", text: "Professional buffets, meetings and conference platters." },
              { icon: IoGiftOutline, title: "Cakes & Baking", text: "Statement cakes, scones, biscuits and sweet treats." },
              { icon: IoRestaurantOutline, title: "Traditional Feasts", text: "Generous home-style dishes for every imicimbi." },
            ].map(({ icon: Icon, title, text }) => <div key={title} className="border-b border-r border-border p-7"><Icon className="size-7 text-gold" /><h3 className="mt-8 font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <img src={feast} alt="Beef stew, ujeqe, chakalaka and fresh sides" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className="lg:pl-10"><p className="eyebrow">Taste of home</p><h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Food that honours where we come from.</h2><p className="mt-6 text-base leading-8 text-muted-foreground">Slow-cooked beef, soft ujeqe, vibrant chakalaka and fresh salads—familiar favourites elevated with polished presentation.</p><Button variant="link" className="mt-5 h-auto p-0 text-foreground" asChild><Link to="/services">See our menu highlights <IoArrowForwardOutline /></Link></Button></div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="eyebrow">Made to delight</p><h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">From savoury to sweet.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Link to="/services" className="group relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[480px]"><img src={platters} alt="Gourmet savoury platters" width={1200} height={912} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"/><div className="absolute bottom-0 p-8 text-primary-foreground"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Savoury</p><h3 className="mt-2 font-display text-3xl">Platters & buffets</h3></div></Link>
            <Link to="/services" className="group relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[480px]"><img src={cake} alt="Chocolate drip celebration cake" width={1008} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"/><div className="absolute bottom-0 p-8 text-primary-foreground"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Sweet</p><h3 className="mt-2 font-display text-3xl">Celebration cakes</h3></div></Link>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-8">
        <div className="mx-auto max-w-5xl text-center"><IoStar className="mx-auto size-6 fill-gold text-gold"/><blockquote className="mt-7 font-display text-3xl leading-snug sm:text-4xl">"The food tasted like home, the presentation was beautiful, and every guest was served with such warmth."</blockquote><p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-gold">Client love · Nquthu celebration</p></div>
      </section>

      <section className="px-5 py-20 text-center lg:px-8 lg:py-28"><p className="eyebrow">Your table is waiting</p><h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">Tell us what you are celebrating.</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">We will shape a menu and service experience around your guests, location and occasion.</p><Button size="lg" className="mt-8" asChild><Link to="/contact">Get a Quote <IoArrowForwardOutline /></Link></Button></section>
    </>
  );
}
