# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Deploying under a sub-path

By default the site is built to be served from the domain root (`/`). To serve it from a sub-path, set `NUXT_APP_BASE_URL` when generating (leading and trailing slashes required):

```bash
# served at https://example.org/
npm run generate

# served at https://example.org/qsos/
NUXT_APP_BASE_URL=/qsos/ npm run generate
```

Then upload the contents of `.output/public` to that location.
