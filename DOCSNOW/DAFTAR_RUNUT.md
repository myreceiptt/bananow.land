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
   - Target: v1.0
   - Isi: homepage, footer, Be a Head link, Pung redirect, oldbrands.

5. **Redirect Audit dan Browser QA v1**
   - Target: v1.0
   - Isi: cek semua link dan route lama/baru.

6. **The Green Print Finalization**
   - Target: v1.0 atau v1.1, tergantung kesiapan konten.
   - Bisa berjalan paralel secara konten, tetapi tidak boleh mengganggu update website dasar.

7. **Legal Update Minimum**
   - Target: v1.1
   - Isi: privacy/terms minimum untuk arah fitur baru.

8. **App Foundation dan Struktur Data Terpusat**
   - Target: v1.1
   - Isi: komponen reusable, data config, layout, template.

9. **Na Now News MVP**
   - Target: v1.2
   - Isi: news list, article detail, admin sederhana.

10. **Skool Now MVP**
    - Target: v1.3
    - Isi: parent page, program detail, Skate Skool Now, forms/inquiry.

11. **BANANOW NFT Marketplace Testnet**
    - Target: v1.4
    - Isi: marketplace contract testnet dan frontend testnet.

12. **BANANOW NFT Marketplace Mainnet Controlled Launch**
    - Target: v1.5
    - Isi: mainnet, controlled opening, fee/royalty validation.

13. **Claps Alpha**
    - Target: v1.6
    - Isi: landing, chat UI, AI Gateway, safety prompt, memory alpha.

14. **Admin Dashboard Perluasan**
    - Target: v1.7 atau v2.0 preparation
    - Isi: admin lintas modul.

15. **BANANOW LAND Operating Portal v2.0**
    - Target: v2.0
    - Isi: semua modul matang dan terhubung.

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

### 2.4. Item yang Harus Dieksekusi

#### 2.4.1. Simpan Development Map

Status: sudah dilakukan.

Yang harus dipastikan:

1. **BANANOW LAND Development Map — Part 1** sudah tersimpan.
2. **BANANOW LAND Development Map — Part 2** sudah tersimpan.
3. Keduanya bisa dijadikan rujukan.
4. Tidak perlu diedit dulu kecuali ada perubahan arah besar.

Gate selesai:

- [ ] Part 1 tersimpan.
- [ ] Part 2 tersimpan.
- [ ] Dokumen bisa dibaca ulang.

#### 2.4.2. Simpan Daftar Runut

Status: dokumen ini.

Yang harus dipastikan:

1. Daftar Runut ini menjadi panduan eksekusi.
2. Tidak semua item langsung di-breakdown.
3. Breakdown hanya dilakukan ketika akan masuk ke item tersebut.
4. Jika ada kejadian di luar rencana, item sisipan boleh dibuat.

Gate selesai:

- [ ] Daftar Runut tersimpan.
- [ ] Urutan besar disetujui.
- [ ] Item Urutan Besar 1 dipahami.

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

- [ ] Daftar kerja manual dipahami.
- [ ] Daftar kerja Agent Now dipahami.
- [ ] Tidak ada ekspektasi bahwa Agent Now mengambil keputusan brand/legal utama.

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

- [ ] Logo/asset aktif tersedia atau diputuskan memakai placeholder lama dulu.
- [ ] Deskripsi singkat tiga active brands tersedia.
- [ ] Copy `/oldbrands` tersedia.
- [ ] Target link final tersedia.
- [ ] Screenshot before tersedia.

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

- [ ] Strategi The Green Print diputuskan.
- [ ] Istilah publik diputuskan.
- [ ] Tidak ada copy publik yang terlalu sensitif.

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

- [ ] Scope boleh disetujui.
- [ ] Scope tidak boleh disetujui.
- [ ] Batasan ini siap dimasukkan ke prompt Agent Now.

#### 2.4.7. Susun BANANOW LAND Update Task Spec

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

- [ ] BANANOW LAND Update Task Spec selesai.
- [ ] Scope jelas.
- [ ] Non-goals jelas.
- [ ] Testing jelas.
- [ ] Report format jelas.

#### 2.4.8. Susun Agent Now Prompt untuk Stage Awal

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

- [ ] Prompt Agent Now Stage Awal selesai.
- [ ] Prompt tidak terlalu luas.
- [ ] Prompt tidak meminta fitur besar.
- [ ] Prompt siap ditempel ke Agent Now.

### 2.5. Testing untuk Item Urutan Besar 1

Karena item ini belum menyentuh repo, testing-nya adalah review dokumen.

Checklist review:

- [ ] Apakah urutan besar sudah masuk akal?
- [ ] Apakah item pertama sudah cukup jelas?
- [ ] Apakah data/asset awal sudah diketahui?
- [ ] Apakah batas Agent Now sudah jelas?
- [ ] Apakah ada item yang masih membingungkan?

### 2.6. Gate Selesai Item Urutan Besar 1

Item Urutan Besar 1 dianggap selesai jika:

- [ ] Development Map Part 1 dan Part 2 tersimpan.
- [ ] Daftar Runut disetujui.
- [ ] Data/asset pembaruan awal diketahui.
- [ ] Scope Agent Now pembaruan awal disetujui.
- [ ] BANANOW LAND Update Task Spec sudah disusun.
- [ ] Prompt Agent Now Stage Awal sudah siap.

Setelah semua checklist di atas selesai, baru lanjut ke:

**Item Urutan Besar 2 — Audit Repo dan Lingkungan Kerja.**

---

## 3. Item Urutan Besar 2 — Audit Repo dan Lingkungan Kerja

### 3.1. Target Milestone

v1.0 preparation

### 3.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah Item Urutan Besar 1 selesai dan prompt Agent Now Stage Awal siap.

### 3.3. Gambaran Isi

Item ini kemungkinan mencakup:

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

### 3.4. Gate Sementara

Belum bisa dianggap selesai sebelum Agent Now membaca repo dan menghasilkan laporan audit.

---

## 4. Item Urutan Besar 3 — Dependency Update Aman

### 4.1. Target Milestone

v1.0 preparation

### 4.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah hasil audit repo diketahui.

### 4.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Catat dependency lama.
2. Identifikasi dependency deprecated/obsolete.
3. Update patch/minor dulu.
4. Hindari major update tanpa alasan.
5. Jalankan build setelah update.
6. Cek layout dan sound effect.
7. Jika terjadi breaking change, buat Item Sisipan.

### 4.4. Gate Sementara

Dependency update selesai hanya jika build sukses dan website lama tetap tampil normal.

---

## 5. Item Urutan Besar 4 — Pembaruan Website Dasar

### 5.1. Target Milestone

v1.0

### 5.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah repo sehat dan dependency update aman.

### 5.3. Gambaran Isi

Item ini kemungkinan mencakup:

1. Update `Be a Head` links ke `/nfts/`.
2. Update homepage Brand Ecosystem.
3. Update footer Brands menu.
4. Update `/pung` target.
5. Buat `/oldbrands`.
6. Pastikan visual tetap sama.
7. Pastikan sound effect tetap aktif.
8. Build/test.

### 5.4. Gate Sementara

Selesai jika homepage, footer, `/oldbrands`, dan `/pung` bekerja benar di lokal dan preview.

---

## 6. Item Urutan Besar 5 — Redirect Audit dan Browser QA

### 6.1. Target Milestone

v1.0

### 6.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah Pembaruan Website Dasar selesai.

### 6.3. Gambaran Isi

Item ini kemungkinan mencakup:

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

### 6.4. Gate Sementara

Selesai jika tidak ada broken route penting dan semua link yang berubah sudah sesuai target.

---

## 7. Item Urutan Besar 6 — The Green Print Finalization

### 7.1. Target Milestone

v1.0 atau v1.1

### 7.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah keputusan strategi The Green Print dikunci.

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

v1.1

### 8.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah update website dasar dan arah fitur publik dikunci.

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

v1.1

### 9.2. Status Breakdown

Tentative.

Detail breakdown dilakukan setelah update website dasar stabil.

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

v1.2

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

v1.3

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

v1.4

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

v1.5

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

v1.6

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

v1.7 atau v2.0 preparation

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

v2.0

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

Status terakhir berdasarkan obrolan:

1. BANANOW LAND Development Map sudah dibuat dan dipecah menjadi Part 1 dan Part 2.
2. Ilustrasi visual untuk Na Now News, Skool Now, Skate Skool Now, NFT Marketplace, dan Claps sudah dibuat sebagai inspirasi arah visual.
3. Belum masuk ke Agent Now.
4. Belum menyusun BANANOW LAND Update Task Spec.
5. Belum menyusun prompt Agent Now eksekusi awal.

Urutan berikutnya:

1. Review Daftar Runut.
2. Selesaikan data/asset minimum untuk pembaruan awal.
3. Susun BANANOW LAND Update Task Spec.
4. Susun Agent Now Prompt Stage Awal.
5. Baru masuk ke repo dengan Agent Now.

---

## 19. Next Action yang Paling Dekat

Next action setelah dokumen ini disetujui:

**Susun BANANOW LAND Update Task Spec.**

Dokumen itu akan menjadi jembatan antara Daftar Runut dan prompt Agent Now.

Daftar Runut menjawab:

“Apa urutan kerjanya?”

Update Task Spec menjawab:

“Apa persisnya yang harus dikerjakan di fase update website dasar?”

Agent Now Prompt menjawab:

“Bagaimana menyuruh Agent Now mengeksekusinya di repo tanpa melebar?”

---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
