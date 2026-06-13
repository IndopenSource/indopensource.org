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

## Project Sync

`npm run sync:projects` membaca `repos.json` dari `IndopenSource/awesome-indonesia`,
lalu mengambil metadata repo dari GitHub API dan menulis hasilnya ke
`src/data/projects.json`.

Gunakan `GITHUB_TOKEN` atau `GH_TOKEN` untuk rate limit yang lebih lega.
