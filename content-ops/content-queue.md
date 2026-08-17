# Urban Sprout: Content Queue

Tracks the automated publishing backlog. Modeled on `indexing-tracker.md`. Status flow:
`queued` -> `in-progress` -> `published`. The automation reads this file each scheduled run, takes
the next `queued` row for that slot's pillar priority, and always re-checks the live site for an
existing article on the same topic before starting (protects against a stale queue duplicating
something already published another way).

First batch: 12 topics, roughly 4 weeks at 3/week. Populated per the rotation logic in
`content-ops/automation-plan.md` (Site context / Pillar rotation), Indoor Plants and Terrace
prioritized (thinnest pillars), Kitchen close behind, one floating slot/week for Balcony, Plant
Encyclopedia gaps, or seasonal content.

## Slot 1: Indoor Plants / Terrace (alternating, Monday)

| # | Pillar | Working title | Target keyword | Status |
|---|---|---|---|---|
| 1 | Indoor Plants | Fertilizing Indoor Plants: A Simple Schedule for Indian Apartments | indoor plant fertilizer schedule india | published |
| 2 | Terrace Gardening | Setting Up a Terrace Vegetable Garden From Scratch in India | terrace vegetable garden setup india | queued |
| 3 | Indoor Plants | Keeping Indoor Plants Alive Through a Jaipur-Style Summer (40C+) | indoor plants extreme heat india | queued |
| 4 | Terrace Gardening | Drip Irrigation for Terrace Gardens: Is It Worth Setting Up? | drip irrigation terrace garden india | queued |

## Slot 2: Kitchen Gardening (Wednesday)

| # | Pillar | Working title | Target keyword | Status |
|---|---|---|---|---|
| 5 | Kitchen Gardening | Growing Methi, Palak and Patta Gobhi in Containers | growing methi palak containers india | queued |
| 6 | Kitchen Gardening | Companion Planting for a Small Container Kitchen Garden | companion planting vegetables containers india | queued |
| 7 | Kitchen Gardening | Starting Vegetables From Seed at Home: A Beginner's Timeline | starting vegetables from seed india | queued |
| 8 | Kitchen Gardening | Dealing With Aphids and Whitefly on Container Vegetables | aphids whitefly container vegetables organic | queued |

## Slot 3: Floating (Balcony / Plant Encyclopedia / seasonal, Friday)

| # | Pillar | Working title | Target keyword | Status |
|---|---|---|---|---|
| 9 | Balcony Gardening | Grow Lights for Balconies With Poor Sun: Do You Actually Need One? | grow lights balcony plants india | queued |
| 10 | Plant Encyclopedia | Bottle Gourd (Lauki): Growing Profile and Care Guide | lauki bottle gourd growing guide | queued |
| 11 | Balcony Gardening | Monsoon Care for Balcony Gardens: What Changes When the Rains Hit | monsoon balcony garden care india | queued |
| 12 | Plant Encyclopedia | Cauliflower (Phool Gobhi): Growing Profile and Care Guide | phool gobhi cauliflower growing guide | queued |

## Notes

- Rows 10 and 12: verify against the live `/plant-encyclopedia` routes before drafting, in case
either plant already has an entry. Swap to a genuinely missing plant if either already exists.
- Target internal links and candidate affiliate products aren't pre-filled, the automation pulls
those live during research so they reflect what's actually on the site at run time.
- Add the next batch once this one is roughly half-consumed.
