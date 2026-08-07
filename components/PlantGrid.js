"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Indoor", "Balcony", "Kitchen"];

const LIGHT_STYLES = {
  "Low light": "bg-brand-green-dark/10 text-brand-green-dark",
  "Partial sun": "bg-brand-terracotta/10 text-brand-terracotta",
  "Full sun": "bg-brand-terracotta/20 text-brand-terracotta",
};

const DIFFICULTY_STYLES = {
  Easy: "bg-brand-green/10 text-brand-green",
  Moderate: "bg-brand-terracotta/10 text-brand-terracotta",
  Challenging: "bg-red-600/10 text-red-700",
};

const CATEGORY_STYLES = {
  Indoor: "bg-brand-green-dark/10 text-brand-green-dark",
  Balcony: "bg-brand-green/10 text-brand-green",
  Kitchen: "bg-brand-terracotta/10 text-brand-terracotta",
};

export default function PlantGrid({ plants }) {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All" ? plants : plants.filter((plant) => plant.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              category === c
                ? "border-brand-green bg-brand-green text-white"
                : "border-brand-sand bg-white text-brand-green-dark/70 hover:border-brand-green/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs font-medium text-brand-green-dark/50">
        Showing {filtered.length} of {plants.length} plants
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((plant) => (
          <Link
            key={plant.slug}
            href={`/plant-encyclopedia/${plant.slug}`}
            className="flex flex-col rounded-xl border border-brand-sand bg-white p-5 transition-colors hover:border-brand-green/40 hover:bg-brand-green/5"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-brand-green-dark">{plant.commonName}</h3>
                <p className="mt-0.5 text-xs italic text-brand-green-dark/60">
                  {plant.scientificName}
                </p>
              </div>
              <span
                title={plant.petSafe ? "Pet-safe" : "Not pet-safe"}
                aria-label={plant.petSafe ? "Pet-safe" : "Not pet-safe"}
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                  plant.petSafe
                    ? "bg-brand-green/10 text-brand-green"
                    : "bg-red-600/10 text-red-700"
                }`}
              >
                {plant.petSafe ? "🐾 Safe" : "⚠ Not pet-safe"}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORY_STYLES[plant.category]}`}>
                {plant.category}
              </span>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${LIGHT_STYLES[plant.light]}`}>
                {plant.light}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${DIFFICULTY_STYLES[plant.difficulty]}`}
              >
                {plant.difficulty}
              </span>
            </div>

            <p className="mt-3 text-xs font-medium text-brand-green-dark/50">{plant.water}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
