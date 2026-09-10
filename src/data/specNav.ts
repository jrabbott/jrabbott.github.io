import type { CollectionEntry } from 'astro:content';

export type SpecNavItem = {
  href: string;
  label: string;
  id: string;
};

export function buildSpecNav(docs: CollectionEntry<'spec'>[]): SpecNavItem[] {
  return [...docs]
    .sort((a, b) => a.data.order - b.data.order)
    .map((doc) => ({
      id: doc.data.navId,
      label: doc.data.title,
      href: doc.id === 'index' ? '/spec/' : `/spec/${doc.id}/`,
    }));
}
