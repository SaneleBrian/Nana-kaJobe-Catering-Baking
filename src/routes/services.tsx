import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { IoArrowForwardOutline, IoCheckmarkOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site-shell";
import feast from "@/assets/traditional-feast.jpg";
import wedding from "@/assets/wedding-banquet.jpg";
import platters from "@/assets/corporate-platters.jpg";
import cake from "@/assets/celebration-cake.jpg";

export const Route = createFileRoute("/services")({ head: () => ({ meta: [
  { title: "Services & Menus | Nana'kaJobe Catering" }, { name: "description", content: "Browse traditional Zulu feasts, wedding menus, corporate catering, platters, custom cakes and baked treats." },
  { property: "og:title", content: "Catering Services & Menus | Nana'kaJobe" }, { property: "og:description", content: "Traditional feasts, modern banquets, corporate catering and celebration baking." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
]}), component: Services });

const menus = [
  { key:"traditional", label:"Traditional feasts", title:"Traditional Zulu Ceremonies & Feasts", sub:"Umshado · Umembeso · Umabo · Imicimbi", image:feast, alt:"Traditional feast of beef stew, ujeqe and side dishes", items:["Slow-cooked beef or chicken","Ujeqe / steamed bread","Rice, samp or pap","Chakalaka and seasonal salads","Complete buffet service"] },
  { key:"weddings", label:"Modern weddings", title:"Modern Weddings & Banquets", sub:"Beautiful menus for a beautiful day", image:wedding, alt:"Traditional Zulu wedding banquet service", items:["Tailored two or three-course menus","Styled buffet presentation","Professional serving team","Guest welcome refreshments","Dessert and cake service"] },
  { key:"corporate", label:"Corporate", title:"Corporate Catering & Conferences", sub:"Professional, punctual and beautifully presented", image:platters, alt:"Corporate catering platters and canapes", items:["Breakfast and tea service","Gourmet savoury platters","Buffet lunches","Conference refreshments","Individually packed meals"] },
  { key:"baking", label:"Cakes & baking", title:"Custom Baking & Celebration Cakes", sub:"Sweet centrepieces made for your moment", image:cake, alt:"Custom celebration drip cake", items:["Wedding and birthday cakes","Traditional scones","Coconut snowballs","Biscuits and confectionery","Custom colours and finishes"] },
];
function Services(){ const [active,setActive]=useState("traditional"); const selected=menus.find(m=>m.key===active); if (!selected) return null; return <>
  <PageIntro eyebrow="Services & menus" title="Your occasion, served your way.">Choose a starting point, then let us tailor the menu, portions and presentation to your guests and celebration.</PageIntro>
  <section className="px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto max-w-[1600px]"><div className="flex gap-2 overflow-x-auto border-b border-border pb-4">{menus.map(m=><Button key={m.key} variant={active===m.key?"default":"ghost"} onClick={()=>setActive(m.key)} className="shrink-0">{m.label}</Button>)}</div><div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><img src={selected.image} alt={selected.alt} width={1200} height={912} className="aspect-[4/3] w-full object-cover"/><div className="lg:pl-8"><p className="eyebrow">{selected.sub}</p><h2 className="mt-4 font-display text-4xl font-semibold">{selected.title}</h2><ul className="mt-7 space-y-4">{selected.items.map(i=><li key={i} className="flex gap-3 text-muted-foreground"><span className="grid size-6 shrink-0 place-items-center bg-gold-soft"><IoCheckmarkOutline className="size-4 text-foreground"/></span>{i}</li>)}</ul><p className="mt-7 border-l-2 border-gold pl-4 text-sm leading-6 text-muted-foreground">Vegetarian options, dietary needs, spice levels and serving styles can be discussed when booking.</p><Button className="mt-7" asChild><Link to="/contact">Request this menu <IoArrowForwardOutline/></Link></Button></div></div></div></section>
  <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8"><div className="mx-auto flex max-w-[1600px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow">Not sure where to begin?</p><h2 className="mt-2 font-display text-3xl">Tell us your guest count and occasion.</h2></div><Button className="bg-gold text-accent-foreground hover:bg-gold/90" asChild><Link to="/contact">Build my quote <IoArrowForwardOutline/></Link></Button></div></section>
</> }
