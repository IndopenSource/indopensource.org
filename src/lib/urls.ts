export function withBase(path: string) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${baseUrl}${path.replace(/^\/+/, '')}`;
}

export function normalizeHref(href: string) {
  if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:')) return href;
  if (/^[\w.-]+\.[a-z]{2,}(\/.*)?$/i.test(href)) return `https://${href}`;
  return withBase(href);
}
