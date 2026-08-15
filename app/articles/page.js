import Link from "next/link";
import { pillars } from "@/lib/articles-data";

// Same local-icon convention as components/Nav.js and app/guides/page.js:
// each file owns its own icon paths rather than sharing an icon component.
function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export const metadata = {
  title: "All Articles",
  description:
    "Every Urban Sprout guide in one place: balcony, indoor, kitchen, and terrace gardening for Indian homes, newest first within each pillar.",
  alternates: { canonical: "/articles" },
};

export default function Articles() {
  const totalCount = pillars.reduce((sum, p) => sum + p.articles.length, 0);

  return (
    <div>
      <section className="border-b border-brand-sand bg-white/60 font-body">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Archive
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            All articles
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            {totalCount} guides across all four pillars, grouped by topic. New guides are added
            regularly. Anything published in the last few days is marked{" "}
            <span className="rounded-full bg-accent-green/10 px-2 py-0.5 text-xs font-semibold text-accent-green">
              New
            </span>
            .
          </p>
          <Link
            href="/search"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 bg-surface px-4 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
          >
            <SearchIcon />
            Search articles by name
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 space-y-14 font-body">
        {pillars.map((pillar) => (
          <div key={pillar.href}>
            <div className="flex items-baseline justify-between">
              <h2 className="text-xl font-semibold text-ink">{pillar.name}</h2>
              <Link
                href={pillar.href}
                className="inline-flex min-h-11 items-center text-sm font-medium text-primary hover:text-ink"
              >
                Pillar hub →
              </Link>
            </div>
            <ul className="mt-5 space-y-3">
              {pillar.articles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="flex min-h-11 items-center justify-between gap-3 rounded-lg border border-ink/10 bg-surface px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
                  >
                    <span>{article.title}</span>
                    {article.isNew ? (
                      <span className="shrink-0 rounded-full bg-accent-green/10 px-2 py-0.5 text-xs font-semibold text-accent-green">
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
