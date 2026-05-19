# Pacific Associates — Website

Production Next.js 16 website for Pacific Associates, a debt consolidation company in Irvine, CA.

## Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styles**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond + DM Sans (Google Fonts via next/font)
- **Deployment**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, stats, video, testimonials |
| `/about` | About the company |
| `/how-it-works` | 5-step process + FAQ |
| `/free-quote` | Quote form |
| `/contact` | Contact form + address |
| `/videos` | YouTube embed |
| `/privacy` | Privacy policy |

## Forms — Formspree Setup (Action Required)

Both the quote form and contact form POST to Formspree so submissions are emailed to you.

**To activate:**
1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and set the notification email to your address
3. Copy the form ID from your Formspree dashboard (looks like `xabcdefg`)
4. Replace `REPLACE_WITH_YOUR_FORMSPREE_ID` in these three files:
   - `src/components/QuoteForm.tsx`
   - `src/components/ContactForm.tsx`
   - `src/components/InlineQuoteForm.tsx`
5. Redeploy with `vercel --prod`

## Security Headers

Configured in `next.config.ts`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## ⚠️ Rate Limiting — Required Before High-Traffic Launch

The quote and contact forms currently submit directly to Formspree, which has its own basic spam protection. However, **before this site receives significant real traffic**, add server-side rate limiting to prevent abuse:

**Recommended approach:**
- Add an `/api/submit` Next.js route handler that proxies form submissions to Formspree
- Apply rate limiting per IP using [`@upstash/ratelimit`](https://github.com/upstash/ratelimit) with a free Upstash Redis account
- Example: 5 submissions per IP per hour
- This prevents spam floods, API bill attacks from bots, and credential stuffing

```ts
// Example rate limit config (add to /src/app/api/submit/route.ts)
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"),
});
```

## Deployment

```bash
# Preview deploy
vercel

# Production deploy
vercel --prod
```

Future pushes to `master` on GitHub auto-deploy via Vercel’s Git integration.
