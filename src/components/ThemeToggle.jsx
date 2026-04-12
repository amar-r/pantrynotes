import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-xs text-stone-400 dark:text-neutral-500 hover:text-stone-700 dark:hover:text-neutral-300 transition-colors duration-150 px-2 py-1"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;
