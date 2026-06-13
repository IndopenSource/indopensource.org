# IndopenSource.org

Website roadmap untuk `https://indopensource.org`.

## Pages

- Home: ringkasan roadmap dan arah website.
- Falsafah: prinsip komunitas dan kurasi open source Indonesia.
- Projects: direktori dari `IndopenSource/awesome-indonesia`.
- Blog: placeholder untuk repo khusus `IndopenSource/Blog-IndopenSource`.
- Forum: rencana integrasi `https://github.com/orgs/IndopenSource/discussions`.
- Contact: kanal GitHub organization, projects, dan discussions.

## Development

```bash
npm install
npm run sync:projects
npm run dev
```

## MVP Pre-release

MVP awal berfokus pada homepage sebagai pintu masuk roadmap IndopenSource:

- Home menjelaskan posisi `indopensource.org`.
- Projects sudah punya data awal dari `awesome-indonesia`.
- Falsafah, Blog, Forum, dan Contact tersedia sebagai halaman roadmap.
- Deployment memakai GitHub Pages bawaan repo lewat GitHub Actions.

Rilis pre-release bisa dibuat dari tag `v0.1.0-mvp` setelah workflow Pages hijau.

## Deployment

GitHub Pages memakai workflow `.github/workflows/deploy-pages.yml`.

- Build command: `npm run build`
- Output directory: `dist`
- Source: GitHub Actions

Aktifkan Pages di repository settings dengan source `GitHub Actions`, lalu push ke
`main` atau jalankan workflow `Deploy to GitHub Pages` secara manual.

## Project Sync

`npm run sync:projects` membaca `repos.json` dari `IndopenSource/awesome-indonesia`,
lalu mengambil metadata repo dari GitHub API dan menulis hasilnya ke
`src/data/projects.json`.

Gunakan `GITHUB_TOKEN` atau `GH_TOKEN` untuk rate limit yang lebih lega.
