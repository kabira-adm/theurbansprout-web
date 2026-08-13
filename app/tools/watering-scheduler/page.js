"use client";

import { useState } from "react";
import Link from "next/link";

const PLANT_TYPES = [
  {
    value: "succulent",
    label: "Succulent / Cactus",
    baseDays: 14,
    note: "Succulents and cacti store water in their leaves and stems and are far more likely to die from overwatering and root rot than from a missed watering session.",
  },
  {
    value: "leafy",
    label: "Leafy foliage plant (Pothos, ZZ, etc.)",
    baseDays: 6,
    note: "Leafy foliage plants like their soil to dry out between waterings but don't store much of a reserve, so they need more regular attention than succulents.",
  },
  {
    value: "flowering",
    label: "Flowering plant",
    baseDays: 4,
    note: "Flowering plants are actively pushing out buds and blooms and drink more steadily than foliage-only plants. Letting the soil go bone dry can cause bud drop.",
  },
  {
    value: "herb",
    label: "Herb",
    baseDays: 3,
    note: "Herbs typically have shallow, fast-drying root systems and wilt quickly once the top inch of soil dries out.",
  },
  {
    value: "vegetable",
    label: "Vegetable",
    baseDays: 2,
    note: "Fruiting vegetables need consistent soil moisture to avoid issues like blossom-end rot and cracking, so they're the least forgiving of missed waterings.",
  },
];

const POT_SIZES = [
  {
    value: "small",
    label: "Small (under 6in)",
    multiplier: 0.7,
    note: "a pot under 6in holds very little soil and dries out fast, so lean toward the shorter end",
  },
  {
    value: "medium",
    label: "Medium (6 to 10in)",
    multiplier: 1,
    note: null,
  },
  {
    value: "large",
    label: "Large (10in and above)",
    multiplier: 1.3,
    note: "a pot over 10in holds a lot more soil and moisture, so lean toward the longer end",
  },
];

const SEASONS = [
  {
    value: "summer",
    label: "Summer",
    multiplier: 0.6,
    note: "summer heat and wind pull moisture out of containers quickly",
  },
  {
    value: "monsoon",
    label: "Monsoon",
    multiplier: 1.3,
    note: "monsoon humidity, and rain doing part of the job for you, means soil stays damp much longer, so cut back on manual watering",
  },
  {
    value: "winter",
    label: "Winter",
    multiplier: 1.8,
    note: "growth slows down in winter and soil dries out far more slowly",
  },
];

const LOCATIONS = [
  {
    value: "fullsun",
    label: "Balcony, full sun",
    multiplier: 0.7,
    note: "full sun on a balcony speeds up evaporation",
  },
  {
    value: "partialshade",
    label: "Balcony, partial shade",
    multiplier: 1,
    note: null,
  },
  {
    value: "indoor",
    label: "Indoor",
    multiplier: 1.4,
    note: "indoor spots get less airflow and direct light, so soil stays wet far longer",
  },
];

function findOption(list, value) {
  return list.find((item) => item.value === value);
}

function formatFrequency(days) {
  const low = Math.max(1, Math.round(days * 0.8));
  const high = Math.max(low + 1, Math.round(days * 1.2));

  if (high <= 2) {
    return "Daily to every other day";
  }

  if (high >= 14) {
    const weeksLow = Math.max(1, Math.round(low / 7));
    const weeksHigh = Math.max(weeksLow, Math.round(high / 7));
    if (weeksLow === weeksHigh) {
      return `Roughly every ${weeksLow} week${weeksLow > 1 ? "s" : ""}`;
    }
    return `Roughly every ${weeksLow}-${weeksHigh} weeks`;
  }

  return `Every ${low}-${high} days`;
}

function calculate({ plantType, potSize, season, location }) {
  const plant = findOption(PLANT_TYPES, plantType);
  const pot = findOption(POT_SIZES, potSize);
  const seasonOption = findOption(SEASONS, season);
  const locationOption = findOption(LOCATIONS, location);

  const rawDays =
    plant.baseDays * pot.multiplier * seasonOption.multiplier * locationOption.multiplier;
  const days = Math.min(30, Math.max(1, rawDays));

  const frequency = formatFrequency(days);

  const modifierNotes = [seasonOption.note, locationOption.note, pot.note].filter(Boolean);
  let modifierSentence = null;
  if (modifierNotes.length > 0) {
    const joined = modifierNotes.join(", and ");
    modifierSentence = joined.charAt(0).toUpperCase() + joined.slice(1) + ".";
  }

  return {
    frequency,
    plantNote: plant.note,
    modifierSentence,
  };
}

// Matches the SELECT_CLASSES convention Phase 4 established in
// components/PlantGrid.js (border-ink/15, text-ink, focus:border-primary/40,
// min-h-11), with mt-2 added since this page stacks a visible label above
// each select rather than using a sr-only one.
const SELECT_CLASSES =
  "mt-2 w-full min-h-11 rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-primary/40 focus:outline-none";

export default function WateringSchedulerPage() {
  const [plantType, setPlantType] = useState("leafy");
  const [potSize, setPotSize] = useState("medium");
  const [season, setSeason] = useState("summer");
  const [location, setLocation] = useState("partialshade");
  const [result, setResult] = useState(null);

  function handleCalculate() {
    setResult(calculate({ plantType, potSize, season, location }));
  }

  return (
    <div>
      <section className="border-b border-brand-sand bg-white/60 font-body">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Tools
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Watering Scheduler
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
        <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-ink">Plant type</span>
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
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-ink">Pot size</span>
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
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-ink">Season</span>
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
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-ink">Location</span>
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
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary-soft/30 p-6">
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
