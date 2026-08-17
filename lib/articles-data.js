// Single source of truth for "every article on the site", grouped by
// pillar. Moved out of app/articles/page.js so components/ArticleSearch.js
// can flatten the same list for site search without a second copy of every
// title/href drifting out of sync with the archive page.
export const pillars = [
  {
    name: "Balcony Gardening",
    href: "/balcony-gardening",
    articles: [
      { title: "Choosing the right pot size and drainage", href: "/balcony-gardening/choosing-pot-size-drainage-balcony" },
      { title: "Reading your balcony's sunlight", href: "/balcony-gardening/reading-balcony-sunlight" },
      { title: "A realistic watering schedule for summer and monsoon", href: "/balcony-gardening/watering-schedule-indian-summers-monsoons" },
      { title: "Wind and railing safety for high-floor balconies", href: "/balcony-gardening/wind-railing-safety-high-floor-balconies" },
      { title: "Fixing the most common balcony gardening mistakes", href: "/balcony-gardening/common-balcony-gardening-mistakes" },
      { title: "Choosing potting mix and soil for balcony plants", href: "/balcony-gardening/potting-mix-and-soil-for-balcony-plants" },
      { title: "Vertical gardening for narrow balconies", href: "/balcony-gardening/vertical-gardening-narrow-balconies" },
      { title: "A ₹2,000 starter balcony garden", href: "/balcony-gardening/budget-balcony-garden-starter-guide" },
      { title: "Balcony composting in small spaces", href: "/balcony-gardening/balcony-composting-small-spaces" },
      { title: "Organic pest control for open-air balconies", href: "/balcony-gardening/organic-pest-control-balcony-plants" },
      { title: "Dealing with pigeons and birds on your balcony garden", href: "/balcony-gardening/dealing-with-pigeons-balcony-garden" },
      { title: "A seasonal balcony gardening calendar for India", href: "/balcony-gardening/seasonal-balcony-gardening-calendar-india" },
      { title: "Balcony gardening for renters", href: "/balcony-gardening/balcony-gardening-for-renters" },
      { title: "Balcony privacy screening with plants", href: "/balcony-gardening/balcony-privacy-screening-with-plants" },
      { title: "A fertilizing schedule for balcony plants", href: "/balcony-gardening/fertilizing-schedule-balcony-plants" },
      { title: "Flowering plants for Indian balconies", href: "/balcony-gardening/flowering-plants-for-indian-balconies" },
      { title: "High-rise balcony challenges", href: "/balcony-gardening/high-rise-balcony-challenges" },
      { title: "Small balcony vs. large balcony: different strategies", href: "/balcony-gardening/small-vs-large-balcony-strategies" },
    ],
  },
  {
    name: "Indoor Plants",
    href: "/indoor-plants",
    articles: [
      { title: "Best low-light plants for Indian apartments", href: "/indoor-plants/low-light-indoor-plants-indian-apartments" },
      { title: "How to stop overwatering (the #1 killer)", href: "/indoor-plants/stop-overwatering-indoor-plants" },
      { title: "Pet-safe indoor plants for Indian homes", href: "/indoor-plants/pet-safe-indoor-plants-india" },
      { title: "Repotting: when and how", href: "/indoor-plants/repotting-indoor-plants-when-how" },
      { title: "Fertilizing indoor plants: a simple schedule", href: "/indoor-plants/fertilizing-schedule-indoor-plants", isNew: true },
    ],
  },
  {
    name: "Kitchen Gardening",
    href: "/kitchen-gardening",
    articles: [
      { title: "Growing coriander and mint in containers (India edition)", href: "/kitchen-gardening/growing-coriander-mint-containers-india" },
      { title: "Growing tomatoes and chillies in balcony containers", href: "/kitchen-gardening/growing-tomatoes-chillies-balcony-containers" },
      { title: "Kitchen scraps you can actually regrow (and ones you can't)", href: "/kitchen-gardening/kitchen-scraps-regrow-vegetables" },
      { title: "Soil and fertilizer basics for container vegetables", href: "/kitchen-gardening/soil-and-fertilizer-basics-container-vegetables" },
      { title: "Organic pest control for kitchen garden vegetables (safe to eat)", href: "/kitchen-gardening/organic-pest-control-kitchen-garden-vegetables", isNew: true },
    ],
  },
  {
    name: "Terrace Gardening",
    href: "/terrace-gardening",
    articles: [
      { title: "Is your terrace ready? Load, waterproofing, and layout", href: "/terrace-gardening/is-your-terrace-ready-load-waterproofing-layout" },
      { title: "Raised beds vs containers for terrace gardening in India", href: "/terrace-gardening/raised-beds-vs-containers-terrace-gardening-india" },
      { title: "Full sun, full wind: terrace gardening in India", href: "/terrace-gardening/full-sun-full-wind-terrace-gardening-india" },
      { title: "Common terrace gardening mistakes (and how to avoid them)", href: "/terrace-gardening/common-terrace-gardening-mistakes", isNew: true },
    ],
  },
];

// Flattens the pillar groups into one list, each article tagged with its
// pillar's name/href, for the site search box (components/ArticleSearch.js)
// which searches across pillars rather than within one.
export function getAllArticles() {
  return pillars.flatMap((pillar) =>
    pillar.articles.map((article) => ({
      ...article,
      pillarName: pillar.name,
      pillarHref: pillar.href,
    }))
  );
}
