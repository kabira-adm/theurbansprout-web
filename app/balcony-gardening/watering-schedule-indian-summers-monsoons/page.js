import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "A Realistic Watering Schedule for Indian Summers and Monsoons",
  description:
    "Why a fixed watering schedule fails across Indian seasons, and the finger-test method that actually works year-round.",
};

export default function Article() {
  return (
    <ArticleLayout
      title="A realistic watering schedule for Indian summers and monsoons"
      description="A fixed 'water every 2 days' rule breaks the moment the season changes. Here's what to do instead."
      readTime="6 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "A Realistic Watering Schedule for Indian Summers and Monsoons",
        description:
          "Why a fixed watering schedule fails across Indian seasons, and the finger-test method that actually works year-round.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Overwatering, not underwatering, is the more common way balcony plants die in India — and
        it usually happens because someone is following a fixed schedule instead of checking the
        soil. The schedule that worked in March can drown a plant in July.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">The finger test, first</h2>
      <p>
        Before watering, push a finger about 2 inches into the soil. If it&apos;s dry at that
        depth, water. If it&apos;s still damp, wait a day and check again. This single habit
        replaces the need for a fixed schedule entirely, across every season.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Summer (roughly March to June)</h2>
      <p>
        Heat and wind pull moisture out of containers fast, especially in smaller pots. Most
        potted plants need water daily during peak summer, ideally early morning so the plant has
        moisture before the heat sets in. Avoid watering in the harsh afternoon sun, when a large
        share evaporates before it reaches the roots.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Monsoon (roughly June to September)</h2>
      <p>
        This is when overwatering does the most damage, because rain is doing part of the job for
        you and containers can stay waterlogged for days. Two adjustments matter more than
        anything else:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Move pots under an overhang if heavy, continuous rain is expected — a few hours of rain is fine, days of standing water is not</li>
        <li>Double-check that drainage holes aren't blocked; this is the season they get tested the most</li>
      </ul>
      <p>
        Skip manual watering entirely on days with steady rainfall, and go back to the finger test
        once it clears.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Winter (roughly November to February)</h2>
      <p>
        Growth slows down and so should watering — most plants are comfortable every 3–4 days in
        this period. Overwatering in winter is a quiet, common mistake because the habit from
        summer carries over even though the plant&apos;s needs have dropped.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Signs you've got it wrong</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li><span className="font-medium text-brand-green-dark">Overwatered:</span> yellowing lower leaves, soft or mushy stems, a sour smell from the soil</li>
        <li><span className="font-medium text-brand-green-dark">Underwatered:</span> dry, crisp leaf edges, soil pulling away from the pot's sides</li>
      </ul>

      <p>
        Once the finger test becomes a habit, the season stops being something you have to think
        about separately — the soil tells you what it needs.
      </p>
    </ArticleLayout>
  );
}
