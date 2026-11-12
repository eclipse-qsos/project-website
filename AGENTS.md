# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this is

The landing page for **Eclipse QSOS** (Qualification and Selection of Open Source Software), an Eclipse Foundation project (`technology.qsos`). It is a single-page marketing/explainer site built with **Nuxt 4** (Vue 3, TypeScript, `<script setup>`). Upstream: `github.com/eclipse-qsos/project-website`.

There is no backend, no API, no CMS. All copy lives in the i18n JSON files. The only server code is a few Nitro routes in `server/` that `npm run generate` prerenders into static files (see SEO below).

## Commands

```bash
npm ci             # install from package-lock.json; postinstall runs `nuxt prepare` (generates .nuxt/)
npm run dev        # dev server on http://localhost:3000 (/ and /fr)
npm run build      # Node server build into .output/ (run with `node .output/server/index.mjs`)
npm run generate   # static site into .output/public/, prerenders / and /fr, sitemap.xml and llms*.txt
npm run preview    # serve the last build on http://localhost:3000
```

Prefer `npm ci` over `npm install` so the lockfile isn't rewritten. There are no lint, format, typecheck or test scripts and no CI config in the repo. `npm run build` is the practical check that a change compiles.

## Layout

```
nuxt.config.ts            modules, i18n, global CSS, component auto-import, <head>, siteUrl, prerendered routes
app/
  app.vue                 <NuxtLayout><NuxtPage/></NuxtLayout>; per-locale <head>: title, meta, Open Graph, JSON-LD
  layouts/default.vue     Header + <main> + Footer
  pages/index.vue         the only page: stacks the section components in order
  components/
    Header.vue, Footer.vue, MobileMenu.vue,
    LanguageSwitcher.vue, ThemeSwitcher.vue, RadarWatermark.vue
    sections/             one component per landing-page section
    ui/                   Button, Badge, Card primitives
  composables/useTheme.ts light/dark theme state
  assets/styles/          main.css (entry), tokens.css, components/header.css
  assets/images/          logo-qsos-legacy.png (Header.vue), eclipse-foundation-logo*.svg (Footer.vue);
                          logo-qsos.png and logo-qsos-white.png are unused
i18n/locales/             en.json, fr.json
server/
  routes/                 sitemap.xml, llms.txt, llms-full.txt, fr/llms-full.txt (built from the locale files)
  utils/                  site.ts (absolute page URLs), llms.ts (Markdown version of the page)
public/                   favicons, icon-192/512.png, site.webmanifest, robots.txt
```

Page order in `pages/index.vue`: Hero → Method → MaturityCriteria → ValueProposition → WhyOpen → Roadmap → CTA.

## Key conventions

### Components
- Auto-imported with `pathPrefix: false`, so `components/ui/Button.vue` is used as `<Button>` and `components/sections/HeroSection.vue` as `<HeroSection>`. Component names must stay unique across subfolders.
- Vue/Nuxt APIs (`ref`, `computed`, `useI18n`, `useState`, …) are auto-imported. Don't add explicit imports for them (`LanguageSwitcher.vue` imports `useI18n` from `vue-i18n`, which is the exception, not the pattern).
- Styles are `<style scoped>` inside each component, except the header, whose styles live in `assets/styles/components/header.css` (imported globally from `main.css`; it also styles `MobileMenu`, `LanguageSwitcher` and `ThemeSwitcher`).
- `Button` renders an `<a>` when `href` is set, otherwise a `<button>`. Variants: `primary | secondary | outline | ghost | brand`; sizes `sm | md | lg`.
- `Card` variants: `step` (coloured top bar and title, used by MethodSection), `criteria` (bullet topics, used by MaturityCriteriaSection), `value` (used by ValuePropositionSection).
- Icons use `@nuxt/icon` with the Lucide set: `<Icon name="lucide:moon" />`.

### Copy and i18n
- **Never hard-code user-facing text.** Add a key to **both** `i18n/locales/en.json` and `fr.json` (they currently have identical key sets; keep it that way).
- Templates use `$t('key')`. In `<script setup>`, sections build their content arrays inside `computed(() => [...])` using `t()` so they react to locale changes.
- Arrays in locale files (e.g. `maturity.criteria.*.topics`) are read with `tm()` and mapped through `rt()`; see `MaturityCriteriaSection.vue`.
- For links inside translated text, put a `{placeholder}` in the locale string and fill it with `<i18n-t keypath="…" tag="p" scope="global">` and a named slot holding the `<a>`. That keeps markup out of the JSON; see `Footer.vue`.
- Config: default locale `en`, strategy `prefix_except_default` (French lives under `/fr`), browser-language detection with the `i18n_redirected` cookie, redirect on root only.

### Styling and theming
- All design values are CSS custom properties in `assets/styles/tokens.css`: colours (OKLCH), spacing (`--spacing-xs` … `--spacing-7xl`), font sizes, weights, line heights, radii, shadows, layout widths. Use the tokens instead of raw values.
- Dark mode = the `.dark` class on `<html>`; `:root.dark` in `tokens.css` overrides the colour tokens. When you add a colour token, define it in both blocks. Dark tokens were tuned for WCAG 2.1 AA contrast, so check contrast when you change them.
- `useTheme()` holds the theme in `useState('theme')`, persists it to `localStorage.theme`, and is initialised in `ThemeSwitcher`'s `onMounted`. The theme is applied client-side only, so a dark-mode user sees the light theme briefly on load.
- Font: Noto Sans from Google Fonts (`@import` in `main.css`).
- Breakpoints used throughout: `1024px`, `768px`, `480px` (max-width media queries). One-offs: `1280px`, `900px`, and a `min-width: 1025px` desktop grid in the Footer.
- Method step colours: `--color-define/evaluate/qualify/select`. Radar watermark colours: `--color-software1/2`, `--watermark-*`.

### SEO
- **Head:** `app.vue` sets the `<title>`, description, Open Graph and Twitter tags from the `meta.*` locale keys, merges the canonical/`hreflang`/`og:locale` tags from `useLocaleHead()`, and adds a JSON-LD `@graph` (`WebSite` + `Organization`). The `title`/`description` in `nuxt.config.ts` are fallbacks only. `og:image` is `icon-512.png` (square, hence `twitter:card: summary`) until a 1200×630 image exists.
- **Absolute URLs** come from the `siteUrl` constant in `nuxt.config.ts` (also `i18n.baseUrl` and `runtimeConfig.public.siteUrl`) plus `app.baseURL`. Change the domain there only.
- **Headings:** one `<h1>` (hero), one `<h2>` per section, `<h3>` for cards and roadmap phases; don't skip levels. The hero's "at a glance" `<h2>` uses the global `.visually-hidden` class (`main.css`). Use it only for headings that structure real content, not to add hidden keywords.
- **Generated files:** `server/routes/` builds `sitemap.xml` (both locales with `xhtml:link` alternates), `llms.txt` ([llmstxt.org](https://llmstxt.org/) summary) and `llms-full.txt` / `fr/llms-full.txt` (the whole page in Markdown, via `buildFullText()` in `server/utils/llms.ts`). They read the locale JSON, so copy changes flow through. When you add or reorder a section, update `buildFullText()` too. Labels used only there live under the `llms.*` locale keys. Each route must be listed in `nitro.prerender.routes`, since nothing links to it.
- **`theme-color`** metas in `nuxt.config.ts` are hex copies of `--surface` (light/dark); update them if that token changes.
- Images need `width`/`height` attributes (intrinsic size) to avoid layout shift; CSS still sets the displayed size.

### In-page navigation
- Section anchors: `#method`, `#maturity`, `#value`, `#why`, `#roadmap` (`#value` is not in the nav; Hero and CTA have no id). Header and MobileMenu links call a `scrollToSection()` helper that offsets by 80px (`--header-height`) for the sticky header. That helper is duplicated in `Header.vue` and `MobileMenu.vue`, so change both if you touch it.
- If you add or rename a section id, update both nav menus and the `header.nav.*` locale keys.

### Eclipse branding
Eclipse QSOS is an incubating Eclipse project, so the site must follow the [Project Handbook's website branding rules](https://www.eclipse.org/projects/handbook/#trademarks-website) and the [Trademark Usage Policy](https://www.eclipse.org/legal/logo-guidelines/).
- **Names:** the first reference on each page (especially the page title or header) uses the formal name with the trademark symbol, `Eclipse QSOS™`. Other prominent references use `Eclipse QSOS`, and later ones may use `QSOS`.
- **Footer:** `Footer.vue` must keep the following.
  - An approved Eclipse logo, linked to eclipse.org. The `eclipse-foundation-logo*.svg` files are byte-identical copies from the [artwork page](https://www.eclipse.org/org/artwork/), and the policy forbids altering them.
  - The five required links: eclipse.org, Privacy Policy, Terms of Use, Compliance and Legal Resources.
  - The copyright notice ("Copyright © Contributors to the Eclipse Foundation").
  - The attribution sentence "… are trademarks of Eclipse Foundation AISBL".
- **Still to do:** incubation branding (the official incubation logo in prominent places).

### Licensing
- Everything in this repository, code and content (including the locale files), is Apache-2.0 only (`LICENCE`). The "CC BY-SA 4.0" mentions in the footer and hero describe the licenses of the QSOS method artefacts maintained elsewhere, not this website.
- New source files (`.vue`, `.ts`, `.css`) start with the Eclipse Foundation Apache-2.0 SPDX header. Copy it from any existing component (an HTML comment in `.vue`, a block comment in `.ts`/`.css`). `app.vue`, `layouts/default.vue`, `RadarWatermark.vue` and `nuxt.config.ts` don't have it yet.

### Commits
Messages follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<optional scope>): <short imperative summary, lowercase> (#<issue>)

<optional body: why the change was needed, wrapped at ~72 characters>

Fixes #<issue>
Assisted-by: <Provider>
Signed-off-by: Full Name <email@example.org>
```

- **Types:** `feat`, `fix`, `refactor`, `chore` or `docs`.
- **Scope:** optional. Name the area touched, e.g. `fix(i18n): …`, `feat(theme): …`, `feat(footer): …`.
- **Summary:** imperative mood, no trailing period, no space before the colon. Put the issue number in parentheses at the end when there is one, e.g. `feat: add CTA section (#10)`.
- **Body:** usually omitted for small changes. For non-trivial fixes, explain the cause and the approach, as in `fix(i18n): redirect to detected locale before render (#43)`, and close the issue with `Fixes #N`.
- **Sign-off:** every commit needs a `Signed-off-by:` trailer, as part of the Eclipse contributor process. Add it with `git commit -s`. The email must match the author's Eclipse account, which must have a signed Eclipse Contributor Agreement (ECA).
- **AI disclosure:** if an AI assistant contributed, add an `Assisted-by:` trailer, as recommended by the [Eclipse Project Handbook](https://www.eclipse.org/projects/handbook/#genai-assisted-by), with the provider only, e.g. `Assisted-by: GitHub Copilot`. Use it instead of `Co-Authored-By:`. Contributions must also follow [AI_POLICY.md](AI_POLICY.md) (Human Voice): issues, comments and PR descriptions are written by the human contributor, who must understand everything they submit. See [CONTRIBUTING.md](CONTRIBUTING.md).
- **Merging:** changes land on `main` through GitHub pull requests. Commit only when asked, never directly on `main`.

## Gotchas and known quirks

- `public/robots.txt` hard-codes `Sitemap: https://qsos.org/sitemap.xml`. It doesn't follow `siteUrl` or `NUXT_APP_BASE_URL`, and crawlers only read `robots.txt` at the domain root anyway, so update it by hand if the site moves.
- No `@iconify-json/lucide` package is installed, so `<Icon name="lucide:...">` icons are fetched at runtime from `api.iconify.design` (the dev server warns `Collection lucide is not found locally`). Icons need network access, and the site depends on that third-party API.
- The header CTA ("Join Eclipse QSOS") links to `github.com/eclipse-qsos`, while the same button in `MobileMenu` links to `projects.eclipse.org/projects/technology.qsos`.
- The hero metrics (`4` steps, `16` criteria, `0 - 2` scale, `2.0` method version) are hard-coded in `HeroSection.vue`, not in the locale files.
- The CTA section's primary button is hidden with `v-if="false"` (deliberately, see commit `b2c89f8`). Don't remove it as dead code.
- The hero's "See the Method" button is a plain `href="#method"` link, so it skips the 80px header offset that the nav links apply.
- `tsconfig.json` only references the generated `.nuxt/tsconfig.*.json` files, so run `npm install` (or `npx nuxi prepare`) before expecting type information.
