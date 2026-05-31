# BANANOW.LAND Landing Page

## About This Repo

`bananow.land` is the landing page and navigation hub for the BANANOW NFT universe. It provides a fast, user-friendly entry point for exploring project destinations (pages, links, and resources) and for routing users to the right on-chain and off-chain experiences.

### Purpose & Scope

- Provide a single canonical landing page for BANANOW.
- Offer a curated set of routes and resources with a clean, mobile-friendly UX.
- Keep deployment production-safe and maintainable under Evergreen practices.

### Blockchain

- Origin: **Ethereum**
- Current primary chain: **Base**
- Compatibility: **EVM-compatible**, with a migration-friendly posture for other EVM chains.

### Technology

- Framework: **Next.js** + **React**
- UI: **Tailwind CSS** + component libraries where appropriate
- Tooling: **npm**, **ESLint**, **TypeScript**
- Deployment: **Vercel**
- Current Evergreen baseline: **Next.js 16.2.6**, **React 19.2.6**, **Tailwind CSS 4.3.0**, **Node.js 24.x**, **npm 11.x**

### How We Maintain Quality

- We follow **Prof. NOTA Evergreen Standard**: safe monthly updates and scheduled quarterly majors, keeping Node version for Vercel compatibility.
- We validate changes with audit + lint + build, and document runs under `EVERGREENING/completion-log-*.md`.

---

---

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Runtime

- Node: **24.x** (see `.nvmrc` and `package.json#engines`)

  - ~~example alternatives: 22.x / 20.x (adjust if platform requires)~~

- Package manager:

  - **NPM 11.x** (lockfile: `package-lock.json`)
  - ~~Yarn (lockfile: `yarn.lock`)~~
  - ~~PNPM (lockfile: `pnpm-lock.yaml`)~~

- Deploy target:

  - **Vercel**
  - ~~Netlify~~
  - ~~Self-hosted / Docker~~
  - ~~Other platform (document explicitly)~~

### Monthly Safe Updates (recommended)

1. Check what’s outdated:

   - `npm outdated`
   - ~~yarn outdated~~
   - ~~pnpm outdated~~

2. Upgrade safe (patch/minor) versions:

   - `npm update`
   - ~~yarn upgrade~~
   - ~~pnpm update~~
   - or upgrade specific packages shown as non-major

3. Verify:

   - `npm audit --audit-level=moderate`
   - ~~yarn audit~~
   - ~~pnpm audit~~
   - `npm run lint`
   - `npm run build`
   - ~~yarn build~~
   - ~~pnpm build~~

4. Deploy:

   - **Vercel auto-deploy from `main`**
   - ~~manual deploy according to platform workflow~~

### Major Updates (quarterly / scheduled)

Major upgrades (framework, runtime, or core tooling) must be done one at a time, with a dedicated PR and full testing.

Examples:

- Node major version
- Next.js / React major version
- Tailwind CSS major version
- Package manager major version

### Environment

Copy `env.local.example` to `.env.local` and fill the public client-side values used by the contact form:

```bash
NEXT_PUBLIC_FORM_CONTACT_API=
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=
NEXT_PUBLIC_TW_CLIENT_ID=
```

Do not put private secrets in `NEXT_PUBLIC_*` variables because they are exposed to browser clients.

---

---

> Regards
>
> [Prof. NOTA](https://deeplink.endhonesa.com/)
>
> [init.endhonesa.com](https://init.endhonesa.com/)
