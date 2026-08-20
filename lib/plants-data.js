// Plant Encyclopedia v1, structured reference data.
// Kept factually consistent with claims already published in the
// Indoor Plants and Kitchen Gardening article pillars (see guideHref).

// Bump this whenever a plant is added, removed, or a growing note is
// substantively edited. Surfaced on the homepage stat line. Not
// auto-computed: doing that properly means a backend-tracked timestamp
// (see the Project Handbook, backend repo is not checked out in this
// session) or trusting git history / file mtimes at build time, both of
// which are unreliable in this project's actual Railway build
// environment. A single, easy-to-find manual constant, right next to the
// data it describes, is the honest tradeoff for now.
export const CONTENT_LAST_UPDATED = "Aug 20, 2026";

// plantingSeasons (used by app/tools/seasonal-calendar/page.js via
// lib/seasonal-calendar-helpers.js): which of India's three sowing
// seasons a plant is actually started in. Values are any combination of
// "kharif" (monsoon, sown June-July), "rabi" (winter, sown roughly
// October-January depending on region), and "zaid" (summer, sown
// roughly March-June) - or the single value "year-round" for something
// that doesn't follow a seasonal sowing window at all. The exact sow
// months for each season, and how they shift by region, live in
// lib/regions-data.js, not here; this field only says WHICH season(s) a
// plant belongs to, a plant-level horticultural fact that's the same
// across India, not a region-level climate fact.
//
// Deliberately only on genuinely seasonal vegetables, herbs, and
// flowering annuals, not every plant: a houseplant like snake plant or a
// perennial shrub like hibiscus doesn't have a "planting season" the way
// an annual vegetable does, and it's more honest to leave the field off
// than to force one on. When adding a new plant to the encyclopedia,
// only add plantingSeasons if it's a genuine annual sow-on-a-calendar
// crop; otherwise just omit the field.
//
// PLAINS REGIONS RESEARCH NOTE (Aug 2026): unlike the Himalayan region,
// which needed real fact-finding to fix (it launched with zero plants
// tagged for its "growing" season - see git history), the four plains
// regions' underlying Kharif/Rabi/Zaid architecture in
// lib/regions-data.js has been cross-checked against multiple
// independent published Indian vegetable-calendar sources (Bombay
// Greens, Urban Plant, Agri Farming, and a dedicated South Bengal / West
// Bengal vegetable calendar from bbplants.com, among others) and holds
// up - the general framework doesn't need a rewrite. A future
// contributor revisiting the plains seasons doesn't need to re-litigate
// that from scratch. The source-checking did surface two specific
// plant-level refinements (see the okra and fenugreek-methi comments
// below) plus confirmation that cauliflower, cabbage, pea, and french
// bean are major plains winter/Rabi crops, not just Himalayan hill crops.

const plants = [
  {
    slug: "money-plant-pothos",
    commonName: "Money Plant (Pothos)",
    scientificName: "Epipremnum aureum",
    category: "Indoor",
    light: "Low light",
    water: "Every 6-8 days",
    difficulty: "Easy",
    petSafe: false,
    matureSize: "Trailing vine, 1-2m+ if given support",
    note: "The default apartment plant for a reason: it grows in a bottle of water on a shelf with no soil at all. Keep it off low tables if you have a cat or dog that chews leaves; the sap irritates mouths.",
    guideHref: "/indoor-plants/low-light-indoor-plants-indian-apartments",
  },
  {
    slug: "snake-plant",
    commonName: "Snake Plant",
    scientificName: "Dracaena trifasciata",
    category: "Indoor",
    light: "Low light",
    water: "Every 12-14 days",
    difficulty: "Easy",
    petSafe: false,
    matureSize: "60-90 cm tall, upright",
    note: "The plant most likely to survive a week you forget about it entirely, since overwatering kills it far faster than neglect does. Fine for most homes but keep it away from a puppy that eats everything in reach.",
    guideHref: "/indoor-plants/low-light-indoor-plants-indian-apartments",
  },
  {
    slug: "zz-plant",
    commonName: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    category: "Indoor",
    light: "Low light",
    water: "Every 12-14 days",
    difficulty: "Easy",
    petSafe: false,
    matureSize: "45-75 cm tall",
    note: "Stores water in underground rhizomes, which is why it tolerates a corner several feet from any window better than almost anything else sold in Indian nurseries. Keep it out of reach of curious pets.",
    guideHref: "/indoor-plants/low-light-indoor-plants-indian-apartments",
  },
  {
    slug: "peace-lily",
    commonName: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    category: "Indoor",
    light: "Low light",
    water: "Every 4-5 days",
    difficulty: "Moderate",
    petSafe: false,
    matureSize: "40-60 cm tall",
    note: "Droops dramatically the moment it needs water and recovers within hours of a drink, which makes it one of the easiest plants to read. Keep it out of reach of pets that chew leaves.",
    guideHref: "/indoor-plants/low-light-indoor-plants-indian-apartments",
  },
  {
    slug: "spider-plant",
    commonName: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    category: "Indoor",
    light: "Low light",
    water: "Every 7-9 days",
    difficulty: "Easy",
    petSafe: true,
    matureSize: "30-45 cm, with trailing plantlets",
    note: "Shrugs off Indian tap water hardness better than most houseplants and throws out baby plantlets you can pot up for free. A safe pick if you have cats that like to chew leaves.",
    guideHref: "/indoor-plants/low-light-indoor-plants-indian-apartments",
  },
  {
    slug: "areca-palm",
    commonName: "Areca Palm",
    scientificName: "Dypsis lutescens",
    category: "Indoor",
    light: "Partial sun",
    water: "Every 5-7 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "1.8-3m indoors, in a large pot",
    note: "Wants bright indirect light near a large window rather than a dim corner, and rewards it by filling a living room fast. One of the few statement-sized indoor plants that's genuinely safe around pets.",
    guideHref: "/indoor-plants/pet-safe-indoor-plants-india",
  },
  {
    slug: "aloe-vera",
    commonName: "Aloe Vera",
    scientificName: "Aloe vera",
    category: "Balcony",
    light: "Full sun",
    water: "Every 14-18 days",
    difficulty: "Easy",
    petSafe: false,
    matureSize: "30-45 cm rosette",
    note: "Wants a sunny balcony ledge, not a dim windowsill. Indoors it tends to grow pale and leggy reaching for light. Handy for minor kitchen burns, but keep it away from pets since the plant itself is toxic if eaten.",
    guideHref: "/indoor-plants/pet-safe-indoor-plants-india",
    // Succulent, so it shares cacti's well-documented monsoon rot risk
    // (see app/balcony-gardening/potting-mix-and-soil-for-balcony-plants,
    // "one of the most common reasons succulents rot on Indian balconies,
    // especially through the monsoon"). Winter is the standard safe
    // window: cool and dry, no waterlogging risk, no peak-summer heat
    // stress on a newly planted offset either.
    plantingSeasons: ["rabi"],
  },
  {
    slug: "curry-leaf-plant",
    commonName: "Curry Leaf Plant",
    scientificName: "Murraya koenigii",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 5-7 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "1.5-2.5m if left unpruned",
    note: "Slow to establish in the first year but nearly permanent once it does. A single well-fed plant in a sunny corner can supply a household indefinitely. Regular harvesting keeps it bushy instead of leggy.",
    // A genuinely tough herb/small tree, not a delicate annual: commonly
    // planted from a nursery sapling in any month except the harshest
    // peak-summer heat or a real winter frost, neither of which most of
    // India sees for more than a few weeks a year. "Nearly permanent
    // once established" in its own note above is consistent with that
    // tolerance.
    plantingSeasons: ["year-round"],
  },
  {
    slug: "tulsi-holy-basil",
    commonName: "Tulsi (Holy Basil)",
    scientificName: "Ocimum tenuiflorum",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 2-3 days",
    difficulty: "Easy",
    petSafe: true,
    matureSize: "45-60 cm",
    note: "Grows easily from seed or a cutting and is one of the few plants that genuinely thrives in a small courtyard pot with full sun exposure. Pinch flower spikes regularly to keep leaf production going.",
    plantingSeasons: ["year-round"],
  },
  {
    slug: "marigold",
    commonName: "Marigold",
    scientificName: "Tagetes erecta",
    category: "Balcony",
    light: "Full sun",
    water: "Every 3-4 days",
    difficulty: "Easy",
    petSafe: false,
    matureSize: "30-45 cm",
    note: "Fast from seed to flower, usually 6-8 weeks, and doubles as a natural pest deterrent for vegetable containers nearby. The sap can mildly irritate pets that chew on it, so keep pots out of reach if that's a concern.",
    // One of the most commonly planted annual flowers in Himalayan hill
    // stations specifically: Shimla and Manali's famous seasonal flower
    // beds through the brief warm months are heavily marigold, a hardy,
    // fast bloomer well within a Mar-Jun to Aug-Oct hill growing window.
    plantingSeasons: ["kharif", "rabi", "growing"],
  },
  {
    slug: "hibiscus",
    commonName: "Hibiscus",
    scientificName: "Hibiscus rosa-sinensis",
    category: "Balcony",
    light: "Full sun",
    water: "Every 3-4 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "1.5-2.5m shrub, prunable to size",
    note: "Needs a genuinely large container, at least 14-16 inches, to flower well long-term, which is why potted hibiscus often disappoints on a small balcony. Feed regularly through the growing season for continuous blooms.",
    // Standard nursery/planting advice for perennial flowering shrubs in
    // India: establish at monsoon onset, when natural rain reduces the
    // watering burden during the vulnerable early-root stage. Not a
    // "sow it every year" crop, but genuinely has a best planting window,
    // same reasoning applied below to bougainvillea and jasmine.
    plantingSeasons: ["kharif"],
  },
  {
    slug: "jade-plant",
    commonName: "Jade Plant",
    scientificName: "Crassula ovata",
    category: "Indoor",
    light: "Partial sun",
    water: "Every 14-18 days",
    difficulty: "Easy",
    petSafe: false,
    matureSize: "30-60 cm",
    note: "A succulent that tolerates a bright indoor windowsill as well as a balcony, making it one of the more flexible plants on this list for apartments with limited outdoor space. Toxic to pets if chewed, so place it out of paw's reach.",
    // Same succulent monsoon-rot risk as aloe vera above; winter is the
    // safe propagating window.
    plantingSeasons: ["rabi"],
  },
  {
    slug: "boston-fern",
    commonName: "Boston Fern",
    scientificName: "Nephrolepis exaltata",
    category: "Indoor",
    light: "Low light",
    water: "Every 3-4 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "45-60 cm spread",
    note: "Wants humidity a typical living room doesn't have, so a bathroom with a window or a spot near the kitchen sink usually works better than a bedroom shelf. Non-toxic, so it's a safe choice for a household with pets.",
    guideHref: "/indoor-plants/pet-safe-indoor-plants-india",
  },
  {
    slug: "calathea",
    commonName: "Calathea",
    scientificName: "Calathea (Goeppertia) spp.",
    category: "Indoor",
    light: "Low light",
    water: "Every 3-4 days",
    difficulty: "Challenging",
    petSafe: true,
    matureSize: "30-50 cm",
    note: "Fussy about water quality and humidity. Leaf edges brown quickly with hard tap water or dry indoor air, so filtered or rested water works better. Worth the extra effort for a pet-safe plant with genuinely striking leaf patterns.",
    guideHref: "/indoor-plants/pet-safe-indoor-plants-india",
  },
  {
    slug: "coriander",
    commonName: "Coriander",
    scientificName: "Coriandrum sativum",
    category: "Kitchen",
    light: "Partial sun",
    water: "Every 2-3 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "20-30 cm",
    note: "Grows from cracked kitchen-spice seed in days and is ready to harvest in three to four weeks, but bolts fast once temperatures cross around 30°C. Best sown October to February in most Indian cities.",
    guideHref: "/kitchen-gardening/growing-coriander-mint-containers-india",
    // A classic cool-season crop: its own note above already says it
    // bolts once temperatures cross ~30°C, which is exactly what a
    // genuine winter is for on the plains (hence "rabi"), but in a hill
    // climate that's too cold for it, the equivalent cool-but-not-frozen
    // window is spring/early summer instead.
    plantingSeasons: ["rabi", "growing"],
  },
  {
    slug: "mint",
    commonName: "Mint",
    scientificName: "Mentha spicata",
    category: "Kitchen",
    light: "Partial sun",
    water: "Every 2-3 days",
    difficulty: "Easy",
    petSafe: true,
    matureSize: "30-45 cm, spreads aggressively",
    note: "Roots from a cutting in a glass of water within a week and grows year-round in most Indian cities. Give it its own pot, since the roots spread underground fast enough to crowd out anything sharing the container.",
    guideHref: "/kitchen-gardening/growing-coriander-mint-containers-india",
    plantingSeasons: ["year-round"],
  },
  {
    slug: "tomato",
    commonName: "Tomato",
    scientificName: "Solanum lycopersicum",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 2 days",
    difficulty: "Challenging",
    petSafe: false,
    matureSize: "1-1.5m, needs staking or a cage",
    note: "Needs at least 12-14 inches of container depth and 5-6 hours of direct sun to fruit well. The most common reason balcony tomatoes disappoint is too small a pot. The leaves and stems are toxic to pets, so keep low branches trimmed if animals roam the balcony.",
    guideHref: "/kitchen-gardening/growing-tomatoes-chillies-balcony-containers",
    // Himachal Pradesh is a genuine, significant commercial
    // tomato-growing state in India, grown through the warm hill months
    // and harvested before autumn frost, a real-world confirmation this
    // fits a Mar-Jun to Aug-Oct hill growing window well.
    plantingSeasons: ["kharif", "rabi", "growing"],
  },
  {
    slug: "green-chilli",
    commonName: "Green Chilli",
    scientificName: "Capsicum annuum",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 2-3 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "45-75 cm",
    note: "More forgiving than tomatoes on container size (a 10-inch pot works) and handles Indian balcony heat better than almost any other fruiting vegetable. One healthy plant keeps fruiting for months with regular harvesting.",
    guideHref: "/kitchen-gardening/growing-tomatoes-chillies-balcony-containers",
    // Chillies and capsicum are genuinely grown at mid-elevation hill
    // farms in Himachal and Uttarakhand too, sown in the warm months and
    // cleared before frost, the same window as tomato above.
    plantingSeasons: ["kharif", "rabi", "growing"],
  },
  {
    slug: "lemon",
    commonName: "Lemon (Nimbu)",
    scientificName: "Citrus limon",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 3-4 days",
    difficulty: "Challenging",
    petSafe: false,
    matureSize: "1-2m in a large container, slower and more compact than a ground-planted tree",
    note: "Needs a genuinely large pot, 16 inches or more, with sharp drainage, since the roots resent sitting wet. Hard Indian tap water tends to push the soil alkaline over time, which shows up as yellowing between the leaf veins (iron chlorosis); a dose of chelated iron or occasional rainwater helps. Slow to fruit, often 2-3 years from a nursery sapling. The leaves, stems, and unripe fruit contain citrus oils and psoralens that are toxic to cats and dogs, so keep pots out of reach.",
  },
  {
    slug: "papaya",
    commonName: "Papaya",
    scientificName: "Carica papaya",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 2-3 days",
    difficulty: "Challenging",
    petSafe: false,
    matureSize: "2-3m even in a large container or ground bed; effectively a fast-growing small tree, not container-friendly long-term",
    note: "Grows fast from seed but needs deep, very well-drained soil, since papaya roots rot quickly in waterlogged pots. Plants are male, female, or bisexual; only female or bisexual plants fruit, so a papaya grown from a random seed has roughly even odds of turning out male and never fruiting at all. Shallow roots and a top-heavy crown mean it needs shelter from strong balcony wind. The sap in the leaves and unripe fruit contains latex and papain, which irritate skin and the mouth if chewed, so treat it as not pet-safe.",
    // Unlike lemon below, papaya is commonly grown straight from seed
    // (its own note above says so) rather than almost always from a
    // nursery sapling, which makes a sowing season meaningful here.
    // Summer sowing avoids both the root-rot risk monsoon brings (its
    // own note again: "roots rot quickly in waterlogged pots") and any
    // winter chill, which papaya, a tropical plant, tolerates poorly.
    plantingSeasons: ["zaid"],
  },
  {
    slug: "fenugreek-methi",
    commonName: "Fenugreek (Methi)",
    scientificName: "Trigonella foenum-graecum",
    category: "Kitchen",
    light: "Partial sun",
    water: "Every 2-3 days",
    difficulty: "Easy",
    petSafe: true,
    matureSize: "15-30 cm if harvested young for leaves",
    note: "One of the fastest kitchen-garden crops to go from seed to plate: soak whole methi seeds (the kind sold for cooking) overnight and they germinate within days. Ready to cut as leafy methi in about 3-4 weeks; harvest cut-and-come-again a couple of times before it bolts and flowers. Tolerates partial sun better than most fruiting vegetables, which makes it a good fit for a balcony that only gets a few hours of direct light.",
    // Same cool-season leafy-green logic as coriander and spinach:
    // genuinely suited to a hill climate's milder spring/summer, not
    // just the plains' winter.
    //
    // The same South Bengal / West Bengal vegetable calendar
    // (bbplants.com) that flagged okra's summer window above also shows
    // methi sown August-September in that region - an early post-monsoon
    // sowing, not the pure Oct-Jan Rabi window this was tagged with
    // alone. The season-key system already allows a plant to belong to
    // more than one season (curry-leaf-plant above uses "year-round";
    // tomato and green-chilli already combine kharif+rabi+growing), so
    // this isn't a stretch of the data model. Adding "kharif" alongside
    // the existing "rabi": methi is fast enough (its own note above says
    // "ready to cut... in about 3-4 weeks") that an early post-monsoon
    // sowing is a genuinely real second window, not just Rabi with a
    // generous grace period either side of it.
    plantingSeasons: ["kharif", "rabi", "growing"],
  },
  {
    slug: "spinach-palak",
    commonName: "Spinach (Palak)",
    scientificName: "Spinacia oleracea",
    category: "Kitchen",
    light: "Partial sun",
    water: "Every 2-3 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "15-25 cm rosette",
    note: "A cool-season crop, best sown October to February in most Indian cities; it bolts and turns bitter fast once daytime temperatures climb above the mid-20s°C. Keep the soil consistently moist, since letting it dry out toughens the leaves. Harvest outer leaves and let the center keep producing rather than pulling the whole plant at once.",
    // Its own note above says it bolts once temperatures pass the
    // mid-20s°C - a hill climate's summer often stays at or below that
    // for much of the day, arguably a better fit for spinach than the
    // hot plains, not just a compromise.
    plantingSeasons: ["rabi", "growing"],
  },
  {
    slug: "okra-bhindi",
    commonName: "Okra (Bhindi / Lady's Finger)",
    scientificName: "Abelmoschus esculentus",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 2-3 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "60-90 cm",
    note: "Handles peak Indian summer heat better than tomatoes or chillies, which makes it one of the more reliable fruiting vegetables for a hot, exposed balcony. Needs a 12-inch-plus container for a decent root run. Pods turn fibrous and woody within a day or two of reaching full size, so once flowering starts it needs harvesting every 1-2 days to stay tender. The fine bristles on stems and pods can mildly irritate skin during picking.",
    // A dedicated South Bengal / West Bengal vegetable calendar
    // (bbplants.com) shows okra sown March-April in that region, ahead
    // of the general Kharif (June-July) window this was previously
    // tagged with alone. That's consistent with how okra is widely grown
    // elsewhere in India too - a genuine double-crop vegetable, with a
    // real summer sowing (roughly Feb-April) as well as the monsoon one,
    // not a single-window crop the way peas or cauliflower are. Its own
    // note above already says it "handles peak Indian summer heat"
    // better than most fruiting vegetables, which supports a summer
    // sowing rather than contradicting it. Adding "zaid" alongside the
    // existing "kharif" rather than replacing it, since both windows are
    // real.
    plantingSeasons: ["kharif", "zaid"],
  },
  {
    slug: "bougainvillea",
    commonName: "Bougainvillea",
    scientificName: "Bougainvillea spectabilis",
    category: "Balcony",
    light: "Full sun",
    water: "Every 7-10 days",
    difficulty: "Easy",
    petSafe: true,
    matureSize: "Climbs several metres if trained on a trellis, or kept as a 1-1.5m compact shrub with pruning",
    note: "One of the toughest, most neglect-tolerant flowering plants for an Indian balcony, and counterintuitively flowers best when watered a little less rather than more; established plants can go 7-10 days between waterings, longer than most flowering plants on this list. Non-toxic to cats and dogs if chewed, but the sharp thorns are a real hazard on their own and worth keeping in mind around pets and small children.",
    // Same monsoon-establishment logic as hibiscus above. Bougainvillea
    // is genuinely one of the most forgiving shrubs to establish, per
    // its own note, but monsoon planting is still the standard,
    // most-repeated advice across Indian nurseries and gardening sources.
    plantingSeasons: ["kharif"],
  },
  {
    slug: "jasmine-mogra",
    commonName: "Jasmine (Mogra)",
    scientificName: "Jasminum sambac",
    category: "Balcony",
    light: "Full sun",
    water: "Every 3-4 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "60 cm-1.5m, trainable on a trellis or kept bushy with pruning",
    note: "Rewards full sun with heavily scented flowers through summer and monsoon, but sulks and drops buds in deep shade. Watch for mealybugs and sooty mould in humid weather; regular pruning after flowering keeps it bushy rather than leggy. True jasmine (the Jasminum genus, which mogra belongs to) is non-toxic to cats and dogs; note that this is specific to true jasmine and doesn't extend to unrelated plants that share the common name \"jasmine,\" such as Carolina jessamine, which is a different, toxic genus.",
    // Its own note above already says it "rewards full sun with heavily
    // scented flowers through summer and monsoon", i.e. actively growing
    // through kharif, which is also the standard planting window for
    // this shrub.
    plantingSeasons: ["kharif"],
  },
  {
    slug: "rose",
    commonName: "Rose (Gulab)",
    scientificName: "Rosa spp.",
    category: "Balcony",
    light: "Full sun",
    water: "Every 3-4 days",
    difficulty: "Challenging",
    petSafe: true,
    matureSize: "1-1.5m shrub, prunable to size",
    note: "Fussier in pots than marigold or hibiscus, especially through India's humid monsoon and summer, when black spot and powdery mildew show up fast on damp foliage. Water the soil in the morning rather than the leaves in the evening, and give it a large pot (14-16 inches) plus monthly feeding for repeat blooms. Non-toxic to cats and dogs, though the thorns are their own hazard.",
    // Its own note above is explicit that monsoon and summer bring
    // fungal disease pressure on damp foliage, the opposite of a good
    // planting window. Winter (cool, dry, low disease pressure) is the
    // standard, widely-documented planting season for roses in India,
    // consistent with what this plant's own note already implies.
    // Roses are also, internationally, a classically temperate-climate
    // plant, arguably happier in a cool hill climate overall than on the
    // hot plains; Himachal hill stations have a long, well-documented
    // history of rose cultivation for exactly this reason.
    plantingSeasons: ["rabi", "growing"],
  },
  {
    slug: "rubber-plant",
    commonName: "Rubber Plant",
    scientificName: "Ficus elastica",
    category: "Indoor",
    light: "Partial sun",
    water: "Every 7-9 days",
    difficulty: "Moderate",
    petSafe: false,
    matureSize: "1.5-3m indoors over years if unpruned, easily kept smaller by pruning and pot size",
    note: "Wants bright indirect light rather than a dim corner; tolerates lower light but grows slower and less glossy. Sensitive to overwatering, which shows up as black spots or root rot, and to sudden changes in light, temperature, or draughts, which cause leaf drop. The milky latex sap is irritating to skin and toxic to cats and dogs if the leaves or stems are chewed, so keep it away from curious pets.",
  },
  {
    slug: "philodendron",
    commonName: "Philodendron",
    scientificName: "Philodendron hederaceum",
    category: "Indoor",
    light: "Low light",
    water: "Every 6-8 days",
    difficulty: "Easy",
    petSafe: false,
    matureSize: "Trailing vine, 1-2m+ if given support",
    note: "Often mistaken for money plant (pothos) on a nursery shelf, but the heart-shaped leaves are thinner and softer, and new growth typically unfurls from a light pink or copper sheath. Roots readily from a cutting in a glass of water, making it one of the easiest plants on this list to propagate for free. Contains calcium oxalate crystals that irritate the mouth and cause drooling or vomiting if a cat or dog chews the leaves, so keep it out of reach.",
  },
  {
    slug: "cabbage-patta-gobhi",
    commonName: "Cabbage (Patta Gobhi)",
    scientificName: "Brassica oleracea var. capitata",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 2-3 days",
    difficulty: "Moderate",
    petSafe: true,
    matureSize: "Low rosette, head 15-20 cm across at harvest",
    note: "Takes closer to three months to head up, noticeably longer than most container vegetables, and does better started as a seedling in a tray than sown straight into its final pot. Give it a 10-12 inch container per head and keep the soil steadily moist once the head starts forming; a pot that dries out and then gets soaked heavily tends to split the head.",
    guideHref: "/kitchen-gardening/growing-methi-palak-patta-gobhi-containers",
    // A classic winter (Rabi) vegetable on the plains, sown October-
    // November for a February harvest per this site's own container
    // guide (linked above), and independently confirmed as a plains
    // winter crop by the South Bengal vegetable calendar research (see
    // the note near the top of this file). Also a genuine, well-known
    // hill-station crop: cabbage needs sustained cool temperatures to
    // head properly, which Himachal and Uttarakhand hill farms supply
    // through their summer growing window even without a formal winter,
    // hence "growing" alongside "rabi" rather than instead of it.
    plantingSeasons: ["rabi", "growing"],
  },
  {
    slug: "cauliflower-phool-gobhi",
    commonName: "Cauliflower (Phool Gobhi)",
    scientificName: "Brassica oleracea var. botrytis",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 2-3 days",
    difficulty: "Challenging",
    petSafe: true,
    matureSize: "Rosette 40-50 cm across, curd 12-18 cm diameter at harvest",
    note: "Fussier than cabbage about steady cool temperatures while the curd is forming; a warm spell partway through tends to leave the curd small, loose, or off-white instead of tight and pale. Start in a seedling tray and transplant once it has 4-5 true leaves into at least a 12-14 inch container, and keep feeding it through the vegetative stage so it has the reserves to form a good curd once cooler weather triggers it.",
    // Same Rabi plains window as cabbage above - the South Bengal
    // vegetable calendar research explicitly lists cauliflower in its
    // winter section, alongside cabbage and peas. Also a major
    // hill-station commercial crop for the same reason as cabbage: it
    // needs sustained cool temperatures to form a curd at all, arguably
    // an even better fit for a genuinely cool hill climate than the
    // plains' winter, hence "growing" alongside "rabi".
    plantingSeasons: ["rabi", "growing"],
  },
  {
    slug: "pea-matar",
    commonName: "Pea (Matar)",
    scientificName: "Pisum sativum",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 2-3 days",
    difficulty: "Easy",
    petSafe: true,
    matureSize: "45-90 cm vine, needs a trellis or stakes for support once it starts climbing",
    note: "One of the more forgiving container vegetables to start from seed, and unlike most fruiting vegetables on this list it's a legume that fixes its own nitrogen rather than depending entirely on feeding. Sow directly into the final container, since pea seedlings resent transplanting. Give it something to climb early - chicken wire, a small trellis, or garden twine strung between stakes - or the vines sprawl and tangle instead of producing well.",
    // A strictly cool-season crop nationally; unlike okra or french bean
    // below, peas don't have a genuine Kharif or Zaid window anywhere in
    // India, the heat simply stops them setting pods. The South Bengal
    // vegetable calendar research explicitly lists peas in its winter
    // section alongside cauliflower and cabbage, confirming the plains
    // Rabi window. Also a major hill-station crop grown through the
    // summer "growing" window for the same cool-temperature reason as
    // cauliflower and cabbage above.
    plantingSeasons: ["rabi", "growing"],
  },
  {
    slug: "french-bean",
    commonName: "French Bean (Frans Beans)",
    scientificName: "Phaseolus vulgaris",
    category: "Kitchen",
    light: "Full sun",
    water: "Every 2-3 days",
    difficulty: "Easy",
    petSafe: true,
    matureSize: "Bush type 30-45 cm, or a 1.5-2m climbing vine on a trellis depending on variety",
    note: "Bush varieties are the better container fit than climbing types, staying compact enough for an 8-10 inch pot without needing a trellis. Ready to harvest in about 7-8 weeks from sowing, and picking pods regularly while they're young and tender keeps the plant producing longer instead of running to seed.",
    // The South Bengal source's winter list (see the pea and cauliflower
    // comments above) doesn't name french bean specifically, so this one
    // leans on the wider, well-documented pattern instead: french bean's
    // primary, biggest national window is Kharif (monsoon sowing), the
    // same as okra, but bush/dwarf varieties are also a real, commonly
    // grown Rabi crop across much of the plains (sown Oct-Nov in
    // warmer-winter regions) - the same multi-season pattern already
    // used for tomato and green-chilli above, not a stretch for this
    // family of fruiting vegetable. Also grown extensively at hill farms
    // through the summer "growing" window.
    plantingSeasons: ["kharif", "rabi", "growing"],
  },
];

export default plants;

export function getAllPlants() {
  return plants;
}

export function getPlantBySlug(slug) {
  return plants.find((plant) => plant.slug === slug);
}
