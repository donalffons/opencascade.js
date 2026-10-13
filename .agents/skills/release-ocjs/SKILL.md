---
name: release-ocjs
description: Audits, prepares, or submits reviewed ocjs beta and stable release pull requests. Use when a maintainer explicitly invokes /release-ocjs.
disable-model-invocation: true
argument-hint: '[status|prepare <version>|submit <version>]'
---

# Release ocjs

GitHub Actions remains the sole owner of npm publication, GHCR promotion,
annotated tags, GitHub Releases, and Vercel deployment.

## Modes

- `/release-ocjs status`: inspect only; never change files, refs, or external
  state.
- `/release-ocjs prepare <version>`: apply a reviewed `X.Y.Z-beta.N` or stable
  release locally, then stop without committing or pushing.
- `/release-ocjs submit <version>`: apply the same release on a release branch,
  validate it, commit, push, and open one draft pull request.

Reject other arguments. The one-time `ocjs` namespace bootstrap is not a
routine release and is deliberately outside this skill.

## Status

1. Read `package.json`, `.nx/version-plans/`, `MAINTAINER.md`, and the release
   and Vercel jobs in `.github/workflows/docker.yml`.
2. Run:

   ```bash
   git status --short
   git branch --show-current
   git fetch origin main
   git ls-remote --tags origin 'v*'
   gh pr list --base main --state open --search 'chore(release): ocjs v'
   gh release list --limit 20
   gh run list --workflow docker.yml --limit 10
   npm view libcascade dist-tags versions --json
   npx --yes vercel@56.5.0 project inspect opencascade.js --scope taucad
   npx --yes vercel@56.5.0 list --scope taucad --cwd .
   ```

3. Report the checked version, pending plan files, open release PRs, registry
   tags, GitHub tags/releases, recent CI publication state, and latest Vercel
   source SHA. Treat npm `E404` as an unbootstrapped namespace, not a
   successful empty state.

## Prepare or submit

1. Read `CONTRIBUTING.md` and `MAINTAINER.md`.
2. Require a clean worktree on `main`, `HEAD == origin/main`, at least one
   applicable Version Plan, an exact stable or `beta.<positive integer>`
   argument, and no conflicting open release PR. Stop on any mismatch.
3. Preview without mutation:

   ```bash
   npm run release:prepare -- <version> --dry-run
   ```

4. For `submit`, create `release/ocjs-v<version>` from the verified `main`.
   For `prepare`, remain on `main`.
5. Apply the exact requested version:

   ```bash
   npm run release:prepare -- <version>
   ```

6. Review `git diff --name-status`. Both beta and stable releases must change
   only `package.json`, `package-lock.json`, and `CHANGELOG.md`. Beta releases
   retain every `.nx/version-plans/*.md` file; stable releases also delete one
   or more consumed plans. Stop for any other path.
7. Verify:

   ```bash
   npx nx run ocjs:lint-js
   npx nx run ocjs:typecheck
   npx nx run ocjs:test-ci
   git diff --check
   ```

8. For `prepare`, report the version, expected npm channel, exact diff, and
   validation, then stop.
9. For `submit`, commit exactly:

   ```text
   chore(release): ocjs v<version>
   ```

10. Push the release branch and open a draft PR against `main` with the same
    title. State the channel (`beta` or `latest`), install command, retained or
    consumed Version Plans, and validation results. If an open release PR
    appeared before the push, stop rather than creating a second one.

## Boundaries

- Never run `npm publish`, create or push tags, create GitHub Releases, deploy
  Vercel, or change repository/Vercel settings.
- Never prepare a release from a feature branch or include source changes in a
  release PR.
- Never edit generated changelog prose after the helper runs without first
  reconciling it with the Version Plans.
- Never post success/failure comments to originating PRs; CI job summaries,
  registry verification, the annotated tag, and the GitHub Release are the
  durable release record.
