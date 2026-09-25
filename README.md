# WRBC — Company Profile (Next.js)

Contoh website company profile untuk **WRBC**, dibuat dengan Next.js 14
(App Router), TypeScript, dan Tailwind CSS. Tema visual kuning–hitam,
terinspirasi dari identitas industri keamanan (CCTV) dan hazard stripe
material bangunan.

## Struktur Halaman

- `/` — Beranda: hero, statistik, ringkasan 4 layanan, alasan memilih WRBC, alur kerja
- `/tentang` — Tentang Kami: cerita perusahaan, visi & misi, nilai kerja
- `/layanan` — Detail 4 layanan: CCTV, Solusi IT, Furniture & Interior, Material Bangunan
- `/portofolio` — Contoh kategori pekerjaan (placeholder, ganti dengan proyek asli)
- `/kontak` — Form kontak (kirim ke WhatsApp), info kontak, peta

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Sebelum dipublikasikan — yang perlu diganti

Ini adalah **contoh/template**, jadi beberapa bagian masih berisi data
placeholder. Ganti sebelum deploy ke produksi:

1. **Nomor WhatsApp** — `components/ContactForm.tsx`, konstanta
   `WHATSAPP_NUMBER`.
2. **Alamat, telepon, email, jam operasional** — muncul di
   `components/Footer.tsx` dan `app/kontak/page.tsx`.
3. **Lokasi peta** — `app/kontak/page.tsx`, ganti query pada `src` iframe
   Google Maps dengan alamat asli.
4. **Angka statistik di Beranda** (jumlah titik CCTV, tahun berdiri, dll)
   — `app/page.tsx`, array `stats`.
5. **Foto proyek asli** untuk halaman Portofolio — saat ini memakai
   ilustrasi ikon, bukan foto asli.
6. **Metadata** (judul & deskripsi situs) — `app/layout.tsx`.

## Kustomisasi warna & font

Token desain ada di `tailwind.config.ts`:

- `ink` — warna dasar gelap (background)
- `signal` — kuning utama (aksen, tombol, ikon)
- `paper` — warna teks terang

Font diatur lewat `next/font/google` di `app/layout.tsx` (Archivo untuk
judul, Inter untuk teks).

## Deploy ke Vercel

1. Push project ini ke repository GitHub/GitLab/Bitbucket.
2. Buka [vercel.com](https://vercel.com), pilih **Add New → Project**,
   lalu import repository tersebut.
3. Vercel akan otomatis mendeteksi framework Next.js — biarkan pengaturan
   default (`next build`), lalu klik **Deploy**.
4. Setelah selesai, situs akan tersedia di domain `*.vercel.app`, dan bisa
   dihubungkan ke domain sendiri lewat menu **Settings → Domains**.

Alternatif tanpa Git, gunakan Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Struktur Teknis

```
app/
  layout.tsx        # Root layout, font, metadata
  page.tsx           # Beranda
  globals.css        # Gaya dasar & motif berulang
  icon.tsx            # Favicon (generated)
  not-found.tsx        # Halaman 404
  tentang/page.tsx
  layanan/page.tsx
  portofolio/page.tsx
  kontak/page.tsx
components/
  Navbar.tsx
  Footer.tsx
  ContactForm.tsx
```
