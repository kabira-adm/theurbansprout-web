import Link from "next/link";
import { getAllPlants } from "@/lib/plants-data";
import PlantGrid from "@/components/PlantGrid";

// Same local-icon convention as the rest of the site: each file owns its
// own icon paths. A plus-in-a-badge reads as "diagnostic/medical" without
// needing a literal stethoscope glyph.
function PlantDoctorIcon({ className }) {
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
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
}

function CalendarIcon({ className }) {
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
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </svg>
  );
}

export const metadata = {
  title: "Plant Encyclopedia",
  description:
    "A quick-reference database of 28 plants for Indian apartments: light, watering frequency, difficulty, mature size, and pet safety at a glance.",
  alternates: { canonical: "/plant-encyclopedia" },
};

export default function PlantEncyclopedia() {
  const plants = getAllPlants();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-brand-sand bg-white/60">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Reference
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Plant Encyclopedia
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
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

      <section className="border-t border-ink/10 bg-surface/50 font-body">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col items-start gap-5 rounded-[32px] border border-primary/30 bg-primary-soft/40 p-6 sm:p-8">
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                  <PlantDoctorIcon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-display text-xl text-ink">
                  Not sure what&apos;s wrong with a plant?
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink/75">
                  Work through its symptoms with Plant Doctor, a quick step-by-step tool that
                  points you to the right guide instead of a generic answer.
                </p>
              </div>
              <Link
                href="/tools/plant-doctor"
                className="flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:brightness-90"
              >
                Try Plant Doctor →
              </Link>
            </div>

            <div className="flex flex-col items-start gap-5 rounded-[32px] border border-primary/30 bg-primary-soft/40 p-6 sm:p-8">
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                  <CalendarIcon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-display text-xl text-ink">
                  What should I plant this month?
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink/75">
                  Type your city into the Seasonal Planting Calendar for what to sow right now,
                  specific to your region, not generic India-wide advice.
                </p>
              </div>
              <Link
                href="/tools/seasonal-calendar"
                className="flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:brightness-90"
              >
                Open the calendar →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
