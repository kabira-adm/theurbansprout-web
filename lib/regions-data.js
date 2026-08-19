// Region and location reference data for the Seasonal Planting Calendar
// (app/tools/seasonal-calendar/page.js, components/SeasonalCalendar.js).
// Standalone on purpose: this file doesn't import lib/plants-data.js or
// anything else. It only describes "where is this place, climate-wise",
// nothing about what to plant there. The combining logic that matches a
// region to actual plants lives in lib/seasonal-calendar-helpers.js.
//
// RESEARCH BASIS: India's home-gardening calendar runs on three seasons,
// not four - Kharif (monsoon), Rabi (winter), and Zaid (summer) - and the
// exact sow/harvest windows for each shift by region. The five regions
// below are deliberately more granular than a single "West India" bucket,
// which would wrongly lump Rajasthan's dry heat in with Mumbai's humid
// coast. Season windows for each region are derived from that same
// three-season framework, adjusted per region using the specific,
// research-backed deviations noted in each region's comment (e.g. South
// India's ~month-earlier Rabi start, North India's colder, later Rabi
// sowing). Where a region has no noted deviation, it uses the general
// national window as given.
//
// TO ADD A CITY: add a "City Name": "regionId" entry to CITY_TO_REGION
// below. regionId must be one of the five keys in REGIONS. Match casing
// isn't required at lookup time (lib/seasonal-calendar-helpers.js
// normalizes to lowercase), but keep entries here Title Case for
// readability.
//
// TO ADD OR FIX A STATE MAPPING: STATE_TO_REGION covers all 28 states and
// 8 union territories, so it should never need a new key, only a
// corrected regionId if a state was placed in a better-fitting region.
// This is the fallback used when a visitor's city isn't in
// CITY_TO_REGION, so it must stay exhaustive.

// Month numbers throughout this file are 1-12 (January = 1), matching
// how a human reads a calendar, not JavaScript's 0-11 Date convention.
// lib/seasonal-calendar-helpers.js converts at the boundary.
export const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const REGIONS = {
  north: {
    id: "north",
    name: "North India",
    shortLabel: "North",
    example: "Delhi NCR, Punjab, Haryana, Uttar Pradesh, Bihar",
    description:
      "Harsh winters with real frost risk for tender plants, and hot, dry summers. The narrowest planting windows of the five regions, since both extremes cut into the growing calendar from opposite ends.",
    seasons: {
      // General national windows: sow Jun-Jul, harvest Sep-Oct.
      kharif: { sowMonths: [6, 7], harvestMonths: [9, 10], label: "Kharif (Monsoon)" },
      // Colder-region deviation, stated directly in the research brief:
      // North India's winter sowing runs Nov-Jan, later than the general
      // Oct-Jan window, since the ground is still warm from summer in
      // early October this far from the coast.
      rabi: { sowMonths: [11, 12, 1], harvestMonths: [2, 3], label: "Rabi (Winter)" },
      // Research brief: summer sowing March-April specifically for North
      // India, a shorter window than the general Mar-Jun since peak
      // North Indian summer heat (May-June) is too harsh to sow into.
      zaid: { sowMonths: [3, 4], harvestMonths: [5, 6], label: "Zaid (Summer)" },
    },
  },
  west: {
    id: "west",
    name: "West / Semi-arid",
    shortLabel: "West",
    example: "Jaipur, Jodhpur, Udaipur, Ahmedabad, Surat, Rajasthan, Gujarat interior",
    description:
      "Dry heat and low rainfall define this region more than temperature swings do. Drought-tolerant plant choices and heavy mulching aren't optional extras here, they're the difference between a pot surviving the season or not.",
    seasons: {
      kharif: { sowMonths: [6, 7], harvestMonths: [9, 10], label: "Kharif (Monsoon)" },
      // General Oct-Jan window; no region-specific deviation noted in the
      // research for this region, so kept at the standard window.
      rabi: { sowMonths: [10, 11, 12], harvestMonths: [2, 3], label: "Rabi (Winter)" },
      zaid: { sowMonths: [3, 4, 5], harvestMonths: [6], label: "Zaid (Summer)" },
    },
  },
  south: {
    id: "south",
    name: "South & West Coast",
    shortLabel: "South",
    example: "Bangalore, Chennai, Hyderabad, Kochi, Mumbai, Pune, Goa",
    description:
      "A more stable, humid tropical climate with far less extreme seasonal swings than the plains further north. That stability is what allows winter crops to start about a month earlier here, and permits more staggered, near-continuous planting through the year.",
    seasons: {
      kharif: { sowMonths: [6, 7], harvestMonths: [9, 10], label: "Kharif (Monsoon)" },
      // Research brief: can start winter crops about a month earlier
      // (September) than North India. Shifted the whole Rabi window back
      // one month accordingly: Sep-Dec instead of the general Oct-Jan.
      rabi: { sowMonths: [9, 10, 11, 12], harvestMonths: [1, 2], label: "Rabi (Winter)" },
      // Milder, more stable heat than the North/West plains allows a
      // longer Zaid sowing window rather than a hard March-June cutoff.
      zaid: { sowMonths: [3, 4, 5, 6], harvestMonths: [7], label: "Zaid (Summer)" },
    },
  },
  east: {
    id: "east",
    name: "East India",
    shortLabel: "East",
    example: "Kolkata, West Bengal, Assam, Guwahati, Bhubaneswar",
    description:
      "Heavy monsoon rainfall is the defining factor here, more than heat or cold. Drainage is the priority that matters most specifically in this region: raised beds or pots over ground beds, and plant choices that tolerate sustained humidity without rotting.",
    seasons: {
      kharif: { sowMonths: [6, 7], harvestMonths: [9, 10], label: "Kharif (Monsoon)" },
      rabi: { sowMonths: [10, 11, 12, 1], harvestMonths: [2, 3], label: "Rabi (Winter)" },
      zaid: { sowMonths: [3, 4, 5], harvestMonths: [6], label: "Zaid (Summer)" },
    },
  },
  himalayan: {
    id: "himalayan",
    name: "Himalayan / Hill",
    shortLabel: "Hill",
    example: "Himachal Pradesh, Uttarakhand hills, Darjeeling, North-East hill states",
    description:
      "A genuinely temperate climate with real frost and snow through winter, on a distinctly different calendar from the four plains regions above. Kept simpler here on purpose: the plains' Kharif/Rabi/Zaid framework doesn't map cleanly onto a hill climate, and padding it out with a false level of precision would be less honest than a shorter, plainer answer.",
    // Deliberately one practical window rather than three, per the note
    // above. Most annual sowing happens once the last frost clears in
    // spring and stops well before the first autumn frost; the winter
    // months are a dormant, frost-affected stretch rather than a second
    // sowing season the way Rabi is on the plains.
    seasons: {
      growing: {
        sowMonths: [3, 4, 5, 6],
        harvestMonths: [8, 9, 10],
        label: "Spring-summer growing season",
      },
    },
  },
};

// Required by the task brief to resolve correctly, plus additional major
// cities added by geographic judgment for reasonable coverage beyond the
// minimum list. Keys are matched case-insensitively by
// lib/seasonal-calendar-helpers.js.
export const CITY_TO_REGION = {
  // North
  "Delhi": "north",
  "New Delhi": "north",
  "Gurugram": "north",
  "Gurgaon": "north",
  "Noida": "north",
  "Faridabad": "north",
  "Ghaziabad": "north",
  "Lucknow": "north",
  "Kanpur": "north",
  "Chandigarh": "north",
  "Amritsar": "north",
  "Ludhiana": "north",
  "Varanasi": "north",
  "Agra": "north",
  "Patna": "north",
  "Bhopal": "north",
  "Indore": "north",

  // West / Semi-arid
  "Jaipur": "west",
  "Jodhpur": "west",
  "Udaipur": "west",
  "Ahmedabad": "west",
  "Surat": "west",
  "Vadodara": "west",
  "Rajkot": "west",
  "Bikaner": "west",
  "Ajmer": "west",

  // South & West Coast
  "Bangalore": "south",
  "Bengaluru": "south",
  "Chennai": "south",
  "Hyderabad": "south",
  "Kochi": "south",
  "Cochin": "south",
  "Coimbatore": "south",
  "Mysore": "south",
  "Mysuru": "south",
  "Thiruvananthapuram": "south",
  "Trivandrum": "south",
  "Madurai": "south",
  "Mumbai": "south",
  "Pune": "south",
  "Goa": "south",
  "Panaji": "south",
  "Nagpur": "south",
  "Visakhapatnam": "south",
  "Vijayawada": "south",
  "Puducherry": "south",
  "Pondicherry": "south",

  // East
  "Kolkata": "east",
  "Guwahati": "east",
  "Bhubaneswar": "east",
  "Ranchi": "east",
  "Raipur": "east",

  // Himalayan / Hill
  "Shimla": "himalayan",
  "Dehradun": "himalayan",
  "Darjeeling": "himalayan",
  "Manali": "himalayan",
  "Srinagar": "himalayan",
  "Jammu": "himalayan",
  "Gangtok": "himalayan",
  "Shillong": "himalayan",
  "Imphal": "himalayan",
};

// Fallback when a visitor's city isn't in CITY_TO_REGION above. Finite
// and completeable, unlike cities, so this covers all 28 states and 8
// union territories. Some assignments are genuine judgment calls where a
// state doesn't cleanly fit any one of the five regional descriptions
// (central India especially); see the inline notes on those.
export const STATE_TO_REGION = {
  // North
  "Delhi": "north",
  "Haryana": "north",
  "Punjab": "north",
  "Uttar Pradesh": "north",
  "Bihar": "north",
  "Chandigarh": "north",
  // Judgment call: Madhya Pradesh doesn't match any region description
  // exactly (not as dry as Rajasthan, not coastal, not East's heavy
  // monsoon, not Himalayan). Grouped with North for its continental
  // climate and real, if milder, winter, consistent with how India's
  // Kharif/Rabi agricultural calendar generally treats it alongside the
  // northern plains states.
  "Madhya Pradesh": "north",

  // West / Semi-arid
  "Rajasthan": "west",
  "Gujarat": "west",

  // South & West Coast
  "Karnataka": "south",
  "Tamil Nadu": "south",
  "Telangana": "south",
  "Andhra Pradesh": "south",
  "Kerala": "south",
  "Maharashtra": "south",
  "Goa": "south",
  "Puducherry": "south",
  "Andaman and Nicobar Islands": "south",
  "Lakshadweep": "south",
  "Dadra and Nagar Haveli and Daman and Diu": "south",

  // East
  "West Bengal": "east",
  "Assam": "east",
  "Odisha": "east",
  "Jharkhand": "east",
  // Judgment call: Chhattisgarh isn't explicitly covered by any region
  // description. Grouped with East for its heavy monsoon rainfall and
  // milder winter, closer to Odisha/Jharkhand's climate than to North
  // India's frost-affected plains.
  "Chhattisgarh": "east",
  // Judgment call: Tripura is hilly but at lower elevation than the
  // other North-Eastern hill states below, and climatically sits closer
  // to the Bengal plains than to a genuinely Himalayan climate.
  "Tripura": "east",

  // Himalayan / Hill
  "Himachal Pradesh": "himalayan",
  "Uttarakhand": "himalayan",
  "Sikkim": "himalayan",
  "Arunachal Pradesh": "himalayan",
  "Meghalaya": "himalayan",
  "Nagaland": "himalayan",
  "Manipur": "himalayan",
  "Mizoram": "himalayan",
  // Judgment call: J&K spans a warmer Jammu plain and a temperate
  // Kashmir valley; grouped as Himalayan since Srinagar, its largest
  // city and summer capital, is genuinely temperate with winter snow.
  "Jammu and Kashmir": "himalayan",
  "Ladakh": "himalayan",
};
