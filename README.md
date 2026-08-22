# Personal documentation website

This website contains personal documentation. It describes capabilities, work styles, and management guidelines.

## Prerequisites

- Node.js 22.12 or higher (even-numbered releases only)
- A Node version manager (optional): use `.nvmrc` with nvm or fnm

## Quick start

1. Install the dependencies (this also installs Git hooks):
    ```bash
    npm install
    ```
2. Start the local development server:
    ```bash
    npm run dev
    ```
3. Open `http://localhost:4321` in your web browser.

## Commands

| Command           | Action                              |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the local development server. |
| `npm run build`   | Build the static files.             |
| `npm run preview` | Preview the local build.            |

## Code quality and git hooks

This repository uses automated tools to format code, validate commits, and prevent leaks of secret keys.

1. Code formatting
    - We use **Prettier** to format code files.
    - The `.prettierrc.mjs` and `.editorconfig` files apply formatting automatically.
    - Before a commit, `lint-staged` formats your modified files.

2. Conventional commits
    - Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
    - Examples: `feat: ...`, `fix: ...`, `docs: ...`.
    - Husky runs `commitlint` to validate your commit message.

3. Secret key protection
    - The pre-commit hook runs `gitleaks` to find secret keys or API tokens.
    - Install Gitleaks on your computer (e.g., `brew install gitleaks` or `scoop install gitleaks`).
    - If you do not install Gitleaks, the system shows a warning and skips the test.
