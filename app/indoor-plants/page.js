import Link from "next/link";

const guides = [
  {
    title: "Best low-light plants for Indian apartments",
    href: "/indoor-plants/low-light-indoor-plants-indian-apartments",
  },
  {
    title: "How to stop overwatering (the #1 killer)",
    href: "/indoor-plants/stop-overwatering-indoor-plants",
  },
  {
    title: "Pet-safe indoor plants for Indian homes",
    href: "/indoor-plants/pet-safe-indoor-plants-india",
  },
  {
    title: "Repotting: when and how",
    href: "/indoor-plants/repotting-indoor-plants-when-how",
  },
];

const starterPlants = [
  {
    name: "Snake Plant (Sansevieria)",
    note: "Handles low light and a missed watering or two without complaint, the easiest first plant.",
  },
  {
    name: "ZZ Plant (Zamioculcas)",
    note: "Grows well several feet from any window and stores water in its rhizomes, so it forgives neglect.",
  },
  {
    name: "Spider Plant",
    note: "Fast-growing, tolerant of hard tap water, and sends out babies you can pot up for free.",
  },
  {
    name: "Peace Lily",
    note: "Droops visibly when thirsty and perks back up within hours of watering, so it's hard to kill by accident.",
  },
];

export const metadata = {
  title: "Indoor Plants",
  description:
    "Low-light survivors, pet-safe picks, overwatering fixes, and repotting timelines for Indian apartment interiors.",
  alternates: { canonical: "/indoor-plants" },
};

export default function IndoorPlants() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10 bg-surface/50 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Indoor Plants
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Indoors, there&apos;s no monsoon around to bail you out.
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            No direct sun, no rain, no natural airflow: indoor plants live entirely on the light
            and water you give them. Most indoor plant deaths in Indian apartments come down to
            one habit: watering out of guilt or routine instead of checking what the plant
            actually needs. Fix that first, then work out light and placement room by room.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 font-body">
        <h2 className="font-display text-2xl text-ink">Start here: the core guides</h2>
        <p className="mt-2 text-ink/70">
          Read these in order if you&apos;re starting from scratch:
        </p>
        <ul className="mt-6 space-y-3">
          {guides.map((guide, i) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="flex min-h-11 items-center gap-3 rounded-lg border border-ink/10 bg-surface px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  {i + 1}
                </span>
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-ink/10 bg-surface/50 font-body">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-2xl text-ink">A few beginner-friendly plants</h2>
          <p className="mt-2 text-ink/70">
            Good first choices while you learn how much light your rooms really get:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {starterPlants.map((plant) => (
              <div key={plant.name} className="rounded-[32px] border border-ink/10 bg-bg p-6">
                <h3 className="font-semibold text-ink">{plant.name}</h3>
                <p className="mt-1 text-sm leading-6 text-ink/70">{plant.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
