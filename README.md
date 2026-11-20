# ServerX OFC — Coming Soon

## Isi project
- `public/index.html` — halaman Coming Soon
- `public/styles.css` — tampilan responsif
- `public/assets/serverx-wallpaper.jpg` — wallpaper dari gambar pertama
- `public/assets/favicon.png` — ikon dari gambar kedua
- `server.js` — server Express untuk hosting Node.js
- `package.json` — konfigurasi dan dependency Node.js
- `wrangler.toml` — konfigurasi dasar Cloudflare Pages
- `public/_headers` dan `public/_redirects` — aturan Cloudflare Pages

## Jalankan di hosting Node.js (Wispbyte/Quaxly)
1. Upload dan ekstrak isi ZIP ke folder project.
2. Pastikan hosting menggunakan Node.js.
3. Jalankan instalasi dependency melalui fitur instalasi package hosting (`npm install` jika tersedia).
4. Set Startup Command menjadi `npm start` atau `node server.js`.
5. Server menggunakan `process.env.PORT` dan bind ke `0.0.0.0`.

## Deploy sebagai Cloudflare Pages
1. Upload project ini ke repository Git.
2. Buat project Cloudflare Pages dan hubungkan repository.
3. Framework preset: None.
4. Build command: kosongkan.
5. Build output directory: `public`.
6. Setelah deploy, Pages memberikan alamat `*.pages.dev`.
7. Custom domain pada Pages memerlukan domain yang kamu miliki dan tambahkan ke Cloudflare.

Catatan: Cloudflare Pages menyajikan frontend statis. File `server.js` adalah opsi untuk hosting Node.js terpisah; Pages tidak menjalankan Express server.js.

## Tentang Cloudflare Tunnel
Project ini belum menjalankan atau mengaktifkan Tunnel secara otomatis. Tunnel membutuhkan `cloudflared` yang dapat dijalankan terus-menerus di lingkungan hosting atau mesin perantara. Startup Command yang bisa diedit saja belum membuktikan executable tersebut tersedia.
