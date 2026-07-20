# IndopenSource.org

[![CI](https://github.com/IndopenSource/indopensource.org/actions/workflows/ci.yml/badge.svg)](https://github.com/IndopenSource/indopensource.org/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Website komunitas dan direktori open source Indonesia di `https://indopensource.org`.

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript
- GitHub Actions
- Cloudflare Workers Static Assets

## Pages

- Home: pintu masuk ke direktori, roadmap, pembelajaran, dan kontribusi.
- Falsafah: prinsip komunitas dan kurasi open source Indonesia.
- Projects: direktori proyek dari `IndopenSource/awesome-indonesia`.
- Top User: peringkat pemilik repository berdasarkan akumulasi stars.
- Komunitas: direktori komunitas yang diusulkan melalui pull request.
- Roadmap: rencana kerja publik 2026–2027.
- Belajar dan Blog: materi serta artikel yang disinkronkan dari repository sumber.
- Donasi: informasi OpenSawer, sponsorship, CSR, dan dukungan non-dana.
- Forum dan Kontak: GitHub Discussions serta kanal resmi IndopenSource.

## Development

```bash
npm install
npm run dev
```

Sinkronisasi data bersifat opsional untuk pengembangan UI. File hasil sinkronisasi
yang diperlukan sudah tersedia di `src/data/`.

## Project Structure

```txt
src/
  components/   Reusable Astro UI components
  data/         Synced project directory data
  layouts/      Shared page layout
  lib/          Small shared helpers
  pages/        Route files
  styles/       Tailwind entrypoint and theme tokens
```

## Checks

```bash
npm test
npm run check
npm run build
```

## Deployment

Cloudflare terhubung langsung ke repository dan membuat preview untuk pull
request atau branch non-production. Production hanya dibangun dari branch
`release`.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Output directory: `dist`
- Konfigurasi Worker: `wrangler.jsonc`
- Production branch: `release`
- Custom domain: `indopensource.org`

Semua kontribusi masuk ke `main`. Anggota organisasi mempromosikan versi yang
sudah diuji melalui pull request dari `main` ke `release`; jangan membuka pull
request kontribusi langsung ke `release`.

Workflow GitHub Pages lama masih berada di `.github/workflows/deploy-pages.yml`
dan bukan sumber deployment production Cloudflare. Putuskan penghapusan atau
perannya sebagai fallback sebelum release publik agar tidak ada dua jalur deploy
yang dianggap aktif.

Lihat [checklist release](docs/release-checklist.md) sebelum mempromosikan
`main` ke `release`.

## Project Sync

`npm run sync:projects` membaca `repos.json` dari `IndopenSource/awesome-indonesia`,
lalu mengambil metadata repo dari GitHub API dan menulis hasilnya ke
`src/data/projects.json`.

Gunakan `GITHUB_TOKEN` atau `GH_TOKEN` untuk rate limit yang lebih lega.

## Blog Sync

`npm run sync:blog` membaca artikel Markdown dari
`IndopenSource/Blog-IndopenSource`, mengambil tanggal commit pertama, commit
terbaru, dan seluruh kontributor unik setiap artikel, lalu menulis hasilnya ke
`src/data/blog-posts.json`. Halaman artikel menautkan commit terbaru tersebut
agar riwayat sumber dapat diperiksa langsung.

## Auto Sync

Workflow `.github/workflows/sync-content.yml` memperbarui data secara otomatis.

- Manual: jalankan workflow `Sync content data`.
- Schedule: berjalan setiap 6 jam.
- Dispatch dari repo lain:
  - `sync-projects`
  - `sync-blog`
  - `sync-content`

Jika data berubah, workflow membuat commit `Sync content data`. Setelah commit
masuk `main`, perubahan mengikuti validasi dan alur promosi `main` ke `release`.
Workflow ini masih memuat langkah deployment GitHub Pages lama; jangan menganggap
hasil tersebut sebagai production Cloudflare.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
