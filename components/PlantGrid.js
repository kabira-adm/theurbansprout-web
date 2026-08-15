"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Indoor", "Balcony", "Kitchen"];
const LIGHT_OPTIONS = ["All", "Low light", "Partial sun", "Full sun"];
const DIFFICULTY_OPTIONS = ["All", "Easy", "Moderate", "Challenging"];
const PET_SAFE_OPTIONS = [
  { value: "All", label: "All" },
  { value: "safe", label: "Pet-safe only" },
  { value: "unsafe", label: "Not pet-safe" },
];

// Only four v2 tokens exist (primary, primary-soft, ink, accent-green),
// narrower than the old three-way brand-color system this replaces.
// Category and light badges collapse to one uniform style each, since
// their text already distinguishes the values without needing a color
// per option. Difficulty and pet-safe keep per-value color, since those
// are the two things worth a glance-level distinction, and red on
// Challenging / Not pet-safe is safety-relevant information, not a
// brand color, so it stays red rather than folding into the palette.
const CATEGORY_BADGE_CLASS = "bg-primary-soft text-ink";
const LIGHT_BADGE_CLASS = "bg-accent-green/10 text-accent-green";

const DIFFICULTY_STYLES = {
  Easy: "bg-accent-green/10 text-accent-green",
  Moderate: "bg-primary-soft text-primary",
  Challenging: "bg-red-600/10 text-red-700",
};

// min-h-11 alone (not flex + items-center) since this class also applies
// to a native <select>, and display:flex on a native select renders
// inconsistently across browsers (Safari and Firefox in particular).
// A plain min-height is the safe way to guarantee the 44px tap target
// on form elements without touching their internal rendering.
// rounded-full and bg-surface per the design system source: inputs go
// fully pill, not rounded-lg, and sit on --color-surface, not white.
// No focus:outline-none, the global :focus-visible rule in globals.css
// handles this now.
const SELECT_CLASSES =
  "w-full min-h-11 rounded-full border border-ink/15 bg-surface px-4 py-2.5 text-sm text-ink focus:border-primary/40";

// Real <select> elements only (not the text input above, which keeps
// SELECT_CLASSES as-is): appearance-none strips each browser's own native
// dropdown chrome, which otherwise draws its own focus/hover treatment on
// top of ours and is what produced the odd double-outline on the pet-safe
// filter when it was left at appearance: auto. ChevronDownIcon below
// replaces the native arrow appearance-none removes, so there's still a
// visible affordance that this is a dropdown, styled in the same
// line-icon language as the rest of the site rather than a browser
// default. pr-9 leaves room for that icon without touching SELECT_CLASSES'
// shared px-4 (mixing px-4 with a later pr-9 override is a real risk:
// Tailwind's generated stylesheet order, not className order, decides
// which one wins).
const DROPDOWN_CLASSES = `${SELECT_CLASSES} appearance-none pr-9`;

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

// Same paw silhouette as app/page.js's Icon "paw" path (the homepage's
// "Safe around pets" shortcut card), reused here rather than imported so
// this file keeps owning its own icon paths, matching the rest of the
// codebase's per-file icon convention. crossedOut draws one diagonal
// stroke through it for "not pet-safe", the same paw rather than a
// disconnected warning-triangle emoji, so the safe/unsafe badges read as
// two states of one icon instead of two unrelated symbols.
function PawIcon({ crossedOut = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="6" cy="9" r="1.6" />
      <circle cx="18" cy="9" r="1.6" />
      <circle cx="9.5" cy="5" r="1.6" />
      <circle cx="14.5" cy="5" r="1.6" />
      <path d="M12 12c-3.5 0-6 2.2-6 5a3 3 0 0 0 3 3c1.3 0 2-.6 3-.6s1.7.6 3 .6a3 3 0 0 0 3-3c0-2.8-2.5-5-6-5Z" />
      {crossedOut ? <path d="M3 3l18 18" /> : null}
    </svg>
  );
}

export default function PlantGrid({ plants }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [light, setLight] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [petSafe, setPetSafe] = useState("All");

  // Reads a starting filter from the URL query string (?category=, ?light=,
  // ?petSafe=) so links elsewhere on the site, the homepage "shortcuts"
  // cards, can deep-link into a pre-filtered view. Deliberately a
  // post-mount effect, not a useState lazy initializer: this component is
  // server-rendered first with the plain "All" defaults, and reading
  // window.location during the initial render would make the client's
  // first render disagree with that server-rendered HTML. Rendering the
  // plain defaults first, then updating once the URL has been read, is
  // the correct fix for that (same reasoning as components/ArticleTOC.js's
  // identical disable), not a lint nitpick to route around. Doesn't touch
  // the useMemo filter logic below, only seeds the same state setters it
  // already had.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get("category");
    const urlLight = params.get("light");
    const urlPetSafe = params.get("petSafe");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (urlCategory && CATEGORIES.includes(urlCategory)) setCategory(urlCategory);
    if (urlLight && LIGHT_OPTIONS.includes(urlLight)) setLight(urlLight);
    if (urlPetSafe && PET_SAFE_OPTIONS.some((option) => option.value === urlPetSafe)) {
      setPetSafe(urlPetSafe);
    }
  }, []);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return plants.filter((plant) => {
      if (category !== "All" && plant.category !== category) return false;
      if (light !== "All" && plant.light !== light) return false;
      if (difficulty !== "All" && plant.difficulty !== difficulty) return false;
      if (petSafe === "safe" && !plant.petSafe) return false;
      if (petSafe === "unsafe" && plant.petSafe) return false;
      if (
        query &&
        !plant.commonName.toLowerCase().includes(query) &&
        !plant.scientificName.toLowerCase().includes(query)
      ) {
        return false;
      }
      return true;
    });
  }, [plants, category, search, light, difficulty, petSafe]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
              category === c
                ? "border-primary bg-primary text-white"
                : "border-ink/15 bg-white text-ink/70 hover:border-primary/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block sm:col-span-2 lg:col-span-1">
          <span className="sr-only">Search plants</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name…"
            className={SELECT_CLASSES}
          />
        </label>

        <label className="relative block">
          <span className="sr-only">Filter by light</span>
          <select value={light} onChange={(e) => setLight(e.target.value)} className={DROPDOWN_CLASSES}>
            {LIGHT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === "All" ? "Any light" : option}
              </option>
            ))}
          </select>
          <ChevronDownIcon />
        </label>

        <label className="relative block">
          <span className="sr-only">Filter by difficulty</span>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className={DROPDOWN_CLASSES}
          >
            {DIFFICULTY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === "All" ? "Any difficulty" : option}
              </option>
            ))}
          </select>
          <ChevronDownIcon />
        </label>

        <label className="relative block">
          <span className="sr-only">Filter by pet safety</span>
          <select value={petSafe} onChange={(e) => setPetSafe(e.target.value)} className={DROPDOWN_CLASSES}>
            {PET_SAFE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon />
        </label>
      </div>

      <p className="mt-4 text-xs font-medium text-ink/50">
        Showing {filtered.length} of {plants.length} plants
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-[32px] border border-dashed border-ink/15 bg-surface/60 px-5 py-12 text-center">
          <p className="text-sm font-medium text-ink/70">
            No plants match your search and filters.
          </p>
          <p className="mt-1 text-xs text-ink/50">
            Try clearing a filter or searching a different name.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* bg-neutral-100 (a warm off-white, not bg-surface's tan) so cards
              read as light against the page's own bg-surface/bg background,
              rather than blending into it. */}
          {filtered.map((plant) => (
            <Link
              key={plant.slug}
              href={`/plant-encyclopedia/${plant.slug}`}
              className="flex flex-col rounded-[32px] border border-ink/10 bg-neutral-100 p-5 transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-ink">{plant.commonName}</h3>
                  <p className="mt-0.5 text-xs italic text-ink/60">
                    {plant.scientificName}
                  </p>
                </div>
                <span
                  title={plant.petSafe ? "Pet-safe" : "Not pet-safe"}
                  aria-label={plant.petSafe ? "Pet-safe" : "Not pet-safe"}
                  className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    plant.petSafe
                      ? "bg-accent-green/10 text-accent-green"
                      : "bg-red-600/10 text-red-700"
                  }`}
                >
                  <PawIcon crossedOut={!plant.petSafe} />
                  {plant.petSafe ? "Safe" : "Not pet-safe"}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORY_BADGE_CLASS}`}>
                  {plant.category}
                </span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${LIGHT_BADGE_CLASS}`}>
                  {plant.light}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${DIFFICULTY_STYLES[plant.difficulty]}`}
                >
                  {plant.difficulty}
                </span>
              </div>

              <p className="mt-3 text-xs font-medium text-ink/50">{plant.water}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
