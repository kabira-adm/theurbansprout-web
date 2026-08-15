// Local icon set, same per-file convention as app/page.js's Icon and
// components/Nav.js's NavIcon.
function Icon({ name, className }) {
  const paths = {
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1v-9" />
      </>
    ),
    layers: (
      <>
        <path d="M12 3 3 8l9 5 9-5-9-5Z" />
        <path d="M3 13l9 5 9-5" />
      </>
    ),
    "list-checks": (
      <>
        <path d="M4 6l1.5 1.5L8 5" />
        <path d="M4 12l1.5 1.5L8 11" />
        <path d="M4 18l1.5 1.5L8 17" />
        <path d="M12 6h8M12 12h8M12 18h8" />
      </>
    ),
  };
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
      {paths[name]}
    </svg>
  );
}

const highlights = [
  {
    title: "Built for apartments",
    body: "No backyard assumed, ever. Every container size and layout idea is checked against what a real Indian balcony or window sill can hold.",
    icon: "home",
  },
  {
    title: "One hub at a time",
    body: "Balcony Gardening is published in full depth first. Indoor Plants, Kitchen Gardening, and the tools followed once that pillar was solid.",
    icon: "layers",
  },
  {
    title: "Actionable, not aspirational",
    body: "Every guide is written to be acted on today: quantities, timings, and steps, not just a nice photo and a vague suggestion.",
    icon: "list-checks",
  },
];

export const metadata = {
  title: "About",
  description:
    "Why Urban Sprout exists: practical gardening guidance built for Indian apartment homes, one topic at a time.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10 bg-surface/50 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">About</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Gardening advice sized for what you&apos;ve actually got: a balcony, not a backyard.
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-8 text-ink/75">
            <p>
              Most gardening content is written for people with backyards. Urban Sprout is written
              for the much larger group of Indian readers who don&apos;t have one: apartment
              dwellers working with a balcony, a window sill, or a few pots on a kitchen counter.
            </p>
            <p>
              That constraint shapes everything we publish: container sizes that fit real
              balconies, watering schedules that account for Indian summers and monsoons, and
              plant recommendations that survive hard tap water and limited direct sun.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 font-body">
        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[32px] border border-ink/10 bg-surface p-8">
          <p className="text-ink/80 leading-7">
            Every guide is meant to be specific enough to act on today, not just inspiration, but
            the actual steps. If a plant, a schedule, or a number doesn&apos;t match reality on
            your balcony, that&apos;s worth telling us, not silently working around.
          </p>
        </div>
      </section>
    </div>
  );
}
