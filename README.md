# Aexo reproduction

Production-oriented Next.js reproduction of the Aexo Framer site, using `Unicode IT Website (Copy).fig` as the desktop visual source and the live site for responsive and motion behavior.

## Run locally

```bash
npm install
npm run dev
```

For local contact delivery, copy `.env.example` to `.env.local` and set the private `UNI_MAIL_HUB_API_KEY` and `UNI_MAIL_HUB_MAILBOX_ID`. Keep `UNI_MAIL_HUB_URL=https://mailhub.unicodeit.com`. Next.js loads `.env.local` on `npm run dev`; never prefix these keys with `NEXT_PUBLIC_`. The form posts to the server-side `/api/contact` route, which sends one message to Uni Mail Hub.

See [DEPLOY.md](DEPLOY.md) for the Docker Compose production environment and an end-to-end contact test.

## Validation

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

Original Figma rasters are preserved in `public/assets/source`; `public/assets/manifest.json` maps the semantic production filenames back to their archive hashes.
