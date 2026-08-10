import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Is Your Terrace Ready? Load, Waterproofing, and Layout",
  description:
    "Check structural load, waterproofing, and drainage layout before you put a single pot on your terrace — the three things most terrace gardens skip.",
  alternates: { canonical: "/terrace-gardening/is-your-terrace-ready-load-waterproofing-layout" },
  openGraph: {
    type: "article",
    title: "Is Your Terrace Ready? Load, Waterproofing, and Layout",
    description:
      "Check structural load, waterproofing, and drainage layout before you put a single pot on your terrace — the three things most terrace gardens skip.",
    url: "/terrace-gardening/is-your-terrace-ready-load-waterproofing-layout",
  },
  twitter: {
    card: "summary",
    title: "Is Your Terrace Ready? Load, Waterproofing, and Layout",
    description:
      "Check structural load, waterproofing, and drainage layout before you put a single pot on your terrace — the three things most terrace gardens skip.",
  },
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Terrace Gardening"
      hubHref="/terrace-gardening"
      title="Is your terrace ready? Load, waterproofing, and layout"
      description="Before you buy a single pot, three questions decide whether a terrace garden survives its first monsoon: how much weight it can carry, whether the slab is protected, and how water will actually leave it."
      readTime="9 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Is Your Terrace Ready? Load, Waterproofing, and Layout",
        description:
          "Check structural load, waterproofing, and drainage layout before you put a single pot on your terrace — the three things most terrace gardens skip.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        A balcony garden that goes wrong usually just means a few dead plants. A terrace garden
        that goes wrong can mean cracked waterproofing, a leak in the ceiling of the flat below, or
        a structural problem nobody notices until it&apos;s expensive to fix. That&apos;s not a reason to
        avoid terrace gardening — a terrace is genuinely the best growing space most Indian homes
        will ever have, flat, open, and usually getting more sun than any balcony in the building.
        It&apos;s a reason to spend one honest afternoon checking three things before you drag a single
        bag of soil upstairs: how much weight the slab can actually take, whether the waterproofing
        under your feet can survive daily watering on top of the monsoon it already deals with, and
        how the whole space should be laid out so water has somewhere to go. Skip these and you&apos;re
        gardening on borrowed time. Get them right and everything you build afterward — raised
        beds, a full container setup, whatever you end up with — sits on solid ground, literally.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Structural load — how much weight your terrace can actually take</h2>
      <p>
        Soil looks harmless in a bag. Wet, packed into a container, and topped up with actively
        growing plants, it isn&apos;t. A single large container — the kind you&apos;d want for a dwarf
        pomegranate or a full-grown curry leaf tree — can weigh over 150 kg once the mix is
        saturated after watering. Line up a dozen of those along one wall, or fill a raised bed with
        the same soil, and you&apos;re talking about a genuinely significant, concentrated load sitting
        on a slab that was probably designed with laundry lines and the occasional gathering in
        mind, not a garden.
      </p>
      <p>
        Most residential terraces in India are built for a live load of somewhere around 150–200 kg
        per square metre, spread evenly. That&apos;s a reasonable amount for a garden, as long as you
        actually spread it. The trouble starts when everything gets clustered — pots pushed into one
        corner because that&apos;s where the sun is best, or a raised bed built right over the middle of
        the slab because that&apos;s where there happened to be space. Concentrated weight in one spot is
        a very different load case than the same weight spread across the terrace, and it&apos;s the
        scenario most people never think to ask about.
      </p>
      <p>
        If you&apos;re planning anything beyond a modest scatter of pots — a proper raised-bed setup, a
        row of large trees in containers, anything that adds up to real, sustained weight — it&apos;s
        worth ten minutes with whoever holds your building&apos;s structural drawings, or a short
        conversation with a structural engineer if you can get one. This matters more in older
        buildings, and it matters more the higher up you are, since load calculations get more
        conservative on upper floors. It can feel like overkill for what&apos;s essentially a gardening
        hobby, but the cost of asking is a phone call; the cost of not asking, in the rare case it
        goes wrong, is not something you want to find out about after the fact.
      </p>
      <p>
        Two habits do most of the work of keeping load sensible without needing an engineer for
        every decision. First, spread containers out along the perimeter and over load-bearing
        walls rather than grouping them in the centre of any one room below — the edges of a slab
        are almost always its strongest points. Second, use a lightweight potting mix rather than
        straight garden soil for anything large. A mix built around coco peat, compost, and a bit of
        sand holds noticeably less dead weight than raw soil while still growing vegetables, herbs,
        and flowering shrubs perfectly well — it&apos;s a small switch that meaningfully lowers what
        you&apos;re asking the slab to carry.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Waterproofing — protecting the slab before you place a single pot</h2>
      <p>
        Terraces are waterproofed to shed rain fast, not to sit under a container of permanently
        damp soil for months on end. There&apos;s a real difference between the two. Monsoon rain comes,
        soaks the surface, and drains off within a day or two. A pot of vegetables you water every
        morning keeps a small patch of that same surface damp continuously, for the entire growing
        season, and that&apos;s a kind of sustained moisture most waterproofing membranes were never
        really tested against.
      </p>
      <p>
        The fix isn&apos;t complicated, but it does need to happen before you start, not after you
        notice a damp patch on the ceiling downstairs. Every container and every raised bed should
        sit up off the bare slab — on pot feet, bricks, or a simple raised grid — so water drains
        away underneath instead of pooling against the waterproofing and slowly working through it.
        For anything more permanent, like a raised bed, put a proper root barrier or a heavy-duty
        plastic sheet down first. Roots and constant moisture reaching the slab directly is a much
        bigger, much harder problem than the same thing happening under a movable pot you can shift
        or drain in an afternoon.
      </p>
      <p>
        It&apos;s also worth being honest about the state of your terrace before you commit to anything.
        If the waterproofing hasn&apos;t been redone in several years, or if you can already see damp
        staining on the ceiling below, get it inspected — and if needed, redone — before you build
        raised beds or settle into a fixed layout. Moving an established garden later to fix a leak
        underneath it is a far bigger job than doing the waterproofing first and building on top of
        it once. And keep drains completely clear: never let a pot, a bed, or even a stray bag of
        soil sit against a terrace drain. In a heavy monsoon downpour, that drain is doing more work
        than anything else on the terrace, and it&apos;s the one thing you really don&apos;t want blocked.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Layout — planning drainage, access, and sun before you start</h2>
      <p>
        Once load and waterproofing are settled, layout is what decides whether the garden is
        actually pleasant to maintain, or something you end up avoiding after the first few weeks.
        A good layout starts from the drains, not from where the plants would look nice. Every
        planting zone should have an obvious, unobstructed path for excess water to reach a drain —
        work the container and bed placement out around that first, and let everything else follow.
      </p>
      <p>
        Leave real paths between planting areas, not just gaps you can squeeze through sideways.
        Something like 60–75 cm of clear space lets you move a watering can, a wheelbarrow, or a
        bag of compost through without knocking pots over or trampling whatever&apos;s growing at the
        edge. It sounds like a small thing until you&apos;re doing it every day for a year, at which
        point it&apos;s the difference between a garden you keep up with and one you start resenting.
      </p>
      <p>
        Group plants by how thirsty they are, not just by what kind of plant they are. Put a
        drought-tolerant succulent next to a vegetable that wants daily watering and one of the two
        is always being either drowned or starved, because you&apos;ll end up watering to whichever
        plant is loudest about it. Zone the layout instead by watering frequency — the daily-water
        vegetables in one area, the once-a-week aloe and succulents somewhere else entirely — and
        the whole routine gets simpler almost immediately.
      </p>
      <p>
        Finally, actually track the sun across a full day before you decide where anything permanent
        goes. Terraces get harsher, more direct light than balconies overall, but the shade patterns
        from a water tank, a parapet wall, or the building next door shift through the day in ways
        that are easy to misjudge from a single glance in the morning. Check it again at midday and
        again in the late afternoon before you commit a raised bed to a spot — what looks like full
        sun at 9 a.m. can be shaded solid by 4 p.m., and you&apos;ll only find that out the hard way if
        you don&apos;t check first.
      </p>

      <p>
        With load, waterproofing, and layout sorted, the next real decision is what to actually
        grow in — see our comparison of{" "}
        <Link
          href="/terrace-gardening/raised-beds-vs-containers-terrace-gardening-india"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          raised beds vs containers for terrace gardening in India
        </Link>{" "}
        — and then how to pick plants that can actually handle the conditions you&apos;ve just mapped
        out. Our guide to{" "}
        <Link
          href="/terrace-gardening/full-sun-full-wind-terrace-gardening-india"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          gardening through full sun and full wind
        </Link>{" "}
        covers that next.
      </p>
    </ArticleLayout>
  );
}
