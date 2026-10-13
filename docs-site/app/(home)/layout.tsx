import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../layout.config';

const HomeShellLayout = ({ children }: { readonly children: ReactNode }): React.JSX.Element => {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
};

export default HomeShellLayout;
