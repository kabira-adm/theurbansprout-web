import Link from "next/link";

const pillars = [
  {
    name: "Balcony Gardening",
    href: "/balcony-gardening",
    articles: [
      { title: "Choosing the right pot size and drainage", href: "/balcony-gardening/choosing-pot-size-drainage-balcony" },
      { title: "Reading your balcony's sunlight", href: "/balcony-gardening/reading-balcony-sunlight" },
      { title: "A realistic watering schedule for summer and monsoon", href: "/balcony-gardening/watering-schedule-indian-summers-monsoons" },
      { title: "Wind and railing safety for high-floor balconies", href: "/balcony-gardening/wind-railing-safety-high-floor-balconies" },
      { title: "Fixing the most common balcony gardening mistakes", href: "/balcony-gardening/common-balcony-gardening-mistakes" },
      { title: "Choosing potting mix and soil for balcony plants", href: "/balcony-gardening/potting-mix-and-soil-for-balcony-plants" },
      { title: "Vertical gardening for narrow balconies", href: "/balcony-gardening/vertical-gardening-narrow-balconies" },
      { title: "A ₹2,000 starter balcony garden", href: "/balcony-gardening/budget-balcony-garden-starter-guide" },
      { title: "Balcony composting in small spaces", href: "/balcony-gardening/balcony-composting-small-spaces" },
      { title: "Organic pest control for open-air balconies", href: "/balcony-gardening/organic-pest-control-balcony-plants" },
      { title: "Dealing with pigeons and birds on your balcony garden", href: "/balcony-gardening/dealing-with-pigeons-balcony-garden" },
      { title: "A seasonal balcony gardening calendar for India", href: "/balcony-gardening/seasonal-balcony-gardening-calendar-india" },
    ],
  },
  {
    name: "Indoor Plants",
    href: "/indoor-plants",
    articles: [
      { title: "Best low-light plants for Indian apartments", href: "/indoor-plants/low-light-indoor-plants-indian-apartments" },
      { title: "How to stop overwatering (the #1 killer)", href: "/indoor-plants/stop-overwatering-indoor-plants" },
      { title: "Pet-safe indoor plants for Indian homes", href: "/indoor-plants/pet-safe-indoor-plants-india" },
      { title: "Repotting: when and how", href: "/indoor-plants/repotting-indoor-plants-when-how" },
    ],
  },
  {
    name: "Kitchen Gardening",
    href: "/kitchen-gardening",
    articles: [
      { title: "Growing coriander and mint in containers (India edition)", href: "/kitchen-gardening/growing-coriander-mint-containers-india" },
      { title: "Growing tomatoes and chillies in balcony containers", href: "/kitchen-gardening/growing-tomatoes-chillies-balcony-containers" },
      { title: "Kitchen scraps you can actually regrow (and ones you can't)", href: "/kitchen-gardening/kitchen-scraps-regrow-vegetables" },
      { title: "Soil and fertilizer basics for container vegetables", href: "/kitchen-gardening/soil-and-fertilizer-basics-container-vegetables" },
      { title: "Organic pest control for kitchen garden vegetables (safe to eat)", href: "/kitchen-gardening/organic-pest-control-kitchen-garden-vegetables", isNew: true },
    ],
  },
  {
    name: "Terrace Gardening",
    href: "/terrace-gardening",
    articles: [
      { title: "Is your terrace ready? Load, waterproofing, and layout", href: "/terrace-gardening/is-your-terrace-ready-load-waterproofing-layout" },
      { title: "Raised beds vs containers for terrace gardening in India", href: "/terrace-gardening/raised-beds-vs-containers-terrace-gardening-india" },
      { title: "Full sun, full wind: terrace gardening in India", href: "/terrace-gardening/full-sun-full-wind-terrace-gardening-india" },
      { title: "Common terrace gardening mistakes (and how to avoid them)", href: "/terrace-gardening/common-terrace-gardening-mistakes", isNew: true },
    ],
  },
];

export const metadata = {
  title: "All Articles",
  description:
    "Every Urban Sprout guide in one place — balcony, indoor, kitchen, and terrace gardening for Indian homes, newest first within each pillar.",
};

export default function Articles() {
  const totalCount = pillars.reduce((sum, p) => sum + p.articles.length, 0);

  return (
    <div>
      <section className="border-b border-brand-sand bg-white/60">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-terracotta">
            Archive
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-brand-green-dark sm:text-4xl">
            All articles
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-green-dark/75">
            {totalCount} guides across all four pillars, grouped by topic. New guides are added
            regularly. Anything published in the last few days is marked{" "}
            <span className="rounded-full bg-brand-green/10 px-2 py-0.5 text-xs font-semibold text-brand-green">
              New
            </span>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 space-y-14">
        {pillars.map((pillar) => (
          <div key={pillar.href}>
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-semibold text-brand-green-dark">{pillar.name}</h2>
              <Link
                href={pillar.href}
                className="text-sm font-medium text-brand-green hover:text-brand-green-dark"
              >
                Pillar hub →
              </Link>
            </div>
            <ul className="mt-5 space-y-3">
              {pillar.articles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="flex items-center justify-between gap-3 rounded-lg border border-brand-sand bg-white px-4 py-3 text-sm font-medium text-brand-green-dark transition-colors hover:border-brand-green/40 hover:bg-brand-green/5"
                  >
                    <span>{article.title}</span>
                    {article.isNew ? (
                      <span className="shrink-0 rounded-full bg-brand-green/10 px-2 py-0.5 text-xs font-semibold text-brand-green">
                        New
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
