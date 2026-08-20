"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PLANT_TYPES,
  POT_SIZES,
  SEASONS,
  LOCATIONS,
  calculate,
} from "@/lib/watering-calc";
import { trackEvent } from "@/lib/analytics";

// Matches the SELECT_CLASSES convention Phase 4 established in
// components/PlantGrid.js (border-ink/15, text-ink, focus:border-primary/40,
// min-h-11, rounded-full, as corrected in Phase 6), with mt-2 added since
// this page stacks a visible label above each select rather than using a
// sr-only one. No focus:outline-none, the global :focus-visible rule in
// globals.css handles this now.
//
// bg-neutral-100, not PlantGrid's bg-surface: PlantGrid's selects sit
// directly on the page background, where bg-surface reads as a distinct
// tan field. Here they sit inside a bg-surface card (below), so bg-surface
// fields were nearly invisible against it, just a border away from
// disappearing into the card. bg-neutral-100 is the same lighter "distinct
// surface" token components/PlantGrid.js's plant cards and
// app/balcony-gardening/page.js's guide cards already use for exactly
// this: standing out from a bg-surface/bg background.
//
// appearance-none + pr-9 added the same way PlantGrid.js's DROPDOWN_CLASSES
// was: at appearance: auto (the default), the browser draws its own native
// focus/dropdown chrome on top of the site's own focus-visible outline,
// which is what made that outline look doubled and offset-less on a
// <select> specifically. ChevronDownIcon below replaces the native arrow
// this removes.
const SELECT_CLASSES =
  "w-full min-h-11 appearance-none rounded-full border border-ink/15 bg-neutral-100 pl-4 pr-9 py-2.5 text-sm text-ink focus:border-primary/40";

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

export default function WateringSchedulerPage() {
  const [plantType, setPlantType] = useState("leafy");
  const [potSize, setPotSize] = useState("medium");
  const [season, setSeason] = useState("summer");
  const [location, setLocation] = useState("partialshade");
  const [result, setResult] = useState(null);

  function handleCalculate() {
    setResult(calculate({ plantType, potSize, season, location }));
    trackEvent("watering_scheduler_generated", { plantType, potSize, season, location });
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-brand-sand bg-white/60 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Tools
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Stop watering on vibes.
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Answer four quick questions about a plant and get a starting watering frequency,
            worked out from its type, pot size, the season, and where it sits. It&apos;s a
            starting guideline, not a substitute for checking the soil. Use it alongside the{" "}
            <Link
              href="/balcony-gardening/watering-schedule-indian-summers-monsoons"
              className="font-semibold text-primary hover:text-ink"
            >
              finger test
            </Link>{" "}
            to confirm before you actually water.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 font-body">
        <div className="rounded-[32px] border border-ink/10 bg-surface p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-ink">Plant type</span>
              <div className="relative mt-2">
                <select
                  value={plantType}
                  onChange={(e) => setPlantType(e.target.value)}
                  className={SELECT_CLASSES}
                >
                  {PLANT_TYPES.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-ink">Pot size</span>
              <div className="relative mt-2">
                <select
                  value={potSize}
                  onChange={(e) => setPotSize(e.target.value)}
                  className={SELECT_CLASSES}
                >
                  {POT_SIZES.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-ink">Season</span>
              <div className="relative mt-2">
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className={SELECT_CLASSES}
                >
                  {SEASONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-ink">Location</span>
              <div className="relative mt-2">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={SELECT_CLASSES}
                >
                  {LOCATIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon />
              </div>
            </label>
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            className="mt-8 flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:brightness-90"
          >
            Calculate watering frequency
          </button>

          {result ? (
            <div className="mt-8 rounded-[32px] border border-primary/20 bg-primary-soft/30 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Suggested frequency
              </p>
              <p className="mt-2 font-display text-2xl text-ink">
                {result.frequency}
              </p>
              <p className="mt-4 text-sm leading-6 text-ink/75">{result.plantNote}</p>
              {result.modifierSentence ? (
                <p className="mt-2 text-sm leading-6 text-ink/75">
                  {result.modifierSentence}
                </p>
              ) : null}
              <p className="mt-4 text-xs text-ink/60">
                Before watering on that day, push a finger about 2 inches into the soil. If
                it&apos;s still damp, wait. Read more in{" "}
                <Link
                  href="/balcony-gardening/watering-schedule-indian-summers-monsoons"
                  className="font-semibold text-primary hover:text-ink"
                >
                  A realistic watering schedule for Indian summers and monsoons
                </Link>
                .
              </p>
            </div>
          ) : (
            <p className="mt-8 text-sm text-ink/60">
              Pick the options above and hit calculate to see a suggested frequency.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
