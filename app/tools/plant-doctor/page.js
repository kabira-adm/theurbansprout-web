import Link from "next/link";
import PlantDoctor from "@/components/PlantDoctor";

const TITLE = "Plant Doctor";
const DESCRIPTION =
  "Work through a plant's symptoms step by step to find the likely cause, and the Urban Sprout guide that covers the fix.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tools/plant-doctor" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/plant-doctor",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PlantDoctorPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-brand-sand bg-white/60 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Tools</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Plant Doctor</h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Answer a couple of quick questions about what your plant is doing, and get pointed to
            the specific Urban Sprout guide that covers the likely fix. This is a simple,
            rule-based triage tool built on the site&apos;s own care guides, not an AI diagnosis —
            for the full picture, always read the linked guide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 font-body">
        <PlantDoctor />

        <p className="mt-8 text-sm text-ink/60">
          Looking for a specific plant&apos;s care details instead?{" "}
          <Link href="/plant-encyclopedia" className="font-medium text-primary hover:text-ink">
            Browse the Plant Encyclopedia →
          </Link>
        </p>
      </section>
    </div>
  );
}
