const BASE_URL = "https://www.theurbansprout.in";

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${BASE_URL}/articles`, priority: 0.7, changeFrequency: "daily" },
    { url: `${BASE_URL}/about`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/contact`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/privacy`, priority: 0.2, changeFrequency: "yearly" },
  ];

  const hubs = [
    { url: `${BASE_URL}/balcony-gardening`, priority: 0.8 },
    { url: `${BASE_URL}/indoor-plants`, priority: 0.8 },
    { url: `${BASE_URL}/kitchen-gardening`, priority: 0.8 },
    { url: `${BASE_URL}/plant-encyclopedia`, priority: 0.8 },
    { url: `${BASE_URL}/terrace-gardening`, priority: 0.8 },
  ].map((h) => ({ ...h, changeFrequency: "weekly" }));

  const balconyArticles = [
    "choosing-pot-size-drainage-balcony",
    "common-balcony-gardening-mistakes",
    "reading-balcony-sunlight",
    "watering-schedule-indian-summers-monsoons",
    "wind-railing-safety-high-floor-balconies",
    "potting-mix-and-soil-for-balcony-plants",
    "vertical-gardening-narrow-balconies",
    "budget-balcony-garden-starter-guide",
    "balcony-composting-small-spaces",
    "organic-pest-control-balcony-plants",
    "dealing-with-pigeons-balcony-garden",
    "seasonal-balcony-gardening-calendar-india",
    "flowering-plants-for-indian-balconies",
    "balcony-gardening-for-renters",
    "fertilizing-schedule-balcony-plants",
    "balcony-privacy-screening-with-plants",
    "small-vs-large-balcony-strategies",
    "high-rise-balcony-challenges",
    "grow-lights-for-balconies-with-poor-sun",
  ].map((slug) => `${BASE_URL}/balcony-gardening/${slug}`);

  const indoorArticles = [
    "low-light-indoor-plants-indian-apartments",
    "pet-safe-indoor-plants-india",
    "repotting-indoor-plants-when-how",
    "stop-overwatering-indoor-plants",
    "fertilizing-schedule-indoor-plants",
  ].map((slug) => `${BASE_URL}/indoor-plants/${slug}`);

  const kitchenArticles = [
    "growing-coriander-mint-containers-india",
    "growing-tomatoes-chillies-balcony-containers",
    "kitchen-scraps-regrow-vegetables",
    "soil-and-fertilizer-basics-container-vegetables",
    "organic-pest-control-kitchen-garden-vegetables",
    "growing-methi-palak-patta-gobhi-containers",
  ].map((slug) => `${BASE_URL}/kitchen-gardening/${slug}`);

  const terraceArticles = [
    "is-your-terrace-ready-load-waterproofing-layout",
    "raised-beds-vs-containers-terrace-gardening-india",
    "full-sun-full-wind-terrace-gardening-india",
    "common-terrace-gardening-mistakes",
  ].map((slug) => `${BASE_URL}/terrace-gardening/${slug}`);

  const articles = [...balconyArticles, ...indoorArticles, ...kitchenArticles, ...terraceArticles].map((url) => ({
    url,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const tools = [
    { url: `${BASE_URL}/tools/watering-scheduler`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/tools/plant-doctor`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/tools/seasonal-calendar`, priority: 0.6, changeFrequency: "monthly" },
  ];

  const buyingGuideSlugs = [
    "best-pots-balcony-gardening-india",
    "best-organic-fertilizers-container-gardens-india",
    "best-potting-mix-ingredients-balcony-plants-india",
    "best-liquid-fertilizer-container-plants-india",
  ];
  const buyingGuides = [
    { url: `${BASE_URL}/buying-guides`, priority: 0.6, changeFrequency: "weekly" },
    ...buyingGuideSlugs.map((slug) => ({
      url: `${BASE_URL}/buying-guides/${slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    })),
  ];

  const plantSlugs = [
    "money-plant-pothos", "snake-plant", "zz-plant", "peace-lily", "spider-plant",
    "areca-palm", "aloe-vera", "curry-leaf-plant", "tulsi-holy-basil", "marigold",
    "hibiscus", "jade-plant", "boston-fern", "calathea", "coriander", "mint",
    "tomato", "green-chilli", "lemon", "papaya", "fenugreek-methi", "spinach-palak",
    "okra-bhindi", "bougainvillea", "jasmine-mogra", "rose", "rubber-plant",
    "philodendron", "cabbage-patta-gobhi", "cauliflower-phool-gobhi", "pea-matar",
    "french-bean",
  ];
  const plantPages = plantSlugs.map((slug) => ({
    url: `${BASE_URL}/plant-encyclopedia/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...hubs, ...articles, ...tools, ...buyingGuides, ...plantPages].map((entry) => ({
    ...entry,
    lastModified: now,
  }));
}
