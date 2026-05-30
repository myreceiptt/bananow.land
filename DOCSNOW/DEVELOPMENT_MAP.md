# BANANOW LAND Development Map — Prof. NOTA Inc.

Dokumen ini adalah peta pengembangan BANANOW LAND untuk mengubah `https://land.endhonesa.com` dari landing page dan redirect hub menjadi portal utama BANANOW untuk brand, komunitas, NFT, publikasi, edukasi/program, dan AI parenting.

Dokumen ini disusun sebagai pegangan kerja sebelum eksekusi menggunakan segala kemampuan dan sumber daya para Farmer.

---

## 0. Tujuan Besar

BANANOW LAND harus berkembang menjadi portal induk yang tetap mempertahankan identitas awalnya:

1. Style visual yang sudah ada.
2. Layout dan rasa halaman yang sudah dikenal.
3. Font dan warna yang sudah dipakai.
4. Suara/tombol interaktif yang muncul saat user mengklik tombol.
5. Bahasa brand yang playful, ramah, Web3-friendly, dan berbasis metafora LAND, FAMILY, plantation, crops, seeds, farmers, heads, sprouts, dan lovers.
6. Struktur landing page yang sederhana, tetapi siap berkembang menjadi aplikasi web modular.

Tujuan jangka pendek adalah memperbarui isi dan navigasi agar sesuai dengan kondisi BANANOW saat ini.

Tujuan jangka menengah adalah membangun halaman dan modul baru:

1. The Old Brands.
2. Na Now News.
3. Skool Now.
4. BANANOW NFT (Simple Marketplace).
5. Claps (AI Parenting Chatbot).

Tujuan jangka panjang adalah menjadikan BANANOW LAND sebagai operating portal yang dapat mendukung komunitas, konten, commerce, program, partner, sponsor, investor, dan produk digital baru.

---

## 1. Prinsip Utama Pengembangan

### 1.1. Pertahankan Identitas BANANOW

Setiap halaman baru harus terasa berasal dari dunia yang sama dengan homepage saat ini. Jangan membuat halaman baru terasa seperti aplikasi korporat generik.

Yang harus dipertahankan:

1. Gaya visual playful.
2. Tone hangat dan tidak kaku.
3. Metafora LAND dan plantation.
4. CTA yang terasa seperti ajakan masuk ke komunitas, bukan sekadar tombol transaksi.
5. Footer, navigasi, dan komponen legal yang konsisten.
6. Efek suara tombol.

### 1.2. Jangan Mengubah Semua Sekaligus

Pengembangan harus bertahap. BANANOW LAND tidak boleh langsung berubah menjadi aplikasi besar yang sulit diuji.

Urutan aman:

1. Stabilkan repo.
2. Update isi dan link.
3. Rapikan struktur komponen.
4. Bangun halaman statis penting.
5. Baru bangun fitur dinamis.
6. Baru bangun fitur Web3, pembayaran, AI, dan dashboard admin.

### 1.3. Setiap Modul Harus Bisa Berdiri Sendiri

Modul besar seperti News, Skool, NFT Marketplace, dan Claps tidak boleh saling mengunci.

Jika satu modul belum selesai, modul lain tetap harus bisa berjalan.

Contoh:

1. `/news/` bisa berjalan meskipun `/claps/` belum selesai.
2. `/skool/` bisa punya landing page dulu meskipun payment belum aktif.
3. `/nfts/` bisa punya marketplace coming soon atau read-only collection page dulu sebelum marketplace contract siap.
4. `/claps/` bisa mulai sebagai concept/alpha page sebelum chatbot publik aktif.

### 1.4. Canon dan Operasional Harus Dipisah

The Green Print diposisikan sebagai dokumen kanonik BANANOW.

The Green Print sebaiknya tidak lagi dijadikan tempat update operasional harian setelah difinalisasi.

Setelah The Green Print final, pembaruan masa depan harus masuk ke:

1. Na Now News.
2. Halaman program baru.
3. Dokumen proposal terpisah.
4. Announcement.
5. Changelog.
6. Landing page produk/brand baru.

### 1.5. Public Copy dan Internal Spec Harus Dipisah

Dokumen ini adalah dokumen kerja internal dalam bahasa Indonesia.

Copy publik website BANANOW dapat tetap menggunakan bahasa Inggris sesuai gaya website yang sudah ada, tetapi copy publik final sebaiknya disusun di dokumen terpisah agar tidak bercampur dengan instruksi teknis.

---

## 2. Kondisi Awal Website Saat Ini

Saat ini BANANOW LAND memiliki:

1. Homepage utama.
2. Privacy Policy.
3. Terms & Conditions.
4. Halaman redirect internal menuju social media, GitBook, dan website lain.
5. Link eksternal yang dibuka di tab baru.
6. Tombol dan elemen interaktif yang memiliki efek suara.
7. Brand ecosystem lama yang masih tampil di homepage.
8. CTA lama `Be a Head` yang masih mengarah ke halaman NFT mint lama.

Struktur saat ini lebih dekat ke landing page dan redirect hub, bukan full web app.

---

## 3. Peta Besar Halaman Setelah Pengembangan

### 3.1. Halaman Utama dan Legal

| Halaman            | URL          | Status                        | Fungsi                    |
| ------------------ | ------------ | ----------------------------- | ------------------------- |
| Home               | `/`          | Sudah ada, perlu update       | Portal utama BANANOW LAND |
| Privacy Policy     | `/privacy`   | Sudah ada, perlu update nanti | Kebijakan privasi         |
| Terms & Conditions | `/terms`     | Sudah ada, perlu update nanti | Syarat dan ketentuan      |
| The Old Brands     | `/oldbrands` | Baru                          | Arsip brand lama BANANOW  |

### 3.2. Halaman Produk/Brand Baru

| Halaman                  | URL                 | Status | Fungsi                                                      |
| ------------------------ | ------------------- | ------ | ----------------------------------------------------------- |
| Skool Now                | `/skool/`           | Baru   | Parent landing page untuk program edukasi/aktivitas BANANOW |
| Skool Now Program Detail | `/skool/[program]/` | Baru   | Landing page per program, misalnya Skate Skool Now          |
| BANANOW NFT Marketplace  | `/nfts/`            | Baru   | Tempat membeli/menjual NFT BANANOW                          |
| Na Now News              | `/news/`            | Baru   | Portal artikel/news BANANOW                                 |
| News Article             | `/news/[slug]/`     | Baru   | Halaman detail artikel                                      |
| Claps                    | `/claps/`           | Baru   | AI Parenting Chatbot landing/app page                       |

### 3.3. Halaman Dashboard

Dashboard hanya dibuat setelah fondasi aman.

| Halaman         | URL             | Status     | Fungsi                                        |
| --------------- | --------------- | ---------- | --------------------------------------------- |
| Admin Dashboard | `/admin/`       | Baru nanti | Pusat admin umum                              |
| News Admin      | `/admin/news/`  | Baru nanti | Create/edit/update artikel                    |
| Skool Admin     | `/admin/skool/` | Baru nanti | Mengelola program, paket, pendaftaran         |
| NFT Admin       | `/admin/nfts/`  | Baru nanti | Mengelola marketplace, fee, collection config |
| Claps Admin     | `/admin/claps/` | Baru nanti | Mengelola model, memory, safety, library      |

Catatan: Dashboard admin tidak harus dibuat pada pembaruan awal. Dashboard harus menunggu keputusan auth, database, dan role.

### 3.4. Halaman Redirect yang Tetap Ada

| Halaman         | URL          | Status                       | Catatan                           |
| --------------- | ------------ | ---------------------------- | --------------------------------- |
| Discord         | `/discord`   | Tetap                        | Redirect ke Discord               |
| Twitter/X       | `/twitter`   | Tetap, perlu validasi target | Pastikan target akun benar        |
| Instagram       | `/instagram` | Tetap                        | Redirect ke Instagram             |
| YouTube         | `/youtube`   | Tetap                        | Redirect ke YouTube               |
| 90’s Vibes      | `/vibes`     | Tetap                        | Redirect ke The Green Print       |
| Dermaga Web3    | `/dermaga`   | Tetap                        | Redirect ke The Green Print       |
| Class Now       | `/class`     | Tetap                        | Redirect ke The Green Print       |
| InAMotion       | `/inamotion` | Tetap                        | Redirect ke The Green Print       |
| Agent Now       | `/delegate`  | Tetap                        | Redirect ke The Green Print       |
| NOTA’s Dept.    | `/professor` | Tetap                        | Redirect ke The Green Print       |
| V               | `/v`         | Tetap                        | Redirect akun Farmer              |
| Pung            | `/pung`      | Update target                | Ganti dari akun lama ke akun baru |
| ZORTAN          | `/zortan`    | Tetap                        | Redirect akun Farmer              |
| Prof. NOTA      | `/nota`      | Tetap                        | Redirect akun Farmer              |
| Novrizky Norman | `/novrizky`  | Tetap                        | Redirect akun Farmer              |
| Suwar Kainde    | `/kainde`    | Tetap                        | Redirect akun Farmer              |

---

## 4. Stage 0 — Repo Health Check dan Dependency Update

### 4.1. Tujuan

Memastikan repo BANANOW LAND sehat, bisa di-build, bisa dijalankan lokal, bisa di-deploy, dan siap dikembangkan tanpa dependency usang yang mengganggu.

### 4.2. Aktivitas

1. Buka repo BANANOW LAND di local VS Code workspace.
2. Cek struktur project.
3. Identifikasi framework yang digunakan.
4. Cek `package.json`.
5. Cek package manager yang dipakai.
6. Cek lockfile yang aktif.
7. Cek versi Node yang dibutuhkan.
8. Jalankan install bersih.
9. Jalankan local dev server.
10. Jalankan build.
11. Jalankan lint jika tersedia.
12. Jalankan typecheck jika tersedia.
13. Catat error, warning, deprecated package, dan security warning.
14. Update dependency secara bertahap, bukan sekaligus membabi buta.
15. Pastikan semua halaman lama tetap berjalan setelah update.

### 4.3. Output

1. Repo bisa berjalan lokal.
2. Repo bisa build tanpa error.
3. Dependency utama diperbarui secara aman.
4. Tidak ada perubahan visual besar yang tidak disengaja.
5. Tombol dan sound effect tetap berfungsi.
6. Semua route lama tetap bisa diakses.

### 4.4. Checklist Selesai

- [ ] `npm install` atau package manager yang sesuai berhasil.
- [ ] `npm run dev` berhasil.
- [ ] `npm run build` berhasil.
- [ ] `npm run lint` berhasil jika tersedia.
- [ ] `npm run typecheck` berhasil jika tersedia.
- [ ] Homepage tampil normal.
- [ ] Privacy tampil normal.
- [ ] Terms tampil normal.
- [ ] Halaman redirect tampil normal.
- [ ] Sound effect tombol tetap jalan.
- [ ] Tidak ada package update yang mematahkan layout.

### 4.5. Risiko

1. Update dependency bisa mematahkan framework lama.
2. CSS bisa berubah jika Tailwind atau UI library naik versi besar.
3. Package sound/audio bisa berubah perilakunya.
4. Build Vercel bisa berbeda dari build lokal.

### 4.6. Mitigasi

1. Commit sebelum dependency update.
2. Update bertahap.
3. Build setelah setiap batch update besar.
4. Simpan screenshot sebelum dan sesudah.
5. Jangan refactor UI besar pada stage ini.

---

## 5. Stage 1 — Finalisasi The Green Print

### 5.1. Tujuan

Menyelesaikan The Green Print sebagai dokumen kanonik BANANOW LAND yang stabil dan tidak menjadi tempat update operasional harian.

### 5.2. Lokasi

The Green Print berada di GitBook dengan URL:

`https://bananowgp.endhonesa.com/`

### 5.3. Peran The Green Print

The Green Print adalah akar BANANOW.

Fungsinya:

1. Menjelaskan apa itu BANANOW.
2. Menjelaskan apa itu BANANOW LAND.
3. Menjelaskan nilai, bahasa, role, komunitas, dan sejarah BANANOW.
4. Menjadi rujukan untuk brand, program, artikel, komunitas, dan produk baru.
5. Menjadi dokumen yang stabil setelah final.

The Green Print tidak boleh menjadi:

1. Blog.
2. Changelog.
3. Daftar pengumuman.
4. Proposal program spesifik yang sering berubah.
5. Dokumen legal operasional harian.
6. Dashboard project.

### 5.4. Struktur Isi yang Disarankan

1. Welcome to The Green Print.
2. What is BANANOW.
3. What is BANANOW LAND.
4. The LAND of Nutrition.
5. PLAYING, LEARNING, WORKING.
6. FAMILY and Community.
7. Sprouts, Lovers, Heads, Farmers.
8. BANANOW NFTs and the meaning of being a Head.
9. The old crops and early brands.
10. The new seeds and future brands.
11. The Embassy and immigration metaphor.
12. BANANOW and Web3.
13. BANANOW and real-world activities.
14. BANANOW and creative economy.
15. BANANOW and education.
16. BANANOW and parenting/family support.
17. The Green Print as canon.
18. Closing statement.

### 5.5. Hal yang Harus Diputuskan Sebelum Final

1. Apakah semua brand lama disebut sebagai old brands, old crops, legacy brands, atau old plantations.
2. Apakah brand baru disebut new seeds, active brands, growing brands, atau future crops.
3. Apakah Skool Now, Na Now News, dan Claps sudah disebut di Green Print atau hanya disebut sebagai future direction.
4. Apakah NFT Marketplace disebut secara eksplisit atau cukup sebagai bagian dari Heads economy.
5. Apakah The Green Print menggunakan gaya full English.
6. Apakah ada halaman changelog/final note yang menandai versi final.

### 5.6. Output

1. The Green Print selesai secara struktur.
2. The Green Print selesai secara isi.
3. Semua link dari BANANOW LAND ke The Green Print tetap valid.
4. Tidak perlu mengubah link The Green Print di website BANANOW LAND.

### 5.7. Checklist Selesai

- [ ] Daftar bab final disetujui.
- [ ] Copy final ditulis.
- [ ] Semua brand lama masuk dengan benar.
- [ ] Semua role komunitas dijelaskan.
- [ ] BANANOW NFTs dijelaskan tanpa overpromise.
- [ ] Hubungan BANANOW dengan Web3 dijelaskan.
- [ ] Hubungan BANANOW dengan real-world programs dijelaskan.
- [ ] Final note ditambahkan.
- [ ] Link internal GitBook dicek.
- [ ] Link dari website ke Green Print dicek.

---

## 6. Stage 2 — Pembaruan Homepage, Footer, Link, dan Redirect

### 6.1. Tujuan

Memperbarui BANANOW LAND agar mencerminkan kondisi baru BANANOW tanpa mengubah rasa visual yang sudah ada.

### 6.2. Pembaruan Link `Be a Head`

Semua tombol/link `Be a Head` harus diarahkan ke:

`https://land.endhonesa.com/nfts/`

Lokasi yang harus diperiksa:

1. Navbar atas.
2. Hero section jika ada.
3. Community section.
4. Card most wanted.
5. Footer.
6. Legal menu jika saat ini memang ada di sana.
7. Semua komponen atau data file yang menyimpan link `Be a Head`.

### 6.3. Pembaruan Homepage Brand Ecosystem

Brand ecosystem homepage tidak lagi menampilkan semua brand lama.

Homepage hanya menampilkan tiga brand:

1. Skool Now.
2. Claps.
3. Na Now News.

Judul dan deskripsi section brand ecosystem tetap dipertahankan jika masih relevan.

Yang berubah:

1. Data brand.
2. Logo brand.
3. Deskripsi singkat brand.
4. Link brand.

Target link:

1. Skool Now menuju `/skool/`.
2. Claps menuju `/claps/`.
3. Na Now News menuju `/news/`.

Catatan: deskripsi Na Now News boleh memakai deskripsi lama jika masih sesuai.

### 6.4. Pembaruan Footer Brands Menu

Footer bagian Brands menu harus diubah menjadi:

1. Skool Now.
2. Claps.
3. Na Now News.
4. The Old Brands.

Target link:

1. Skool Now menuju `/skool/`.
2. Claps menuju `/claps/`.
3. Na Now News menuju `/news/`.
4. The Old Brands menuju `/oldbrands`.

### 6.5. Pembaruan Redirect Mr. Pung

Route tetap:

`/pung`

Target akun lama:

`@Inamotion21`

Target akun baru:

`@OrdinalyPeople`

Yang harus diperbarui:

1. Link target redirect.
2. Tombol manual pada halaman redirect.
3. Metadata jika ada.
4. Label atau deskripsi jika menyebut akun lama.

### 6.6. Validasi Redirect Lain

Selain `/pung`, semua redirect lain harus divalidasi.

Minimal dicek:

1. `/twitter`.
2. `/instagram`.
3. `/youtube`.
4. `/discord`.
5. `/vibes`.
6. `/dermaga`.
7. `/class`.
8. `/inamotion`.
9. `/delegate`.
10. `/professor`.
11. `/v`.
12. `/zortan`.
13. `/nota`.
14. `/novrizky`.
15. `/kainde`.

Jika ditemukan target tidak sesuai, jangan langsung mengubah tanpa daftar audit. Buat daftar target lama dan target usulan.

### 6.7. Output

1. Homepage terbaru.
2. Footer terbaru.
3. Semua `Be a Head` menuju `/nfts/`.
4. Mr. Pung redirect menuju target baru.
5. Redirect lama tetap hidup.
6. Visual dan sound effect tetap sama.

### 6.8. Checklist Selesai

- [ ] Navbar `Be a Head` menuju `/nfts/`.
- [ ] Community CTA `Be a Head` menuju `/nfts/`.
- [ ] Footer `Be a Head` atau related link menuju `/nfts/`.
- [ ] Homepage brand ecosystem hanya berisi Skool Now, Claps, Na Now News.
- [ ] Footer Brands menu hanya berisi Skool Now, Claps, Na Now News, The Old Brands.
- [ ] `/pung` menuju target baru.
- [ ] Semua redirect dicek manual.
- [ ] Tidak ada broken internal route.
- [ ] Tidak ada perubahan visual yang tidak disengaja.

---

## 7. Stage 3 — Halaman The Old Brands

### 7.1. Tujuan

Membuat halaman `/oldbrands` sebagai arsip resmi brand-brand awal BANANOW.

Halaman ini berfungsi sebagai jembatan antara homepage baru dan warisan brand lama.

### 7.2. URL

`https://land.endhonesa.com/oldbrands`

### 7.3. Layout

Halaman harus mengikuti susunan Privacy Policy atau Terms & Conditions.

Elemen wajib:

1. Navbar yang sama.
2. Main content container yang serupa legal pages.
3. Judul halaman.
4. Deskripsi pembuka.
5. Daftar brand lama.
6. Card atau section per brand.
7. Link menuju halaman redirect masing-masing brand.
8. Footer yang sama.
9. Sound effect tombol tetap aktif.

### 7.4. Brand Lama yang Ditampilkan

1. 90’s Vibes.
2. Dermaga Web3.
3. Class Now.
4. InAMotion.
5. Agent Now.
6. NOTA’s Dept.

### 7.5. Route Redirect Brand Lama

1. 90’s Vibes menuju `/vibes`.
2. Dermaga Web3 menuju `/dermaga`.
3. Class Now menuju `/class`.
4. InAMotion menuju `/inamotion`.
5. Agent Now menuju `/delegate`.
6. NOTA’s Dept. menuju `/professor`.

### 7.6. Copy Direction

Halaman ini harus menyampaikan bahwa brand lama tidak dihapus secara kasar, tetapi ditempatkan sebagai akar, tanah, kompos, dan cerita yang membantu BANANOW tumbuh.

Hindari kesan:

1. Brand lama gagal.
2. Brand lama dibuang.
3. BANANOW malu terhadap masa lalunya.
4. Brand lama masih aktif jika sebenarnya tidak lagi menjadi fokus.

Gunakan rasa:

1. Legacy.
2. Roots.
3. Old crops.
4. Fertile soil.
5. Early days.
6. Stories that helped the LAND grow.

### 7.7. Data Struktur yang Disarankan

Gunakan satu data file agar mudah dipelihara.

Contoh struktur konseptual:

1. Name.
2. Slug.
3. Short description.
4. Redirect path.
5. Optional icon/logo.
6. Status: old brand.

### 7.8. Output

1. Route `/oldbrands` aktif.
2. Isi halaman rapi.
3. Semua link brand lama bekerja.
4. Footer mengarah ke halaman ini.

### 7.9. Checklist Selesai

- [ ] `/oldbrands` bisa diakses.
- [ ] Navbar konsisten.
- [ ] Footer konsisten.
- [ ] Copy pembuka sesuai gaya BANANOW.
- [ ] Enam brand lama tampil.
- [ ] Setiap brand punya deskripsi singkat.
- [ ] Setiap brand punya link ke redirect lama.
- [ ] Layout responsive.
- [ ] Sound effect tombol tetap berjalan.

---

## 8. Stage 4 — Legal Update

### 8.1. Tujuan

Memastikan Privacy Policy dan Terms & Conditions tidak tertinggal setelah BANANOW LAND mulai menambah fitur dinamis.

### 8.2. Kenapa Perlu

Fitur baru akan membawa kategori data baru, seperti:

1. Form pendaftaran program.
2. Data partner.
3. Data sponsor/investor.
4. Wallet address.
5. Marketplace activity.
6. Article author data.
7. AI chatbot conversations.
8. Memory atau library personalisasi.
9. Subscription/payment data.
10. Analytics dan database.

Legal pages lama tidak cukup untuk semua ini.

### 8.3. Legal Update Awal

Pada fase awal, update legal belum harus final untuk semua fitur masa depan.

Namun perlu ditambahkan:

1. Website may expand into new services.
2. BANANOW may collect data through forms.
3. BANANOW may use third-party infrastructure.
4. BANANOW may provide Web3, content, program, and AI features.
5. AI features are not professional medical, legal, or psychological advice.
6. Parenting chatbot must not replace professional help.
7. NFT trades carry blockchain risks.
8. Users are responsible for wallet safety.

### 8.4. Legal Update Lanjutan

Sebelum marketplace dan Claps publik:

1. Update Privacy Policy lengkap.
2. Update Terms lengkap.
3. Tambahkan AI usage disclaimer.
4. Tambahkan Web3/NFT marketplace risk disclaimer.
5. Tambahkan refund/payment policy jika Skool Now menerima pembayaran.
6. Tambahkan content policy untuk News.
7. Tambahkan data deletion request flow.

### 8.5. Checklist Selesai

- [ ] Privacy Policy diperiksa.
- [ ] Terms diperiksa.
- [ ] Daftar fitur baru yang berdampak legal dibuat.
- [ ] Legal update minimum ditulis.
- [ ] Legal update lanjutan dijadikan backlog sebelum fitur publik.

---

## 9. Stage 5 — BANANOW LAND App Foundation

### 9.1. Tujuan

Menyiapkan fondasi teknis agar website bisa berkembang menjadi aplikasi modular tanpa kehilangan identitas visual.

### 9.2. Komponen Reusable

Komponen yang perlu distabilkan:

1. Layout utama.
2. Navbar.
3. Footer.
4. Button dengan sound effect.
5. Link button.
6. Section header.
7. Brand card.
8. Redirect page template.
9. Legal/content page template.
10. Program card.
11. Article card.
12. CTA block.
13. Form component.
14. Status badge.
15. Wallet connect component jika nanti diperlukan.

### 9.3. Data Configuration

Agar tidak mengubah banyak file saat update konten, data sebaiknya dipindahkan ke konfigurasi terstruktur.

Data yang disarankan:

1. Site navigation.
2. Footer links.
3. Social links.
4. Farmers links.
5. Active brands.
6. Old brands.
7. Redirect targets.
8. Program list.
9. NFT collection config.
10. News category list.

### 9.4. Environment Variables

Nanti dibutuhkan env untuk:

1. Database.
2. Auth.
3. Wallet/project ID.
4. Marketplace contract.
5. NFT collection contract.
6. Payment provider.
7. AI Gateway.
8. Storage.
9. Admin allowlist.

Pada stage ini cukup siapkan pola `.env.example`, belum perlu semua env aktif.

### 9.5. Output

1. Struktur app lebih modular.
2. Data link dan brand tidak tersebar acak.
3. Komponen lama tetap bisa dipakai.
4. Halaman baru mudah dibuat.

### 9.6. Checklist Selesai

- [ ] Layout utama reusable.
- [ ] Navbar reusable.
- [ ] Footer reusable.
- [ ] Button sound reusable.
- [ ] Redirect template reusable.
- [ ] Brand data terpusat.
- [ ] Footer data terpusat.
- [ ] Redirect data terpusat.
- [ ] `.env.example` dibuat atau diperbarui.
- [ ] Build tetap sukses.

---

## 10. Stage 6 — Na Now News MVP

### 10.1. Tujuan

Membangun portal artikel sederhana untuk BANANOW LAND.

Na Now News menjadi tempat update, cerita, pengumuman, dokumentasi, opini, dan arsip narasi BANANOW setelah The Green Print difinalisasi.

### 10.2. URL

List artikel:

`/news/`

Detail artikel:

`/news/[slug]/`

Admin artikel:

`/admin/news/`

### 10.3. MVP Public Features

1. Daftar artikel.
2. Artikel detail.
3. Judul artikel.
4. Excerpt.
5. Cover image opsional.
6. Author.
7. Published date.
8. Category.
9. Tags.
10. SEO metadata.
11. Empty state jika belum ada artikel.

### 10.4. MVP Admin Features

1. Login admin.
2. Create article.
3. Edit article.
4. Save draft.
5. Publish article.
6. Unpublish article.
7. Delete atau archive article.
8. Upload atau set cover image.
9. Set category.
10. Set tags.

### 10.5. Article Schema

Minimal field:

1. `id`.
2. `title`.
3. `slug`.
4. `excerpt`.
5. `body`.
6. `coverImage`.
7. `authorId`.
8. `authorName`.
9. `category`.
10. `tags`.
11. `status`.
12. `publishedAt`.
13. `createdAt`.
14. `updatedAt`.

### 10.6. Status Artikel

1. Draft.
2. Published.
3. Archived.

### 10.7. Category Awal

Kategori awal yang disarankan:

1. LAND.
2. Community.
3. Skool Now.
4. NFTs.
5. Claps.
6. Farmers.
7. Announcement.

### 10.8. SEO dan Distribusi

MVP sebaiknya mendukung:

1. Dynamic meta title.
2. Dynamic meta description.
3. Open Graph image.
4. Sitemap.
5. RSS feed jika memungkinkan.

### 10.9. Output

1. `/news/` aktif.
2. Artikel bisa dibuat dari admin.
3. Artikel bisa dibuka publik.
4. Na Now News menggantikan link lama.

### 10.10. Checklist Selesai

- [ ] `/news/` tampil.
- [ ] `/news/[slug]/` tampil.
- [ ] Admin login aktif.
- [ ] Admin bisa create artikel.
- [ ] Admin bisa edit artikel.
- [ ] Admin bisa publish artikel.
- [ ] Draft tidak tampil publik.
- [ ] Published tampil publik.
- [ ] Category dan tags tampil.
- [ ] SEO dasar berjalan.
- [ ] Build sukses.

---

## 11. Stage 7 — Skool Now MVP

### 11.1. Tujuan

Membangun parent landing page untuk Skool Now dan program-program di dalamnya.

Skool Now adalah lini BANANOW untuk program edukasi, aktivitas, olahraga, hobby, komunitas, dan kegiatan real-world yang bisa dikemas sebagai produk.

### 11.2. URL

Parent page:

`/skool/`

Program detail:

`/skool/[program]/`

Contoh program:

`/skool/skate-skool-now/`

### 11.3. Tiga Layer Model Bisnis

Skool Now harus memfasilitasi tiga layer:

1. Retail atau B2C.
2. Partner atau B2B.
3. Sponsor, investor, atau market money.

### 11.4. B2C Layer

Untuk peserta atau end user.

Fitur/konten:

1. Apa programnya.
2. Untuk siapa program ini.
3. Jadwal.
4. Lokasi.
5. Level peserta.
6. Paket harga.
7. Benefit.
8. Cara daftar.
9. Form pendaftaran.
10. Payment jika sudah siap.

### 11.5. B2B Partner Layer

Untuk pihak yang ingin bekerja sama.

Contoh partner:

1. Venue.
2. Sekolah.
3. Komunitas.
4. Brand olahraga.
5. Coach.
6. Toko perlengkapan.
7. Organizer.
8. Media partner.

Fitur/konten:

1. Proposal ringkas.
2. Jenis partnership.
3. Benefit partner.
4. Kewajiban partner.
5. Form partner inquiry.
6. Contact flow.

### 11.6. Sponsor/Investor Layer

Untuk sponsor, investor, atau pihak yang ingin mendanai program.

Fitur/konten:

1. Kenapa program ini layak didukung.
2. Dampak sosial dan komunitas.
3. Potensi brand exposure.
4. Revenue model.
5. Sponsorship package.
6. Investment/funding inquiry.
7. Download proposal jika nanti tersedia.

### 11.7. Program Page Template

Setiap program harus punya struktur standar:

1. Hero.
2. Program summary.
3. Who is this for.
4. What participants will get.
5. Schedule.
6. Location.
7. Packages.
8. Registration CTA.
9. Partner CTA.
10. Sponsor CTA.
11. FAQ.
12. Safety and conduct note.

### 11.8. Skate Skool Now

Skate Skool Now menjadi program pertama yang dikembangkan.

Konten yang perlu disiapkan:

1. Nama final program.
2. Deskripsi pendek.
3. Deskripsi panjang.
4. Target peserta.
5. Level pemula/menengah/lanjutan jika ada.
6. Jadwal contoh.
7. Lokasi awal.
8. Paket harga.
9. Benefit peserta.
10. Kebutuhan alat.
11. Safety note.
12. Coach/mentor.
13. Form pendaftaran.
14. Partner package.
15. Sponsor package.

### 11.9. XXXX Skool Now

Untuk program olahraga beregu atau hobby group lain.

Konsep:

1. Basket.
2. Futsal.
3. Sepak bola.
4. Baseball.
5. Softball.
6. Aktivitas komunitas lain.

Template harus fleksibel agar program baru bisa dibuat dari data, bukan hardcode total.

### 11.10. Data Program Schema

Minimal field:

1. `id`.
2. `name`.
3. `slug`.
4. `shortDescription`.
5. `longDescription`.
6. `status`.
7. `programType`.
8. `audience`.
9. `location`.
10. `schedule`.
11. `packages`.
12. `partnerOptions`.
13. `sponsorOptions`.
14. `faq`.
15. `coverImage`.
16. `createdAt`.
17. `updatedAt`.

### 11.11. Output

1. `/skool/` aktif.
2. Minimal satu program page aktif.
3. User bisa memahami program.
4. User bisa mengirim inquiry atau pendaftaran.
5. Partner dan sponsor punya jalur kontak yang jelas.

### 11.12. Checklist Selesai

- [ ] `/skool/` tampil.
- [ ] Parent page menjelaskan Skool Now.
- [ ] Program card tampil.
- [ ] Program detail page tampil.
- [ ] Form pendaftaran tersedia.
- [ ] Form partner tersedia.
- [ ] Form sponsor tersedia.
- [ ] Safety note tersedia.
- [ ] Mobile responsive.
- [ ] Build sukses.

---

## 12. Stage 8 — BANANOW NFT Marketplace MVP

### 12.1. Tujuan

Membangun marketplace sederhana agar holder BANANOW NFT dapat menjual NFT mereka dan calon holder dapat membeli tanpa harus keluar ke marketplace eksternal.

### 12.2. URL

`/nfts/`

### 12.3. Scope MVP

MVP harus sederhana.

Fitur awal:

1. Connect wallet.
2. Lihat koleksi BANANOW NFT.
3. Lihat NFT yang listed.
4. Holder bisa list NFT fixed price.
5. Holder bisa cancel listing.
6. Buyer bisa buy NFT.
7. Marketplace fee masuk ke treasury BANANOW.
8. Royalty dibayarkan untuk transaksi di marketplace BANANOW.
9. Halaman menjelaskan risiko NFT/Web3.

Tidak termasuk MVP awal:

1. Auction.
2. Bid/offer.
3. Cross-chain marketplace.
4. ERC1155 multi-copy listing jika tidak diperlukan.
5. Multi-collection complex dashboard.
6. Custodial wallet.
7. Credit card checkout.

### 12.4. Keputusan Teknis yang Harus Disiapkan

1. Contract address BANANOW NFT di Base.
2. Standard NFT: ERC721 atau ERC1155.
3. Apakah collection support ERC-2981.
4. Royalty receiver.
5. Royalty percentage.
6. Marketplace fee percentage.
7. Marketplace treasury address.
8. Currency: ETH dulu atau stablecoin.
9. Chain: Base dulu.
10. Apakah marketplace contract dibuat sendiri atau memakai existing protocol.
11. Apakah frontend membaca metadata dari tokenURI langsung atau indexer.
12. Apakah listing disimpan on-chain sepenuhnya atau hybrid.

### 12.5. Royalty Reality Check

Marketplace BANANOW dapat menegakkan royalty untuk transaksi yang terjadi di BANANOW Marketplace.

Namun BANANOW tidak bisa menjamin semua marketplace eksternal akan membayar royalty.

Karena itu copy publik tidak boleh mengatakan royalty bisa ditegakkan di seluruh pasar.

Kalimat aman secara konsep:

BANANOW Marketplace enforces marketplace fee and royalty payments for trades executed inside BANANOW LAND.

### 12.6. Marketplace Contract MVP

Jika membuat contract sendiri, minimal harus mendukung:

1. Create listing.
2. Cancel listing.
3. Buy listed NFT.
4. Marketplace fee.
5. Royalty payout.
6. Seller payout.
7. Emergency pause.
8. Owner/admin config.
9. Reentrancy protection.
10. Safe transfer.
11. Event emission.

### 12.7. Frontend Marketplace MVP

Halaman `/nfts/` perlu punya:

1. Hero explaining Be a Head.
2. Connect wallet.
3. Listed NFTs grid.
4. NFT detail modal/page.
5. Buy button.
6. My NFTs section.
7. List for sale button.
8. Cancel listing button.
9. Fee/royalty explanation.
10. Transaction status.
11. Empty state.
12. Error state.
13. Risk disclaimer.

### 12.8. Security Requirements

Marketplace tidak boleh diluncurkan publik tanpa:

1. Testnet deploy.
2. Unit tests.
3. Manual E2E test.
4. Reentrancy check.
5. Approval flow test.
6. Cancel listing test.
7. Buy listing test.
8. Fee split test.
9. Royalty split test.
10. Invalid listing test.
11. Paused marketplace test.

### 12.9. Output

1. `/nfts/` menggantikan `Be a Head` lama.
2. Marketplace Base MVP berjalan.
3. Holder bisa menjual.
4. Buyer bisa membeli.
5. BANANOW menerima marketplace fee.
6. Royalty ditegakkan untuk transaksi internal marketplace.

### 12.10. Checklist Selesai

- [ ] NFT contract address final.
- [ ] Marketplace fee final.
- [ ] Royalty receiver final.
- [ ] Treasury final.
- [ ] Marketplace contract siap.
- [ ] Testnet contract deployed.
- [ ] Tests pass.
- [ ] Frontend `/nfts/` siap.
- [ ] Wallet connect berjalan.
- [ ] List NFT berjalan.
- [ ] Buy NFT berjalan.
- [ ] Cancel listing berjalan.
- [ ] Fee payout benar.
- [ ] Royalty payout benar.
- [ ] Risk disclaimer tampil.
- [ ] Mainnet launch dikontrol.

---

## 13. Stage 9 — Claps AI Parenting Chatbot Alpha

### 13.1. Tujuan

Membangun Claps sebagai AI Parenting Chatbot open-source yang membantu user ngobrol, curhat, dan berdiskusi tentang parenting secara aman, ramah, dan BANANOW.

### 13.2. URL

`/claps/`

### 13.3. Scope Alpha

Alpha harus sederhana dan aman.

Fitur awal:

1. Landing explanation.
2. AI chat interface.
3. Model selection jika sudah siap.
4. Safety disclaimer.
5. No professional advice warning.
6. Parenting-focused system prompt.
7. Conversation limit.
8. Basic curated memory/library.
9. Feedback button.
10. Clear/reset chat.

Tidak termasuk alpha awal:

1. User-generated permanent memory publik.
2. Partner revenue share otomatis.
3. Subscription billing kompleks.
4. Marketplace memory module.
5. Child account.
6. Diagnosis psikologis.
7. Emergency intervention claim.

### 13.4. Tiga Layer Model Bisnis

Claps juga memakai tiga layer:

1. End user subscription.
2. Partner memory provider.
3. Investor/sponsor.

### 13.5. End User Layer

Untuk orang tua, keluarga, komunitas, sekolah, atau organisasi yang ingin memakai chatbot parenting.

Fitur/konten:

1. Apa itu Claps.
2. Untuk siapa.
3. Apa yang bisa dibantu.
4. Apa yang tidak boleh dianggap sebagai bantuan profesional.
5. Paket subscription.
6. CTA mulai chat.

### 13.6. Partner Memory Provider Layer

Untuk pihak yang ingin menyediakan library parenting.

Contoh partner:

1. Komunitas parenting.
2. Guru.
3. Konselor.
4. Penulis.
5. Organisasi anak.
6. Praktisi pendidikan.

Fitur/konten:

1. Apa itu memory provider.
2. Standar kurasi.
3. Revenue share concept.
4. Submission flow.
5. Review process.
6. Partner application form.

### 13.7. Sponsor/Investor Layer

Untuk pihak yang ingin mendukung Claps.

Fitur/konten:

1. Problem statement.
2. Dampak sosial.
3. Potensi produk.
4. Open-source angle.
5. Sponsorship package.
6. Funding inquiry.

### 13.8. Memory Concept

Memory Claps harus dibagi dua:

1. Curated Library Memory.
2. User Interaction Memory.

Curated Library Memory:

1. Disiapkan BANANOW.
2. Dikurasi manual.
3. Bisa berasal dari partner.
4. Harus punya metadata sumber.
5. Harus bisa dinonaktifkan jika bermasalah.

User Interaction Memory:

1. Tidak boleh langsung permanen tanpa consent.
2. User harus tahu apa yang disimpan.
3. User harus bisa menghapus.
4. Untuk alpha, sebaiknya dimatikan dulu atau hanya session memory.

### 13.9. Safety Guardrails

Claps harus punya guardrail kuat.

Minimal:

1. Tidak memberi diagnosis medis/psikologis.
2. Tidak menggantikan psikolog, dokter, konselor, atau profesional hukum.
3. Tidak mendorong kekerasan pada anak.
4. Tidak menyimpan data anak tanpa consent jelas.
5. Tidak meminta data sensitif yang tidak perlu.
6. Menyarankan bantuan profesional untuk situasi berbahaya.
7. Memberi respons tenang untuk user yang panik.
8. Menghindari judgement kasar terhadap orang tua.

### 13.10. Technical Requirements

1. Vercel AI Gateway.
2. Model selector.
3. Server-side API route.
4. Rate limiting.
5. Usage logging.
6. Optional auth.
7. Memory retrieval system.
8. Admin memory dashboard nanti.
9. Privacy update.
10. Abuse prevention.

### 13.11. Output

1. `/claps/` aktif.
2. Landing page menjelaskan Claps.
3. Alpha chatbot bisa dicoba secara terbatas.
4. Safety disclaimer jelas.
5. Memory belum overbuilt.
6. Model bisnis tiga layer sudah tersampaikan.

### 13.12. Checklist Selesai

- [ ] `/claps/` tampil.
- [ ] Landing Claps rapi.
- [ ] Chat UI tampil.
- [ ] AI Gateway tersambung.
- [ ] Safety prompt aktif.
- [ ] Disclaimer tampil.
- [ ] Rate limit aktif.
- [ ] Memory alpha jelas batasnya.
- [ ] Feedback flow tersedia.
- [ ] Privacy/Terms sudah diperbarui sebelum publik.

---

## 14. Stage 10 — Admin, Auth, Database, Storage

### 14.1. Tujuan

Menyediakan fondasi backend untuk fitur yang membutuhkan data dinamis.

### 14.2. Kebutuhan Database

Dibutuhkan untuk:

1. News articles.
2. Authors/admin users.
3. Skool programs.
4. Skool registrations.
5. Partner inquiries.
6. Sponsor inquiries.
7. NFT marketplace cache/indexing jika diperlukan.
8. Claps memory library.
9. Claps feedback.
10. Subscription records jika dibuat.

### 14.3. Kebutuhan Auth

Auth dibutuhkan untuk:

1. Admin BANANOW.
2. Author Na Now News.
3. Program manager Skool Now.
4. Marketplace admin.
5. Claps admin.
6. Optional user account nanti.

### 14.4. Role Awal

Role minimum:

1. Owner.
2. Admin.
3. Author.
4. Program Manager.
5. Support.

Role nanti:

1. Partner.
2. Sponsor.
3. Subscriber.
4. Memory Provider.
5. Holder.

### 14.5. Storage

Storage dibutuhkan untuk:

1. Article cover image.
2. Program image.
3. Partner document.
4. Sponsor deck.
5. Claps memory source files.
6. NFT metadata cache jika diperlukan.

### 14.6. Admin Dashboard

Admin Dashboard tidak perlu lengkap di awal.

Prioritas:

1. News admin.
2. Skool inquiry viewer.
3. Claps feedback viewer.
4. Config viewer.

NFT admin sebaiknya dibuat hanya setelah marketplace contract siap.

### 14.7. Checklist Selesai

- [ ] Database dipilih.
- [ ] Auth dipilih.
- [ ] Storage dipilih.
- [ ] Role awal ditentukan.
- [ ] Admin route protected.
- [ ] News admin berjalan.
- [ ] Inquiry data tersimpan.
- [ ] Backup/export strategy dibuat.

---

## 15. Dependency dan Urutan Implementasi yang Disarankan

### 15.1. Urutan Besar

Urutan pengembangan BANANOW LAND harus dijaga agar tidak melebar terlalu cepat.

Urutan besar yang disarankan:

1. Repo Health Check.
2. Dependency update.
3. The Green Print final.
4. Homepage/footer/link update.
5. `/oldbrands`.
6. App foundation.
7. Legal update minimum.
8. Na Now News MVP.
9. Skool Now MVP.
10. NFT Marketplace MVP.
11. Claps Alpha.
12. Admin dashboard perluasan.
13. Legal update final per produk.
14. Public launch bertahap.

### 15.2. Kenapa Na Now News Sebelum Skool Now

Na Now News lebih sederhana dan menjadi tempat update semua pengembangan berikutnya.

Dengan News siap lebih dulu, BANANOW bisa mengumumkan:

1. The Green Print final.
2. Old Brands archive.
3. Skool Now launch.
4. NFT Marketplace launch.
5. Claps alpha.
6. Program baru.
7. Partnership baru.
8. Sponsor/investor announcement.

Na Now News juga membuat BANANOW punya kanal narasi internal yang tidak bergantung pada platform sosial.

### 15.3. Kenapa NFT Marketplace Tidak Duluan

NFT Marketplace melibatkan:

1. Smart contract.
2. Wallet connection.
3. Listing.
4. Approval NFT.
5. Pembelian.
6. Fee marketplace.
7. Royalty.
8. Treasury.
9. Transaction failure handling.
10. Risiko finansial user.

Karena itu NFT Marketplace sebaiknya tidak menjadi fitur pertama setelah pembaruan awal.

NFT Marketplace harus menunggu:

1. App foundation lebih rapi.
2. Legal update minimum tersedia.
3. Contract spec final.
4. Testnet plan tersedia.
5. Security checklist tersedia.

### 15.4. Kenapa Claps Tidak Duluan

Claps menyentuh:

1. Parenting.
2. AI.
3. Data pribadi.
4. Memory.
5. Potensi data anak.
6. Situasi emosional user.
7. Safety response.
8. Subscription.
9. Partner memory provider.

Karena itu Claps sangat potensial, tetapi harus diluncurkan hati-hati.

Claps harus dimulai dari alpha terbatas, bukan public launch penuh.

### 15.5. Urutan Paling Aman untuk Fase Awal

Fase awal yang paling aman adalah:

1. Audit repo.
2. Update dependency secara terkendali.
3. Pastikan homepage lama tetap hidup.
4. Update `Be a Head` link.
5. Update homepage brand ecosystem.
6. Update footer brands menu.
7. Update `/pung` redirect target.
8. Buat `/oldbrands`.
9. Audit semua redirect.
10. Build dan test.
11. Commit.
12. Deploy preview.
13. Browser QA.
14. Production deploy setelah aman.

### 15.6. Fitur yang Tidak Boleh Dikerjakan di Fase Awal

Agar scope tidak melebar, fase awal tidak boleh mengerjakan:

1. News CMS.
2. Database.
3. Auth.
4. Payment.
5. NFT marketplace contract.
6. Wallet connect.
7. AI chatbot.
8. Subscription.
9. Partner dashboard.
10. Investor dashboard.
11. Admin dashboard besar.

Fase awal hanya membersihkan pintu masuk BANANOW LAND.

---

## 16. Milestone Versi

### 16.1. v1.47 — Website Update

Isi:

1. Repo sehat.
2. Dependency aman.
3. Homepage updated.
4. Footer updated.
5. `Be a Head` menuju `/nfts/`.
6. `/oldbrands` aktif.
7. Mr. Pung redirect updated.
8. Redirect audit selesai.
9. The Green Print final atau minimal ready-to-publish.

Definition of done:

1. Build sukses.
2. Homepage tampil normal.
3. Tidak ada broken route internal.
4. Semua tombol penting bekerja.
5. Sound effect tombol tetap aktif.
6. Footer dan navbar konsisten.
7. Perubahan sudah dicommit.

### 16.2. v1.51 — App Foundation

Isi:

1. Komponen reusable.
2. Data config terpusat.
3. Template page siap.
4. Legal update minimum.
5. SEO basic.
6. Environment variable pattern disiapkan.

Definition of done:

1. Layout utama reusable.
2. Navbar reusable.
3. Footer reusable.
4. Button sound reusable.
5. Redirect template reusable.
6. Data link tidak tersebar acak.
7. Build sukses.

### 16.3. v1.62 — Na Now News MVP

Isi:

1. News listing.
2. Article detail.
3. Admin create/edit/publish.
4. Category/tag.
5. SEO article.

Definition of done:

1. `/news/` tampil.
2. `/news/[slug]/` tampil.
3. Admin bisa membuat artikel.
4. Admin bisa edit artikel.
5. Draft tidak tampil publik.
6. Published article tampil publik.
7. SEO dasar berjalan.

### 16.4. v1.74 — Skool Now MVP

Isi:

1. `/skool/`.
2. Program detail page.
3. Skate Skool Now.
4. Registration form.
5. Partner form.
6. Sponsor form.

Definition of done:

1. Parent page Skool Now tampil.
2. Minimal satu program detail tampil.
3. User bisa memahami program.
4. User bisa mengirim pendaftaran/inquiry.
5. Partner dan sponsor punya CTA jelas.
6. Safety note tersedia.

### 16.5. v1.85 — NFT Marketplace Testnet

Isi:

1. Marketplace contract testnet.
2. Frontend testnet.
3. Fixed-price listing.
4. Buy/cancel.
5. Fee/royalty test.

Definition of done:

1. Contract testnet deployed.
2. Listing berhasil.
3. Cancel listing berhasil.
4. Buy berhasil.
5. Fee payout benar.
6. Royalty payout benar.
7. Paused state berjalan.
8. Test transaction terdokumentasi.

### 16.6. v1.92 — NFT Marketplace Mainnet Controlled Launch

Isi:

1. Marketplace mainnet.
2. Base BANANOW collection.
3. Controlled public opening.
4. Risk disclaimer.
5. Monitoring.

Definition of done:

1. Contract mainnet deployed.
2. Frontend membaca mainnet config.
3. Satu listing/buy test berhasil dengan nilai kecil.
4. Marketplace fee diterima treasury.
5. Royalty payout benar.
6. Public launch dilakukan bertahap.

### 16.7. v2.00 — Claps Alpha

Isi:

1. Landing page.
2. Chat UI.
3. AI Gateway.
4. Safety prompt.
5. Session memory atau curated memory only.
6. Feedback flow.

Definition of done:

1. `/claps/` tampil.
2. Chat UI berjalan.
3. Model bisa dipanggil via server route.
4. Safety disclaimer tampil.
5. Rate limit aktif.
6. Dangerous parenting request ditolak aman.
7. Feedback tersimpan atau terkirim.

### 16.8. v2.11 — BANANOW LAND Operating Portal

Isi:

1. News mature.
2. Skool program management.
3. Marketplace stable.
4. Claps subscription/partner layer.
5. Admin dashboard mature.
6. Legal pages product-ready.
7. Public communication system berjalan.

Definition of done:

1. Semua modul utama berjalan.
2. Admin bisa mengelola konten dan inquiry.
3. User bisa memakai fitur utama tanpa manual intervention.
4. Monitoring dan backup tersedia.
5. Legal dan privacy sudah mengikuti fitur aktual.

---

## 17. Acceptance Criteria Global

Sebuah stage hanya dianggap selesai jika memenuhi kriteria global berikut.

### 17.1. Technical Acceptance

1. Build sukses.
2. Route bisa dibuka.
3. Tidak ada runtime error besar.
4. Tidak ada console error kritis.
5. Tidak ada broken internal link.
6. Tidak ada TypeScript error jika TypeScript digunakan.
7. Tidak ada lint error jika lint tersedia.
8. Deploy preview bisa dibuka.
9. Production deploy tidak dilakukan sebelum preview aman.

### 17.2. UI/UX Acceptance

1. Mobile responsive.
2. Desktop responsive.
3. Navbar konsisten.
4. Footer konsisten.
5. Visual tidak melenceng dari BANANOW style.
6. Button sound tetap berfungsi.
7. CTA jelas.
8. Empty state tersedia jika data kosong.
9. Error state tersedia jika fitur gagal.
10. Loading state tersedia untuk fitur dinamis.

### 17.3. Content Acceptance

1. Copy tidak placeholder kecuali sengaja ditandai.
2. Gaya bahasa sesuai BANANOW.
3. Tidak ada janji berlebihan.
4. Tidak ada klaim teknis/legal/finansial yang belum benar.
5. Istilah utama konsisten.
6. Link publik benar.
7. Metadata halaman masuk akal.

### 17.4. Web3 Acceptance

Khusus fitur Web3:

1. Wrong network ditangani.
2. Wallet rejection ditangani.
3. Transaction pending ditampilkan.
4. Transaction success ditampilkan.
5. Transaction fail ditampilkan.
6. Fee dijelaskan.
7. Royalty dijelaskan tanpa overpromise.
8. Risk disclaimer tampil.
9. Contract address benar.
10. Chain ID benar.

### 17.5. AI Acceptance

Khusus fitur AI:

1. Disclaimer tampil.
2. AI tidak mengaku sebagai profesional medis/psikologis/hukum.
3. AI tidak memberi instruksi kekerasan pada anak.
4. AI memberi arahan aman untuk situasi krisis.
5. Memory policy jelas.
6. User tahu jika data disimpan.
7. Rate limit aktif.
8. Abuse prompt ditangani.

### 17.6. Documentation Acceptance

1. Perubahan dicatat.
2. File yang diubah dicatat.
3. Command yang dijalankan dicatat.
4. Hasil build/lint/typecheck dicatat.
5. Risiko dicatat.
6. Langkah berikutnya dicatat.
7. Commit message jelas.

---

## 18. Testing Plan

### 18.1. Manual Browser Test

Wajib cek:

1. Homepage.
2. `/privacy`.
3. `/terms`.
4. `/oldbrands`.
5. `/skool/` jika sudah dibuat.
6. `/news/` jika sudah dibuat.
7. `/nfts/` jika sudah dibuat.
8. `/claps/` jika sudah dibuat.
9. Semua redirect.
10. Mobile viewport.
11. Tablet viewport jika memungkinkan.
12. Desktop viewport.
13. Button click sound.
14. Footer links.
15. Navbar links.

### 18.2. Link Test

Cek semua kelompok link:

1. Navbar links.
2. Footer links.
3. CTA buttons.
4. Social links.
5. Farmer links.
6. Brand links.
7. Legal links.
8. Manual redirect buttons.
9. Internal route links.
10. External links opened in new tab jika memang demikian desainnya.

### 18.3. Redirect Test

Route redirect yang wajib dicek:

1. `/discord`.
2. `/twitter`.
3. `/instagram`.
4. `/youtube`.
5. `/vibes`.
6. `/dermaga`.
7. `/class`.
8. `/inamotion`.
9. `/delegate`.
10. `/professor`.
11. `/v`.
12. `/pung`.
13. `/zortan`.
14. `/nota`.
15. `/novrizky`.
16. `/kainde`.

Untuk setiap redirect, cek:

1. Halaman redirect tampil.
2. Auto redirect bekerja jika ada.
3. Manual button bekerja.
4. Target URL benar.
5. Tidak ada akun lama yang masih tertulis.

### 18.4. Web3 Test Nanti

Untuk `/nfts/`:

1. Connect wallet.
2. Disconnect wallet.
3. Wrong network.
4. Switch network.
5. Read collection.
6. Load metadata.
7. Approve NFT.
8. List NFT.
9. Cancel listing.
10. Buy NFT.
11. Fee payout.
12. Royalty payout.
13. Transaction failure.
14. User rejection.
15. Paused marketplace.
16. Empty listing.
17. NFT already sold.
18. Seller no longer owns NFT.

### 18.5. AI Test Nanti

Untuk `/claps/`:

1. Normal parenting question.
2. Emotional venting.
3. Unsafe parenting request.
4. Medical/diagnosis request.
5. Crisis-like message.
6. Data deletion question.
7. Model switch.
8. Rate limit.
9. Empty response handling.
10. Abuse prompt.
11. Prompt injection.
12. Request to store sensitive child data.
13. Request for harsh punishment.
14. Request for legal advice.
15. Request for medical diagnosis.

### 18.6. Content QA

Cek:

1. Typo.
2. Tone BANANOW.
3. Konsistensi istilah.
4. Link target.
5. CTA wording.
6. Metadata title.
7. Metadata description.
8. Social preview jika ada.

### 18.7. Performance QA

Cek:

1. Page load.
2. Image size.
3. Unused dependency.
4. Bundle terlalu besar.
5. Lighthouse basic jika memungkinkan.
6. Mobile performance.

---

## 19. Data dan Asset yang Perlu Disiapkan

### 19.1. Untuk Update Awal

1. Logo Skool Now.
2. Logo Claps.
3. Logo Na Now News jika berbeda dari yang lama.
4. Logo The Old Brands jika diperlukan.
5. Deskripsi singkat Skool Now.
6. Deskripsi singkat Claps.
7. Deskripsi singkat Na Now News.
8. Deskripsi final `/oldbrands`.
9. Target link semua redirect.
10. Screenshot homepage lama.
11. Screenshot footer lama.
12. Data brand lama.
13. Data brand aktif.
14. Copy CTA.
15. Target akun baru Mr. Pung.

### 19.2. Untuk The Green Print

1. Struktur bab final.
2. Copy final.
3. Deskripsi semua role.
4. Deskripsi semua brand lama.
5. Deskripsi arah masa depan.
6. Definisi canon.
7. Final review.
8. Link internal GitBook.
9. Cover/intro image jika ada.
10. Version/final note.

### 19.3. Untuk News

1. Database.
2. Auth.
3. Storage.
4. Category list.
5. Author list.
6. Minimal 3 artikel awal.
7. Cover image default.
8. Article template.
9. Editorial guideline.
10. Admin role list.

### 19.4. Untuk Skool Now

1. Nama final program pertama.
2. Program description.
3. Paket peserta.
4. Jadwal.
5. Lokasi.
6. Form fields.
7. Partner options.
8. Sponsor options.
9. Safety/liability note.
10. Contact flow.
11. Coach/mentor profile.
12. FAQ.
13. Photo/video asset.
14. Pricing model.
15. Refund/cancellation rule.

### 19.5. Untuk NFT Marketplace

1. Contract address BANANOW NFT.
2. Chain ID Base.
3. Marketplace fee.
4. Royalty fee.
5. Royalty receiver.
6. Treasury address.
7. Contract design.
8. Testnet deployment plan.
9. Security checklist.
10. Metadata source.
11. Wallet connect decision.
12. RPC provider.
13. Explorer link.
14. Marketplace terms.
15. Risk disclaimer.

### 19.6. Untuk Claps

1. AI Gateway setup.
2. Model list.
3. System prompt.
4. Safety policy.
5. Curated library source.
6. Memory policy.
7. Disclaimer.
8. Feedback form.
9. Rate limit plan.
10. Privacy update.
11. Partner memory submission standard.
12. Escalation guidance.
13. Example conversations.
14. Prompt injection test set.
15. Data deletion flow.

---

## 20. Agent Now Execution Rules

Saat nanti dikerjakan, instruksi harus ketat agar tidak melebar dari scope.

### 20.1. Aturan Umum

1. Jangan mengubah visual besar tanpa diminta.
2. Jangan menghapus sound effect tombol.
3. Jangan mengganti font global tanpa diminta.
4. Jangan mengganti color system global tanpa diminta.
5. Jangan menghapus route lama.
6. Jangan mengubah target redirect selain yang diminta.
7. Jangan membuat fitur auth/database sebelum stage-nya.
8. Jangan membuat marketplace contract tanpa spec final.
9. Jangan membuat chatbot publik tanpa safety disclaimer.
10. Selalu jalankan build setelah perubahan besar.
11. Selalu catat file yang diubah.
12. Selalu cek mobile responsive.
13. Jangan menghapus legal pages.
14. Jangan memindahkan link Green Print tanpa diminta.
15. Jangan membuat route baru yang bentrok dengan route lama.

### 20.2. Instruksi untuk Stage Awal

Kerjakan hanya:

1. Audit repo.
2. Dependency update aman.
3. Update `Be a Head` links.
4. Update homepage brand ecosystem.
5. Update footer brand menu.
6. Update `/pung` target.
7. Buat `/oldbrands`.
8. Pastikan visual lama tetap.
9. Audit redirect.
10. Build dan test.

Jangan kerjakan dulu:

1. News CMS.
2. Skool forms.
3. NFT marketplace contract.
4. Claps chatbot.
5. Auth.
6. Database.
7. Payment.
8. Subscription.
9. Partner dashboard.
10. Sponsor dashboard.

### 20.3. Format Laporan yang Diinginkan

Setelah bekerja, harus melaporkan:

1. Summary perubahan.
2. File yang diubah.
3. Command yang dijalankan.
4. Hasil build/lint/typecheck.
5. Hal yang belum dilakukan.
6. Risiko atau catatan.
7. Langkah berikutnya.
8. Apakah ada perubahan visual signifikan.
9. Apakah ada route yang belum bisa dites.
10. Apakah ada dependency yang sengaja tidak diupdate.

### 20.4. Commit Discipline

Setiap stage harus punya commit yang jelas.

Contoh commit message:

1. `chore: audit and update BANANOW LAND dependencies`
2. `feat: add old brands archive page`
3. `chore: update BANANOW active brand links`
4. `fix: update Pung redirect target`
5. `feat: add Na Now News MVP`
6. `feat: add Skool Now landing pages`
7. `feat: add BANANOW NFT marketplace testnet`
8. `feat: add Claps AI parenting alpha`

### 20.5. Branch Discipline

Gunakan branch per stage.

Contoh:

1. `stage-0-repo-health`
2. `stage-1-site-update`
3. `stage-2-app-foundation`
4. `stage-3-news-mvp`
5. `stage-4-skool-mvp`
6. `stage-5-nft-marketplace-testnet`
7. `stage-6-claps-alpha`

---

## 21. Risiko Besar dan Pencegahannya

### 21.1. Scope Creep

Risiko:

Pengembangan melebar terlalu cepat.

Pencegahan:

1. Stage dipisah.
2. MVP didefinisikan.
3. Fitur non-MVP ditunda.
4. Jangan membangun semua modul sekaligus.
5. Gunakan prompt sempit.
6. Setiap stage punya definition of done.

### 21.2. Identity Drift

Risiko:

BANANOW berubah terasa seperti aplikasi korporat biasa.

Pencegahan:

1. Pertahankan bahasa LAND.
2. Pertahankan visual playful.
3. Pertahankan sound effect.
4. Gunakan copy yang hangat.
5. Jangan terlalu banyak komponen generik SaaS.
6. Review setiap halaman dengan pertanyaan: “Apakah ini masih terasa BANANOW?”

### 21.3. Technical Debt

Risiko:

Banyak fitur ditambah tanpa struktur.

Pencegahan:

1. App foundation sebelum fitur besar.
2. Data config terpusat.
3. Komponen reusable.
4. Build/lint rutin.
5. Hindari hardcode link berulang.
6. Dokumentasikan env.

### 21.4. Legal/Privacy Risk

Risiko:

AI, marketplace, payment, dan forms mengumpulkan data tanpa legal update.

Pencegahan:

1. Update Privacy/Terms sebelum fitur publik.
2. Tambahkan disclaimer.
3. Batasi memory Claps.
4. Hindari pengumpulan data sensitif yang tidak perlu.
5. Sediakan data deletion flow.
6. Jelaskan third-party services.

### 21.5. Web3 Financial Risk

Risiko:

Marketplace bermasalah dan menyebabkan kerugian user.

Pencegahan:

1. Testnet dulu.
2. Audit internal.
3. Fitur sederhana dulu.
4. Pause mechanism.
5. Clear transaction UI.
6. Jangan launching tanpa test buy/list/cancel.
7. Tampilkan risk disclaimer.

### 21.6. AI Safety Risk

Risiko:

Claps memberi saran parenting yang berbahaya atau terlalu percaya diri.

Pencegahan:

1. Safety prompt.
2. Disclaimer.
3. Crisis handling.
4. No diagnosis.
5. No violence.
6. Human/professional escalation guidance.
7. Prompt injection tests.
8. Logging dan feedback untuk evaluasi.

### 21.7. Dependency Update Risk

Risiko:

Package update mematahkan layout, audio, build, atau deployment.

Pencegahan:

1. Commit sebelum update.
2. Update bertahap.
3. Build setelah update.
4. Screenshot before/after.
5. Jangan upgrade major version tanpa membaca breaking changes.
6. Jangan refactor UI bersamaan dengan dependency update besar.

### 21.8. Content Inconsistency Risk

Risiko:

Istilah BANANOW tidak konsisten antara homepage, Green Print, News, Skool, NFTs, dan Claps.

Pencegahan:

1. Buat glossary.
2. Tetapkan istilah aktif.
3. Tetapkan istilah lama.
4. Review copy per stage.
5. Jangan mencampur istilah old brands dan active brands.

---

## 22. Definisi Selesai untuk Development Map

Development Map dianggap selesai jika sudah memuat:

1. Tujuan besar.
2. Prinsip pengembangan.
3. Peta halaman.
4. Stage pembaruan awal.
5. Stage pengembangan produk.
6. Kebutuhan data dan asset.
7. Testing plan.
8. Risiko dan mitigasi.
9. Aturan eksekusi.
10. Acceptance criteria.
11. Milestone versi.
12. Dashboard/backend direction.
13. Legal/privacy notes.
14. Web3 risk notes.
15. AI safety notes.

Dokumen ini tidak menggantikan spec teknis detail per modul.

Setelah dokumen ini, dokumen turunan yang perlu dibuat:

1. The Green Print Content Map.
2. BANANOW LAND Update Task Spec.
3. Na Now News Product Spec.
4. Skool Now Product Spec.
5. BANANOW NFT Marketplace Technical Spec.
6. Claps AI Parenting Chatbot Safety and Product Spec.
7. Stage 0 Prompt.
8. Stage 1 Prompt.

---

## 23. Langkah Berikutnya

Langkah berikutnya yang paling tepat adalah menyusun dokumen turunan pertama: **BANANOW LAND Update Task Spec**

Dokumen itu harus lebih teknis dan langsung bisa diberikan untuk eksekusi pembaruan awal.

Scope BANANOW LAND Update Task Spec:

1. Repo audit.
2. Dependency update.
3. Homepage active brands update.
4. Footer brands menu update.
5. `Be a Head` link update.
6. `/pung` target update.
7. `/oldbrands` page creation.
8. Redirect audit.
9. Build/test.
10. Commit/report format.

BANANOW LAND Update Task Spec harus lebih pendek dari Development Map ini, tetapi lebih presisi untuk eksekusi.

Isi minimalnya:

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

Setelah BANANOW LAND Update Task Spec selesai, barulah pekerjaan bisa masuk ke eksekusi dengan risiko lebih kecil untuk melenceng.

---

## 24. Penutup

BANANOW LAND Development Map adalah peta induk.

Menjelaskan fondasi, halaman, stage awal, The Green Print, update homepage, `/oldbrands`, legal, app foundation, News, Skool, NFT Marketplace, Claps, dan backend/admin direction.

Lalu menjelaskan urutan implementasi, milestone versi, acceptance criteria, testing, kebutuhan asset, aturan eksekusi, risiko, definisi selesai, dan langkah berikutnya.

Dengan pembagian ini, BANANOW LAND bisa dikembangkan tanpa kehilangan rasa awalnya dan tanpa terjebak membangun terlalu banyak hal sekaligus.

---

P.S. Read this document freely for information and guidance. Do not redistribute or restate—no quotes, summaries, paraphrases, or derivatives—without prior written permission from [**Prof. NOTA**](https://nota.endhonesa.com/). Sharing the link is allowed. So, share the link, not the text. Do not discuss or re-tell the contents in any form—written, spoken, or recorded—without prior written permission.

---
