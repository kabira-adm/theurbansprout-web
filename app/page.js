import fs from "fs";
import path from "path";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllPlants, CONTENT_LAST_UPDATED } from "@/lib/plants-data";

export const metadata = {
  alternates: { canonical: "/" },
};

// Counted from the actual content at build time, not hardcoded, so this
// stays correct as articles and plant entries get added. No new
// article or plant page shows up on this stat line until it's in the
// content itself.
const ARTICLE_PILLARS = ["balcony-gardening", "indoor-plants", "kitchen-gardening", "terrace-gardening"];

function countGuides() {
  const appDir = path.join(process.cwd(), "app");
  return ARTICLE_PILLARS.reduce((total, pillar) => {
    const pillarDir = path.join(appDir, pillar);
    const entries = fs.readdirSync(pillarDir, { withFileTypes: true });
    const articleDirs = entries.filter(
      (entry) => entry.isDirectory() && fs.existsSync(path.join(pillarDir, entry.name, "page.js"))
    );
    return total + articleDirs.length;
  }, 0);
}

const stats = [
  { value: String(getAllPlants().length), label: "Plants cataloged" },
  { value: String(countGuides()), label: "Guides" },
  { value: CONTENT_LAST_UPDATED, label: "Last updated" },
];

const valueProps = [
  {
    title: "Made for small spaces",
    body: "No backyards here. Every guide assumes a balcony, a window sill, or a few square feet, because that's what most Indian homes actually have.",
    icon: "home",
  },
  {
    title: "Tested in Indian conditions",
    body: "Monsoon humidity, summer heat, hard tap water, city dust. Advice that accounts for the climate you're actually gardening in.",
    icon: "sun",
  },
  {
    title: "No fluff, just steps",
    body: "Clear, specific instructions on what to buy, how much water, and when to repot. Not vague inspiration.",
    icon: "list-checks",
  },
];

const FeatureIcon = ({ name, className }) => {
  const paths = {
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    "list-checks": (
      <>
        <path d="M4 6l1.5 1.5L8 5" />
        <path d="M4 12l1.5 1.5L8 11" />
        <path d="M4 18l1.5 1.5L8 17" />
        <path d="M12 6h8M12 12h8M12 18h8" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
};

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
    description: "Growing herbs and vegetables in containers, from coriander to tomatoes.",
    href: "/kitchen-gardening",
  },
  {
    title: "Plant Encyclopedia",
    status: "live",
    description:
      "A quick-reference lookup for 28 plants: light, watering, difficulty, and pet safety at a glance.",
    href: "/plant-encyclopedia",
  },
  {
    title: "Terrace Gardening",
    status: "live",
    description:
      "Structural load, waterproofing, raised beds vs containers, and plants built for full sun and wind.",
    href: "/terrace-gardening",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 font-body sm:pt-24">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              For Indian apartment homes
            </p>
            <h1 className="mt-3 font-display text-5xl leading-tight text-ink sm:text-6xl">
              Grow more than you think your balcony allows.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-8 text-ink/75">
              Urban Sprout is a practical gardening guide for apartment dwellers across India,
              built around the space, climate, and water you actually have.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/balcony-gardening"
                className="flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:brightness-90"
              >
                Start with Balcony Gardening
              </Link>
              <Link
                href="/about"
                className="flex min-h-11 items-center justify-center rounded-full border border-ink/20 px-6 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary"
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

      {/* Stat line */}
      <section className="border-y border-brand-sand bg-primary-soft/40 font-body">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="text-lg font-semibold text-ink">{stat.value}</span>
              <span className="ml-1.5 text-sm text-ink/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-brand-sand bg-white/60 font-body">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3">
            {valueProps.map((item) => (
              <div key={item.title}>
                <FeatureIcon name={item.icon} className="h-8 w-8 text-accent-green" />
                <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hubs */}
      <section className="mx-auto max-w-6xl px-6 py-16 font-body">
        <h2 className="font-display text-2xl text-ink">Where to start</h2>
        <p className="mt-2 max-w-xl text-ink/70">
          Five ways into Urban Sprout, depending on what you need right now: a full guide, a
          quick plant lookup, or somewhere to start from scratch.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hubs.map((hub) => (
            <div
              key={hub.title}
              className={`rounded-[32px] border p-6 ${
                hub.status === "live"
                  ? "border-primary/30 bg-surface"
                  : "border-brand-sand bg-brand-sand/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-ink">{hub.title}</h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    hub.status === "live"
                      ? "bg-accent-green/10 text-accent-green"
                      : "bg-brand-green-dark/10 text-brand-green-dark/60"
                  }`}
                >
                  {hub.status === "live" ? "Live" : "Coming soon"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/70">{hub.description}</p>
              {hub.status === "live" ? (
                <Link
                  href={hub.href}
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:text-ink"
                >
                  Explore {hub.title} →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="border-t border-brand-sand bg-ink">
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
