# Mohammad Usman Nasir — Portfolio (Next.js)

Static portfolio site deployable on Vercel.

## Stack

- Next.js (App Router)
- TypeScript, Tailwind CSS
- Web3Forms (contact form, no backend)
- Vercel Analytics

## Setup

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_SITE_URL and Web3Forms key in .env.local
npm run dev
```

### Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://usmannasir.vercel.app`) — used for Open Graph and SEO |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms access key ([web3forms.com](https://web3forms.com)) |

Copy `.env.example` to `.env.local` for local development. On Vercel, add both variables in **Project → Settings → Environment Variables**.

Restrict your Web3Forms key to your production domain in the Web3Forms dashboard after deploy.

## Brand assets

Placeholder logos and social preview images live in [`public/brand/`](public/brand/). Replace them with final designs without changing code paths. See `public/brand/README.md` for dimensions.

## Deploy (Vercel)

1. Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).
2. Set `NEXT_PUBLIC_SITE_URL=https://usmannasir.vercel.app` (or your custom domain).
3. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. In **Settings → Domains**, add `usmannasir.vercel.app` and set it as primary.
5. Confirm `public/CV/CV.pdf` is in the repo for CV download.
6. After deploy, test:
   - Contact form
   - `/CV/CV.pdf`
   - Theme toggle
   - Share preview on [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) or [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
