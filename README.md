# Web Portofolio Wardah Tri Masayu

## Deskripsi Situs

Web Portofolio Pribadi milik **Wardah Tri Masayu**, mahasiswa Program Studi Statistika, Fakultas Matematika dan Ilmu
Pengetahuan Alam (FMIPA), Universitas Cenderawasih. Situs ini dibuat sebagai hasil **Quiz Take Home Web Portofolio**
untuk mata kuliah **Algoritma Pemrograman**.

Portofolio ini menampilkan profil, pendidikan, keahlian, proyek atau karya tugas kuliah, catatan akademik, data GitHub,
visualisasi statistik, kalkulator statistika, serta informasi kontak Wardah. Website disusun dengan minat pada
**analisis data**, **pemrograman**, dan **analisis keuangan**.

- Situs: https://github.io
- GitHub Pages: https://wardahtrimasayu.github.io
- Repositori: https://github.com/wardahtrimasayu/wardahtrimasayu.github.io

## Informasi Tema Astro

- **Nama tema:** Terminal Noir
- **Pembuat:** Fernando Moreira (`nandomoreira.dev`)
- **Profil pembuat:** https://github.com/nandomoreirame
- **Repositori tema:** https://github.com/nandomoreirame/terminalnoir-astro-theme
- **Lisensi:** MIT

Tema mengusung palet gelap **Noir** dan mode terang **Paper**. Informasi pencantuman tema, lisensi, dan sumber aset
visual juga tersedia pada `LICENSE` dan `docs/credits.md`. Repositori serta daftar galeri tema Astro tercatat sebagai
bagian publikasi tema dalam `docs/publication.md`.

## Teknologi yang Digunakan

- Astro 7
- TypeScript
- Tailwind CSS 4
- Astro Icon dan Iconify
- Zod untuk validasi data
- Vitest untuk pengujian unit/komponen
- Playwright untuk pengujian browser
- Astro Sitemap
- Fontsource (Inter, Newsreader, dan JetBrains Mono)

## Daftar Fitur

### Bahasa dan Navigasi

- Mendukung bahasa **Indonesia (`id`)** dan **Inggris (`en`)**.
- Bahasa Indonesia adalah bahasa default dan terbuka tanpa prefiks, misalnya `/`.
- Bahasa Inggris tersedia dengan prefiks `/en`, misalnya `/en/about`.
- Pemilih bahasa menampilkan label **Indonesia** dan **English**.
- Canonical URL, sitemap, dan pranala `hreflang` disediakan untuk kedua bahasa.

### Halaman Website

- **Beranda:** hero section, foto profil vertikal, tombol navigasi, integrasi unggulan, dan CTA.
- **Tentang Saya:** foto profil, latar belakang, minat, pilar keahlian, pendidikan, dan tujuan.
- **Proyek/Karya:** daftar tiga tugas kuliah beserta judul, deskripsi, teknologi, dan tautan repositori GitHub.
- **Keahlian:** empat bidang keahlian utama.
- **Kontak:** informasi email/GitHub dan formulir pesan.
- **Visualisasi:** grafik statistik dalam bentuk visual responsif.
- **Statistik:** ringkasan profil GitHub dan distribusi teknologi.
- **Blog:** catatan akademik mengenai statistika dan pengolahan data.
- **Kalkulator Statistika:** menghitung jumlah data, rata-rata, median, minimum, maksimum, dan rentang dari angka yang
  dipisahkan koma.

### Tampilan dan Interaksi

- Mode tampilan **Noir** dan **Paper** yang dapat dipilih pengguna.
- Pilihan tema disimpan pada `localStorage`.
- Desain responsif untuk desktop, tablet, dan perangkat mobile.
- Pencarian proyek berdasarkan nama, slug, kategori, dan teknologi.
- Halaman detail untuk setiap proyek.
- Foto profil vertikal yang rapi pada hero dan halaman About.
- Navigasi aktif, breadcrumb, ikon, tombol tema, serta status tema yang dapat diakses.
- Skip link untuk aksesibilitas keyboard.
- Pembuatan halaman statis untuk performa dan kemudahan deployment ke GitHub Pages.

## Struktur Proyek

```text
.
├── public/
│   ├── images/               # Foto profil dan aset gambar
│   └── favicon.svg
├── src/
│   ├── components/           # Komponen Astro (section, kartu, kalkulator, navigasi)
│   ├── config/               # Konfigurasi nama situs, CTA, navigasi, dan hero
│   ├── content/docs/         # Konten dokumentasi dalam id dan en
│   ├── data/                 # Data proyek, tema, dan palet warna
│   ├── i18n/                 # Konfigurasi locale dan kamus Bahasa Indonesia/Inggris
│   ├── layouts/              # Layout utama dan pemilihan tema
│   ├── lib/                  # Helper URL, SEO, data proyek, dan dokumentasi
│   ├── pages/                # Rute halaman id
│   │   └── en/               # Rute halaman bahasa Inggris
│   └── views/                # Tampilan berulang untuk halaman utama dan detail
├── tests/                    # Pengujian integrasi dan browser
├── astro.config.mjs          # Konfigurasi Astro, sitemap, dan i18n
└── package.json
```

## Cara Menjalankan Secara Lokal

### 1. Persyaratan

- Node.js **22.22.0 atau lebih baru**
- npm
- Git

### 2. Clone Repositori

```bash
git clone https://github.com/wardahtrimasayu/wardahtrimasayu.github.io.git
cd wardahtrimasayu.github.io
```

### 3. Pasang Dependensi

```bash
npm install
```

### 4. Jalankan Server Pengembangan

```bash
npm run dev
```

Buka alamat yang ditampilkan oleh Astro, umumnya:

```text
http://localhost:4321
```

Halaman default menggunakan bahasa Indonesia. Versi Inggris dapat dibuka melalui rute `/en`.

### 5. Jalankan Pengecekan

```bash
npm run check
npm test
npm run format:check
```

Untuk menjalankan seluruh pengecekan yang tersedia:

```bash
npm run verify
```

### 6. Build untuk Produksi

```bash
npm run build
```

Hasil build statis akan tersimpan pada direktori `dist/`.

### 7. Pratinjau Build Produksi

```bash
npm run preview
```

## Kustomisasi Konten

- Informasi situs, CTA, navigasi, dan teks hero: `src/config/site.ts`
- Terjemahan antar muka: `src/i18n/ui.ts`
- Data tiga proyek: `src/data/integrations.json`
- Foto profil: `public/images/profil.jpeg`
- Halaman statis: `src/pages/`
- Komponen tampilan: `src/views/` dan `src/components/`

## Lisensi

Proyek portofolio mengikuti lisensi MIT yang tercantum pada `LICENSE`.
