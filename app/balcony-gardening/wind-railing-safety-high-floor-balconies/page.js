import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Wind and Railing Safety for High-Floor Balconies",
  description:
    "How to garden safely on a high-floor balcony — anchoring pots, choosing wind-safe plants, and avoiding falling-pot risk.",
  alternates: { canonical: "/balcony-gardening/wind-railing-safety-high-floor-balconies" },
  openGraph: {
    type: "article",
    title: "Wind and Railing Safety for High-Floor Balconies",
    description:
      "How to garden safely on a high-floor balcony — anchoring pots, choosing wind-safe plants, and avoiding falling-pot risk.",
    url: "/balcony-gardening/wind-railing-safety-high-floor-balconies",
  },
  twitter: {
    card: "summary",
    title: "Wind and Railing Safety for High-Floor Balconies",
    description:
      "How to garden safely on a high-floor balcony — anchoring pots, choosing wind-safe plants, and avoiding falling-pot risk.",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      title="Wind and railing safety for high-floor balconies"
      description="On a high floor, wind isn't just a plant-health issue. A fallen pot is a real safety risk, and here's how to garden without creating one."
      readTime="5 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Wind and Railing Safety for High-Floor Balconies",
        description:
          "How to garden safely on a high-floor balcony — anchoring pots, choosing wind-safe plants, and avoiding falling-pot risk.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        A pot that tips over on a ground-floor balcony makes a mess. The same pot falling from the
        12th floor can seriously hurt someone. If you&apos;re gardening a few storeys up, wind and
        anchoring deserve just as much thought as sunlight and watering, maybe more.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Never rely on the railing ledge alone</h2>
      <p>
        Pots balanced on a narrow railing ledge, with nothing actually holding them there, are the
        most common cause of falls. It&apos;s rarely a storm that does it, usually just one sudden
        gust. If you want railing-mounted planters, use ones made for the job: they clip or bolt
        onto the railing from both sides instead of just resting on top and hoping for the best.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Anchoring pots that sit on the floor</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Choose wider, heavier-based pots over tall, narrow ones for anything exposed to open wind</li>
        <li>Keep large or top-heavy plants away from the balcony&apos;s outer edge</li>
        <li>A layer of gravel or stones at the base adds weight low in the pot, lowering its centre of gravity</li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Plants that handle wind poorly</h2>
      <p>
        A tall, top-heavy plant in a narrow pot catches wind the way a sail does. Think of a young
        tree, or anything with a single tall stem and most of its leaf mass up top. On an exposed
        high floor, lean toward bushier, lower-profile plants instead. If you do keep something
        tall, stake it against a wall rather than the railing.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Check your housing society&apos;s rules</h2>
      <p>
        Plenty of Indian apartment complexes have specific rules about railing planters and
        overhanging pots, and this risk is exactly why. A quick conversation with your RWA or
        facility management before you mount anything outward-facing is a much easier conversation
        to have now than after something falls.
      </p>

      <p>
        None of this is a reason to avoid high-floor gardening. It just means treating anchoring as
        part of the setup from day one, not something you get around to later.
      </p>
    </ArticleLayout>
  );
}
