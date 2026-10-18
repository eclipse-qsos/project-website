# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this is

The landing page for **Eclipse QSOS** (Qualification and Selection of Open Source Software), an Eclipse Foundation project (`technology.qsos`). It is a single-page marketing/explainer site built with **Nuxt 4** (Vue 3, TypeScript, `<script setup>`). Upstream: `github.com/eclipse-qsos/project-website`.

There is no backend, no API, no CMS. All copy lives in the i18n JSON files.

## Commands

```bash
npm ci             # install from package-lock.json; postinstall runs `nuxt prepare` (generates .nuxt/)
npm run dev        # dev server on http://localhost:3000 (/ and /fr)
npm run build      # Node server build into .output/ (run with `node .output/server/index.mjs`)
npm run generate   # static site into .output/public/, prerenders / and /fr
npm run preview    # serve the last build on http://localhost:3000
```

Prefer `npm ci` over `npm install` so the lockfile isn't rewritten. There are no lint, format, typecheck or test scripts and no CI config in the repo. `npm run build` is the practical check that a change compiles.

## Layout

```
nuxt.config.ts            modules, i18n, global CSS, component auto-import, <head>
app/
  app.vue                 <NuxtLayout><NuxtPage/></NuxtLayout>
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
public/                   favicon.ico, robots.txt
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

- `nuxt.config.ts` sets `app.head.baseUrl: '/qsos/'`, which has no effect: the built app still has `baseURL: "/"` and serves assets from `/_nuxt/`. The Nuxt option for a deploy sub-path is `app.baseURL`. Confirm the deployment target before changing it.
- No `@iconify-json/lucide` package is installed, so `<Icon name="lucide:...">` icons are fetched at runtime from `api.iconify.design` (the dev server warns `Collection lucide is not found locally`). Icons need network access, and the site depends on that third-party API.
- The header CTA ("Join Eclipse QSOS") links to `github.com/eclipse-qsos`, while the same button in `MobileMenu` links to `projects.eclipse.org/projects/technology.qsos`.
- The hero metrics (`4` steps, `16` criteria, `0 - 2` scale, `2.0` method version) are hard-coded in `HeroSection.vue`, not in the locale files.
- The CTA section's primary button is hidden with `v-if="false"` (deliberately, see commit `b2c89f8`). Don't remove it as dead code.
- The hero's "See the Method" button is a plain `href="#method"` link, so it skips the 80px header offset that the nav links apply.
- `tsconfig.json` only references the generated `.nuxt/tsconfig.*.json` files, so run `npm install` (or `npx nuxi prepare`) before expecting type information.
