# Agent instructions

## Pull request titles

When you create, open, edit, or rename a pull request, use the `pr-title`
skill.

## Content skills

When adding or substantially editing site content, use the matching skill:

- Blog posts → `add-blog-post`
- Reading, talks, projects, or links → `add-structured-entry`
- Spec MDX pages → `add-spec-page`

## Site rules

Follow these Cursor rules (in addition to `ci-checks`):

- `voice-and-brand` — first-person British English, personal brand
- `design-tokens` — CSS variables and fonts under `src/`
- `a11y-and-pagefind` — accessibility and search indexing patterns

## CI workflows

Keep pull request title checks in `.github/workflows/ci.yml`.
Do not add a separate title-lint workflow.

## Deploy

This is a static Astro site on GitHub Pages via Actions.
Use the Node version from `.nvmrc` / `package.json` engines.
`npm run build` runs Astro and Pagefind.
Do not assume another host (Netlify, Vercel, and so on).

## Dependabot

Dependabot titles such as `build(deps):` and `build(deps-dev):` are valid
Conventional Commits.
Do not rewrite them into prose titles.
