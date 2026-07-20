# Release checklist

Production is promoted from `main` to `release` through a pull request opened by
an IndopenSource organization member.

## Before promotion

- [ ] Contribution pull requests are merged into `main` and CI is green.
- [ ] Cloudflare branch preview has been checked on desktop and mobile.
- [ ] `npm test` and `npm run build` pass from the intended release commit.
- [ ] Navigation, project detail pages, `/donasi/`, `/komunitas/`, `/roadmap/`,
      `/sitemap.xml`, and the `/sponsors/` redirect have been checked.
- [ ] `admin@`, `press@`, `sponsor@`, and `legal@indopensource.org` can receive
      mail, or links to inactive addresses have been removed.
- [ ] DNS, custom domain, TLS, and the Cloudflare production branch are correct.
- [ ] The role of the legacy GitHub Pages workflows has been decided.

## Promote

1. Open a pull request from `main` to `release`.
2. Require green CI and review the diff for unexpected generated data.
3. Merge with a merge commit so `main` remains in the `release` history.
4. Wait for the Cloudflare production deployment to pass.

## After deployment

- [ ] Smoke-test `https://indopensource.org/` and the primary navigation.
- [ ] Confirm canonical URLs, robots, sitemap, favicon, and social previews.
- [ ] Send a test message to each published email address.
- [ ] Record the production commit or tag as the rollback point.
