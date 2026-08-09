import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Pet-Safe Indoor Plants for Indian Homes",
  description:
    "Which popular indoor plants are actually risky for cats and dogs, and non-toxic alternatives that still work indoors.",
};

export default function Article() {
  return (
    <ArticleLayout
      hub="Indoor Plants"
      hubHref="/indoor-plants"
      title="Pet-safe indoor plants for Indian homes"
      description="Several of the most popular apartment plants — including money plant and snake plant — are mildly to moderately toxic to cats and dogs. Here's what to avoid and what to grow instead."
      readTime="6 min"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Pet-Safe Indoor Plants for Indian Homes",
        description:
          "Which popular indoor plants are actually risky for cats and dogs, and non-toxic alternatives that still work indoors.",
        author: { "@type": "Organization", name: "Urban Sprout" },
      }}
    >
      <p>
        Quite a few of the plants that get recommended for Indian apartments aren&apos;t actually
        safe around a cat or dog that likes to chew leaves. That doesn&apos;t mean giving up on
        indoor plants if you have a pet at home. It means knowing which ones need to stay out of
        reach, and which ones you can stop worrying about entirely.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Common plants that are actually risky</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Pothos / Money Plant</strong> — contains insoluble calcium oxalates that cause
          mouth irritation, drooling, and vomiting if chewed. One of the most common apartment
          plants and one of the most commonly flagged for pet toxicity.
        </li>
        <li>
          <strong>ZZ Plant</strong> — similar calcium oxalate irritation; unpleasant enough that
          most pets stop after one bite, but still worth keeping out of reach of a curious puppy or
          kitten.
        </li>
        <li>
          <strong>Peace Lily</strong> — also contains calcium oxalates; causes oral irritation and
          swelling if chewed.
        </li>
        <li>
          <strong>Snake Plant</strong> — mildly toxic; can cause nausea and vomiting if a large
          amount is eaten, though most pets are deterred by the tough, fibrous leaves.
        </li>
        <li>
          <strong>Aloe Vera</strong> — the gel is used on human skin, but the plant itself is
          toxic to cats and dogs if ingested and can cause vomiting or diarrhoea.
        </li>
      </ul>
      <p>
        None of these are emergencies in small amounts. But if your pet chews on plants as a
        habit rather than a one-off, it's simpler to skip them altogether or keep them somewhere
        genuinely out of reach, like a high shelf a cat can't jump to.
      </p>

      <h2 className="text-xl font-semibold text-brand-green-dark">Genuinely non-toxic options</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Areca Palm</strong> — non-toxic to cats and dogs, handles bright indirect light
          well, and doubles as an effective air-purifying plant for a living room.
        </li>
        <li>
          <strong>Spider Plant</strong> — non-toxic, tolerant of low light and irregular watering.
          Some cats do enjoy chewing it, but it won&apos;t harm them if they do.
        </li>
        <li>
          <strong>Calathea (Rattlesnake Plant)</strong> — non-toxic, with striking patterned
          leaves; prefers higher humidity, which makes a bathroom with a window a good spot.
        </li>
        <li>
          <strong>Boston Fern</strong> — non-toxic and does well in humid, low-light bathrooms or
          kitchens, common conditions in Indian apartments.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-brand-green-dark">If a pet does eat a toxic plant</h2>
      <p>
        Mild symptoms — drooling, pawing at the mouth, some vomiting — usually settle down within
        a few hours on their own. Remove any leftover plant material, offer water, and keep an eye
        out for anything getting worse. If your pet struggles to breathe, develops swelling in the
        mouth or throat, or the symptoms don&apos;t ease within a few hours, call a vet. Don&apos;t
        wait it out.
      </p>

      <p>
        You don&apos;t have to rule out the popular low-light options entirely — a Pothos kept on
        a high shelf, well out of paw&apos;s reach, is a reasonable middle ground. If you&apos;d
        rather not manage placement at all,{" "}
        <Link
          href="/indoor-plants/low-light-indoor-plants-indian-apartments"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          swap in Spider Plant from the low-light list →
        </Link>{" "}
        and remove the risk from the equation.
      </p>
    </ArticleLayout>
  );
}
