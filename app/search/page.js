import { getAllArticles } from "@/lib/articles-data";
import ArticleSearch from "@/components/ArticleSearch";

export const metadata = {
  title: "Search",
  description: "Search every Urban Sprout article by title or topic.",
  alternates: { canonical: "/search" },
  // Thin, query-dependent page with no content of its own beyond what
  // /articles already lists — kept out of the index so it doesn't compete
  // with (or duplicate) the archive page in search results. It still stays
  // linked and crawlable (follow: true), just not a page Google should rank.
  robots: { index: false, follow: true },
};

export default function Search() {
  const articles = getAllArticles();

  return (
    <div>
      <section className="border-b border-brand-sand bg-white/60 font-body">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Search</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Search articles</h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Find a guide by name or topic across all four pillars — balcony, indoor, kitchen, and
            terrace gardening.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 font-body">
        <ArticleSearch articles={articles} />
      </section>
    </div>
  );
}
