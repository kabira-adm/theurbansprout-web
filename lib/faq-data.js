// Phase 3 pilot only, 2 articles, not all 31. ArticleLayout renders the FAQ
// block and its FAQPage schema only when the current article's slug has an
// entry here. No entry means no FAQ section, not an empty one. Add more
// entries as the separate content-writing pass produces them.
export const faqData = {
  "potting-mix-and-soil-for-balcony-plants": [
    {
      q: "Can I just use garden soil in pots instead of buying potting mix?",
      a: "No. Garden soil compacts in a container within weeks, water sits on top instead of draining, and roots suffocate. It's built for open ground, not a pot.",
    },
    {
      q: "What's a good all-purpose potting mix ratio for balcony plants?",
      a: "40% cocopeat, 30% compost or vermicompost, 20% perlite or coarse sand, and 10% garden soil for weight. Adjust from there based on what you're growing.",
    },
    {
      q: "Why is water sitting on top of my pot instead of draining through?",
      a: "The mix is too dense. Work in more perlite or coarse sand next time you repot, and avoid pressing the mix down firmly when filling the pot.",
    },
    {
      q: "How often should I refresh potting mix without doing a full repot?",
      a: "Every 6 to 8 months, scrape away the top 2 to 3 centimetres of old mix and replace it with a fresh batch of the same ratio. This refreshes nutrition without disturbing the roots.",
    },
    {
      q: "Should I buy bagged potting mix or make my own?",
      a: "Bagged mix is fine for a handful of pots, but check what's actually in it, some cheap bags lean mostly on garden soil. Mixing your own from cocopeat, compost, and sand is cheaper per litre if you have more than a few pots.",
    },
  ],
  "organic-pest-control-kitchen-garden-vegetables": [
    {
      q: "Is neem oil actually safe to spray on vegetables I'm going to eat?",
      a: "Yes. It breaks down within a few days. As a habit, avoid spraying anything you plan to pick within the next two to three days, and rinse harvested produce well regardless.",
    },
    {
      q: "How do I get rid of aphids on my tomato or chilli plants?",
      a: "A strong jet of water knocks most off, neem oil handles the rest. Check for ants on the stem too, they farm aphids and are often the first sign of a problem.",
    },
    {
      q: "What are the tiny white insects that scatter when I touch my plant?",
      a: "Whiteflies. Yellow sticky traps placed just above the canopy catch adults cheaply, combine with a neem oil spray for anything already established.",
    },
    {
      q: "How do I stop caterpillars from eating my coriander and methi?",
      a: "Handpick them in the early morning when they're most active and visible. For a small container garden this is genuinely the most effective method.",
    },
    {
      q: "Should I use chemical pesticides in a kitchen garden?",
      a: "Skip systemic chemical pesticides on anything you're growing to eat within weeks, they're formulated for long pre-harvest intervals that don't fit a balcony plant you check every other day.",
    },
  ],
};
