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

Reading, talks, and projects are TypeScript arrays under `src/data/`.
Pages import those arrays and render them.

Links are different: `src/data/links.ts` exports named href constants
(not an iterable catalogue). Surfaces that show profiles own their own
lists or hard-coded hrefs.

Do not add Markdown/MDX collections for these catalogues.
Blog and Spec stay in `src/content/{blog,spec}/`.

## Procedure

1. Pick the target below and follow that section (do not treat every
   target as “append to an array”).
2. For reading, talks, and projects: keep `id` values kebab-case and
   unique within that module.
3. Do not edit `src/data/siteNav.ts` unless the task intentionally adds or
   changes a site section.
4. If invariants or helpers change, update the matching Vitest file.
5. Run the `ci-checks` sequence before finishing.

### Reading: `src/data/reading.ts`

- Fields: `id`, `title`, `authors`, `topics`, `summary`
- `topics` must use values from `readingTopics` with
  `as const satisfies readonly ReadingTopic[]`
- Summaries: first person or clear recommendation voice; British English
- If grouping/topic rules change, update `src/data/reading.test.ts`

### Talks: `src/data/talks.ts`

- Fields: `id`, `title`, `event`, `speakers`, `summary`, `href`
- Optional: `date` as `Date` (UTC midnight for the talk day)
- Match the existing `Talk` type

### Projects: `src/data/projects.ts`

- Always include: `id`, `title`, `href`, `role`, `paragraphs`
- Optional service label: `serviceName`
- For career page visibility, also set:
  `careerName`, `careerClient`, `careerDates`, `careerEmployer: 'hippo'`,
  `careerSummary`
- Career listings filter on `careerEmployer` via `careerEngagements()`

### Links: `src/data/links.ts` and `/online/`

- `links.ts` has named exports only (for example `linkedinHref`).
  There are no entry objects or `id` fields.
- To show a new profile on `/online/`:
  1. Add a named export in `src/data/links.ts`
  2. Import it in `src/pages/online/index.astro`
  3. Add `{ href: …, label: '…' }` to that page’s local `links` array
- Other surfaces (home LinkedIn CTA, footer GitHub hrefs) are separate.
  Update them only when the task asks.
- Known drift: `/online/` still hard-codes Microsoft Learn, Pluralsight,
  and Cursor URLs; `SiteFooter.astro` hard-codes GitHub profile/source
  hrefs. Prefer named exports for new shared URLs; do not assume every
  existing href is already centralised.

## Examples

Correct:

- New book object in `reading` with `topics: ['Leadership'] as const satisfies…`
- New talk in `talks` with a public `href`
- Project with career fields so `/career/` picks it up
- `githubHref` in `links.ts` **and**
  `{ href: githubHref, label: 'GitHub' }` in the `/online/` list

Incorrect:

- Creating `src/content/reading/*.md` for a book
- Adding a projects nav item when only adding one project
- Using a topic string outside `readingTopics`
- Adding only `export const githubHref = '…'` in `links.ts` and stopping

## Gotchas

- Keep `as const` / `satisfies` patterns so topic typing stays sound.
- External links on pages use `target="_blank"`,
  `rel="noopener noreferrer"`, and `sr-only` “(opens in new tab)”;
  preserve that pattern when touching templates.
- Prefer extending existing exports over parallel duplicate data.
