# Flixon IT Solutions — Company Website

Corporate website for **Flixon IT Solutions Private Limited**, built with **Next.js (App Router), React, TypeScript, Tailwind CSS v4 and Framer Motion**.

## Run it

Requires **Node.js 20.9+ (22 recommended, see `.nvmrc`)** on a Linux build host with **glibc 2.29 or newer**
(Ubuntu 20.04+, Debian 11+, Amazon Linux 2023, RHEL 9). Check with `ldd --version`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # run the production build
```

### Build with Docker (works on any host)

```bash
docker build -t flixon-website .
docker run -p 3000:3000 flixon-website
```

### Deploying on Hostinger (or other shared hosting with an older Linux)

`npm run build` runs `next build --webpack`. Hostinger's build servers cannot load Next.js's native
compiler, and Turbopack (the Next.js 16 default) only works with it; Webpack works with the WebAssembly
fallback, so builds take a little longer but succeed. Images are served as-is (`images.unoptimized`), so the
site never needs the native `sharp` library. In hPanel, set the build command to `npm run build`, the start
command to `npm start`, and choose Node.js 22 (or 20).

### Troubleshooting: `GLIBC_2.29 not found` / `ERR_MODULE_NOT_FOUND ... .next.config`

Next.js, Turbopack and Tailwind v4 ship native Linux binaries built for glibc 2.29+. On older hosts
(Amazon Linux 2, CentOS 7/8, Debian 10, Ubuntu 18.04) the native SWC binary cannot load. Next.js then falls
back to WASM, which cannot compile `next.config.ts` or run Turbopack builds. The config is now
`next.config.mjs` so it no longer needs compiling, but the build itself still needs a newer host:

1. Use a newer build image (for example Amazon Linux 2023 on AWS Amplify/CodeBuild, `ubuntu-latest` on
   GitHub Actions), **or** build with the Dockerfile above.
2. Never commit `node_modules` or files named `*.next.config.*`. If they are already committed:
   ```bash
   git rm -r --cached node_modules
   git rm --cached -- *.next.config.ts *.next.config.mjs 2>/dev/null
   git rm --cached next.config.ts 2>/dev/null   # replaced by next.config.mjs
   git commit -m "Remove node_modules and stray Next.js config files"
   ```
3. Do a clean install on the build host: `rm -rf node_modules .next && npm install && npm run build`.

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
