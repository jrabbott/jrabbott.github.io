---
name: pr-title
description: >-
  Write pull request titles in Conventional Commits format for this repository.
  Use when creating, opening, editing, renaming, or reviewing a pull request
  title, or when preparing a squash merge into main.
metadata:
  version: "1.0"
---

# Pull request titles

## Background

This repository uses squash merge for the `main` branch.
The pull request title is the commit subject on `main`.
CI checks the title against the types in this skill.

## Procedure

1. Write each pull request title in the Conventional Commits format.
2. Use this structure:

```text
type(optional-scope)!: description
```

3. Use only these types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
4. Make the description short and clear.
5. Do not write a title as a plain sentence.

## Examples

Correct:

- `feat: add RSS feed`
- `fix(ci): pin checkout action`
- `chore: bump prettier`
- `build(deps): bump astro`

Incorrect:

- `Add RSS feed`
- `Update workflows`

## Gotchas

- A title edit re-runs CI, including the build job.
- Put a breaking change marker as `!` after the type or scope (`feat!: …`, `fix(api)!: …`).
- Dependabot titles that use `build(deps):` or `build(deps-dev):` are valid.

## Reference

[Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/#specification)
