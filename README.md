# jrabbott.github.io

This repository contains the static hub landing page for jrabbott.github.io.

`index.html` is a self-contained page that links out to the related sites:

- [Blog](https://jrabbott.github.io/blog)
- [Spec](https://jrabbott.github.io/spec)
- [Projects](https://jrabbott.github.io/projects)

## Deployment

Pushing to `main` triggers the workflow in `.github/workflows/deploy.yml`, which publishes `index.html` to GitHub Pages. There is no build step—edit `index.html` directly and push to deploy.
