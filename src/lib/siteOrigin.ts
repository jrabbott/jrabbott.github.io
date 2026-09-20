export function siteOrigin(site: URL | undefined): string {
  if (!site) {
    throw new Error('Astro.site is required. Set `site` in astro.config.mjs.');
  }
  return site.href;
}
