"use client";

import { useState } from "react";
import Link from "next/link";
import { SYMPTOMS, TREE } from "@/lib/plant-doctor-data";
import { trackEvent } from "@/lib/analytics";

// Rule-based click-through, not a form: every click both records the
// choice (for the breadcrumb and Back) and immediately advances, no
// submit button, matching components/PlantGrid.js's live-interaction
// convention applied to a step flow instead of a filter grid.
//
// `choices` and `nodes` are parallel stacks: choices[i] is the label the
// visitor picked at step i, nodes[i] is the tree node that choice led to.
// Index 0 is always the top-level symptom pick. Back pops one level off
// both; Start over clears both back to the symptom picker.
export default function PlantDoctor() {
  const [choices, setChoices] = useState([]);
  const [nodes, setNodes] = useState([]);

  const atSymptomPicker = choices.length === 0;
  const current = atSymptomPicker ? null : nodes[nodes.length - 1];

  function pickSymptom(symptom) {
    setChoices([symptom.label]);
    setNodes([TREE[symptom.id]]);
  }

  function pickOption(option) {
    setChoices((c) => [...c, option.label]);
    setNodes((n) => [...n, option.next]);
    if (option.next?.diagnosis) {
      trackEvent("plant_doctor_diagnosis", {
        diagnosis: option.next.title,
        symptom_path: [...choices, option.label].join(" → "),
      });
    }
  }

  function handleBack() {
    if (nodes.length > 0) {
      setChoices((c) => c.slice(0, -1));
      setNodes((n) => n.slice(0, -1));
    }
  }

  function handleStartOver() {
    setChoices([]);
    setNodes([]);
  }

  return (
    <div className="rounded-[32px] border border-ink/10 bg-surface p-6 sm:p-8">
      {!atSymptomPicker ? (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="flex min-h-11 items-center gap-1 text-sm font-semibold text-primary hover:text-ink"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={handleStartOver}
            className="flex min-h-11 items-center text-sm font-medium text-ink/50 hover:text-ink"
          >
            Start over
          </button>
        </div>
      ) : null}

      {choices.length > 0 ? (
        <p className="mt-2 text-xs font-medium text-ink/50">{choices.join(" → ")}</p>
      ) : null}

      {atSymptomPicker ? (
        <div className={choices.length > 0 ? "mt-4" : undefined}>
          <h2 className="font-display text-xl text-ink">What&apos;s the main symptom?</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {SYMPTOMS.map((symptom, i) => (
              <button
                key={symptom.id}
                type="button"
                onClick={() => pickSymptom(symptom)}
                className="flex min-h-11 items-center gap-3 rounded-lg border border-ink/10 bg-white px-4 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                  {i + 1}
                </span>
                {symptom.label}
              </button>
            ))}
          </div>
        </div>
      ) : current.diagnosis ? (
        <div className="mt-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Likely diagnosis
          </p>
          <h2 className="mt-2 font-display text-2xl text-ink">{current.title}</h2>
          <p className="mt-3 leading-7 text-ink/75">{current.explanation}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={current.href}
              className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:brightness-90"
            >
              {current.linkLabel} →
            </Link>
            <button
              type="button"
              onClick={handleStartOver}
              className="flex min-h-11 items-center justify-center rounded-full border border-ink/20 px-5 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              Start over
            </button>
          </div>
          <p className="mt-6 text-xs text-ink/50">
            This is a likely cause based on the symptoms described, not a certain diagnosis. If it
            doesn&apos;t match what you&apos;re seeing, try{" "}
            <button type="button" onClick={handleBack} className="font-medium text-primary hover:text-ink">
              going back a step
            </button>{" "}
            or read the linked guide for the fuller picture.
          </p>
        </div>
      ) : (
        <div className="mt-4">
          <h2 className="font-display text-xl text-ink">{current.question}</h2>
          <div className="mt-5 space-y-3">
            {current.options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => pickOption(option)}
                className="flex min-h-11 w-full items-center rounded-lg border border-ink/10 bg-white px-4 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-soft/20"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
