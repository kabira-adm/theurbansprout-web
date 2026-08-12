/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // Permanent redirects from the old (pre-rebuild) WordPress site's flat
  // article slugs to their current category-prefixed equivalents.
  //
  // This list is NOT complete. It currently contains only the one old->new
  // pair that was documented ahead of time. The rest of the old flat-slug
  // URLs need to be sourced from Google Search Console (Page Indexing /
  // Crawl Stats -> 404s) since this repo's git history has no record of
  // them (the old site was WordPress, replaced wholesale — see README),
  // and the Wayback Machine has no archived snapshots for this domain
  // either. Add more entries here once that list exists.
  //
  // Note: `source` is registered without a trailing slash. A request with
  // a trailing slash (e.g. /best-soil-mix-balcony-plants-india/, how the
  // old URL was originally documented and how WordPress served it) still
  // resolves to the right page, but via two chained 308s instead of one:
  // Next strips the trailing slash itself (trailingSlash defaults to
  // false) before this redirect table is even consulted, so that first
  // hop can't be intercepted or skipped from in here. Making it a single
  // hop would mean setting `trailingSlash: true` globally, which changes
  // URL behavior for every other route on the site — out of scope for
  // this change.
  async redirects() {
    return [
      {
        source: "/best-soil-mix-balcony-plants-india",
        destination: "/balcony-gardening/potting-mix-and-soil-for-balcony-plants",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
