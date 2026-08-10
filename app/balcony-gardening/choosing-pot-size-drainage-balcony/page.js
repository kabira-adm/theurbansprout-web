import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Choosing the Right Pot Size and Drainage for Balcony Containers",
  description:
    "How to size containers correctly and get drainage right, so plants thrive and your balcony floor stays undamaged.",
  alternates: { canonical: "/balcony-gardening/choosing-pot-size-drainage-balcony" },
  openGraph: {
    type: "article",
    title: "Choosing the Right Pot Size and Drainage for Balcony Containers",
    description:
      "How to size containers correctly and get drainage right, so plants thrive and your balcony floor stays undamaged.",
    url: "/balcony-gardening/choosing-pot-size-drainage-balcony",
  },
  twitter: {
    card: "summary",
    title: "Choosing the Right Pot Size and Drainage for Balcony Containers",
    description:
      "How to size containers correctly and get drainage right, so plants thrive and your balcony floor stays undamaged.",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      title="Choosing the right pot size and drainage for balcony containers"
      description="Most balcony gardening problems start at the pot, not the plant. Get size and drainage right first."
      readTime="6 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Choosing the Right Pot Size and Drainage for Balcony Containers",
        description:
          "How to size containers correctly and get drainage right, so plants thrive and your balcony floor stays undamaged.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Most people pick a pot because they like the look of it, then go hunting for a plant to
        fit. That order is backwards, and it explains a lot of the dead balcony plants we hear
        about: roots rotting away in something too big, or a plant sulking for months in
        something too small. Sort the container out first. A surprising number of other problems
        never even show up.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Size the pot to the plant, not the other way round</h2>
      <p>
        A decent rule of thumb for a seedling: the pot should be roughly 2 inches wider than the
        root ball. When you&apos;re moving a mature plant into a bigger home, don&apos;t go more
        than 4–6 inches wider than its current pot. Go bigger than that and the extra soil holds
        onto water the roots aren&apos;t ready to use yet, which is probably the biggest single
        cause of root rot on balconies.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Seedlings and herbs: 6–8 inch diameter pots</li>
        <li>Mid-size plants (marigold, curry leaf as a young plant): 10–12 inch pots</li>
        <li>Small trees or shrubs in containers: 16 inch+ pots, and expect to repot every 1–2 years</li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Drainage holes are not optional</h2>
      <p>
        A pot with no drainage holes will waterlog sooner or later, however carefully you water
        it. Fallen for a pretty pot with a sealed base anyway? Drill 3–4 holes, about 1 cm each,
        into the bottom. Or skip the drilling and use it purely as a decorative outer shell, with
        the actual plant sitting in a properly drained nursery pot inside.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Protecting the floor underneath</h2>
      <p>
        This is the bit that&apos;s particular to apartment life. Drainage water that soil soaks
        up without complaint will happily stain a balcony tile, and given enough time it can seep
        into the floor slab underneath. Use a saucer under every pot, but only if you actually
        empty it after watering; a saucer that&apos;s left full just becomes a second container
        the roots are sitting in. Raising pots slightly on pot feet or a couple of bricks helps
        air move under the base and slows staining. For railing planters, always fit the matching
        drip tray — runoff dripping straight onto the balcony below is one of the more common
        sources of society complaints in high-rises.
      </p>

      <p>
        On materials, briefly: terracotta breathes and dries fast, which forgives you if you tend
        to overwater, but it&apos;s heavy and chips if you knock it. Plastic holds moisture longer
        and suits hot, dry corners where things dry out too quickly anyway. Grow bags are cheap,
        drain well without any fuss, and are the easiest option to shift around if you&apos;re
        renting and might be moving the whole setup next year.
      </p>
    </ArticleLayout>
  );
}
