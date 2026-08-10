import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Full Sun, Full Wind: Terrace Gardening in India",
  description:
    "How to manage the harsher sun and stronger wind terraces get compared to balconies, and which plants actually hold up to both.",
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Terrace Gardening"
      hubHref="/terrace-gardening"
      title="Full sun, full wind: terrace gardening in India"
      description="A terrace usually has no overhang, no neighbouring wall, and nothing breaking the wind — which means more light than a balcony gets, but also more stress on every plant you put up there."
      readTime="7 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Full Sun, Full Wind: Terrace Gardening in India",
        description:
          "How to manage the harsher sun and stronger wind terraces get compared to balconies, and which plants actually hold up to both.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Balconies are often shaded by the floor above, or partly sheltered by a parapet or a
        neighbouring building. Terraces usually have none of that. It's the most open growing space
        in most Indian homes, which is genuinely good news for sun-loving plants — but it also
        means full, unfiltered summer sun and wind speeds a balcony rarely sees. Terrace gardening
        works best once you plan around both instead of finding out about them the hard way.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Managing full-day sun exposure</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Track how many hours of direct sun each zone actually gets.</strong> On an open
          terrace this is often 8–10 hours in peak summer — more than most vegetables and flowering
          plants need, and enough to scorch leaves that would be fine on a partly shaded balcony.
        </li>
        <li>
          <strong>Use 40–50% shade netting over the harshest afternoon stretch.</strong> A simple
          shade cloth rigged over vulnerable plants between roughly noon and 3 PM in peak summer
          cuts leaf scorch significantly without meaningfully reducing the light plants need to
          fruit or flower.
        </li>
        <li>
          <strong>Water in the early morning, not midday.</strong> Watering under full afternoon sun
          wastes most of it to evaporation and can scald wet leaves — early morning watering gives
          plants a full day of moisture before the heat peaks.
        </li>
        <li>
          <strong>Mulch every container and bed.</strong> A layer of dry leaves, straw, or coco peat
          on the soil surface slows evaporation dramatically on a terrace, where uncovered soil can
          dry out within hours in peak summer heat.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Managing wind at height</h2>
      <p>
        Wind speed increases with height, and an open terrace with no walls or overhangs to break
        it can rock pots, snap stems, and dry out soil far faster than a sheltered balcony would.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Use heavier, wider-based containers for anything tall.</strong> A narrow pot with
          a top-heavy plant is the single most common way terrace plants topple — go for wide,
          stable bases, and terracotta or concrete over thin plastic where wind is a real concern.
        </li>
        <li>
          <strong>Stake early, not after the first storm.</strong> Push a stake in when you plant,
          not once a plant is already leaning, so you're not disturbing an established root system
          later in the season.
        </li>
        <li>
          <strong>Build a windbreak along the most exposed edge.</strong> A row of sturdy shrubs
          like bougainvillea or hibiscus along the windward side of the terrace shelters everything
          planted behind it, and doubles as a flowering display in its own right.
        </li>
        <li>
          <strong>Group smaller pots together rather than spacing them out.</strong> Clustered
          containers shelter each other from direct wind far better than the same pots spread
          singly across an open terrace.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Plants that actually handle both</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Bougainvillea</strong> takes full sun and strong wind better than almost any other
          flowering plant, and its woody stems don't snap the way soft, leafy growth does.
        </li>
        <li>
          <strong>Hibiscus</strong> handles harsh light and airflow well once established, and keeps
          flowering through the hottest months.
        </li>
        <li>
          <strong>Curry leaf, aloe vera, and other succulents</strong> are naturally suited to
          intense sun and dry, wind-exposed conditions — their thick leaves or deep taproots resist
          both scorch and moisture loss far better than soft-leaved plants.
        </li>
        <li>
          <strong>Marigold and other short, sturdy annuals</strong> stay low enough to avoid the
          worst of the wind while still taking full sun without complaint, making them a reliable
          filler between larger, sturdier plants.
        </li>
      </ul>

      <p>
        Sun and wind are the conditions your terrace garden has to live with every day — but they
        only matter once the structure underneath is sound. If you haven't yet, start with{" "}
        <Link
          href="/terrace-gardening/is-your-terrace-ready-load-waterproofing-layout"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          checking your terrace's load, waterproofing, and layout
        </Link>{" "}
        , then decide between{" "}
        <Link
          href="/terrace-gardening/raised-beds-vs-containers-terrace-gardening-india"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          raised beds and containers
        </Link>{" "}
        based on how exposed your particular terrace turns out to be.
      </p>
    </ArticleLayout>
  );
}
