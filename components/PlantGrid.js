"use client";

import { useMemo, useState } from "react";
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
const SELECT_CLASSES =
  "w-full min-h-11 rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-primary/40 focus:outline-none";

export default function PlantGrid({ plants }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [light, setLight] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [petSafe, setPetSafe] = useState("All");

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

        <label className="block">
          <span className="sr-only">Filter by light</span>
          <select value={light} onChange={(e) => setLight(e.target.value)} className={SELECT_CLASSES}>
            {LIGHT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === "All" ? "Any light" : option}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Filter by difficulty</span>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className={SELECT_CLASSES}
          >
            {DIFFICULTY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option === "All" ? "Any difficulty" : option}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Filter by pet safety</span>
          <select value={petSafe} onChange={(e) => setPetSafe(e.target.value)} className={SELECT_CLASSES}>
            {PET_SAFE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 text-xs font-medium text-ink/50">
        Showing {filtered.length} of {plants.length} plants
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-ink/15 bg-white/60 px-5 py-12 text-center">
          <p className="text-sm font-medium text-ink/70">
            No plants match your search and filters.
          </p>
          <p className="mt-1 text-xs text-ink/50">
            Try clearing a filter or searching a different name.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((plant) => (
            <Link
              key={plant.slug}
              href={`/plant-encyclopedia/${plant.slug}`}
              className="flex flex-col rounded-xl border border-ink/10 bg-white p-5 transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
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
                  className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    plant.petSafe
                      ? "bg-accent-green/10 text-accent-green"
                      : "bg-red-600/10 text-red-700"
                  }`}
                >
                  {plant.petSafe ? "🐾 Safe" : "⚠ Not pet-safe"}
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
