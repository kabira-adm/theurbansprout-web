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
    description:
      "The core pillar. Pot selection, sunlight, watering, wind safety, and troubleshooting for the most common apartment growing space in India.",
  },
  {
    title: "Indoor Plants",
    href: "/indoor-plants",
    badge: "Beginner",
    description:
      "Low-maintenance houseplants for low light, pet safety, and the most common way indoor plants actually die: overwatering.",
  },
  {
    title: "Kitchen Gardening",
    href: "/kitchen-gardening",
    badge: "Some effort",
    description:
      "Growing vegetables and herbs you actually eat: tomatoes, chillies, coriander, mint, and organic pest control safe enough to spray on food.",
  },
  {
    title: "Terrace Gardening",
    href: "/terrace-gardening",
    badge: "Advanced",
    description:
      "For bigger spaces with real structural considerations: waterproofing, raised beds versus containers, and full-sun exposure.",
  },
  {
    title: "Plant Encyclopedia",
    href: "/plant-encyclopedia",
    badge: "Reference",
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
      <section className="border-b border-brand-sand bg-white/60 font-body">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Guides</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">All guides</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Five ways into Urban Sprout, from a full pillar guide to a quick plant lookup.
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
                <h2 className="font-display text-xl text-ink">{pillar.title}</h2>
                <span className="shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary">
                  {pillar.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/70">{pillar.description}</p>
              <p className="mt-4 text-xs font-medium text-ink/50">{countFor(pillar)}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
