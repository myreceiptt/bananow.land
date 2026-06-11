# BANANOW Land Daftar Runut

Dokumen ini adalah **dokumen hidup** untuk mencatat urutan kerja dan status eksekusi pengembangan BANANOW Land.

Fungsinya bukan menggantikan **BANANOW Land Development Map**, melainkan menjadi jalur eksekusi praktis: satu item selesai, baru lanjut ke item berikutnya.

Development Map adalah roadmap fix. Daftar Runut adalah dokumen yang terus diperbarui seiring pengerjaan, termasuk status tentative, selesai, ditahan, dan item sisipan.

---

## 0. Cara Membaca Daftar Runut Ini

Setiap Item Urutan Besar memiliki:

1. Nomor urutan.
2. Target milestone versi.
3. Status eksekusi.
4. Kebutuhan data/asset.
5. Kapan perlu Agent Now.
6. Kapan tidak perlu Agent Now.
7. Gate selesai.
8. Catatan risiko.

Aturan utama:

1. Jangan melompati Item Urutan Besar.
2. Jangan memberi prompt Agent Now sebelum item persiapan manualnya selesai.
3. Jangan masuk ke fitur dinamis sebelum update dasar website selesai.
4. Jangan masuk ke marketplace sebelum contract/spec marketplace final.
5. Jangan masuk ke Claps publik sebelum safety, privacy, dan memory policy jelas.
6. Jika terjadi masalah di luar rencana, sisipkan Item Urutan Besar baru sebagai **Item Sisipan** sebelum lanjut.

---

## 1. Peta Urutan Besar

### 1.1. Urutan Besar Induk

| No. | Item Urutan Besar                                 | Target     | Status         |
| --- | ------------------------------------------------- | ---------- | -------------- |
| 1   | Kunci Arah dan Dokumen Kerja                      | Pre-v1.47  | ✅ Selesai     |
| 2   | Audit Repo dan Lingkungan Kerja                   | v1.47-prep | ✅ Selesai     |
| 3   | Dependency Update Aman                            | v1.47-prep | ✅ Selesai     |
| 4   | Pembaruan Website Dasar                           | v1.47      | ✅ Selesai     |
| 5   | Redirect Audit dan Browser QA                     | v1.47      | ✅ Selesai     |
| 6   | The Green Print Finalization                      | v1.50      | ✅ Selesai     |
| 7   | Legal Update Minimum                              | v1.51      | ✅ Selesai     |
| 8   | App Foundation dan Struktur Data Terpusat         | v1.51      | ✅ Selesai     |
| 9   | Na Now News MVP                                   | v1.62      | ✅ Selesai     |
| 9A  | Repo-Wide Audit & Maintenance Review              | v1.63      | ✅ Selesai     |
| 10  | Skool Now MVP                                     | v1.74      | ✅ Selesai     |
| 10A | Global Navigation & Visual Polish                 | v1.75      | ✅ Selesai     |
| 10B | Skool Now & TSX Organization Cleanup              | v1.76      | ✅ Selesai     |
| 10C | Type Safety, ESLint & Tailwind Cleanup            | v1.77      | 🔜 Berikutnya  |
| 11  | BANANOW NFT Marketplace Testnet                   | v1.85      | ⏳ Belum mulai |
| 12  | BANANOW NFT Marketplace Mainnet Controlled Launch | v1.92      | ⏳ Belum mulai |
| 13  | Claps Alpha                                       | v2.00      | ⏳ Belum mulai |
| 14  | Admin Dashboard Perluasan                         | v2.05      | ⏳ Belum mulai |
| 15  | BANANOW Land Operating Portal                     | v2.11      | ⏳ Belum mulai |

Keterangan status:

- ✅ Selesai: item sudah tuntas dan tidak menghalangi item berikutnya.
- 🟡 Sedang berjalan: item sedang dikerjakan atau sedang menunggu hasil dari cabang obrolan.
- 🔜 Berikutnya: item terdekat yang akan dikerjakan.
- ⏳ Belum mulai: belum dieksekusi.
- ⏳ Ditahan: belum boleh dimulai karena menunggu gate sebelumnya selesai.
- 🧩 Item Sisipan: item tambahan yang muncul karena hambatan di luar rencana.

---

## 2. Status Penting Saat Ini

1. Development Map sudah disinkronkan dan menjadi roadmap fix. ✅ Selesai
2. Daftar Runut menjadi dokumen hidup/status kerja. ✅ Selesai
3. Update Task Spec menjadi instruction package fix untuk Website Update v1.47. ✅ Selesai
4. Agent Now Prompt Stage Awal sudah disusun dan digunakan. ✅ Selesai
5. Agent Now sudah menjalankan Stage Awal. ✅ Selesai
6. Repo sudah diaudit. ✅ Selesai
7. Dependency update aman sudah dilakukan. ✅ Selesai
8. Website update dasar sudah selesai. ✅ Selesai
9. Redirect audit dan Browser QA sudah selesai. ✅ Selesai
10. Hasil Website Update v1.47 sudah direview di localhost dan deployed Vercel. ✅ Selesai
11. Perubahan Website Update v1.47 sudah dicommit dan dimerge ke branch `main`. ✅ Selesai
12. The Green Print Finalization v1.50 sudah diterapkan manual. ✅ Selesai
13. Commit GitBook repo The Green Print: `5459265187fe1f1eccb4f6514d2836fb23e5d617`. ✅ Selesai
14. GitBook sudah published dan tidak ada issue. ✅ Selesai
15. QA GitBook lulus:
    - `SUMMARY.md` sesuai struktur final ✅ Selesai
    - Halaman utama terbuka ✅ Selesai
    - The Map terbuka ✅ Selesai
    - Future Proof Crops terbuka ✅ Selesai
    - Earlier Crops terbuka ✅ Selesai
    - The FAMILY dan role pages terbuka ✅ Selesai
    - BANANOW NFT terbuka ✅ Selesai
    - Embassy terbuka ✅ Selesai
    - Final Note terbuka ✅ Selesai
    - Tidak ada placeholder lama di sidebar ✅ Selesai
16. Legal Update Minimum v1.51 sudah diterapkan melalui Agent Now. ✅ Selesai
17. Privacy Policy v1.51 sudah memakai draft approved dari `DOCSNOW/UPDATE_PRIVACY_POLICY.md`. ✅ Selesai
18. Terms & Conditions v1.51 sudah memakai draft approved dari `DOCSNOW/UPDATE_TERMS_AND_CONDITIONS.md`. ✅ Selesai
19. Legal pages sudah menggunakan `Last updated: June 2026`, `land@endhonesa.com`, dan governing law `Republic of Indonesia`. ✅ Selesai
20. Lint dan build untuk Legal Update Minimum v1.51 lulus. ✅ Selesai
21. Local route QA untuk `/privacy` dan `/terms` lulus. ✅ Selesai
22. Production QA untuk `/privacy` dan `/terms` sudah dilakukan oleh Farmer dan lulus. ✅ Selesai
23. App Foundation dan Struktur Data Terpusat v1.51 sudah diterapkan melalui branch `app-foundation-v1.51`. ✅ Selesai
24. Commit App Foundation: `14cdef06f2e3f6441499489ef3dc25013a88facb`. ✅ Selesai
25. Static data/config sudah dicentralize ke `src/data/`. ✅ Selesai
26. Legal Markdown content sudah dipindahkan ke `src/content/legal/`. ✅ Selesai
27. Reusable components/helpers sudah ditambahkan:
    - `RedirectPage` ✅ Selesai
    - `PlaceholderPage` ✅ Selesai
    - `LegalMarkdown` ✅ Selesai
    - SEO helper route-aware ✅ Selesai
28. `.env.example` minimal sudah ditambahkan. ✅ Selesai
29. Lint/build dan route QA App Foundation lulus. ✅ Selesai
30. Branch `app-foundation-v1.51` sudah dipush untuk Vercel Preview. ✅ Selesai
31. Vercel Preview QA App Foundation lulus. ✅ Selesai
32. Branch sudah dimerge ke `main`. ✅ Selesai
33. Production QA App Foundation lulus:
    - Homepage preview/production aman ✅ Selesai
    - `/privacy` aman ✅ Selesai
    - `/terms` aman ✅ Selesai
    - `/oldbrands` aman ✅ Selesai
    - `/nfts`, `/skool`, `/claps`, `/news` aman ✅ Selesai
    - Redirect pages aman ✅ Selesai
    - Mobile aman ✅ Selesai
    - Desktop aman ✅ Selesai
    - Tidak ada broken route ✅ Selesai
    - Tidak ada visual drift besar ✅ Selesai
34. Na Now News MVP v1.62 sudah selesai diterapkan, dipoles, dipush untuk Vercel Preview, dimerge ke `main`, dan production QA lulus. ✅ Selesai
35. Scope Na Now News MVP v1.62 dikunci sebagai static Markdown news portal di `src/content/news/`. ✅ Selesai
36. Na Now News tidak memakai database, CMS besar, admin dashboard, auth, newsletter, comments, atau search engine pada MVP ini. ✅ Selesai
37. Route Na Now News sudah tersedia:
    - `/news` ✅ Selesai
    - `/news/[slug]` ✅ Selesai
    - `/news/category/[categorySlug]` ✅ Selesai
    - `/news/tag/[tagSlug]` ✅ Selesai
38. Article schema minimum sudah diterapkan:
    - `title` ✅ Selesai
    - `slug` ✅ Selesai
    - `excerpt` ✅ Selesai
    - `date` ✅ Selesai
    - `updated` ✅ Selesai
    - `author` ✅ Selesai
    - `status` ✅ Selesai
    - `primaryCategory` ✅ Selesai
    - `categories` ✅ Selesai
    - `tags` ✅ Selesai
    - `coverImage` ✅ Selesai
39. Article status behavior sudah diterapkan:
    - `published` ✅ Selesai
    - `draft` ✅ Selesai
    - `unlisted` ✅ Selesai
    - `archived` ✅ Selesai
40. Category taxonomy Na Now News sudah diterapkan. ✅ Selesai
41. Multi-category support dan tag pages sudah diterapkan. ✅ Selesai
42. Markdown renderer artikel sudah mendukung kebutuhan MVP. ✅ Selesai
43. Standalone media URL embed sudah ditambahkan:
    - YouTube iframe embed ✅ Selesai
    - Vimeo iframe embed ✅ Selesai
    - Instagram/Facebook/X external media card ✅ Selesai
44. Cover image display sudah dipoles:
    - card thumbnail seragam di `/news` ✅ Selesai
    - card thumbnail seragam di category pages ✅ Selesai
    - card thumbnail seragam di tag pages ✅ Selesai
    - article hero cover seragam di `/news/[slug]` ✅ Selesai
45. Artikel awal Na Now News sudah diperbaiki ke format baru, termasuk full English, kategori/tag, path image, dan copy yang lebih aman. ✅ Selesai
46. Artikel publik tentang proses pengembangan BANANOW Land sudah disusun. ✅ Selesai
47. Cover image artikel pengembangan BANANOW Land sudah dibuat dan digunakan. ✅ Selesai
48. Final local validation Na Now News sudah dilakukan oleh Farmer. ✅ Selesai
49. Final local visual QA Na Now News sudah dilakukan oleh Farmer. ✅ Selesai
50. Perubahan Na Now News polish sudah dicommit. ✅ Selesai
51. Branch Na Now News sudah dipush untuk Vercel Preview. ✅ Selesai
52. Vercel Preview QA Na Now News lulus. ✅ Selesai
53. Branch Na Now News sudah dimerge ke `main`. ✅ Selesai
54. Production QA Na Now News lulus. ✅ Selesai
55. Repo-Wide Audit & Maintenance Review v1.63 Phase 1 sudah selesai sebagai audit report-only. ✅ Selesai
56. Phase 1 audit tidak meninggalkan perubahan source, content, config, dependency, commit, push, atau merge. ✅ Selesai
57. Phase 2A Safe Maintenance Hygiene Patch sudah selesai. ✅ Selesai
58. Phase 2A mencakup:
    - Markdown optional link title parser ✅ Selesai
    - `rel="noopener noreferrer"` untuk `target="_blank"` ✅ Selesai
    - Embassy `console.log` cleanup ✅ Selesai
    - cleanup import `process.title` di Layout dan Redirect ✅ Selesai
    - typo `sfont-bold` → `font-bold` ✅ Selesai
    - tracked `.DS_Store` cleanup ✅ Selesai
59. Phase 2A sudah direview manual, dicommit, dimerge ke `main`, dan QA sukses. ✅ Selesai
60. Phase 2B Brand / Legal / Content Risk Review sudah selesai sebagai report-only. ✅ Selesai
61. Phase 2B tidak mengubah file, dependency, commit, push, atau merge. ✅ Selesai
62. Phase 2C Approved Brand / Legal / Content Patch sudah selesai. ✅ Selesai
63. Phase 2C mencakup:
    - rewrite TheHeads NFT/utility wording agar lebih aman ✅ Selesai
    - rewrite FAQ NFT wording agar tidak investment-framing ✅ Selesai
    - rewrite global site description agar tidak revenue-framing ✅ Selesai
    - update Terms Na Now News official door ke `/news/` ✅ Selesai
    - normalisasi “The Green Print” wording ✅ Selesai
    - align public taxonomy `The Brands` → `The Crops` dan `Older Brands` → `Earlier Crops` ✅ Selesai
64. Phase 2C sudah direview manual, dicommit, dimerge ke `main`, dan production QA sukses. ✅ Selesai
65. Item Sisipan 9A — Repo-Wide Audit & Maintenance Review v1.63 selesai dan tidak menghalangi tahap berikutnya. ✅ Selesai
66. Sisa temuan non-blocker dari Item Sisipan 9A dipindahkan ke backlog, dan sebagian sudah diselesaikan pada Item Sisipan 10B:
    - stale `News.tsx` cleanup ✅ Selesai di 10B
    - `api/hello.ts` cleanup ✅ Selesai di 10B
    - dependency cleanup/update ⏳ Backlog
    - DOCSNOW historical cleanup ⏳ Backlog
    - editorial byline guide ⏳ Backlog
    - marketplace-specific NFT terms ⏳ Backlog
67. Skool Now MVP v1.74 sudah discope, diimplementasikan, dicommit, dimerge ke `main`, dan production QA lulus. ✅ Selesai
68. `/skool/` sudah menjadi static landing page Skool Now dengan struktur visual mengikuti homepage BANANOW existing. ✅ Selesai
69. Skool Now memakai struktur section: `SkoolHero`, `SkoolPaths`, `SkoolPrograms`, `SkoolHowItWorks`, `SkoolPartners`, `SkoolFaq`, dan `Embassy`. ✅ Selesai
70. Skool Now mengunci `Skool Now` sebagai umbrella Crop dan `Skate Skool Now` sebagai first program. ✅ Selesai
71. Skool Now three-layer model sudah dikunci:
    - Participants / Packages, ✅ Selesai
    - Partners, ✅ Selesai
    - Sponsors / Investors. ✅ Selesai
72. CTA SkoolPaths sudah diarahkan ke Embassy/contact:
    - `Join a Program`, ✅ Selesai
    - `Become a Partner`, ✅ Selesai
    - `Sponsor or Invest`. ✅ Selesai
73. Issue build/news terkait `unknown primaryCategory: LAND` sudah diperbaiki manual oleh Farmer dan tidak lagi menjadi blocker. ✅ Selesai
74. Item Sisipan 10A — Global Navigation & Visual Polish v1.75 selesai dalam tiga sub-stage terpisah. ✅ Selesai
75. 10A-1 — NavBar Dropdown / Nested Navigation selesai:
    - primary NavBar menjadi `Land | News | Skool | Claps | NFTs`, ✅ Selesai
    - Privacy dan Terms tetap tersedia melalui footer/legal links, ✅ Selesai
    - dropdown desktop dan mobile navigation lulus QA, ✅ Selesai
    - branch dicommit, dimerge ke `main`, dan production QA lulus. ✅ Selesai
76. 10A-2 — Homepage `<TheHeads />` Visual Alignment selesai:
    - reusable `ReadMoreModal` ditambahkan, ✅ Selesai
    - deskripsi card dibuat preview dengan `... read more`, ✅ Selesai
    - CTA `Be a Sprout`, `Be a Lover`, `Be a Head`, dan `Be a Farmer` sudah sejajar, ✅ Selesai
    - branch dicommit, dimerge ke `main`, dan production QA lulus. ✅ Selesai
77. 10A-3 — News `<NewsCard />` Visual Alignment selesai:
    - title dan excerpt card dibuat lebih konsisten, ✅ Selesai
    - tags dihapus dari NewsCard list/card view tanpa menghapus tag data/routes/detail tags, ✅ Selesai
    - branch dicommit, dimerge ke `main`, dan production QA lulus. ✅ Selesai
78. Item Sisipan 10B — Skool Now & TSX Organization Cleanup v1.76 juga sudah dieksekusi, dicommit, dimerge ke `main`, dan production QA lulus. ✅ Selesai
79. 10B-1 — Skool Hero Visual & Copy Alignment selesai:
    - headline Skool Hero diperkuat menjadi `LEARN. MOVE.` / `GROW. TOGETHER.`, ✅ Selesai
    - copy hero diperpanjang agar lebih dekat dengan rhythm homepage hero, ✅ Selesai
    - branch dicommit, dimerge ke `main`, dan production QA lulus. ✅ Selesai
80. Cleanup kode usang selesai:
    - `src/components/News.tsx` dihapus, ✅ Selesai
    - `src/pages/api/hello.ts` dihapus. ✅ Selesai
81. Cleanup asset farmers selesai:
    - `src/data/farmers.ts` memakai SVG farmers, ✅ Selesai
    - PNG farmers yang sudah tidak dipakai dihapus dari `public/images/farmers`. ✅ Selesai
82. Cleanup asset redirects selesai:
    - redirect person/farmer di `src/data/redirects.ts` memakai SVG dari `public/images/farmers`, ✅ Selesai
    - asset redirect yang tidak dipakai dihapus sesuai daftar, ✅ Selesai
    - `etherscan.svg` dan `nftindonesia.svg` tetap disimpan sesuai instruksi. ✅ Selesai
83. Struktur `src/components` sudah dirapikan:
    - global/shared UI dipindah ke `src/components/ui`, ✅ Selesai
    - redirect components dipindah ke `src/components/redirect`, ✅ Selesai
    - news components dipindah ke `src/components/news`, ✅ Selesai
    - legal markdown dipindah ke `src/components/legal`, ✅ Selesai
    - land dan skool tetap punya folder domain masing-masing. ✅ Selesai
84. `src/components/skool/SkoolNow.tsx` sudah dipecah menjadi section components:
    - `SkoolHero.tsx`, ✅ Selesai
    - `SkoolPaths.tsx`, ✅ Selesai
    - `SkoolHowItWorks.tsx`, ✅ Selesai
    - `SkoolPrograms.tsx`, ✅ Selesai
    - `SkoolPartners.tsx`, ✅ Selesai
    - `SkoolFaq.tsx`, ✅ Selesai
    - `SkoolShared.tsx`. ✅ Selesai
85. Route page untuk area yang akan berkembang sudah dirapikan:
    - `src/pages/skool.tsx` → `src/pages/skool/index.tsx`, ✅ Selesai
    - `src/pages/nfts.tsx` → `src/pages/nfts/index.tsx`, ✅ Selesai
    - `src/pages/claps.tsx` → `src/pages/claps/index.tsx`, ✅ Selesai
    - route publik tetap sama: `/skool`, `/nfts`, dan `/claps`. ✅ Selesai
86. Performa image artikel dipoles dengan `loading="eager"` pada cover image di `src/components/news/NewsArticleLayout.tsx` untuk merespons warning LCP. ✅ Selesai
87. Validasi 10B lulus beberapa kali:
    - `npm run lint` passed, ✅ Selesai
    - `npm run build` passed, ✅ Selesai
    - `next-env.d.ts` sempat berubah otomatis saat build tetapi selalu direstore agar tidak ikut diff. ✅ Selesai
88. Sisa temuan setelah 10B dipindahkan ke backlog baru:
    - penggunaan `any` masih cukup banyak,
    - `eslint.config.mjs` masih mematikan `no-unused-vars`,
    - small Tailwind/class cleanup,
    - `autoComplete="false"` perlu diganti ke nilai valid seperti `off` jika memang ingin disable autocomplete,
    - `target="_target"` perlu diganti ke target standar jika masih ada,
    - Tailwind v4 CSS-first `@theme` migration ditahan sebagai future backlog terpisah karena blast radius lebih besar.
89. Tahap berikutnya adalah **Item Sisipan 10C — Type Safety, ESLint & Tailwind Cleanup v1.77**. 🔜 Berikutnya

---

## 3. Item Urutan Besar 1 — Kunci Arah dan Dokumen Kerja

Target: **Pre-v1.47**

Status: ✅ Selesai.

Output selesai:

1. Development Map dibuat.
2. Daftar Runut dibuat.
3. Update Task Spec dibuat.
4. Agent Now Prompt Stage Awal disusun.
5. Data dan asset pembaruan awal dikumpulkan.
6. Scope pembaruan awal disetujui.

Gate selesai:

- [x] Development Map tersimpan.
- [x] Daftar Runut tersimpan.
- [x] Update Task Spec tersimpan.
- [x] Data/asset awal diketahui.
- [x] Scope Agent Now disetujui.
- [x] Prompt Agent Now Stage Awal siap dan sudah digunakan.

---

## 4. Item Urutan Besar 2 — Audit Repo dan Lingkungan Kerja

Target: **v1.47-prep**

Status: ✅ Selesai.

Hasil:

1. Framework: Next.js Pages Router.
2. Package manager: npm.
3. Node/npm target: Node 24.x dan npm 11.x.
4. Route structure, component utama, static assets, dan script telah teridentifikasi.
5. Agent Now menghasilkan laporan audit.

Gate selesai:

- [x] Repo dibuka dan diaudit.
- [x] Framework teridentifikasi.
- [x] Package manager teridentifikasi.
- [x] Node/npm target diketahui.
- [x] Struktur route dan komponen utama diketahui.
- [x] Laporan audit tersedia.

---

## 5. Item Urutan Besar 3 — Dependency Update Aman

Target: **v1.47-prep**

Status: ✅ Selesai.

Hasil:

1. Dependency update aman dilakukan.
2. `npm install` lulus.
3. `npm run lint` lulus.
4. `npm run build` lulus.
5. Tidak ada breaking change yang menjadi blocker.

Backlog non-blocker:

1. `npm audit` masih melaporkan moderate issue dari internal dependency Next/PostCSS.
2. `npm audit fix --force` tidak direkomendasikan karena mengarah ke jalur breaking/downgrade.
3. Major update `@types/node` tidak diambil karena target repo masih Node 24.x.

Gate selesai:

- [x] Dependency diperiksa.
- [x] Safe dependency update dilakukan.
- [x] Install lulus.
- [x] Lint lulus.
- [x] Build lulus.
- [x] Known issue dicatat sebagai backlog.

---

## 6. Item Urutan Besar 4 — Pembaruan Website Dasar

Target: **v1.47**

Status: ✅ Selesai.

Hasil:

1. Homepage Brand Ecosystem diperbarui menjadi Na Now News, Skool Now, dan Claps.
2. Footer Brands menu diperbarui menjadi Na Now News, Skool Now, Claps, dan Older Brands.
3. Semua `Be a Head` link mengarah ke `/nfts/`.
4. `/pung` mengarah ke `https://x.com/OrdinalyPeople`.
5. `/oldbrands` dibuat.
6. Placeholder `/nfts`, `/skool`, `/claps`, dan `/news` tersedia.
7. Visual utama dan sound effect tetap dipertahankan.

Gate selesai:

- [x] Homepage active brands updated.
- [x] Footer Brands menu updated.
- [x] `Be a Head` links updated.
- [x] `/pung` redirect updated.
- [x] `/oldbrands` created.
- [x] Placeholder route tersedia.
- [x] Build dan lint lulus.

---

## 7. Item Urutan Besar 5 — Redirect Audit dan Browser QA

Target: **v1.47**

Status: ✅ Selesai.

Hasil:

1. Semua redirect route penting dicek.
2. Route QA lokal lulus.
3. Review localhost dilakukan oleh Farmer.
4. Review deployed Vercel dilakukan oleh Farmer.
5. `/twitter` redirect mismatch diperbaiki.
6. `/class` manual redirect sudah memiliki click-sound handler.
7. Perubahan sudah dicommit dan dimerge ke branch `main`.

Gate selesai:

- [x] Redirect route penting dicek.
- [x] Route QA lokal lulus.
- [x] Review localhost selesai.
- [x] Review Vercel selesai.
- [x] Commit dan merge ke `main` selesai.

---

## 8. Item Urutan Besar 6 — The Green Print Finalization

Target: **v1.50**

Status: ✅ Selesai.

Hasil:

1. The Green Print Finalization v1.50 sudah diterapkan manual.
2. Commit GitBook repo: `5459265187fe1f1eccb4f6514d2836fb23e5d617`.
3. GitBook sudah published dan tidak ada issue.
4. `SUMMARY.md` sudah sesuai struktur final.
5. Halaman utama sudah terbuka.
6. The Map sudah terbuka.
7. Future Proof Crops sudah terbuka.
8. Earlier Crops sudah terbuka.
9. The FAMILY dan role pages sudah terbuka.
10. BANANOW NFT sudah terbuka.
11. Embassy sudah terbuka.
12. Final Note sudah terbuka.
13. Tidak ada placeholder lama di sidebar.

Gate selesai:

- [x] Existing The Green Print dibagikan.
- [x] Struktur final disetujui.
- [x] Copy final selesai.
- [x] Final note ditambahkan.
- [x] Markdown final tersedia.
- [x] GitBook repo diperbarui manual.
- [x] Commit GitBook repo dibuat.
- [x] GitBook sudah published.
- [x] Link GitBook/website dicek.
- [x] QA GitBook lulus.
- [x] Hasil dibawa kembali ke obrolan induk.

Catatan:

The Green Print sekarang menjadi root/canonical document BANANOW Land dan menjadi gate yang membuka tahap berikutnya: **Legal Update Minimum v1.51**.

---

## 9. Item Urutan Besar 7 — Legal Update Minimum

Target: **v1.51**

Status: ✅ Selesai.

Hasil:

1. Privacy Policy lama sudah direview.
2. Terms & Conditions lama sudah direview.
3. Gap legal terhadap arah baru BANANOW Land sudah diidentifikasi.
4. Draft Privacy Policy v1.51 sudah disusun dan disetujui oleh Farmer.
5. Draft Terms & Conditions v1.51 sudah disusun dan disetujui oleh Farmer.
6. Draft Privacy Policy v1.51 disimpan di `DOCSNOW/UPDATE_PRIVACY_POLICY.md`.
7. Draft Terms & Conditions v1.51 disimpan di `DOCSNOW/UPDATE_TERMS_AND_CONDITIONS.md`.
8. Agent Now menerapkan legal update ke:
   - `src/pages/privacy.tsx`
   - `src/pages/terms.tsx`
9. `/privacy` sekarang merender Privacy Policy v1.51.
10. `/terms` sekarang merender Terms & Conditions v1.51.
11. Legal pages sudah menggunakan `Last updated: June 2026`.
12. Legal pages sudah menggunakan contact email `land@endhonesa.com`.
13. Terms sudah menggunakan governing law `Republic of Indonesia`.
14. Privacy Policy mencakup forms/inquiry, Web3/NFT data, AI/Claps data, News/content data, Skool/program data, analytics/cookies/local storage, third-party services, data request/contact flow, dan batasan data publik blockchain.
15. Terms mencakup Official Doors, general-vs-crop-specific rule, forms/inquiry, Web3/NFT risk, AI/Claps disclaimer, News/content disclaimer, Skool/program disclaimer, third-party links, limitation of liability, dan governing law.
16. `npm run lint` lulus.
17. `npm run build` lulus.
18. Local route QA untuk `/privacy` dan `/terms` lulus.
19. Production QA untuk `/privacy` dan `/terms` sudah dilakukan oleh Farmer dan lulus.

Gate selesai:

- [x] Existing `privacy.tsx` atau konten Privacy Policy dibagikan/diaudit.
- [x] Existing `terms.tsx` atau konten Terms & Conditions dibagikan/diaudit.
- [x] Gap legal minimum diidentifikasi.
- [x] Legal Update Minimum Task Spec disusun.
- [x] Privacy Policy v1.51 disusun dan disetujui.
- [x] Terms & Conditions v1.51 disusun dan disetujui.
- [x] Privacy Policy diperbarui.
- [x] Terms & Conditions diperbarui.
- [x] Build/lint lulus.
- [x] Browser QA legal pages lulus.
- [x] Production QA legal pages lulus.

Catatan:

Legal Update Minimum v1.51 sudah membuka gate untuk mulai **App Foundation dan Struktur Data Terpusat v1.51**.

---

## 10. Item Urutan Besar 8 — App Foundation dan Struktur Data Terpusat

Target: **v1.51**

Status: ✅ Selesai.

Hasil:

1. App Foundation dan Struktur Data Terpusat v1.51 sudah diterapkan melalui branch `app-foundation-v1.51`.
2. Branch dibuat dari latest `main`.
3. Commit lokal/push/merge: `14cdef06f2e3f6441499489ef3dc25013a88facb`.
4. Static data/config sudah dicentralize ke `src/data/`, termasuk:
   - site,
   - navigation,
   - footer,
   - brands,
   - older brands,
   - farmers,
   - redirects,
   - official links.
5. Approved legal Markdown content sudah dipindahkan dari `DOCSNOW` ke app content:
   - `src/content/legal/privacy-policy.md`
   - `src/content/legal/terms-and-conditions.md`
6. Live app source sudah tidak membaca legal Markdown dari `DOCSNOW`.
7. Reusable components/helpers sudah ditambahkan:
   - `src/components/RedirectPage.tsx`
   - `src/components/PlaceholderPage.tsx`
   - `src/components/LegalMarkdown.tsx`
   - `src/lib/seo.ts`
8. Redirect pages sudah memakai shared redirect renderer dan mengambil target dari satu sumber config.
9. Meta refresh dan manual redirect button memakai target yang sama dari redirect config.
10. Placeholder pages `/nfts`, `/skool`, `/claps`, dan `/news` sudah memakai reusable placeholder shell.
11. Legal pages `/privacy` dan `/terms` sudah memakai reusable `LegalMarkdown`.
12. SEO helper sudah dibuat dengan route-aware canonical/OG URL.
13. `.env.example` minimal sudah ditambahkan dengan `NEXT_PUBLIC_FORM_CONTACT_API=`.
14. `npm run lint` lulus.
15. `npm run build` lulus.
16. Route QA lokal lulus.
17. Branch `app-foundation-v1.51` sudah dipush untuk Vercel Preview.
18. Vercel Preview deploy sukses.
19. Preview QA lulus:
    - Homepage preview aman.
    - `/privacy` preview aman.
    - `/terms` preview aman.
    - `/oldbrands` preview aman.
    - `/nfts`, `/skool`, `/claps`, `/news` preview aman.
    - Redirect pages preview aman.
    - Mobile preview aman.
    - Desktop preview aman.
    - Tidak ada broken route.
    - Tidak ada visual drift besar.
20. Branch sudah dimerge ke `main`.
21. Production QA lulus dengan checklist yang sama seperti preview QA.

Gate selesai:

- [x] Audit struktur komponen dilakukan.
- [x] Audit data/link/redirect yang masih hardcoded dilakukan.
- [x] Scope App Foundation v1.51 dikunci.
- [x] Agent Now Prompt App Foundation Implementation v1.51 disusun.
- [x] Branch `app-foundation-v1.51` dibuat dari latest `main`.
- [x] Static data/config dicentralize ke `src/data/`.
- [x] Legal content dipindahkan ke `src/content/legal/`.
- [x] Reusable `RedirectPage` dibuat.
- [x] Reusable `PlaceholderPage` dibuat.
- [x] Reusable `LegalMarkdown` dibuat.
- [x] SEO helper route-aware dibuat.
- [x] `.env.example` minimal dibuat.
- [x] Lint lulus.
- [x] Build lulus.
- [x] Route QA lokal lulus.
- [x] Branch dipush untuk Vercel Preview.
- [x] Preview QA lulus.
- [x] Branch dimerge ke `main`.
- [x] Production QA lulus.

Catatan:

1. App Foundation v1.51 sudah membuka gate untuk mulai **Na Now News MVP v1.62**.
2. `LegalMarkdown` tetap sengaja minimal. Jika nanti konten statis memakai nested bullet, table, link Markdown kompleks, blockquote, atau footnote, renderer perlu diperluas atau diganti dengan Markdown engine yang lebih lengkap.
3. Data/config sudah lebih siap untuk modul berikutnya, tetapi fitur dinamis belum dibuat.

---

## 11. Item Urutan Besar 9 — Na Now News MVP

Target: **v1.62**

Status: ✅ Selesai.

Tujuan:

Membangun Na Now News sebagai portal artikel/news sederhana milik BANANOW Land tanpa langsung overbuild menjadi CMS besar seperti WordPress.

Scope final yang dikunci:

1. Na Now News memakai static Markdown di `src/content/news/`.
2. Tidak memakai database pada MVP ini.
3. Tidak memakai CMS besar pada MVP ini.
4. Tidak memakai admin/create/edit/publish dashboard pada MVP ini.
5. Tidak memakai auth pada MVP ini.
6. Tidak memakai comments, newsletter, atau search engine pada MVP ini.
7. Farmer melakukan migrasi artikel lama secara manual dari `.mdx` ke `.md`.
8. Agent Now tidak diminta fetch, scrape, audit, atau import dari prototype lama `news.endhonesa.com`.

Hasil:

1. Placeholder `/news` sudah diganti menjadi portal artikel static Markdown.
2. Content folder `src/content/news/` sudah tersedia.
3. Template artikel `_template.md` tersedia dan diabaikan oleh loader.
4. Article loader dan validasi schema sudah dibuat.
5. Article schema minimum sudah diterapkan:
   - `title`
   - `slug`
   - `excerpt`
   - `date`
   - `updated`
   - `author`
   - `status`
   - `primaryCategory`
   - `categories`
   - `tags`
   - `coverImage`
6. Article status behavior sudah diterapkan:
   - `published`: tampil di list/category/tag dan punya public route.
   - `draft`: tidak tampil dan tidak generate public route.
   - `unlisted`: tidak tampil di list/category/tag tetapi bisa direct route.
   - `archived`: tidak tampil di list/category/tag tetapi bisa direct route.
7. Route Na Now News sudah tersedia:
   - `/news`
   - `/news/[slug]`
   - `/news/category/[categorySlug]`
   - `/news/tag/[tagSlug]`
8. Category taxonomy sudah diterapkan:
   - Land
   - Technology
   - Web3
   - Arts
   - Community
   - Education
   - Business
   - Markets
   - Gaming
   - Opinion
   - Reviews
9. Multi-category support sudah diterapkan.
10. Tag pages otomatis berdasarkan tag artikel sudah diterapkan.
11. SEO dasar untuk list, article, category, dan tag pages sudah diterapkan.
12. Markdown renderer artikel sudah tersedia.
13. Markdown image syntax sederhana sudah digunakan:
    - `![Alt text](/images/news/file.jpg)`
14. Standalone media URL embed sudah ditambahkan:
    - YouTube URL standalone menjadi iframe embed.
    - Vimeo URL standalone menjadi iframe embed.
    - Instagram/Facebook/X URL standalone menjadi external media card.
15. Card thumbnail cover image sudah dibuat seragam memakai display crop/aspect ratio.
16. Article hero cover image sudah dibuat seragam memakai display crop/aspect ratio.
17. Cover image tidak perlu dicrop manual per file.
18. Artikel awal Na Now News sudah diperbaiki ke format baru:
    - full English,
    - kategori sesuai taxonomy,
    - tags sesuai isi,
    - path image diarahkan ke `/images/news/`,
    - copy lebih aman dan selaras BANANOW Land.
19. Artikel publik tentang proses pengembangan BANANOW Land sudah disusun.
20. Cover image artikel pengembangan BANANOW Land sudah dibuat dan digunakan.
21. Final local validation sudah dilakukan oleh Farmer.
22. Local visual QA sudah dilakukan oleh Farmer.
23. Perubahan Na Now News polish sudah dicommit.
24. Branch sudah dipush untuk Vercel Preview.
25. Vercel Preview QA lulus.
26. Branch sudah dimerge ke `main`.
27. Production QA lulus.

Gate selesai:

- [x] Scope Na Now News MVP v1.62 dikunci.
- [x] Content strategy static Markdown diputuskan.
- [x] No DB/CMS/admin/auth untuk MVP dikunci.
- [x] Article schema minimum disusun.
- [x] Category taxonomy disusun.
- [x] Multi-category support disetujui.
- [x] Tag support disetujui.
- [x] Product/Task Spec Na Now News disusun.
- [x] Prompt Agent Now implementation disusun.
- [x] Branch `news-mvp-v1.62` dibuat dari latest `main`.
- [x] `/news` list page dibuat.
- [x] `/news/[slug]` article detail dibuat.
- [x] `/news/category/[categorySlug]` dibuat.
- [x] `/news/tag/[tagSlug]` dibuat.
- [x] Static article loader dibuat.
- [x] Article validation dibuat.
- [x] Status behavior diterapkan.
- [x] SEO MVP diterapkan.
- [x] Markdown renderer tersedia.
- [x] Media embed patch diterapkan.
- [x] Cover image display consistency diterapkan.
- [x] Artikel awal diperbaiki dan digunakan.
- [x] Lint lulus.
- [x] Build lulus.
- [x] Local route QA lulus.
- [x] Local visual QA lulus.
- [x] Vercel Preview QA lulus.
- [x] Merge ke `main` selesai.
- [x] Production QA lulus.

Catatan:

1. Na Now News MVP v1.62 sudah menjadi Crop publik pertama yang hidup sebagai content/article portal.
2. Admin/create/edit/publish dashboard tetap ditahan untuk tahap berikutnya jika benar-benar diperlukan.
3. Search, comments, newsletter, dan database tetap tidak masuk MVP ini.
4. Full social embed untuk Instagram/Facebook/X belum dibuat. Pada MVP ini ketiganya tampil sebagai external media card.
5. Jika nanti dibutuhkan caption image, custom cover position, advanced Markdown, table, footnote, atau MDX-like component, perlu task spec tersendiri.
6. Na Now News sekarang membuka gate untuk lanjut ke tahap berikutnya, tetapi sebelum Skool Now disarankan melakukan **Repo-Wide Audit & Maintenance Review v1.63** sebagai Item Sisipan.

---

## 12. Item Sisipan 9A — Repo-Wide Audit & Maintenance Review

Target: **v1.63**

Status: ✅ Selesai.

Alasan disisipkan:

Na Now News MVP v1.62 sudah selesai dan sudah production QA. Sebelum masuk ke Skool Now MVP v1.74, repo perlu diperiksa menyeluruh untuk memastikan tidak ada sisa kode/tulisan yang tidak sinambung, tidak digunakan, atau berpotensi menjadi beban teknis pada tahap berikutnya.

Tujuan:

Melakukan pemeriksaan repo secara aman, bertahap, dan tidak langsung mengubah kode atau tulisan tanpa review Farmer.

Hasil Phase 1 — Audit Report Only:

1. Branch audit dibuat dari latest `main`.
2. Repo-Wide Audit & Maintenance Review v1.63 Phase 1 selesai sebagai report-only.
3. Audit memeriksa kesehatan repo, struktur route, kesinambungan copy/tulisan, konsistensi data/content, unused code/file/import/export, link internal/eksternal, legal/content wording, dependencies, security/audit warnings, serta lint/build baseline.
4. Phase 1 tidak mengubah source code, content, config, dependency, file, commit, push, atau merge.
5. Lint dan build baseline lulus.
6. Temuan diklasifikasi menjadi safe maintenance hygiene, brand/legal/content risk review, cleanup candidates, dependency/security backlog, dan postponed tasks.

Hasil Phase 2A — Safe Maintenance Hygiene Patch:

1. Phase 2A selesai sebagai patch aman.
2. Perubahan dilakukan hanya pada scope yang disetujui Farmer.
3. Perubahan mencakup:
   - fix Markdown optional link title parser,
   - penambahan `rel="noopener noreferrer"` pada `target="_blank"`,
   - penghapusan production `console.log` di Embassy,
   - cleanup import aneh `process.title` di Layout dan Redirect,
   - fix typo `sfont-bold` menjadi `font-bold`,
   - tracked `.DS_Store` cleanup.
4. Phase 2A tidak mengubah legal wording, TheHeads NFT wording, FAQ tone, byline, stale files, atau dependencies.
5. Lint lulus.
6. Build lulus.
7. Route QA lulus.
8. Manual review Farmer lulus.
9. Commit selesai.
10. Merge ke `main` selesai.
11. QA sukses.

Hasil Phase 2B — Brand / Legal / Content Risk Review:

1. Phase 2B selesai sebagai report-only.
2. Phase 2B tidak mengubah file, dependency, commit, push, atau merge.
3. Review mencakup TheHeads NFT/Web3 utility wording, Terms prototype/official door references, FAQ/public tone, public identity/byline consistency, dan brand naming consistency.
4. Temuan utama diputuskan untuk dieksekusi secara terbatas pada Phase 2C.
5. Temuan byline dan cleanup lain ditahan sebagai backlog.

Hasil Phase 2C — Approved Brand / Legal / Content Patch:

1. Phase 2C selesai sebagai patch brand/legal/content yang disetujui Farmer.
2. Perubahan dilakukan hanya pada scope yang disetujui.
3. Perubahan mencakup:
   - rewrite TheHeads NFT/utility wording agar tidak profit/revenue/benefit-entitlement framing,
   - rewrite FAQ NFT wording agar tidak investment-market framing,
   - rewrite global site description agar tidak revenue-framing,
   - update Terms Na Now News official door ke `https://land.endhonesa.com/news/`,
   - normalisasi “The Green Print” wording,
   - align taxonomy publik:
     - `The Brands` → `The Crops`,
     - `Older Brands` → `Earlier Crops`.
4. Phase 2C tidak mengubah article bylines, stale `News.tsx`, `api/hello.ts`, dependency cleanup/update, DOCSNOW cleanup, atau marketplace-specific legal terms.
5. Lint lulus.
6. Build lulus.
7. Route QA lulus.
8. Manual review Farmer lulus.
9. Commit selesai.
10. Merge ke `main` selesai.
11. Production QA sukses.

Gate selesai:

- [x] Branch audit dibuat dari latest `main`.
- [x] Audit report-only selesai tanpa mengubah file.
- [x] Temuan dan rekomendasi solusi dilaporkan.
- [x] Farmer mereview dan menyetujui subset perubahan.
- [x] Phase 2A Safe Maintenance Hygiene Patch dieksekusi.
- [x] Phase 2A lint/build/QA lulus.
- [x] Phase 2A commit dan merge ke `main` selesai.
- [x] Phase 2A QA sukses.
- [x] Phase 2B Brand / Legal / Content Risk Review report-only selesai.
- [x] Farmer mereview dan menyetujui subset perubahan Phase 2C.
- [x] Phase 2C Approved Brand / Legal / Content Patch dieksekusi.
- [x] Phase 2C lint/build/QA lulus.
- [x] Phase 2C commit dan merge ke `main` selesai.
- [x] Phase 2C production QA sukses.
- [x] Sisa temuan non-blocker dicatat sebagai backlog.
- [x] Item Sisipan 9A selesai dan tidak menghalangi Skool Now.

Backlog non-blocker dari Item Sisipan 9A:

1. Stale `News.tsx` cleanup. ✅ Selesai pada Item Sisipan 10B.
2. `api/hello.ts` cleanup. ✅ Selesai pada Item Sisipan 10B.
3. Dependency cleanup/update. ⏳ Backlog.
4. DOCSNOW historical cleanup. ⏳ Backlog.
5. Editorial byline guide. ⏳ Backlog.
6. Marketplace-specific NFT terms. ⏳ Backlog.
7. Explicit marketplace disclaimers untuk listing, minting, trading, royalties, dan third-party marketplace behavior. ⏳ Backlog.
8. Advanced Markdown/MDX-like renderer jika dibutuhkan nanti. ⏳ Backlog.

Catatan:

Item Sisipan 9A tidak menambah fitur baru. Item ini sudah membersihkan maintenance hygiene dan menyelaraskan wording publik yang paling berisiko sebelum masuk ke Skool Now MVP v1.74. Sisa backlog bukan blocker untuk Skool Now.

---

## 13. Item Urutan Besar 10 — Skool Now MVP

Target: **v1.74**

Status: ✅ Selesai.

Tujuan:

Membangun Skool Now sebagai Crop pendidikan/program BANANOW Land yang menjadi pintu awal untuk program belajar, komunitas, partner, sponsor, investor, dan future literacy.

Scope final yang dikunci:

1. `/skool/` adalah static landing page.
2. Struktur, rhythm, style, warna, font, dan section flow mengikuti homepage BANANOW existing.
3. `homepage-bananow.png` menjadi source of truth visual/layout/style.
4. `bananow-skool-now.png` hanya menjadi inspirasi content/concept.
5. Implementasi memakai komponen dan data khusus Skool.
6. Skool Now tidak mengganggu homepage existing.
7. Skool Now menjadi umbrella Crop.
8. Skate Skool Now menjadi first program.
9. SkoolPaths menjadi three-layer business model:
   - Participants / Packages,
   - Partners,
   - Sponsors / Investors.
10. Public copy boleh menyebut commercial partnership, sponsorship placement, activation package, program-level investment, Skool Now-level investment, capital structure, revenue sharing, dan negotiated agreement.
11. Public copy tidak boleh menjanjikan guaranteed profit, guaranteed return, guaranteed revenue, guaranteed benefit, guaranteed sponsor result, guaranteed investment outcome, atau public investment offering.
12. Setiap SkoolPaths card memiliki CTA ke Embassy/contact.
13. Tidak ada payment, booking, registration system, database, auth, admin dashboard, certificate, attendance tracker, program detail route, sponsor dashboard, partner login, marketplace work, atau Claps work pada v1.74.

Hasil:

1. Placeholder `/skool` sudah diganti menjadi static landing page Skool Now.
2. Page `/skool/` sudah memakai struktur:
   - `SkoolHero`,
   - `SkoolPaths`,
   - `SkoolPrograms`,
   - `SkoolHowItWorks`,
   - `SkoolPartners`,
   - `SkoolFaq`,
   - `Embassy`.
3. Data Skool Now sudah dipisahkan ke `src/data/skool.ts`.
4. Komponen Skool Now sudah dibuat di area komponen Skool.
5. `SkoolHero` menjelaskan Skool Now sebagai rumah program belajar, komunitas olahraga, real-world growth, dan future literacy.
6. `SkoolPaths` menjelaskan Participants / Packages, Partners, dan Sponsors / Investors.
7. CTA SkoolPaths sudah disiapkan:
   - `Join a Program`,
   - `Become a Partner`,
   - `Sponsor or Invest`.
8. `SkoolPrograms` menampilkan Skate Skool Now sebagai program pertama.
9. Basket Skool Now dan Futsal Skool Now dapat tampil sebagai coming soon/placeholder program.
10. `SkoolHowItWorks` menjelaskan flow:
    - Choose a Program,
    - Join & Learn,
    - Track Progress,
    - Connect & Share,
    - Make an Impact.
11. `SkoolPartners` memakai area partner yang aman dan tidak memakai logo palsu jika belum ada partner resmi.
12. `SkoolFaq` mencakup FAQ umum dan safety/guardian note.
13. Existing Embassy/contact section tetap digunakan sebagai tujuan kontak untuk participant, partner, sponsor, dan investor.
14. Issue build/news terkait `unknown primaryCategory: LAND` sudah diperbaiki manual oleh Farmer.
15. Lint dan build sudah lulus setelah perbaikan manual issue `LAND`.
16. Local QA sudah lulus.
17. Vercel Preview QA sudah lulus.
18. Branch Skool Now sudah dicommit.
19. Branch sudah dimerge manual ke `main`.
20. Production QA sudah lulus.

Gate selesai:

- [x] Existing placeholder `/skool` direview.
- [x] Scope Skool Now MVP v1.74 dikunci.
- [x] Naming program awal diputuskan.
- [x] Struktur konten landing page disetujui.
- [x] B2C/B2B/sponsor-investor layer disusun secara aman.
- [x] Data/config strategy diputuskan.
- [x] Product/Task Spec Skool Now disusun.
- [x] Prompt Agent Now implementation disusun.
- [x] Branch Skool Now dibuat dari latest `main`.
- [x] `/skool/` static landing page dibuat.
- [x] `src/data/skool.ts` dibuat.
- [x] Komponen Skool Now dibuat.
- [x] CTA ke Embassy/contact tersedia.
- [x] Lint lulus.
- [x] Build lulus.
- [x] Local QA lulus.
- [x] Vercel Preview QA lulus.
- [x] Commit selesai.
- [x] Merge manual ke `main` selesai.
- [x] Production QA lulus.
- [x] Skool Now MVP v1.74 selesai dan tidak menghalangi tahap berikutnya.

Catatan:

1. Skool Now MVP v1.74 sudah selesai sebagai static landing page.
2. Reorganisasi file `.tsx`, folder Skool Now, redirect pages, dan komponen tidak dilakukan pada v1.74.
3. Perbaikan organisasi file akan ditahan untuk **Item Sisipan 10B — Skool Now & TSX Organization Cleanup v1.76**.
4. Setelah Skool Now selesai, sebelum masuk Marketplace, perlu Item Sisipan 10A untuk memperbaiki navigasi dan tampilan global yang mulai terasa perlu setelah Homepage, Na Now News, dan Skool Now hidup.

---

## 14. Item Sisipan 10A — Global Navigation & Visual Polish

Target: **v1.75**

Status: ✅ Selesai.

Alasan disisipkan:

Setelah Homepage, Na Now News, dan Skool Now hidup, navigasi dan beberapa tampilan global perlu dipoles sebelum masuk ke BANANOW NFT Marketplace Testnet. Item ini disisipkan agar struktur menu, alignment homepage, dan alignment NewsCard lebih rapi tanpa masuk ke fitur dinamis baru.

Harus diselesaikan sebelum lanjut ke:

- Item Sisipan 10B — Skool Now & TSX Organization Cleanup v1.76.
- Setelah 10B selesai, lanjut ke Item Urutan Besar 11 — BANANOW NFT Marketplace Testnet.

Scope final:

1. NavBar dropdown / nested navigation.
2. Homepage `<TheHeads />` internal card alignment polish.
3. Reusable read-more modal untuk deskripsi card.
4. News page `<NewsCard />` internal alignment polish.
5. Remove tags dari NewsCard list/card view.
6. Tidak membuat route baru.
7. Tidak mengubah konten artikel Markdown.
8. Tidak mengubah halaman detail artikel.
9. Tidak mengorganisir ulang file Skool Now atau file `.tsx`.
10. Tidak masuk marketplace, Claps, payment, booking, database, auth, atau admin dashboard.

Eksekusi dilakukan bertahap dalam tiga branch/sub-stage terpisah:

1. 10A-1 — NavBar Dropdown / Nested Navigation.
2. 10A-2 — Homepage `<TheHeads />` Visual Alignment.
3. 10A-3 — News `<NewsCard />` Visual Alignment.

### 14.1. NavBar Dropdown / Nested Navigation

Status: ✅ Selesai.

Tujuan:

Mengubah data dan tampilan NavBar agar mendukung main menu dan submenu/dropdown.

Hasil:

1. Primary NavBar dikunci menjadi:
   - `Land`,
   - `News`,
   - `Skool`,
   - `Claps`,
   - `NFTs`.
2. `Privacy` dan `Terms` tidak lagi tampil di primary NavBar.
3. `Privacy` dan `Terms` tetap tersedia melalui footer/legal links.
4. `src/data/navigation.ts` sudah mendukung nested navigation / children submenu.
5. `Navbar` sudah mendukung dropdown pada desktop.
6. Desktop navigation mendukung hover/focus dropdown.
7. Mobile navigation tetap usable tanpa hover.
8. Klik main menu tetap menuju halaman utama menu tersebut.
9. Land submenu berisi anchor homepage:
   - Features,
   - The Crops,
   - Community,
   - Farmers,
   - F.A.Q.,
   - Embassy.
10. News submenu berisi category links:
    - LAND,
    - Technology,
    - Web3,
    - Arts,
    - Community,
    - Education,
    - Business,
    - Markets,
    - Gaming,
    - Opinion,
    - Reviews.
11. Skool submenu berisi anchor Skool Now:
    - Programs,
    - How It Works,
    - Partners,
    - F.A.Q.,
    - Embassy.
12. `/skool/programs` tidak dibuat pada v1.75.
13. Skool submenu anchor mismatch sudah diperbaiki manual oleh Farmer sebelum commit.
14. Lint dan build lulus.
15. Vercel Preview QA lulus.
16. Merge manual ke `main` selesai.
17. Production QA lulus.

Gate selesai:

- [x] Branch baru dibuat dari latest `main`.
- [x] Navigation data mendukung submenu/children.
- [x] Primary NavBar hanya menampilkan `Land | News | Skool | Claps | NFTs`.
- [x] Privacy/Terms tetap tersedia di footer/legal links.
- [x] Desktop dropdown QA lulus.
- [x] Mobile navigation QA lulus.
- [x] Main menu click tetap menuju halaman utama.
- [x] Submenu links bekerja.
- [x] Skool anchor mismatch diperbaiki.
- [x] Tidak ada route baru dibuat.
- [x] Lint lulus.
- [x] Build lulus.
- [x] Local QA lulus.
- [x] Vercel Preview QA lulus.
- [x] Merge manual ke `main` selesai.
- [x] Production QA lulus.

### 14.2. Homepage `<TheHeads />` Visual Polish

Status: ✅ Selesai.

Masalah:

Card-card pada section `<TheHeads />` sudah sejajar, tetapi komponen di dalam card belum sejajar karena panjang deskripsi berbeda. Tombol `Be a Sprout`, `Be a Lover`, `Be a Head`, dan `Be a Farmer` turun-naik karena tinggi deskripsi berbeda.

Hasil:

1. Deskripsi di setiap card dibuat sebagai preview dengan tinggi/line area yang konsisten.
2. Preview diakhiri dengan `... read more`.
3. Klik `read more` membuka modal berisi deskripsi lengkap.
4. Modal dibuat reusable di `src/components/ui/ReadMoreModal.tsx`.
5. Modal dapat ditutup dengan close button, backdrop, dan Escape key.
6. Modal memakai dialog semantics dasar dan tetap mobile-safe.
7. CTA button di dalam card sudah sejajar secara visual.
8. Card tetap mempertahankan style existing BANANOW.
9. Meaning legal/content TheHeads yang sudah dipoles pada v1.63 Phase 2C tetap dipertahankan.
10. Manual visual QA Farmer untuk desktop dan mobile lulus.
11. Lint dan build lulus.
12. Vercel Preview QA lulus.
13. Merge manual ke `main` selesai.
14. Production QA lulus.

Gate selesai:

- [x] Branch baru dibuat dari latest `main`.
- [x] Existing `<TheHeads />` direview.
- [x] Read-more modal reusable dibuat.
- [x] Preview deskripsi konsisten.
- [x] Full description tetap accessible melalui modal.
- [x] CTA `Be a Sprout`, `Be a Lover`, `Be a Head`, dan `Be a Farmer` sejajar.
- [x] Mobile modal QA lulus.
- [x] Desktop visual QA lulus.
- [x] Tidak ada NavBar work.
- [x] Tidak ada NewsCard work.
- [x] Tidak ada Skool file organization.
- [x] Tidak ada dependency baru.
- [x] Lint lulus.
- [x] Build lulus.
- [x] Local QA lulus.
- [x] Vercel Preview QA lulus.
- [x] Merge manual ke `main` selesai.
- [x] Production QA lulus.

### 14.3. News Page `<NewsCard />` Visual Polish

Status: ✅ Selesai.

Masalah:

News cards sudah sama tinggi, tetapi isi di bawah thumbnail tidak sejajar karena panjang judul, excerpt, dan jumlah tags berbeda.

Hasil:

1. `NewsCard` internal layout diperbaiki.
2. Card wrapper memakai layout yang membuat isi lebih konsisten.
3. Thumbnail tetap seragam.
4. Category/date tetap konsisten.
5. Judul dibuat line-clamp konsisten.
6. Excerpt dibuat line-clamp konsisten.
7. Tags dihapus dari NewsCard list/card view.
8. Tags tidak dihapus dari data artikel.
9. Tag routes tetap berfungsi.
10. Article detail tags tetap tampil melalui `NewsArticleLayout` jika sebelumnya memang tampil.
11. Klik thumbnail tetap membuka halaman artikel.
12. Klik title tetap membuka halaman artikel.
13. Navigation memang diputuskan tetap melalui thumbnail dan title saja, bukan seluruh card.
14. Tidak ada modal di NewsCard.
15. Tidak mengubah halaman detail artikel.
16. Tidak mengubah Markdown/frontmatter artikel.
17. Tidak mengubah taxonomy category/tag.
18. Manual visual QA Farmer untuk News list/category/tag pages lulus.
19. Lint dan build lulus.
20. Vercel Preview QA lulus.
21. Merge manual ke `main` selesai.
22. Production QA lulus.

Gate selesai:

- [x] Branch baru dibuat dari latest `main`.
- [x] Existing `NewsCard` direview.
- [x] NewsCard internal alignment lulus.
- [x] Title clamp/height konsisten.
- [x] Excerpt clamp/height konsisten.
- [x] Tags tidak tampil di NewsCard list/card view.
- [x] Tags tetap ada di data/routes/detail page.
- [x] Klik thumbnail menuju artikel.
- [x] Klik title menuju artikel.
- [x] Tidak ada NavBar work.
- [x] Tidak ada TheHeads work.
- [x] Tidak ada Skool file organization.
- [x] Tidak ada route baru dibuat.
- [x] Tidak ada dependency baru.
- [x] Tidak ada perubahan content/meaning tidak perlu.
- [x] Lint lulus.
- [x] Build lulus.
- [x] Local route QA lulus.
- [x] Vercel Preview QA lulus.
- [x] Merge manual ke `main` selesai.
- [x] Production QA lulus.

Gate selesai Item Sisipan 10A:

- [x] Scope 10A dikunci.
- [x] Eksekusi dipisah menjadi tiga branch/sub-stage.
- [x] 10A-1 NavBar Dropdown / Nested Navigation selesai.
- [x] 10A-2 Homepage `<TheHeads />` Visual Alignment selesai.
- [x] 10A-3 News `<NewsCard />` Visual Alignment selesai.
- [x] Tidak ada route baru dibuat.
- [x] Tidak ada perubahan content/meaning tidak perlu.
- [x] Tidak ada marketplace, Claps, payment, booking, database, auth, atau admin dashboard.
- [x] Lint/build/local QA lulus pada setiap sub-stage.
- [x] Vercel Preview QA lulus pada setiap sub-stage.
- [x] Merge manual ke `main` selesai pada setiap sub-stage.
- [x] Production QA lulus pada setiap sub-stage.
- [x] Item Sisipan 10A selesai dan tidak menghalangi tahap berikutnya.

Catatan:

Item Sisipan 10A adalah polish visual/navigation. Item ini tidak menjadi refactor besar. Reorganisasi file `.tsx`, Skool Now, redirect pages, dan components tetap ditahan untuk Item Sisipan 10B.

---

## 15. Item Sisipan 10B — Skool Now & TSX Organization Cleanup

Target: **v1.76**

Status: 🔜 Berikutnya.

Alasan disisipkan:

Setelah Skool Now MVP v1.74 dan visual/navigation polish v1.75 selesai, perlu tahap khusus untuk merapikan organisasi file `.tsx`, terutama file Skool Now dan file lain seperti redirect pages dan components. Item ini sengaja dipisah dari 10A agar visual polish tidak bercampur dengan refactor struktur file.

Harus diselesaikan setelah:

- Item Sisipan 10A — Global Navigation & Visual Polish v1.75.

Scope awal:

1. Review organisasi file Skool Now.
2. Review organisasi file `.tsx` di pages dan components.
3. Review redirect pages dan apakah bisa lebih rapi tanpa mengubah behavior.
4. Review komponen mana yang perlu dipindahkan, dipecah, atau disatukan.
5. Susun organization cleanup plan sebelum implementasi.
6. Jangan melakukan refactor besar tanpa report-first.
7. Jaga route behavior agar tetap sama.
8. Jaga lint/build/QA tetap lulus.

Gate sementara:

- [x] 10A selesai.
- [ ] Audit organisasi file `.tsx` dilakukan.
- [ ] Plan cleanup disusun.
- [ ] Farmer menyetujui subset perubahan.
- [ ] Implementation prompt disusun.
- [ ] Branch baru dibuat dari latest `main`.
- [ ] Cleanup dilakukan bertahap.
- [ ] Lint lulus.
- [ ] Build lulus.
- [ ] Route QA lulus.
- [ ] Vercel Preview QA lulus.
- [ ] Merge manual ke `main` selesai.
- [ ] Production QA lulus.

Catatan:

Item 10B bukan fitur baru. Ini adalah maintenance/refactor terarah agar struktur repo lebih nyaman untuk tahap Marketplace, Claps, dan modul berikutnya.

---

## 16. Item Urutan Besar 11 — BANANOW NFT Marketplace Testnet

Target: **v1.85**

Status: ⏳ Belum mulai.

Tentative sampai marketplace technical spec final.

---

## 18. Item Urutan Besar 12 — BANANOW NFT Marketplace Mainnet Controlled Launch

Target: **v1.92**

Status: ⏳ Belum mulai.

Tentative sampai testnet marketplace benar-benar lulus.

---

## 19. Item Urutan Besar 13 — Claps Alpha

Target: **v2.00**

Status: ⏳ Belum mulai.

Tentative sampai Claps Safety and Product Spec selesai.

---

## 20. Item Urutan Besar 14 — Admin Dashboard Perluasan

Target: **v2.05**

Status: ⏳ Belum mulai.

Tentative sampai minimal dua modul dinamis berjalan.

---

## 21. Item Urutan Besar 15 — BANANOW Land Operating Portal

Target: **v2.11**

Status: ⏳ Belum mulai.

Tentative sampai semua modul utama punya MVP yang stabil.

---

## 22. Aturan Item Sisipan

Item Sisipan dibuat jika terjadi sesuatu di luar rencana.

Contoh kondisi:

1. Dependency update mematahkan build.
2. Framework membutuhkan migration.
3. Route lama tidak sesuai dokumentasi.
4. Sound effect rusak setelah update.
5. Asset active brands belum tersedia.
6. Link eksternal berubah.
7. The Green Print belum siap, tetapi website butuh publish cepat.
8. Legal risk muncul sebelum fitur publik.
9. Marketplace contract lama tidak mendukung kebutuhan.
10. AI Gateway butuh setup berbeda dari dugaan.

Format:

```text
Item Sisipan X — [Nama Masalah]

Alasan disisipkan:
- ...

Harus diselesaikan sebelum lanjut ke:
- Item Urutan Besar nomor ...

Langkah penyelesaian:
1. ...
2. ...
3. ...

Gate selesai:
- [ ] ...
- [ ] ...
```

Aturan:

Item Sisipan tidak boleh menjadi alasan untuk menambah fitur baru yang tidak perlu. Item Sisipan hanya untuk membuka hambatan agar urutan besar bisa lanjut.

---

## 23. Next Action yang Paling Dekat

Next action:

**Mulai Item Sisipan 10C — Type Safety, ESLint & Tailwind Cleanup v1.77.**

Alasan:

Item Sisipan 10B — Skool Now & TSX Organization Cleanup v1.76 sudah selesai. Skool Hero sudah dipoles, struktur komponen sudah dirapikan, stale files sudah dihapus, asset farmers/redirects sudah dibersihkan, Skool components sudah dipecah, route page `/skool`, `/nfts`, dan `/claps` sudah dipindah ke folder index tanpa mengubah public route, dan production QA sudah lulus.

Namun setelah 10B masih ada sisa temuan teknis non-blocker yang lebih aman diselesaikan sebagai cleanup kecil sebelum masuk ke BANANOW NFT Marketplace Testnet.

Urutan kerja paling dekat:

1. Kunci scope Item Sisipan 10C.
2. Audit penggunaan `any` yang paling mudah dikurangi.
3. Audit unused vars/imports setelah mempertimbangkan tightening ESLint.
4. Audit small Tailwind/class cleanup.
5. Susun report/plan cleanup terlebih dahulu.
6. Farmer memilih subset perubahan yang aman.
7. Susun prompt Agent Now implementation untuk subset yang disetujui.
8. Eksekusi branch baru dari latest `main`.
9. Cleanup dilakukan kecil dan bertahap tanpa mengubah behavior route.
10. Pastikan tidak ada Tailwind CSS-first `@theme` migration pada tahap ini.
11. Pastikan tidak ada Marketplace work, Claps work, payment, booking, database, auth, atau admin dashboard.
12. Lint/build/local QA.
13. Vercel Preview QA.
14. Merge manual ke `main`.
15. Production QA.

Status next action: **Item Sisipan 10C — Type Safety, ESLint & Tailwind Cleanup v1.77 — 🔜 Berikutnya**

---

## 24. Catatan Review Terakhir

Dokumen ini sudah diperbarui setelah Item Sisipan 10B — Skool Now & TSX Organization Cleanup v1.76 selesai. 10B mencakup Skool Hero Visual & Copy Alignment, cleanup kode usang, cleanup asset farmers dan redirects, reorganisasi struktur `src/components`, split Skool components, route page folder index cleanup untuk `/skool`, `/nfts`, dan `/claps`, serta polish performa cover image artikel. Semua perubahan sudah dicommit, Vercel Preview QA lulus, merge manual ke `main` selesai, dan production QA lulus.

Status final saat ini:

1. Item Urutan Besar 1 sampai 10 sudah ✅ Selesai.
2. Item Sisipan 9A — Repo-Wide Audit & Maintenance Review v1.63 sudah ✅ Selesai.
3. Item Urutan Besar 10 — Skool Now MVP v1.74 sudah ✅ Selesai.
4. Item Sisipan 10A — Global Navigation & Visual Polish v1.75 sudah ✅ Selesai.
5. Item Sisipan 10B — Skool Now & TSX Organization Cleanup v1.76 sudah ✅ Selesai.
6. Item Sisipan 10C — Type Safety, ESLint & Tailwind Cleanup v1.77 adalah 🔜 Berikutnya.
7. Item Urutan Besar 11 dan seterusnya tetap belum mulai.
8. Na Now News sudah menjadi Crop publik aktif untuk artikel/news BANANOW Land.
9. Skool Now sudah menjadi Crop publik aktif untuk program belajar, olahraga, komunitas, partner, sponsor, dan investor inquiry.
10. Primary NavBar sudah dipoles menjadi `Land | News | Skool | Claps | NFTs` dengan dropdown/nested navigation.
11. Privacy dan Terms tetap tersedia melalui footer/legal links.
12. Homepage `<TheHeads />` sudah memakai read-more modal dan internal CTA alignment sudah rapi.
13. NewsCard list/card view sudah lebih sejajar; tags dihapus dari card tetapi data/tag routes/detail tags tetap aman.
14. Skool Hero sudah lebih dekat dengan rhythm homepage hero.
15. Struktur repo lebih rapi setelah 10B:
    - global/shared UI di `src/components/ui`,
    - redirect components di `src/components/redirect`,
    - news components di `src/components/news`,
    - legal markdown di `src/components/legal`,
    - land dan skool tetap punya folder domain masing-masing.
16. Skool components sudah dipecah menjadi section components.
17. Public routes `/skool`, `/nfts`, dan `/claps` tetap sama setelah route page dipindah ke folder index.
18. Sisa temuan non-blocker dari audit v1.63 yang sudah selesai:
    - stale `News.tsx` cleanup,
    - `api/hello.ts` cleanup.
19. Sisa backlog teknis yang diarahkan ke 10C:
    - penggunaan `any` yang masih cukup banyak,
    - unused vars/imports belum terlihat karena `no-unused-vars` masih dimatikan,
    - small Tailwind/class cleanup,
    - validasi `autoComplete` dan `target`.
20. Future backlog yang tidak masuk 10C:
    - Tailwind v4 CSS-first `@theme` migration,
    - dependency cleanup/update yang lebih besar,
    - DOCSNOW historical cleanup,
    - editorial byline guide,
    - marketplace-specific NFT terms,
    - explicit marketplace disclaimers,
    - advanced Markdown/MDX-like renderer jika dibutuhkan.
21. Dokumen ini siap menjadi pegangan untuk memulai Item Sisipan 10C sebelum masuk ke BANANOW NFT Marketplace Testnet.

---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
