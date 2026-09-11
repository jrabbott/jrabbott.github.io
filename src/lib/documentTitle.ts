const SITE_NAME = 'Jon Abbott';
const TITLE_SEP = ' · ';

export function documentTitle(page: string): string {
  return `${page}${TITLE_SEP}${SITE_NAME}`;
}
