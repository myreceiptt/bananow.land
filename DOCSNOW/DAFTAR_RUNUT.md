# BANANOW LAND Daftar Runut

Dokumen ini adalah daftar urutan kerja untuk pengembangan BANANOW LAND.

Fungsinya bukan menggantikan **BANANOW LAND Development Map**, melainkan menjadi jalur eksekusi yang lebih praktis: satu item selesai, baru lanjut ke item berikutnya.

Dokumen ini juga membedakan mana yang perlu dilakukan oleh para Farmer dan mana yang nanti perlu dieksekusi oleh Agent Now versi berapa pun.

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

Aturan utamanya:

1. Jangan melompati Item Urutan Besar.
2. Jangan memberi prompt Agent Now sebelum item persiapan manualnya selesai.
3. Jangan masuk ke fitur dinamis sebelum update dasar website selesai.
4. Jangan masuk ke marketplace sebelum contract/spec marketplace final.
5. Jangan masuk ke Claps publik sebelum safety, privacy, dan memory policy jelas.
6. Jika terjadi masalah di luar rencana, sisipkan Item Urutan Besar baru sebagai “Item Sisipan” sebelum lanjut.

---

## 1. Peta Urutan Besar

### 1.1. Urutan Besar Induk

1. **Kunci Arah dan Dokumen Kerja**
   - Target: Pre-v1.0
   - Status: harus diselesaikan sebelum Agent Now.

2. **Audit Repo dan Lingkungan Kerja**
   - Target: v1.0 preparation
   - Status: akan dieksekusi dengan bantuan Agent Now setelah prompt siap.

3. **Dependency Update Aman**
   - Target: v1.0 preparation
   - Status: Agent Now-assisted, tapi perlu keputusan manual jika ada breaking change.

4. **Pembaruan Website Dasar**
   - Target: v1.47
   - Isi: homepage, footer, Be a Head link, Pung redirect, oldbrands.

5. **Redirect Audit dan Browser QA v1**
   - Target: v1.47
   - Isi: cek semua link dan route lama/baru.

6. **The Green Print Finalization**
   - Target: v1.47 / v1.51, tergantung kesiapan konten.
   - Bisa berjalan paralel secara konten, tetapi tidak boleh mengganggu update website dasar.

7. **Legal Update Minimum**
   - Target: v1.51
   - Isi: privacy/terms minimum untuk arah fitur baru.

8. **App Foundation dan Struktur Data Terpusat**
   - Target: v1.51
   - Isi: komponen reusable, data config, layout, template.

9. **Na Now News MVP**
   - Target: v1.62
   - Isi: news list, article detail, admin sederhana.

10. **Skool Now MVP**
    - Target: v1.74
    - Isi: parent page, program detail, Skate Skool Now, forms/inquiry.

11. **BANANOW NFT Marketplace Testnet**
    - Target: v1.85
    - Isi: marketplace contract testnet dan frontend testnet.

12. **BANANOW NFT Marketplace Mainnet Controlled Launch**
    - Target: v1.92
    - Isi: mainnet, controlled opening, fee/royalty validation.

13. **Claps Alpha**
    - Target: v2.00
    - Isi: landing, chat UI, AI Gateway, safety prompt, memory alpha.

14. **Admin Dashboard Perluasan**
    - Target: v2.00 preparation / v2.11
    - Isi: admin lintas modul.

15. **BANANOW LAND Operating Portal v2.0**
    - Target: v2.11
    - Isi: semua modul matang dan terhubung.

---

### 1.2. Status Eksekusi Saat Ini

| No. | Item Urutan Besar                                 | Target                    | Status                                    |
| --- | ------------------------------------------------- | ------------------------- | ----------------------------------------- |
| 1   | Kunci Arah dan Dokumen Kerja                      | Pre-v1.0                  | ✅ Selesai                                |
| 2   | Audit Repo dan Lingkungan Kerja                   | v1.0 preparation          | ✅ Selesai                                |
| 3   | Dependency Update Aman                            | v1.0 preparation          | ✅ Selesai                                |
| 4   | Pembaruan Website Dasar                           | v1.47                     | ✅ Selesai                                |
| 5   | Redirect Audit dan Browser QA                     | v1.47                     | ✅ Selesai                                |
| 6   | The Green Print Finalization                      | v1.47 / v1.51             | 🔜 Berikutnya                             |
| 7   | Legal Update Minimum                              | v1.51                     | ⏳ Ditahan sampai The Green Print selesai |
| 8   | App Foundation dan Struktur Data Terpusat         | v1.51                     | ⏳ Ditahan sampai The Green Print selesai |
| 9   | Na Now News MVP                                   | v1.62                     | ⏳ Belum mulai                            |
| 10  | Skool Now MVP                                     | v1.74                     | ⏳ Belum mulai                            |
| 11  | BANANOW NFT Marketplace Testnet                   | v1.85                     | ⏳ Belum mulai                            |
| 12  | BANANOW NFT Marketplace Mainnet Controlled Launch | v1.92                     | ⏳ Belum mulai                            |
| 13  | Claps Alpha                                       | v2.00                     | ⏳ Belum mulai                            |
| 14  | Admin Dashboard Perluasan                         | v2.00 preparation / v2.11 | ⏳ Belum mulai                            |
| 15  | BANANOW LAND Operating Portal v2.0                | v2.11                     | ⏳ Belum mulai                            |

Keterangan status:

- ✅ Selesai: item sudah tuntas dan tidak menghalangi item berikutnya.
- 🟡 Sedang berjalan: item sedang dikerjakan atau sedang menunggu hasil dari cabang obrolan.
- 🔜 Berikutnya: item terdekat yang akan dikerjakan.
- ⏳ Belum mulai: belum dieksekusi.
- ⏳ Ditahan: belum boleh dimulai karena menunggu gate sebelumnya selesai.
- 🧩 Item Sisipan: item tambahan yang muncul karena hambatan di luar rencana.

Status penting saat ini:

1. Development Map sudah selesai dan tersimpan di repo.
2. Daftar Runut sudah selesai dan tersimpan di repo.
3. Update Task Spec sudah selesai dan tersimpan di repo.
4. Agent Now Prompt Stage Awal sudah selesai.
5. Agent Now sudah menjalankan Stage Awal.
6. Repo sudah diaudit.
7. Dependency update aman sudah dilakukan.
8. Website update dasar sudah selesai.
9. Redirect audit dan Browser QA sudah selesai.
10. Hasil sudah direview di localhost dan deployed Vercel.
11. Perubahan sudah dicommit dan dimerge ke branch `main`.
12. Tahap berikutnya adalah The Green Print Finalization.
13. The Green Print Finalization akan dikerjakan di cabang obrolan terpisah.
14. Hasil final The Green Print akan dibawa kembali ke obrolan induk ini dalam bentuk Markdown.

---

## 2. Item Urutan Besar 1 — Kunci Arah dan Dokumen Kerja

### 2.1. Target Milestone

Pre-v1.0

### 2.2. Tujuan

Menyelesaikan semua pegangan kerja sebelum Agent Now mulai menyentuh repo.

Item ini mencegah eksekusi teknis dilakukan terlalu cepat tanpa arah yang jelas.

### 2.3. Status Agent Now

Tidak perlu Agent Now.

Dikerjakan oleh Farmer bersama ChatGPT.

### 2.4. Status Item yang Harus Dieksekusi

| Sub-item | Nama Item                                                            | Status     |
| -------- | -------------------------------------------------------------------- | ---------- |
| 2.4.1    | Simpan Development Map                                               | ✅ Selesai |
| 2.4.2    | Simpan Daftar Runut                                                  | ✅ Selesai |
| 2.4.3    | Tentukan Mana yang Dikerjakan Sendiri dan Mana yang Dengan Agent Now | ✅ Selesai |
| 2.4.4    | Kumpulkan Data dan Asset untuk Pembaruan Awal                        | ✅ Selesai |
| 2.4.5    | Putuskan Strategi The Green Print                                    | ✅ Selesai |
| 2.4.6    | Tentukan Scope Pembaruan Awal yang Boleh Diberikan ke Agent Now      | ✅ Selesai |
| 2.4.7    | Susun BANANOW LAND Update Task Spec                                  | ✅ Selesai |
| 2.4.8    | Susun Agent Now Prompt untuk Stage Awal                              | ✅ Selesai |

Catatan status:

Item Urutan Besar 1 sudah bisa dinyatakan ✅ Selesai.

Agent Now Prompt Stage Awal sudah disusun, digunakan, dan Agent Now sudah menjalankan stage awal berdasarkan prompt tersebut.

### 2.4. Item yang Harus Dieksekusi

#### 2.4.1. Simpan Development Map

Status: ✅ Selesai.

Yang harus dipastikan:

1. **BANANOW LAND Development Map — Part 1** sudah tersimpan.
2. **BANANOW LAND Development Map — Part 2** sudah tersimpan.
3. Keduanya bisa dijadikan rujukan.
4. Tidak perlu diedit dulu kecuali ada perubahan arah besar.

Gate selesai:

- [x] Part 1 tersimpan.
- [x] Part 2 tersimpan.
- [x] Dokumen bisa dibaca ulang.

#### 2.4.2. Simpan Daftar Runut

Status: ✅ Selesai.

Yang harus dipastikan:

1. Daftar Runut ini menjadi panduan eksekusi.
2. Tidak semua item langsung di-breakdown.
3. Breakdown hanya dilakukan ketika akan masuk ke item tersebut.
4. Jika ada kejadian di luar rencana, item sisipan boleh dibuat.

Gate selesai:

- [x] Daftar Runut tersimpan.
- [x] Urutan besar disetujui.
- [x] Item Urutan Besar 1 dipahami.

#### 2.4.3. Tentukan Mana yang Dikerjakan Sendiri dan Mana yang Dengan Agent Now

Prinsip:

Dikerjakan sendiri:

1. Menentukan arah brand.
2. Menentukan copy final.
3. Menentukan asset yang dipakai.
4. Menentukan link final.
5. Menentukan data yang benar.
6. Menentukan legal/safety boundary.
7. Review hasil kerja.
8. Keputusan production deploy.

Dikerjakan dengan Agent Now:

1. Audit repo.
2. Update dependency.
3. Edit kode.
4. Membuat route baru.
5. Membuat komponen.
6. Membuat data config.
7. Menjalankan build/lint/test.
8. Membuat laporan teknis.

Gate selesai:

- [x] Daftar kerja manual dipahami.
- [x] Daftar kerja Agent Now dipahami.
- [x] Tidak ada ekspektasi bahwa Agent Now mengambil keputusan brand/legal utama.

#### 2.4.4. Kumpulkan Data dan Asset untuk Pembaruan Awal

Ini harus disiapkan sebelum prompt Agent Now Stage 0/Stage 1.

Data/asset minimum:

1. Logo Skool Now.
2. Logo Claps.
3. Logo Na Now News jika akan berubah.
4. Deskripsi singkat Skool Now.
5. Deskripsi singkat Claps.
6. Deskripsi singkat Na Now News.
7. Copy final halaman `/oldbrands`.
8. Deskripsi enam old brands.
9. Link final enam old brands.
10. Target baru Mr. Pung: `@OrdinalyPeople`.
11. Link final `/nfts/` untuk semua tombol `Be a Head`.
12. Daftar redirect yang harus diaudit.
13. Screenshot homepage sekarang sebagai before state.
14. Screenshot footer sekarang sebagai before state.

Gate selesai:

- [x] Logo/asset aktif tersedia atau diputuskan memakai placeholder lama dulu.
- [x] Deskripsi singkat tiga active brands tersedia.
- [x] Copy `/oldbrands` tersedia.
- [x] Target link final tersedia.
- [x] Screenshot before tersedia.

#### 2.4.5. Putuskan Strategi The Green Print

The Green Print penting, tetapi tidak harus memblokir semua coding awal jika coding awal hanya mengubah link dan menambahkan `/oldbrands`.

Keputusan yang harus dibuat:

1. Apakah The Green Print harus final sebelum update website dasar production?
2. Atau website dasar boleh diupdate dulu, sementara The Green Print diselesaikan paralel?
3. Apakah istilah publiknya memakai “canonical root document”, “root document”, “Green Print”, atau istilah lain?
4. Apakah analogi “kitab suci” hanya menjadi pemahaman internal dan tidak dipakai di copy publik?

Rekomendasi:

Website dasar boleh diupdate dulu, tetapi The Green Print harus minimal “ready enough” sebelum traffic diarahkan besar-besaran.

Gate selesai:

- [x] Strategi The Green Print diputuskan.
- [x] Istilah publik diputuskan.
- [x] Tidak ada copy publik yang terlalu sensitif.

#### 2.4.6. Tentukan Scope Pembaruan Awal yang Boleh Diberikan ke Agent Now

Scope yang boleh:

1. Audit repo.
2. Dependency update aman.
3. Update semua `Be a Head` ke `/nfts/`.
4. Update homepage Brand Ecosystem menjadi Skool Now, Claps, Na Now News.
5. Update footer Brands menu menjadi Skool Now, Claps, Na Now News, The Old Brands.
6. Update `/pung` redirect ke akun baru.
7. Buat halaman `/oldbrands`.
8. Audit redirect.
9. Build/test.

Scope yang tidak boleh:

1. News CMS.
2. Database.
3. Auth.
4. Payment.
5. Wallet connect.
6. Marketplace contract.
7. AI Gateway.
8. Claps chatbot.
9. Skool registration system.
10. Admin dashboard.

Gate selesai:

- [x] Scope boleh disetujui.
- [x] Scope tidak boleh disetujui.
- [x] Batasan ini siap dimasukkan ke prompt Agent Now.

#### 2.4.7. Susun BANANOW LAND Update Task Spec

Status: ✅ Selesai.

Ini adalah dokumen turunan berikutnya.

Isi minimal:

1. Objective.
2. Non-goals.
3. Exact changes.
4. File discovery instruction.
5. Route list.
6. Data update instruction.
7. UI preservation instruction.
8. Testing commands.
9. Manual QA checklist.
10. Report format.

Status Agent Now:

Belum Agent Now.

Ini masih dokumen instruksi untuk Agent Now.

Gate selesai:

- [x] BANANOW LAND Update Task Spec selesai.
- [x] Scope jelas.
- [x] Non-goals jelas.
- [x] Testing jelas.
- [x] Report format jelas.

#### 2.4.8. Susun Agent Now Prompt untuk Stage Awal

Status: ✅ Selesai.

Prompt Agent Now dibuat setelah Update Task Spec selesai.

Prompt harus memuat:

1. Peran Agent Now.
2. Repo context.
3. Scope kerja.
4. Non-goals.
5. Instruksi audit dulu.
6. Instruksi jangan ubah visual besar.
7. Instruksi jaga sound effect.
8. Instruksi buat report sebelum/sesudah.
9. Instruksi build/lint/test.
10. Instruksi commit discipline jika diminta.

Gate selesai:

- [x] Prompt Agent Now Stage Awal selesai.
- [x] Prompt tidak terlalu luas.
- [x] Prompt tidak meminta fitur besar.
- [x] Prompt siap ditempel ke Agent Now.

### 2.5. Testing untuk Item Urutan Besar 1

Karena item ini belum menyentuh repo, testing-nya adalah review dokumen.

Checklist review:

- [x] Apakah urutan besar sudah masuk akal?
- [x] Apakah item pertama sudah cukup jelas?
- [x] Apakah data/asset awal sudah diketahui?
- [x] Apakah batas Agent Now sudah jelas?
- [x] Apakah ada item yang masih membingungkan?

### 2.6. Gate Selesai Item Urutan Besar 1

Item Urutan Besar 1 dianggap selesai jika:

- [x] Development Map Part 1 dan Part 2 tersimpan.
- [x] Daftar Runut disetujui.
- [x] Data/asset pembaruan awal diketahui.
- [x] Scope Agent Now pembaruan awal disetujui.
- [x] BANANOW LAND Update Task Spec sudah disusun.
- [x] Prompt Agent Now Stage Awal sudah siap.

Status akhir:

Item Urutan Besar 1 — Kunci Arah dan Dokumen Kerja sudah ✅ Selesai.

Setelah semua checklist di atas selesai, baru lanjut ke:

**Item Urutan Besar 2 — Audit Repo dan Lingkungan Kerja.**

---

## 3. Item Urutan Besar 2 — Audit Repo dan Lingkungan Kerja

### 3.1. Target Milestone

v1.0 preparation

### 3.2. Status Breakdown

✅ Selesai.

Audit repo dan lingkungan kerja sudah dilakukan oleh Agent Now. Hasil audit menunjukkan repo menggunakan Next.js Pages Router, npm, Node 24.x, npm 11.x, dan build/lint lulus.

### 3.3. Gambaran Isi

Item ini mencakup:

1. Buka repo di VS Code.
2. Pastikan branch kerja.
3. Cek package manager.
4. Cek Node version.
5. Cek framework.
6. Cek struktur route.
7. Cek komponen navbar/footer/button sound.
8. Cek lokasi data brand/link/redirect.
9. Jalankan install.
10. Jalankan dev.
11. Jalankan build.
12. Jalankan lint/typecheck jika ada.
13. Buat laporan kondisi awal.

### 3.4. Gate Selesai

Item ini sudah ✅ Selesai.

Gate selesai:

- [x] Repo dibuka dan diaudit.
- [x] Framework teridentifikasi sebagai Next.js Pages Router.
- [x] Package manager teridentifikasi sebagai npm.
- [x] Node/npm target diketahui.
- [x] Struktur route, komponen utama, asset, dan script teridentifikasi.
- [x] Agent Now menghasilkan laporan audit.

---

## 4. Item Urutan Besar 3 — Dependency Update Aman

### 4.1. Target Milestone

v1.0 preparation

### 4.2. Status Breakdown

✅ Selesai.

Dependency update aman sudah dilakukan oleh Agent Now. Build dan lint lulus. Tidak ada breaking change yang menjadi blocker.

Known issue `npm audit` dari internal dependency Next/PostCSS dicatat sebagai backlog dan bukan blocker karena `npm audit fix --force` tidak direkomendasikan.

### 4.3. Gambaran Isi

Item ini mencakup:

1. Catat dependency lama.
2. Identifikasi dependency deprecated/obsolete.
3. Update patch/minor dulu.
4. Hindari major update tanpa alasan.
5. Jalankan build setelah update.
6. Cek layout dan sound effect.
7. Jika terjadi breaking change, buat Item Sisipan.

### 4.4. Gate Selesai

Item ini sudah ✅ Selesai.

Gate selesai:

- [x] Dependency diperiksa.
- [x] Safe dependency update dilakukan.
- [x] `npm install` lulus.
- [x] `npm run lint` lulus.
- [x] `npm run build` lulus.
- [x] Tidak ada breaking change yang menjadi blocker.
- [x] Known security/dependency issue dicatat sebagai backlog.

---

## 5. Item Urutan Besar 4 — Pembaruan Website Dasar

### 5.1. Target Milestone

v1.47

### 5.2. Status Breakdown

✅ Selesai.

Homepage, footer, `Be a Head` link, `/pung` redirect, `/oldbrands`, dan placeholder `/nfts`, `/skool`, `/claps`, `/news` sudah diperbarui.

### 5.3. Gambaran Isi

Item ini mencakup:

1. Update `Be a Head` links ke `/nfts/`.
2. Update homepage Brand Ecosystem.
3. Update footer Brands menu.
4. Update `/pung` target.
5. Buat `/oldbrands`.
6. Pastikan visual tetap sama.
7. Pastikan sound effect tetap aktif.
8. Build/test.

### 5.4. Gate Selesai

Item ini sudah ✅ Selesai.

Gate selesai:

- [x] Homepage Brand Ecosystem diperbarui.
- [x] Footer Brands menu diperbarui.
- [x] Semua `Be a Head` link mengarah ke `/nfts/`.
- [x] `/pung` mengarah ke `https://x.com/OrdinalyPeople`.
- [x] `/oldbrands` dibuat.
- [x] `/nfts`, `/skool`, `/claps`, dan `/news` placeholder tersedia.
- [x] Visual utama tetap dipertahankan.
- [x] Sound effect tetap dipertahankan.
- [x] Build dan lint lulus.

---

## 6. Item Urutan Besar 5 — Redirect Audit dan Browser QA

### 6.1. Target Milestone

v1.47

### 6.2. Status Breakdown

✅ Selesai.

Redirect audit dan browser QA sudah dilakukan. Route penting lulus di localhost dan deployed Vercel.

### 6.3. Gambaran Isi

Item ini mencakup:

1. Cek semua halaman redirect.
2. Cek semua tombol manual redirect.
3. Cek auto redirect jika ada.
4. Cek target external link.
5. Cek internal link.
6. Cek mobile responsive.
7. Cek desktop responsive.
8. Cek console error.
9. Cek sound effect.
10. Cek production/preview domain.

### 6.4. Gate Selesai

Item ini sudah ✅ Selesai.

Gate selesai:

- [x] Semua redirect route penting dicek.
- [x] Route QA lokal lulus.
- [x] Review localhost dilakukan oleh Farmer.
- [x] Review deployed Vercel dilakukan oleh Farmer.
- [x] `/twitter` redirect mismatch diperbaiki.
- [x] `/class` manual redirect sudah memiliki click-sound handler.
- [x] Perubahan sudah dicommit dan dimerge ke branch `main`.

---

## 7. Item Urutan Besar 6 — The Green Print Finalization

### 7.1. Target Milestone

v1.47 / v1.51

### 7.2. Status Breakdown

🔜 Berikutnya.

The Green Print Finalization akan dikerjakan di cabang obrolan terpisah. Hasil finalnya akan dibawa kembali ke obrolan induk dalam bentuk Markdown.

### 7.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Susun The Green Print Content Map.
2. Tentukan daftar bab final.
3. Tulis copy final.
4. Review tone BANANOW.
5. Pastikan old brands dan active direction dijelaskan.
6. Publish/finalize di GitBook.
7. Cek semua link dari BANANOW LAND.

### 7.4. Gate Sementara

Selesai jika The Green Print siap menjadi rujukan publik utama BANANOW.

---

## 8. Item Urutan Besar 7 — Legal Update Minimum

### 8.1. Target Milestone

v1.51

### 8.2. Status Breakdown

⏳ Ditahan sampai The Green Print selesai.

Detail breakdown dilakukan setelah The Green Print Finalization selesai dan hasil finalnya dibawa kembali ke obrolan induk.

### 8.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Review Privacy lama.
2. Review Terms lama.
3. Tambahkan arah fitur baru secara umum.
4. Tambahkan Web3/NFT risk note minimum.
5. Tambahkan AI disclaimer minimum.
6. Tambahkan forms/data collection note minimum.
7. Build/test.

### 8.4. Gate Sementara

Selesai jika legal pages tidak lagi terlalu tertinggal dari arah pengembangan.

---

## 9. Item Urutan Besar 8 — App Foundation dan Struktur Data Terpusat

### 9.1. Target Milestone

v1.51

### 9.2. Status Breakdown

⏳ Ditahan sampai The Green Print selesai.

Detail breakdown dilakukan setelah The Green Print Finalization selesai dan Legal Update Minimum sudah siap masuk tahap eksekusi.

### 9.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Centralize navigation config.
2. Centralize footer config.
3. Centralize brand config.
4. Centralize redirect config.
5. Reusable page template.
6. Reusable button/sound component.
7. Reusable card components.
8. `.env.example` update.
9. SEO metadata base.

### 9.4. Gate Sementara

Selesai jika halaman baru bisa dibuat lebih cepat tanpa hardcode tersebar.

---

## 10. Item Urutan Besar 9 — Na Now News MVP

### 10.1. Target Milestone

v1.62

### 10.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah App Foundation selesai.

### 10.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Product Spec Na Now News.
2. Database/auth decision.
3. Article schema.
4. Public list page `/news/`.
5. Article detail `/news/[slug]/`.
6. Admin create/edit/publish.
7. Category/tags.
8. SEO.
9. Testing.

### 10.4. Gate Sementara

Selesai jika artikel bisa dibuat, dipublish, dan dibuka publik.

---

## 11. Item Urutan Besar 10 — Skool Now MVP

### 11.1. Target Milestone

v1.74

### 11.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah Na Now News MVP stabil atau setelah diputuskan Skool Now didahulukan.

### 11.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Product Spec Skool Now.
2. Parent page `/skool/`.
3. Program detail template.
4. Skate Skool Now page.
5. Package display.
6. Registration inquiry.
7. Partner inquiry.
8. Sponsor inquiry.
9. Safety/liability note.
10. Testing.

### 11.4. Gate Sementara

Selesai jika user bisa memahami program dan mengirim inquiry/pendaftaran.

---

## 12. Item Urutan Besar 11 — BANANOW NFT Marketplace Testnet

### 12.1. Target Milestone

v1.85

### 12.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah marketplace technical spec final.

### 12.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. NFT marketplace technical spec.
2. Contract decision.
3. Testnet deployment.
4. Frontend `/nfts/` testnet.
5. Wallet connect.
6. List NFT.
7. Buy NFT.
8. Cancel listing.
9. Fee payout test.
10. Royalty payout test.
11. Security test.

### 12.4. Gate Sementara

Selesai jika marketplace testnet berhasil menjalankan list, cancel, buy, fee, dan royalty.

---

## 13. Item Urutan Besar 12 — BANANOW NFT Marketplace Mainnet Controlled Launch

### 13.1. Target Milestone

v1.92

### 13.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah testnet marketplace benar-benar lulus.

### 13.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Mainnet deploy.
2. Mainnet env wiring.
3. Read-only QA.
4. Small-value transaction test.
5. Controlled opening.
6. Monitoring.
7. Public announcement via Na Now News.

### 13.4. Gate Sementara

Selesai jika marketplace mainnet bisa dibuka publik secara bertahap dan aman.

---

## 14. Item Urutan Besar 13 — Claps Alpha

### 14.1. Target Milestone

v2.00

### 14.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah Claps Safety and Product Spec selesai.

### 14.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Claps Product Spec.
2. Claps Safety Spec.
3. AI Gateway setup.
4. Chat UI.
5. Model selector.
6. Safety prompt.
7. Session memory atau curated memory alpha.
8. Rate limit.
9. Feedback flow.
10. Privacy/Terms update.

### 14.4. Gate Sementara

Selesai jika Claps bisa dicoba terbatas dengan safety guardrail yang jelas.

---

## 15. Item Urutan Besar 14 — Admin Dashboard Perluasan

### 15.1. Target Milestone

v2.00 preparation / v2.11

### 15.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah minimal dua modul dinamis berjalan.

### 15.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Admin route consolidation.
2. Role permission.
3. News admin.
4. Skool admin.
5. NFT admin/read panel.
6. Claps admin.
7. Config viewer.
8. Audit log.

### 15.4. Gate Sementara

Selesai jika admin tidak perlu mengelola semuanya secara manual dari database/explorer.

---

## 16. Item Urutan Besar 15 — BANANOW LAND Operating Portal v2.0

### 16.1. Target Milestone

v2.11

### 16.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah semua modul utama punya MVP yang stabil.

### 16.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Modul integration review.
2. UX polish.
3. Performance pass.
4. SEO pass.
5. Legal final pass.
6. Monitoring.
7. Backup/export.
8. Public release notes.
9. Full operating documentation.

### 16.4. Gate Sementara

Selesai jika BANANOW LAND sudah bukan hanya website, tetapi portal operasional yang dapat dipakai publik dan admin.

---

## 17. Aturan Item Sisipan

Item Sisipan dibuat jika terjadi sesuatu di luar rencana.

Contoh kondisi:

1. Dependency update mematahkan build.
2. Framework terlalu lama dan perlu migration.
3. Route lama ternyata tidak sesuai dokumentasi.
4. Sound effect rusak setelah update.
5. Asset active brands belum tersedia.
6. Link eksternal berubah.
7. The Green Print belum siap, tetapi website butuh publish cepat.
8. Legal risk muncul sebelum fitur publik.
9. Marketplace contract lama tidak mendukung kebutuhan.
10. AI Gateway butuh setup yang berbeda dari dugaan.

Format Item Sisipan:

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

Item Sisipan tidak boleh menjadi alasan untuk menambah fitur baru yang tidak perlu.

Item Sisipan hanya untuk membuka hambatan agar urutan besar bisa lanjut.

---

## 18. Status Saat Ini

Status terakhir berdasarkan eksekusi Daftar Runut:

1. **BANANOW LAND Development Map** sudah dibuat, diperbarui, dan disimpan di repo. ✅ Selesai
2. **BANANOW LAND Daftar Runut** sudah dibuat, diperbarui, dan disimpan di repo. ✅ Selesai
3. **BANANOW LAND Update Task Spec** sudah dibuat dan disimpan di repo. ✅ Selesai
4. **Agent Now Prompt Stage Awal** sudah disusun dan digunakan. ✅ Selesai
5. Agent Now sudah menjalankan Stage Awal. ✅ Selesai
6. Repo audit sudah dilakukan. ✅ Selesai
7. Dependency update aman sudah dilakukan. ✅ Selesai
8. Homepage Brand Ecosystem sudah diperbarui menjadi:
   - Na Now News
   - Skool Now
   - Claps
     ✅ Selesai

9. Footer Brands menu sudah diperbarui menjadi:
   - Na Now News
   - Skool Now
   - Claps
   - Older Brands → `/oldbrands`
     ✅ Selesai

10. Semua `Be a Head` link sudah mengarah ke `/nfts/`. ✅ Selesai
11. `/oldbrands` sudah dibuat. ✅ Selesai
12. `/nfts`, `/skool`, `/claps`, dan `/news` placeholder sudah tersedia. ✅ Selesai
13. `/pung` sudah mengarah ke `https://x.com/OrdinalyPeople`. ✅ Selesai
14. `/twitter` redirect mismatch sudah diperbaiki. ✅ Selesai
15. `/class` manual redirect sudah memiliki click-sound handler. ✅ Selesai
16. Lint lulus. ✅ Selesai
17. Build lulus. ✅ Selesai
18. Route QA lokal lulus. ✅ Selesai
19. Review localhost sudah dilakukan oleh Farmer. ✅ Selesai
20. Review deployed Vercel sudah dilakukan oleh Farmer. ✅ Selesai
21. Perubahan sudah dicommit dan dimerge ke branch `main`. ✅ Selesai
22. Known issue: `npm audit` masih melaporkan dua moderate vulnerabilities dari internal dependency Next/PostCSS, tetapi `npm audit fix --force` tidak direkomendasikan karena masuk jalur breaking/downgrade. 🟡 Dicatat sebagai backlog, bukan blocker.
23. Known issue: major update `@types/node` tidak diambil karena target repo masih Node `24.x`. 🟡 Dicatat sebagai backlog, bukan blocker.
24. Tahap berikutnya adalah **The Green Print Finalization**. 🔜 Berikutnya

Urutan berikutnya:

1. Cabangkan obrolan ini untuk menuntaskan **The Green Print Finalization**.
2. Di cabang obrolan tersebut, Farmer akan membagikan existing The Green Print.
3. Farmer dan ChatGPT akan mendiskusikan dan menuntaskan isi The Green Print.
4. Hasil final disimpan sebagai Markdown.
5. Obrolan cabang diarsipkan.
6. Markdown final The Green Print dibawa kembali ke obrolan induk ini.
7. Setelah The Green Print selesai, baru lanjut ke **Legal Update Minimum**.

---

## 19. Next Action yang Paling Dekat

Next action setelah update dasar website selesai:

**Tuntaskan The Green Print Finalization di cabang obrolan terpisah.**

Alasan:

Daftar Runut sudah menetapkan bahwa website update dasar boleh jalan dulu, tetapi The Green Print harus selesai sebelum masuk ke:

1. Legal Update Minimum.
2. App Foundation dan Struktur Data Terpusat.
3. Na Now News MVP.
4. Skool Now MVP.
5. BANANOW NFT Marketplace.
6. Claps Alpha.
7. Modul dinamis lain setelahnya.

Cara menjalankan tahap berikutnya:

1. Buat cabang obrolan khusus The Green Print Finalization.
2. Bagikan existing The Green Print di cabang tersebut.
3. Audit struktur dan isi The Green Print.
4. Tentukan struktur final.
5. Rapikan atau tulis ulang isi yang perlu.
6. Pastikan The Green Print menjadi root/canonical document BANANOW.
7. Simpan hasil final dalam bentuk Markdown.
8. Arsipkan obrolan cabang.
9. Bawa file Markdown final kembali ke obrolan induk.
10. Setelah itu, update Daftar Runut lagi dan lanjut ke **Item Urutan Besar 7 — Legal Update Minimum**.

Status next action: **The Green Print Finalization — 🔜 Berikutnya**

---

## 20. Catatan Review Terakhir

Dokumen ini sudah disinkronkan dengan status terbaru setelah Stage Awal selesai dieksekusi oleh Agent Now dan direview oleh Farmer.

Status final saat ini:

1. Item Urutan Besar 1 sampai 5 sudah ✅ Selesai.
2. Item Urutan Besar 6 — The Green Print Finalization adalah 🔜 Berikutnya.
3. Item Urutan Besar 7 dan 8 ditahan sampai The Green Print selesai.
4. Known issue dependency/security dicatat sebagai backlog dan bukan blocker.
5. Dokumen ini siap menjadi pegangan sebelum cabang obrolan The Green Print Finalization dimulai.

---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
