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
        More balcony plants in India drown than dry out. That sounds backwards given how hot it
        gets, but it&apos;s usually what happens when someone waters on a fixed schedule instead
        of checking the soil. The routine that kept a plant happy in March can quietly kill it by
        July.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">The finger test, first</h2>
      <p>
        Push a finger about 2 inches into the soil before you water. Dry at that depth? Water it.
        Still damp? Leave it a day and check again. This one habit does the job of a schedule, and
        it works in every season without you having to remember which month calls for what.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Summer (roughly March to June)</h2>
      <p>
        Heat and wind pull moisture out of a container fast, especially a small one sitting on hot
        tile. Most potted plants need water daily through peak summer, ideally early in the
        morning so there&apos;s moisture in reserve before the afternoon heat lands. Skip watering
        in harsh afternoon sun — a large share of it evaporates before it ever reaches the roots.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Monsoon (roughly June to September)</h2>
      <p>
        This is where overwatering does the most damage. Rain is already doing part of the job,
        and a container can sit waterlogged for days without anyone noticing. Two adjustments
        matter more than anything else here:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Move pots under an overhang if heavy, continuous rain is expected — a few hours of rain is fine, days of standing water is not</li>
        <li>Double-check that drainage holes aren&apos;t blocked; this is the season they get tested the most</li>
      </ul>
      <p>
        Skip manual watering entirely on days with steady rainfall. Go back to the finger test once it clears up.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Winter (roughly November to February)</h2>
      <p>
        Growth slows, so watering should too — most plants are fine every 3–4 days through this
        stretch. Overwatering in winter is a quiet mistake, mostly because the summer habit sticks
        around long after the plant&apos;s actual needs have dropped.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Signs you&apos;ve got it wrong</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li><span className="font-medium text-brand-green-dark">Overwatered:</span> yellowing lower leaves, soft or mushy stems, a sour smell from the soil</li>
        <li><span className="font-medium text-brand-green-dark">Underwatered:</span> dry, crisp leaf edges, soil pulling away from the pot&apos;s sides</li>
      </ul>

      <p>
        Make the finger test a habit and the season stops being something you have to plan
        around. The soil tells you what it needs; you&apos;re just checking in.
      </p>
    </ArticleLayout>
  );
}
