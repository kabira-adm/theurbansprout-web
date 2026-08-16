# Urban Sprout: Automated Publishing Operating Doc

This file lives in the repo (`content-ops/automation-plan.md`) because the GitHub Action that runs
this pipeline only sees what's checked out from this repository, it has no access to the Claude
Project this plan was originally drafted in. This is the self-contained source of truth for every
automated run. Keep it current if site facts change (pillar counts, monetization ID, etc.).

## Site context

- Domain: theurbansprout.in. Gardening content for Indian apartment dwellers (balcony, indoor,
kitchen, terrace gardening, plus a Plant Encyclopedia). Next.js on Railway, auto-deploys from
`main`.
- Five pillars: Balcony Gardening (deepest, ~18 articles), Kitchen Gardening (~5), Indoor Plants
(~4, thinnest), Terrace Gardening (~4, tied thinnest), Plant Encyclopedia (~28 profiles).
**Deepen thin pillars first** (Indoor Plants, Terrace), don't start new pillars.
- Real author material to draw on genuinely, not generically: based in Jaipur, Rajasthan
(semi-arid, extreme summer heat, 40-43°C+). Rooftop vegetable garden (tomatoes, bhindi, lauki,
mirchi, dhaniya, palak, patta gobhi, phool gobhi, eggplant, methi), ground-level garden (papaya,
curry leaf, lemon), balcony (snake plants, tulsi). A shared `AuthorBio` component already
renders this bio at the end of every article, don't duplicate it in-article.

## Non-negotiable style and technical rules

- **No em-dash characters anywhere**, ever. Sitewide rule, zero tolerance.
- **1200-1400 words** per article.
- Sound human: varied sentence length, contractions where natural, concrete specifics over
filler, no AI-cliche phrases ("in today's world," "delve into," "it's important to note,"
"unlock," "elevate").
- Follow the site's existing article template exactly, copy structure from a real existing
article in the same pillar rather than inventing a new format.
- 2-4 contextual internal links to real, existing pages. Verify every target actually exists
before publishing, no linking to a slug that doesn't exist.
- 2-4 relevant affiliate links using Amazon Associates India tracking ID `theurbansprou-21`.
Verify any new ASIN live on amazon.in before treating it as real (fertilizers/soil/pest
consumables from Indian agri-brands like Ugaoo verify well; pots/hardware default to Amazon
search-result links instead, that category doesn't verify reliably). Set the `hasAffiliateLinks`
prop on `ArticleLayout` so the ASCI disclosure renders, this is mandatory whenever affiliate
links are present.
- Full metadata on every article: canonical, openGraph, twitter, matching the sitewide pattern.
- Featured image: a licensed stock photo relevant to the topic.
- **Push directly to `main` once every check below passes. No PR, no review gate.** This was an
explicit, deliberate decision. It also means the automated checks are the entire safety net,
they must actually block a push on failure, never just warn:
  - Word count strictly 1200-1400
    - Zero em-dash characters anywhere in the new file
      - Every internal link target resolves to a real, existing route
        - `hasAffiliateLinks` set correctly and disclosure renders when affiliate links exist
          - Local build/lint passes clean
            - No path collision with an existing route, and no duplicate topic already covered elsewhere

            ## Pillar rotation (3 articles/week)

            - **Slot 1 (Monday):** Indoor Plants or Terrace Gardening, alternating week to week
            - **Slot 2 (Wednesday):** Kitchen Gardening (fall back to Indoor Plants/Terrace if its queue is
            empty)
            - **Slot 3 (Friday):** floating, Balcony Gardening deep-dive, Plant Encyclopedia gap-fill, or
            seasonal/Jaipur-specific content, whichever `content-queue.md` has queued next

            ## Per-run pipeline

            1. Read this file and `content-ops/content-queue.md` (already checked out in the working
            directory).
            2. Pick the next `queued` row for this run's slot/pillar, mark it `in-progress`.
            3. Before drafting, check the live repo for an existing article on the same topic. If one exists,
            skip to the next queued row for this slot and note the skip.
            4. Research current, accurate specifics via web search. Weave in real Jaipur-specific detail
            wherever genuinely relevant, not generic filler.
            5. Draft the article (1200-1400 words), internal links, affiliate links, ASCI disclosure, full
            metadata, following the existing template structure exactly.
            6. Run every check listed above. Fix and recheck on any failure. Never commit or push a failing
            draft.
            7. Commit and push directly to `main`.
            8. Update `content-ops/content-queue.md` (mark the row `published`) and commit that too.
            9. Report a clear summary in the run log: title, path, word count, pillar, internal/affiliate
            links used, and confirmation of a successful push, or a precise explanation of what blocked
            the run.

            ## Affiliate product research

            Automation may verify and add new products to future use itself: a candidate product gets checked
            live on amazon.in during the run (real ASIN, live page) before being used, matching the existing
            standard. No manual sign-off required per product.
            
