# Contributing

Thanks for helping improve IndopenSource.org.

## Development

```bash
npm install
npm run dev
```

Before opening a pull request:

```bash
npm test
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
- Use `withBase()` for internal links that must remain valid when `ASTRO_BASE`
  is set by CI or a preview environment.
- Run `npm test` and `npm run build`, then include the results in the PR description.
- For content or roadmap changes, link the relevant issue or discussion.

## Community Directory

The Community page reads `src/data/communities.json`. To propose one community,
add one object containing:

- `name`
- `description`
- `url` pointing to an official channel
- optional `focus`
- optional `location`

Keep one community per pull request and explain your relationship to it or add a
source that reviewers can verify. Do not add inferred or inactive communities.

## Content Quality

- Lead with a direct summary before background detail.
- Cite primary sources for factual claims and include the relevant date.
- Use descriptive headings and stable internal links to related pages.
- Identify authors and keep publication and update dates traceable.
- Do not add speculative facts, generated statistics, or special AI-search
  markup that is not supported by search-engine documentation.

## Production Release

The `release` branch is reserved for Cloudflare production deployments. Only
IndopenSource organization members may update it, through a pull request from
`main` that passes CI. Merge production promotion pull requests with a merge
commit so `main` remains in the `release` history.

Cloudflare creates a branch preview for contribution pull requests. Review that
preview before promoting `main` to `release`; use
[`docs/release-checklist.md`](docs/release-checklist.md) for the production pass.
