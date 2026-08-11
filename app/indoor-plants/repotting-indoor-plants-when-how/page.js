import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Repotting Indoor Plants: When and How",
  description:
    "The specific signs that mean it's time to repot, the best season for it in India, and a step-by-step process.",
  alternates: { canonical: "/indoor-plants/repotting-indoor-plants-when-how" },
  openGraph: {
    type: "article",
    title: "Repotting Indoor Plants: When and How",
    description:
      "The specific signs that mean it's time to repot, the best season for it in India, and a step-by-step process.",
    url: "/indoor-plants/repotting-indoor-plants-when-how",
  },
  twitter: {
    card: "summary",
    title: "Repotting Indoor Plants: When and How",
    description:
      "The specific signs that mean it's time to repot, the best season for it in India, and a step-by-step process.",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Indoor Plants"
      hubHref="/indoor-plants"
      title="Repotting indoor plants: when and how"
      description="Repotting too early stresses a plant for no reason, and repotting too late stunts it. Here's how to time it correctly and get the process right."
      readTime="6 min"
      hasAffiliateLinks
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Repotting Indoor Plants: When and How",
        description:
          "The specific signs that mean it's time to repot, the best season for it in India, and a step-by-step process.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Repotting doesn&apos;t belong on a fixed yearly calendar. Most indoor plants in small pots
        grow slowly enough that they only need it every 1–3 years, sometimes longer. Let the plant
        tell you, not the date.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Signs it&apos;s actually time</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Roots visible at the drainage hole or circling the surface.</strong> This is the clearest
          sign the plant has outgrown the pot.
        </li>
        <li>
          <strong>Water runs straight through without being absorbed.</strong> This usually means the
          roots have replaced most of the soil, leaving little to hold moisture.
        </li>
        <li>
          <strong>The plant looks top-heavy or tips over easily.</strong> The root mass and
          foliage have outgrown the base weight of the pot.
        </li>
        <li>
          <strong>Growth has stalled despite correct light and water.</strong> This often means roots
          are pot-bound and have nowhere left to expand.
        </li>
      </ul>
      <p>
        Worth noting what&apos;s <em>not</em> on that list: a plant that&apos;s just a bit slow, or
        leaves that yellow now and then. Those usually point to watering or light, not pot size.{" "}
        <Link
          href="/indoor-plants/stop-overwatering-indoor-plants"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          Check the overwatering guide first →
        </Link>{" "}
        before you assume a plant needs a bigger home.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">The best time of year in India</h2>
      <p>
        Repot in early monsoon or the cooler months (roughly June to September, or October to
        February depending on your city), while the plant is actively growing and can bounce back
        fast. Skip repotting during peak summer heat (April–May); root disturbance plus high
        temperatures is a common way to lose a plant that was otherwise perfectly healthy. The
        coldest weeks of North Indian winter aren&apos;t ideal either, since root growth slows
        right down in cold soil.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Step by step</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Choose a new pot only 4–6 cm wider in diameter than the current one. Oversizing invites
          overwatering, since the extra soil holds moisture the roots aren&apos;t using yet.
        </li>
        <li>
          Water the plant a day before repotting; it slides out of the old pot more easily and the
          roots are less likely to tear.
        </li>
        <li>
          Gently loosen the root ball with your fingers, especially if roots are tightly circling.
          This encourages them to grow outward into the new soil instead of continuing to spiral.
        </li>
        <li>
          Use a well-draining{" "}
          <a
            href="https://www.amazon.in/s?k=potting+mix+for+plants&tag=theurbansprou-21"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-medium text-brand-green hover:text-brand-green-dark"
          >
            potting mix
          </a>{" "}
          suited to Indian conditions: roughly 50% cocopeat or coco
          peat-based potting soil, 30% compost, and 20%{" "}
          <a
            href="https://www.amazon.in/s?k=perlite+for+plants&tag=theurbansprou-21"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-medium text-brand-green hover:text-brand-green-dark"
          >
            perlite
          </a>{" "}
          or coarse sand for drainage.
        </li>
        <li>
          Fill the base of the new pot with mix, centre the plant so it sits at the same depth as
          before, then backfill around the sides and firm gently. Don&apos;t pack it tight.
        </li>
        <li>
          Water thoroughly right after repotting to settle the soil around the roots, then hold off
          on fertilizing for 4–6 weeks while the roots recover.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Aftercare</h2>
      <p>
        Keep the freshly repotted plant out of direct sun and away from AC vents for a week or
        two. It&apos;s recovering from root disturbance and feels every bit of stress more than usual
        during that stretch. A little leaf droop in the first few days is normal, and it usually
        settles once new roots take hold in the fresh mix.
      </p>
    </ArticleLayout>
  );
}
