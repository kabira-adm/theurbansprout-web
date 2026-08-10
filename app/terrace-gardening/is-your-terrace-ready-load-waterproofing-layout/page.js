import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Is Your Terrace Ready? Load, Waterproofing, and Layout",
  description:
    "Check structural load, waterproofing, and drainage layout before you put a single pot on your terrace — the three things most terrace gardens skip.",
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Terrace Gardening"
      hubHref="/terrace-gardening"
      title="Is your terrace ready? Load, waterproofing, and layout"
      description="Before you buy a single pot, three questions decide whether a terrace garden survives its first monsoon: how much weight it can carry, whether the slab is protected, and how water will actually leave it."
      readTime="8 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Is Your Terrace Ready? Load, Waterproofing, and Layout",
        description:
          "Check structural load, waterproofing, and drainage layout before you put a single pot on your terrace — the three things most terrace gardens skip.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        A balcony garden that goes wrong usually just means a few dead plants. A terrace garden
        that goes wrong can mean cracked waterproofing, a leaking ceiling for the flat below, or a
        structural problem nobody notices until it's expensive. None of that is a reason to avoid
        terrace gardening — it's a reason to spend an afternoon checking three things before you
        haul a single bag of soil upstairs.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Structural load — how much weight your terrace can actually take</h2>
      <p>
        Wet soil is heavy. A filled raised bed or a large container full of moist potting mix can
        weigh several hundred kilograms once you add plants and standing water, and that weight
        doesn't distribute itself evenly — it sits wherever you put it.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Check your building's terrace load rating if you can.</strong> Most residential
          slabs are designed for a live load of 150–200 kg per square metre, which is enough for a
          spread-out garden but not for concentrating everything in one corner.
        </li>
        <li>
          <strong>Spread the weight out rather than clustering it.</strong> Line containers along
          load-bearing walls and the edges of the slab (typically the strongest points) instead of
          grouping everything over the centre of a room below.
        </li>
        <li>
          <strong>Be especially cautious in older buildings or above the ground floor of a
          multi-storey structure.</strong> If you're planning anything beyond a handful of pots — a
          full raised-bed setup, for instance — it's worth a conversation with a structural
          engineer or your building's facility team rather than guessing.
        </li>
        <li>
          <strong>Use lightweight potting mix over garden soil for large containers.</strong> A mix
          heavy in coco peat and compost holds far less dead weight than raw soil while still
          growing vegetables and shrubs well.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Waterproofing — protecting the slab before you place a single pot</h2>
      <p>
        Terraces are usually waterproofed to shed rain quickly, not to sit under standing water or
        constantly damp containers for months at a time. Daily watering and monsoon rain together
        put far more sustained moisture on the surface than the waterproofing was built around.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Never place containers directly on bare waterproofed concrete.</strong> Raise
          every pot and bed on bricks, pot feet, or a raised grid so water drains away instead of
          pooling under it and slowly wearing through the membrane.
        </li>
        <li>
          <strong>Use a root barrier under raised beds.</strong> A layer of heavy-duty plastic
          sheeting or a proper root barrier fabric under a raised bed stops roots and constant
          moisture from reaching the slab directly, which matters far more for beds than pots.
        </li>
        <li>
          <strong>Check your terrace's waterproofing before committing to anything permanent.</strong>{" "}
          If it hasn't been redone in several years, or if you already see damp patches on the
          ceiling below, get it inspected and, if needed, redone before building raised beds —
          moving a garden afterwards to fix a leak is far more work than doing it first.
        </li>
        <li>
          <strong>Leave a gap around drains and outlets.</strong> Never place a pot, bed, or bag of
          soil over or against a terrace drain — it's the one thing standing between a heavy
          monsoon downpour and water backing up across the whole surface.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Layout — planning drainage, access, and sun before you start</h2>
      <p>
        Once load and waterproofing are sorted, layout is what makes a terrace garden pleasant to
        actually maintain instead of a chore you avoid.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Map the drains first, then work backwards.</strong> Every planting zone should
          have a clear, unobstructed path for excess water to reach a drain — plan container and
          bed placement around that, not the other way round.
        </li>
        <li>
          <strong>Leave real walking paths, not gaps between pots.</strong> A minimum of 60–75 cm of
          clear space between planting areas lets you move a wheelbarrow or watering can through
          without knocking anything over, and makes the whole space easier to maintain long-term.
        </li>
        <li>
          <strong>Group plants by water need, not just by type.</strong> Thirsty vegetables next to
          drought-tolerant succulents means one of them is always being over- or under-watered —
          zone the layout by how often each group needs attention.
        </li>
        <li>
          <strong>Track the sun across a full day before finalising positions.</strong> Terraces
          often get harsher, more direct sun than balconies, and shade patterns from water tanks,
          parapet walls, or neighbouring buildings shift through the day in ways that are easy to
          misjudge from a single glance.
        </li>
      </ul>

      <p>
        With load, waterproofing, and layout settled, the next decision is what to actually grow
        in — see our comparison of{" "}
        <Link
          href="/terrace-gardening/raised-beds-vs-containers-terrace-gardening-india"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          raised beds vs containers for terrace gardening in India
        </Link>{" "}
        — and then how to pick plants that can handle the conditions you mapped out here. Our
        guide to{" "}
        <Link
          href="/terrace-gardening/full-sun-full-wind-terrace-gardening-india"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          gardening through full sun and full wind
        </Link>{" "}
        covers that next.
      </p>
    </ArticleLayout>
  );
}
