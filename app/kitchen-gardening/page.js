import Link from "next/link";

const guides = [
  {
    title: "Growing coriander and mint in containers (India edition)",
    href: "/kitchen-gardening/growing-coriander-mint-containers-india",
  },
  {
    title: "Growing tomatoes and chillies in balcony containers",
    href: "/kitchen-gardening/growing-tomatoes-chillies-balcony-containers",
  },
  {
    title: "Kitchen scraps you can actually regrow (and ones you can't)",
    href: "/kitchen-gardening/kitchen-scraps-regrow-vegetables",
  },
  {
    title: "Soil and fertilizer basics for container vegetables",
    href: "/kitchen-gardening/soil-and-fertilizer-basics-container-vegetables",
  },
  {
    title: "Organic pest control for kitchen garden vegetables (safe to eat)",
    href: "/kitchen-gardening/organic-pest-control-kitchen-garden-vegetables",
  },
];

const starterPlants = [
  {
    name: "Coriander (Dhania)",
    note: "Sows from kitchen seed in days and is ready to harvest in three to four weeks, the fastest win for a new grower.",
  },
  {
    name: "Mint (Pudina)",
    note: "Grows from a cutting in a glass of water and spreads fast, so give it its own pot rather than sharing one.",
  },
  {
    name: "Green Chilli",
    note: "Handles full balcony sun and heat better than most vegetables, and one healthy plant keeps fruiting for months.",
  },
  {
    name: "Curry Leaf (Kadi Patta)",
    note: "A slow-growing but near-permanent plant for a sunny corner. Once established, it survives most neglect.",
  },
];

export const metadata = {
  title: "Kitchen Gardening",
  description:
    "Grow herbs and vegetables in containers on an Indian balcony or kitchen counter: coriander, mint, tomatoes, chillies, and regrowing from scraps.",
  alternates: { canonical: "/kitchen-gardening" },
};

export default function KitchenGardening() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10 bg-surface/50 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Kitchen Gardening
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            You don&apos;t need a farm to stop buying coriander every week.
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            A kitchen garden is just a handful of containers doing one job well: fresh herbs and a
            few vegetables within reach of your kitchen. In Indian apartments that usually means a
            sunny balcony ledge or a window grille, hard tap water, and containers small enough to
            move when the summer sun gets brutal. Start with something fast and forgiving,
            like coriander or mint, before you commit a whole balcony to tomatoes.
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
            Good first choices for a kitchen garden that actually gets used:
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
