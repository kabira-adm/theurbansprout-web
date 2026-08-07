import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Growing Tomatoes and Chillies in Balcony Containers",
  description:
    "Container sizes, sunlight needs, and support tricks for growing tomatoes and chillies on an Indian apartment balcony.",
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Kitchen Gardening"
      hubHref="/kitchen-gardening"
      title="Growing tomatoes and chillies in balcony containers"
      description="Both are sun-lovers that do genuinely well in Indian heat — if you give them enough container depth and a bit of support as they grow."
      readTime="7 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Growing Tomatoes and Chillies in Balcony Containers",
        description:
          "Container sizes, sunlight needs, and support tricks for growing tomatoes and chillies on an Indian apartment balcony.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Tomatoes and chillies are among the few vegetables that genuinely thrive in Indian balcony
        heat rather than merely surviving it. Most failures come down to a container that&apos;s
        too small, not enough direct sun, or letting the plant flop over once it starts fruiting.
        Fix those three and both crops are realistic even on a modest balcony.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Container size — the most common mistake</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Tomatoes need at least 12–14 inches of depth and width.</strong> A tomato plant
          builds a large root system fast, and a container smaller than this produces a stunted
          plant with few fruit, no matter how well you feed it.
        </li>
        <li>
          <strong>Chillies are more forgiving — 10 inches is workable.</strong> They still do
          better in a bigger pot, but you can start a chilli plant in a smaller container than a
          tomato and get a reasonable harvest.
        </li>
        <li>
          <strong>Always use a container with drainage holes.</strong> Both plants are prone to
          root rot in waterlogged soil — this matters even more for tomatoes, whose stems can
          develop fungal issues if the base stays wet.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Sunlight and placement</h2>
      <p>
        Both crops need a minimum of 5–6 hours of direct sun daily to fruit well — filtered light
        through a grille or the edge of a shaded balcony will grow leaves but disappoint on
        yield. A west or south-facing balcony that gets harsh afternoon sun, which is often too
        much for leafy herbs, is exactly what these two plants want. If your balcony is
        borderline, chillies tolerate partial shade noticeably better than tomatoes do.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Supporting the plant as it grows</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Stake tomatoes early, not after they flop.</strong> Push a bamboo stake or a
          tomato cage into the pot when you transplant the seedling, so roots aren&apos;t disturbed
          later. Tie the main stem loosely with soft cloth strips every 20–25 cm as it grows.
        </li>
        <li>
          <strong>Pinch off suckers on tomatoes.</strong> The small shoots that grow in the angle
          between the main stem and a branch drain energy from fruiting if left unchecked — pinch
          them out weekly on indeterminate (vine-type) varieties.
        </li>
        <li>
          <strong>Chillies rarely need staking</strong> unless the plant is top-heavy with fruit,
          but a short stake helps in windy high-floor balconies. If you&apos;re gardening above
          the fifth floor or so, see{" "}
          <Link
            href="/balcony-gardening/wind-railing-safety-high-floor-balconies"
            className="font-medium text-brand-green hover:text-brand-green-dark"
          >
            our guide to wind and railing safety on high-floor balconies
          </Link>
          .
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Flowers dropping without fruiting</h2>
      <p>
        This is the single most common complaint with balcony tomatoes, and it&apos;s rarely a
        disease — it&apos;s usually one of three things: temperatures consistently above 35°C
        (flowers abort in extreme heat), irregular watering causing stress, or poor pollination
        because there&apos;s no wind or insect movement at balcony height. Gently shaking the
        flowering stems for a few seconds every couple of days mimics wind pollination and
        noticeably improves fruit set indoors and on enclosed balconies.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Feeding through the fruiting stage</h2>
      <p>
        Both plants are heavy feeders once they start flowering — a container that was fine on
        plain potting mix at the seedling stage will run out of nutrients fast once fruit starts
        forming.{" "}
        <Link
          href="/kitchen-gardening/soil-and-fertilizer-basics-container-vegetables"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          Our soil and fertilizer basics guide
        </Link>{" "}
        covers what to add and how often, including a simple potassium boost that helps fruit
        develop rather than just leaves.
      </p>
    </ArticleLayout>
  );
}
