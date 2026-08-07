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
        A lot of the plants that get recommended for Indian apartments are not actually safe
        around cats or dogs that chew on leaves. This isn&apos;t about avoiding indoor plants if
        you have a pet — it&apos;s about knowing which ones to keep out of reach and which ones you
        don&apos;t have to worry about at all.
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
        None of these are emergencies in small amounts, but if you have a pet that chews plants
        habitually, it&apos;s simpler to avoid them or keep them somewhere genuinely inaccessible,
        like a high shelf a cat can&apos;t reach.
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
        Mild symptoms — drooling, pawing at the mouth, mild vomiting — usually resolve on their
        own within a few hours. Remove any remaining plant material, offer water, and watch for
        worsening symptoms. If your pet is struggling to breathe, has swelling in the mouth or
        throat, or symptoms don&apos;t settle within a few hours, call a vet rather than waiting it
        out.
      </p>

      <p>
        You don&apos;t need to give up on the popular low-light options entirely — a Pothos on a
        high shelf out of paw&apos;s reach is a reasonable compromise. But if you&apos;d rather not
        manage placement at all,{" "}
        <Link
          href="/indoor-plants/low-light-indoor-plants-indian-apartments"
          className="font-medium text-brand-green hover:text-brand-green-dark"
        >
          swap in Spider Plant from the low-light list →
        </Link>{" "}
        and skip the risk altogether.
      </p>
    </ArticleLayout>
  );
}
