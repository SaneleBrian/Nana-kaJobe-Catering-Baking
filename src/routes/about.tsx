import { createFileRoute, Link } from "@tanstack/react-router";
import {
  IoArrowForwardOutline,
  IoHeartOutline,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
  IoLeafOutline,
} from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site-shell";
import wedding from "@/assets/wedding-banquet.jpg";
import treats from "@/assets/baked-treats.jpg";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "Our Story | Nana'kaJobe Catering & Baking" }, { name: "description", content: "Discover Nana'kaJobe's Nquthu roots and commitment to authentic Zulu hospitality, generous flavour and excellent event service." },
  { property: "og:title", content: "Our Story | Nana'kaJobe" }, { property: "og:description", content: "Rooted in Nquthu, serving with warmth, heritage and excellence." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: About });

function About() { return <>
  <PageIntro eyebrow="Our story" title="Rooted in Nquthu. Made with Ubuntu.">Nana'kaJobe is built on a simple belief: good food gathers people, and every guest deserves to feel at home.</PageIntro>
  <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2 lg:items-center"><img src={wedding} alt="Black African family enjoying a traditional Zulu wedding feast" width={1200} height={912} className="aspect-[4/3] w-full object-cover"/><div className="lg:pl-10"><p className="eyebrow">A seat at our table</p><h2 className="mt-4 font-display text-4xl font-semibold">Hospitality that can be felt.</h2><div className="mt-6 space-y-5 leading-8 text-muted-foreground"><p>From our home in eCassino, Nquthu, we grew through the trust of families who invited us into their most meaningful moments.</p><p>Our cooking honours generous home-style flavours while our service brings the polish, timing and presentation that a beautiful event deserves.</p><p>Whether it is Umembeso, Umabo, a modern wedding, unveiling or milestone celebration, we arrive ready to serve with respect.</p></div></div></div></section>
  <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-8"><div className="mx-auto max-w-[1600px]"><p className="eyebrow">What guides us</p><div className="mt-10 grid gap-px bg-primary-foreground/15 md:grid-cols-4">{[{icon:IoLeafOutline,title:"Heritage",text:"Honouring recipes, rituals and the flavours that connect generations."},{icon:IoHeartOutline,title:"Warmth",text:"Serving every guest with kindness, dignity and genuine Ubuntu."},{icon:IoShieldCheckmarkOutline,title:"Reliability",text:"Clear communication, careful planning and service you can trust."},{icon:IoSparklesOutline,title:"Excellence",text:"Quality ingredients and thoughtful presentation, from first bite to last."}].map(({icon:Icon,title,text})=><div className="bg-primary p-7" key={title}><Icon className="size-6 text-gold"/><h3 className="mt-7 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/65">{text}</p></div>)}</div></div></section>
  <section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2 lg:items-center"><div><p className="eyebrow">More than a meal</p><h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Every detail carries care.</h2><p className="mt-6 max-w-xl leading-8 text-muted-foreground">From the first tray of warm scones to the final slice of celebration cake, we want your guests to remember how your event made them feel.</p><Button className="mt-7" asChild><Link to="/contact">Plan with us <IoArrowForwardOutline/></Link></Button></div><img src={treats} alt="Fresh scones, snowballs and confectionery" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full object-cover"/></div></section>
</> }
