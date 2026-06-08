# BANANOW LAND — Na Now News MVP Task Spec v1.62

Dokumen ini adalah instruction package untuk membangun **Na Now News MVP v1.62** di BANANOW LAND.

Stage ini dimulai setelah:

1. Website Update v1.47 selesai.
2. The Green Print Finalization v1.50 selesai.
3. Legal Update Minimum v1.51 selesai.
4. App Foundation dan Struktur Data Terpusat v1.51 selesai.

Na Now News MVP v1.62 harus memakai fondasi baru:

1. `src/data/`
2. `src/content/`
3. reusable page pattern
4. route-aware SEO helper
5. BANANOW visual identity yang sudah ada

---

## 1. Objective

Membangun Na Now News sebagai portal artikel/news sederhana milik BANANOW LAND.

Target MVP:

1. `/news` tidak lagi hanya placeholder.
2. Artikel disimpan sebagai static Markdown.
3. Artikel bisa ditampilkan sebagai list.
4. Artikel bisa dibuka sebagai detail page.
5. Artikel mendukung multi-category.
6. Artikel mendukung tags.
7. Category dan tag memiliki slug page untuk SEO.
8. Artikel memiliki status publishing sederhana.
9. SEO dasar tersedia untuk list, category, tag, dan detail artikel.
10. Admin/CMS/database ditahan dulu.

---

## 2. Content Strategy

Na Now News MVP v1.62 memakai:

```text
src/content/news/
```

Artikel awal ditulis sebagai file `.md`.

Farmer akan mengambil artikel lama secara manual dari prototype lama Na Now News, mengubah dari `.mdx` menjadi `.md`, lalu memasukkannya ke `src/content/news/`.

Agent Now tidak perlu:

1. audit repo prototype lama;
2. mengambil file `.mdx` dari `news.endhonesa.com`;
3. fetch konten dari website lama;
4. melakukan migrasi konten eksternal otomatis.

MVP harus tetap aman jika `src/content/news/` belum berisi artikel publik, dengan menampilkan empty state yang rapi.

---

## 3. Routes

Buat route berikut:

```text
/news
/news/[slug]
/news/category/[categorySlug]
/news/tag/[tagSlug]
```

### 3.1. `/news`

Fungsi:

1. menampilkan semua artikel `published`;
2. sort artikel terbaru ke terlama;
3. menampilkan article cards;
4. menampilkan category navigation;
5. menampilkan tag discovery jika relevan;
6. menampilkan empty state jika belum ada artikel publik;
7. memakai style BANANOW LAND.

### 3.2. `/news/[slug]`

Fungsi:

1. menampilkan detail artikel;
2. menampilkan title;
3. excerpt;
4. date;
5. updated date jika ada;
6. author;
7. primary category;
8. categories;
9. tags;
10. cover image jika ada;
11. body Markdown;
12. related navigation sederhana;
13. back to news link.

### 3.3. `/news/category/[categorySlug]`

Fungsi:

1. menampilkan artikel `published` dalam category tersebut;
2. menampilkan title category;
3. menampilkan description category;
4. menampilkan article cards;
5. menampilkan empty state jika tidak ada artikel publik;
6. route harus SEO-friendly.

### 3.4. `/news/tag/[tagSlug]`

Fungsi:

1. menampilkan artikel `published` dengan tag tersebut;
2. menampilkan title tag;
3. menampilkan article cards;
4. menampilkan empty state jika tidak ada artikel publik;
5. route harus SEO-friendly.

---

## 4. Article Frontmatter Schema

Setiap artikel `.md` memakai frontmatter minimum:

```yaml
---
title: "Article Title"
slug: "article-title"
excerpt: "Short description for listing and SEO."
date: "2026-06-08"
updated: "2026-06-08"
author: "BANANOW LAND"
status: "published"
primaryCategory: "Technology"
categories:
  - "Technology"
  - "Arts"
tags:
  - "AI"
  - "Artists"
  - "Creative Economy"
coverImage: "/images/news/example.jpg"
---
```

### 4.1. Required Fields

Required:

1. `title`
2. `slug`
3. `excerpt`
4. `date`
5. `author`
6. `status`
7. `primaryCategory`
8. `categories`
9. `tags`

Optional:

1. `updated`
2. `coverImage`

### 4.2. Slug Rules

Article slug:

1. lowercase;
2. URL-safe;
3. hyphenated;
4. unique;
5. manually set in frontmatter.

Category slug:

1. generated from category config;
2. stable;
3. not generated randomly from display name during runtime.

Tag slug:

1. generated from tag name;
2. lowercase;
3. hyphenated;
4. used for `/news/tag/[tagSlug]`.

---

## 5. Multi-Category Rule

Artikel boleh memiliki lebih dari satu category.

Gunakan:

```yaml
primaryCategory: "Technology"
categories:
  - "Technology"
  - "Arts"
```

Meaning:

1. `primaryCategory` adalah kategori utama untuk breadcrumb, card highlight, dan SEO utama.
2. `categories` adalah daftar semua kategori yang relevan.
3. `primaryCategory` harus termasuk di dalam `categories`.
4. Satu artikel bisa tampil di beberapa category pages.
5. Category adalah rak besar.
6. Tags adalah label detail yang lebih granular.

---

## 6. Article Status

Status artikel untuk MVP:

```ts
type NewsStatus = "published" | "draft" | "unlisted" | "archived";
```

### 6.1. `published`

Gunanya:

1. artikel publik normal;
2. tampil di `/news`;
3. tampil di category page;
4. tampil di tag page;
5. bisa dibuka langsung lewat `/news/[slug]`.

### 6.2. `draft`

Gunanya:

1. artikel belum siap;
2. tidak tampil di `/news`;
3. tidak tampil di category page;
4. tidak tampil di tag page;
5. tidak dibuat menjadi public route;
6. aman untuk disimpan di repo sebagai draft internal.

### 6.3. `unlisted`

Gunanya:

1. artikel bisa dibuka via direct link;
2. tidak tampil di `/news`;
3. tidak tampil di category page;
4. tidak tampil di tag page;
5. cocok untuk preview publik terbatas atau artikel yang hanya dibagikan lewat link.

### 6.4. `archived`

Gunanya:

1. artikel lama yang disimpan sebagai arsip;
2. tidak tampil di list utama `/news`;
3. tidak tampil di category/tag page secara default;
4. boleh tetap bisa dibuka via direct link;
5. nanti bisa dibuat archive page tersendiri jika diperlukan.

### 6.5. MVP Display Rule

Untuk MVP:

```text
/news hanya menampilkan published
/news/category/[categorySlug] hanya menampilkan published
/news/tag/[tagSlug] hanya menampilkan published
/news/[slug] bisa menampilkan published, unlisted, dan archived
draft tidak dibuat menjadi public route
```

---

## 7. Category Taxonomy

Kategori awal harus didefinisikan di data/config, misalnya:

```text
src/data/newsCategories.ts
```

atau file serupa.

### 7.1. LAND

Slug:

```text
land
```

Definisi:

Kategori untuk arah, identitas, dokumen, status, dan perkembangan utama BANANOW LAND.

Masuk kategori ini jika artikel membahas:

1. The Green Print;
2. status website;
3. roadmap;
4. official notes;
5. identity direction;
6. update besar BANANOW LAND;
7. public announcement tentang LAND.

Tidak untuk:

1. artikel teknologi umum;
2. opini pasar umum;
3. review tools yang tidak langsung terkait BANANOW LAND.

---

### 7.2. Technology

Slug:

```text
technology
```

Definisi:

Kategori untuk teknologi umum yang memengaruhi kehidupan, kreativitas, komunitas, kerja, dan masa depan.

Masuk kategori ini jika artikel membahas:

1. AI;
2. platform digital;
3. internet;
4. software;
5. automation;
6. tools;
7. digital behavior;
8. future technology.

Tidak untuk:

1. artikel blockchain yang fokus utamanya Web3/NFT/crypto; gunakan Web3.
2. artikel seni murni tanpa fokus teknologi; gunakan Arts.

---

### 7.3. Web3

Slug:

```text
web3
```

Definisi:

Kategori untuk blockchain, NFT, wallet, crypto culture, decentralized participation, ownership, verification, dan on-chain activity.

Masuk kategori ini jika artikel membahas:

1. blockchain;
2. Bitcoin;
3. Ethereum;
4. Base;
5. Tezos;
6. Polygon;
7. NFT;
8. wallet;
9. smart contract;
10. decentralized identity;
11. Web3 gaming;
12. tokenized culture.

Tidak untuk:

1. teknologi umum tanpa blockchain;
2. artikel pasar crypto yang lebih fokus harga/trend market; gunakan Markets + tag Web3 jika perlu.

---

### 7.4. Arts

Slug:

```text
arts
```

Definisi:

Kategori untuk seni, visual culture, creative process, creator economy, dan ekspresi kreatif.

Masuk kategori ini jika artikel membahas:

1. seniman;
2. desain;
3. AI art;
4. karya visual;
5. creative culture;
6. creator identity;
7. artistic process;
8. art platform.

Tidak untuk:

1. artikel teknologi umum kecuali seni menjadi inti pembahasan;
2. artikel bisnis kreatif yang lebih fokus monetization; gunakan Business + tag Arts jika perlu.

---

### 7.5. Community

Slug:

```text
community
```

Definisi:

Kategori untuk cerita komunitas, relasi sosial, public participation, movement, dan kehidupan sosial BANANOW.

Masuk kategori ini jika artikel membahas:

1. BANANOW FAMILY;
2. Farmers;
3. Heads;
4. Sprouts;
5. Lovers;
6. Discord/community;
7. social activity;
8. community movement;
9. public participation.

Tidak untuk:

1. announcement resmi besar tentang arah LAND; gunakan LAND.
2. artikel edukasi/program; gunakan Education.

---

### 7.6. Education

Slug:

```text
education
```

Definisi:

Kategori untuk pembelajaran, literacy, skill, workshop, Skool Now, dan transfer pengetahuan.

Masuk kategori ini jika artikel membahas:

1. Skool Now;
2. kelas;
3. workshop;
4. tutorial;
5. literacy;
6. belajar teknologi;
7. belajar creative skill;
8. belajar Web3;
9. program edukasi.

Tidak untuk:

1. artikel opini tanpa tujuan edukasi jelas;
2. artikel teknologi umum tanpa konteks belajar.

---

### 7.7. Business

Slug:

```text
business
```

Definisi:

Kategori untuk model bisnis, kerja sama, brand, partner, sponsor, operasi, dan pertumbuhan ekonomi project.

Masuk kategori ini jika artikel membahas:

1. B2B;
2. partnership;
3. monetization;
4. startup;
5. brand growth;
6. sponsor/investor;
7. operating model;
8. revenue model;
9. project sustainability.

Tidak untuk:

1. market trend umum; gunakan Markets.
2. pengumuman LAND; gunakan LAND.

---

### 7.8. Markets

Slug:

```text
markets
```

Definisi:

Kategori untuk pergerakan pasar, konteks ekonomi, dan trend yang berdampak pada technology, Web3, creative economy, atau BANANOW.

Masuk kategori ini jika artikel membahas:

1. market trend;
2. crypto market;
3. creator market;
4. platform economy;
5. financial context;
6. adoption trend;
7. macro context yang relevan.

Tidak untuk:

1. promosi coin/token tertentu;
2. financial advice;
3. price prediction yang terlalu spekulatif.

---

### 7.9. Gaming

Slug:

```text
gaming
```

Definisi:

Kategori untuk game, play culture, esports, blockchain gaming, dan game sebagai budaya.

Masuk kategori ini jika artikel membahas:

1. industri game;
2. Web3 gaming;
3. game economy;
4. gaming community;
5. play-to-own;
6. game culture;
7. esports;
8. rental/playroom culture jika relevan.

Tidak untuk:

1. artikel teknologi umum tanpa game sebagai inti;
2. artikel bisnis umum yang tidak fokus gaming.

---

### 7.10. Opinion

Slug:

```text
opinion
```

Definisi:

Kategori untuk sudut pandang, esai, kritik, refleksi, interpretasi tren, atau posisi editorial BANANOW.

Masuk kategori ini jika artikel berisi:

1. opini;
2. reflection;
3. critique;
4. editorial stance;
5. personal-public essay;
6. interpretasi tren;
7. manifesto pendek.

Tidak untuk:

1. pengumuman faktual;
2. tutorial;
3. review produk/platform.

---

### 7.11. Reviews

Slug:

```text
reviews
```

Definisi:

Kategori untuk ulasan produk, platform, tools, project, koleksi, atau pengalaman penggunaan.

Masuk kategori ini jika artikel membahas:

1. review platform;
2. review tools;
3. review Web3 project;
4. review AI tools;
5. review creative tools;
6. pengalaman menggunakan produk;
7. evaluasi fitur.

Tidak untuk:

1. opini umum tanpa objek review spesifik;
2. berita/announcement.

---

## 8. Tags

Tags tidak perlu predefined di awal.

Rules:

1. tag dibuat dari artikel;
2. tag harus singkat;
3. tag boleh lebih granular dari category;
4. tag bisa lintas category;
5. tag slug dibuat otomatis dari nama tag;
6. tag page menampilkan artikel `published` dengan tag tersebut.

Contoh tags:

```text
AI
Artists
Creative Economy
Bitcoin
Satoshi Nakamoto
Blockchain Gaming
Base
NFT
BANANOW LAND
Green Print
```

---

## 9. Initial Articles

Artikel awal akan dimigrasikan manual oleh Farmer dari prototype lama Na Now News.

Minimum artikel untuk MVP:

```text
3 published articles
```

Farmer dapat mulai dari artikel prototype lama seperti:

1. Cara Sebagai Platform Media Sosial Anti-AI untuk Seniman
2. Identitas Satoshi Nakamoto Akhirnya Terungkap?
3. Curahan Hatiku, Ketika Dia Mengancam Masa Depanku
4. Transformasi Industri Game dengan Teknologi Blockchain dan Web3 di 2024!

Agent Now tidak mengambil artikel tersebut dari website lama.

Jika artikel belum tersedia saat implementasi teknis, `/news` harus tetap menampilkan empty state yang rapi.

---

## 10. Markdown Requirements

Artikel memakai `.md`, bukan `.mdx`.

MVP Markdown renderer artikel harus mendukung:

1. headings;
2. paragraph;
3. ordered list;
4. unordered list;
5. bold;
6. italic;
7. inline code;
8. links;
9. images;
10. blockquote;
11. horizontal rule.

Tables boleh ditunda jika tidak diperlukan.

Jika dependency Markdown diperlukan, Agent Now boleh mengusulkan dependency, tetapi harus menjelaskan alasannya.

---

## 11. SEO Requirements

Setiap route penting harus punya SEO dasar.

### 11.1. `/news`

SEO:

1. title: `Na Now News | BANANOW LAND`
2. description: memakai deskripsi Na Now News yang sudah ada atau versi pendek yang sesuai.
3. canonical: `/news`

### 11.2. `/news/[slug]`

SEO:

1. title dari article title;
2. description dari excerpt;
3. canonical dari article slug;
4. OG title dari article title;
5. OG description dari excerpt;
6. OG image dari `coverImage` jika ada, fallback ke default.

### 11.3. `/news/category/[categorySlug]`

SEO:

1. title category;
2. description category;
3. canonical category route.

### 11.4. `/news/tag/[tagSlug]`

SEO:

1. title tag;
2. description sederhana;
3. canonical tag route.

---

## 12. UI Requirements

Na Now News harus tetap terasa satu dunia dengan BANANOW LAND.

Wajib:

1. menggunakan Layout yang sudah ada;
2. menjaga navbar/footer;
3. menjaga visual BANANOW;
4. menjaga click sound pada CTA/link penting;
5. memakai card style yang selaras;
6. mobile responsive;
7. desktop responsive;
8. empty state rapi;
9. tidak membuat desain baru yang terlalu jauh dari homepage.

---

## 13. Technical Implementation Direction

Recommended files:

```text
src/content/news/
src/data/newsCategories.ts
src/lib/news.ts
src/lib/slugify.ts
src/components/NewsCard.tsx
src/components/NewsArticleLayout.tsx
src/components/NewsTaxonomyList.tsx
src/pages/news/index.tsx
src/pages/news/[slug].tsx
src/pages/news/category/[categorySlug].tsx
src/pages/news/tag/[tagSlug].tsx
```

Naming may be adjusted to match the actual repo structure.

### 13.1. `src/lib/news.ts`

Responsibilities:

1. read Markdown files from `src/content/news/`;
2. parse frontmatter;
3. validate required fields;
4. ignore template files and invalid non-article files;
5. sort articles by date;
6. return published articles;
7. return article by slug;
8. return category articles;
9. return tag articles;
10. generate article paths;
11. generate category paths;
12. generate tag paths.

### 13.2. Validation Rules

Build should fail or clearly report errors if:

1. duplicate slug exists;
2. missing required frontmatter;
3. invalid status;
4. invalid primaryCategory;
5. primaryCategory is not included in categories;
6. category does not exist in category config;
7. date is invalid.

Template files may be ignored if they start with `_`, for example:

```text
_template.md
```

---

## 14. Branch and Workflow

Implementation must happen on a new branch:

```text
news-mvp-v1.62
```

Rules:

1. start from latest `main`;
2. do not work directly on `main`;
3. run lint/build;
4. perform route QA;
5. commit locally;
6. push branch only after Farmer local review;
7. use Vercel Preview;
8. merge only after preview QA passes;
9. production QA after merge.

Suggested commit message:

```text
feat: add Na Now News MVP v1.62
```

---

## 15. Non-Goals

Do not build:

1. database;
2. auth;
3. admin dashboard;
4. create/edit/publish UI;
5. comments;
6. newsletter;
7. search engine;
8. payment;
9. Skool Now;
10. NFT Marketplace;
11. Claps;
12. AI integration;
13. dynamic CMS;
14. external prototype import script.

Do not fetch or scrape `news.endhonesa.com`.

---

## 16. QA Checklist

Before marking MVP complete:

- [ ] `/news` renders.
- [ ] `/news` shows published articles if available.
- [ ] `/news` shows empty state if no published articles.
- [ ] `/news/[slug]` renders published article.
- [ ] `/news/[slug]` renders unlisted article by direct link.
- [ ] `draft` article does not become public route.
- [ ] Category page renders.
- [ ] Tag page renders.
- [ ] Multi-category article appears in all relevant category pages.
- [ ] Tags generate working tag pages.
- [ ] SEO metadata exists.
- [ ] Markdown body renders correctly.
- [ ] Invalid frontmatter is caught.
- [ ] Mobile layout works.
- [ ] Desktop layout works.
- [ ] Navbar/footer remain stable.
- [ ] Button sound remains active where relevant.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Vercel Preview QA passes.
- [ ] Production QA passes.

---

## 17. Completion Gate

Na Now News MVP v1.62 is complete only when:

1. static Markdown article system works;
2. `/news` works;
3. `/news/[slug]` works;
4. category pages work;
5. tag pages work;
6. article statuses behave correctly;
7. multi-category works;
8. SEO works at MVP level;
9. initial articles are available or empty state is confirmed acceptable;
10. lint/build pass;
11. preview QA passes;
12. production QA passes;
13. Farmer approves the result.

---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
