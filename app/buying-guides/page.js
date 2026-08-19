import Link from "next/link";

const guides = [
  {
    title: "Best Pots for Balcony Gardening in India: Plastic vs. Terracotta",
    description:
      "A genuine comparison of plastic and terracotta pots: weight, cost, drainage, heat, and breakage risk.",
    href: "/buying-guides/best-pots-balcony-gardening-india",
  },
  {
    title: "Best Organic Fertilizers for Indian Container Gardens",
    description:
      "Neem cake, bone meal, and NPK explained: what each one actually does and when to use it.",
    href: "/buying-guides/best-organic-fertilizers-container-gardens-india",
  },
  {
    title: "Best Potting Mix Ingredients for Balcony Plants in India",
    description: "Cocopeat and vermicompost, the two core ingredients of a DIY potting mix.",
    href: "/buying-guides/best-potting-mix-ingredients-balcony-plants-india",
  },
  {
    title: "Best Liquid Fertilizer for Container Plants in India",
    description:
      "When liquid feeding beats granular fertilizer, and what humic and fulvic acid actually do.",
    href: "/buying-guides/best-liquid-fertilizer-container-plants-india",
  },
];

export const metadata = {
  title: "Buying Guides",
  description:
    "Product comparisons and recommendations for Indian balcony and container gardening: pots, fertilizers, and potting mix ingredients, based on real, verified products.",
  alternates: { canonical: "/buying-guides" },
};

export default function BuyingGuides() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10 bg-surface/50 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Buying Guides
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            What to actually buy, and why
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Product comparisons, not just links. Every recommendation here is a specific, checked
            product, chosen for a reason we explain, not swapped in from a generic listing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 font-body">
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="flex flex-col rounded-[32px] border border-ink/10 bg-neutral-100 p-6 transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
            >
              <h2 className="font-semibold text-ink">{guide.title}</h2>
              <p className="mt-1 text-sm leading-6 text-ink/70">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
