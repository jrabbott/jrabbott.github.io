import type { ReadingTopic } from '../data/reading';
import { bookMatchesTopic, parseTopicQueryParam, topicQueryParam } from '../lib/readingFilter';

function readingListUrl(topic: ReadingTopic | null): string {
  const url = new URL(window.location.href);
  if (topic === null) {
    url.searchParams.delete('topic');
  } else {
    url.searchParams.set('topic', topicQueryParam(topic));
  }
  return `${url.pathname}${url.search}${url.hash}`;
}

export function initReadingFilter(root: ParentNode = document): void {
  const filter = root.querySelector<HTMLElement>('[data-reading-filter]');
  const list = root.querySelector<HTMLElement>('[data-reading-list]');
  if (!filter || !list) {
    return;
  }

  const books = [...list.querySelectorAll<HTMLElement>('.book[data-topics]')];
  const buttons = [...filter.querySelectorAll<HTMLButtonElement>('button[data-topic]')];
  const status = filter.querySelector<HTMLElement>('[data-reading-filter-status]');

  if (buttons.length === 0 || books.length === 0) {
    return;
  }

  const resetBooks = () => {
    for (const book of books) {
      book.hidden = false;
    }
  };

  try {
    const apply = (topic: ReadingTopic | null) => {
      let visible = 0;

      for (const book of books) {
        const topicsAttr = book.dataset.topics ?? '';
        const show = topic === null || bookMatchesTopic(topicsAttr, topic);
        book.hidden = !show;
        if (show) {
          visible += 1;
        }
      }

      for (const button of buttons) {
        const value = button.dataset.topic ?? '';
        const pressed = topic === null ? value === 'all' : value === topic;
        button.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      }

      if (status) {
        if (topic === null) {
          status.textContent = `Showing all ${books.length} books`;
        } else {
          status.textContent = `Showing ${visible} ${visible === 1 ? 'book' : 'books'}`;
        }
      }

      history.replaceState(null, '', readingListUrl(topic));
    };

    filter.addEventListener('click', (event) => {
      const target = (event.target as HTMLElement | null)?.closest('button[data-topic]');
      if (!(target instanceof HTMLButtonElement) || !filter.contains(target)) {
        return;
      }

      const value = target.dataset.topic ?? 'all';
      apply(value === 'all' ? null : (value as ReadingTopic));
    });

    const initial = parseTopicQueryParam(new URL(window.location.href).searchParams.get('topic'));
    apply(initial);
    filter.hidden = false;
  } catch {
    resetBooks();
    filter.hidden = true;
  }
}

initReadingFilter();
