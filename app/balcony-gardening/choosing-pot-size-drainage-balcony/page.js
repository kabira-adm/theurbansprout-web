import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Choosing the Right Pot Size and Drainage for Balcony Containers",
  description:
    "How to size containers correctly and get drainage right, so plants thrive and your balcony floor stays undamaged.",
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
        New gardeners usually pick a pot based on how it looks, then choose a plant to fit. That
        order causes most of the early failures we hear about — roots that rot in a pot too big,
        or plants that stay stunted in one too small. Get the container right first and a lot of
        other problems disappear on their own.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Size the pot to the plant, not the other way round</h2>
      <p>
        A good rule of thumb: the pot&apos;s diameter should be roughly 2 inches wider than the
        root ball for a seedling, and no more than 4–6 inches wider than the current pot when
        you&apos;re upgrading a mature plant. Oversized pots hold onto excess moisture the roots
        aren&apos;t using yet, which is the single most common cause of root rot on balconies.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Seedlings and herbs: 6–8 inch diameter pots</li>
        <li>Mid-size plants (marigold, curry leaf as a young plant): 10–12 inch pots</li>
        <li>Small trees or shrubs in containers: 16 inch+ pots, and expect to repot every 1–2 years</li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Drainage holes are not optional</h2>
      <p>
        A container without drainage holes will waterlog eventually, no matter how careful you
        are with watering. If you&apos;ve fallen for a beautiful pot with no holes, drill 3–4
        holes of roughly 1 cm each in the base, or use it as a decorative outer pot and keep the
        plant in a properly drained nursery pot inside it.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Protecting the floor underneath</h2>
      <p>
        This is the part that&apos;s specific to apartment living: drainage water that&apos;s fine
        on soil will stain or damage balcony tiles and can seep into the floor below over time.
        A few fixes:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Use a saucer under every pot, and empty it after watering rather than leaving standing water</li>
        <li>Raise pots slightly on pot feet or bricks to improve airflow under the base</li>
        <li>For railing planters, always use the matching drip tray — runoff on a lower floor's balcony is a common source of neighbour complaints</li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Materials, briefly</h2>
      <p>
        Terracotta breathes well and dries faster, which is forgiving if you tend to overwater,
        but it&apos;s heavy and can crack. Plastic is light and holds moisture longer, useful in
        hot, dry spots. Grow bags are inexpensive, drain well by default, and are a practical
        choice for renters since they&apos;re easy to move.
      </p>

      <p>
        Once the container is right, plant choice and watering both get noticeably easier — most
        of the guesswork is gone before you&apos;ve added a single seed.
      </p>
    </ArticleLayout>
  );
}
