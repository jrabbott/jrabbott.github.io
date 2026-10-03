/**
 * @vitest-environment happy-dom
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { initReadingFilter } from './readingFilter';

function mountReadingPage() {
  document.body.innerHTML = `
    <div class="reading-filter" hidden data-reading-filter>
      <div class="reading-filter__controls" role="group" aria-label="Filter by topic">
        <button type="button" data-topic="all" aria-pressed="true">All</button>
        <button type="button" data-topic="Leadership" aria-pressed="false">Leadership</button>
        <button type="button" data-topic="Mindset" aria-pressed="false">Mindset</button>
      </div>
      <p data-reading-filter-status aria-live="polite"></p>
    </div>
    <div class="reading-list" data-reading-list>
      <article class="book" data-topics="Mindset" id="blink"></article>
      <article class="book" data-topics="Delivery Leadership" id="accelerate"></article>
      <article class="book" data-topics="Leadership" id="legacy"></article>
    </div>
  `;
}

describe('initReadingFilter', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/reading/');
    mountReadingPage();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('applies ?topic=leadership, updates pressed state, status, and URL', () => {
    window.history.replaceState(null, '', '/reading/?topic=leadership');

    initReadingFilter();

    const filter = document.querySelector<HTMLElement>('[data-reading-filter]');
    const status = document.querySelector('[data-reading-filter-status]');
    const blink = document.querySelector<HTMLElement>('#blink');
    const accelerate = document.querySelector<HTMLElement>('#accelerate');
    const legacy = document.querySelector<HTMLElement>('#legacy');
    const leadership = document.querySelector('button[data-topic="Leadership"]');
    const all = document.querySelector('button[data-topic="all"]');

    expect(filter?.hidden).toBe(false);
    expect(blink?.hidden).toBe(true);
    expect(accelerate?.hidden).toBe(false);
    expect(legacy?.hidden).toBe(false);
    expect(leadership?.getAttribute('aria-pressed')).toBe('true');
    expect(all?.getAttribute('aria-pressed')).toBe('false');
    expect(status?.textContent).toBe('Showing 2 books');
    expect(window.location.search).toBe('?topic=leadership');
  });

  it('shows every book and presses All when topic is missing or invalid', () => {
    window.history.replaceState(null, '', '/reading/?topic=unknown');

    initReadingFilter();

    const filter = document.querySelector<HTMLElement>('[data-reading-filter]');
    const status = document.querySelector('[data-reading-filter-status]');
    const books = [...document.querySelectorAll<HTMLElement>('.book')];
    const all = document.querySelector('button[data-topic="all"]');

    expect(filter?.hidden).toBe(false);
    expect(books.every((book) => !book.hidden)).toBe(true);
    expect(all?.getAttribute('aria-pressed')).toBe('true');
    expect(status?.textContent).toBe('Showing all 3 books');
    expect(window.location.search).toBe('');
  });

  it('leaves books visible and the filter hidden when apply throws', () => {
    window.history.replaceState(null, '', '/reading/?topic=leadership');
    vi.spyOn(window.history, 'replaceState').mockImplementation(() => {
      throw new Error('replaceState failed');
    });

    initReadingFilter();

    const filter = document.querySelector<HTMLElement>('[data-reading-filter]');
    const books = [...document.querySelectorAll<HTMLElement>('.book')];

    expect(filter?.hidden).toBe(true);
    expect(books.every((book) => !book.hidden)).toBe(true);
  });

  it('filters on button click after init', () => {
    initReadingFilter();

    document.querySelector<HTMLButtonElement>('button[data-topic="Mindset"]')?.click();

    const blink = document.querySelector<HTMLElement>('#blink');
    const accelerate = document.querySelector<HTMLElement>('#accelerate');
    const status = document.querySelector('[data-reading-filter-status]');

    expect(blink?.hidden).toBe(false);
    expect(accelerate?.hidden).toBe(true);
    expect(status?.textContent).toBe('Showing 1 book');
    expect(window.location.search).toBe('?topic=mindset');
  });
});
