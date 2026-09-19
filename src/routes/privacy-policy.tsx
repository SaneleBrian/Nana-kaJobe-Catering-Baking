import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Nana'kaJobe Catering & Baking" },
      { name: "description", content: "How Nana'kaJobe Catering & Baking collects, uses and protects your personal information, in line with South Africa's Protection of Personal Information Act (POPIA)." },
      { property: "og:title", content: "Privacy Policy | Nana'kaJobe" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    title: "1. Who we are",
    body: (
      <p>
        Nana'kaJobe Catering & Baking ("we", "us", "our") provides catering and baking services from Nquthu, KwaZulu-Natal.
        This policy explains how we collect, use, store and protect your personal information when you use this website or
        contact us to enquire about our services, in line with the Protection of Personal Information Act 4 of 2013 (POPIA).
      </p>
    ),
  },
  {
    title: "2. Information we collect",
    body: (
      <>
        <p>When you submit our booking enquiry form, we collect the information you provide, which may include:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Your full name, phone number and email address</li>
          <li>Your event type, date, location and estimated guest count</li>
          <li>The services you're interested in and any notes you share (e.g. dietary requirements)</li>
        </ul>
        <p className="mt-4">We do not knowingly collect payment details, ID numbers or other special personal information through this website.</p>
      </>
    ),
  },
  {
    title: "3. How we use your information",
    body: (
      <>
        <p>We use the information you provide solely to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Respond to your enquiry and prepare an accurate quote</li>
          <li>Plan and coordinate your event, including catering to any dietary needs you've disclosed</li>
          <li>Communicate with you about your booking</li>
        </ul>
        <p className="mt-4">We do not sell, rent or use your information for unrelated marketing without your consent.</p>
      </>
    ),
  },
  {
    title: "4. How your enquiry is sent",
    body: (
      <p>
        Our booking form opens WhatsApp with your details pre-filled, so that your message is sent directly from your own
        device to our WhatsApp Business number. We receive and process that message like any other WhatsApp conversation.
        WhatsApp (operated by Meta) acts as the messaging service for this communication and processes message data under
        its own privacy policy, which we encourage you to review.
      </p>
    ),
  },
  {
    title: "5. Storage, retention and security",
    body: (
      <p>
        We retain enquiry and booking details only for as long as reasonably necessary to plan and deliver your event and
        to meet any legal or accounting requirements afterward, after which it is deleted or anonymised. We take reasonable
        technical and organisational measures to protect the personal information in our care against loss, misuse or
        unauthorised access.
      </p>
    ),
  },
  {
    title: "6. Cookies and tracking",
    body: (
      <p>
        This website does not use cookies, analytics or advertising trackers to identify or profile visitors. If that
        changes in the future, this policy will be updated to describe what is used and why.
      </p>
    ),
  },
  {
    title: "7. Your rights under POPIA",
    body: (
      <>
        <p>You have the right to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Ask us what personal information we hold about you and request a copy of it</li>
          <li>Ask us to correct or update inaccurate or outdated information</li>
          <li>Ask us to delete personal information we no longer have a valid reason to keep</li>
          <li>Object to how your information is used, or withdraw consent where processing relies on it</li>
          <li>Lodge a complaint with the Information Regulator of South Africa if you believe your rights have been infringed</li>
        </ul>
        <p className="mt-4">
          To exercise any of these rights, contact us using the details below. The Information Regulator can be reached at{" "}
          <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">inforegulator.org.za</a>.
        </p>
      </>
    ),
  },
  {
    title: "8. Contact us",
    body: (
      <p>
        For any question about this policy or your personal information, contact us at{" "}
        <a href="mailto:info@nanakajobecatering.co.za" className="underline hover:text-gold">info@nanakajobecatering.co.za</a> or{" "}
        <a href="tel:+27724371482" className="underline hover:text-gold">072 437 1482</a>.
      </p>
    ),
  },
];

function PrivacyPolicy() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        This policy explains how Nana'kaJobe Catering & Baking collects, uses and protects your personal information, in
        line with South Africa's Protection of Personal Information Act (POPIA).
      </PageIntro>
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <p className="text-sm text-muted-foreground">Last updated: 19 September 2026</p>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
              <div className="mt-4 leading-7 text-muted-foreground">{s.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
