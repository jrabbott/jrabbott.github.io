---
name: conventional-commits-pr-titles
description: >-
  Format pull request titles with Conventional Commits. Use when you create,
  open, edit, or rename a pull request, or when the PR title must match the
  squash-merge commit subject on main.
---

# Conventional Commits pull request titles

## Background

The repository uses squash merge for the `main` branch.
The pull request title is the commit subject on `main`.

## Procedure

1. Write each pull request title in the Conventional Commits format.
2. Use this structure:

```text
type(optional-scope)!: description
```

3. Use only these types:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`
- `build`
- `ci`
- `chore`
- `revert`

4. Make the description short and clear.
5. Do not write a title as a plain sentence.

## Examples

Correct titles:

- `feat: add RSS feed`
- `fix(ci): pin checkout action`
- `chore: bump prettier`

Incorrect titles:

- `Add RSS feed`
- `Update workflows`

## Reference

[Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/#specification)
