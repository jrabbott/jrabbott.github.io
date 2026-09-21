---
name: add-blog-post
description: >-
  Add or substantially edit a blog post in this Astro content collection.
  Use when creating a new post, updating frontmatter, or changing post body
  under src/content/blog.
metadata:
  version: '1.0'
---

# Add a blog post

## Background

Blog posts live in the Astro `blog` content collection.
The schema is defined in `src/content.config.ts`.
The index, RSS feeds, and Pagefind search discover posts via
`getCollection('blog')`: no page or nav edits for a normal post.

Prefer Markdown under `src/content/blog/`.
Do not invent a parallel TypeScript data file for posts.

## Procedure

1. Create `src/content/blog/<kebab-id>.md`.
   The slug is the filename without extension.
   The public URL is `/blog/posts/<kebab-id>/` (`blogPostPath` in
   `src/lib/blogMeta.ts`).
2. Set frontmatter:

```yaml
---
title: 'Post title'
description: 'One or two sentences for listings and meta.'
pubDate: 2026-09-20T12:00:00Z
tags:
  - example-tag
---
```

3. Optional frontmatter: `author` (defaults to `Jon Abbott`).
4. Write the body in first person, short paragraphs, British English.
   Follow the `voice-and-brand` rule.
5. Do not edit `siteNav`, blog index pages, or RSS modules unless the task
   explicitly changes those surfaces.
6. After writing, run the `ci-checks` sequence (especially `lint:md`,
   `check`, and `build` so Pagefind indexes the post).

## Examples

Correct:

- New file `src/content/blog/shipping-search.md` with valid frontmatter
- Tags as a YAML list of short lowercase phrases

Incorrect:

- Adding a post only in `src/data/`
- Hard-coding the post on `src/pages/blog/index.astro`
- American spelling in user-facing copy (`organize`, ` favor`)

## Gotchas

- `pubDate` must parse as a date (ISO UTC recommended).
- Filename/id must stay stable once published; renaming breaks URLs.
- `lint:md` runs on `**/*.md`; keep headings and emphasis consistent with
  existing posts.
