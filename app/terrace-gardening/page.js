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
    "Turn a bare terrace into a productive garden — structural load, waterproofing, raised beds vs containers, and plants that handle full sun and wind.",
};

export default function TerraceGardening() {
  return (
    <div>
      <section className="border-b border-brand-sand bg-white/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-terracotta">
            Terrace Gardening
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand-green-dark sm:text-4xl">
            Your terrace can carry more than potted plants — if you plan it first.
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-green-dark/75">
            A terrace is the biggest growing space most Indian homes ever get, and also the one
            most people undersell — a few loose pots, no real plan. Terrace gardening comes with
            questions a balcony never asks: how much weight the slab can safely take, whether the
            waterproofing can survive daily watering, and how to lay everything out so it doesn't
            turn into a flooded, wind-battered mess. Get those basics right first, then build up
            from raised beds or containers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-xl font-semibold text-brand-green-dark">Start here — the core guides</h2>
        <p className="mt-2 text-brand-green-dark/70">
          Read these in order if you're starting from scratch:
        </p>
        <ul className="mt-6 space-y-3">
          {guides.map((guide, i) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="flex items-center gap-3 rounded-lg border border-brand-sand bg-white px-4 py-3 text-sm font-medium text-brand-green-dark transition-colors hover:border-brand-green/40 hover:bg-brand-green/5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-xs font-semibold text-brand-green">
                  {i + 1}
                </span>
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-brand-sand bg-brand-sand/30">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-xl font-semibold text-brand-green-dark">A few plants built for terrace conditions</h2>
          <p className="mt-2 text-brand-green-dark/70">
            Good first choices for the sun and wind a terrace actually gets:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {starterPlants.map((plant) => (
              <div key={plant.name} className="rounded-xl border border-brand-sand bg-white p-5">
                <h3 className="font-semibold text-brand-green-dark">{plant.name}</h3>
                <p className="mt-1 text-sm leading-6 text-brand-green-dark/70">{plant.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
