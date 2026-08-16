import { getAllArticles, pillars } from "@/lib/articles-data";
import ArticlesExplorer from "@/components/ArticlesExplorer";

export const metadata = {
  title: "All Articles",
  description:
    "Every Urban Sprout guide in one place: balcony, indoor, kitchen, and terrace gardening for Indian homes. Search by title, filter by pillar, newest first within each pillar.",
  alternates: { canonical: "/articles" },
};

export default function Articles() {
  const articles = getAllArticles();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-brand-sand bg-white/60 font-body">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent-2-200/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Archive
          </p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Every article, in one very long scroll
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            {articles.length} guides across all four pillars. Search by title, filter by pillar,
            or just scroll: everything is grouped and, within each pillar, newest first. New
            guides are marked{" "}
            <span className="rounded-full bg-accent-green/10 px-2 py-0.5 text-xs font-semibold text-accent-green">
              New
            </span>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 font-body">
        <ArticlesExplorer articles={articles} pillars={pillars} />
      </section>
    </div>
  );
}
