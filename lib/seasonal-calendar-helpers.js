// Combining logic for the Seasonal Planting Calendar
// (app/tools/seasonal-calendar/page.js, components/SeasonalCalendar.js).
// This is the "glue" layer on purpose: lib/regions-data.js (where is this
// place, climate-wise) and lib/plants-data.js (which season does this
// plant belong to) each stay standalone and don't know about each other,
// so this file is the only place that imports both and matches them up.
import { getAllPlants } from "@/lib/plants-data";
import { REGIONS, CITY_TO_REGION, STATE_TO_REGION, MONTH_NAMES } from "@/lib/regions-data";

// Real, computed at call time from the actual date, not a hardcoded
// "current month" anywhere. Returns 1-12 (January = 1), matching the
// month-number convention lib/regions-data.js uses.
export function getCurrentMonthNumber() {
  return new Date().getMonth() + 1;
}

export function getMonthName(monthNumber) {
  return MONTH_NAMES[monthNumber - 1];
}

// Every season key active (i.e. its sowMonths includes this month) for a
// region. A plains region can have 0, 1, or in a short transition window
// even 2 seasons active in the same month; the Himalayan region only
// ever has its single "growing" season or none.
export function getActiveSeasonsForMonth(regionId, monthNumber) {
  const region = REGIONS[regionId];
  if (!region) return [];
  return Object.entries(region.seasons)
    .filter(([, season]) => season.sowMonths.includes(monthNumber))
    .map(([key, season]) => ({ key, ...season }));
}

// Same idea, for harvest windows, used to give "right now" a fuller
// picture beyond just what to sow (e.g. a month can be a harvest month
// for one season and a sowing month for the next at the same time).
export function getActiveHarvestsForMonth(regionId, monthNumber) {
  const region = REGIONS[regionId];
  if (!region) return [];
  return Object.entries(region.seasons)
    .filter(([, season]) => season.harvestMonths.includes(monthNumber))
    .map(([key, season]) => ({ key, ...season }));
}

// The actual "what to plant" list for a region + month: every plant
// whose plantingSeasons (lib/plants-data.js) includes a season that's
// actively sowing in that region this month, plus anything marked
// "year-round" regardless of month. This is computed fresh from the two
// source files every time, not cached in a third table, so a new plant
// or a season-window edit shows up here automatically.
export function getPlantsForRegionMonth(regionId, monthNumber) {
  const activeSeasonKeys = getActiveSeasonsForMonth(regionId, monthNumber).map((s) => s.key);
  return getAllPlants().filter((plant) => {
    if (!plant.plantingSeasons) return false;
    if (plant.plantingSeasons.includes("year-round")) return true;
    return plant.plantingSeasons.some((season) => activeSeasonKeys.includes(season));
  });
}

// Every plant that's ever relevant to a region across the whole year,
// used for a compact "always fine to start" list independent of month
// (currently just the year-round entries, kept as its own helper so the
// component doesn't need to know that detail).
export function getYearRoundPlants() {
  return getAllPlants().filter((plant) => plant.plantingSeasons?.includes("year-round"));
}

// Builds the full 12-month view for a region in one pass: for each
// calendar month, which season(s) are actively sowing and which plants
// that implies. This is what components/SeasonalCalendar.js renders as
// the primary month-by-month lookup.
export function getFullYearForRegion(regionId) {
  return Array.from({ length: 12 }, (_, i) => {
    const monthNumber = i + 1;
    return {
      monthNumber,
      monthName: getMonthName(monthNumber),
      activeSeasons: getActiveSeasonsForMonth(regionId, monthNumber),
      activeHarvests: getActiveHarvestsForMonth(regionId, monthNumber),
      plants: getPlantsForRegionMonth(regionId, monthNumber),
    };
  });
}

// Resolves a typed city or state name to a region. Tries an exact
// case-insensitive city match first (the more specific, more common
// case), then falls back to state. Returns null if nothing matches,
// which the component treats as "keep typing" rather than an error.
export function resolveLocation(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;

  const cityEntry = Object.entries(CITY_TO_REGION).find(
    ([city]) => city.toLowerCase() === normalized
  );
  if (cityEntry) {
    return { name: cityEntry[0], type: "city", regionId: cityEntry[1] };
  }

  const stateEntry = Object.entries(STATE_TO_REGION).find(
    ([state]) => state.toLowerCase() === normalized
  );
  if (stateEntry) {
    return { name: stateEntry[0], type: "state", regionId: stateEntry[1] };
  }

  return null;
}

// Live-filtering suggestions as a visitor types, city and state entries
// mixed together, cities first (the more likely, more specific answer).
// Matches on a plain substring rather than requiring the start of the
// name, so "pur" still surfaces Jaipur, Nagpur, Kanpur, etc.
export function searchLocations(query, limit = 8) {
  const normalized = query.trim().toLowerCase();
  if (normalized.length < 2) return [];

  const cityMatches = Object.entries(CITY_TO_REGION)
    .filter(([city]) => city.toLowerCase().includes(normalized))
    .map(([city, regionId]) => ({ name: city, type: "city", regionId }));

  const stateMatches = Object.entries(STATE_TO_REGION)
    .filter(([state]) => state.toLowerCase().includes(normalized))
    .map(([state, regionId]) => ({ name: state, type: "state", regionId }));

  return [...cityMatches, ...stateMatches].slice(0, limit);
}
