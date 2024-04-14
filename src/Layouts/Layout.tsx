import React, { FunctionComponent } from 'react';
import { Header, Sidebar } from '../components';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Sidebar />
    </div>
  );
};

export const withLayout = <T extends Record<string, never>>(Component: FunctionComponent<T>) => {
  const LayoutWrapper = (props: T) => {
    return (
      <div>
        <Layout>
          <Component {...props} />
        </Layout>
      </div>
    );
  };
  return LayoutWrapper;
};
