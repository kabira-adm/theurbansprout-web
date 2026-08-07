import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Wind and Railing Safety for High-Floor Balconies",
  description:
    "How to garden safely on a high-floor balcony — anchoring pots, choosing wind-safe plants, and avoiding falling-pot risk.",
};

export default function Article() {
  return (
    <ArticleLayout
      title="Wind and railing safety for high-floor balconies"
      description="On a high floor, wind isn't just a plant-health issue — a fallen pot is a real safety risk. Here's how to garden without creating one."
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
        A pot that topples on a ground-floor balcony is an inconvenience. The same pot falling
        from the 12th floor is a genuine hazard to people below. If you&apos;re gardening above a
        few storeys, wind and anchoring deserve as much attention as sunlight and watering.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Never rely on the railing ledge alone</h2>
      <p>
        Pots balanced on a narrow railing ledge with nothing holding them in place are the most
        common cause of falls, usually during a sudden gust rather than a storm. If you want
        railing-mounted planters, use ones designed for it — they clip or bolt onto the railing on
        both sides, rather than resting on top.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Anchoring pots that sit on the floor</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Choose wider, heavier-based pots over tall, narrow ones for anything exposed to open wind</li>
        <li>Keep large or top-heavy plants away from the balcony's outer edge</li>
        <li>A layer of gravel or stones at the base adds weight low in the pot, lowering its centre of gravity</li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Plants that handle wind poorly</h2>
      <p>
        Tall, top-heavy plants in narrow pots — think a young tree or a tall single-stem plant —
        catch wind like a sail. On an exposed high floor, favour bushier, lower-profile plants, or
        stake tall ones securely against a wall rather than the railing.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Check your housing society's rules</h2>
      <p>
        Many Indian apartment complexes have specific rules about railing planters and overhanging
        pots, partly because of exactly this risk. It&apos;s worth a quick check with your RWA or
        facility management before mounting anything outward-facing — it&apos;s a much smaller
        conversation now than after an incident.
      </p>

      <p>
        None of this should make high-floor gardening feel off-limits — it just means treating
        anchoring as a real step in the setup, not an afterthought.
      </p>
    </ArticleLayout>
  );
}
