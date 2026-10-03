import { describe, expect, it } from 'vitest';
import { bookMatchesTopic, parseTopicQueryParam, topicQueryParam } from './readingFilter';

describe('topicQueryParam', () => {
  it('lowercases topic labels for the query string', () => {
    expect(topicQueryParam('Leadership')).toBe('leadership');
    expect(topicQueryParam('Mindset')).toBe('mindset');
  });
});

describe('parseTopicQueryParam', () => {
  it('returns null for missing, empty, or unknown values', () => {
    expect(parseTopicQueryParam(null)).toBeNull();
    expect(parseTopicQueryParam(undefined)).toBeNull();
    expect(parseTopicQueryParam('')).toBeNull();
    expect(parseTopicQueryParam('   ')).toBeNull();
    expect(parseTopicQueryParam('unknown')).toBeNull();
  });

  it('matches topics case-insensitively', () => {
    expect(parseTopicQueryParam('leadership')).toBe('Leadership');
    expect(parseTopicQueryParam('SYSTEMS')).toBe('Systems');
    expect(parseTopicQueryParam(' Product ')).toBe('Product');
  });
});

describe('bookMatchesTopic', () => {
  it('matches a topic in a space-separated attribute', () => {
    expect(bookMatchesTopic('Leadership Delivery', 'Leadership')).toBe(true);
    expect(bookMatchesTopic('Leadership Delivery', 'Delivery')).toBe(true);
    expect(bookMatchesTopic('Leadership Delivery', 'Mindset')).toBe(false);
  });

  it('ignores extra whitespace', () => {
    expect(bookMatchesTopic('  Systems   Product  ', 'Product')).toBe(true);
    expect(bookMatchesTopic('', 'Systems')).toBe(false);
  });
});
