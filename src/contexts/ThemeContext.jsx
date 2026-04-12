import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

const getSystemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

export const ThemeProvider = ({ children }) => {
  // null = follow system, 'dark'/'light' = user has manually overridden
  const [userOverride, setUserOverride] = useState(() => {
    return localStorage.getItem('pantry-theme') || null;
  });

  const [systemDark, setSystemDark] = useState(getSystemDark);

  // Listen to OS-level preference changes and apply them when no manual override is set
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setSystemDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const isDark = userOverride !== null ? userOverride === 'dark' : systemDark;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setUserOverride(next);
    localStorage.setItem('pantry-theme', next);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
