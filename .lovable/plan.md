
# The Cockroach Janta Party — Brutalist Clone

Replace the existing DriveEasy project with a single-page brutalist editorial clone of thecockroachjantaparty.org.in.

## Design System

- **Colors**: `#F9F9F9` background, `#111111` text/borders, muted political red `#C8341E` accent.
- **Typography**: Space Grotesk (display, 800/900) + Inter (body, 400/500). Tight tracking on large headings.
- **Borders**: `1px solid #111` everywhere — sections, cards, inputs, buttons. No border-radius. No soft shadows.
- **Spacing**: Aggressive padding inside bordered blocks. CSS Grid wireframe layout.

All tokens go into `src/index.css` (HSL) + `tailwind.config.ts`.

## File Changes

**Delete**: existing DriveEasy components (`HeroSection`, `CarCard`, `BookingModal`, `HowItWorks`, `Navbar`, `Footer`, `NavLink`), `src/data/cars.ts`, `src/App.css`.

**Create** under `src/components/cjp/`:
- `Marquee.tsx` — pure CSS infinite scroll, reusable with `items` + `variant` (top / breaking).
- `TopBar.tsx` — top marquee.
- `Hero.tsx` — massive title, Hindi subtitle, nav row, two CTAs, live members side panel.
- `Swarm.tsx` — full-width placeholder crowd image, "Voice of the Burnt-Out Youth", 4-stat block.
- `BreakingTicker.tsx` — second marquee variant.
- `Vision.tsx` — two-column Vision / Mission.
- `Manifesto.tsx` — 5 demands in numbered bordered grid + explainer link.
- `Faq.tsx` — accordion with +/− toggle, sharp borders.
- `Journal.tsx` — 3 editorial article cards (date · read time · title · excerpt · READ →).
- `Eligibility.tsx` — 4-item checklist + big JOIN CTA.
- `Footer.tsx` — Dispatch newsletter form, contact columns, satire warning.

**Rewrite**:
- `src/pages/Index.tsx` — compose the above in order.
- `src/index.css` — new tokens, fonts, marquee keyframes.
- `tailwind.config.ts` — font families, accent color, marquee animation.
- `index.html` — title "The Cockroach Janta Party", matching meta description.

## Technical Details

- Marquee: duplicate items twice in a flex row, animate `translateX(-50%)` linear infinite (~30s). No JS.
- Responsive: grids collapse to single column on mobile; black borders preserved between stacked blocks.
- Placeholder images: generate one greyscale crowd image via imagegen for the Swarm section; use CSS placeholders elsewhere.
- Live Members panel: static seeded list (~12 satirical names with cities) styled as a vertical bordered ticker.
- All copy verbatim from the prompt where given; satirical fillers used where missing.
- Tailwind semantic tokens only — no raw hex in components.

Approve to proceed.
