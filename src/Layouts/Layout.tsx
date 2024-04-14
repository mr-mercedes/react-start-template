import cn from 'clsx';
import React, { FunctionComponent } from 'react';
import { ThemeContextProvider } from 'src/context/ThemeContext';
import { Header, Sidebar } from '../components';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={cn(styles.layout)}>
      <Header />
      {children}
      <Sidebar />
    </div>
  );
};

export const withLayout = <T extends Record<string, never>>(Component: FunctionComponent<T>) => {
  const LayoutWrapper = (props: T) => {
    return (
      <ThemeContextProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </ThemeContextProvider>
    );
  };
  return LayoutWrapper;
};
