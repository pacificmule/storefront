# Pacific Mule — Electric Blue V2

Next.js 15, React 19, TypeScript, Framer Motion, EN/ES locale routing.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000/en or /es. For production, run `npm run build && npm start`.

## Updated in V2

- Electric Blue brand palette; dark-blue hero and contact sections, lighter content sections.
- Real, user-provided WebP website screenshots in `public/projects/`, not AI representations.
- 3 project galleries (147PACIFIC: 3 slides, HECOSVC: 3 slides, Progressive Auto Sports: 5 slides); prev/next buttons and dot navigation.
- Project-specific descriptions in English and Spanish, with links to published sites.
- Rounded buttons, project containers, and service cards.
- Framer Motion FAQ accordion with smooth height changes.
- Animated workflow mockup replacing the abstract PM decoration in Let's Talk.
- Rebuilt footer with stronger typography, navigation, email CTA and language links.
- Scroll reveal, back-to-top, mobile layout, reduced-motion support.
- Metadata and localized canonical/hreflang, sitemap, robots, structured data, llms.txt retained.

## Important launch checklist

- Contact is currently a `mailto:` CTA. Create and verify `hello@pacificmule.com` or replace it with your real inbox; no backend submission.
- Validate case study claims and client permissions; do not imply numerical results not measured.
- Configure GA4 with your measurement ID and any applicable consent controls; it is **not connected**.
- Add privacy/legal details and verify company identity before production.
- Inspect actual layout on phones/tablets, test galleries with keyboard and touch, check browser console.
- Submit sitemap to Search Console after deployment. `llms.txt` and JSON-LD do not guarantee AI-search inclusion.
- Saleor is an e-commerce engine, not a standalone payment gateway.

## Project sources
- https://147pacific.com/en
- https://hecosvc.com/en
- https://storefront-production-5594.up.railway.app/

## Notes

The source archive has no `node_modules` directory. This environment was unable to complete an npm installation/build; run `npm install && npm run build` locally before deployment.
