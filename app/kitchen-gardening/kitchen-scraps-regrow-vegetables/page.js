import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Kitchen Scraps You Can Actually Regrow (and Ones You Can't)",
  description:
    "Which vegetable scraps genuinely regrow into usable plants in an Indian kitchen, which ones are a myth, and how to do it right.",
  alternates: { canonical: "/kitchen-gardening/kitchen-scraps-regrow-vegetables" },
  openGraph: {
    type: "article",
    title: "Kitchen Scraps You Can Actually Regrow (and Ones You Can't)",
    description:
      "Which vegetable scraps genuinely regrow into usable plants in an Indian kitchen, which ones are a myth, and how to do it right.",
    url: "/kitchen-gardening/kitchen-scraps-regrow-vegetables",
  },
  twitter: {
    card: "summary",
    title: "Kitchen Scraps You Can Actually Regrow (and Ones You Can't)",
    description:
      "Which vegetable scraps genuinely regrow into usable plants in an Indian kitchen, which ones are a myth, and how to do it right.",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Kitchen Gardening"
      hubHref="/kitchen-gardening"
      title="Kitchen scraps you can actually regrow (and ones you can't)"
      description="A lot of regrowing advice online overpromises. Here's what genuinely works from scraps you already have in an Indian kitchen, and what to stop wasting counter space on."
      readTime="6 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Kitchen Scraps You Can Actually Regrow (and Ones You Can't)",
        description:
          "Which vegetable scraps genuinely regrow into usable plants in an Indian kitchen, which ones are a myth, and how to do it right.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Regrowing from scraps costs nothing and puts vegetables you were about to bin to work
        instead, a genuinely good place to start a kitchen garden. But not every viral &quot;grow
        it from scraps&quot; video actually leads anywhere edible. Some of it is closer to a
        science-fair project than a food source. Here&apos;s an honest split, based on the
        vegetables that actually show up in Indian kitchens.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Actually works, and worth doing</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Spring onion (green onion).</strong> Save the white base with roots attached,
          place it root-down in a shallow bowl of water, and it regrows fresh green shoots within
          a week. This is the most reliable regrow on the list, near-guaranteed success.
        </li>
        <li>
          <strong>Coriander and mint stems.</strong> If you buy bunches with intact stems, the same
          water-rooting method used for mint cuttings works. See our{" "}
          <Link
            href="/kitchen-gardening/growing-coriander-mint-containers-india"
            className="font-medium text-brand-green hover:text-brand-green-dark"
          >
            coriander and mint growing guide
          </Link>{" "}
          for the full method.
        </li>
        <li>
          <strong>Curry leaf sprigs with a bit of stem.</strong> Occasionally root in water, though
          success is inconsistent. A nursery-bought sapling is a more reliable way to start a
          curry leaf plant.
        </li>
        <li>
          <strong>Fenugreek (methi) seeds.</strong> Not technically a scrap, but the whole
          fenugreek seeds sitting in your spice box germinate readily when soaked overnight and
          sown shallow. A genuinely fast, easy win, ready to harvest as microgreens in under two
          weeks.
        </li>
        <li>
          <strong>Potato eyes.</strong> A potato with visible sprouting &quot;eyes&quot; can be cut
          into pieces (each with an eye) and planted 5–7 cm deep in a large, deep container. It
          takes real space and months to produce a harvest, but it does work.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Technically regrows, rarely worth it</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Onion bulb bottoms.</strong> They&apos;ll sprout green shoots, but those shoots
          are thin and the original bulb doesn&apos;t regenerate into a proper new onion in a
          container setup. You get green onion-like tops, not a fresh bulb.
        </li>
        <li>
          <strong>Garlic cloves.</strong> A sprouted clove planted in soil will grow greens you can
          snip and use like chives, but forming a full new garlic bulb takes 4–5 months and a lot
          more space than most balconies have to spare for one bulb&apos;s worth of garlic.
        </li>
        <li>
          <strong>Ginger knobs.</strong> This does work and is popular online, but it&apos;s slow,
          taking 8 to 10 months to a usable harvest, and needs a wide, shallow container kept
          consistently warm and moist. Fine as a patient side project, not a quick win.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Doesn&apos;t really work: skip these</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Tomato slices or seeds squeezed from a store tomato.</strong> They can
          germinate, but most supermarket tomatoes are hybrid varieties, so the resulting plant is
          often less productive than one grown from a proper seed packet or nursery seedling.
        </li>
        <li>
          <strong>Regrowing a full carrot or beetroot from the top.</strong> The cut top will
          sprout leafy greens in water, which look promising, but the root itself does not
          regenerate into a new carrot or beet. You only get greens, not another vegetable.
        </li>
      </ul>

      <p>
        If your scrap is regrowing something you can actually eat within a week or two, like spring
        onion, herbs, or methi, it&apos;s worth the counter space. If it only regrows leaves, or takes
        months for a small return, it&apos;s usually more useful chopped into the compost. Either way,
        once a scrap has rooted, get it into proper soil sooner rather than later. Roots left
        sitting in water for weeks tend to come out weaker than ones moved to potting mix early.
      </p>
    </ArticleLayout>
  );
}
