# BANANOW LAND Development Map — Prof. NOTA Incorporated

Dokumen ini adalah **roadmap fix** untuk pengembangan BANANOW LAND. Dokumen ini menjadi pegangan arah besar dan tidak dimaksudkan untuk diperbarui setiap kali pekerjaan selesai.

Dokumen status yang terus diperbarui adalah **BANANOW LAND Daftar Runut**. Dokumen instruksi teknis per tahap dibuat sebagai **Task Spec** terpisah, misalnya **BANANOW LAND Update Task Spec** untuk Website Update v1.47.

BANANOW LAND diarahkan untuk berubah dari `https://land.endhonesa.com` yang awalnya berupa landing page dan redirect hub menjadi portal utama BANANOW untuk brand, komunitas, NFT, publikasi, edukasi/program, dan AI parenting.

---

## 0. Peran Tiga Dokumen Utama

### 0.1. Development Map

**DEVELOPMENT_MAP.md** adalah roadmap fix.

Fungsinya:

1. Menentukan arah besar.
2. Menentukan prinsip pengembangan.
3. Menentukan urutan stage.
4. Menentukan milestone versi.
5. Menentukan acceptance criteria global.
6. Menentukan risiko dan mitigasi.
7. Menjadi pegangan jangka panjang.

Dokumen ini tidak dipakai untuk mencatat status harian.

### 0.2. Daftar Runut

**DAFTAR_RUNUT.md** adalah dokumen hidup.

Fungsinya:

1. Mencatat status setiap item urutan besar.
2. Menandai item yang sudah selesai.
3. Menandai item yang sedang berjalan.
4. Menandai item yang ditahan.
5. Menambahkan item sisipan jika ada hambatan di luar rencana.
6. Menjadi pemandu kerja harian agar Farmer tidak tersesat.

### 0.3. Task Spec

Task Spec adalah dokumen instruksi teknis untuk satu fase tertentu.

Contoh:

1. **UPDATE_TASK_SPECS.md** untuk Website Update v1.47.
2. Task Spec berikutnya dapat dibuat untuk The Green Print Finalization, Legal Update, App Foundation, Na Now News, Skool Now, NFT Marketplace, atau Claps jika diperlukan.

Task Spec bersifat fix setelah disetujui, tetapi jumlah Task Spec dapat bertambah sesuai kebutuhan Daftar Runut.

---

## 1. Tujuan Besar

BANANOW LAND harus berkembang menjadi portal induk yang tetap mempertahankan identitas awalnya:

1. Style visual yang sudah ada.
2. Layout dan rasa halaman yang sudah dikenal.
3. Font dan warna yang sudah dipakai.
4. Suara/tombol interaktif yang muncul saat user mengklik tombol.
5. Bahasa brand yang playful, ramah, Web3-friendly, dan berbasis metafora LAND, FAMILY, plantation, crops, seeds, Farmers, Heads, Sprouts, dan Lovers.
6. Struktur landing page yang sederhana, tetapi siap berkembang menjadi aplikasi web modular.

Tujuan jangka pendek:

1. Menyehatkan repo.
2. Memperbarui isi dan navigasi.
3. Mengarsipkan brand lama ke `/oldbrands`.
4. Mengarahkan `Be a Head` ke `/nfts/`.
5. Menuntaskan The Green Print sebagai root/canonical document.

Tujuan jangka menengah:

1. Na Now News.
2. Skool Now.
3. BANANOW NFT Simple Marketplace.
4. Claps AI Parenting Chatbot.
5. Admin, auth, database, dan storage yang cukup untuk modul dinamis.

Tujuan jangka panjang:

BANANOW LAND menjadi operating portal untuk komunitas, konten, commerce, program, partner, sponsor, investor, dan produk digital BANANOW.

---

## 2. Prinsip Utama Pengembangan

### 2.1. Pertahankan Identitas BANANOW

Setiap halaman baru harus terasa berasal dari dunia yang sama dengan homepage saat ini.

Yang harus dipertahankan:

1. Gaya visual playful.
2. Tone hangat dan tidak kaku.
3. Metafora LAND dan plantation.
4. CTA yang terasa seperti ajakan masuk ke komunitas.
5. Footer, navigasi, dan komponen legal yang konsisten.
6. Efek suara tombol.

### 2.2. Jangan Mengubah Semua Sekaligus

Urutan aman:

1. Stabilkan repo.
2. Update isi dan link.
3. Finalisasi The Green Print.
4. Update legal minimum.
5. Rapikan struktur komponen.
6. Bangun halaman statis penting.
7. Bangun fitur dinamis.
8. Bangun fitur Web3, pembayaran, AI, dan dashboard admin.

### 2.3. Setiap Modul Harus Bisa Berdiri Sendiri

Jika satu modul belum selesai, modul lain tetap harus bisa berjalan.

Contoh:

1. `/news/` bisa berjalan meskipun `/claps/` belum selesai.
2. `/skool/` bisa punya landing page dulu meskipun payment belum aktif.
3. `/nfts/` bisa punya placeholder/read-only page dulu sebelum marketplace contract siap.
4. `/claps/` bisa mulai sebagai concept/alpha page sebelum chatbot publik aktif.

### 2.4. Canon dan Operasional Harus Dipisah

The Green Print adalah root/canonical document BANANOW.

Setelah final, The Green Print tidak dipakai sebagai:

1. Blog.
2. Changelog.
3. Pengumuman harian.
4. Proposal program yang sering berubah.
5. Dokumen legal operasional.
6. Dashboard project.

Pembaruan operasional masuk ke Na Now News, program page, proposal terpisah, announcement, changelog, atau landing page produk/brand baru.

### 2.5. Public Copy dan Internal Spec Harus Dipisah

Dokumen kerja internal dapat menggunakan bahasa Indonesia. Copy publik website BANANOW dapat menggunakan bahasa Inggris sesuai gaya website yang sudah ada.

---

## 3. Peta Halaman

### 3.1. Halaman Utama dan Legal

| Halaman | URL | Fungsi |
|---|---|---|
| Home | `/` | Portal utama BANANOW LAND |
| Privacy Policy | `/privacy` | Kebijakan privasi |
| Terms & Conditions | `/terms` | Syarat dan ketentuan |
| Old Brands Archive | `/oldbrands` | Arsip brand lama BANANOW; footer label dapat memakai `Older Brands` |

### 3.2. Halaman Produk/Brand Baru

| Halaman | URL | Fungsi |
|---|---|---|
| Skool Now | `/skool/` | Parent landing page untuk program edukasi/aktivitas BANANOW |
| Skool Now Program Detail | `/skool/[program]/` | Landing page per program, misalnya Skate Skool Now |
| BANANOW NFT Marketplace | `/nfts/` | Tempat membeli/menjual NFT BANANOW |
| Na Now News | `/news/` | Portal artikel/news BANANOW |
| News Article | `/news/[slug]/` | Halaman detail artikel |
| Claps | `/claps/` | AI Parenting Chatbot landing/app page |

### 3.3. Halaman Dashboard

Dashboard dibuat setelah fondasi aman.

| Halaman | URL | Fungsi |
|---|---|---|
| Admin Dashboard | `/admin/` | Pusat admin umum |
| News Admin | `/admin/news/` | Create/edit/update artikel |
| Skool Admin | `/admin/skool/` | Mengelola program, paket, pendaftaran |
| NFT Admin | `/admin/nfts/` | Mengelola marketplace, fee, collection config |
| Claps Admin | `/admin/claps/` | Mengelola model, memory, safety, library |

### 3.4. Halaman Redirect yang Tetap Ada

Route redirect yang tetap dijaga:

`/discord`, `/twitter`, `/instagram`, `/youtube`, `/vibes`, `/dermaga`, `/class`, `/inamotion`, `/delegate`, `/professor`, `/v`, `/pung`, `/zortan`, `/nota`, `/novrizky`, `/kainde`.

Catatan penting:

1. `/pung` diarahkan ke `https://x.com/OrdinalyPeople`.
2. Target redirect lain dijaga kecuali ada audit dan keputusan baru.
3. Link The Green Print tidak dipindahkan tanpa keputusan baru.

---

## 4. Urutan Stage Canonical

Urutan ini menjadi urutan fix Development Map. Status eksekusinya dicatat di Daftar Runut.

| No. | Stage | Target Versi | Output Utama |
|---|---|---|---|
| 0 | Kunci Arah dan Dokumen Kerja | Pre-v1.47 | Development Map, Daftar Runut, Task Spec awal |
| 1 | Audit Repo dan Lingkungan Kerja | v1.47-prep | Repo health diketahui |
| 2 | Dependency Update Aman | v1.47-prep | Dependency aman, build/lint lulus |
| 3 | Pembaruan Website Dasar | v1.47 | Homepage/footer/link/placeholder diperbarui |
| 4 | Redirect Audit dan Browser QA | v1.47 | Route dan redirect lulus QA |
| 5 | The Green Print Finalization | v1.50 | Root/canonical document BANANOW final |
| 6 | Legal Update Minimum | v1.51 | Privacy/Terms minimum mengikuti arah baru |
| 7 | App Foundation dan Struktur Data Terpusat | v1.51 | Layout, config, komponen reusable |
| 8 | Na Now News MVP | v1.62 | News list, article detail, admin dasar |
| 9 | Skool Now MVP | v1.74 | Skool parent page dan program pertama |
| 10 | BANANOW NFT Marketplace Testnet | v1.85 | Marketplace fixed-price testnet |
| 11 | BANANOW NFT Marketplace Mainnet Controlled Launch | v1.92 | Marketplace mainnet bertahap |
| 12 | Claps Alpha | v2.00 | AI parenting alpha dengan safety |
| 13 | Admin Dashboard Perluasan | v2.05 | Admin lintas modul |
| 14 | BANANOW LAND Operating Portal | v2.11 | Portal operasional matang |

---

## 5. Stage 0 — Kunci Arah dan Dokumen Kerja

Tujuan:

1. Mengunci Development Map.
2. Membuat Daftar Runut.
3. Membuat Task Spec awal.
4. Menentukan batas kerja Farmer dan Agent Now.
5. Menyiapkan data/asset dasar.

Output:

1. `DEVELOPMENT_MAP.md`.
2. `DAFTAR_RUNUT.md`.
3. `UPDATE_TASK_SPECS.md`.
4. Agent Now Prompt Stage Awal jika diperlukan.

---

## 6. Stage 1 — Audit Repo dan Lingkungan Kerja

Tujuan:

1. Mengidentifikasi framework.
2. Mengidentifikasi package manager.
3. Mengidentifikasi Node/npm target.
4. Mengidentifikasi route, components, assets, scripts.
5. Mengetahui kondisi build/lint awal.

Checklist:

- [ ] Repo dibuka.
- [ ] Git status dicek.
- [ ] Package manager diketahui.
- [ ] Framework diketahui.
- [ ] Route structure diketahui.
- [ ] Script build/lint/dev diketahui.
- [ ] Laporan audit dibuat.

---

## 7. Stage 2 — Dependency Update Aman

Tujuan:

1. Memastikan dependency tidak obsolete.
2. Melakukan update aman.
3. Menghindari breaking change.
4. Menjaga layout dan sound effect.

Aturan:

1. Update bertahap.
2. Hindari major update tanpa alasan.
3. Jangan menjalankan `npm audit fix --force` jika mengarah ke downgrade/breaking path.
4. Build dan lint harus lulus.

---

## 8. Stage 3 — Pembaruan Website Dasar

Scope:

1. Homepage active brands menjadi Skool Now, Claps, Na Now News.
2. Footer Brands menu menjadi Skool Now, Claps, Na Now News, Older Brands.
3. Semua `Be a Head` mengarah ke `/nfts/`.
4. `/pung` mengarah ke `https://x.com/OrdinalyPeople`.
5. `/oldbrands` dibuat.
6. Placeholder `/nfts`, `/skool`, `/claps`, `/news` boleh dibuat untuk mencegah broken link.
7. Visual, layout, font, warna, dan sound effect dipertahankan.

---

## 9. Stage 4 — Redirect Audit dan Browser QA

Checklist:

1. Homepage.
2. `/oldbrands`.
3. `/nfts`.
4. `/skool`.
5. `/claps`.
6. `/news`.
7. `/privacy`.
8. `/terms`.
9. Semua route redirect.
10. Mobile.
11. Desktop.
12. Button sound.
13. Build.
14. Lint.
15. Deployed Vercel review.

---

## 10. Stage 5 — The Green Print Finalization

Tujuan:

1. Menyelesaikan The Green Print sebagai root/canonical document BANANOW.
2. Menentukan struktur bab final.
3. Menentukan istilah final.
4. Menjelaskan old brands dan active/future direction.
5. Menjelaskan Heads, Farmers, Sprouts, Lovers, LAND, FAMILY.
6. Menjelaskan BANANOW NFT tanpa overpromise.
7. Menjelaskan relasi BANANOW dengan Web3, creative economy, education, real-world programs, dan parenting/family support.
8. Menambahkan final note.

Lokasi:

`https://bananowgp.endhonesa.com/`

Gate:

The Green Print harus selesai sebelum masuk ke:

1. Legal Update Minimum.
2. App Foundation dan Struktur Data Terpusat.
3. Na Now News MVP.
4. Skool Now MVP.
5. NFT Marketplace.
6. Claps Alpha.

---

## 11. Stage 6 — Legal Update Minimum

Tujuan:

Privacy Policy dan Terms & Conditions tidak tertinggal dari arah baru BANANOW LAND.

Minimal mencakup:

1. Website dapat berkembang menjadi layanan baru.
2. BANANOW dapat mengumpulkan data melalui forms.
3. BANANOW dapat memakai third-party infrastructure.
4. BANANOW dapat menyediakan Web3, content, program, dan AI features.
5. AI bukan nasihat medis, legal, psikologis, atau profesional.
6. Parenting chatbot tidak menggantikan profesional.
7. NFT trades membawa risiko blockchain.
8. User bertanggung jawab atas keamanan wallet.

---

## 12. Stage 7 — App Foundation dan Struktur Data Terpusat

Tujuan:

1. Membuat komponen reusable.
2. Menyentralisasi data navigation, footer, brand, redirect.
3. Menyiapkan template halaman.
4. Menyiapkan `.env.example`.
5. Menyiapkan SEO base.

Komponen penting:

1. Layout.
2. Navbar.
3. Footer.
4. Button dengan sound effect.
5. Redirect template.
6. Legal/content page template.
7. Brand card.
8. Program card.
9. Article card.
10. CTA block.
11. Form component.
12. Status badge.

---

## 13. Stage 8 — Na Now News MVP

Scope:

1. `/news/`.
2. `/news/[slug]/`.
3. `/admin/news/`.
4. Article schema.
5. Draft/published/archived.
6. Category/tag.
7. SEO article.
8. Minimal admin create/edit/publish.

Category awal:

1. LAND.
2. Community.
3. Skool Now.
4. NFTs.
5. Claps.
6. Farmers.
7. Announcement.

---

## 14. Stage 9 — Skool Now MVP

Scope:

1. `/skool/`.
2. `/skool/[program]/`.
3. Program pertama: Skate Skool Now.
4. B2C participant layer.
5. B2B partner layer.
6. Sponsor/investor layer.
7. Registration inquiry.
8. Partner inquiry.
9. Sponsor inquiry.
10. Safety/liability note.

---

## 15. Stage 10 — BANANOW NFT Marketplace Testnet

Scope MVP:

1. Base first.
2. Fixed-price listing.
3. Connect wallet.
4. List NFT.
5. Cancel listing.
6. Buy NFT.
7. Marketplace fee.
8. Royalty payout for trades inside BANANOW Marketplace.
9. Pause mechanism.
10. Testnet E2E.

Non-goals awal:

1. Auction.
2. Bid/offer.
3. Cross-chain marketplace.
4. Custodial wallet.
5. Credit card checkout.

---

## 16. Stage 11 — BANANOW NFT Marketplace Mainnet Controlled Launch

Scope:

1. Mainnet deploy.
2. Mainnet env wiring.
3. Read-only QA.
4. Small-value transaction test.
5. Controlled opening.
6. Monitoring.
7. Public announcement via Na Now News.

---

## 17. Stage 12 — Claps Alpha

Scope:

1. `/claps/`.
2. Landing page.
3. Chat UI.
4. Vercel AI Gateway.
5. Model selector.
6. Safety prompt.
7. Disclaimer.
8. Rate limit.
9. Session memory atau curated memory alpha.
10. Feedback flow.

Safety minimum:

1. No diagnosis.
2. No violence toward children.
3. No claim to replace professionals.
4. Crisis guidance.
5. Clear memory boundary.
6. Data deletion flow before public expansion.

---

## 18. Stage 13 — Admin Dashboard Perluasan

Scope:

1. Admin route consolidation.
2. Role permission.
3. News admin.
4. Skool admin.
5. NFT admin/read panel.
6. Claps admin.
7. Config viewer.
8. Audit log.

---

## 19. Stage 14 — BANANOW LAND Operating Portal

Tujuan:

BANANOW LAND tidak lagi hanya website, tetapi portal operasional.

Output:

1. News mature.
2. Skool program management.
3. Marketplace stable.
4. Claps subscription/partner layer.
5. Admin dashboard mature.
6. Legal pages product-ready.
7. Monitoring dan backup.
8. Public communication system berjalan.

---

## 20. Milestone Versi Canonical

| Versi | Nama | Ringkasan |
|---|---|---|
| Pre-v1.47 | Direction Lock | Development Map, Daftar Runut, Task Spec |
| v1.47-prep | Repo Preparation | Audit repo dan dependency update |
| v1.47 | Website Update | Homepage/footer/link/redirect/basic placeholders |
| v1.50 | The Green Print Finalization | Root/canonical document final |
| v1.51 | Legal + App Foundation | Legal minimum dan struktur app |
| v1.62 | Na Now News MVP | News CMS sederhana |
| v1.74 | Skool Now MVP | Parent page dan program pertama |
| v1.85 | NFT Marketplace Testnet | Marketplace testnet |
| v1.92 | NFT Marketplace Mainnet | Controlled mainnet launch |
| v2.00 | Claps Alpha | AI Parenting Chatbot alpha |
| v2.05 | Admin Dashboard Expansion | Admin lintas modul |
| v2.11 | Operating Portal | Portal operasional matang |

---

## 21. Acceptance Criteria Global

Sebuah stage hanya dianggap selesai jika:

1. Build sukses.
2. Lint lulus jika tersedia.
3. Route bisa dibuka.
4. Tidak ada runtime error besar.
5. Tidak ada broken internal link.
6. Mobile responsive.
7. Desktop responsive.
8. Navbar konsisten.
9. Footer konsisten.
10. Visual tidak melenceng dari BANANOW style.
11. Button sound tetap berfungsi.
12. Copy tidak placeholder kecuali sengaja ditandai.
13. Tidak ada klaim teknis/legal/finansial yang belum benar.
14. Perubahan dicatat.
15. Risiko dicatat.
16. Commit message jelas.

---

## 22. Testing Plan Global

### 22.1. Manual Browser Test

Cek:

1. Homepage.
2. `/privacy`.
3. `/terms`.
4. `/oldbrands`.
5. `/skool/`.
6. `/news/`.
7. `/nfts/`.
8. `/claps/`.
9. Semua redirect.
10. Mobile.
11. Desktop.
12. Button sound.

### 22.2. Web3 Test Nanti

Untuk `/nfts/`:

1. Connect wallet.
2. Wrong network.
3. Switch network.
4. Approve NFT.
5. List NFT.
6. Cancel listing.
7. Buy NFT.
8. Fee payout.
9. Royalty payout.
10. Transaction failure.
11. User rejection.
12. Paused marketplace.

### 22.3. AI Test Nanti

Untuk `/claps/`:

1. Normal parenting question.
2. Emotional venting.
3. Unsafe parenting request.
4. Medical/diagnosis request.
5. Crisis-like message.
6. Prompt injection.
7. Request to store sensitive child data.
8. Request for harsh punishment.
9. Data deletion question.
10. Rate limit.

---

## 23. Data dan Asset yang Perlu Disiapkan

### 23.1. Update Awal

1. Active brand data.
2. Old brand data.
3. Logo Skool Now.
4. Logo Claps.
5. Logo Na Now News.
6. Target redirect.
7. Screenshot before/after.

### 23.2. The Green Print

1. Struktur bab final.
2. Copy final.
3. Definisi canon.
4. Deskripsi semua role.
5. Deskripsi old brands.
6. Deskripsi active/future direction.
7. Final note.
8. Link internal GitBook.

### 23.3. Modul Dinamis

News, Skool, NFT Marketplace, Claps, dan Admin Dashboard masing-masing membutuhkan Product Spec atau Technical Spec tersendiri sebelum eksekusi.

---

## 24. Risiko Besar dan Pencegahan

1. Scope creep → stage dipisah dan Task Spec sempit.
2. Identity drift → pertahankan bahasa LAND dan visual playful.
3. Technical debt → App Foundation sebelum fitur besar.
4. Legal/privacy risk → legal update sebelum fitur publik.
5. Web3 financial risk → testnet dan controlled launch.
6. AI safety risk → safety prompt, disclaimer, no diagnosis, crisis guidance.
7. Dependency update risk → update bertahap dan build after update.
8. Content inconsistency → glossary dan review istilah.

---

## 25. Dokumen Turunan

Setelah Development Map ini, dokumen turunan dibuat sesuai kebutuhan Daftar Runut.

Dokumen yang sudah atau akan ada:

1. `DAFTAR_RUNUT.md` — dokumen hidup/status kerja.
2. `UPDATE_TASK_SPECS.md` — instruction package Website Update v1.47.
3. The Green Print Content Map — jika diperlukan.
4. Legal Update Task Spec — jika diperlukan.
5. App Foundation Task Spec — jika diperlukan.
6. Na Now News Product Spec.
7. Skool Now Product Spec.
8. BANANOW NFT Marketplace Technical Spec.
9. Claps Safety and Product Spec.

---

## 26. Penutup

Development Map ini adalah roadmap fix.

Jika pelaksanaan berubah karena kondisi nyata repo, perubahan status tidak dicatat di sini, tetapi dicatat di **Daftar Runut** atau **Item Sisipan**.

Development Map hanya diubah jika arah besar BANANOW LAND berubah secara fundamental.
---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
