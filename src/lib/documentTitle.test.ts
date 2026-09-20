import { describe, expect, it } from 'vitest';
import { blogPostPath } from './blogMeta';
import { documentTitle } from './documentTitle';
import { formatDate } from './formatDate';
import { siteOrigin } from './siteOrigin';

describe('documentTitle', () => {
  it('joins page title with site name', () => {
    expect(documentTitle('Blog')).toBe('Blog · Jon Abbott');
  });
});

describe('formatDate', () => {
  it('formats dates in en-GB short form', () => {
    const label = formatDate(new Date('2026-02-19T12:00:00Z'));
    expect(label).toContain('19');
    expect(label).toContain('2026');
  });
});

describe('siteOrigin', () => {
  it('returns the site href', () => {
    expect(siteOrigin(new URL('https://jrabbott.github.io/'))).toBe('https://jrabbott.github.io/');
  });

  it('throws when site is missing', () => {
    expect(() => siteOrigin(undefined)).toThrow(/Astro\.site is required/);
  });
});

describe('blogPostPath', () => {
  it('builds a trailing-slash post path', () => {
    expect(blogPostPath('ai-accessibility-tool')).toBe('/blog/posts/ai-accessibility-tool/');
  });
});
