export const metadata = {
  title: "About",
  description:
    "Why Urban Sprout exists: practical gardening guidance built for Indian apartment homes, one topic at a time.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-terracotta">About</p>
      <h1 className="mt-3 text-3xl font-semibold text-brand-green-dark sm:text-4xl">
        Gardening advice for the space you actually have.
      </h1>
      <div className="mt-8 space-y-6 text-brand-green-dark/80 leading-7">
        <p>
          Most gardening content is written for people with backyards. Urban Sprout is written
          for the much larger group of Indian readers who don&apos;t have one: apartment
          dwellers working with a balcony, a window sill, or a few pots on a kitchen counter.
        </p>
        <p>
          That constraint shapes everything we publish: container sizes that fit real balconies,
          watering schedules that account for Indian summers and monsoons, and plant
          recommendations that survive hard tap water and limited direct sun.
        </p>
        <p>
          We&apos;re building the site one topic at a time rather than covering everything at
          once. Balcony Gardening is the first hub, published in depth. Indoor Plants and Kitchen
          Gardening are next, followed by tools like a watering scheduler and a plant care
          database.
        </p>
        <p>
          Every guide is meant to be specific enough to act on today, not just inspiration, but
          the actual steps.
        </p>
      </div>
    </div>
  );
}
