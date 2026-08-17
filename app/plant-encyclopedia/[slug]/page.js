import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPlants, getPlantBySlug } from "@/lib/plants-data";
import PrintButton from "@/components/PrintButton";

// Same paw path as components/PlantGrid.js's PawIcon, kept as its own
// local copy per this codebase's per-file icon convention. crossedOut
// draws one diagonal stroke through the same paw for "not pet-safe"
// instead of pairing it with an unrelated warning-triangle emoji.
function PawIcon({ crossedOut = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="6" cy="9" r="1.6" />
      <circle cx="18" cy="9" r="1.6" />
      <circle cx="9.5" cy="5" r="1.6" />
      <circle cx="14.5" cy="5" r="1.6" />
      <path d="M12 12c-3.5 0-6 2.2-6 5a3 3 0 0 0 3 3c1.3 0 2-.6 3-.6s1.7.6 3 .6a3 3 0 0 0 3-3c0-2.8-2.5-5-6-5Z" />
      {crossedOut ? <path d="M3 3l18 18" /> : null}
    </svg>
  );
}

// Print-only masthead: hidden on screen (the real header already has
// this), shown just above the plant name when printing so a page pulled
// off a printer or saved as a PDF is still identifiable as an Urban
// Sprout sheet once it's off-screen. Same brand mark as components/Nav.js
// and components/Footer.js, kept as its own local copy per this
// codebase's per-file icon convention.
function PrintMasthead() {
  return (
    <div className="hidden items-center gap-2 print:mb-6 print:flex">
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="14" fill="#2E7D4F" />
        <path d="M14 21V13C14 9.68629 16.6863 7 20 7" stroke="#FBF8F1" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 21V16C14 13.7909 12.2091 12 10 12" stroke="#FBF8F1" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="text-sm font-semibold text-ink">Urban Sprout · Plant Care Sheet</span>
    </div>
  );
}

export function generateStaticParams() {
  return getAllPlants().map((plant) => ({ slug: plant.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) {
    return { title: "Plant not found" };
  }
  const title = `${plant.commonName}: Care Profile`;
  const description = `${plant.commonName} (${plant.scientificName}): light, watering, difficulty, mature size, and pet-safety for Indian apartments.`;
  const canonical = `/plant-encyclopedia/${slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

const FACTS_ORDER = [
  { key: "category", label: "Category" },
  { key: "light", label: "Light" },
  { key: "water", label: "Watering" },
  { key: "difficulty", label: "Difficulty" },
  { key: "matureSize", label: "Mature size" },
];

export default async function PlantProfile({ params }) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) {
    notFound();
  }

  const allPlants = getAllPlants();
  const currentIndex = allPlants.findIndex((p) => p.slug === plant.slug);
  const related = allPlants
    .filter((p) => p.category === plant.category && p.slug !== plant.slug)
    .slice(0, 3);

  return (
    // plant-print-sheet: a marker class with no styling of its own, used
    // by app/globals.css's `body:has(.plant-print-sheet) header/footer`
    // rule to hide the site chrome in print without touching Nav/Footer
    // directly (which would hide them in print sitewide, not just here).
    <div className="plant-print-sheet">
      <section className="border-b border-brand-sand bg-white/60">
        <div className="mx-auto max-w-3xl px-6 py-16 print:max-w-none print:px-0 print:py-0">
          <PrintMasthead />
          {/* Navigation and the print action itself: neither belongs on
              the printed sheet. PrintButton also carries its own
              print:hidden, this wrapper is the belt to its suspenders. */}
          <div className="flex items-center justify-between gap-4 print:hidden">
            <Link
              href="/plant-encyclopedia"
              className="text-sm font-medium text-primary hover:text-ink"
            >
              ← Plant Encyclopedia
            </Link>
            <PrintButton />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary print:mt-0">
            {plant.category}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              {plant.commonName}
            </h1>
            <span
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold print:border print:text-sm ${
                plant.petSafe
                  ? "bg-accent-green/10 text-accent-green print:border-accent-green"
                  : "bg-red-600/10 text-red-700 print:border-red-700"
              }`}
            >
              <PawIcon crossedOut={!plant.petSafe} />
              {plant.petSafe ? "Pet-safe" : "Not pet-safe"}
            </span>
          </div>
          <p className="mt-1 text-base italic text-ink/60">{plant.scientificName}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 print:max-w-none print:px-0 print:py-6">
        {/* print:bg-white on both cards below: browsers strip background
            colors during print by default unless the visitor explicitly
            enables "background graphics" in the print dialog, so the
            sheet is designed to read correctly either way, on a border
            rather than a fill for structure. print:rounded-none: the
            32px bubble corners read as app UI, not as a printed
            reference card. */}
        <div className="overflow-hidden rounded-[32px] border border-ink/10 bg-surface print:rounded-none print:border-ink/30 print:bg-white">
          <dl className="divide-y divide-ink/10 print:divide-ink/30">
            {FACTS_ORDER.map((fact) => (
              <div key={fact.key} className="grid grid-cols-3 gap-4 px-5 py-4">
                <dt className="text-sm font-semibold text-ink/60 print:text-base">{fact.label}</dt>
                <dd className="col-span-2 text-sm font-medium text-ink print:text-base">
                  {plant[fact.key]}
                </dd>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-4 px-5 py-4">
              <dt className="text-sm font-semibold text-ink/60 print:text-base">Pet safety</dt>
              <dd className="col-span-2 text-sm font-medium text-ink print:text-base">
                {plant.petSafe
                  ? "Non-toxic to cats and dogs."
                  : "Toxic or irritant to cats and dogs if chewed. Keep out of reach."}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 rounded-[32px] border border-ink/10 bg-primary-soft/30 p-5 print:rounded-none print:border-ink/30 print:bg-white print:p-5">
          <h2 className="text-sm font-semibold text-ink print:text-base">Growing note</h2>
          <p className="mt-2 text-sm leading-6 text-ink/80 print:text-base print:leading-7">{plant.note}</p>
        </div>

        {/* Internal navigation, not care information: hidden in print. */}
        {plant.guideHref ? (
          <div className="mt-6 print:hidden">
            <Link
              href={plant.guideHref}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-ink"
            >
              Read the full guide →
            </Link>
          </div>
        ) : null}

        {/* Cross-sell, not care information: hidden in print. */}
        {related.length > 0 ? (
          <div className="mt-12 border-t border-ink/10 pt-8 print:hidden">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/60">
              More {plant.category} plants
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/plant-encyclopedia/${r.slug}`}
                  className="flex min-h-11 items-center rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
                >
                  {r.commonName}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
