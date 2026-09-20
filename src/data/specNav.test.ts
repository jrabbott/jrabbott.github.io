import { describe, expect, it } from 'vitest';
import { buildSpecNav, type SpecNavItem } from './specNav';
import { projectHref } from './projects';

type SpecDoc = Parameters<typeof buildSpecNav>[0][number];

function fakeDoc(partial: { id: string; title: string; order: number; navId: string }): SpecDoc {
  return {
    id: partial.id,
    collection: 'spec',
    data: {
      title: partial.title,
      description: 'test',
      order: partial.order,
      navId: partial.navId,
    },
  } as SpecDoc;
}

describe('buildSpecNav', () => {
  it('sorts by order and maps overview to /spec/', () => {
    const nav: SpecNavItem[] = buildSpecNav([
      fakeDoc({ id: 'comms', title: 'POST /communication', order: 4, navId: 'comms' }),
      fakeDoc({ id: 'index', title: 'GET /overview', order: 1, navId: 'index' }),
    ]);

    expect(nav).toEqual([
      { id: 'index', label: 'GET /overview', href: '/spec/' },
      { id: 'comms', label: 'POST /communication', href: '/spec/comms/' },
    ]);
  });

  it('throws on duplicate order', () => {
    expect(() =>
      buildSpecNav([
        fakeDoc({ id: 'a', title: 'A', order: 1, navId: 'a' }),
        fakeDoc({ id: 'b', title: 'B', order: 1, navId: 'b' }),
      ]),
    ).toThrow(/Duplicate spec frontmatter order/);
  });

  it('throws on duplicate navId', () => {
    expect(() =>
      buildSpecNav([
        fakeDoc({ id: 'a', title: 'A', order: 1, navId: 'same' }),
        fakeDoc({ id: 'b', title: 'B', order: 2, navId: 'same' }),
      ]),
    ).toThrow(/Duplicate spec frontmatter navId/);
  });
});

describe('projectHref', () => {
  it('returns an in-page project anchor', () => {
    expect(projectHref('digital-assessment-service')).toBe('/projects/#digital-assessment-service');
  });
});
