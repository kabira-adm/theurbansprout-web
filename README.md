# Urban Sprout — fresh site (Next.js)

A brand-new build, independent of the live WordPress site at theurbansprout.in.
Nothing here touches or depends on the old site.

## What's included
- Homepage (`/`)
- About (`/about`)
- Balcony Gardening hub (`/balcony-gardening`) — the first content pillar

Built with Next.js (App Router) + Tailwind CSS. No backend yet — the
newsletter form on the homepage is a visual placeholder only.

## Run it locally
Requires Node.js 18+.

```
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy
Easiest path is Vercel (same company as Next.js, free tier available):
1. Push this folder to a GitHub repo
2. Import the repo at vercel.com
3. Deploy — no config needed

## Next steps (see the Q3 roadmap doc)
- Write the first 8 Balcony Gardening articles (listed as "Soon" on the hub page)
- Wire up the newsletter form
- Add Indoor Plants and Kitchen Gardening hubs
- Decide when/how to cut the live domain over to this site (to protect existing SEO)
