import { describe, expect, it } from 'vitest';
import {
  groupReadingByTopic,
  reading,
  readingTopics,
  topicAnchor,
  type ReadingBook,
} from './reading';

function book(partial: ReadingBook): ReadingBook {
  return partial;
}

describe('topicAnchor', () => {
  it('slugifies topic labels', () => {
    expect(topicAnchor('Leadership')).toBe('topic-leadership');
    expect(topicAnchor('Mindset')).toBe('topic-mindset');
  });
});

describe('groupReadingByTopic', () => {
  it('places each book under every tagged topic', () => {
    const grouped = groupReadingByTopic([
      book({
        id: 'a',
        title: 'A',
        authors: 'Author',
        topics: ['Delivery', 'Leadership'],
        summary: 'Summary A',
      }),
      book({
        id: 'b',
        title: 'B',
        authors: 'Author',
        topics: ['Mindset'],
        summary: 'Summary B',
      }),
    ]);

    expect(grouped.map((group) => group.topic)).toEqual(['Leadership', 'Delivery', 'Mindset']);
    expect(
      grouped.find((group) => group.topic === 'Leadership')?.books.map((item) => item.id),
    ).toEqual(['a']);
    expect(
      grouped.find((group) => group.topic === 'Delivery')?.books.map((item) => item.id),
    ).toEqual(['a']);
    expect(
      grouped.find((group) => group.topic === 'Mindset')?.books.map((item) => item.id),
    ).toEqual(['b']);
  });

  it('throws when a book cannot appear in any topic group', () => {
    expect(() =>
      groupReadingByTopic([
        {
          id: 'orphan',
          title: 'Orphan',
          authors: 'Nobody',
          topics: [],
          summary: 'Missing topics',
        },
      ]),
    ).toThrow(/missing from topic groups/);
  });

  it('includes every live reading entry in at least one group', () => {
    const grouped = groupReadingByTopic();
    const seen = new Set(grouped.flatMap((group) => group.books.map((item) => item.id)));

    expect([...seen].sort()).toEqual([...reading.map((item) => item.id)].sort());
    expect(grouped.every((group) => readingTopics.includes(group.topic))).toBe(true);
  });
});
