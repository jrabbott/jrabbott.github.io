const SITE_NAME = 'Jon Abbott';
const TITLE_SEP = ' · ';

export function documentTitle(page: string): string {
  return `${page}${TITLE_SEP}${SITE_NAME}`;
}

export function homeDocumentTitle(tagline: string): string {
  return `${SITE_NAME}${TITLE_SEP}${tagline}`;
}
