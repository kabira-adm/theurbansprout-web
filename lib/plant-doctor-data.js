// Plant Doctor: a rule-based (not AI) symptom-to-cause decision tree. Every
// diagnosis here is written to agree with what the linked article itself
// already says, not asserted independently — see the citation comment
// above each diagnosis leaf for exactly which article and claim it's
// drawn from. Where the site doesn't have grounded content for a specific
// cause (a dedicated fungal-leaf-spot article, for instance), the branch
// stays deliberately general rather than naming a specific disease, per
// this tool's own accuracy rule: triage and routing, not a second source
// of care advice.
//
// Tree shape: SYMPTOMS lists the top-level entry points shown as step 1.
// TREE[symptomId] is either a `question` node ({ question, options: [{
// label, next }] }, where `next` is another question node or a diagnosis
// node) or, for the couple of symptoms simple enough not to need
// narrowing, a diagnosis node directly. A diagnosis node is
// `{ diagnosis, title, explanation, href, linkLabel }`.

export const SYMPTOMS = [
  { id: "yellowing", label: "Yellowing leaves" },
  { id: "crispy", label: "Brown or crispy leaf edges/tips" },
  { id: "wilting", label: "Wilting despite watering" },
  { id: "drooping", label: "Drooping" },
  { id: "spots", label: "Spots on leaves" },
  { id: "stunted", label: "No growth / stunted" },
  { id: "dropping", label: "Dropping leaves" },
  { id: "whitefuzz", label: "White or fuzzy substance on leaves or soil" },
];

// Reused across multiple diagnoses so the exact title/href never drifts
// out of sync between branches.
const ARTICLES = {
  overwateringIndoor: {
    href: "/indoor-plants/stop-overwatering-indoor-plants",
    linkLabel: "How to stop overwatering indoor plants",
  },
  wateringSchedule: {
    href: "/balcony-gardening/watering-schedule-indian-summers-monsoons",
    linkLabel: "A realistic watering schedule for Indian summers and monsoons",
  },
  fertilizingSchedule: {
    href: "/balcony-gardening/fertilizing-schedule-balcony-plants",
    linkLabel: "A fertilizing schedule for balcony plants",
  },
  highRise: {
    href: "/balcony-gardening/high-rise-balcony-challenges",
    linkLabel: "High-rise balcony challenges",
  },
  repotting: {
    href: "/indoor-plants/repotting-indoor-plants-when-how",
    linkLabel: "Repotting indoor plants: when and how",
  },
  pestBalcony: {
    href: "/balcony-gardening/organic-pest-control-balcony-plants",
    linkLabel: "Organic pest control for open-air balconies",
  },
  sunlight: {
    href: "/balcony-gardening/reading-balcony-sunlight",
    linkLabel: "Reading your balcony's sunlight",
  },
};

export const TREE = {
  // Cross-referenced against /indoor-plants/stop-overwatering-indoor-plants
  // ("Yellowing lower leaves that feel soft or mushy point to
  // overwatering"), /balcony-gardening/watering-schedule-indian-summers-monsoons
  // ("Overwatered: yellowing lower leaves, soft or mushy stems"), and
  // /balcony-gardening/fertilizing-schedule-balcony-plants ("Pale or
  // yellowing older leaves, starting from the bottom of the plant and
  // working up, while new growth still looks reasonably healthy. This is
  // a classic nitrogen deficiency pattern."). All three agree: soft/mushy
  // + wet soil points to overwatering; pale/firm + otherwise-dry soil
  // points to feeding, not water.
  yellowing: {
    question: "Is this plant indoors, or out on a balcony/terrace?",
    options: [
      {
        label: "Indoors",
        next: {
          question:
            "Is the soil moist right now, and do the yellow leaves feel soft or mushy?",
          options: [
            {
              label: "Yes — soil's moist, and the yellow leaves are soft or mushy",
              next: {
                diagnosis: true,
                title: "Likely overwatering",
                explanation:
                  "Soft, mushy, yellowing leaves on moist soil is the classic overwatering pattern indoors, where there's no sun or breeze to dry the pot out between waterings. Let the soil dry out properly before the next watering, and check that water isn't pooling in a saucer or an outer decorative pot.",
                ...ARTICLES.overwateringIndoor,
              },
            },
            {
              label:
                "No — soil's dried out, and it's the older leaves fading while new growth looks fine",
              next: {
                diagnosis: true,
                title: "Likely a feeding issue, not water",
                explanation:
                  "Pale or yellowing older leaves that fade from the bottom up, while new growth stays healthy, is the classic sign of nitrogen deficiency rather than a watering problem. Most potting mix only feeds a plant for 4–6 weeks before it needs a top-up.",
                ...ARTICLES.fertilizingSchedule,
              },
            },
          ],
        },
      },
      {
        label: "Balcony or terrace",
        next: {
          question:
            "Is the soil moist right now, and do the yellow leaves feel soft or mushy?",
          options: [
            {
              label: "Yes — soil's moist, and the yellow leaves are soft or mushy",
              next: {
                diagnosis: true,
                title: "Likely overwatering",
                explanation:
                  "Soft, mushy, yellowing lower leaves on moist soil points to overwatering, the single most common cause of dead balcony plants in India. A fixed watering schedule that ignores season and rain is usually the root cause.",
                ...ARTICLES.wateringSchedule,
              },
            },
            {
              label:
                "No — soil's dried out, and it's the older leaves fading while new growth looks fine",
              next: {
                diagnosis: true,
                title: "Likely a feeding issue, not water",
                explanation:
                  "Pale or yellowing older leaves that fade from the bottom up, while new growth stays healthy, is the classic sign of nitrogen deficiency rather than a watering problem. Container plants only get the nutrients you actually feed them.",
                ...ARTICLES.fertilizingSchedule,
              },
            },
          ],
        },
      },
    ],
  },

  // Cross-referenced against /indoor-plants/stop-overwatering-indoor-plants
  // ("crisp, dry, browning leaf tips usually point to underwatering or low
  // humidity") and /balcony-gardening/high-rise-balcony-challenges, which
  // is explicit that on a high floor "crisping at the edges despite
  // regular watering is almost certainly a humidity problem" — distinct
  // from plain underwatering, which is why height gets its own branch
  // here rather than being folded into "balcony."
  crispy: {
    question: "Where is the plant?",
    options: [
      {
        label: "Indoors",
        next: {
          diagnosis: true,
          title: "Likely underwatering or low indoor humidity",
          explanation:
            "Crisp, dry, browning leaf tips indoors usually mean underwatering or low humidity, not overwatering — the opposite of yellow, soft leaves. AC and closed windows keep indoor air drier than most houseplants are used to.",
          ...ARTICLES.overwateringIndoor,
        },
      },
      {
        label: "Balcony or terrace, low or mid floor",
        next: {
          question: "Has watering been consistent, without the soil going bone-dry between waterings?",
          options: [
            {
              label: "Not really — it dries out fast, or I forget sometimes",
              next: {
                diagnosis: true,
                title: "Likely underwatering",
                explanation:
                  "Dry, crisp leaf edges with soil pulling away from the pot's sides is the textbook underwatering sign. Indian summer heat and wind pull moisture out of a container fast, especially a small one.",
                ...ARTICLES.wateringSchedule,
              },
            },
            {
              label: "Yes, watering's been fairly consistent",
              next: {
                diagnosis: true,
                title: "Probably still watering volume, not a bigger problem",
                explanation:
                  "\"Consistent\" and \"enough\" aren't always the same thing, especially through peak summer, when most potted plants need water daily. The finger test is the reliable way to check rather than going by a fixed routine.",
                ...ARTICLES.wateringSchedule,
              },
            },
          ],
        },
      },
      {
        label: "Balcony, high floor, especially near glass buildings",
        next: {
          diagnosis: true,
          title: "Likely a high-altitude humidity problem",
          explanation:
            "Crisping at the edges despite regular watering, on a high floor, is almost certainly a humidity problem, not a watering one. Air runs noticeably drier the higher up you go, and reflected heat off nearby glass facades makes it worse.",
          ...ARTICLES.highRise,
        },
      },
    ],
  },

  // Cross-referenced against /balcony-gardening/fertilizing-schedule-balcony-plants
  // ("Wilting despite moist soil. Counterintuitively, an overfed,
  // salt-heavy soil can make it harder for roots to actually take up
  // water") and /indoor-plants/repotting-indoor-plants-when-how ("Growth
  // has stalled despite correct light and water... roots are pot-bound").
  // "Wilting despite watering" specifically implies watering alone isn't
  // the fix, which is why this tree checks feeding and root-bound state
  // before falling back to plain overwatering.
  wilting: {
    question:
      "Is there a white, crusty buildup on the soil surface, or have you fed/fertilized in the last week or two?",
    options: [
      {
        label: "Yes, one or both of those",
        next: {
          diagnosis: true,
          title: "Likely fertilizer/salt burn",
          explanation:
            "Wilting despite moist soil, combined with a crusty white buildup or recent feeding, points to a salt-heavy soil making it harder for roots to actually take up water. Flush the pot thoroughly with plain water and hold off feeding for a few weeks.",
          ...ARTICLES.fertilizingSchedule,
        },
      },
      {
        label: "No, neither of those",
        next: {
          question: "Does the pot feel heavy and stay damp for several days after watering?",
          options: [
            {
              label: "Yes, it stays wet a long time",
              next: {
                diagnosis: true,
                title: "Likely overwatering / root rot",
                explanation:
                  "Soil that stays wet for days lets roots sit in moisture they aren't using, which is the leading cause of root rot. Damaged roots then can't actually take up water properly, so the plant wilts even though the pot is anything but dry.",
                ...ARTICLES.overwateringIndoor,
              },
            },
            {
              label: "No, it actually dries out fast despite the wilting",
              next: {
                diagnosis: true,
                title: "Possibly root-bound",
                explanation:
                  "A pot that dries out unusually fast, with wilting that watering doesn't fully fix, can mean the roots have outgrown the pot and there's little soil left to hold moisture. Check for roots circling the surface or showing at the drainage hole.",
                ...ARTICLES.repotting,
              },
            },
          ],
        },
      },
    ],
  },

  // No article covers "drooping" as a distinct symptom head-on. Grounded
  // against /indoor-plants/repotting-indoor-plants-when-how's aftercare
  // note ("A little leaf droop in the first few days is normal" after a
  // repot) for the transplant-shock branch, and the two watering
  // articles' well-established underwatering pattern for the other.
  drooping: {
    question: "Did this start right after repotting, or moving the plant to a new spot?",
    options: [
      {
        label: "Yes, recently repotted or moved",
        next: {
          diagnosis: true,
          title: "Likely transplant/relocation stress",
          explanation:
            "A little droop in the days after a repot or a move is normal — it's usually just root disturbance, and it typically settles on its own within a week or two as the plant resettles.",
          ...ARTICLES.repotting,
        },
      },
      {
        label: "No, it's been gradual, no recent change",
        next: {
          question:
            "Does the soil feel dry, and does the plant perk back up a few hours after watering?",
          options: [
            {
              label: "Yes — dry soil, and it recovers after I water",
              next: {
                diagnosis: true,
                title: "Likely simple thirst",
                explanation:
                  "Drooping from dry soil that recovers within a few hours of watering is ordinary underwatering, not a deeper problem. It just needs water a bit more often for the season it's in.",
                ...ARTICLES.wateringSchedule,
              },
            },
            {
              label: "No — soil isn't dry, or it doesn't fully recover",
              next: {
                diagnosis: true,
                title: "Worth checking for overwatering",
                explanation:
                  "Drooping that doesn't resolve with watering, and soil that isn't actually dry, points more toward overwatering or root stress than thirst. Worth running the finger test and checking the roots before watering any more.",
                ...ARTICLES.overwateringIndoor,
              },
            },
          ],
        },
      },
    ],
  },

  // Spider mite branch is well grounded: /balcony-gardening/organic-pest-control-balcony-plants
  // describes their damage exactly as "fine stippled yellow or white
  // speckling across leaves, sometimes with very fine webbing near leaf
  // joints." No article on this site covers fungal/bacterial leaf spot
  // disease specifically, so per this tool's accuracy rule, that branch
  // stays general and hedged rather than naming a specific disease.
  spots: {
    question: "Are the spots fine pale/yellow speckling, or distinct darker blotches?",
    options: [
      {
        label: "Fine pale or yellow speckling",
        next: {
          question: "Any faint webbing where leaves meet the stem, especially in hot weather?",
          options: [
            {
              label: "Yes, a bit of fine webbing",
              next: {
                diagnosis: true,
                title: "Likely spider mites",
                explanation:
                  "Fine stippled speckling plus faint webbing near leaf joints is the signature spider mite pattern. They're tiny enough to be nearly invisible until the damage shows, and thrive in hot, dry conditions.",
                ...ARTICLES.pestBalcony,
              },
            },
            {
              label: "No webbing that I've noticed",
              next: {
                diagnosis: true,
                title: "Possibly spider mites",
                explanation:
                  "Fine speckling on its own, even without visible webbing yet, is still the earliest sign of a spider mite infestation, which shows up before the damage becomes obvious. Worth checking leaf undersides closely.",
                ...ARTICLES.pestBalcony,
              },
            },
          ],
        },
      },
      {
        label: "Darker brown or black blotches",
        next: {
          diagnosis: true,
          title: "Possibly a fungal issue, general guidance",
          explanation:
            "Darker, irregular blotches, especially appearing during humid or rainy weather or on plants placed close together, often point to a fungal or bacterial leaf-spot issue rather than a pest. This site doesn't have a dedicated fungal-disease guide yet, so treat this as a general pointer rather than a firm diagnosis: improve airflow between pots, avoid wetting leaves when you water, and remove badly affected leaves. If pest damage is also visible, or you're in a humid coastal city, the pest guide below covers the fungal-adjacent issues that tend to go with high humidity.",
          ...ARTICLES.pestBalcony,
        },
      },
    ],
  },

  // Cross-referenced against /indoor-plants/repotting-indoor-plants-when-how
  // ("Growth has stalled despite correct light and water. This often
  // means roots are pot-bound") and /balcony-gardening/fertilizing-schedule-balcony-plants
  // ("Slow, stunted growth through what should be active growing months,
  // with no other obvious cause"). Both are explicit about ruling the
  // other factors out first, which is why this branch checks root-bound
  // signs before feeding.
  stunted: {
    question:
      "Has it been in the same pot 2+ years, with roots visible circling the surface or at the drainage hole?",
    options: [
      {
        label: "Yes, and I can see roots like that",
        next: {
          diagnosis: true,
          title: "Likely root-bound",
          explanation:
            "Growth stalling despite otherwise correct light and water, combined with visible roots at the surface or drainage hole, usually means the roots have outgrown the pot and have nowhere left to expand.",
          ...ARTICLES.repotting,
        },
      },
      {
        label: "No, or it's been recently potted",
        next: {
          question: "Has it been getting regular water and reasonable light, just growing slowly?",
          options: [
            {
              label: "Yes, water and light both seem fine",
              next: {
                diagnosis: true,
                title: "Likely needs feeding",
                explanation:
                  "Slow, stunted growth through what should be an active growing period, with water and light otherwise fine, is a classic underfeeding sign. Potting mix only carries enough nutrients for the first 4–6 weeks.",
                ...ARTICLES.fertilizingSchedule,
              },
            },
            {
              label: "Not totally sure — light or water might be off",
              next: {
                diagnosis: true,
                title: "Check light first",
                explanation:
                  "Before assuming a feeding or pot problem, it's worth ruling out light: a plant getting less direct sun than it needs will grow slowly no matter what else is right. A one-day sunlight check settles it either way.",
                ...ARTICLES.sunlight,
              },
            },
          ],
        },
      },
    ],
  },

  // No article covers leaf drop as its own topic. Grounded against
  // /indoor-plants/repotting-indoor-plants-when-how's aftercare note for
  // the shock branch, and the established overwatering/underwatering
  // leaf patterns (soft-and-yellow vs crisp-and-dry) for the other,
  // treating leaf drop as a further stage of the same two patterns
  // rather than a separate cause.
  dropping: {
    question: "Did this start right after repotting or moving the plant?",
    options: [
      {
        label: "Yes, recently repotted or moved",
        next: {
          diagnosis: true,
          title: "Likely transplant/relocation shock",
          explanation:
            "Some leaf loss right after a repot or a move is a normal stress response, especially if the plant went straight back into direct sun or an AC draft. Give it a sheltered spot for a week or two to recover.",
          ...ARTICLES.repotting,
        },
      },
      {
        label: "No, it's been gradual",
        next: {
          question: "Does the soil stay wet a long time, and did the leaves look yellow or soft before dropping?",
          options: [
            {
              label: "Yes — wet soil, and leaves were yellow/soft first",
              next: {
                diagnosis: true,
                title: "Likely overwatering",
                explanation:
                  "Leaves that turn soft and yellow before dropping, on soil that stays wet a long time, is an advanced overwatering pattern. It's worth checking the roots, not just easing off watering going forward.",
                ...ARTICLES.overwateringIndoor,
              },
            },
            {
              label: "No — soil dries fast, and leaves went crisp/brown first",
              next: {
                diagnosis: true,
                title: "Likely underwatering",
                explanation:
                  "Leaves that crisp and brown before dropping, with soil that dries out fast, points to underwatering or drought stress rather than a root problem.",
                ...ARTICLES.wateringSchedule,
              },
            },
          ],
        },
      },
    ],
  },

  // Cross-referenced against /balcony-gardening/organic-pest-control-balcony-plants
  // ("Mealybugs show up as small white, cottony clusters tucked into leaf
  // joints, along stems... often mistaken for mould at first glance") for
  // the leaf branch, and /indoor-plants/stop-overwatering-indoor-plants
  // ("Hard tap water... leaves a chalky white crust on soil and pot
  // rims") plus the fertilizing article's salt-buildup note for the soil
  // branch. Leaf-vs-soil location is the genuine distinguishing factor
  // here, not edible-vs-ornamental, since mealybugs are the only one of
  // these this site documents in detail.
  whitefuzz: {
    question: "Is it fuzzy/cottony on the leaves or stems, or a crusty/powdery layer on the soil surface?",
    options: [
      {
        label: "Fuzzy or cottony, on leaves/stems",
        next: {
          diagnosis: true,
          title: "Likely mealybugs",
          explanation:
            "Small white, cottony clusters tucked into leaf joints and along stems are mealybugs, often mistaken for mould at first glance. They're slower-moving than aphids but tougher to clear, since their waxy coating resists water and soap sprays. (Growing this to eat? The linked guide's neem-oil dilution is food-safe with a short pre-harvest gap — see the kitchen pest-control guide for exact timing.)",
          ...ARTICLES.pestBalcony,
        },
      },
      {
        label: "Crusty or powdery, on the soil surface",
        next: {
          question: "Have you been feeding/fertilizing fairly regularly?",
          options: [
            {
              label: "Yes, fairly regularly",
              next: {
                diagnosis: true,
                title: "Likely salt buildup from feeding",
                explanation:
                  "A white or crusty buildup on the soil surface is the clearest visual sign of overfeeding. Scrape it off and flush the pot thoroughly with plain water before resuming a lighter feeding schedule.",
                ...ARTICLES.fertilizingSchedule,
              },
            },
            {
              label: "No, not really",
              next: {
                diagnosis: true,
                title: "Likely hard tap water mineral buildup",
                explanation:
                  "Without regular feeding, a chalky white crust on the soil is usually mineral buildup from hard tap water, common across much of urban India. Scrape off the top layer and top up with fresh mix rather than trying to flush it out.",
                ...ARTICLES.overwateringIndoor,
              },
            },
          ],
        },
      },
    ],
  },
};
