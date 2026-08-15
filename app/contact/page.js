// Local icon set, same per-file convention as app/page.js's Icon and
// components/Nav.js's NavIcon.
function Icon({ name, className }) {
  const paths = {
    mail: (
      <>
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
        <path d="M3.5 7 12 13l8.5-6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    sprout: (
      <>
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z" />
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

const expectations = [
  {
    title: "A real person reads it",
    body: "No ticketing system, no auto-reply loop. Every message lands in one inbox we actually check.",
    icon: "mail",
  },
  {
    title: "A few days, not a few minutes",
    body: "We reply as soon as we reasonably can, usually within a few days, not instantly.",
    icon: "clock",
  },
  {
    title: "Article fixes and requests welcome",
    body: "Wrong watering interval, a plant that behaved differently, a topic we haven't covered yet, tell us.",
    icon: "sprout",
  },
];

export const metadata = {
  title: "Contact",
  description: "Get in touch with Urban Sprout.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10 bg-surface/50 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Say hi. Or yell about your dying money plant.
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Have a question about a guide, a plant that&apos;s not behaving the way an article
            said it would, or a topic you&apos;d like us to cover? We&apos;d like to hear it.
          </p>
          <a
            href="mailto:hello@theurbansprout.in"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:brightness-90"
          >
            <Icon name="mail" className="h-4 w-4" />
            hello@theurbansprout.in
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 font-body">
        <div className="grid gap-8 sm:grid-cols-3">
          {expectations.map((item) => (
            <div key={item.title}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
