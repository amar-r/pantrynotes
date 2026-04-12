import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-950 transition-colors duration-200">
      {/* Header */}
      <header className="bg-forest-700 dark:bg-forest-900 sticky top-0 z-50 shadow-header">
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <Link to="/" className="group focus-visible min-w-0 flex-shrink">
            <span
              className="text-xl sm:text-2xl font-bold text-cream tracking-tight leading-none truncate"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Pantry Notes
            </span>
          </Link>

          <nav className="flex items-center gap-3 sm:gap-5 flex-shrink-0 ml-4">
            <Link
              to="/"
              className="text-cream/75 hover:text-cream text-xs sm:text-sm font-medium uppercase tracking-widest transition-colors duration-200 focus-visible hidden sm:block"
            >
              Recipes
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 bg-cream dark:bg-forest-950 transition-colors duration-200">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-cream dark:bg-forest-950 border-t-2 border-forest-100 dark:border-forest-800 mt-auto transition-colors duration-200">
        <div className="w-full max-w-screen-xl mx-auto py-10 text-center px-6 space-y-2">
          <p
            className="text-lg font-bold text-forest-700 dark:text-forest-300"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Pantry Notes
          </p>
          <p className="text-sm text-neutral-400 dark:text-forest-600">
            A personal collection of recipes worth keeping.
          </p>
          <p className="text-xs text-neutral-300 dark:text-forest-700 max-w-xl mx-auto pt-2">
            These recipes are shared for personal reference. Use your own judgment regarding food safety and dietary needs.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
