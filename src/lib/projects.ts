export function projectSlug(fullName: string) {
  return fullName.toLowerCase().replace('/', '--').replace(/[^a-z0-9-]+/g, '-');
}

export function projectFullNameFromSlug(slug: string) {
  return slug.replace('--', '/');
}
