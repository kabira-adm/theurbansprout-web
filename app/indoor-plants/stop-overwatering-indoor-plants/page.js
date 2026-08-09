import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "How to Stop Overwatering Indoor Plants (the #1 Killer)",
  description:
    "Why indoor plants in Indian apartments almost always die from too much water, and the checks that fix it.",
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Indoor Plants"
      hubHref="/indoor-plants"
      title="How to stop overwatering indoor plants (the #1 killer)"
      description="More indoor plants die from too much water than from too little. Here's why it happens indoors specifically, and how to break the habit."
      readTime="7 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "How to Stop Overwatering Indoor Plants (the #1 Killer)",
        description:
          "Why indoor plants in Indian apartments almost always die from too much water, and the checks that fix it.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Outdoors, extra water evaporates fast in Indian heat or drains off with the next round of
        sun and wind. Indoors, none of that helps you. There&apos;s no sun beating down to dry the
        soil, no breeze, and often a decorative pot with no drainage hole to begin with. Put those
        three together and you get the leading cause of indoor plant death in apartments: too much
        water, not too little.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Why it happens indoors specifically</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>No evaporation pressure.</strong> Air conditioning and closed windows keep
          humidity moderate but airflow low, so soil that would dry in a day outdoors can stay wet
          for a week indoors.
        </li>
        <li>
          <strong>Decorative pots without drainage.</strong> A ceramic or brass planter bought for
          its looks often has no hole, so watered soil just pools at the base and roots sit in it.
        </li>
        <li>
          <strong>Watering on a fixed schedule.</strong> &quot;Every Sunday&quot; ignores season,
          light, and how much the plant is actually using — the same mistake that kills balcony
          plants, just slower indoors.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">The checks that actually work</h2>
      <p>Skip the calendar. Let the plant decide, not the day of the week.</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Finger test.</strong> Push a finger 2–3 cm into the soil. If it&apos;s still
          moist, wait — check again in two or three days rather than watering anyway.
        </li>
        <li>
          <strong>Weight test.</strong> Lift the pot right after watering so you know how it feels
          wet, then lift it again every so often. Still heavy? It doesn&apos;t need water yet.
        </li>
        <li>
          <strong>Look at the plant, not just the soil.</strong> Yellowing lower leaves that feel
          soft or mushy point to overwatering; crisp, dry, browning leaf tips usually point to
          underwatering or low humidity.
        </li>
        <li>
          <strong>Always empty the saucer.</strong> Water that drains through and pools in a
          saucer or outer pot is still touching the roots, even if you can&apos;t see it. Tip it
          out within half an hour of watering, every time.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">A note on Indian tap water</h2>
      <p>
        Hard tap water, common across much of urban India, leaves a chalky white crust on soil and
        pot rims over time and can slowly wear on root health. Where you can, let tap water stand
        in an open container for 24 hours before using it — chlorine dissipates and any sediment
        settles to the bottom. It won&apos;t fix hardness itself, but it&apos;s a small habit that
        cuts down on buildup. See a persistent white crust forming? Scrape the top layer off and
        top up with fresh potting mix rather than trying to flush it out with more water.
      </p>

      <p>
        Switch from a fixed schedule to actually checking the plant, and watering frequency drops
        for most indoor species on its own, especially the low-light ones, which barely sip
        compared to a sun-loving plant.{" "}
        <Link
          href="/indoor-plants/low-light-indoor-plants-indian-apartments"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          See which low-light plants need the least water →
        </Link>
      </p>
    </ArticleLayout>
  );
}
