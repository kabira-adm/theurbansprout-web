import Link from "next/link";
import SeasonalCalendar from "@/components/SeasonalCalendar";

const TITLE = "Seasonal Planting Calendar";
const DESCRIPTION =
  "What to plant this month, personalized to your city. Type your city or state and get India-region-specific sowing months, not generic advice.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tools/seasonal-calendar" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/tools/seasonal-calendar",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function SeasonalCalendarPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-brand-sand bg-white/60 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Tools</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Seasonal Planting Calendar
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            India&apos;s planting calendar runs on three seasons, Kharif, Rabi, and Zaid, not the
            four most gardening advice assumes, and the exact sowing months shift depending on
            where you actually are. Type your city below for a calendar built around your
            region, not one generic answer for the whole country.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 font-body">
        <SeasonalCalendar />

        <p className="mt-8 text-sm text-ink/60">
          For care tasks through the year, watering, pruning, and what to watch for each season,
          not just what to sow, see{" "}
          <Link
            href="/balcony-gardening/seasonal-balcony-gardening-calendar-india"
            className="font-medium text-primary hover:text-ink"
          >
            a seasonal balcony gardening calendar for India
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
