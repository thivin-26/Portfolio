# THIVIN S Portfolio

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) after the development server starts.

## Verify and run a production build

```bash
npm run lint
npm run build
npm run start
```

The portfolio uses [`next/font`](https://nextjs.org/docs/app/building/optimizing/fonts) for Plus Jakarta Sans body text and Manrope headings.

## Deployment URL

Set `NEXT_PUBLIC_SITE_URL` to the public origin of the deployed portfolio (for example, `https://your-domain.com`). Open Graph metadata, `robots.txt`, and `sitemap.xml` use this value. Without it, production builds omit public site URLs rather than publishing localhost links.

## Deploy on Vercel

Import the repository into [Vercel](https://vercel.com/new) and configure `NEXT_PUBLIC_SITE_URL` in the project environment settings.
