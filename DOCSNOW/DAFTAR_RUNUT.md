# BANANOW LAND Daftar Runut

Dokumen ini adalah **dokumen hidup** untuk mencatat urutan kerja dan status eksekusi pengembangan BANANOW LAND.

Fungsinya bukan menggantikan **BANANOW LAND Development Map**, melainkan menjadi jalur eksekusi praktis: satu item selesai, baru lanjut ke item berikutnya.

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

| No. | Item Urutan Besar                                 | Target     | Status                                    |
| --- | ------------------------------------------------- | ---------- | ----------------------------------------- |
| 1   | Kunci Arah dan Dokumen Kerja                      | Pre-v1.47  | ✅ Selesai                                |
| 2   | Audit Repo dan Lingkungan Kerja                   | v1.47-prep | ✅ Selesai                                |
| 3   | Dependency Update Aman                            | v1.47-prep | ✅ Selesai                                |
| 4   | Pembaruan Website Dasar                           | v1.47      | ✅ Selesai                                |
| 5   | Redirect Audit dan Browser QA                     | v1.47      | ✅ Selesai                                |
| 6   | The Green Print Finalization                      | v1.50      | ✅ Selesai                                |
| 7   | Legal Update Minimum                              | v1.51      | ✅ Selesai                                |
| 8   | App Foundation dan Struktur Data Terpusat         | v1.51      | ✅ Selesai                                |
| 9   | Na Now News MVP                                   | v1.62      | ✅ Selesai                                |
| 9A  | Repo-Wide Audit & Maintenance Review              | v1.63      | ✅ Selesai                                |
| 10  | Skool Now MVP                                     | v1.74      | 🔜 Berikutnya                             |
| 11  | BANANOW NFT Marketplace Testnet                   | v1.85      | ⏳ Belum mulai                            |
| 12  | BANANOW NFT Marketplace Mainnet Controlled Launch | v1.92      | ⏳ Belum mulai                            |
| 13  | Claps Alpha                                       | v2.00      | ⏳ Belum mulai                            |
| 14  | Admin Dashboard Perluasan                         | v2.05      | ⏳ Belum mulai                            |
| 15  | BANANOW LAND Operating Portal                     | v2.11      | ⏳ Belum mulai                            |

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
    - `SUMMARY.md` sesuai struktur final ✅
    - Halaman utama terbuka ✅
    - The Map terbuka ✅
    - Future Proof Crops terbuka ✅
    - Earlier Crops terbuka ✅
    - The FAMILY dan role pages terbuka ✅
    - BANANOW NFT terbuka ✅
    - Embassy terbuka ✅
    - Final Note terbuka ✅
    - Tidak ada placeholder lama di sidebar ✅
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
    - `RedirectPage`
    - `PlaceholderPage`
    - `LegalMarkdown`
    - SEO helper route-aware
      ✅ Selesai
28. `.env.example` minimal sudah ditambahkan. ✅ Selesai
29. Lint/build dan route QA App Foundation lulus. ✅ Selesai
30. Branch `app-foundation-v1.51` sudah dipush untuk Vercel Preview. ✅ Selesai
31. Vercel Preview QA App Foundation lulus. ✅ Selesai
32. Branch sudah dimerge ke `main`. ✅ Selesai
33. Production QA App Foundation lulus:
    - Homepage preview/production aman ✅
    - `/privacy` aman ✅
    - `/terms` aman ✅
    - `/oldbrands` aman ✅
    - `/nfts`, `/skool`, `/claps`, `/news` aman ✅
    - Redirect pages aman ✅
    - Mobile aman ✅
    - Desktop aman ✅
    - Tidak ada broken route ✅
    - Tidak ada visual drift besar ✅
34. Na Now News MVP v1.62 sudah selesai diterapkan, dipoles, dipush untuk Vercel Preview, dimerge ke `main`, dan production QA lulus. ✅ Selesai
35. Scope Na Now News MVP v1.62 dikunci sebagai static Markdown news portal di `src/content/news/`. ✅ Selesai
36. Na Now News tidak memakai database, CMS besar, admin dashboard, auth, newsletter, comments, atau search engine pada MVP ini. ✅ Selesai
37. Route Na Now News sudah tersedia:
    - `/news` ✅
    - `/news/[slug]` ✅
    - `/news/category/[categorySlug]` ✅
    - `/news/tag/[tagSlug]` ✅
38. Article schema minimum sudah diterapkan:
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
      ✅ Selesai
39. Article status behavior sudah diterapkan:
    - `published`
    - `draft`
    - `unlisted`
    - `archived`
      ✅ Selesai
40. Category taxonomy Na Now News sudah diterapkan. ✅ Selesai
41. Multi-category support dan tag pages sudah diterapkan. ✅ Selesai
42. Markdown renderer artikel sudah mendukung kebutuhan MVP. ✅ Selesai
43. Standalone media URL embed sudah ditambahkan:
    - YouTube iframe embed ✅
    - Vimeo iframe embed ✅
    - Instagram/Facebook/X external media card ✅
44. Cover image display sudah dipoles:
    - card thumbnail seragam di `/news` ✅
    - card thumbnail seragam di category pages ✅
    - card thumbnail seragam di tag pages ✅
    - article hero cover seragam di `/news/[slug]` ✅
45. Artikel awal Na Now News sudah diperbaiki ke format baru, termasuk full English, kategori/tag, path image, dan copy yang lebih aman. ✅ Selesai
46. Artikel publik tentang proses pengembangan BANANOW LAND sudah disusun. ✅ Selesai
47. Cover image artikel pengembangan BANANOW LAND sudah dibuat dan digunakan. ✅ Selesai
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
    - Markdown optional link title parser ✅
    - `rel="noopener noreferrer"` untuk `target="_blank"` ✅
    - Embassy `console.log` cleanup ✅
    - cleanup import `process.title` di Layout dan Redirect ✅
    - typo `sfont-bold` → `font-bold` ✅
    - tracked `.DS_Store` cleanup ✅
59. Phase 2A sudah direview manual, dicommit, dimerge ke `main`, dan QA sukses. ✅ Selesai
60. Phase 2B Brand / Legal / Content Risk Review sudah selesai sebagai report-only. ✅ Selesai
61. Phase 2B tidak mengubah file, dependency, commit, push, atau merge. ✅ Selesai
62. Phase 2C Approved Brand / Legal / Content Patch sudah selesai. ✅ Selesai
63. Phase 2C mencakup:
    - rewrite TheHeads NFT/utility wording agar lebih aman ✅
    - rewrite FAQ NFT wording agar tidak investment-framing ✅
    - rewrite global site description agar tidak revenue-framing ✅
    - update Terms Na Now News official door ke `/news/` ✅
    - normalisasi “The Green Print” wording ✅
    - align public taxonomy `The Brands` → `The Crops` dan `Older Brands` → `Earlier Crops` ✅
64. Phase 2C sudah direview manual, dicommit, dimerge ke `main`, dan production QA sukses. ✅ Selesai
65. Item Sisipan 9A — Repo-Wide Audit & Maintenance Review v1.63 selesai dan tidak menghalangi tahap berikutnya. ✅ Selesai
66. Sisa temuan non-blocker dipindahkan ke backlog:
    - stale `News.tsx` cleanup
    - `api/hello.ts` cleanup
    - dependency cleanup/update
    - DOCSNOW historical cleanup
    - editorial byline guide
    - marketplace-specific NFT terms
67. Tahap berikutnya adalah **Skool Now MVP v1.74**. 🔜 Berikutnya

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

The Green Print sekarang menjadi root/canonical document BANANOW LAND dan menjadi gate yang membuka tahap berikutnya: **Legal Update Minimum v1.51**.

---

## 9. Item Urutan Besar 7 — Legal Update Minimum

Target: **v1.51**

Status: ✅ Selesai.

Hasil:

1. Privacy Policy lama sudah direview.
2. Terms & Conditions lama sudah direview.
3. Gap legal terhadap arah baru BANANOW LAND sudah diidentifikasi.
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

Membangun Na Now News sebagai portal artikel/news sederhana milik BANANOW LAND tanpa langsung overbuild menjadi CMS besar seperti WordPress.

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
   - LAND
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
    - copy lebih aman dan selaras BANANOW LAND.
19. Artikel publik tentang proses pengembangan BANANOW LAND sudah disusun.
20. Cover image artikel pengembangan BANANOW LAND sudah dibuat dan digunakan.
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

1. Stale `News.tsx` cleanup.
2. `api/hello.ts` cleanup.
3. Dependency cleanup/update.
4. DOCSNOW historical cleanup.
5. Editorial byline guide.
6. Marketplace-specific NFT terms.
7. Explicit marketplace disclaimers untuk listing, minting, trading, royalties, dan third-party marketplace behavior.
8. Advanced Markdown/MDX-like renderer jika dibutuhkan nanti.

Catatan:

Item Sisipan 9A tidak menambah fitur baru. Item ini sudah membersihkan maintenance hygiene dan menyelaraskan wording publik yang paling berisiko sebelum masuk ke Skool Now MVP v1.74. Sisa backlog bukan blocker untuk Skool Now.

---

## 13. Item Urutan Besar 10 — Skool Now MVP

Target: **v1.74**

Status: 🔜 Berikutnya.

Tujuan:

Membangun Skool Now sebagai Crop pendidikan/program BANANOW LAND yang menjadi pintu awal untuk program belajar, komunitas, partner, sponsor, dan future literacy.

Arah awal yang sudah diketahui:

1. Skool Now berada di route `/skool/`.
2. Skool Now menjadi brand/program layer BANANOW untuk pendidikan, latihan, hobi, olahraga, dan skill-building.
3. Program awal yang mungkin diprioritaskan:
   - Skate Now Skate Skool,
   - Skate Skool Now,
   - atau nama final lain yang diputuskan sebelum implementasi.
4. Skool Now dapat berkembang menjadi pola “XXXX Skool Now” untuk program olahraga, team, hobby, skill, dan community learning lain.
5. Skool Now perlu mendukung arah:
   - B2C participants/packages,
   - B2B partners,
   - investor/sponsor layer,
   - future literacy positioning.
6. Skool Now tidak boleh masuk ke sistem pembayaran, form kompleks, database, admin dashboard, atau dynamic program management sebelum MVP scope dikunci.

Persiapan yang harus dilakukan sebelum Agent Now implementation:

1. Review existing placeholder `/skool`.
2. Tentukan scope Skool Now MVP v1.74.
3. Tentukan apakah MVP cukup landing page statis dulu atau perlu program detail page.
4. Tentukan nama program pertama:
   - Skool Now,
   - Skate Now Skate Skool,
   - Skate Skool Now,
   - atau kombinasi naming final.
5. Tentukan struktur konten MVP:
   - hero,
   - what is Skool Now,
   - who it is for,
   - first program,
   - participant path,
   - partner path,
   - sponsor/investor path,
   - safety/age/guardian note jika relevan,
   - CTA/contact.
6. Tentukan data/config yang perlu masuk ke `src/data/`.
7. Tentukan apakah content statis cukup di component/data atau perlu `src/content/skool/`.
8. Susun Skool Now MVP Task Spec.
9. Susun prompt Agent Now implementation hanya setelah scope dikunci.

Gate sementara:

- [ ] Existing placeholder `/skool` direview.
- [ ] Scope Skool Now MVP v1.74 dikunci.
- [ ] Naming program awal diputuskan.
- [ ] Struktur konten landing page disetujui.
- [ ] B2C/B2B/sponsor layer disusun secara aman dan tidak overclaim.
- [ ] Data/config strategy diputuskan.
- [ ] Product/Task Spec Skool Now disusun.
- [ ] Prompt Agent Now implementation disusun.
- [ ] Jangan masuk ke payment, database, auth, admin dashboard, marketplace, atau Claps implementation sebelum scope Skool Now MVP dikunci.

Catatan:

Skool Now adalah tahap berikutnya setelah Repo-Wide Audit & Maintenance Review v1.63 selesai. Fase ini sebaiknya dimulai dari diskusi produk dan copy terlebih dahulu, bukan langsung implementasi.

---

## 14. Item Urutan Besar 11 — BANANOW NFT Marketplace Testnet

Target: **v1.85**

Status: ⏳ Belum mulai.

Tentative sampai marketplace technical spec final.

---

## 15. Item Urutan Besar 12 — BANANOW NFT Marketplace Mainnet Controlled Launch

Target: **v1.92**

Status: ⏳ Belum mulai.

Tentative sampai testnet marketplace benar-benar lulus.

---

## 16. Item Urutan Besar 13 — Claps Alpha

Target: **v2.00**

Status: ⏳ Belum mulai.

Tentative sampai Claps Safety and Product Spec selesai.

---

## 17. Item Urutan Besar 14 — Admin Dashboard Perluasan

Target: **v2.05**

Status: ⏳ Belum mulai.

Tentative sampai minimal dua modul dinamis berjalan.

---

## 18. Item Urutan Besar 15 — BANANOW LAND Operating Portal

Target: **v2.11**

Status: ⏳ Belum mulai.

Tentative sampai semua modul utama punya MVP yang stabil.

---

## 19. Aturan Item Sisipan

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

## 20. Next Action yang Paling Dekat

Next action:

**Mulai Item Urutan Besar 10 — Skool Now MVP v1.74.**

Alasan:

Na Now News MVP v1.62 sudah selesai. Repo-Wide Audit & Maintenance Review v1.63 juga sudah selesai melalui Phase 1 audit, Phase 2A safe maintenance hygiene patch, Phase 2B brand/legal/content review, dan Phase 2C approved content patch. Phase 2C sudah dicommit, dimerge ke `main`, dan production QA sukses. Dengan demikian gate untuk melanjutkan ke Skool Now MVP v1.74 sudah terbuka.

Urutan kerja paling dekat:

1. Review kondisi placeholder `/skool`.
2. Kunci scope Skool Now MVP v1.74.
3. Tentukan naming final:
   - Skool Now,
   - Skate Now Skate Skool,
   - Skate Skool Now,
   - atau struktur brand/program lain.
4. Tentukan struktur konten landing page.
5. Tentukan participant path, partner path, dan sponsor/investor path.
6. Tentukan safety/guardian note jika program menyentuh anak, keluarga, atau peserta muda.
7. Tentukan data/config strategy.
8. Susun Skool Now MVP Product/Task Spec.
9. Susun prompt Agent Now implementation.
10. Eksekusi bertahap di branch baru dari latest `main`.
11. Lint/build/local QA.
12. Vercel Preview QA.
13. Merge manual ke `main`.
14. Production QA.

Status next action: **Skool Now MVP v1.74 — 🔜 Berikutnya**

---

## 21. Catatan Review Terakhir

Dokumen ini sudah diperbarui setelah Repo-Wide Audit & Maintenance Review v1.63 selesai. Phase 1 audit, Phase 2A safe maintenance hygiene patch, Phase 2B brand/legal/content review, dan Phase 2C approved content patch sudah tuntas. Phase 2C sudah dicommit, dimerge ke `main`, dan production QA sukses.

Status final saat ini:

1. Item Urutan Besar 1 sampai 9 sudah ✅ Selesai.
2. Item Sisipan 9A — Repo-Wide Audit & Maintenance Review v1.63 sudah ✅ Selesai.
3. Item Urutan Besar 10 — Skool Now MVP v1.74 adalah 🔜 Berikutnya.
4. Item Urutan Besar 11 dan seterusnya tetap belum mulai.
5. Na Now News sudah menjadi Crop publik aktif untuk artikel/news BANANOW LAND.
6. Maintenance hygiene paling aman sudah diterapkan.
7. Wording publik paling berisiko terkait NFT/utility/revenue framing sudah diperbaiki sebelum masuk Skool Now.
8. Public taxonomy website sudah lebih selaras dengan The Green Print:
   - `The Brands` → `The Crops`,
   - `Older Brands` → `Earlier Crops`.
9. Terms sudah mengarah ke official door Na Now News saat ini di `/news/`.
10. Sisa temuan non-blocker dari audit v1.63 dipindahkan ke backlog:
    - stale `News.tsx` cleanup,
    - `api/hello.ts` cleanup,
    - dependency cleanup/update,
    - DOCSNOW historical cleanup,
    - editorial byline guide,
    - marketplace-specific NFT terms,
    - explicit marketplace disclaimers,
    - advanced Markdown/MDX-like renderer jika dibutuhkan.
11. Dokumen ini siap menjadi pegangan untuk memulai Skool Now MVP v1.74.

---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
