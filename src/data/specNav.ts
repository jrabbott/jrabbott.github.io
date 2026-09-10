import type { CollectionEntry } from 'astro:content';

export type SpecNavItem = {
  href: string;
  label: string;
  id: string;
};

function assertUnique(values: string[], field: 'order' | 'navId') {
  const seen = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) {
      throw new Error(`Duplicate spec frontmatter ${field}: ${value}`);
    }
    seen.add(value);
  }
}

export function buildSpecNav(docs: CollectionEntry<'spec'>[]): SpecNavItem[] {
  assertUnique(
    docs.map((doc) => String(doc.data.order)),
    'order',
  );
  assertUnique(
    docs.map((doc) => doc.data.navId),
    'navId',
  );

  return [...docs]
    .sort((a, b) => a.data.order - b.data.order)
    .map((doc) => ({
      id: doc.data.navId,
      label: doc.data.title,
      href: doc.id === 'index' ? '/spec/' : `/spec/${doc.id}/`,
    }));
}
