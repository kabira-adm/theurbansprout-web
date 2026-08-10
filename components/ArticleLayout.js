import Link from "next/link";

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
    <article className="mx-auto max-w-2xl px-6 py-16">
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <Link
        href={hubHref}
        className="text-sm font-medium text-brand-green hover:text-brand-green-dark"
      >
        ← {hub}
      </Link>
      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-terracotta">
        {hub}
      </p>
      <h1 className="mt-2 text-3xl font-semibold leading-tight text-brand-green-dark sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-brand-green-dark/75">{description}</p>
      {readTime ? (
        <p className="mt-3 text-xs font-medium text-brand-green-dark/50">{readTime} read</p>
      ) : null}
      {hasAffiliateLinks ? (
        <p className="mt-3 text-xs italic text-brand-green-dark/50">
          As an Amazon Associate, Urban Sprout earns from qualifying purchases.
        </p>
      ) : null}
      <div className="prose-article mt-10 space-y-6 leading-7 text-brand-green-dark/85">
        {children}
      </div>
    </article>
  );
}
