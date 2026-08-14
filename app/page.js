import fs from "fs";
import path from "path";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllPlants, CONTENT_LAST_UPDATED } from "@/lib/plants-data";
import { calculate } from "@/lib/watering-calc";

export const metadata = {
  alternates: { canonical: "/" },
};

// Counted from the actual content at build time, not hardcoded, so every
// number on this page stays correct as articles and plant entries get
// added. No new article or plant page shows up in any count here until
// it's actually in the content itself. Same helper shape as
// app/guides/page.js's countArticles, kept as its own local copy rather
// than a shared import since both files already independently duplicate
// this small helper (established before this phase).
function countArticles(pillarDir) {
  const dir = path.join(process.cwd(), "app", pillarDir);
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.filter(
    (entry) => entry.isDirectory() && fs.existsSync(path.join(dir, entry.name, "page.js"))
  ).length;
}

const plants = getAllPlants();
const balconyCount = countArticles("balcony-gardening");
const indoorCount = countArticles("indoor-plants");
const kitchenCount = countArticles("kitchen-gardening");
const terraceCount = countArticles("terrace-gardening");
const totalGuideCount = balconyCount + indoorCount + kitchenCount + terraceCount;

// Real, computed counts for the plant-encyclopedia shortcut cards, using
// the exact same filter predicates PlantGrid's own useMemo applies
// (light === "Low light", petSafe === true, category === "Kitchen"), not
// a separate guess at what those categories contain.
const noSunCount = plants.filter((p) => p.light === "Low light").length;
const petSafeCount = plants.filter((p) => p.petSafe).length;
const edibleCount = plants.filter((p) => p.category === "Kitchen").length;

// One real, build-time-computed example so the watering-scheduler preview
// card shows an actual result rather than invented copy. Matches the
// scheduler page's own defaults (leafy foliage, medium pot, summer,
// partial shade) so the preview and the full tool agree if opened side
// by side.
const wateringPreview = calculate({
  plantType: "leafy",
  potSize: "medium",
  season: "summer",
  location: "partialshade",
});

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

// One local icon set, same convention as components/Nav.js's NavIcon and
// this file's own prior FeatureIcon: each file owns its icon paths
// rather than importing a shared icon component across files.
function Icon({ name, className }) {
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
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </>
    ),
    paw: (
      <>
        <circle cx="6" cy="9" r="2" />
        <circle cx="18" cy="9" r="2" />
        <circle cx="9.5" cy="5" r="2" />
        <circle cx="14.5" cy="5" r="2" />
        <path d="M12 12c-3.5 0-6 2.2-6 5a3 3 0 0 0 3 3c1.3 0 2-.6 3-.6s1.7.6 3 .6a3 3 0 0 0 3-3c0-2.8-2.5-5-6-5Z" />
      </>
    ),
    drop: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" />,
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

// Featured pillar (Balcony) plus the other four ways into the site,
// same five pillars and same descriptive copy as app/guides/page.js's
// own pillars array, kept here as its own literal copy rather than a
// cross-file import, matching the existing pattern where the homepage
// and the guides index each hold their own hardcoded content array.
const secondaryPillars = [
  {
    title: "Indoor Plants",
    href: "/indoor-plants",
    badge: "Beginner",
    icon: "leaf",
    description: "Low-maintenance houseplants for low light, pet safety, and the most common way indoor plants actually die: overwatering.",
    meta: `${indoorCount} guide${indoorCount === 1 ? "" : "s"}`,
  },
  {
    title: "Kitchen Gardening",
    href: "/kitchen-gardening",
    badge: "Some effort",
    icon: "sprout",
    description: "Growing vegetables and herbs you actually eat: tomatoes, chillies, coriander, mint, and organic pest control safe enough to spray on food.",
    meta: `${kitchenCount} guide${kitchenCount === 1 ? "" : "s"}`,
  },
  {
    title: "Terrace Gardening",
    href: "/terrace-gardening",
    badge: "Advanced",
    icon: "sun",
    description: "For bigger spaces with real structural considerations: waterproofing, raised beds versus containers, and full-sun exposure.",
    meta: `${terraceCount} guide${terraceCount === 1 ? "" : "s"}`,
  },
  {
    title: "Plant Encyclopedia",
    href: "/plant-encyclopedia",
    badge: "Reference",
    icon: "search",
    description: "Not a guide to follow start to finish. A searchable lookup table for quick facts on any of the plants: light, water, difficulty, and pet safety.",
    meta: `${plants.length} plants`,
  },
];

const shortcuts = [
  {
    title: "No sun? No problem",
    body: "Plants that hold up in low light: interior rooms, north-facing windows, deep corners.",
    icon: "sun",
    count: noSunCount,
    query: { light: "Low light" },
  },
  {
    title: "Safe around pets",
    body: "Cats and dogs get curious. These are the plants in the encyclopedia marked pet-safe.",
    icon: "paw",
    count: petSafeCount,
    query: { petSafe: "safe" },
  },
  {
    title: "Something to eat",
    body: "Herbs and vegetables you can actually grow in containers and harvest.",
    icon: "sprout",
    count: edibleCount,
    query: { category: "Kitchen" },
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 font-body sm:pt-24">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-accent-2-100 px-3 py-1 text-xs font-semibold text-accent-2-800">
              Written for Indian apartments
            </span>
            <h1 className="mt-4 font-display text-5xl leading-tight text-ink sm:text-6xl">
              Your balcony holds more than you think.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-8 text-ink/75">
              Step-by-step gardening guides built around what you actually have: a few feet
              of ledge, hard tap water, and a monsoon that drowns everything in June.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/balcony-gardening"
                className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:brightness-90"
              >
                <Icon name="leaf" className="h-4 w-4" />
                Start from the beginning
              </Link>
              <Link
                href="/plant-encyclopedia"
                className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/20 px-6 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon name="search" className="h-4 w-4" />
                Look up a plant
              </Link>
            </div>
            <p className="mt-5 text-sm text-ink/55">
              {plants.length} plants documented · {totalGuideCount} guides · last checked{" "}
              {CONTENT_LAST_UPDATED}
            </p>
          </div>
          <div className="relative flex justify-center">
            <svg
              viewBox="0 0 400 330"
              className="w-full max-w-md"
              role="img"
              aria-label="Line drawing of two potted plants on a balcony railing under the sun"
            >
              <circle cx="332" cy="58" r="46" fill="var(--color-accent-200)" />
              <circle cx="86" cy="126" r="62" fill="var(--color-accent-2-200)" />
              <g className="text-accent-2-800" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M40 300h320" />
                <path d="M56 300v-52M104 300v-52M152 300v-52M200 300v-52M248 300v-52M296 300v-52M344 300v-52" />
                <path d="M40 248h320" />
              </g>
              <g className="text-accent-700" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M96 186h74l-9 60h-56Z" />
                <path d="M88 186h90" />
              </g>
              <g className="text-accent-2-700" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M133 186v-62" />
                <path d="M133 156c-24 2-36-10-36-30 20-4 34 8 36 30Z" />
                <path d="M133 140c20 2 30-8 30-25-17-3-28 7-30 25Z" />
                <path d="M133 124c-14-6-18-18-13-30 13 4 17 16 13 30Z" />
              </g>
              <g className="text-accent-700" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M238 208h56l-7 40h-42Z" />
                <path d="M232 208h68" />
              </g>
              <g className="text-accent-2-700" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M252 208c-6-26-2-48 6-62 8 14 10 36 4 62" />
                <path d="M268 208c2-30 10-46 22-54 2 18-4 38-14 54" />
                <path d="M244 208c-10-20-14-34-12-46 12 8 18 24 18 46" />
              </g>
              <g className="text-accent-600" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="332" cy="58" r="17" />
                <path d="M332 26v-8M332 98v-8M364 58h8M292 58h8M354 36l6-6M304 86l6-6M354 80l6 6M304 30l6 6" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-ink/10 bg-surface/50 font-body">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3">
            {valueProps.map((item) => (
              <div key={item.title}>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to start */}
      <section className="mx-auto max-w-6xl px-6 py-16 font-body">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">Where to start</h2>
        <p className="mt-2 max-w-xl text-ink/70">
          Five ways into Urban Sprout, from a full pillar guide to a quick plant lookup.
        </p>

        <Link
          href="/balcony-gardening"
          className="mt-8 flex flex-col gap-4 rounded-[32px] border border-primary/30 bg-primary-soft/40 p-8 transition-colors hover:border-primary/50 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                <Icon name="home" className="h-6 w-6" />
              </span>
              <div>
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                  Start here
                </span>
                <h3 className="mt-1 font-display text-xl text-ink">Balcony Gardening</h3>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-ink/75">
              The core pillar. Pot selection, sunlight, watering, wind safety, and
              troubleshooting for the most common apartment growing space in India.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
            {balconyCount} guides →
          </div>
        </Link>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryPillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="flex flex-col rounded-[32px] border border-ink/10 bg-surface p-6 transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                  <Icon name={pillar.icon} className="h-5 w-5" />
                </span>
                <span className="shrink-0 rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{pillar.description}</p>
              <p className="mt-4 text-xs font-medium text-ink/50">{pillar.meta}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/guides"
          className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:text-ink"
        >
          See all guides →
        </Link>
      </section>

      {/* Plant Encyclopedia shortcuts */}
      <section className="border-y border-ink/10 bg-surface/50 font-body">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Just tell me what will survive
          </h2>
          <p className="mt-2 max-w-xl text-ink/70">
            Three starting points into the plant encyclopedia, already filtered.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {shortcuts.map((shortcut) => (
              <Link
                key={shortcut.title}
                href={{ pathname: "/plant-encyclopedia", query: shortcut.query }}
                className="flex flex-col rounded-[32px] border border-ink/10 bg-bg p-6 transition-colors hover:border-primary/40"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-2-100 text-accent-2-800">
                  <Icon name={shortcut.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{shortcut.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{shortcut.body}</p>
                <p className="mt-4 text-xs font-medium text-ink/50">{shortcut.count} plants →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Watering scheduler preview */}
      <section className="mx-auto max-w-6xl px-6 py-16 font-body">
        <div className="grid items-center gap-8 rounded-[32px] border border-ink/10 bg-surface p-8 sm:grid-cols-2 sm:p-10">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
              <Icon name="drop" className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-2xl text-ink">
              Not sure how often to water?
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Answer four quick questions about a plant and get a starting frequency, worked
              out from its type, pot size, the season, and where it sits.
            </p>
            <Link
              href="/tools/watering-scheduler"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:text-ink"
            >
              Open the watering scheduler →
            </Link>
          </div>
          <div className="rounded-[24px] border border-primary/20 bg-primary-soft/30 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Example: leafy plant, medium pot, summer, partial shade
            </p>
            <p className="mt-2 font-display text-2xl text-ink">{wateringPreview.frequency}</p>
            <p className="mt-3 text-sm leading-6 text-ink/70">{wateringPreview.plantNote}</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="relative overflow-hidden border-t border-ink/10 bg-accent-2-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-2-800/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-accent-700/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-2xl text-neutral-100 sm:text-3xl">
            One gardening tip a week
          </h2>
          <p className="mt-2 text-neutral-200/75">
            Short, seasonal, specific to Indian balconies. Unsubscribe anytime.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
