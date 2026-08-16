"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// Fixed display order for pillar sections, matching lib/articles-data.js's
// own pillars array order (also the order the pillar filter buttons below
// render in). Not derived from the `articles` prop, same reasoning as
// components/PlantGrid.js's hardcoded CATEGORIES: there are exactly four
// pillars and that isn't expected to change casually.
const PILLAR_ORDER = ["Balcony Gardening", "Indoor Plants", "Kitchen Gardening", "Terrace Gardening"];
const PILLAR_FILTERS = ["All", ...PILLAR_ORDER];

// One colored badge per pillar so a card's pillar reads at a glance,
// especially useful once the "All" filter mixes all four pillars into one
// scan. Reuses existing tokens rather than new colors (this codebase's
// palette is closed, see app/globals.css's @theme block), the same way
// components/PlantGrid.js's DIFFICULTY_STYLES gives each difficulty its
// own color from the existing palette rather than one uniform badge.
const PILLAR_BADGE_STYLES = {
  "Balcony Gardening": "bg-primary-soft text-primary",
  "Indoor Plants": "bg-accent-2-100 text-accent-2-800",
  "Kitchen Gardening": "bg-accent-green/10 text-accent-green",
  "Terrace Gardening": "bg-accent-100 text-accent-700",
};

// min-h-11 alone (not flex + items-center), same reasoning as
// components/PlantGrid.js's SELECT_CLASSES comment: this class also
// applies to a native <select>, and display:flex on a native select
// renders inconsistently across browsers.
const INPUT_CLASSES =
  "w-full min-h-11 rounded-full border border-ink/15 bg-surface px-4 py-2.5 text-sm text-ink focus:border-primary/40";

// appearance-none + pr-9 + ChevronDownIcon below: PlantGrid.js's selects
// were originally left at appearance: auto, which let the browser draw its
// own native focus/dropdown chrome on top of the site's :focus-visible
// outline, and on the pet-safety filter that showed up as a visibly
// broken, gap-less focus ring. Building this sort <select> with
// appearance-none from the start avoids reintroducing that bug here.
const SORT_CLASSES = `${INPUT_CLASSES} appearance-none pr-9`;

const SORT_OPTIONS = [
  { value: "newest", label: "Newest first" },
  { value: "az", label: "A–Z" },
];

// No article on this site has a real publish date (checked every article
// page.js's metadata, ArticleLayout usage, and JSON-LD block; see
// lib/articles-data.js's comment). `order` is each article's index within
// its pillar's array in lib/articles-data.js, and every pillar's array
// happens to already read oldest-to-newest: none of Balcony's 18 articles
// are flagged isNew, while Kitchen's and Terrace's isNew: true article is
// the last entry in each of their arrays. Sorting by `order` descending is
// therefore a reasonable proxy for "newest first", not a real date, and
// that distinction is called out explicitly in this PR's description.
const SORTERS = {
  newest: (a, b) => b.order - a.order,
  az: (a, b) => a.title.localeCompare(b.title),
};

function ChevronDownIcon() {
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
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/40"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function ArticlesExplorer({ articles, pillars }) {
  const [pillarFilter, setPillarFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const pillarHrefByName = useMemo(
    () => Object.fromEntries(pillars.map((pillar) => [pillar.name, pillar.href])),
    [pillars]
  );

  // Filters first (pillar + title search), matching against the article
  // title only, per spec, not description or pillar name. Grouping and
  // sorting happen after, in a second pass, so the "Showing X of 31"
  // count below reflects the filtered set regardless of how it's grouped.
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articles.filter((article) => {
      if (pillarFilter !== "All" && article.pillarName !== pillarFilter) return false;
      if (query && !article.title.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [articles, pillarFilter, search]);

  const groups = useMemo(() => {
    const sorter = SORTERS[sort];
    return PILLAR_ORDER.map((pillarName) => ({
      pillarName,
      href: pillarHrefByName[pillarName],
      items: filtered.filter((a) => a.pillarName === pillarName).sort(sorter),
    })).filter((group) => group.items.length > 0);
  }, [filtered, sort, pillarHrefByName]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {PILLAR_FILTERS.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setPillarFilter(name)}
            className={`flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
              pillarFilter === name
                ? "border-primary bg-primary text-white"
                : "border-ink/15 bg-white text-ink/70 hover:border-primary/40"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="sr-only">Search articles by title</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles by title…"
            className={INPUT_CLASSES}
          />
        </label>

        <label className="relative block sm:w-56">
          <span className="sr-only">Sort articles</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className={SORT_CLASSES}>
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon />
        </label>
      </div>

      <p className="mt-4 text-xs font-medium text-ink/50">
        Showing {filtered.length} of {articles.length} articles
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-[32px] border border-dashed border-ink/15 bg-surface/60 px-5 py-12 text-center">
          <p className="text-sm font-medium text-ink/70">
            No articles match your search and filters.
          </p>
          <p className="mt-1 text-xs text-ink/50">
            Try clearing a filter or searching a different title.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-14">
          {groups.map((group) => (
            <div key={group.pillarName}>
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-semibold text-ink">
                  {group.pillarName} ({group.items.length})
                </h2>
                <Link
                  href={group.href}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-primary hover:text-ink"
                >
                  Pillar hub →
                </Link>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="flex flex-col rounded-[32px] border border-ink/10 bg-neutral-100 p-6 transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${PILLAR_BADGE_STYLES[article.pillarName]}`}
                      >
                        {article.pillarName}
                      </span>
                      {article.isNew ? (
                        <span className="shrink-0 rounded-full bg-accent-green/10 px-2 py-0.5 text-xs font-semibold text-accent-green">
                          New
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-3 font-semibold text-ink">{article.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/70">{article.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
