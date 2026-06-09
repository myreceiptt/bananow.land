# BANANOW Land — Skool Now MVP Product/Task Spec v1.74

## 1. Stage Identity

Stage name: **Skool Now MVP**
Target version: **v1.74**
Route: `/skool/`
Type: Static landing page
Status: Scope locked, ready for implementation planning.

## 2. Objective

Build `/skool/` as the first public landing page for **Skool Now**, the BANANOW Land education/program Crop.

The page should explain Skool Now as a program layer for learning, sports, community growth, real-world skills, partners, sponsors, and investors.

The MVP must remain static, simple, safe, and aligned with the existing BANANOW Land website.

## 3. Source of Truth

### Visual / Layout Source of Truth

`homepage-bananow.png`

The `/skool/` page must follow the existing BANANOW homepage structure, rhythm, dark visual style, spacing, fonts, color behavior, section flow, and general design language.

### Content / Concept Inspiration

`bananow-skool-now.png`

This image is only used as content/concept inspiration. It is not the style source of truth.

## 4. Page Structure

The `/skool/` page should follow the same section rhythm as the current homepage:

```tsx
<Layout>
  <SkoolHero />
  <SkoolPaths />
  <SkoolPrograms />
  <SkoolHowItWorks />
  <SkoolPartners />
  <SkoolFaq />
  <Embassy />
</Layout>
```

Do not reuse homepage component names directly in a confusing way. Use Skool-specific components and Skool-specific data.

## 5. Component Mapping

| Homepage Pattern | Skool Now Component | Purpose                         |
| ---------------- | ------------------- | ------------------------------- |
| `Hero`           | `SkoolHero`         | What is Skool Now               |
| `Features`       | `SkoolPaths`        | Three Paths / Three-Layer Model |
| `BrandProducts`  | `SkoolPrograms`     | Our Programs                    |
| `TheHeads`       | `SkoolHowItWorks`   | How Skool Now Works             |
| `Farmers`        | `SkoolPartners`     | Skool Now Partners              |
| `Faq`            | `SkoolFaq`          | FAQ About Skool Now             |
| `Embassy`        | `Embassy`           | Existing contact form           |

## 6. Naming Lock

Main Crop: **Skool Now**

First program: **Skate Skool Now**

Naming rule: Skool Now is the umbrella Crop. Skate Skool Now is the first program under Skool Now.

Possible future pattern:

- Skate Skool Now
- Basket Skool Now
- Futsal Skool Now
- Art Skool Now
- Game Skool Now
- AI Skool Now

Only **Skate Skool Now** is treated as the first real program in this MVP. Other programs may appear as “Coming Soon” placeholders.

## 7. Section Requirements

### 7.1. `SkoolHero`

Purpose: introduce Skool Now.

Required message:

- Skool Now is BANANOW’s home for learning programs, sports communities, real-world skills, and future literacy.
- The tone should be playful, grounded, and community-based.
- Avoid formal school-like institutional tone.

Suggested headline direction:

```text
SKOOL NOW
```

Suggested supporting line:

```text
BANANOW’s home for learning programs, sports communities, and real-world growth.
```

Suggested rhythm line:

```text
Learn. Move. Grow. Together.
```

CTA:

- `Explore Programs`
- `Become a Partner`

CTA target:

- both can scroll to the relevant section or `#embassy`.

### 7.2. `SkoolPaths`

Purpose: explain Skool Now’s three-layer business model.

This section replaces homepage `Features`.

Required title direction:

```text
Three Paths to Grow With Skool Now
```

Required paths:

#### 1. Participants / Packages

B2C layer.

Meaning:

Participants buy program packages and join learning, sports, creative, or community-based sessions.

CTA:

```text
Join a Program
```

CTA target:

```text
#embassy
```

#### 2. Partners

B2B layer.

Meaning:

Partners may include trainers, coaches, mentors, schools, venues, communities, or program operators.

Skool Now may cooperate with partners for program delivery, coaching, learning content, venue support, community activation, or operational support.

Commercial terms, revenue sharing, and responsibilities may be arranged through direct agreement.

CTA:

```text
Become a Partner
```

CTA target:

```text
#embassy
```

#### 3. Sponsors / Investors

Sponsorship and investment inquiry layer.

Meaning:

Sponsors can explore placement, branding, activation packages, and community engagement packages.

Investors can discuss program-level investment or Skool Now-level investment through customized proposals, capital structure discussions, revenue-sharing terms, or other negotiated agreements.

CTA:

```text
Sponsor or Invest
```

CTA target:

```text
#embassy
```

Safety wording:

Public copy may mention:

- commercial partnership
- sponsorship placement
- activation package
- program-level investment
- Skool Now-level investment
- capital structure
- revenue sharing
- negotiated agreement
- subject to review
- subject to agreement
- subject to availability

Public copy must not promise:

- guaranteed profit
- guaranteed return
- guaranteed revenue
- guaranteed benefit
- guaranteed sponsor result
- guaranteed investment outcome
- public investment offering

### 7.3. `SkoolPrograms`

Purpose: show program cards.

This section replaces homepage `BrandProducts`.

Required cards for MVP:

#### Skate Skool Now

Status:

```text
First Program
```

Meaning:

Skateboarding-based learning program focused on balance, confidence, movement, community, and real-world growth.

CTA:

```text
Ask About Skate Skool
```

CTA target:

```text
#embassy
```

#### Basket Skool Now

Status:

```text
Coming Soon
```

CTA:

```text
Get Notified
```

CTA target:

```text
#embassy
```

#### Futsal Skool Now

Status:

```text
Coming Soon
```

CTA:

```text
Get Notified
```

CTA target:

```text
#embassy
```

No program detail route in v1.74.

### 7.4. `SkoolHowItWorks`

Purpose: explain user journey.

This section replaces homepage `TheHeads`.

Required steps:

1. Choose a Program
2. Join & Learn
3. Track Progress
4. Connect & Share
5. Make an Impact

Tone:

Simple, encouraging, practical.

Avoid promising certificates, dashboards, or tracked achievements unless those systems exist.

Allowed wording:

- learn new skills
- join sessions
- grow with community
- share progress
- build confidence
- make real-world impact

Avoid:

- guaranteed certification
- guaranteed achievement
- official diploma
- tracked progress dashboard
- verified credential

### 7.5. `SkoolPartners`

Purpose: show partner area.

This section replaces homepage `Farmers`.

If there are no confirmed partners yet, do not use fake logos.

Use safe placeholder copy:

```text
Partner slots are opening soon.
```

or:

```text
Skool Now is preparing its first partner circle.
```

Possible card types:

- Coaches
- Venues
- Communities
- Schools
- Brands
- Sponsors

CTA:

```text
Become a Partner
```

CTA target:

```text
#embassy
```

### 7.6. `SkoolFaq`

Purpose: answer common questions and include safety/guardian notes.

This section replaces homepage `Faq`.

Required FAQ topics:

1. Who can join Skool Now programs?
2. Can parents or guardians participate?
3. Where are programs held?
4. What should I bring to a session?
5. How can I become a coach or partner?
6. How can brands, sponsors, or investors get involved?
7. Are scholarships or support options available?

Safety / guardian direction:

- If a program involves kids or young participants, guardian consent, supervision, and safety rules may apply.
- Program details may vary by location, partner, and session format.
- Participants should follow safety guidance from the program organizer, coach, mentor, or venue.

### 7.7. `Embassy`

Reuse the existing Embassy/contact section.

Requirement:

Add or ensure the Embassy wrapper can be targeted with:

```text
#embassy
```

The Embassy section is the destination for:

- participants who want to join,
- parents/guardians asking about programs,
- coaches/mentors,
- partner organizations,
- sponsors,
- investors.

No new form system in v1.74.

## 8. Data Strategy

Preferred data file:

```text
src/data/skool.ts
```

Recommended exports:

```ts
export const skoolHero = ...
export const skoolPaths = ...
export const skoolPrograms = ...
export const skoolHowItWorks = ...
export const skoolPartners = ...
export const skoolFaq = ...
```

Do not create a CMS or database for this stage.

Do not use `src/content/skool/` unless implementation clearly benefits from it. For v1.74, `src/data/skool.ts` is preferred.

## 9. Technical Scope

Allowed:

- create Skool-specific components,
- create `src/data/skool.ts`,
- update `/skool/` page from placeholder to real static landing page,
- reuse existing layout and visual patterns,
- reuse existing Embassy section,
- add `id="embassy"` wrapper if needed,
- add simple anchors to scroll to Embassy,
- use existing image/assets if available,
- use placeholder partner cards if no partner logos exist.

Not allowed:

- payment system,
- booking system,
- registration system,
- database,
- admin dashboard,
- certificate system,
- attendance tracker,
- program detail route,
- sponsor dashboard,
- partner login,
- auth,
- new dynamic backend,
- marketplace work,
- Claps work,
- new dependency unless absolutely necessary and approved first.

## 10. Visual Requirements

The page must feel like the existing BANANOW homepage.

Use:

- existing dark background style,
- existing typography rhythm,
- existing section spacing,
- existing button style where possible,
- existing BANANOW color language,
- existing playful visual energy,
- existing layout proportions.

Do not copy the white mockup design as the final design.

The white mockup is only content inspiration.

## 11. SEO Requirements

Use existing SEO helper pattern.

Recommended page metadata direction:

Title:

```text
Skool Now — BANANOW Land
```

Description:

```text
Skool Now is BANANOW Land’s home for learning programs, sports communities, real-world skills, partners, sponsors, and future literacy.
```

Avoid SEO copy that promises revenue, guaranteed outcomes, or investment returns.

## 12. Acceptance Criteria

The MVP is accepted when:

- `/skool/` is no longer a generic placeholder.
- `/skool/` follows homepage BANANOW rhythm and visual style.
- Skool Now is clearly introduced.
- Skate Skool Now appears as the first program.
- Participants / Partners / Sponsors-Investors paths are present.
- Each path has CTA to Embassy/contact.
- How Skool Now Works is present.
- Partner section is present with real logos or safe placeholders.
- FAQ includes who it is for and safety/guardian notes.
- Existing Embassy/contact form is present and reachable.
- No payment, booking, database, auth, admin, or dashboard is added.
- Lint passes.
- Build passes.
- Local visual QA passes.
- Vercel Preview QA passes.
- Production QA passes after manual merge.

## 13. QA Checklist

Routes:

```text
/skool/
/privacy
/terms
/news
/nfts
/claps
/
```

Visual checks:

- desktop layout safe,
- mobile layout safe,
- navbar safe,
- footer safe,
- Embassy safe,
- CTAs scroll or link correctly,
- no broken section,
- no visual drift on homepage,
- no broken placeholder pages.

Content checks:

- no guaranteed profit wording,
- no guaranteed return wording,
- no guaranteed revenue wording,
- no guaranteed sponsor/investor result,
- no fake partner logos,
- no fake program dates,
- no fake schedule,
- no fake pricing,
- no fake registration system.

## 14. Non-Blocker Backlog After MVP

Possible future items:

1. Program detail pages.
2. Real program packages.
3. Registration form.
4. Booking/scheduling system.
5. Partner dashboard.
6. Sponsor package deck.
7. Investor proposal page.
8. Attendance tracker.
9. Certificates or badges.
10. Scholarship/support program.
11. Skool Now articles under Na Now News.
12. Skool Now admin dashboard.

These are not part of v1.74.

## 15. Implementation Gate

Do not give Agent Now the implementation prompt until this spec is approved by Farmer.

After approval, Agent Now should:

1. create branch from latest `main`,
2. inspect existing `/skool` placeholder and homepage components,
3. implement only this scope,
4. run lint/build/local QA,
5. report before commit,
6. wait for Farmer review,
7. commit only when Farmer asks,
8. Farmer handles merge to `main` manually.
