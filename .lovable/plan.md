
# Plan — Complete the CJP-Style Brutalist Site

Approach: keep the existing brutalist design system (paper/ink/gold tokens, Space Grotesk + serif italic, sharp borders, marquees) and the pages already built (Home, Manifesto, Articles, Article detail, Join, Disclaimer, Contact). Audit and polish those, then add every missing page using **original satirical copy** in the same tone (no verbatim reproduction of the source site).

## 1. Audit & polish existing UI
- Verify routing in `src/App.tsx`; add all new routes + ensure `SiteHeader` and `SiteFooter` wrap every page.
- Header: add full nav (Vision, Manifesto, Articles, Gallery, Members, Issues, Tracker, Contact), language chip, "Join the Party" + "Raise an Issue" buttons, mobile hamburger drawer.
- Top marquee + bottom "live joining" member ticker present on every page (extracted into layout).
- Footer: expand to 4 columns (The Party / Topics / Get Involved / Legal) with full link map, dispatch newsletter form, social row, "A work of satire" strip.
- Tighten Hero, Manifesto, Faq, Eligibility spacing/typography; ensure all pages share the same `SectionLabel` rhythm.

## 2. New pages (all with original copy)
Each page = `src/pages/<Name>.tsx` + SEO + brutalist layout.

- **Gallery** (`/gallery`) — 12 vintage-propaganda poster cards in a 3-col bordered grid, filter chips (Rally / Manifesto / Membership / Poster / Heritage / Symbol). Posters generated via imagegen (greyscale + muted red/gold), saved as Lovable assets.
- **Members** (`/members`) — intro block + bordered grid of ~12 satirical member cards (initials avatar, name, city, why-they-joined, REQ id, join date), "Become #21564" CTA card.
- **Voice / Issues** (`/voice`) — three-column layout (HOT / feed / TOP + NEW), category filter chips, sort tabs (Top/Hot/New), bordered issue cards with severity tag (1/10–10/10), upvote/downvote/share, location, author chip. Static seed of 12 fictional issues. Pagination stub.
- **Raise Issue** (`/voice/raise`) — brutalist form: title, category, severity slider, location, description, anonymous toggle, submit (stores to localStorage, prepends to feed).
- **Tracker** (`/cockroach-tracker`) — header stats (total members, on map, top state, latest join), India SVG heatmap (inline simplified SVG with state shading by seeded counts), live joins side panel, "Top cities" 4×3 bordered grid.
- **Quotes** (`/quotes`) — 2-col bordered grid of ~7 satirical quote cards, intro line.
- **Memes** (`/meme`) — masonry-ish bordered grid of meme cards (placeholder ASCII/typographic memes since we won't generate real ones), share/download buttons.
- **News** (`/news`) — editorial list of press mentions (date · outlet · headline · excerpt · READ →) with original blurbs.
- **Press** (`/press`) — press contact, downloadable assets block, boilerplate, founder bios placeholder, logos strip.
- **Card** (`/card`) — membership card generator: name + city + REQ id input → renders printable brutalist member card preview with download-as-PNG (html2canvas).
- **Privacy** (`/privacy`) — short + long version, original wording.
- **Terms** (`/terms`) — original wording.
- **Vision** (`/vision`) — pull existing Vision block into standalone page with extended manifesto-philosophy copy.

## 3. Shared components (new under `src/components/cjp/`)
- `SiteLayout.tsx` — wraps TopMarquee + LiveMemberTicker + SiteHeader + `<Outlet/>` + SiteFooter.
- `IssueCard.tsx`, `MemberCard.tsx`, `PosterCard.tsx`, `QuoteCard.tsx`, `NewsCard.tsx`, `MembershipCard.tsx`, `IndiaHeatmap.tsx`, `CategoryChips.tsx`.

## 4. Data seeds (`src/data/`)
- `issues.ts`, `members.ts`, `posters.ts`, `quotes.ts`, `news.ts`, `states.ts` — all fictional, satirical, original.

## 5. Assets
- Generate 12 vintage poster images via imagegen (greyscale + accent), upload via lovable-assets, reference in `posters.ts`.

## 6. SEO / sitemap
- Update `scripts/generate-sitemap.ts` with new routes; per-page `<SEO>` titles + descriptions; JSON-LD on article + organization.

## Technical notes
- Stack stays React + Vite + Tailwind + react-router. No backend needed; "submit" actions persist to localStorage.
- India heatmap: hand-rolled simplified SVG of states (not a real geo dataset) — fits brutalist aesthetic and avoids heavy map libs.
- Membership card download: add `html-to-image` (lighter than html2canvas).
- Strict tokens: `bg-paper`, `bg-ink`, `text-gold`, `font-display`, `font-condensed`, `font-italic-serif` — no raw hex in components.

## Out of scope
- Real auth / database / payments.
- Verbatim copy from the reference site (using original satirical copy in the same register).
- Real India geo map with district-level accuracy.

Approve to proceed and I'll build it.
