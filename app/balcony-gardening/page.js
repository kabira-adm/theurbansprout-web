import Link from "next/link";

const guides = [
  {
    title: "Choosing the right pot size and drainage",
    href: "/balcony-gardening/choosing-pot-size-drainage-balcony",
  },
  {
    title: "Reading your balcony's sunlight",
    href: "/balcony-gardening/reading-balcony-sunlight",
  },
  {
    title: "A realistic watering schedule for summer and monsoon",
    href: "/balcony-gardening/watering-schedule-indian-summers-monsoons",
  },
  {
    title: "Wind and railing safety for high-floor balconies",
    href: "/balcony-gardening/wind-railing-safety-high-floor-balconies",
  },
  {
    title: "Fixing the most common balcony gardening mistakes",
    href: "/balcony-gardening/common-balcony-gardening-mistakes",
  },
];

const starterPlants = [
  {
    name: "Money Plant (Pothos)",
    note: "Tolerates low light and irregular watering — the most forgiving starting point.",
  },
  {
    name: "Curry Leaf Plant",
    note: "Thrives in full sun and is genuinely useful in an Indian kitchen.",
  },
  {
    name: "Aloe Vera",
    note: "Needs very little water; rots faster from overwatering than neglect.",
  },
  {
    name: "Marigold",
    note: "Fast-growing, sun-loving, and a good gauge of how much light your balcony gets.",
  },
];

export const metadata = {
  title: "Balcony Gardening",
  description:
    "Start here: containers, sunlight, watering, and the plants that actually survive Indian balconies.",
};

export default function BalconyGardening() {
  return (
    <div>
      <section className="border-b border-brand-sand bg-white/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-terracotta">
            Balcony Gardening
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand-green-dark sm:text-4xl">
            Everything starts with knowing your balcony.
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-green-dark/75">
            Before choosing plants, figure out three things: how much direct sun the space gets,
            how exposed it is to wind, and how consistently you can water it. Almost every
            balcony-gardening failure traces back to guessing on one of these instead of checking.
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
          <h2 className="text-xl font-semibold text-brand-green-dark">A few beginner-friendly plants</h2>
          <p className="mt-2 text-brand-green-dark/70">
            Good first choices while you learn your balcony's conditions:
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
