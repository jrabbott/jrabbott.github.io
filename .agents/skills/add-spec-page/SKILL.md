---
name: add-spec-page
description: >-
  Add or reorder Spec MDX pages in the Astro spec content collection.
  Use when creating a new spec doc, changing order/navId, or editing
  Spec Callout/SpecMetric usage.
metadata:
  version: '1.0'
---

# Add a Spec page

## Background

Spec pages live in the Astro `spec` content collection under
`src/content/spec/`.
Frontmatter schema is in `src/content.config.ts`.
Sidebar links come from `buildSpecNav()` in `src/data/specNav.ts`
(sorted by `order`; unique `order` and `navId` required).

Do not invent a hard-coded nav list for normal pages.
Do not store Spec docs as TypeScript data.

## Procedure

1. Create `src/content/spec/<id>.mdx` (kebab-case id).
2. Set frontmatter:

```yaml
---
title: GET /example
description: Short page purpose
order: 7
navId: example
---
```

3. Choose an unused integer `order` and unused `navId`.
   Duplicates throw at nav build time.
4. Import existing components when needed:

```mdx
import Callout from '../../components/Callout.astro';
import SpecMetric from '../../components/SpecMetric.astro';
```

5. Prefer `Callout` for highlighted summaries and `SpecMetric` for
   labelled meters (`label`, `value`, optional `max`).
6. Do not rename or relocate the overview page casually:
   `index.mdx` uses `navId: index` and maps to `/spec/`.
   Other pages map to `/spec/<id>/`.
7. After `order` / `navId` changes, run tests that cover `buildSpecNav`
   and the full `ci-checks` sequence.

## Examples

Correct:

- New `src/content/spec/collaboration.mdx` with unique `order` and `navId`
- Reordering by adjusting `order` values only

Incorrect:

- Editing `SpecSidebar.astro` to hard-code a new link
- Reusing `navId: comms` on a second page
- Replacing MDX with a `src/data/spec.ts` array

## Gotchas

- Routes filter `index` specially in `src/pages/spec/[slug].astro`.
- MDX allows HTML-like components; keep imports relative like existing pages.
- Follow `voice-and-brand` for user-facing Spec copy.
