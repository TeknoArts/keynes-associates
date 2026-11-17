# Keynes Consultant

Premium KRA tax consulting website for Nairobi — Next.js on Vercel.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Motion (`motion/react`) for scroll and hero animation
- Ready for Vercel deployment

## Develop

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Push this repo to GitHub / GitLab / Bitbucket
2. Import the project in [Vercel](https://vercel.com)
3. Deploy (defaults work — no env vars required for the static consultation form)

## Update contact details

Edit `src/lib/site.ts`:

- `email`, `phone`, `phoneHref`, `whatsapp`, `whatsappHref`
- `location`, `hours`, `mapUrl`

## Pages

- `/` — conversion landing
- `/services` — service detail
- `/knowledge` — knowledge hub + articles
- `/about` — practice & team
- `/book` — Book a consultation
