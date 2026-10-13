import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '../../lib/source';
import { baseOptions, TauAttributionFooter } from '../layout.config';

const DocsShellLayout = ({ children }: { readonly children: ReactNode }): React.JSX.Element => {
  return (
    <DocsLayout {...baseOptions} tree={source.pageTree} sidebar={{ footer: <TauAttributionFooter /> }}>
      {children}
    </DocsLayout>
  );
};

export default DocsShellLayout;
