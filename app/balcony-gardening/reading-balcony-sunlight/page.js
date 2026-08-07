import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Reading Your Balcony's Sunlight Before You Buy a Single Plant",
  description:
    "A simple method to measure how much sun your balcony actually gets, so you stop buying plants that don't match your light.",
};

export default function Article() {
  return (
    <ArticleLayout
      title="Reading your balcony's sunlight before you buy a single plant"
      description="Sunlight mismatch is the top reason beginner plants die. Here's how to measure it properly, in a day, without any equipment."
      readTime="5 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Reading Your Balcony's Sunlight Before You Buy a Single Plant",
        description:
          "A simple method to measure how much sun your balcony actually gets, so you stop buying plants that don't match your light.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Ask most people how much sun their balcony gets and they&apos;ll guess — &quot;pretty
        sunny&quot; or &quot;kind of shady.&quot; That guess is usually wrong, because sunlight
        changes through the day in ways that are easy to misjudge from memory. Before choosing any
        plant, spend one day actually measuring it.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">The three light categories that matter</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li><span className="font-medium text-brand-green-dark">Full sun</span> — 6+ hours of direct sun. Typical for south- or west-facing balconies in most Indian cities.</li>
        <li><span className="font-medium text-brand-green-dark">Partial sun</span> — 3–6 hours of direct sun, often morning-only or filtered through a neighbouring structure.</li>
        <li><span className="font-medium text-brand-green-dark">Low light / shade</span> — under 3 hours of direct sun. Common on north-facing balconies or ones shadowed by taller buildings.</li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">A one-day sunlight audit</h2>
      <p>Check your balcony at four points during a clear day and note whether it&apos;s in direct sun, bright shade, or full shade:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>9 AM</li>
        <li>12 PM</li>
        <li>3 PM</li>
        <li>5 PM</li>
      </ul>
      <p>
        Add up the direct-sun hours. Do this on one clear day and, if you can, once more a few
        weeks later — the sun&apos;s angle shifts across seasons, so a balcony that&apos;s
        full sun in May can drop to partial sun by December.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Why neighbouring buildings matter more than orientation</h2>
      <p>
        In dense Indian cities, a technically south-facing balcony can still be mostly shaded if a
        taller building sits close by. Orientation is a starting guess; the audit above is the
        actual answer. Trust what you measured over what the compass suggests.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Matching plants to what you measured</h2>
      <p>
        Once you know your category, plant selection becomes far more reliable. Full-sun spots
        suit marigold, hibiscus, and most vegetables. Partial-sun spots work well for curry leaf,
        aloe vera, and many herbs. Low-light balconies do best with money plant (pothos), ZZ
        plant, and peace lily — plants that tolerate shade rather than merely surviving it.
      </p>

      <p>
        Buy the plant to match the light you actually measured, not the light you hoped for — it&apos;s
        the single highest-leverage decision in balcony gardening.
      </p>
    </ArticleLayout>
  );
}
