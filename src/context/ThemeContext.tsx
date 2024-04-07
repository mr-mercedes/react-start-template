import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import styles from './ThemeContext.module.sass';
type ThemeState = 'white' | 'black';

export interface ThemeContextProps {
  theme?: ThemeState;
  setTheme?: (theme: ThemeState) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider = ({ theme = 'white', children }: PropsWithChildren<ThemeContextProps>) => {
  const [themeState, setThemeState] = useState<ThemeState>(theme);
  const updateTheme = (theme: ThemeState) => {
    setThemeState(theme);
  };

  const value = useMemo(() => ({ theme: themeState, setTheme: updateTheme }), [themeState]);
  return (
    <ThemeContext.Provider value={value}>
      <div className={styles.root}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
