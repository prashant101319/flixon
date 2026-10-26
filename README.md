# Flixon IT Solutions — Company Website

Corporate website for **Flixon IT Solutions Private Limited**, built with **Next.js (App Router), React, TypeScript, Tailwind CSS v4 and Framer Motion**.

## Run it

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # run the production build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: animated hero, tech marquee, focus areas, services, why us, process, industries, work, testimonials, FAQ |
| `/about` | Story, mission and vision, values, leadership, approach |
| `/services` | All 8 services + engagement models |
| `/services/[slug]` | One detail page per service (auto-generated from `src/data/services.ts`) |
| `/industries` | Industries and use cases |
| `/technologies` | Animated technology tabs |
| `/portfolio` | Filterable case studies |
| `/careers` | Perks and open positions |
| `/contact` | Contact details, validated enquiry form, FAQ |
| `/privacy-policy`, `/terms` | Legal templates |
| `/sitemap.xml`, `/robots.txt` | Generated automatically |

## Animations and interactivity

Scroll progress bar, sticky blurred navbar with animated active pill, services mega-menu, mobile slide menu, mouse-following hero glow, rotating hero words, orbiting tech icons, count-up stats, infinite tech marquee, scroll-reveal sections, mouse spotlight cards, self-drawing process timeline, testimonial carousel, FAQ accordion, animated tabs, filterable portfolio with layout animations, animated form validation and success state, back-to-top button. All animations respect the visitor's "reduce motion" setting.

## Where to put your information

Search the project for `TODO` to find every placeholder.

| What | File |
| --- | --- |
| Company name, email, phone, address, CIN, social links, stats, WhatsApp, map | `src/config/site.ts` |
| Services text and technologies | `src/data/services.ts` |
| Testimonials, team, values, openings, FAQ, industries, tech list | `src/data/content.ts` |
| Case studies (currently samples) | `src/data/portfolio.ts` |
| Brand colours and fonts | `src/app/globals.css` (`@theme`) and `src/app/layout.tsx` |
| Logo | `src/components/layout/Logo.tsx` (or put `logo.svg` in `/public`) |
| Contact form delivery (email / CRM) | `src/app/api/contact/route.ts` |
| Favicon | add `src/app/icon.png` (Next.js picks it up automatically) |

## Deploy

- **Vercel**: import the repository, no configuration needed.
- **AWS**: AWS Amplify Hosting (connect the Git repo), or SST / OpenNext for Lambda + CloudFront.
