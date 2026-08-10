import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Common Terrace Gardening Mistakes (and How to Avoid Them)",
  description:
    "The mistakes that show up again and again on Indian terrace gardens — from soil choices to monsoon drains — and the simple fixes for each.",
  alternates: { canonical: "/terrace-gardening/common-terrace-gardening-mistakes" },
  openGraph: {
    type: "article",
    title: "Common Terrace Gardening Mistakes (and How to Avoid Them)",
    description:
      "The mistakes that show up again and again on Indian terrace gardens — from soil choices to monsoon drains — and the simple fixes for each.",
    url: "/terrace-gardening/common-terrace-gardening-mistakes",
  },
  twitter: {
    card: "summary",
    title: "Common Terrace Gardening Mistakes (and How to Avoid Them)",
    description:
      "The mistakes that show up again and again on Indian terrace gardens — from soil choices to monsoon drains — and the simple fixes for each.",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Terrace Gardening"
      hubHref="/terrace-gardening"
      title="Common terrace gardening mistakes (and how to avoid them)"
      description="Most terrace gardens don&apos;t fail because of a bad plant choice. They fail because of a handful of habits — copied straight from balcony gardening — that a terrace&apos;s extra sun, wind, and open drains don&apos;t forgive."
      readTime="8 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Common Terrace Gardening Mistakes (and How to Avoid Them)",
        description:
          "The mistakes that show up again and again on Indian terrace gardens — from soil choices to monsoon drains — and the simple fixes for each.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        A terrace looks like a bigger, sunnier version of a balcony, and a lot of people garden it
        that way — same containers, same soil, same watering habits, just more of them. It mostly
        works for the first few months. Then a monsoon arrives, or a summer heatwave, or just one
        windy week, and the gaps in that approach show up all at once. None of what follows is
        exotic knowledge. It&apos;s the same short list of habits that keep tripping up first-time
        terrace gardeners across Indian cities, and each one has a fix that takes far less effort
        than undoing the damage afterward.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">
        Treating terrace sun and wind like balcony sun and wind
      </h2>
      <p>
        A terrace is open on every side in a way almost no balcony is, and that changes two things
        at once: light and airflow are both stronger and less predictable. Plants that handled a
        west-facing balcony fine can scorch on a terrace by early afternoon, and pots that never
        budged on a balcony ledge can tip over in a terrace crosswind that a building&apos;s height
        amplifies rather than blocks. The fix isn&apos;t complicated, just easy to skip — track how the
        light and wind actually move across your specific terrace for a full day before you commit
        anything permanent to a spot. Our guide to{" "}
        <Link
          href="/terrace-gardening/full-sun-full-wind-terrace-gardening-india"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          gardening through full sun and full wind
        </Link>{" "}
        covers which plants are actually built for that.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">
        Skipping load and waterproofing checks until there&apos;s a stain on the ceiling
      </h2>
      <p>
        This is the mistake with the highest cost, and it&apos;s almost always a mistake of order, not
        knowledge — people plan to check the slab&apos;s load limit and waterproofing eventually,
        after the garden is already established, which is exactly backwards. By the time a damp
        patch shows up on the ceiling of the flat below, the fix usually means moving an entire
        garden to redo waterproofing that should have been checked first. Do this before you buy a
        single pot, not after. Our full walkthrough on{" "}
        <Link
          href="/terrace-gardening/is-your-terrace-ready-load-waterproofing-layout"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          checking terrace load, waterproofing, and layout
        </Link>{" "}
        goes through exactly what to look for.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">
        Filling large containers with plain garden soil
      </h2>
      <p>
        Garden soil is heavy, compacts fast in a container, and drains poorly once it&apos;s been
        watered a few dozen times — a combination that&apos;s a genuine problem on a terrace, where
        both dead weight and standing water are things you specifically don&apos;t want. A lightweight
        mix built around coco peat, compost, and a portion of sand or perlite drains properly,
        weighs meaningfully less once saturated, and still grows vegetables and shrubs just as
        well. If you&apos;ve already got containers filled with straight soil, it&apos;s worth reworking
        them in batches over a season rather than leaving it — the weight and drainage problems
        only get worse as the mix compacts further.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">
        Leaving tall plants and young transplants unprotected
      </h2>
      <p>
        Two different plant stages get caught out by the same underlying mistake: assuming a
        terrace&apos;s conditions are mild enough not to need extra support. Tall plants — trellised
        vegetables, young trees, anything with real height — need to be staked or tied down before
        a windy spell, not after one has already snapped a stem or tipped a pot over the edge.
        Young transplants need the opposite kind of protection: a temporary shade net through the
        harshest weeks of an Indian summer, roughly April through June, because a seedling that
        would tolerate full sun once established can die of transplant shock in raw afternoon heat
        within its first week. Both fixes cost a length of garden twine or a cheap shade cloth —
        cheap compared to replacing a mature plant.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">
        Letting pots and debris block the drains
      </h2>
      <p>
        Open terraces attract pigeons and crows in a way most balconies don&apos;t, and along with them
        comes nesting debris, feathers, and droppings that collect fastest exactly where you&apos;d
        least want them — around drain outlets. Combine that with a pot pushed slightly too close
        to a drain, or a scatter of fallen leaves nobody&apos;s cleared in a while, and a single heavy
        monsoon downpour can back up water across the whole terrace faster than most people expect.
        Keep a clear, checked path to every drain as a standing habit, not a once-a-year task, and
        do a proper sweep right before monsoon season starts each year.
      </p>

      <p>
        None of these mistakes are about picking the wrong plant — they&apos;re mostly about treating a
        terrace as a passive space rather than one with its own load limits, its own drainage, and
        its own weather. Get the fundamentals sorted with our guide on{" "}
        <Link
          href="/terrace-gardening/raised-beds-vs-containers-terrace-gardening-india"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          raised beds vs containers for terrace gardening in India
        </Link>{" "}
        and the rest of the garden tends to take care of itself.
      </p>
    </ArticleLayout>
  );
}
