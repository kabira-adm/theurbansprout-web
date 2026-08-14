// Watering Scheduler's calculation logic, extracted verbatim from
// app/tools/watering-scheduler/page.js so it has exactly one home. The
// scheduler page imports this for its own form, and the homepage's
// watering-scheduler preview card imports the same module rather than
// forking a second copy of the math. Nothing in this file changed in the
// move, only its location.

export const PLANT_TYPES = [
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

export const POT_SIZES = [
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

export const SEASONS = [
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

export const LOCATIONS = [
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

export function findOption(list, value) {
  return list.find((item) => item.value === value);
}

export function formatFrequency(days) {
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

export function calculate({ plantType, potSize, season, location }) {
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
