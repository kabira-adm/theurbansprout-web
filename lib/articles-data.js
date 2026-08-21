// Single source of truth for "every article on the site", grouped by
// pillar. Moved out of app/articles/page.js so components/ArticleSearch.js
// (the nav/search-page live search) and components/ArticlesExplorer.js
// (the /articles pillar-grouped grid) can both flatten the same list
// without a second copy of every title/href/description drifting out of
// sync with each other or with the archive page.
//
// description: a short, one-line card blurb for each article. For the 13
// balcony articles that already had one (the pre-existing "More balcony
// gardening guides" cards on app/balcony-gardening/page.js), that exact
// text is reused verbatim. For the rest, the text is each article's own
// SEO metadata.description (already a single, vetted sentence written
// for that article), not new copy invented for this page. content-ops/'s
// auto-publish pipeline (see .github/workflows/auto-publish.yml) adds new
// articles here directly and, as of the article it added the same day
// this field was introduced, doesn't yet know to fill in `description` -
// worth teaching it to, otherwise new cards render with an empty blurb.
//
// No publishedDate field: checked every article page.js's metadata,
// ArticleLayout usage, and JSON-LD block for any date/publish-date field
// (also checked content-ops/content-queue.md, which only tracks a
// queued/in-progress/published status, not a date), and there isn't one
// anywhere in this codebase. The `order` field below (each article's
// index within its pillar's array) is used as a newest-first proxy
// instead - see components/ArticlesExplorer.js's SORTERS.newest comment
// for how, and the PR notes for why this is a heuristic, not a real date.
export const pillars = [
  {
    name: "Balcony Gardening",
    href: "/balcony-gardening",
    articles: [
      { title: "Choosing the right pot size and drainage", href: "/balcony-gardening/choosing-pot-size-drainage-balcony", description: "How to size containers correctly and get drainage right, so plants thrive and your balcony floor stays undamaged." },
      { title: "Reading your balcony's sunlight", href: "/balcony-gardening/reading-balcony-sunlight", description: "A simple method to measure how much sun your balcony actually gets, so you stop buying plants that don't match your light." },
      { title: "A realistic watering schedule for summer and monsoon", href: "/balcony-gardening/watering-schedule-indian-summers-monsoons", description: "Why a fixed watering schedule fails across Indian seasons, and the finger-test method that actually works year-round." },
      { title: "Wind and railing safety for high-floor balconies", href: "/balcony-gardening/wind-railing-safety-high-floor-balconies", description: "How to garden safely on a high-floor balcony: anchoring pots, choosing wind-safe plants, and avoiding falling-pot risk." },
      { title: "Fixing the most common balcony gardening mistakes", href: "/balcony-gardening/common-balcony-gardening-mistakes", description: "The recurring mistakes that kill balcony plants in Indian homes, and the specific fix for each one." },
      { title: "Choosing potting mix and soil for balcony plants", href: "/balcony-gardening/potting-mix-and-soil-for-balcony-plants", description: "What to actually put in the pot, and how it changes for succulents, ornamentals, and flowering plants." },
      { title: "Vertical gardening for narrow balconies", href: "/balcony-gardening/vertical-gardening-narrow-balconies", description: "Wall planters, tiered shelving, hanging pots, and railing planters for balconies with no floor space to spare." },
      { title: "A ₹2,000 starter balcony garden", href: "/balcony-gardening/budget-balcony-garden-starter-guide", description: "A realistic budget breakdown for starting from zero: what to buy, what to skip, and where to shop." },
      { title: "Balcony composting in small spaces", href: "/balcony-gardening/balcony-composting-small-spaces", description: "Bokashi bins, small tumblers, and what kitchen waste is actually safe to compost without a terrace." },
      { title: "Organic pest control for open-air balconies", href: "/balcony-gardening/organic-pest-control-balcony-plants", description: "Spotting and treating aphids, mealybugs, and spider mites without a single chemical spray." },
      { title: "Dealing with pigeons and birds on your balcony garden", href: "/balcony-gardening/dealing-with-pigeons-balcony-garden", description: "Deterrents that actually work, from spikes and netting to reflective devices, without harming the birds." },
      { title: "A seasonal balcony gardening calendar for India", href: "/balcony-gardening/seasonal-balcony-gardening-calendar-india", description: "What to plant, prune, and watch for through summer, monsoon, and winter, season by season." },
      { title: "Balcony gardening for renters", href: "/balcony-gardening/balcony-gardening-for-renters", description: "Fully portable, deposit-safe setups with nothing drilled into walls or railings, and plants that survive a move." },
      { title: "Balcony privacy screening with plants", href: "/balcony-gardening/balcony-privacy-screening-with-plants", description: "Climbers, bamboo screens, and trellis setups for balconies facing neighbours or a busy street." },
      { title: "A fertilizing schedule for balcony plants", href: "/balcony-gardening/fertilizing-schedule-balcony-plants", description: "How often to feed through growing and dormant seasons, and the signs of over- and under-feeding." },
      { title: "Flowering plants for Indian balconies", href: "/balcony-gardening/flowering-plants-for-indian-balconies", description: "Which flowers actually bloom well in balcony sun and shade, bloom-season expectations, and deadheading basics." },
      { title: "High-rise balcony challenges", href: "/balcony-gardening/high-rise-balcony-challenges", description: "Heat reflection off glass buildings and lower humidity at height: the microclimate that wind advice doesn't cover." },
      { title: "Small balcony vs. large balcony: different strategies", href: "/balcony-gardening/small-vs-large-balcony-strategies", description: "Layout philosophy across the size range: zoning when you have space, prioritization when you don't." },
      { title: "Grow lights for balconies with poor sun", href: "/balcony-gardening/grow-lights-for-balconies-with-poor-sun", description: "Whether a grow light is worth buying for a shaded balcony, what PPFD and full spectrum actually mean, and how to run one without a fat electricity bill.", isNew: true },
    ],
  },
  {
    name: "Indoor Plants",
    href: "/indoor-plants",
    articles: [
      { title: "Best low-light plants for Indian apartments", href: "/indoor-plants/low-light-indoor-plants-indian-apartments", description: "Which plants actually survive a north-facing room or a flat boxed in by neighbouring towers, and how to place them." },
      { title: "How to stop overwatering (the #1 killer)", href: "/indoor-plants/stop-overwatering-indoor-plants", description: "Why indoor plants in Indian apartments almost always die from too much water, and the checks that fix it." },
      { title: "Pet-safe indoor plants for Indian homes", href: "/indoor-plants/pet-safe-indoor-plants-india", description: "Which popular indoor plants are actually risky for cats and dogs, and non-toxic alternatives that still work indoors." },
      { title: "Repotting: when and how", href: "/indoor-plants/repotting-indoor-plants-when-how", description: "The specific signs that mean it's time to repot, the best season for it in India, and a step-by-step process." },
      { title: "Fertilizing indoor plants: a simple schedule", href: "/indoor-plants/fertilizing-schedule-indoor-plants", description: "How often to actually feed indoor plants, what changes because there's no sun or rain to flush anything through a pot, and organic vs synthetic options in India.", isNew: true },
    ],
  },
  {
    name: "Kitchen Gardening",
    href: "/kitchen-gardening",
    articles: [
      { title: "Growing coriander and mint in containers (India edition)", href: "/kitchen-gardening/growing-coriander-mint-containers-india", description: "How to grow coriander and mint from kitchen seed and cuttings in small containers, tuned for Indian heat, tap water, and balcony space." },
      { title: "Growing tomatoes and chillies in balcony containers", href: "/kitchen-gardening/growing-tomatoes-chillies-balcony-containers", description: "Container sizes, sunlight needs, and support tricks for growing tomatoes and chillies on an Indian apartment balcony." },
      { title: "Kitchen scraps you can actually regrow (and ones you can't)", href: "/kitchen-gardening/kitchen-scraps-regrow-vegetables", description: "Which vegetable scraps genuinely regrow into usable plants in an Indian kitchen, which ones are a myth, and how to do it right." },
      { title: "Soil and fertilizer basics for container vegetables", href: "/kitchen-gardening/soil-and-fertilizer-basics-container-vegetables", description: "A simple, India-specific potting mix and feeding routine for growing vegetables and herbs in containers." },
      { title: "Organic pest control for kitchen garden vegetables (safe to eat)", href: "/kitchen-gardening/organic-pest-control-kitchen-garden-vegetables", description: "How to deal with aphids, whiteflies, and caterpillars on food you're growing to eat, without spraying anything you wouldn't want on your plate." },
      { title: "Growing methi, palak and patta gobhi in containers", href: "/kitchen-gardening/growing-methi-palak-patta-gobhi-containers", description: "How to grow fenugreek, spinach and cabbage in containers through an Indian winter, covering sowing, spacing, feeding and pests for each crop.", isNew: true },
    ],
  },
  {
    name: "Terrace Gardening",
    href: "/terrace-gardening",
    articles: [
      { title: "Is your terrace ready? Load, waterproofing, and layout", href: "/terrace-gardening/is-your-terrace-ready-load-waterproofing-layout", description: "Check structural load, waterproofing, and drainage layout before you put a single pot on your terrace, the three things most terrace gardens skip." },
      { title: "Raised beds vs containers for terrace gardening in India", href: "/terrace-gardening/raised-beds-vs-containers-terrace-gardening-india", description: "Weigh up raised beds against containers for an Indian terrace garden: cost, weight, watering, and which one actually fits your space." },
      { title: "Full sun, full wind: terrace gardening in India", href: "/terrace-gardening/full-sun-full-wind-terrace-gardening-india", description: "How to manage the harsher sun and stronger wind terraces get compared to balconies, and which plants actually hold up to both." },
      { title: "Common terrace gardening mistakes (and how to avoid them)", href: "/terrace-gardening/common-terrace-gardening-mistakes", description: "The mistakes that show up again and again on Indian terrace gardens, from soil choices to monsoon drains, and the simple fix for each.", isNew: true },
    ],
  },
];

// Flattens the pillar groups into one list, each article tagged with its
// pillar's name/href and its `order` (index within its pillar's array
// above), for components that search or sort across pillars rather than
// within one: components/ArticleSearch.js (the nav/search-page live
// search) and components/ArticlesExplorer.js (the /articles grid).
export function getAllArticles() {
  return pillars.flatMap((pillar) =>
    pillar.articles.map((article, order) => ({
      ...article,
      pillarName: pillar.name,
      pillarHref: pillar.href,
      order,
    }))
  );
}
