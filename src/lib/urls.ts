export function withBase(path: string) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${baseUrl}${path.replace(/^\/+/, '')}`;
}

export function normalizeHref(href: string) {
  if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:')) return href;
  if (/^[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(href)) return `https://${href}`;
  return withBase(href);
}

// Allowlist http/https/mailto for content-derived hrefs (author profile, etc.).
// Returns '' for javascript:/data:/vbscript: or anything unparseable so callers
// fall back to plain text. Absolute URLs only — a bare profile link is absolute.
export function safeHref(href: string | undefined | null) {
  if (!href) return '';
  try {
    return /^(https?:|mailto:)$/.test(new URL(href).protocol) ? href : '';
  } catch {
    return '';
  }
}
