export const readingTopics = ['Leadership', 'Systems', 'Product', 'Delivery', 'Mindset'] as const;

export type ReadingTopic = (typeof readingTopics)[number];

export const reading = [
  {
    id: 'blink',
    title: 'Blink',
    authors: 'Malcolm Gladwell',
    topics: ['Mindset'] as const satisfies readonly ReadingTopic[],
    summary:
      'Gladwell makes a strong case that snap judgements can be as good as slow, deliberate thinking, and that they can also go badly wrong when bias gets in the way. I liked how practical it felt: not “trust your gut blindly”, but learn when thin-slicing helps and when you need to slow down. Useful if you make a lot of decisions under pressure and want a clearer model for what’s going on.',
  },
  {
    id: 'accelerate',
    title: 'Accelerate',
    authors: 'Nicole Forsgren, Jez Humble, and Gene Kim',
    topics: ['Delivery', 'Leadership'] as const satisfies readonly ReadingTopic[],
    startHere: true,
    summary:
      'The research behind high-performing technology organisations, without the usual hand-waving. It gives you measures that actually matter (delivery speed, stability, recovery) and the capabilities that drive them. I recommend it because it turns “DevOps culture” into something you can argue for with evidence, not vibes.',
  },
  {
    id: 'making-work-visible',
    title: 'Making Work Visible',
    authors: 'Dominica DeGrandis',
    topics: ['Delivery'] as const satisfies readonly ReadingTopic[],
    summary:
      'A sharp look at how invisible work steals time: too much WIP, unclear priorities, constant interruptions, and heroics that look productive but aren’t. DeGrandis gives simple ways to surface the real load so teams can improve flow instead of burning out. Good reading if your calendar is full and delivery still feels stuck.',
  },
  {
    id: 'legacy',
    title: 'Legacy',
    authors: 'James Kerr',
    topics: ['Leadership'] as const satisfies readonly ReadingTopic[],
    startHere: true,
    summary:
      'Leadership lessons drawn from the All Blacks: humility, culture, standards, and the small habits that compound into something elite. It’s not a sports book dressed up as management; it’s a clear argument that culture is the work, not a side project. I come back to it when thinking about what high-performing teams actually do day to day.',
  },
  {
    id: 'the-chimp-paradox',
    title: 'The Chimp Paradox',
    authors: 'Steve Peters',
    topics: ['Mindset'] as const satisfies readonly ReadingTopic[],
    summary:
      'Peters’ model for how the mind works (the emotional “chimp”, the rational self, and the computer of habits) is simple enough to use under stress. It helped me notice when reaction is driving the show, and what to do about it without pretending feelings aren’t real. Practical mind management, not fluffy self-help.',
  },
  {
    id: 'escaping-the-build-trap',
    title: 'Escaping the Build Trap',
    authors: 'Melissa Perri',
    topics: ['Product'] as const satisfies readonly ReadingTopic[],
    startHere: true,
    summary:
      'A clear warning about organisations that ship features and call it progress. Perri explains how product management should connect strategy, discovery, and outcomes so teams solve problems instead of filling roadmaps. Essential if you’ve ever watched a team stay busy while the customer value stays flat.',
  },
  {
    id: 'rising-above-a-toxic-workplace',
    title: 'Rising Above a Toxic Workplace',
    authors: 'Gary Chapman, Paul White, and Harold Myra',
    topics: ['Leadership', 'Mindset'] as const satisfies readonly ReadingTopic[],
    summary:
      'Real stories about unhealthy workplaces and the choices people face: cope, push back, or leave. It’s less of a toolkit for fixing a whole organisation and more of a grounded look at what toxicity does to people, and how to protect yourself. Worth reading if you’ve ever wondered whether “it’s just me” or the environment really is broken.',
  },
  {
    id: 'the-inner-game-of-tennis',
    title: 'The Inner Game of Tennis',
    authors: 'W. Timothy Gallwey',
    topics: ['Mindset'] as const satisfies readonly ReadingTopic[],
    summary:
      'Not really about tennis. Gallwey’s idea is that self-doubt and overthinking get in the way of performance, and that relaxed concentration beats forced control. I recommend it for anyone who coaches, presents, builds, or leads. The same inner interference shows up far beyond the court.',
  },
  {
    id: 'the-5-languages-of-appreciation-in-the-workplace',
    title: 'The 5 Languages of Appreciation in the Workplace',
    authors: 'Gary Chapman and Paul White',
    topics: ['Leadership'] as const satisfies readonly ReadingTopic[],
    summary:
      'A practical take on why “good job” doesn’t land the same for everyone. Chapman and White translate appreciation into concrete languages (words, time, acts, gifts, and physical presence) so managers and teammates can encourage people in ways that actually feel genuine. Simple idea, big impact on morale if you apply it.',
  },
  {
    id: 'the-fifth-discipline',
    title: 'The Fifth Discipline',
    authors: 'Peter M. Senge',
    topics: ['Systems'] as const satisfies readonly ReadingTopic[],
    summary:
      'The classic on learning organisations and systems thinking. Senge shows how personal mastery, mental models, shared vision, team learning, and systems thinking fit together, and why local fixes often make the wider system worse. Dense in places, but it permanently changes how you look at organisational problems.',
  },
  {
    id: 'the-fifth-discipline-fieldbook',
    title: 'The Fifth Discipline Fieldbook',
    authors: 'Peter M. Senge, Art Kleiner, Charlotte Roberts, Richard Ross, and Bryan Smith',
    topics: ['Systems'] as const satisfies readonly ReadingTopic[],
    summary:
      'The “what do we do on Monday?” companion to The Fifth Discipline. Exercises, stories, and practical prompts for building shared vision, running dialogue, and applying systems thinking with real teams. I recommend reading it alongside the main book if you want ideas you can actually take into meetings.',
  },
  {
    id: 'the-experience-economy',
    title: 'The Experience Economy',
    authors: 'B. Joseph Pine II and James H. Gilmore',
    topics: ['Product'] as const satisfies readonly ReadingTopic[],
    summary:
      'Pine and Gilmore argue that goods and services aren’t enough. Memorable experiences are where value moves next. It’s a useful lens for service design and product work: stage the journey deliberately, don’t just ship features and hope people care. Makes you rethink what customers are actually paying for.',
  },
  {
    id: 'the-social-distance-between-us',
    title: 'The Social Distance Between Us',
    authors: 'Darren McGarvey',
    topics: ['Systems', 'Mindset'] as const satisfies readonly ReadingTopic[],
    summary:
      'McGarvey writes about the gap between people who make decisions and people who live with the consequences: poverty, policy, policing, and proximity. It’s uncomfortable in the right way. I recommend it because it challenges tidy assumptions about fairness and forces you to notice how distance shapes judgement.',
  },
] as const;

export type ReadingBook = {
  id: string;
  title: string;
  authors: string;
  topics: readonly ReadingTopic[];
  summary: string;
  startHere?: boolean;
};

export type ReadingTopicGroup = {
  topic: ReadingTopic;
  books: ReadingBook[];
};

export function topicAnchor(topic: ReadingTopic): string {
  return `topic-${topic.toLowerCase()}`;
}

/** Group books under every tagged topic. Throws if any book is missing from groups. */
export function groupReadingByTopic(books: readonly ReadingBook[] = reading): ReadingTopicGroup[] {
  const grouped = readingTopics
    .map((topic) => ({
      topic,
      books: books.filter((book) => book.topics.includes(topic)),
    }))
    .filter((group) => group.books.length > 0);

  const seen = new Set(grouped.flatMap((group) => group.books.map((book) => book.id)));
  for (const book of books) {
    if (!seen.has(book.id)) {
      throw new Error(`Reading book "${book.id}" is missing from topic groups`);
    }
  }

  return grouped;
}
