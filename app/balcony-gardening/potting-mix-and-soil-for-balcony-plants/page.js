import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Choosing Potting Mix and Soil for Balcony Plants",
  description:
    "What actually goes into a good potting mix, a simple all-purpose ratio, and how needs differ for succulents, leafy ornamentals, and flowering plants.",
  alternates: { canonical: "/balcony-gardening/potting-mix-and-soil-for-balcony-plants" },
  openGraph: {
    type: "article",
    title: "Choosing Potting Mix and Soil for Balcony Plants",
    description:
      "What actually goes into a good potting mix, a simple all-purpose ratio, and how needs differ for succulents, leafy ornamentals, and flowering plants.",
    url: "/balcony-gardening/potting-mix-and-soil-for-balcony-plants",
  },
  twitter: {
    card: "summary",
    title: "Choosing Potting Mix and Soil for Balcony Plants",
    description:
      "What actually goes into a good potting mix, a simple all-purpose ratio, and how needs differ for succulents, leafy ornamentals, and flowering plants.",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      title="Choosing potting mix and soil for balcony plants"
      description="Garden soil and potting mix are not the same thing, and container plants pay the price when they're treated as if they are. Here's what to actually put in the pot."
      readTime="9 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Choosing Potting Mix and Soil for Balcony Plants",
        description:
          "What actually goes into a good potting mix, a simple all-purpose ratio, and how needs differ for succulents, leafy ornamentals, and flowering plants.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Ask a new gardener why their plant is struggling and dig soil straight from a park or a
        construction site is a common answer for what&apos;s in the pot. It looks like soil, it&apos;s
        free, and outdoors it grows things without any help. None of that makes it right for a
        container. Garden soil is built for open ground, where roots spread sideways and down as
        far as they need to, worms and insects keep it aerated, and rain drains away through
        metres of earth underneath. Put the same soil in a pot and it compacts into something close
        to clay within weeks. Water sits on top instead of draining through, roots suffocate for
        lack of air, and the plant sulks no matter how carefully you water it.
      </p>
      <p>
        A proper potting mix solves this by being built for a completely different job: holding a
        plant upright in a small volume of material, draining fast enough that roots get air
        between waterings, and still holding enough moisture and nutrients to keep the plant fed.
        Once you understand what each ingredient in a mix is actually doing, you can put one
        together yourself for a fraction of what bagged mixes cost, and adjust it to whatever
        you&apos;re growing.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">
        The three jobs every potting mix has to do
      </h2>
      <p>
        Every ingredient you add to a mix is there to help with one of three things: structure and
        drainage, moisture retention, or nutrition. Most potting problems trace back to a mix that
        overdoes one of these at the expense of the others — usually retaining too much water and
        not draining enough.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Cocopeat (coco peat / coir pith)</strong> — the backbone of most Indian potting
          mixes. It&apos;s a byproduct of coconut husk processing, holds moisture well without
          waterlogging, and has a naturally loose texture that keeps the mix from compacting. Buy
          it as a compressed brick and soak it in water for 15–20 minutes to expand it before use.
        </li>
        <li>
          <strong>Compost or well-rotted manure</strong> — the nutrient source. Compost also adds
          a small amount of structure and beneficial microbial life that a purely mineral mix
          lacks. Vermicompost is widely available in Indian nurseries and works well here.
        </li>
        <li>
          <strong>Perlite, sand, or coarse grit</strong> — pure drainage and aeration, with no
          nutrient value at all. These create physical air pockets in the mix that plain cocopeat
          and compost, both quite fine-textured on their own, can&apos;t provide by themselves.
        </li>
      </ul>
      <p>
        Garden soil or red soil can still play a supporting role — mainly for weight and structure
        in mixes for larger or top-heavy plants — but it should never be the majority ingredient in
        a container mix the way it can be assumed to be by someone starting out.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">
        A simple all-purpose ratio to start from
      </h2>
      <p>
        For general balcony planting — a mix of ornamentals, a few flowering plants, nothing too
        specialised — this ratio is a reliable default:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>40% cocopeat</li>
        <li>30% compost or vermicompost</li>
        <li>20% perlite or coarse sand</li>
        <li>10% garden soil, for weight and mineral content (optional but useful for larger pots)</li>
      </ul>
      <p>
        Mix the ingredients dry in a large tub or directly on a tarp before filling pots, so
        everything is distributed evenly rather than sitting in clumps. This ratio is genuinely a
        starting point, not a rulebook — treat it as the base you adjust once you know what a
        specific plant wants.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Succulents and cacti want a leaner, faster-draining mix</h2>
      <p>
        Succulents store water in their leaves and stems, which means their roots are adapted to
        drying out fully between waterings rather than sitting in consistently moist soil. The
        all-purpose ratio above holds too much moisture for them and is one of the most common
        reasons succulents rot on Indian balconies, especially through the monsoon. Cut the compost
        back and load up on drainage instead: roughly 40% cocopeat, 40% coarse sand or perlite, and
        20% compost. Some growers skip cocopeat almost entirely for cacti and lean on sand and grit
        instead — worth trying if you&apos;re losing succulents to rot on the mix above.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Leafy ornamentals want more moisture retention, not less</h2>
      <p>
        Money plant, philodendrons, ferns, and most other leafy foliage plants are the opposite
        case — they&apos;re used to consistently moist conditions and dry out faster than they&apos;d
        like on a hot, breezy balcony. For these, push the cocopeat up to around 50% and drop
        perlite or sand down to 15%, keeping compost around 30–35%. The mix should feel noticeably
        more moisture-retentive to the touch than the all-purpose version, without ever staying
        waterlogged.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Flowering plants need the nutrition built in from the start</h2>
      <p>
        Marigold, hibiscus, and other regularly flowering plants are heavy feeders during their
        bloom cycles, and a lean mix leaves them running out of nutrients right when they need them
        most. Push compost up to around 35–40% of the mix, and consider working in a small amount
        of bone meal or a phosphorus-rich organic feed at planting time specifically to support
        flowering, on top of the regular compost. These plants also benefit from more frequent
        top-dressing once established, since flowering draws down nutrients faster than foliage
        growth alone.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Buying a bag vs mixing your own</h2>
      <p>
        Bagged potting mix from a nursery is a reasonable option if you only need a small quantity
        or want to skip the process entirely, but check the label or ask what&apos;s actually in
        it — some cheaper bagged mixes lean almost entirely on garden soil with a token amount of
        compost, which won&apos;t behave like a proper container mix. For anyone with more than a
        handful of pots, buying cocopeat bricks, compost, and sand separately and mixing your own
        works out significantly cheaper per litre, and lets you tune the ratio per plant the way a
        one-size-fits-all bag never can.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Signs your mix needs adjusting</h2>
      <p>
        You don&apos;t need to get the ratio perfect on the first attempt — the mix itself will
        tell you fairly quickly if something&apos;s off, as long as you know what to look for.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Water sits on top instead of soaking in, or takes a long time to drain</strong> —
          the mix is too dense. Work in more perlite or coarse sand next time you repot, and avoid
          pressing the mix down firmly when filling a pot.
        </li>
        <li>
          <strong>Soil dries out within a day, even for moisture-loving plants</strong> — not
          enough cocopeat or compost relative to drainage material. Increase the moisture-retentive
          share of the mix.
        </li>
        <li>
          <strong>A white, crusty layer forms on the surface</strong> — usually mineral buildup
          from hard tap water rather than a mix problem itself, though it&apos;s worth scraping off
          and topping up with fresh mix regardless.
        </li>
        <li>
          <strong>The mix has visibly shrunk and pulled away from the pot&apos;s edges</strong> —
          organic matter like compost and cocopeat breaks down and compacts over time, which is
          normal, but it means the mix needs refreshing rather than continuing to sit as is.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Refreshing mix in pots you&apos;re not repotting</h2>
      <p>
        Not every pot needs a full repot every year, but the mix inside it still ages — organic
        components break down, nutrients get used up or wash out through drainage, and the texture
        gradually compacts even without the plant outgrowing the pot. For plants you&apos;re happy
        to leave in place, scrape away the top 2–3 centimetres of old mix every 6–8 months and
        replace it with a fresh batch of the same ratio you started with. This refreshes nutrition
        and loosens surface compaction without disturbing the root system the way a full repot
        would, and it&apos;s a far quicker job than repotting every plant on the balcony on a fixed
        schedule.
      </p>

      <p>
        None of this needs to be exact. Potting mix is forgiving territory — get reasonably close
        to these ratios and most balcony plants will do fine. What matters far more is not
        defaulting to garden soil on its own, and adjusting the ratio toward drainage or retention
        based on what you&apos;re actually growing, rather than using one mix for everything on the
        balcony.
      </p>
    </ArticleLayout>
  );
}
