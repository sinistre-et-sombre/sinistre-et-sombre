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

## Container version

Included in the repo are a `Containerfile`, `container.yaml` as well as `caddy-conf/`.
The `Containerfile` allows to build a nodejs container with the content from `package.json` installed.

### Building the website

You can build the container with `podman -t sinistre-et-sombre:dev .`.
You can run the builder container with `podman run --rm -ti -v .:/app localhost/sinistre-et-sombre:dev sh`.
Once in the container, `npx nuxi generate` with build the static site in `.output/public/`.

### Deploying the website

This is where the `compose.yaml` and `caddy-conf` comes in play. Once the files are built, simply running `podman compose up -d` should make the site available on http://localhost:29144/ !

⚠️ For an unknown reason, Caddy fails on rebuild (it might be that `npx nux generate` deletes and recreates `.output/public`). This means that after each rebuild, `podman compose restart` must be run.
