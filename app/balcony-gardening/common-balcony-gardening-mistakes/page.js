import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Fixing the Most Common Balcony Gardening Mistakes",
  description:
    "The recurring mistakes that kill balcony plants in Indian homes, and the specific fix for each one.",
};

export default function Article() {
  return (
    <ArticleLayout
      title="Fixing the most common balcony gardening mistakes"
      description="Almost every dead balcony plant traces back to one of these five mistakes. Here's the fix for each."
      readTime="7 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Fixing the Most Common Balcony Gardening Mistakes",
        description:
          "The recurring mistakes that kill balcony plants in Indian homes, and the specific fix for each one.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Most balcony gardening failures aren&apos;t bad luck or a lack of a &quot;green
        thumb&quot; — they&apos;re one of a handful of predictable mistakes. Here they are, with
        the specific fix for each.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">1. Watering on a fixed schedule instead of checking the soil</h2>
      <p>
        &quot;Every two days&quot; ignores the season entirely, and it&apos;s the top cause of
        root rot. Use the finger test instead — water when the soil is dry 2 inches down, not on a
        calendar.{" "}
        <Link href="/balcony-gardening/watering-schedule-indian-summers-monsoons" className="font-medium text-brand-green hover:text-brand-green-dark">
          Full watering guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">2. Buying the plant before measuring the light</h2>
      <p>
        A plant bought on impulse rarely matches the balcony&apos;s actual sun exposure. Spend one
        day measuring direct-sun hours before choosing anything.{" "}
        <Link href="/balcony-gardening/reading-balcony-sunlight" className="font-medium text-brand-green hover:text-brand-green-dark">
          Sunlight audit guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">3. Using a pot with no drainage, or one that's oversized</h2>
      <p>
        Both lead to the same result — roots sitting in moisture they don&apos;t need. Match pot
        size to the plant and confirm drainage holes before anything goes in the soil.{" "}
        <Link href="/balcony-gardening/choosing-pot-size-drainage-balcony" className="font-medium text-brand-green hover:text-brand-green-dark">
          Pot size and drainage guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">4. Leaving pots unanchored on a high floor</h2>
      <p>
        Wind stress and, more seriously, falling-pot risk are easy to prevent with the right pot
        weight and placement.{" "}
        <Link href="/balcony-gardening/wind-railing-safety-high-floor-balconies" className="font-medium text-brand-green hover:text-brand-green-dark">
          Wind and railing safety guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">5. Over-fertilizing to "help" a struggling plant</h2>
      <p>
        A stressed plant is usually reacting to water or light, not a lack of nutrients. Adding
        fertilizer on top of that stress often makes things worse — chemical burn on the roots is
        common. Fix water and light first, and only fertilize a plant that&apos;s already healthy
        and actively growing.
      </p>

      <p>
        Work through these five in order — pot, light, water, anchoring, fertilizer — and most
        balcony gardening problems resolve before they start.
      </p>
    </ArticleLayout>
  );
}
