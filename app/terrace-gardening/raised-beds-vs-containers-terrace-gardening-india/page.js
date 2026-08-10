import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Raised Beds vs Containers for Terrace Gardening in India",
  description:
    "Weigh up raised beds against containers for an Indian terrace garden — cost, weight, watering, and which one actually fits your space.",
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Terrace Gardening"
      hubHref="/terrace-gardening"
      title="Raised beds vs containers for terrace gardening in India"
      description="A terrace is the one space where you genuinely get to choose between the two — and the right answer depends more on your slab and your budget than on which looks nicer."
      readTime="7 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Raised Beds vs Containers for Terrace Gardening in India",
        description:
          "Weigh up raised beds against containers for an Indian terrace garden — cost, weight, watering, and which one actually fits your space.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        On a balcony, containers are the only realistic option. A terrace is bigger and flatter, so
        raised beds genuinely become possible — but that doesn't automatically make them the better
        choice. Each comes with real trade-offs around cost, weight, and how much water and soil
        they hold, and the right pick usually comes down to what your terrace and your budget can
        actually support.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">What raised beds actually offer</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>A much bigger, more stable root zone.</strong> Vegetables like tomatoes,
          brinjal, and okra spread roots further than most containers allow, and a bed holds
          moisture and nutrients far more evenly across a large planting area.
        </li>
        <li>
          <strong>Less frequent watering.</strong> A larger volume of soil dries out slower than a
          single pot, which matters a lot during Indian summers when small containers can need
          watering twice a day.
        </li>
        <li>
          <strong>Meaningfully more weight and more upfront work.</strong> A filled raised bed is
          heavy, close to permanent once built, and needs the load and waterproofing checks
          covered in{" "}
          <Link
            href="/terrace-gardening/is-your-terrace-ready-load-waterproofing-layout"
            className="font-medium text-brand-green hover:text-brand-green-dark"
          >
            our terrace readiness guide
          </Link>{" "}
          done properly first — this isn't something to retrofit after the fact.
        </li>
        <li>
          <strong>Higher upfront cost, lower cost per plant over time.</strong> Building materials
          (brick, wood, or modular kits) and enough soil to fill a bed cost more than a few pots,
          but a bed grows far more per square foot of terrace once it's established.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">What containers actually offer</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Flexibility a raised bed can't match.</strong> Containers can be moved to chase
          sun, pulled out of the way during heavy monsoon rain, or rearranged entirely if you
          change your mind about the layout — a raised bed is a one-time decision.
        </li>
        <li>
          <strong>Lower load per point, spread more easily.</strong> Individual pots, even large
          ones, are easier to distribute across a terrace to keep weight off any single spot,
          which matters on older or unverified structures.
        </li>
        <li>
          <strong>Lower cost to start, higher cost to scale.</strong> A handful of containers is
          cheap to begin with, but filling a full terrace with enough large pots to match one
          raised bed's growing area usually costs more in the end.
        </li>
        <li>
          <strong>More watering, more often.</strong> Smaller soil volumes dry out faster,
          especially in terracotta or unglazed containers exposed to direct terrace sun and wind —
          expect to water more frequently than you would with a bed.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Which one fits your terrace</h2>
      <p>
        Neither option is objectively better — they suit different terraces and different stages of
        commitment.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Choose containers if you're still learning your terrace's sun, wind, and
          drainage.</strong> They let you experiment and reposition freely for a season or two
          before committing to anything permanent.
        </li>
        <li>
          <strong>Choose raised beds if your load and waterproofing checks are already done and
          you're ready to commit to a fixed layout.</strong> They pay off best for terraces used
          seriously for vegetables over multiple years, not for a first attempt.
        </li>
        <li>
          <strong>Most established terrace gardens end up as a mix of both.</strong> Raised beds
          for the vegetables you grow every season, and containers around the edges for
          herbs, flowering shrubs, and anything you want the flexibility to move.
        </li>
      </ul>

      <p>
        Whichever you pick, terrace conditions push both options harder than a sheltered balcony
        does. Our guide to{" "}
        <Link
          href="/terrace-gardening/full-sun-full-wind-terrace-gardening-india"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          gardening through full sun and full wind
        </Link>{" "}
        covers what that means for watering, staking, and plant choice either way.
      </p>
    </ArticleLayout>
  );
}
