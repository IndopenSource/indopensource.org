# Contributing

Thanks for helping improve IndopenSource.org.

## Development

```bash
npm install
npm run sync:projects
npm run dev
```

Before opening a pull request:

```bash
npm run build
```

## Project Directory Data

The Projects page is generated from `src/data/projects.json`.

To refresh it from `IndopenSource/awesome-indonesia`:

```bash
GITHUB_TOKEN=your-token npm run sync:projects
```

Use `GITHUB_TOKEN` or `GH_TOKEN` to avoid low GitHub API rate limits.

## Pull Request Guidelines

- Target all contribution pull requests to `main`.
- Do not target `release`; organization members use it only to promote a tested
  `main` commit to production.
- Keep changes focused.
- Prefer Astro components in `src/components` over large page-only markup.
- Keep internal links compatible with GitHub Pages base paths by using `withBase()`.
- Run `npm run build` and include the result in the PR description.
- For content or roadmap changes, link the relevant issue or discussion.

## Production Release

The `release` branch is reserved for Cloudflare production deployments. Only
IndopenSource organization members may update it, through a pull request from
`main` that passes CI. Merge production promotion pull requests with a merge
commit so `main` remains in the `release` history.
