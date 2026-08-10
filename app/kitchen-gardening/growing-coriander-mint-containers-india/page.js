import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Growing Coriander and Mint in Containers (India Edition)",
  description:
    "How to grow coriander and mint from kitchen seed and cuttings in small containers, tuned for Indian heat, tap water, and balcony space.",
  alternates: { canonical: "/kitchen-gardening/growing-coriander-mint-containers-india" },
  openGraph: {
    type: "article",
    title: "Growing Coriander and Mint in Containers (India Edition)",
    description:
      "How to grow coriander and mint from kitchen seed and cuttings in small containers, tuned for Indian heat, tap water, and balcony space.",
    url: "/kitchen-gardening/growing-coriander-mint-containers-india",
  },
  twitter: {
    card: "summary",
    title: "Growing Coriander and Mint in Containers (India Edition)",
    description:
      "How to grow coriander and mint from kitchen seed and cuttings in small containers, tuned for Indian heat, tap water, and balcony space.",
  },
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
        Neither of these needs a proper garden bed. A container, decent light, and a little
        patience with the first sowing is all it takes. They fail for completely different
        reasons though, so don&apos;t assume one routine covers both.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Coriander (dhania): starting from kitchen seed</h2>
      <p>
        The whole dried coriander seeds sitting in your spice box will germinate just fine — no
        need to buy packet seed.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Crack the seeds first.</strong> Each coriander &quot;seed&quot; is actually two
          seeds fused together. Roll them under a rolling pin or press with the back of a spoon
          until you hear them crack and split; this roughly doubles your germination rate.
        </li>
        <li>
          <strong>Use a wide, shallow container.</strong> A 6–8 inch deep tub beats a tall pot.
          Coriander has a taproot but doesn&apos;t need much depth, and a wide surface lets you
          sow densely.
        </li>
        <li>
          <strong>Sow shallow and scatter.</strong> Press seeds about 1 cm into moist potting mix,
          spaced roughly 2 cm apart. Coriander doesn&apos;t transplant well, so sow it where it
          will grow.
        </li>
        <li>
          <strong>Keep it out of peak afternoon sun while germinating.</strong> Morning sun is
          fine, but harsh 1–4 pm summer sun can dry the surface out before seeds even sprout. Give
          it a slightly shadier spot for the first 10 days, then move it somewhere sunnier.
        </li>
        <li>
          <strong>Harvest by cutting, not pulling.</strong> Once plants reach 10–15 cm, snip outer
          stems near the base instead of pulling the whole plant up. It keeps producing for
          several more weeks that way.
        </li>
      </ul>
      <p>
        Coriander bolts (flowers and turns bitter) fast once temperatures cross about 30°C, so
        across most of India it does best from October to February. Sow it in peak summer and
        expect a much shorter window before it bolts on you — treat it as a quick, repeat-sown
        crop rather than something you keep going year-round.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Mint (pudina): starting from a cutting</h2>
      <p>
        Mint grows year-round in most Indian cities and is nearly impossible to kill once it takes
        root. The real challenge is containing it, not growing it.
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
          most herbs and wilts fast in dry soil, especially in a small pot on a hot balcony.
        </li>
        <li>
          <strong>Pinch the tips regularly.</strong> Removing the growing tips every couple of
          weeks keeps the plant bushy instead of tall and leggy, and gives you a steady harvest.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">A note on water and soil</h2>
      <p>
        Both herbs struggle in compacted soil in a small container, so mix in coco peat or
        compost so water drains through instead of pooling at the bottom. Not sure what mix to
        use or how often to feed these pots?{" "}
        <Link
          href="/kitchen-gardening/soil-and-fertilizer-basics-container-vegetables"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          Our soil and fertilizer basics guide
        </Link>{" "}
        covers exactly that. And if your balcony runs hot through summer,{" "}
        <Link
          href="/balcony-gardening/watering-schedule-indian-summers-monsoons"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          this watering schedule for Indian summers and monsoons
        </Link>{" "}
        will help you adjust rather than watering on autopilot.
      </p>
    </ArticleLayout>
  );
}
