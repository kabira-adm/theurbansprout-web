import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Growing Coriander and Mint in Containers (India Edition)",
  description:
    "How to grow coriander and mint from kitchen seed and cuttings in small containers, tuned for Indian heat, tap water, and balcony space.",
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Kitchen Gardening"
      hubHref="/kitchen-gardening"
      title="Growing coriander and mint in containers (India edition)"
      description="Coriander and mint are the two herbs every Indian kitchen goes through fastest — and the two easiest to grow yourself, starting from what's already in your kitchen."
      readTime="6 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Growing Coriander and Mint in Containers (India Edition)",
        description:
          "How to grow coriander and mint from kitchen seed and cuttings in small containers, tuned for Indian heat, tap water, and balcony space.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Both of these plants are forgiving, fast, and don&apos;t need a proper garden bed — just a
        container, decent light, and a bit of patience with the first sowing. They also fail for
        different reasons, so treat them separately rather than assuming one routine works for
        both.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Coriander (dhania): starting from kitchen seed</h2>
      <p>
        The whole dried coriander seeds sold as a spice will germinate — you don&apos;t need
        packet seed to start.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Crack the seeds first.</strong> Each coriander &quot;seed&quot; is actually two
          seeds fused together. Gently crush them with a rolling pin or the back of a spoon to
          split the pair — this roughly doubles your germination rate.
        </li>
        <li>
          <strong>Use a wide, shallow container.</strong> A 6–8 inch deep tub works better than a
          tall pot; coriander has a taproot but doesn&apos;t need much depth, and a wide surface
          lets you sow densely.
        </li>
        <li>
          <strong>Sow shallow and scatter.</strong> Press seeds about 1 cm into moist potting mix,
          spaced roughly 2 cm apart. Coriander doesn&apos;t transplant well, so sow it where it
          will grow.
        </li>
        <li>
          <strong>Keep it out of peak afternoon sun while germinating.</strong> Morning sun is
          fine, but harsh 1–4 pm summer sun can dry out the surface before seeds sprout. Move it
          to a slightly shadier spot for the first 10 days, then shift to a sunnier one.
        </li>
        <li>
          <strong>Harvest by cutting, not pulling.</strong> Once plants are 10–15 cm tall, snip
          outer stems near the base instead of uprooting the plant — this keeps it producing for
          several more weeks.
        </li>
      </ul>
      <p>
        Coriander bolts (flowers and turns bitter) fast once temperatures cross around 30°C, so in
        most of India it grows best from October to February. In peak summer, expect a shorter
        window before it bolts — treat it as a quick, repeat-sown crop rather than a
        year-round plant.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Mint (pudina): starting from a cutting</h2>
      <p>
        Unlike coriander, mint grows year-round in most Indian cities and is nearly impossible to
        kill once it roots — the challenge is containing it, not growing it.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Root it in water first.</strong> Take a 4–5 inch cutting from a fresh bunch
          (the kind sold for chutney), strip the lower leaves, and place it in a glass of water on
          a windowsill. Roots usually appear within a week to ten days.
        </li>
        <li>
          <strong>Pot it once roots are 2–3 cm long.</strong> Move it into a container with
          drainage and regular potting mix. Planting too early, before roots have formed, is the
          most common reason cuttings fail.
        </li>
        <li>
          <strong>Give mint its own pot.</strong> Its roots spread aggressively underground and
          will crowd out anything sharing the container — don&apos;t mix it with coriander or
          other herbs.
        </li>
        <li>
          <strong>Keep soil consistently moist.</strong> Mint is far less drought-tolerant than
          most herbs and wilts quickly in dry soil, especially in a small pot on a hot balcony.
        </li>
        <li>
          <strong>Pinch the tips regularly.</strong> Removing the growing tips every couple of
          weeks keeps the plant bushy instead of tall and leggy, and gives you a steady harvest.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">A note on water and soil</h2>
      <p>
        Both herbs are sensitive to compacted soil in small containers — mix in coco peat or
        compost so water drains through rather than sitting at the bottom. If you&apos;re not sure
        what mix to use or how often to feed these containers,{" "}
        <Link
          href="/kitchen-gardening/soil-and-fertilizer-basics-container-vegetables"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          our soil and fertilizer basics guide
        </Link>{" "}
        covers exactly that. And if your balcony runs hot through summer,{" "}
        <Link
          href="/balcony-gardening/watering-schedule-indian-summers-monsoons"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          this watering schedule for Indian summers and monsoons
        </Link>{" "}
        will help you adjust frequency instead of watering on autopilot.
      </p>
    </ArticleLayout>
  );
}
