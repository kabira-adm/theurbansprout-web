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

const moreGuides = [
  {
    title: "Choosing potting mix and soil for balcony plants",
    description: "What to actually put in the pot, and how it changes for succulents, ornamentals, and flowering plants.",
    href: "/balcony-gardening/potting-mix-and-soil-for-balcony-plants",
  },
  {
    title: "Vertical gardening for narrow balconies",
    description: "Wall planters, tiered shelving, hanging pots, and railing planters for balconies with no floor space to spare.",
    href: "/balcony-gardening/vertical-gardening-narrow-balconies",
  },
  {
    title: "A ₹2,000 starter balcony garden",
    description: "A realistic budget breakdown for starting from zero: what to buy, what to skip, and where to shop.",
    href: "/balcony-gardening/budget-balcony-garden-starter-guide",
  },
  {
    title: "Balcony composting in small spaces",
    description: "Bokashi bins, small tumblers, and what kitchen waste is actually safe to compost without a terrace.",
    href: "/balcony-gardening/balcony-composting-small-spaces",
  },
  {
    title: "Organic pest control for open-air balconies",
    description: "Spotting and treating aphids, mealybugs, and spider mites without a single chemical spray.",
    href: "/balcony-gardening/organic-pest-control-balcony-plants",
  },
  {
    title: "Dealing with pigeons and birds on your balcony garden",
    description: "Deterrents that actually work, from spikes and netting to reflective devices, without harming the birds.",
    href: "/balcony-gardening/dealing-with-pigeons-balcony-garden",
  },
  {
    title: "A seasonal balcony gardening calendar for India",
    description: "What to plant, prune, and watch for through summer, monsoon, and winter, season by season.",
    href: "/balcony-gardening/seasonal-balcony-gardening-calendar-india",
  },
  {
    title: "Flowering plants for Indian balconies",
    description: "Which flowers actually bloom well in balcony sun and shade, bloom-season expectations, and deadheading basics.",
    href: "/balcony-gardening/flowering-plants-for-indian-balconies",
  },
  {
    title: "Balcony gardening for renters",
    description: "Fully portable, deposit-safe setups with nothing drilled into walls or railings, and plants that survive a move.",
    href: "/balcony-gardening/balcony-gardening-for-renters",
  },
  {
    title: "A fertilizing schedule for balcony plants",
    description: "How often to feed through growing and dormant seasons, and the signs of over- and under-feeding.",
    href: "/balcony-gardening/fertilizing-schedule-balcony-plants",
  },
  {
    title: "Balcony privacy screening with plants",
    description: "Climbers, bamboo screens, and trellis setups for balconies facing neighbours or a busy street.",
    href: "/balcony-gardening/balcony-privacy-screening-with-plants",
  },
  {
    title: "Small balcony vs. large balcony: different strategies",
    description: "Layout philosophy across the size range: zoning when you have space, prioritization when you don't.",
    href: "/balcony-gardening/small-vs-large-balcony-strategies",
  },
  {
    title: "High-rise balcony challenges",
    description: "Heat reflection off glass buildings and lower humidity at height: the microclimate that wind advice doesn't cover.",
    href: "/balcony-gardening/high-rise-balcony-challenges",
  },
  {
    title: "Grow lights for balconies with poor sun",
    description: "Whether a grow light is worth buying for a shaded balcony, what PPFD and full spectrum actually mean, and how to run one without a fat electricity bill.",
    href: "/balcony-gardening/grow-lights-for-balconies-with-poor-sun",
  },
];

const buyingGuides = [
  {
    title: "Plastic vs. terracotta pots",
    description: "A genuine comparison of weight, cost, drainage, heat, and breakage risk.",
    href: "/buying-guides/best-pots-balcony-gardening-india",
  },
  {
    title: "Best organic fertilizers",
    description: "Neem cake, bone meal, and NPK: what each one actually does.",
    href: "/buying-guides/best-organic-fertilizers-container-gardens-india",
  },
  {
    title: "Best potting mix ingredients",
    description: "Cocopeat and vermicompost, the two core components of a DIY mix.",
    href: "/buying-guides/best-potting-mix-ingredients-balcony-plants-india",
  },
  {
    title: "Best liquid fertilizer",
    description: "When liquid feeding beats granular, and our pick for a quick correction.",
    href: "/buying-guides/best-liquid-fertilizer-container-plants-india",
  },
];

const starterPlants = [
  {
    name: "Money Plant (Pothos)",
    note: "Tolerates low light and irregular watering, making it the most forgiving starting point.",
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
  alternates: { canonical: "/balcony-gardening" },
};

export default function BalconyGardening() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10 bg-surface/50 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Balcony Gardening
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Your balcony has opinions about sun, wind, and water. Learn to read them.
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Before choosing plants, figure out three things: how much direct sun the space gets,
            how exposed it is to wind, and how consistently you can water it. Almost every
            balcony-gardening failure traces back to guessing on one of these instead of checking.
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
          <h2 className="font-display text-2xl text-ink">More balcony gardening guides</h2>
          <p className="mt-2 text-ink/70">
            Once the basics are sorted, these cover the situations and problems that come up next:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {moreGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[32px] border border-ink/10 bg-neutral-100 p-6 transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
              >
                <h3 className="font-semibold text-ink">{guide.title}</h3>
                <p className="mt-1 text-sm leading-6 text-ink/70">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 font-body">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-2xl text-ink">A few beginner-friendly plants</h2>
          <p className="mt-2 text-ink/70">
            Good first choices while you learn your balcony&apos;s conditions:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {starterPlants.map((plant) => (
              <div key={plant.name} className="rounded-[32px] border border-ink/10 bg-surface p-6">
                <h3 className="font-semibold text-ink">{plant.name}</h3>
                <p className="mt-1 text-sm leading-6 text-ink/70">{plant.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-surface/50 font-body">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-2xl text-ink">Buying guides</h2>
          <p className="mt-2 text-ink/70">
            What we&apos;d actually buy, and why, for the pots, mix, and feed that come up
            constantly across these guides:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {buyingGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[32px] border border-ink/10 bg-neutral-100 p-6 transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
              >
                <h3 className="font-semibold text-ink">{guide.title}</h3>
                <p className="mt-1 text-sm leading-6 text-ink/70">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
