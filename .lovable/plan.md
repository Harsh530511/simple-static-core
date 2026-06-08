# Plan: Admin CMS, Google Auth, Events Page, SEO Tags

## 1. Enable Lovable Cloud
Provisions Postgres + Auth + Storage. Required for Google sign-in, role-based admin, and CMS persistence.

## 2. Database schema (migration)
Tables, all with RLS:
- `profiles` (id → auth.users, full_name, avatar_url, email)
- `user_roles` (user_id, role enum: `admin` | `user`) + `has_role()` security-definer fn
- `articles` (slug, title, excerpt, body[], date, read_time, published)
- `events` (slug, title, location, date, time_range, theme, body[], cover_image, published)
- `quotes` (text, author, published)
- `news` (title, source, url, published_at, summary, published)
- `contact_messages` (name, email, message, created_at — public insert, admin read)

Trigger `handle_new_user`: on signup creates a profile row. **If the new user is the first user in the system**, also inserts an `admin` role into `user_roles`; otherwise `user`. This implements "first Google sign-in = admin".

RLS:
- Public SELECT on `published = true` rows for articles/events/quotes/news
- Admin (via `has_role(auth.uid(),'admin')`) gets full CRUD
- `contact_messages`: anyone INSERT, admin SELECT
- `profiles`: user reads/updates own, admin reads all
- `user_roles`: user reads own, admin manages

## 3. Auth flow
- `/auth` page: "Sign in with Google" button (`supabase.auth.signInWithOAuth({provider:'google', options:{redirectTo: window.location.origin + '/admin'}})`)
- `AuthProvider` context: tracks session via `onAuthStateChange`, exposes `user`, `isAdmin` (queries `user_roles`), `signOut`
- `<ProtectedRoute requireAdmin>` wrapper: redirects to `/auth` if no session, to `/` if not admin

## 4. Admin pages (under `/admin/*`, all guarded)
- `/admin` — dashboard with counts + nav cards
- `/admin/articles` — list + create/edit/delete (slug, title, body as textarea split on blank lines, published toggle)
- `/admin/events` — same shape for events
- `/admin/quotes` — short-form CRUD
- `/admin/news` — CRUD
- `/admin/contacts` — read-only inbox of contact submissions
Shared `AdminLayout` with sidebar.

## 5. Public Events page
- `/protests` route — lists published events from DB. Seed migration inserts the **6 June Delhi event**:
  - Title: "6 June · Delhi · The Cockroach March"
  - Location: Jantar Mantar, New Delhi
  - Time: 10:00 AM – 5:00 PM
  - Theme: Political dissent — youth mobilization against NEET/CBSE exam irregularities
  - Body: founder Abhijeet Dipke leads Gen-Z on-ground mobilization demanding accountability and resignation of the Union Education Minister; peaceful demonstrators in cockroach attire
- `/protests/:slug` detail page with SEO meta
- Add "PROTESTS" link to `SiteHeader` nav

## 6. Public pages read from DB
`Articles`, `ArticleDetail`, `Quotes`, `News` switch from static arrays to Supabase queries (filter `published = true`). Static `src/data/articles.ts` becomes seed-only (migration seeds the existing 5 articles + 2 sample quotes/news).

## 7. SEO & sitemap
- Add `<meta name="google-site-verification" content="8wjHZ5KMwGy83SecjRZTwkmAnWev3BBk_iSfzuRh_LE" />` to `index.html`
- Rewrite `scripts/generate-sitemap.ts` to **fetch published rows from Supabase** at predev/prebuild time using `VITE_SUPABASE_URL` + anon key, so new articles/events appear in `sitemap.xml` automatically without manual edits
- Sitemap covers: all static routes + `/articles/:slug` for every published article + `/protests/:slug` for every published event. Excludes `/admin/*` and `/auth`
- `BASE_URL = https://thecockroachjantaparty.lovable.app`
- `robots.txt` adds `Disallow: /admin/` and `Disallow: /auth`

## 8. Files touched
**Created**: `src/contexts/AuthContext.tsx`, `src/components/ProtectedRoute.tsx`, `src/components/admin/AdminLayout.tsx`, `src/pages/Auth.tsx`, `src/pages/Protests.tsx`, `src/pages/ProtestDetail.tsx`, `src/pages/admin/{Dashboard,AdminArticles,AdminEvents,AdminQuotes,AdminNews,AdminContacts}.tsx`, migration file.
**Modified**: `index.html`, `src/App.tsx`, `src/main.tsx`, `src/components/cjp/SiteHeader.tsx`, `src/pages/{Articles,ArticleDetail,Quotes,News,Contact}.tsx`, `scripts/generate-sitemap.ts`, `public/robots.txt`, `package.json`.

## Notes
- Google provider in Lovable Cloud is managed — no client ID needed from you.
- Admin promotion: first Google sign-in claims admin. Future users default to `user` role; you can promote by editing `user_roles` in DB.
- Contact form will switch to inserting into `contact_messages` so admins can review submissions.