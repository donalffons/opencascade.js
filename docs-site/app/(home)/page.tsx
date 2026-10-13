import Link from 'next/link';
import type { ReactNode } from 'react';
import { HomeFooter } from '../../components/home-footer';
import { usedByProjects } from '../../lib/home-used-by';
import { renderInlineCode } from '../../lib/inline-code-text';
import { resolveIcon } from '../../lib/icon-resolver';
import { apiTree } from '../../lib/api-source';
import { GITHUB_REPO_URL } from '../../lib/site';

const personaCards = [
  {
    title: 'npm consumer',
    description: 'Install `libcascade`, render a box, export STEP. 4 minutes.',
    href: '/docs/package/getting-started/quick-start-npm',
    cta: 'Start with npm',
    icon: 'lib:npm',
    iconKind: 'brand',
    primary: true,
  },
  {
    title: 'Custom build',
    description: 'Write `libcascade.config.ts`, run `libcascade build`, ship a trimmed wasm.',
    href: '/docs/toolchain/getting-started/quick-start',
    cta: 'Start with the toolchain',
    icon: 'lib:docker',
    iconKind: 'brand',
    primary: false,
  },
  {
    title: 'Library author',
    description: 'Trim symbols, add custom C++, ship reproducible CI.',
    href: '/docs/toolchain/guides/extend-with-cpp',
    cta: 'Extend with C++',
    icon: 'lib:webassembly',
    iconKind: 'brand',
    primary: false,
  },
  {
    title: 'AI agent / LLM',
    description: 'Fetch `/llms.txt` for the full surface, or any page as raw `.mdx`.',
    href: '/llms.txt',
    cta: 'Read llms.txt',
    icon: 'lucide:bot text-fd-primary',
    iconKind: 'lucide-tinted',
    primary: false,
  },
] as const;

const v3Highlights = [
  {
    title: 'ESM-only build',
    description: 'Import the instance, or `createInstance()` it yourself. No CommonJS.',
    icon: 'lucide:zap text-amber-500',
  },
  {
    title: 'Suffix-free symbols',
    description: '`gp_Pnt`, not `gp_Pnt_3`. Overloads dispatched in C++.',
    icon: 'lucide:scissors text-sky-500',
  },
  {
    title: '`using` disposables',
    description: 'Every shape implements `Symbol.dispose` for scope-exit memory management.',
    icon: 'lucide:recycle text-emerald-500',
  },
  {
    title: 'Multi-threaded WASM',
    description: '1.24× geomean on mixed CAD. Opt in via `/multi`.',
    icon: 'lucide:gauge text-fd-primary',
    href: '/docs/package/guides/multi-threading',
  },
] as const;

const v3Pillars = [
  {
    title: 'OCCT V8',
    description:
      'First WebAssembly binding to track OCCT V8 — BRepGraph, modern differential property packages, NCollection size_t migration, Gordon surface construction.',
    icon: 'lucide:layers text-fd-muted-foreground',
  },
  {
    title: 'Agent-native',
    description:
      'Every page is an `.mdx` resource. `/llms.txt` indexes the surface. Suffix-free symbols read like the C++ docs — LLMs hit the right overload without a lookup table.',
    icon: 'lucide:bot text-fd-muted-foreground',
  },
  {
    title: 'Browser-first',
    description:
      'ESM single-file, Vite / Next / Bun ready, COOP/COEP-aware threading, multi-arch GHCR images so Apple Silicon and Linux build the same bytes.',
    icon: 'lucide:globe text-fd-muted-foreground',
  },
] as const;

const CHANGELOG_URL = `${GITHUB_REPO_URL}/blob/main/CHANGELOG.md`;
const BREAKING_CHANGES_URL = `${GITHUB_REPO_URL}/blob/main/BREAKING_CHANGES.md`;

const personaIconClass = (iconKind: 'brand' | 'lucide' | 'lucide-tinted'): string => {
  if (iconKind === 'brand') {
    return 'flex size-9 shrink-0 items-center justify-center rounded-lg border border-fd-border bg-fd-muted/30 p-1 [&_img]:size-full';
  }
  if (iconKind === 'lucide-tinted') {
    return 'flex size-9 shrink-0 items-center justify-center rounded-lg border border-fd-border bg-fd-primary/10 p-1.5 [&_svg]:size-5';
  }
  return 'flex size-9 shrink-0 items-center justify-center rounded-lg border border-fd-border bg-fd-muted/30 p-1.5 [&_svg]:size-5';
};

const personaCardClass = (primary: boolean): string =>
  primary
    ? 'group block rounded-xl border border-yellow-500/60 bg-yellow-500/[0.03] p-5 shadow-sm transition-colors hover:border-yellow-500'
    : 'group block rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary';

const HomePage = (): ReactNode => {
  return (
    <main className='mx-auto max-w-5xl px-6 py-10 md:py-14'>
      <header className='-mx-6 mb-8 rounded-xl bg-yellow-500/[0.07] px-6 pb-8 pt-2'>
        <div className='flex items-start gap-4'>
          {/* eslint-disable-next-line @next/next/no-img-element -- inline brand mark in hero */}
          <img src='/logo.svg' alt='' className='mt-1 size-10 shrink-0 md:size-12' />
          <div className='min-w-0'>
            <h1 className='inline-block border-b-2 border-yellow-500 pb-0.5 text-4xl font-semibold tracking-tight text-balance md:text-5xl'>
              libcascade
            </h1>
            <p className='mt-3 max-w-xl text-lg text-balance text-fd-muted-foreground'>
              The OpenCASCADE 3D CAD kernel, compiled to WebAssembly with TypeScript bindings for {apiTree.totals.classes.toLocaleString()} classes. Build solids, run
              booleans, fillet edges, mesh, and read/write STEP — in a browser tab, a Node CLI, or an LLM tool call.
              Trim the wasm to the symbols you need, or extend it with your own C++ — no fork required.
            </p>
          </div>
        </div>
      </header>

      <section aria-label='Choose your path'>
        <div className='grid gap-4 md:grid-cols-2'>
          {personaCards.map((card) => (
            <Link key={card.href} href={card.href} className={personaCardClass(card.primary)}>
              <div className='mb-3 flex items-center gap-3'>
                <div aria-hidden className={personaIconClass(card.iconKind)}>
                  {resolveIcon(card.icon)}
                </div>
                <div className='text-base font-medium'>{renderInlineCode(card.title)}</div>
              </div>
              <div className='text-sm text-fd-muted-foreground'>{renderInlineCode(card.description)}</div>
              <div className='mt-3 text-sm font-medium text-fd-primary group-hover:underline'>{card.cta} →</div>
            </Link>
          ))}
        </div>

        <p className='mt-3 text-sm text-fd-muted-foreground'>
          <Link href='/docs/package/getting-started/faq' className='hover:text-fd-primary hover:underline'>
            FAQ — project lineage, maintenance, contributing →
          </Link>
        </p>
      </section>

      <section aria-label='Used by' className='mt-12'>
        <h2 className='text-xl font-semibold'>Used by</h2>
        <ul className='mt-4 flex flex-wrap gap-x-6 gap-y-2'>
          {usedByProjects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                className='text-sm font-medium text-fd-foreground hover:text-fd-primary hover:underline'
                rel='noopener noreferrer'
                target='_blank'
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
        <p className='mt-4 text-sm'>
          <Link
            href='/docs/package/getting-started/projects-using-libcascade'
            className='text-fd-muted-foreground hover:text-fd-primary hover:underline'
          >
            See all projects →
          </Link>
        </p>
      </section>

      <section aria-label='Why V3' className='mt-12 border-y border-fd-border py-8 md:py-10'>
        <h2 className='max-w-3xl text-balance text-2xl font-semibold tracking-tight md:text-3xl'>
          V3 upgrades OCCT to V8 and modernizes the toolchain for the agentic, browser-first era.
        </h2>
        <p className='mt-3 max-w-3xl text-balance text-sm text-fd-muted-foreground md:text-base'>
          {renderInlineCode(
            'This is not a maintenance bump. V3 retargets the bindings at coding agents and modern bundlers — the same wasm runs unchanged in a Vite tab, a Bun CLI, and a Cursor agent tool call.',
          )}
        </p>

        <div className='mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
          {v3Pillars.map((pillar) => (
            <div key={pillar.title}>
              <div className='mb-2 flex items-center gap-2.5'>
                <div
                  aria-hidden
                  className='flex size-8 shrink-0 items-center justify-center rounded-md border border-fd-border bg-fd-background p-1 [&_svg]:size-4'
                >
                  {resolveIcon(pillar.icon)}
                </div>
                <div className='text-sm font-semibold'>{pillar.title}</div>
              </div>
              <p className='text-sm text-fd-muted-foreground'>{renderInlineCode(pillar.description)}</p>
            </div>
          ))}
        </div>

        <p className='mt-6 text-sm'>
          <a
            href={BREAKING_CHANGES_URL}
            className='font-medium text-fd-primary hover:underline'
            rel='noopener noreferrer'
            target='_blank'
          >
            Read the V3 breaking changes →
          </a>
        </p>
      </section>

      <section aria-label="What's new in V3" className='mt-12'>
        <h2 className='text-xl font-semibold'>What&apos;s new in V3</h2>

        <div className='mt-4 grid gap-3 md:grid-cols-2'>
          {v3Highlights.map((item) => {
            const body = (
              <>
                <div className='mb-2 flex items-center gap-2.5'>
                  <div
                    aria-hidden
                    className='flex size-8 shrink-0 items-center justify-center rounded-md border border-fd-border bg-fd-muted/30 p-1 [&_svg]:size-4'
                  >
                    {resolveIcon(item.icon)}
                  </div>
                  <div className='text-sm font-medium'>{renderInlineCode(item.title)}</div>
                </div>
                <p className='text-sm text-fd-muted-foreground'>{renderInlineCode(item.description)}</p>
              </>
            );

            if ('href' in item && item.href !== undefined) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className='group block rounded-xl border border-fd-border bg-fd-card p-4 transition-colors hover:border-fd-primary'
                >
                  {body}
                </Link>
              );
            }

            return (
              <div key={item.title} className='rounded-xl border border-fd-border bg-fd-card p-4'>
                {body}
              </div>
            );
          })}
        </div>

        <p className='mt-5 text-sm'>
          <a
            href={CHANGELOG_URL}
            className='font-medium text-fd-primary hover:underline'
            rel='noopener noreferrer'
            target='_blank'
          >
            See full release notes →
          </a>
        </p>
      </section>

      <HomeFooter />
    </main>
  );
};

export default HomePage;
