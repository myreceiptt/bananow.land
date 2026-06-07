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
| 6   | The Green Print Finalization                      | v1.50      | 🔜 Berikutnya                             |
| 7   | Legal Update Minimum                              | v1.51      | ⏳ Ditahan sampai The Green Print selesai |
| 8   | App Foundation dan Struktur Data Terpusat         | v1.51      | ⏳ Ditahan sampai The Green Print selesai |
| 9   | Na Now News MVP                                   | v1.62      | ⏳ Belum mulai                            |
| 10  | Skool Now MVP                                     | v1.74      | ⏳ Belum mulai                            |
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
10. Hasil sudah direview di localhost dan deployed Vercel. ✅ Selesai
11. Perubahan sudah dicommit dan dimerge ke branch `main`. ✅ Selesai
12. Tahap berikutnya adalah **The Green Print Finalization**. 🔜 Berikutnya
13. The Green Print Finalization akan dikerjakan di cabang obrolan terpisah.
14. Hasil final The Green Print akan dibawa kembali ke obrolan induk ini dalam bentuk Markdown.

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

Status: 🔜 Berikutnya.

Rencana:

1. Cabangkan obrolan khusus The Green Print Finalization.
2. Bagikan existing The Green Print.
3. Audit struktur dan isi.
4. Tentukan struktur final.
5. Rapikan atau tulis ulang isi yang perlu.
6. Pastikan The Green Print menjadi root/canonical document BANANOW.
7. Simpan hasil final dalam bentuk Markdown.
8. Arsipkan obrolan cabang.
9. Bawa file Markdown final kembali ke obrolan induk.
10. Setelah itu, update Daftar Runut lagi.

Gate selesai:

- [ ] Existing The Green Print dibagikan.
- [ ] Struktur final disetujui.
- [ ] Copy final selesai.
- [ ] Final note ditambahkan.
- [ ] Markdown final tersedia.
- [ ] Link GitBook/website dicek.
- [ ] Obrolan cabang diarsipkan.
- [ ] Hasil dibawa kembali ke obrolan induk.

---

## 9. Item Urutan Besar 7 — Legal Update Minimum

Target: **v1.51**

Status: ⏳ Ditahan sampai The Green Print selesai.

Akan dibreakdown setelah The Green Print Finalization selesai.

Gambaran isi:

1. Review Privacy lama.
2. Review Terms lama.
3. Tambahkan arah fitur baru secara umum.
4. Tambahkan Web3/NFT risk note minimum.
5. Tambahkan AI disclaimer minimum.
6. Tambahkan forms/data collection note minimum.
7. Build/test.

---

## 10. Item Urutan Besar 8 — App Foundation dan Struktur Data Terpusat

Target: **v1.51**

Status: ⏳ Ditahan sampai The Green Print selesai.

Akan dibreakdown setelah The Green Print Finalization selesai dan Legal Update Minimum siap masuk eksekusi.

Gambaran isi:

1. Centralize navigation config.
2. Centralize footer config.
3. Centralize brand config.
4. Centralize redirect config.
5. Reusable page template.
6. Reusable button/sound component.
7. Reusable card components.
8. `.env.example` update.
9. SEO metadata base.

---

## 11. Item Urutan Besar 9 — Na Now News MVP

Target: **v1.62**

Status: ⏳ Belum mulai.

Tentative sampai App Foundation selesai.

---

## 12. Item Urutan Besar 10 — Skool Now MVP

Target: **v1.74**

Status: ⏳ Belum mulai.

Tentative sampai Na Now News MVP stabil atau sampai diputuskan Skool Now didahulukan.

---

## 13. Item Urutan Besar 11 — BANANOW NFT Marketplace Testnet

Target: **v1.85**

Status: ⏳ Belum mulai.

Tentative sampai marketplace technical spec final.

---

## 14. Item Urutan Besar 12 — BANANOW NFT Marketplace Mainnet Controlled Launch

Target: **v1.92**

Status: ⏳ Belum mulai.

Tentative sampai testnet marketplace benar-benar lulus.

---

## 15. Item Urutan Besar 13 — Claps Alpha

Target: **v2.00**

Status: ⏳ Belum mulai.

Tentative sampai Claps Safety and Product Spec selesai.

---

## 16. Item Urutan Besar 14 — Admin Dashboard Perluasan

Target: **v2.05**

Status: ⏳ Belum mulai.

Tentative sampai minimal dua modul dinamis berjalan.

---

## 17. Item Urutan Besar 15 — BANANOW LAND Operating Portal

Target: **v2.11**

Status: ⏳ Belum mulai.

Tentative sampai semua modul utama punya MVP yang stabil.

---

## 18. Aturan Item Sisipan

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

## 19. Next Action yang Paling Dekat

Next action:

**Tuntaskan The Green Print Finalization di cabang obrolan terpisah.**

Alasan:

The Green Print harus selesai sebelum masuk ke:

1. Legal Update Minimum.
2. App Foundation dan Struktur Data Terpusat.
3. Na Now News MVP.
4. Skool Now MVP.
5. BANANOW NFT Marketplace.
6. Claps Alpha.
7. Modul dinamis lain setelahnya.

Status next action: **The Green Print Finalization — 🔜 Berikutnya**

---

## 20. Catatan Review Terakhir

Dokumen ini sudah disinkronkan dengan Development Map dan Update Task Spec.

Status final saat ini:

1. Item Urutan Besar 1 sampai 5 sudah ✅ Selesai.
2. Item Urutan Besar 6 — The Green Print Finalization adalah 🔜 Berikutnya.
3. Item Urutan Besar 7 dan 8 ditahan sampai The Green Print selesai.
4. Known issue dependency/security dicatat sebagai backlog dan bukan blocker.
5. Dokumen ini siap menjadi pegangan sebelum cabang obrolan The Green Print Finalization dimulai.

---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
