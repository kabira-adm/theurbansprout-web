import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Soil and Fertilizer Basics for Container Vegetables",
  description:
    "A simple, India-specific potting mix and feeding routine for growing vegetables and herbs in containers.",
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Kitchen Gardening"
      hubHref="/kitchen-gardening"
      title="Soil and fertilizer basics for container vegetables"
      description="Vegetables are far hungrier than most houseplants. Get the mix and the feeding routine right and everything else in a kitchen garden gets easier."
      readTime="7 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Soil and Fertilizer Basics for Container Vegetables",
        description:
          "A simple, India-specific potting mix and feeding routine for growing vegetables and herbs in containers.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Garden soil dug straight from the ground compacts hard in a container and drains badly —
        it works outdoors because roots can spread and worms keep it aerated, neither of which
        happens in a pot. Container vegetables need a mix built for containers, and they need
        feeding on a schedule, because a pot has a fixed, limited store of nutrients that plain
        garden soil doesn&apos;t.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">A simple mix that works for most vegetables</h2>
      <p>A reliable, easy-to-source ratio for Indian balconies:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>50% garden soil or red soil</strong> — the base structure. Ask your local
          nursery for &quot;red soil&quot; or &quot;garden mitti&quot; if you don&apos;t have
          access to your own.
        </li>
        <li>
          <strong>25% compost or well-rotted cow dung manure (gobar khad)</strong> — the main
          nutrient source. Cheap, widely available at nurseries, and works well for vegetables
          specifically.
        </li>
        <li>
          <strong>25% coco peat, sand, or a mix of both</strong> — for drainage and aeration. Coco
          peat also holds moisture well, which matters on hot balconies where pots dry out fast.
        </li>
      </ul>
      <p>
        Mix these together dry before filling the container, and always start with a layer of
        broken pot shards or pebbles at the very bottom to keep the drainage hole from clogging
        with soil.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Feeding once the mix runs out</h2>
      <p>
        A fresh mix has enough nutrients for roughly 4–6 weeks of active growth. After that,
        vegetables — especially fruiting ones like tomatoes and chillies — need regular feeding to
        keep producing.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Every 2–3 weeks: a liquid feed.</strong> Diluted compost tea or a liquid
          vermicompost extract, watered in at the base, is gentle enough to use often without
          burning roots.
        </li>
        <li>
          <strong>At flowering: a potassium boost.</strong> Wood ash (a small pinch, well diluted
          in water) or a bought potash-heavy fertilizer helps push energy into fruit rather than
          leaf growth. This makes a visible difference for tomatoes and chillies specifically.
        </li>
        <li>
          <strong>Leafy herbs need less feeding than fruiting vegetables.</strong> Coriander and
          mint do fine on compost alone and can be overfed into weak, floppy growth — save the
          stronger feeds for tomatoes, chillies, and other fruiting plants.
        </li>
        <li>
          <strong>Top-dress with fresh compost monthly.</strong> Scratch a thin layer of compost
          into the top few centimetres of soil every 4 weeks rather than digging it in deep, which
          disturbs roots.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">Dealing with hard Indian tap water</h2>
      <p>
        Hard tap water, common in most Indian cities, gradually raises the mineral content and pH
        of container soil, which can lock out nutrients even when you&apos;re feeding correctly.
        Two habits help: let tap water stand uncovered for a day before using it, and flush each
        container thoroughly with extra water every few weeks so mineral buildup washes through
        the drainage hole instead of accumulating. If you see a white crust forming on the soil
        surface, scrape it off and top up with fresh mix rather than trying to water it away.
      </p>

      <p>
        Getting the mix and feeding right matters most for the plants working hardest —{" "}
        <Link
          href="/kitchen-gardening/growing-tomatoes-chillies-balcony-containers"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          tomatoes and chillies
        </Link>{" "}
        in particular will stall out on plain potting mix once fruiting starts, while herbs like
        coriander and mint are far more forgiving and a good place to practice the basics first.
      </p>
    </ArticleLayout>
  );
}
