# Eclipse QSOS™ website

Source code of the website of [Eclipse QSOS](https://projects.eclipse.org/projects/technology.qsos) (Qualification and Selection of Open Source Software), an open methodology to describe, evaluate and compare open source software.

The site is built with [Nuxt 4](https://nuxt.com/) (Vue 3, TypeScript) and is available in English and French.

## Prerequisites

- [Node.js](https://nodejs.org/) 22.19+ or 24.11+ (required by Nuxt 4)
- npm (bundled with Node.js)

## Local development

```bash
npm ci        # install dependencies from package-lock.json
npm run dev   # start the dev server on http://localhost:3000 (French under /fr)
```

## Build and deploy

```bash
npm run generate   # build the static site into .output/public/
npm run preview    # preview the build locally
```

Deploy the contents of `.output/public/` to any static web server.

### Deploying under a sub-path

By default the site is built to be served from the domain root (`/`). To serve it from a sub-path, set `NUXT_APP_BASE_URL` when generating (leading and trailing slashes required):

```bash
# served at https://example.org/
npm run generate

# served at https://example.org/qsos/
NUXT_APP_BASE_URL=/qsos/ npm run generate
```

Then upload the contents of `.output/public/` to that location.

## Content

All the text displayed on the site lives in the locale files:

- `i18n/locales/en.json` (English)
- `i18n/locales/fr.json` (French)

When you add or change text, update both files so they keep the same keys.

## Contributing

Contributions are made through GitHub pull requests against `main`. Before contributing:

- sign the [Eclipse Contributor Agreement (ECA)](https://www.eclipse.org/legal/ECA.php) with the email address you use in your commits;
- sign off every commit (`git commit -s`).

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This repository (code and content) is licensed under the [Apache License 2.0](LICENCE).

The QSOS method itself is published under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) and is not part of this repository.

## Trademarks

Eclipse QSOS and the QSOS logo are trademarks of Eclipse Foundation AISBL.
