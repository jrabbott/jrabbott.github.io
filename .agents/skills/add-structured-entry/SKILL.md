---
name: add-structured-entry
description: >-
  Add reading, talk, project, career-linked project, or online link entries
  in typed src/data modules. Use when extending catalogues that are not
  Markdown content collections.
metadata:
  version: '1.0'
---

# Add a structured data entry

## Background

Reading, talks, projects, and links are TypeScript modules under `src/data/`,
not Astro content collections.
Pages import those arrays and render them.

Do not add Markdown/MDX collections for these catalogues.
Blog and Spec stay in `src/content/{blog,spec}/`.

## Procedure

1. Pick the target module and append an entry that matches existing shapes.
2. Keep `id` values kebab-case and unique within that module.
3. Do not edit `src/data/siteNav.ts` unless the task intentionally adds or
   changes a site section.
4. If invariants or helpers change, update the matching Vitest file.
5. Run the `ci-checks` sequence before finishing.

### Reading — `src/data/reading.ts`

- Fields: `id`, `title`, `authors`, `topics`, `summary`
- `topics` must use values from `readingTopics` with
  `as const satisfies readonly ReadingTopic[]`
- Summaries: first person or clear recommendation voice; British English
- If grouping/topic rules change, update `src/data/reading.test.ts`

### Talks — `src/data/talks.ts`

- Fields: `id`, `title`, `event`, `speakers`, `summary`, `href`
- Optional: `date` as `Date` (UTC midnight for the talk day)
- Match the existing `Talk` type

### Projects — `src/data/projects.ts`

- Always include: `id`, `title`, `href`, `role`, `paragraphs`
- Optional service label: `serviceName`
- For career page visibility, also set:
  `careerName`, `careerClient`, `careerDates`, `careerEmployer: 'hippo'`,
  `careerSummary`
- Career listings filter on `careerEmployer` via `careerEngagements()`

### Links — `src/data/links.ts`

- Export named href constants (for example `linkedinHref`)
- Import those constants from pages; do not scatter raw profile URLs

## Examples

Correct:

- New book object in `reading` with `topics: ['Leadership'] as const satisfies…`
- New talk in `talks` with a public `href`
- Project with career fields so `/career/` picks it up

Incorrect:

- Creating `src/content/reading/*.md` for a book
- Adding a projects nav item when only adding one project
- Using a topic string outside `readingTopics`

## Gotchas

- Keep `as const` / `satisfies` patterns so topic typing stays sound.
- External links on pages use `target="_blank"` plus
  `sr-only` “(opens in new tab)” — preserve that when touching templates.
- Prefer extending existing exports over parallel duplicate data.
