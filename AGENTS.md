# Agent instructions

## Pull request titles

Merges to `main` are squash-only. The **PR title becomes the commit subject** on `main`.

PR titles must follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification):

```text
type(optional-scope)!: description
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.

Examples:

- `feat: add RSS feed`
- `fix(ci): pin checkout action`
- `chore: bump prettier`

Do not use free-form sentence titles (e.g. “Add RSS feed” or “Update workflows”).
