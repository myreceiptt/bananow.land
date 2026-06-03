# BANANOW LAND Update Task Spec

Dokumen ini adalah instruksi teknis untuk eksekusi pembaruan awal BANANOW LAND.

Scope dokumen ini hanya untuk fase update dasar website. Tidak membangun fitur besar seperti News CMS, Skool forms, NFT marketplace contract, Claps chatbot, auth, database, payment, subscription, atau admin dashboard.

---

## 1. Objective

Update BANANOW LAND agar sesuai dengan arah terbaru project tanpa mengubah style visual utama, layout besar, font, color system, dan button sound yang sudah ada.

Target update:

1. Memastikan repo sehat.
2. Melakukan dependency update secara aman.
3. Mengubah semua link `Be a Head` menjadi `/nfts/`.
4. Mengubah homepage Brand Ecosystem menjadi hanya tiga active brands:
   - Skool Now
   - Claps
   - Na Now News

5. Mengubah Footer Brands menu menjadi:
   - Skool Now
   - Claps
   - Na Now News
   - The Old Brands

6. Mengubah redirect `/pung` menuju akun baru `@OrdinalyPeople`.
7. Membuat halaman baru `/oldbrands`.
8. Melakukan redirect audit.
9. Menjalankan build/test.
10. Membuat laporan teknis setelah selesai.

---

## 2. Non-Goals

Tidak mengerjakan:

1. News CMS.
2. Database.
3. Auth.
4. Payment.
5. Wallet connect.
6. Marketplace smart contract.
7. AI Gateway.
8. Claps chatbot.
9. Skool registration system.
10. Admin dashboard.
11. Subscription.
12. Partner dashboard.
13. Sponsor dashboard.
14. Refactor visual besar.
15. Mengganti font global.
16. Mengganti color system global.
17. Menghapus button sound.
18. Menghapus route lama.
19. Mengubah link The Green Print.
20. Mengubah redirect selain yang disebut di scope tanpa laporan audit lebih dulu.

---

## 3. Active Brands Data

Update homepage Brand Ecosystem agar hanya menampilkan tiga brand berikut.

### 3.1. Skool Now

```ts
{
  name: "Skool Now",
  url: "/skool/",
  description: "BANANOW's home for learning programs, playing communities, and real-world growth.",
  icon: "/images/brandproducts/skoolnow.svg"
}
```

### 3.2. Claps

```ts
{
  name: "Claps",
  url: "/claps/",
  description: "Claps is BANANOW's AI companion for parents and caregivers—here to listen, reflect, and help you grow with confidence, compassion, and a little more calm.",
  icon: "/images/brandproducts/claps.svg"
}
```

### 3.3. Na Now News

```ts
{
  name: "Na Now News",
  url: "/news/",
  description: "Here we share whatever we have done. It can be crazy nothing or ordinary something. There are a lot of them. Let's dig in!",
  icon: "/images/brandproducts/nanownews.svg"
}
```

---

## 4. Old Brands Data

Create `/oldbrands` page and list these old brands.

The descriptions must stay the same.

### 4.1. 90’s Vibes

```ts
{
  name: "90’s Vibes",
  url: "/vibes",
  description: "The space (mostly on X - Twitter and Discord) where we can sing, chat, share, shill, or laugh with the fun of 90's spirit. Speak up your voices, make a lot of noise, and don't be silent!"
}
```

### 4.2. Dermaga Web3

```ts
{
  name: "Dermaga Web3",
  url: "/dermaga",
  description: "The offline event that shares and exchanges knowledge about the Web3 world. The bridge between Web2 and Web3 community."
}
```

### 4.3. Class Now

```ts
{
  name: "Class Now",
  url: "/class",
  description: "An intimate education approach for the community. The room to share about love, life, and technology. It can be on a Discord channel or in any physical room in the Universe of Reality."
}
```

### 4.4. InAMotion

```ts
{
  name: "InAMotion",
  url: "/inamotion",
  description: "The creative agency that accommodates the creative needs of other brands/products/entities, and is a profitable employer for creative people in the BANANOW community."
}
```

### 4.5. Agent Now

```ts
{
  name: "Agent Now",
  url: "/delegate",
  description: "The talent coordinator agency of BANANOW which is delegates the demand from other entities to farmers in BANANOW FAMILY."
}
```

### 4.6. NOTA’s Dept.

```ts
{
  name: "NOTA’s Dept.",
  url: "/professor",
  description: "The Web3 tech support department which makes the engine run smoothly in BANANOW. Doing tech strategy, Web3 philosophical research, blockchain exploration, and even soul analytics."
}
```

---

## 5. Link Changes

### 5.1. Be a Head

Change every `Be a Head` link to:

```text
/nfts/
```

Check these likely locations:

1. Navbar.
2. Hero section if present.
3. Community section.
4. Card most wanted.
5. Footer.
6. Any data/config file containing `Be a Head`.
7. Any hardcoded button/link containing `Be a Head`.

### 5.2. Pung Redirect

Keep route:

```text
/pung
```

Update target to:

```text
https://x.com/OrdinalyPeople
```

Also update:

1. Manual redirect button.
2. Auto redirect target if any.
3. Metadata if any.
4. Any text still mentioning old account `@Inamotion21`.

### 5.3. Footer Brands Menu

Change Footer Brands menu to:

```text
Skool Now → /skool/
Claps → /claps/
Na Now News → /news/
The Old Brands → /oldbrands
```

---

## 6. `/oldbrands` Page Requirements

Create a new page:

```text
/oldbrands
```

The page must follow the structure and visual feel of the existing Privacy Policy or Terms & Conditions page.

Required elements:

1. Same Navbar.
2. Same Footer.
3. Same page container style as legal pages.
4. Page title.
5. Intro copy.
6. Six old brands with description and link.
7. Button/link sound behavior preserved.
8. Mobile responsive.
9. Desktop responsive.

Suggested page title:

```text
Here are BANANOW's Old Brands
```

Suggested intro copy:

```text
Our FAMILY is actually trying the best to always maintain the fertility of each of the plantation crops on this LAND. Make this space a healthy, fair, and fun place to grow.

But time goes by. What is planted grows. What is born also grows to maturity. What is young grows old. What is old eventually dies and fertilizes the soil, making everything planted can grow.

So, if you want to know more about what we do in the early times, click on our old brands below.
```

---

## 7. File Discovery Instruction

Before editing, inspect the repo and identify:

1. Framework used.
2. Package manager used.
3. Current route structure.
4. Location of homepage component/page.
5. Location of Navbar component.
6. Location of Footer component.
7. Location of button sound logic.
8. Location of redirect pages.
9. Location of brand data.
10. Location of static assets.
11. Location of Privacy and Terms pages.

Do not assume structure. Read the files first.

---

## 8. UI Preservation Rules

Do not change:

1. Global visual style.
2. Font system.
3. Color system.
4. Button sound behavior.
5. General homepage layout except Brand Ecosystem cards.
6. Navbar layout except target links if needed.
7. Footer layout except Brands menu.
8. Privacy page design.
9. Terms page design.
10. Redirect page style.

If visual changes are unavoidable, report them before making large refactors.

---

## 9. Redirect Audit List

Audit these routes:

```text
/discord
/twitter
/instagram
/youtube
/vibes
/dermaga
/class
/inamotion
/delegate
/professor
/v
/pung
/zortan
/nota
/novrizky
/kainde
```

For each route, check:

1. Route exists.
2. Redirect page renders.
3. Manual button exists if current pattern uses one.
4. Target URL is readable from code.
5. `/pung` uses `@OrdinalyPeople`.
6. No accidental route deletion.

If target mismatch is found outside `/pung`, do not fix silently. Report it.

---

## 10. Testing Commands

Run commands available in the repo.

Minimum expected commands:

```bash
npm install
npm run build
```

If available:

```bash
npm run lint
npm run typecheck
npm run dev
```

If package manager is not npm, use the repo’s actual package manager.

Do not invent commands that do not exist.

---

## 11. Manual QA Checklist

After implementation, check:

1. Homepage loads.
2. Homepage Brand Ecosystem shows only:
   - Skool Now
   - Claps
   - Na Now News

3. Each active brand link points correctly:
   - `/skool/`
   - `/claps/`
   - `/news/`

4. Footer Brands menu shows only:
   - Skool Now
   - Claps
   - Na Now News
   - The Old Brands

5. Footer links point correctly.
6. Every `Be a Head` link points to `/nfts/`.
7. `/oldbrands` page loads.
8. `/oldbrands` shows six old brands.
9. Old brand links point to existing redirect routes.
10. `/pung` points to `@OrdinalyPeople`.
11. Other redirect routes still exist.
12. Privacy page still works.
13. Terms page still works.
14. Button sound still works.
15. Mobile layout is not broken.
16. Desktop layout is not broken.
17. Build succeeds.
18. No critical console error.

---

## 12. Report Format

After work is done, report:

```md
## Summary

- ...

## Files Changed

- ...

## Commands Run

- ...

## Results

- Build:
- Lint:
- Typecheck:
- Dev server:

## Manual QA

- Homepage:
- Footer:
- Be a Head links:
- /oldbrands:
- /pung:
- Redirect audit:
- Button sound:
- Mobile:
- Desktop:

## Not Done

- ...

## Risks / Notes

- ...

## Next Step

- ...
```

---

## 13. Gate Selesai

This task is complete only if:

1. Repo audit is reported.
2. Dependency update is safe or clearly postponed.
3. Homepage active brands are updated.
4. Footer Brands menu is updated.
5. `Be a Head` links point to `/nfts/`.
6. `/pung` points to `@OrdinalyPeople`.
7. `/oldbrands` exists and works.
8. Redirect audit is completed.
9. Build succeeds.
10. Button sound remains active.
11. No major visual drift.
12. Final report is provided.

---

## 14. The Green Print Dependency Rule

Website update dasar may proceed first.

However, The Green Print must be completed before starting:

1. Legal Update Minimum.
2. App Foundation and Centralized Data Structure.
3. Na Now News MVP.
4. Skool Now MVP.
5. NFT Marketplace.
6. Claps Alpha.
7. Any later dynamic module.

After website update dasar and redirect QA are complete, pause and finish The Green Print before moving to the next major stage.

---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
