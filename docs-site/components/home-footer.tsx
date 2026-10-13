import Link from 'next/link';
import type { ReactNode } from 'react';
import { GITHUB_REPO_URL } from '../lib/site';

const LICENSE_URL = `${GITHUB_REPO_URL}/blob/main/LICENSE`;

const footerLinkClass = 'text-fd-muted-foreground hover:text-fd-primary hover:underline';

const FooterColumn = ({
  title,
  children,
}: {
  readonly title: string;
  readonly children: ReactNode;
}): ReactNode => (
  <div>
    <div className='text-sm font-semibold text-fd-foreground'>{title}</div>
    <ul className='mt-3 space-y-2 text-sm'>{children}</ul>
  </div>
);

const FooterExternalLink = ({
  href,
  children,
}: {
  readonly href: string;
  readonly children: ReactNode;
}): ReactNode => (
  <a href={href} className={footerLinkClass} rel='noopener noreferrer' target='_blank'>
    {children}
  </a>
);

export const HomeFooter = (): ReactNode => {
  return (
    <footer className='mt-16 border-t border-fd-border pt-10 pb-8'>
      <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
        <FooterColumn title='Docs'>
          <li>
            <FooterExternalLink href={GITHUB_REPO_URL}>GitHub repository</FooterExternalLink>
          </li>
          <li>
            <FooterExternalLink href={`${GITHUB_REPO_URL}/discussions`}>Discussions</FooterExternalLink>
          </li>
          <li>
            <FooterExternalLink href={`${GITHUB_REPO_URL}/issues`}>Issues</FooterExternalLink>
          </li>
        </FooterColumn>

        <FooterColumn title='Agents'>
          <li>
            <Link href='/llms.txt' className={footerLinkClass}>
              llms.txt
            </Link>
          </li>
          <li>
            <Link href='/llms-full.txt' className={footerLinkClass}>
              llms-full.txt
            </Link>
          </li>
          <li>
            <Link href='/docs/package/api' className={footerLinkClass}>
              API reference
            </Link>
          </li>
        </FooterColumn>

        <FooterColumn title='More'>
          <li>
            <FooterExternalLink href={LICENSE_URL}>LGPL-2.1-only WITH OCCT Exception</FooterExternalLink>
          </li>
          <li>
            <FooterExternalLink href='https://www.npmjs.com/package/libcascade'>libcascade on npm</FooterExternalLink>
          </li>
          <li>
            <Link href='/docs/package/getting-started/faq' className={footerLinkClass}>
              FAQ
            </Link>
          </li>
        </FooterColumn>
      </div>

      <p className='mt-10 border-t border-fd-border pt-6 text-xs text-fd-muted-foreground'>
        libcascade — originally created by{' '}
        <a href='https://github.com/donalffons' className='hover:text-fd-primary hover:underline' rel='noopener noreferrer' target='_blank'>
          Sebastian Alff
        </a>
        . Upstream OCCT © OPEN CASCADE SAS.
      </p>
    </footer>
  );
};
