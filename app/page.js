import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const valueProps = [
  {
    title: "Made for small spaces",
    body: "No backyards here. Every guide assumes a balcony, a window sill, or a few square feet — because that's what most Indian homes actually have.",
  },
  {
    title: "Tested in Indian conditions",
    body: "Monsoon humidity, summer heat, hard tap water, city dust. Advice that accounts for the climate you're actually gardening in.",
  },
  {
    title: "No fluff, just steps",
    body: "Clear, specific instructions — what to buy, how much water, when to repot — not vague inspiration.",
  },
];

const hubs = [
  {
    title: "Balcony Gardening",
    status: "live",
    description:
      "Start here: containers, sunlight, wind, watering routines, and the plants that actually survive Indian balconies.",
    href: "/balcony-gardening",
  },
  {
    title: "Indoor Plants",
    status: "live",
    description: "Low-light survivors, pet-safe picks, and care schedules for apartment interiors.",
    href: "/indoor-plants",
  },
  {
    title: "Kitchen Gardening",
    status: "live",
    description: "Growing herbs and vegetables in containers — from coriander to tomatoes.",
    href: "/kitchen-gardening",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-terracotta">
              For Indian apartment homes
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-brand-green-dark sm:text-5xl">
              Grow more than you think your balcony allows.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-8 text-brand-green-dark/75">
              Urban Sprout is a practical gardening guide for apartment dwellers across India —
              built around the space, climate, and water you actually have.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/balcony-gardening"
                className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
              >
                Start with Balcony Gardening
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-brand-green-dark/20 px-6 py-3 text-sm font-semibold text-brand-green-dark transition-colors hover:border-brand-green-dark/40"
              >
                About Urban Sprout
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <svg viewBox="0 0 320 320" className="w-full max-w-sm" aria-hidden="true">
              <circle cx="160" cy="160" r="150" fill="#EFE6D3" />
              <rect x="120" y="200" width="80" height="70" rx="8" fill="#C96F4A" />
              <rect x="130" y="190" width="60" height="14" rx="4" fill="#A85736" />
              <path d="M160 200 C160 140 100 130 90 90" stroke="#2E7D4F" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M160 200 C160 130 220 120 235 80" stroke="#2E7D4F" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M160 200 C160 120 160 90 160 55" stroke="#1F3A2E" strokeWidth="8" fill="none" strokeLinecap="round" />
              <ellipse cx="88" cy="82" rx="26" ry="16" fill="#3F9C6B" transform="rotate(-30 88 82)" />
              <ellipse cx="236" cy="72" rx="26" ry="16" fill="#3F9C6B" transform="rotate(25 236 72)" />
              <ellipse cx="160" cy="48" rx="20" ry="30" fill="#4CB57F" />
            </svg>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-brand-sand bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3">
            {valueProps.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-brand-green-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-green-dark/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hubs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-brand-green-dark">Where to start</h2>
        <p className="mt-2 max-w-xl text-brand-green-dark/70">
          We're building Urban Sprout one topic at a time, in depth, instead of spreading thin.
          Balcony Gardening is live first — more hubs are on the way.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {hubs.map((hub) => (
            <div
              key={hub.title}
              className={`rounded-2xl border p-6 ${
                hub.status === "live"
                  ? "border-brand-green/30 bg-white"
                  : "border-brand-sand bg-brand-sand/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-brand-green-dark">{hub.title}</h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    hub.status === "live"
                      ? "bg-brand-green/10 text-brand-green"
                      : "bg-brand-green-dark/10 text-brand-green-dark/60"
                  }`}
                >
                  {hub.status === "live" ? "Live" : "Coming soon"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-brand-green-dark/70">{hub.description}</p>
              {hub.status === "live" ? (
                <Link
                  href={hub.href}
                  className="mt-4 inline-block text-sm font-semibold text-brand-green hover:text-brand-green-dark"
                >
                  Explore {hub.title} →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="border-t border-brand-sand bg-brand-green-dark">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-white">One gardening tip a week</h2>
          <p className="mt-2 text-brand-cream/80">
            Short, seasonal, specific to Indian balconies. Unsubscribe anytime.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
