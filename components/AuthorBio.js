// Shared, hardcoded bio, not per-article content. Rendered at the end of
// every article via ArticleLayout. Text is fixed, do not paraphrase or
// generate per-article variants of it.
export default function AuthorBio() {
  return (
    <div className="mt-12 rounded-xl bg-primary-soft/30 p-5 font-body">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Written by</p>
      <p className="mt-2 text-sm leading-6 text-ink/80">
        Written by Aftab, who gardens on a rooftop, a ground-level patch, and a balcony in
        Jaipur, one of India&apos;s hottest and driest cities. The rooftop grows tomatoes,
        bhindi, lauki, mirchi, dhaniya, palak, patta gobhi, phool gobhi, eggplant and methi
        through summers that regularly cross 43°C. A ground-level bed holds papaya, curry leaf
        and lemon trees, and the balcony keeps snake plants and tulsi alive through the same
        heat. Everything on this site is tested against that climate first, not adapted from
        advice written for cooler, wetter parts of the country.
      </p>
    </div>
  );
}
