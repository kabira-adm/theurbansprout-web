import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPlants, getPlantBySlug } from "@/lib/plants-data";

export function generateStaticParams() {
  return getAllPlants().map((plant) => ({ slug: plant.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) {
    return { title: "Plant not found" };
  }
  const title = `${plant.commonName} — Care Profile`;
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
    <div>
      <section className="border-b border-brand-sand bg-white/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link
            href="/plant-encyclopedia"
            className="text-sm font-medium text-brand-green hover:text-brand-green-dark"
          >
            ← Plant Encyclopedia
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-terracotta">
            {plant.category}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold leading-tight text-brand-green-dark sm:text-4xl">
              {plant.commonName}
            </h1>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                plant.petSafe
                  ? "bg-brand-green/10 text-brand-green"
                  : "bg-red-600/10 text-red-700"
              }`}
            >
              {plant.petSafe ? "🐾 Pet-safe" : "⚠ Not pet-safe"}
            </span>
          </div>
          <p className="mt-1 text-base italic text-brand-green-dark/60">{plant.scientificName}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="overflow-hidden rounded-xl border border-brand-sand bg-white">
          <dl className="divide-y divide-brand-sand">
            {FACTS_ORDER.map((fact) => (
              <div key={fact.key} className="grid grid-cols-3 gap-4 px-5 py-4">
                <dt className="text-sm font-semibold text-brand-green-dark/60">{fact.label}</dt>
                <dd className="col-span-2 text-sm font-medium text-brand-green-dark">
                  {plant[fact.key]}
                </dd>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-4 px-5 py-4">
              <dt className="text-sm font-semibold text-brand-green-dark/60">Pet safety</dt>
              <dd className="col-span-2 text-sm font-medium text-brand-green-dark">
                {plant.petSafe
                  ? "Non-toxic to cats and dogs."
                  : "Toxic or irritant to cats and dogs if chewed. Keep out of reach."}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 rounded-xl border border-brand-sand bg-brand-sand/30 p-5">
          <h2 className="text-sm font-semibold text-brand-green-dark">Growing note</h2>
          <p className="mt-2 text-sm leading-6 text-brand-green-dark/80">{plant.note}</p>
        </div>

        {plant.guideHref ? (
          <div className="mt-6">
            <Link
              href={plant.guideHref}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-green-dark"
            >
              Read the full guide →
            </Link>
          </div>
        ) : null}

        {related.length > 0 ? (
          <div className="mt-12 border-t border-brand-sand pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-green-dark/60">
              More {plant.category} plants
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/plant-encyclopedia/${r.slug}`}
                  className="rounded-lg border border-brand-sand bg-white px-4 py-3 text-sm font-medium text-brand-green-dark transition-colors hover:border-brand-green/40 hover:bg-brand-green/5"
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
