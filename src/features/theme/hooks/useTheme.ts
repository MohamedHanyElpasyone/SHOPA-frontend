import { useEffect, useState } from 'react';

const useTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');

  const toggle = () => {
    if (!document.startViewTransition) {
      setTheme(theme === 'light' ? 'dark' : 'light');
      return;
    }
    document.startViewTransition(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    });
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggle };
};

export default useTheme;
