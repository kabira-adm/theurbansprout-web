// Plain stacked Q&A, not an accordion, per the brief: this isn't the
// visual centerpiece of the page. Renders its own FAQPage JSON-LD script
// tag alongside the visible block, built as component markup rather than
// through the metadata export so it doesn't touch metadata/canonical logic.
export default function FAQBlock({ items }) {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="mt-12 font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="font-display text-2xl text-ink">Frequently asked questions</h2>
      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={item.q}>
            <p className="font-semibold text-ink">{item.q}</p>
            <p className="mt-1.5 text-sm leading-6 text-ink/70">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
