import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "A Seasonal Balcony Gardening Calendar for India",
  description:
    "What to plant, prune, and watch for through summer, monsoon, and winter — a scannable season-by-season reference for Indian balcony gardens.",
  alternates: { canonical: "/balcony-gardening/seasonal-balcony-gardening-calendar-india" },
  openGraph: {
    type: "article",
    title: "A Seasonal Balcony Gardening Calendar for India",
    description:
      "What to plant, prune, and watch for through summer, monsoon, and winter — a scannable season-by-season reference for Indian balcony gardens.",
    url: "/balcony-gardening/seasonal-balcony-gardening-calendar-india",
  },
  twitter: {
    card: "summary",
    title: "A Seasonal Balcony Gardening Calendar for India",
    description:
      "What to plant, prune, and watch for through summer, monsoon, and winter — a scannable season-by-season reference for Indian balcony gardens.",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      title="A seasonal balcony gardening calendar for India"
      description="Indian balcony gardening runs on three seasons, not four, and each one asks for something different. Keep this as a reference to check back against."
      readTime="10 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "A Seasonal Balcony Gardening Calendar for India",
        description:
          "What to plant, prune, and watch for through summer, monsoon, and winter — a scannable season-by-season reference for Indian balcony gardens.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Most gardening calendars are written for four-season climates, which makes them close to
        useless for an Indian balcony. What actually matters here is three seasons — summer,
        monsoon, and winter — each with its own watering rhythm, its own risks, and its own list of
        what&apos;s worth planting. Exact timing shifts a few weeks depending on your region, but the
        general shape holds across most of India. Bookmark this and check back at the start of each
        season rather than trying to remember it all at once.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Summer (roughly March–June)</h2>
      <p>
        The toughest season for most balconies, especially anything west- or south-facing.
        Everything centres on managing heat and water loss.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Plant:</strong> heat-tolerant ornamentals like hibiscus and marigold, and fast
          seasonal vegetables like okra and cucumber if you&apos;re growing edibles — both handle heat
          better than cool-season crops.
        </li>
        <li>
          <strong>Prune:</strong> keep pruning light through peak summer — heavy cuts stress plants
          right when they&apos;re already working hardest to manage heat. Save major pruning for early
          summer, before the worst heat sets in, or wait for winter.
        </li>
        <li>
          <strong>Water:</strong> the biggest shift of the year — move to daily watering, often
          morning and evening for smaller pots, and check soil moisture more often than you think
          you need to. Terracotta and smaller pots dry out fastest.
        </li>
        <li>
          <strong>Watch for:</strong> spider mites, which thrive in hot, dry conditions, and
          general heat stress — wilting in the afternoon that recovers by evening is normal, but
          wilting that doesn&apos;t recover means the plant needs shade or more frequent watering.
        </li>
        <li>
          <strong>Other tasks:</strong> consider a temporary shade net for the harshest west-facing
          hours if plants are struggling despite regular watering, and mulch pot surfaces with dry
          leaves or coco peat to slow moisture loss.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Monsoon (roughly June/July–September)</h2>
      <p>
        The season most balcony problems are actually caused by overcorrection — gardeners keep
        watering out of habit right as the rain is doing the job for them, and that&apos;s how root rot
        starts.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Plant:</strong> leafy greens and herbs that enjoy the humidity — coriander, mint,
          and most foliage ornamentals establish well in monsoon conditions. Avoid starting
          succulents or cacti now; they&apos;re most vulnerable to rot in wet weather.
        </li>
        <li>
          <strong>Prune:</strong> remove any yellowing or damaged leaves promptly — humidity speeds
          up fungal issues, and rotting leaf matter left on a wet plant is an easy entry point for
          disease.
        </li>
        <li>
          <strong>Water:</strong> cut back drastically, sometimes to nothing for days at a stretch
          on an open balcony catching regular rain. Check soil moisture before watering rather than
          watering on a fixed schedule — this is the season a schedule actively hurts you.
        </li>
        <li>
          <strong>Watch for:</strong> root rot from waterlogging, fungal spots on leaves, and
          mealybugs, which tend to be more persistent in humid stretches. Make sure every pot&apos;s
          drainage hole is actually clear before the rains properly start.
        </li>
        <li>
          <strong>Other tasks:</strong> move particularly rain-sensitive pots (succulents especially)
          under an overhang or indoors during the heaviest weeks, and empty saucers after every
          rain so pots aren&apos;t sitting in standing water.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Winter (roughly October–February)</h2>
      <p>
        The most forgiving season across most of India, and the best window for the bigger jobs —
        repotting, major pruning, and starting new plants — that summer and monsoon aren&apos;t suited
        to.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Plant:</strong> the widest planting window of the year — most vegetables
          (tomatoes, chillies started early winter), flowering annuals, and this is also the best
          time to start or repot most ornamentals, since plants aren&apos;t under heat or moisture
          stress while establishing.
        </li>
        <li>
          <strong>Prune:</strong> the ideal season for structural or heavier pruning, since plants
          recover fastest when they&apos;re not also fighting heat or excess moisture.
        </li>
        <li>
          <strong>Water:</strong> back off to every 2–3 days for most pots as growth slows with
          cooler temperatures — overwatering in winter, when plants need less, is a common cause of
          root problems this season.
        </li>
        <li>
          <strong>Watch for:</strong> in north Indian cities with genuinely cold nights, frost-sensitive
          plants may need moving closer to a wall or indoors overnight during the coldest weeks; in
          most of peninsular and southern India this isn&apos;t a concern at all.
        </li>
        <li>
          <strong>Other tasks:</strong> this is the best season to top-dress pots with fresh compost
          and refresh potting mix that&apos;s compacted over the year, setting plants up before the
          harder seasons return.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Why three seasons instead of four</h2>
      <p>
        Most gardening advice defaults to spring, summer, autumn, and winter because it was written
        for climates that actually have all four in a meaningful way. Most of India doesn&apos;t —
        what exists instead is a hot dry stretch, a wet stretch, and a cool dry stretch, and trying
        to force a four-season calendar onto that pattern is exactly why so much generic gardening
        advice feels slightly off for Indian conditions. Thinking in summer, monsoon, and winter
        instead lines up much more closely with what a balcony plant actually experiences over the
        year, and makes the seasonal calendar far more useful in practice.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">A quick month-by-month cheat sheet</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li><strong>March–April:</strong> transition into summer watering; last easy window for repotting before peak heat.</li>
        <li><strong>May–June:</strong> peak heat management; daily watering; light pruning only.</li>
        <li><strong>July–August:</strong> monsoon in full swing; watering mostly paused; watch drainage and fungal issues closely.</li>
        <li><strong>September:</strong> monsoon tapering; resume light watering gradually as rain becomes less frequent.</li>
        <li><strong>October–November:</strong> best planting and repotting window of the year opens.</li>
        <li><strong>December–January:</strong> coolest stretch; reduced watering; good season for structural pruning.</li>
        <li><strong>February:</strong> transition back toward summer; a good time to check and refresh potting mix before heat returns.</li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Signs you&apos;ve missed a seasonal transition</h2>
      <p>
        Balconies rarely give clean, calendar-perfect signals that a season has turned, and it&apos;s
        easy to keep watering on the old routine a few weeks too long. A handful of tells are
        worth checking rather than going by the date alone:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Soil staying wet for days after summer watering habits</strong> — a sign the
          first rains have arrived and it&apos;s time to cut back, even if it doesn&apos;t yet feel like
          monsoon has properly set in.
        </li>
        <li>
          <strong>New growth slowing or stalling in what should still be a growing month</strong> —
          often means cooler nights have arrived earlier than expected, and it&apos;s time to ease off
          watering frequency before winter fully sets in.
        </li>
        <li>
          <strong>Leaves scorching at the edges despite regular watering</strong> — usually means
          summer heat has arrived before the watering routine caught up with it; increase frequency
          rather than volume per session.
        </li>
      </ul>
      <p>
        Treat the month ranges in this calendar as a starting expectation to check against your own
        balcony, not a fixed rule — a plant&apos;s own signals are always the more reliable guide once
        you know what to look for.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Adjusting for your region</h2>
      <p>
        This calendar is built around the general pattern most of India follows, but regional
        variation matters. Coastal cities like Mumbai and Chennai get more humidity year-round and
        a longer, wetter monsoon. North Indian cities like Delhi see a more distinct, colder winter
        where frost-sensitive plants need real attention. Bengaluru and much of the Deccan plateau
        get a milder summer than the plains but can still swing hot in April–May. Use the seasonal
        principles here — heat management in summer, restraint with water in monsoon, the bigger
        jobs saved for winter — and adjust exact timing by a few weeks based on what your own
        balcony is actually telling you.
      </p>
    </ArticleLayout>
  );
}
