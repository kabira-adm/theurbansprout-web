const BASE_URL = "https://www.theurbansprout.in";

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/contact`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/privacy`, priority: 0.2, changeFrequency: "yearly" },
  ];

  const hubs = [
    { url: `${BASE_URL}/balcony-gardening`, priority: 0.8 },
    { url: `${BASE_URL}/indoor-plants`, priority: 0.8 },
    { url: `${BASE_URL}/kitchen-gardening`, priority: 0.8 },
  ].map((h) => ({ ...h, changeFrequency: "weekly" }));

  const balconyArticles = [
    "choosing-pot-size-drainage-balcony",
    "common-balcony-gardening-mistakes",
    "reading-balcony-sunlight",
    "watering-schedule-indian-summers-monsoons",
    "wind-railing-safety-high-floor-balconies",
  ].map((slug) => `${BASE_URL}/balcony-gardening/${slug}`);

  const indoorArticles = [
    "low-light-indoor-plants-indian-apartments",
    "pet-safe-indoor-plants-india",
    "repotting-indoor-plants-when-how",
    "stop-overwatering-indoor-plants",
  ].map((slug) => `${BASE_URL}/indoor-plants/${slug}`);

  const kitchenArticles = [
    "growing-coriander-mint-containers-india",
    "growing-tomatoes-chillies-balcony-containers",
    "kitchen-scraps-regrow-vegetables",
    "soil-and-fertilizer-basics-container-vegetables",
  ].map((slug) => `${BASE_URL}/kitchen-gardening/${slug}`);

  const articles = [...balconyArticles, ...indoorArticles, ...kitchenArticles].map((url) => ({
    url,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  const tools = [
    { url: `${BASE_URL}/tools/watering-scheduler`, priority: 0.6, changeFrequency: "monthly" },
  ];

  return [...staticPages, ...hubs, ...articles, ...tools].map((entry) => ({
    ...entry,
    lastModified: now,
  }));
}
