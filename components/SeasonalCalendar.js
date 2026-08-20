"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";
import { REGIONS } from "@/lib/regions-data";
import {
  getCurrentMonthNumber,
  getMonthName,
  getActiveSeasonsForMonth,
  getActiveHarvestsForMonth,
  getPlantsForRegionMonth,
  getFullYearForRegion,
  resolveLocation,
  searchLocations,
} from "@/lib/seasonal-calendar-helpers";

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

// A handful of well-known cities across all five regions, one click to
// try the tool without typing anything, same "give the least-effort path
// a shortcut" reasoning as components/PlantGrid.js's category buttons.
const QUICK_CITIES = ["Delhi", "Jaipur", "Mumbai", "Kolkata", "Bangalore", "Shimla"];

// Renders a plant as a link to its Plant Encyclopedia entry when one
// exists (every plant with plantingSeasons in lib/plants-data.js has a
// slug, so this is always true today, but checked defensively in case a
// future plant gets plantingSeasons without a full encyclopedia entry).
function PlantChip({ plant }) {
  return (
    <Link
      href={`/plant-encyclopedia/${plant.slug}`}
      className="flex min-h-11 items-center rounded-full border border-ink/15 bg-white px-4 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
    >
      {plant.commonName}
    </Link>
  );
}

function SeasonBadge({ season }) {
  return (
    <span className="rounded-full bg-accent-green/10 px-2 py-0.5 text-xs font-semibold text-accent-green">
      {season.label}
    </span>
  );
}

export default function SeasonalCalendar() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const suggestions = useMemo(() => searchLocations(query), [query]);

  function pickLocation(location) {
    setSelected(location);
    setQuery("");
    trackEvent("seasonal_calendar_lookup", { location: location.name, region_id: location.regionId });
  }

  function pickCityByName(name) {
    const resolved = resolveLocation(name);
    if (resolved) {
      setSelected(resolved);
      trackEvent("seasonal_calendar_lookup", { location: resolved.name, region_id: resolved.regionId });
    }
  }

  function clearSelection() {
    setSelected(null);
    setQuery("");
  }

  if (!selected) {
    return (
      <div className="rounded-[32px] border border-ink/10 bg-surface p-6 sm:p-8">
        <label className="relative block">
          <span className="sr-only">Type your city or state</span>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your city, e.g. Jaipur, Kochi, Guwahati…"
            autoFocus
            className="w-full min-h-11 rounded-full border border-ink/15 bg-white py-2.5 pl-11 pr-4 text-sm text-ink focus:border-primary/40"
          />
        </label>

        {suggestions.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {suggestions.map((loc) => (
              <li key={`${loc.type}-${loc.name}`}>
                <button
                  type="button"
                  onClick={() => pickLocation(loc)}
                  className="flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border border-ink/10 bg-white px-4 py-2 text-left text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
                >
                  <span>{loc.name}</span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-ink/50">
                    {loc.type === "state" ? "state" : REGIONS[loc.regionId].shortLabel}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : query.trim().length >= 2 ? (
          <p className="mt-4 text-xs font-medium text-ink/50">
            No match yet. Not in our list? Try your state name instead, e.g. &ldquo;Rajasthan&rdquo;
            or &ldquo;Kerala&rdquo;, it still gives a real answer.
          </p>
        ) : (
          <div className="mt-5">
            <p className="text-xs font-medium text-ink/50">Or pick a city to try it:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {QUICK_CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => pickCityByName(city)}
                  className="flex min-h-11 items-center rounded-full border border-ink/15 bg-white px-4 text-sm font-medium text-ink/70 transition-colors hover:border-primary/40 hover:text-ink"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const region = REGIONS[selected.regionId];
  const currentMonthNumber = getCurrentMonthNumber();
  const currentMonthName = getMonthName(currentMonthNumber);
  const activeSeasons = getActiveSeasonsForMonth(selected.regionId, currentMonthNumber);
  const activeHarvests = getActiveHarvestsForMonth(selected.regionId, currentMonthNumber);
  const plantsNow = getPlantsForRegionMonth(selected.regionId, currentMonthNumber);
  const fullYear = getFullYearForRegion(selected.regionId);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink/70">
          Showing results for <strong className="text-ink">{selected.name}</strong>
          {selected.type === "state" ? " (by state)" : ""}, mapped to the{" "}
          <strong className="text-ink">{region.name}</strong> region.
        </p>
        <button
          type="button"
          onClick={clearSelection}
          className="flex min-h-11 items-center text-sm font-semibold text-primary hover:text-ink"
        >
          Change city →
        </button>
      </div>

      <div className="mt-3 rounded-2xl border border-ink/10 bg-surface/60 p-4 text-xs leading-5 text-ink/60">
        This uses broad regional patterns, not hyper-local data. India&apos;s climate has real
        local variation even within a region, so treat this as a solid starting point and adjust
        for what your own balcony is actually telling you.
      </div>

      {/* Right now */}
      <div className="mt-6 rounded-[32px] border border-primary/30 bg-primary-soft/40 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Right now, {currentMonthName}
        </p>
        {activeSeasons.length > 0 ? (
          <>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <h2 className="font-display text-2xl text-ink">What to plant this month</h2>
              {activeSeasons.map((s) => (
                <SeasonBadge key={s.key} season={s} />
              ))}
            </div>
            {plantsNow.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {plantsNow.map((plant) => (
                  <PlantChip key={plant.slug} plant={plant} />
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-ink/70">
                It&apos;s a sowing month for {region.name}, but nothing in our current plant list
                matches it specifically. Check the full guide for this pillar for more options.
              </p>
            )}
          </>
        ) : (
          <>
            <h2 className="mt-2 font-display text-2xl text-ink">
              Not a major sowing month in {region.name}
            </h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              {activeHarvests.length > 0
                ? `This is more of a harvest and maintenance month (${activeHarvests
                    .map((h) => h.label)
                    .join(", ")}) than a sowing one. `
                : ""}
              These are still fine to start any time of year, regardless of season:
            </p>
            {plantsNow.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {plantsNow.map((plant) => (
                  <PlantChip key={plant.slug} plant={plant} />
                ))}
              </div>
            ) : null}
          </>
        )}
        <p className="mt-5 text-xs text-ink/50">{region.description}</p>
      </div>

      {/* Full 12-month view */}
      <div className="mt-10">
        <h2 className="font-display text-xl text-ink">The full year, month by month</h2>
        <p className="mt-2 text-sm text-ink/70">
          Look up any month directly, whether or not you know which season it falls in.
        </p>
        <div className="mt-5 space-y-3">
          {fullYear.map((month) => (
            <div
              key={month.monthNumber}
              className={`rounded-2xl border p-4 sm:p-5 ${
                month.monthNumber === currentMonthNumber
                  ? "border-primary/40 bg-primary-soft/30"
                  : "border-ink/10 bg-surface"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-ink">{month.monthName}</h3>
                {month.monthNumber === currentMonthNumber ? (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-white">
                    This month
                  </span>
                ) : null}
                {month.activeSeasons.map((s) => (
                  <span key={s.key} className="text-xs font-medium text-ink/50">
                    {s.label}
                  </span>
                ))}
              </div>
              {month.plants.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {month.plants.map((plant) => (
                    <PlantChip key={plant.slug} plant={plant} />
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-sm text-ink/50">
                  No new sowing recommended this month in {region.shortLabel} India.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
