import Link from "next/link";

const guides = [
  {
    title: "Is your terrace ready? Load, waterproofing, and layout",
    href: "/terrace-gardening/is-your-terrace-ready-load-waterproofing-layout",
  },
  {
    title: "Raised beds vs containers for terrace gardening in India",
    href: "/terrace-gardening/raised-beds-vs-containers-terrace-gardening-india",
  },
  {
    title: "Full sun, full wind: terrace gardening in India",
    href: "/terrace-gardening/full-sun-full-wind-terrace-gardening-india",
  },
  {
    title: "Common terrace gardening mistakes (and how to avoid them)",
    href: "/terrace-gardening/common-terrace-gardening-mistakes",
  },
];

const starterPlants = [
  {
    name: "Bougainvillea",
    note: "Shrugs off full sun and strong wind better than almost anything else, and does well in a large pot or raised bed.",
  },
  {
    name: "Curry Leaf Tree",
    note: "Handles terrace heat and wind once established, and rewards you with leaves you'll actually use in the kitchen.",
  },
  {
    name: "Hibiscus",
    note: "A tough, fast-flowering shrub that tolerates the harsher light and airflow terraces get compared to balconies.",
  },
  {
    name: "Aloe Vera",
    note: "Stores its own water and copes with wind rocking the pot far better than leafy, shallow-rooted plants do.",
  },
];

export const metadata = {
  title: "Terrace Gardening",
  description:
    "Turn a bare terrace into a productive garden: structural load, waterproofing, raised beds vs containers, and plants that handle full sun and wind.",
  alternates: { canonical: "/terrace-gardening" },
};

export default function TerraceGardening() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10 bg-surface/50 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Terrace Gardening
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Your terrace can carry more than potted plants, if you plan it first.
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            A terrace is the biggest growing space most Indian homes ever get, and also the one
            most people undersell, with a few loose pots and no real plan. Terrace gardening comes with
            questions a balcony never asks: how much weight the slab can safely take, whether the
            waterproofing can survive daily watering, and how to lay everything out so it doesn&apos;t
            turn into a flooded, wind-battered mess. Get those basics right first, then build up
            from raised beds or containers.
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
          <h2 className="font-display text-2xl text-ink">A few plants built for terrace conditions</h2>
          <p className="mt-2 text-ink/70">
            Good first choices for the sun and wind a terrace actually gets:
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
