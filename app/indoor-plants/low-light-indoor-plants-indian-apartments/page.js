import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Best Low-Light Indoor Plants for Indian Apartments",
  description:
    "Which plants actually survive a north-facing room or a flat boxed in by neighbouring towers, and how to place them.",
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Indoor Plants"
      hubHref="/indoor-plants"
      title="Best low-light indoor plants for Indian apartments"
      description="Tall neighbouring buildings, deep floor plans, and north-facing rooms mean most Indian apartments have less usable light than people assume. These plants don't just tolerate that — they're built for it."
      readTime="6 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Best Low-Light Indoor Plants for Indian Apartments",
        description:
          "Which plants actually survive a north-facing room or a flat boxed in by neighbouring towers, and how to place them.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        &quot;Low light&quot; doesn&apos;t mean no light — it means no direct sun, which is the
        situation in most Indian apartment living rooms and bedrooms. A room can look bright to
        your eyes and still get almost no usable light for a plant a few metres from the window.
        Before buying anything, hold your hand about a metre from the window at midday: if it
        casts a soft, blurry shadow, that spot works for the plants below. If it casts no shadow
        at all, you&apos;re looking at a spot for artificial grow lights, not a live plant.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Plants that genuinely handle low light</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Snake Plant (Sansevieria)</strong> — the most forgiving option available in
          India. Survives corners, corridors, and bathrooms with a small window. Its main failure
          mode isn&apos;t light, it&apos;s overwatering.
        </li>
        <li>
          <strong>ZZ Plant (Zamioculcas zamiifolia)</strong> — stores water in underground
          rhizomes, so it copes with both low light and irregular care. Slow growing, which is a
          feature indoors, not a flaw.
        </li>
        <li>
          <strong>Pothos (Money Plant)</strong> — grows in water or soil, tolerates deep shade,
          and is easy to propagate if you want more for other rooms.
        </li>
        <li>
          <strong>Peace Lily</strong> — one of the few low-light plants that also flowers indoors,
          and it wilts visibly when thirsty, which makes watering timing obvious.
        </li>
        <li>
          <strong>Spider Plant</strong> — handles low light and hard tap water better than most,
          and produces plantlets you can pot separately.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Placement matters more than the plant list</h2>
      <p>
        Even a shade-tolerant plant needs some indirect daylight — a spot within 2–3 metres of a
        window, or directly in the light path of a balcony door, works for all five plants above.
        Rooms with no window at all (an interior study, a windowless bathroom) need at least a few
        hours of a warm-white LED grow bulb a day; no plant on this list survives permanent
        darkness indefinitely.
      </p>
      <p>
        One adjustment specific to low light: these plants use water more slowly than a sun-loving
        plant would, because photosynthesis — and therefore water uptake — slows down without
        direct light. Watering on the same schedule you&apos;d use for a sunny balcony plant is
        the single most common way people kill an otherwise well-chosen low-light plant.{" "}
        <Link
          href="/indoor-plants/stop-overwatering-indoor-plants"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          See the full overwatering guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Rotating and cleaning leaves</h2>
      <p>
        Low-light plants lean hard toward whatever light source they have — turn the pot a quarter
        turn every week or two so growth stays even instead of one-sided. Dust also blocks a
        surprising amount of light in a city apartment; wipe broad leaves (Peace Lily, Pothos)
        with a damp cloth once a month rather than relying on rain, which indoor plants never get.
      </p>

      <p>
        Get placement and watering right for these five, and you&apos;ve covered nearly every room
        type in a typical Indian flat — from a bright balcony-adjacent corner to a dim interior
        passage.
      </p>
    </ArticleLayout>
  );
}
