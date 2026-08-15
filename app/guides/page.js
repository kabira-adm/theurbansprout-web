import fs from "fs";
import path from "path";
import Link from "next/link";
import { getAllPlants } from "@/lib/plants-data";

export const metadata = {
  title: "All Guides",
  description:
    "Every Urban Sprout guide in one place: balcony, indoor, kitchen, and terrace gardening, plus the plant encyclopedia reference.",
  alternates: { canonical: "/guides" },
};

// Same local icon convention as app/page.js's Icon component and
// components/Nav.js's NavIcon: each file owns its own icon paths.
function PillarIcon({ name, className }) {
  const paths = {
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9" />
      </>
    ),
    leaf: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
    sprout: (
      <>
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
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
}

// Counted from the actual content at build time, same approach as the
// homepage stat line (app/page.js), not hardcoded. Article count only,
// no aggregated reading time: that data isn't centralized anywhere per
// article, and isn't worth fragile parsing to populate one number.
function countArticles(pillarDir) {
  const dir = path.join(process.cwd(), "app", pillarDir);
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.filter(
    (entry) => entry.isDirectory() && fs.existsSync(path.join(dir, entry.name, "page.js"))
  ).length;
}

const pillars = [
  {
    title: "Balcony Gardening",
    href: "/balcony-gardening",
    badge: "Start here",
    icon: "home",
    description:
      "The core pillar. Pot selection, sunlight, watering, wind safety, and troubleshooting for the most common apartment growing space in India.",
  },
  {
    title: "Indoor Plants",
    href: "/indoor-plants",
    badge: "Beginner",
    icon: "leaf",
    description:
      "Low-maintenance houseplants for low light, pet safety, and the most common way indoor plants actually die: overwatering.",
  },
  {
    title: "Kitchen Gardening",
    href: "/kitchen-gardening",
    badge: "Some effort",
    icon: "sprout",
    description:
      "Growing vegetables and herbs you actually eat: tomatoes, chillies, coriander, mint, and organic pest control safe enough to spray on food.",
  },
  {
    title: "Terrace Gardening",
    href: "/terrace-gardening",
    badge: "Advanced",
    icon: "sun",
    description:
      "For bigger spaces with real structural considerations: waterproofing, raised beds versus containers, and full-sun exposure.",
  },
  {
    title: "Plant Encyclopedia",
    href: "/plant-encyclopedia",
    badge: "Reference",
    icon: "search",
    description:
      "Not a guide to follow start to finish. A searchable lookup table for quick facts on any of 28 plants: light, water, difficulty, and pet safety.",
  },
];

const PILLAR_DIRS = {
  "/balcony-gardening": "balcony-gardening",
  "/indoor-plants": "indoor-plants",
  "/kitchen-gardening": "kitchen-gardening",
  "/terrace-gardening": "terrace-gardening",
};

function countFor(pillar) {
  if (pillar.href === "/plant-encyclopedia") {
    return `${getAllPlants().length} plants`;
  }
  const count = countArticles(PILLAR_DIRS[pillar.href]);
  return `${count} guide${count === 1 ? "" : "s"}`;
}

export default function GuidesIndex() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10 bg-surface/50 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Guides</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">All guides</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Every path into Urban Sprout, from a full pillar guide to a two-second plant lookup.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 font-body">
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="flex flex-col rounded-[32px] border border-ink/10 bg-surface p-6 transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                  <PillarIcon name={pillar.icon} className="h-5 w-5" />
                </span>
                <span className="shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary">
                  {pillar.badge}
                </span>
              </div>
              <h2 className="mt-4 font-display text-xl text-ink">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/70">{pillar.description}</p>
              <p className="mt-4 text-xs font-medium text-ink/50">{countFor(pillar)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
