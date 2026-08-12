import { getAllPlants } from "@/lib/plants-data";
import PlantGrid from "@/components/PlantGrid";

export const metadata = {
  title: "Plant Encyclopedia",
  description:
    "A quick-reference database of 28 plants for Indian apartments — light, watering frequency, difficulty, mature size, and pet safety at a glance.",
  alternates: { canonical: "/plant-encyclopedia" },
};

export default function PlantEncyclopedia() {
  const plants = getAllPlants();

  return (
    <div>
      <section className="border-b border-brand-sand bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-terracotta">
            Reference
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand-green-dark sm:text-4xl">
            Plant Encyclopedia
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-green-dark/75">
            A lookup table, not an article. {plants.length} plants covering light needs, how
            often to water, difficulty, mature size, and whether they&apos;re safe around pets. Search
            by name or filter by category, light, difficulty, and pet safety, then click through
            for the full profile.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <PlantGrid plants={plants} />
      </section>
    </div>
  );
}
