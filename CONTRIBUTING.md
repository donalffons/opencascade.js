# Contributing to libcascade

Contributions target `main`. The `occt-v8-emscripten-5` branch is an automated,
fast-forward-only mirror retained as the head of the historical upstream pull
request; do not base new work on it or push to it directly.

## Development setup

```bash
git clone https://github.com/taucad/opencascade.js.git
cd opencascade.js
npm ci
./scripts/clone-deps.sh --dest deps
source deps/emsdk/emsdk_env.sh
```

See [MAINTAINER.md](MAINTAINER.md) for native and Docker build prerequisites.

## Pull requests

1. Branch from the latest `main`.
2. Keep the change focused and add tests at the same layer as the behavior.
3. Add a Version Plan for package-affecting work:

   ```bash
   npx nx release plan patch \
     --message "Describe the user-visible change." \
     --uncommitted --untracked
   ```

   Choose `patch`, `minor`, or `major` by the next stable release's SemVer
   impact. Docs-only, test-only, starter-template-only, and repository
   governance changes are exempt.
4. Run the local checks:

   ```bash
   npx nx run ocjs:lint-js
   npx nx run ocjs:typecheck
   npx nx run ocjs:test-ci
   git diff --check
   ```

5. Open a pull request against `main`. CI builds the exact ST/MT candidate,
   verifies the package and generated API-reference feed, and deploys an
   internal preview from that candidate.

Do not edit `docs-site/data/`. It is ignored, atomically regenerated from
`libcascade/api-reference.json`, and removed when symbols disappear. When changing a
starter dependency, regenerate and commit that template's lockfile so copied
templates remain reproducible.

## Release boundaries

Contributors add Version Plans; the maintainer decides when to cut beta or
stable release PRs with the project `release-ocjs` skill. Do not change
`package.json` versions, create release tags, publish npm packages, or deploy
Vercel from a contributor PR.

Canary packages are published only by an explicit maintainer dispatch. They
are immutable per source commit and use `X.Y.Z-canary.<sha8>`. Reviewed beta
releases use `X.Y.Z-beta.N`; stable releases use `X.Y.Z` and the npm `latest`
tag.

## Reporting security issues

Do not open a public issue for a vulnerability. Follow [SECURITY.md](SECURITY.md)
to report it privately.
