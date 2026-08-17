import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Fixing the Most Common Balcony Gardening Mistakes",
  description:
    "The recurring mistakes that kill balcony plants in Indian homes, and the specific fix for each one.",
  alternates: { canonical: "/balcony-gardening/common-balcony-gardening-mistakes" },
  openGraph: {
    type: "article",
    title: "Fixing the Most Common Balcony Gardening Mistakes",
    description:
      "The recurring mistakes that kill balcony plants in Indian homes, and the specific fix for each one.",
    url: "/balcony-gardening/common-balcony-gardening-mistakes",
  },
  twitter: {
    card: "summary",
    title: "Fixing the Most Common Balcony Gardening Mistakes",
    description:
      "The recurring mistakes that kill balcony plants in Indian homes, and the specific fix for each one.",
  },
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
        Talk to enough people with a dead balcony plant and a pattern shows up fast. It&apos;s
        rarely bad luck, and it&apos;s almost never a missing &quot;green thumb.&quot; It&apos;s
        usually one of five mistakes, repeated across thousands of balconies. Fix these and most
        of the rest sorts itself out.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">1. Watering on a fixed schedule instead of checking the soil</h2>
      <p>
        &quot;Every two days&quot; ignores the season completely, and it&apos;s the top cause of
        root rot. Use the finger test instead: water when the soil is dry 2 inches down, not on a
        calendar.{" "}
        <Link href="/balcony-gardening/watering-schedule-indian-summers-monsoons" className="font-medium text-brand-green hover:text-brand-green-dark">
          Full watering guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">2. Buying the plant before measuring the light</h2>
      <p>
        A plant bought on impulse at a nursery rarely matches the balcony it ends up on. Spend one
        day measuring direct-sun hours before you commit to anything.{" "}
        <Link href="/balcony-gardening/reading-balcony-sunlight" className="font-medium text-brand-green hover:text-brand-green-dark">
          Sunlight audit guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">3. Using a pot with no drainage, or one that&apos;s oversized</h2>
      <p>
        Both land you in the same place: roots sitting in moisture they don&apos;t need. Match pot
        size to the plant and confirm drainage holes before anything goes into the soil.{" "}
        <Link href="/balcony-gardening/choosing-pot-size-drainage-balcony" className="font-medium text-brand-green hover:text-brand-green-dark">
          Pot size and drainage guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">4. Leaving pots unanchored on a high floor</h2>
      <p>
        Wind stress, and more seriously, falling-pot risk, is easy enough to prevent with the
        right pot weight and placement. It just has to be done up front.{" "}
        <Link href="/balcony-gardening/wind-railing-safety-high-floor-balconies" className="font-medium text-brand-green hover:text-brand-green-dark">
          Wind and railing safety guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">5. Over-fertilizing to &quot;help&quot; a struggling plant</h2>
      <p>
        A stressed plant is usually reacting to water or light, not a shortage of nutrients.
        Fertilizer piled on top of that stress tends to make things worse, and chemical burn on
        the roots is a common result. Sort out water and light first. Only feed a plant that&apos;s
        already healthy and actively growing.
      </p>

      <p>
        Pot, light, water, anchoring, fertilizer, in roughly that order. Checking them covers most
        of what goes wrong on a balcony before it has the chance to.
      </p>

      <p>
        Already past prevention and trying to figure out what&apos;s actually wrong with a
        specific plant?{" "}
        <Link
          href="/tools/plant-doctor"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          Try the Plant Doctor tool →
        </Link>
      </p>
    </ArticleLayout>
  );
}
