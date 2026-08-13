import Link from "next/link";
import ArticleTOC from "./ArticleTOC";
import ArticleFAQ from "./ArticleFAQ";
import AuthorBio from "./AuthorBio";

export default function ArticleLayout({
  title,
  description,
  readTime,
  jsonLd,
  hub = "Balcony Gardening",
  hubHref = "/balcony-gardening",
  hasAffiliateLinks = false,
  children,
}) {
  return (
    <article className="mx-auto max-w-5xl px-6 py-16 font-body">
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <div className="lg:grid lg:grid-cols-[minmax(0,42rem)_240px] lg:items-start lg:gap-16">
        <div className="max-w-2xl">
          <Link href={hubHref} className="text-sm font-medium text-primary hover:text-ink">
            ← {hub}
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary">{hub}</p>
          <h1 className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-ink/75">{description}</p>
          {readTime ? <p className="mt-3 text-xs font-medium text-ink/50">{readTime} read</p> : null}
          {hasAffiliateLinks ? (
            <p className="mt-3 text-xs italic text-ink/50">
              As an Amazon Associate, Urban Sprout earns from qualifying purchases.
            </p>
          ) : null}
          <div data-article-body="true" className="prose-article mt-10 space-y-6 leading-7 text-ink/85">
            {children}
          </div>
          <ArticleFAQ />
          <AuthorBio />
        </div>

        <aside className="hidden lg:block">
          <ArticleTOC />
        </aside>
      </div>
    </article>
  );
}
