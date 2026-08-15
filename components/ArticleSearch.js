"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

function SearchIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

const MIN_QUERY_LENGTH = 2;

// Client-side search over the full article list (components/PlantGrid.js's
// text-filter pattern, applied to lib/articles-data.js's flattened list
// instead of the plant encyclopedia). No backend or search index: ~30
// articles is small enough that filtering the whole list on every keystroke
// is free, and it means this works the same in dev and in the actual
// Railway build without wiring up a search service.
export default function ArticleSearch({ articles }) {
  const [query, setQuery] = useState("");
  const [seeded, setSeeded] = useState(false);

  // Reads a starting query from ?q= so /articles, the nav, and any other
  // page can deep-link into a pre-filled search (same reasoning and same
  // post-mount-effect pattern as components/PlantGrid.js's ?category= /
  // ?light= / ?petSafe= reads: this renders the plain empty-query state on
  // the server first, then fills in the URL's query after mount, so the
  // server and first client render agree and there's no hydration mismatch).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlQuery = params.get("q");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (urlQuery) setQuery(urlQuery);
    setSeeded(true);
  }, []);

  // Keeps the URL in sync as the user types, so the search is shareable and
  // survives a refresh, without a full navigation on every keystroke.
  // Skipped until the initial ?q= read above has run, so it can't clobber
  // that read by writing the empty starting state back out first.
  useEffect(() => {
    if (!seeded) return;
    const url = new URL(window.location.href);
    if (query.trim()) {
      url.searchParams.set("q", query);
    } else {
      url.searchParams.delete("q");
    }
    window.history.replaceState(null, "", url);
  }, [query, seeded]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < MIN_QUERY_LENGTH) return [];
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(q) || article.pillarName.toLowerCase().includes(q)
    );
  }, [articles, query]);

  const trimmed = query.trim();
  const showEmptyState = trimmed.length > 0 && trimmed.length < MIN_QUERY_LENGTH;

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search articles</span>
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles by title or topic…"
          autoFocus
          className="w-full min-h-11 rounded-full border border-ink/15 bg-surface py-2.5 pl-11 pr-4 text-sm text-ink focus:border-primary/40"
        />
      </label>

      {showEmptyState ? (
        <p className="mt-4 text-xs font-medium text-ink/50">Keep typing…</p>
      ) : trimmed.length === 0 ? (
        <p className="mt-4 text-xs font-medium text-ink/50">
          {articles.length} articles across all four pillars. Start typing to filter.
        </p>
      ) : results.length === 0 ? (
        <div className="mt-6 rounded-[32px] border border-dashed border-ink/15 bg-surface/60 px-5 py-12 text-center">
          <p className="text-sm font-medium text-ink/70">
            No articles match &ldquo;{trimmed}&rdquo;.
          </p>
          <p className="mt-1 text-xs text-ink/50">
            Try a shorter search, or browse the{" "}
            <Link href="/articles" className="font-medium text-primary hover:text-ink">
              full archive
            </Link>
            .
          </p>
        </div>
      ) : (
        <>
          <p className="mt-4 text-xs font-medium text-ink/50">
            {results.length} match{results.length === 1 ? "" : "es"}
          </p>
          <ul className="mt-3 space-y-3">
            {results.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  className="flex min-h-11 flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-lg border border-ink/10 bg-surface px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
                >
                  <span>{article.title}</span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-ink/70">
                      {article.pillarName}
                    </span>
                    {article.isNew ? (
                      <span className="rounded-full bg-accent-green/10 px-2 py-0.5 text-xs font-semibold text-accent-green">
                        New
                      </span>
                    ) : null}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
