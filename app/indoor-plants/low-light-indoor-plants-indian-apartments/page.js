import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Best Low-Light Indoor Plants for Indian Apartments",
  description:
    "Which plants actually survive a north-facing room or a flat boxed in by neighbouring towers, and how to place them.",
  alternates: { canonical: "/indoor-plants/low-light-indoor-plants-indian-apartments" },
  openGraph: {
    type: "article",
    title: "Best Low-Light Indoor Plants for Indian Apartments",
    description:
      "Which plants actually survive a north-facing room or a flat boxed in by neighbouring towers, and how to place them.",
    url: "/indoor-plants/low-light-indoor-plants-indian-apartments",
  },
  twitter: {
    card: "summary",
    title: "Best Low-Light Indoor Plants for Indian Apartments",
    description:
      "Which plants actually survive a north-facing room or a flat boxed in by neighbouring towers, and how to place them.",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Indoor Plants"
      hubHref="/indoor-plants"
      title="Best low-light indoor plants for Indian apartments"
      description="Tall neighbouring buildings, deep floor plans, and north-facing rooms mean most Indian apartments have less usable light than people assume. These plants don't just tolerate that. They're built for it."
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
        &quot;Low light&quot; isn&apos;t the same as no light. It means no direct sun, which
        describes most Indian apartment living rooms and bedrooms whether you&apos;ve noticed or
        not. A room can look plenty bright to your eyes and still hand a plant a few metres from
        the window almost nothing usable. Try this before buying anything: hold your hand about a
        metre from the window at midday. A soft, blurry shadow means the spot works for the
        plants below. No shadow at all, and you&apos;re looking at a spot for a grow light, not a
        living plant.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Plants that genuinely handle low light</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Snake Plant (Sansevieria):</strong> the most forgiving option available in
          India. Survives corners, corridors, and bathrooms with a small window. Its main failure
          mode isn&apos;t light, it&apos;s overwatering.
        </li>
        <li>
          <strong>ZZ Plant (Zamioculcas zamiifolia):</strong> stores water in underground
          rhizomes, so it copes with both low light and irregular care. Slow growing, which is a
          feature indoors, not a flaw.
        </li>
        <li>
          <strong>Pothos (Money Plant):</strong> grows in water or soil, tolerates deep shade,
          and is easy to propagate if you want more for other rooms.
        </li>
        <li>
          <strong>Peace Lily:</strong> one of the few low-light plants that also flowers indoors,
          and it wilts visibly when thirsty, which makes watering timing obvious.
        </li>
        <li>
          <strong>Spider Plant:</strong> handles low light and hard tap water better than most,
          and produces plantlets you can pot separately.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Placement matters more than the plant list</h2>
      <p>
        Even a shade-tolerant plant wants some indirect daylight. A spot within 2–3 metres of a
        window, or in the light path of a balcony door, works for all five plants above. A room
        with no window at all, such as an interior study or a windowless bathroom, needs at least a few
        hours of a warm-white LED grow bulb daily. Nothing on this list survives permanent
        darkness indefinitely, however tough its reputation.
      </p>
      <p>
        One thing changes specifically because of the low light: these plants pull water more
        slowly than a sun-loving plant does, since photosynthesis (and the water uptake that goes
        with it) slows down without direct sun. Watering on the schedule you&apos;d use for a
        sunny balcony plant is probably the most common way people kill an otherwise well-chosen
        low-light plant.{" "}
        <Link
          href="/indoor-plants/stop-overwatering-indoor-plants"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          See the full overwatering guide →
        </Link>
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Rotating and cleaning leaves</h2>
      <p>
        Low-light plants lean hard toward whatever light they can find, so give the pot a quarter
        turn every week or two to keep growth even instead of lopsided. Dust matters more than
        people expect in a city flat too. It settles on broad leaves and blocks a surprising
        amount of the little light there is, so wipe leaves like Peace Lily and Pothos with a damp
        cloth once a month. Indoor plants never get rain to do that job for them.
      </p>
    </ArticleLayout>
  );
}
