import cn from 'clsx';
import React, { FunctionComponent, useContext } from 'react';
import { ThemeContext, ThemeContextProvider } from 'src/context/ThemeContext';
import { Header, Sidebar } from '../components';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={cn(styles.layout, {
        [styles.blackTheme]: theme === 'black',
        [styles.white]: theme === 'white',
      })}
    >
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
