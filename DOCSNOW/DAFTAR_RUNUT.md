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
| 9A  | Repo-Wide Audit & Maintenance Review              | v1.63      | 🔜 Berikutnya                             |
| 10  | Skool Now MVP                                     | v1.74      | ⏳ Ditahan sampai Item Sisipan 9A selesai |
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
55. Tahap sisipan berikutnya adalah **Repo-Wide Audit & Maintenance Review v1.63** sebelum masuk ke Skool Now MVP v1.74. 🔜 Berikutnya

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

Status: 🔜 Berikutnya.

Alasan disisipkan:

Na Now News MVP v1.62 sudah selesai dan sudah production QA. Sebelum masuk ke Skool Now MVP v1.74, repo perlu diperiksa menyeluruh untuk memastikan tidak ada sisa kode/tulisan yang tidak sinambung, tidak digunakan, atau berpotensi menjadi beban teknis pada tahap berikutnya.

Tujuan:

Melakukan pemeriksaan repo secara aman tanpa langsung mengubah kode atau tulisan.

Scope pemeriksaan:

1. Kesehatan repo dan git status.
2. Struktur route dan halaman.
3. Kesinambungan copy/tulisan.
4. Konsistensi data/config di `src/data/`.
5. Konsistensi content di `src/content/`.
6. Kode yang tidak digunakan.
7. File yang tidak digunakan.
8. Import/export yang tidak digunakan.
9. Komponen yang berpotensi redundant.
10. Link internal dan eksternal yang berpotensi tidak sinambung.
11. Legal/content wording yang sudah tidak sesuai.
12. Placeholder yang seharusnya masih ada vs yang seharusnya dibersihkan.
13. Dependencies yang outdated atau perlu diperbarui.
14. Security/audit warnings.
15. Lint/build baseline.
16. Risiko perubahan sebelum Skool Now.

Aturan eksekusi:

1. Agent Now harus membuat branch baru dari latest `main`.
2. Agent Now hanya melakukan **audit dan laporan dulu**.
3. Agent Now tidak boleh mengubah kode, tulisan, dependencies, file, route, atau config pada fase audit.
4. Agent Now harus melaporkan semua temuan, tingkat risiko, dan solusi yang disarankan.
5. Farmer mereview temuan dan memilih solusi yang boleh dieksekusi.
6. Agent Now baru boleh mengeksekusi perubahan setelah Farmer memberi perintah eksplisit.
7. Perubahan dilakukan di branch baru tersebut, bukan langsung di `main`.
8. Setelah perubahan dilakukan, wajib lint/build/localhost QA.
9. Farmer melakukan manual review di localhost.
10. Commit hanya dilakukan setelah Farmer meminta.
11. Merge ke `main` dilakukan manual oleh Farmer.

Gate selesai:

- [ ] Branch audit dibuat dari latest `main`.
- [ ] Audit report-only selesai tanpa mengubah file.
- [ ] Temuan dan rekomendasi solusi dilaporkan.
- [ ] Farmer mereview dan menyetujui subset perubahan.
- [ ] Perubahan yang disetujui dieksekusi.
- [ ] Lint lulus.
- [ ] Build lulus.
- [ ] Localhost QA lulus.
- [ ] Farmer manual review lulus.
- [ ] Commit dibuat setelah Farmer meminta.
- [ ] Merge ke `main` dilakukan manual oleh Farmer.
- [ ] Production QA lulus jika branch sudah merge.

Catatan:

Item Sisipan 9A bukan tempat menambah fitur baru. Item ini hanya untuk maintenance, cleanup, dependency review, dan kesinambungan repo sebelum lanjut ke Skool Now.

---

## 13. Item Urutan Besar 10 — Skool Now MVP

Target: **v1.74**

Status: ⏳ Ditahan sampai Item Sisipan 9A selesai.

Tentative sampai Repo-Wide Audit & Maintenance Review v1.63 selesai, atau sampai Farmer memutuskan Skool Now didahulukan.

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

**Mulai Item Sisipan 9A — Repo-Wide Audit & Maintenance Review v1.63.**

Alasan:

Na Now News MVP v1.62 sudah selesai, sudah dipush untuk Vercel Preview, preview QA lulus, sudah dimerge ke `main`, dan production QA lulus. Sebelum masuk ke Skool Now MVP v1.74, repo perlu diaudit menyeluruh agar tahap berikutnya tidak membawa sisa masalah teknis, copywriting, dependency, atau kesinambungan struktur dari tahap sebelumnya.

Urutan kerja paling dekat:

1. Buat branch baru dari latest `main`.
2. Lakukan audit report-only tanpa mengubah file.
3. Periksa kode, tulisan, struktur route, data/config, content, dependency, dan build baseline.
4. Laporkan semua temuan, risiko, dan solusi.
5. Tunggu review dan keputusan Farmer.
6. Eksekusi hanya perubahan yang disetujui Farmer.
7. Jalankan lint/build/localhost QA.
8. Farmer melakukan review manual di localhost.
9. Commit hanya jika Farmer meminta.
10. Merge ke `main` dilakukan manual oleh Farmer.
11. Jika Item Sisipan 9A selesai, lanjut ke **Item Urutan Besar 10 — Skool Now MVP v1.74**.

Status next action: **Repo-Wide Audit & Maintenance Review v1.63 — 🔜 Berikutnya**

---

## 21. Catatan Review Terakhir

Dokumen ini sudah diperbarui setelah Na Now News MVP v1.62 selesai diterapkan, dipoles, dipush untuk Vercel Preview, lulus Preview QA, dimerge ke `main`, dan lulus Production QA.

Status final saat ini:

1. Item Urutan Besar 1 sampai 9 sudah ✅ Selesai.
2. Item Sisipan 9A — Repo-Wide Audit & Maintenance Review v1.63 adalah 🔜 Berikutnya.
3. Item Urutan Besar 10 — Skool Now MVP v1.74 ditahan sampai Item Sisipan 9A selesai atau sampai Farmer memutuskan lain.
4. Item Urutan Besar 11 dan seterusnya tetap belum mulai.
5. Known issue dependency/security dari Website Update v1.47 tetap dicatat sebagai backlog dan bukan blocker sampai audit v1.63 memberikan rekomendasi baru.
6. Na Now News sudah menjadi Crop publik aktif untuk artikel/news BANANOW LAND.
7. Admin/create/edit/publish dashboard untuk Na Now News belum masuk MVP dan tetap ditahan.
8. Search, comments, newsletter, CMS besar, dan database untuk News belum dibuat.
9. Full social embed untuk Instagram/Facebook/X belum dibuat; MVP hanya memakai external media card.
10. App Foundation, `src/data/`, dan `src/content/` sekarang menjadi dasar yang dipakai untuk tahap berikutnya.
11. Dokumen ini siap menjadi pegangan untuk memulai Repo-Wide Audit & Maintenance Review v1.63.

---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
