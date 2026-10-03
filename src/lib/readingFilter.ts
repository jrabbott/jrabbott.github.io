import { readingTopics, type ReadingTopic } from '../data/reading';

/** Lowercase query value for a topic (e.g. Leadership → leadership). */
export function topicQueryParam(topic: ReadingTopic): string {
  return topic.toLowerCase();
}

/** Parse `?topic=` into a known ReadingTopic, or null for All / invalid. */
export function parseTopicQueryParam(value: string | null | undefined): ReadingTopic | null {
  if (value == null) {
    return null;
  }

  const normalised = value.trim().toLowerCase();
  if (!normalised) {
    return null;
  }

  return readingTopics.find((topic) => topic.toLowerCase() === normalised) ?? null;
}

/** Whether a space-separated `data-topics` attribute includes the topic. */
export function bookMatchesTopic(topicsAttr: string, topic: ReadingTopic): boolean {
  return topicsAttr.split(/\s+/).filter(Boolean).includes(topic);
}
