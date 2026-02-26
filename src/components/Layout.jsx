import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-neutral-950">
      {/* Header */}
      <header className="bg-white dark:bg-neutral-900 border-b border-stone-200 dark:border-neutral-800 sticky top-0 z-50">
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-stone-900 dark:text-white font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity duration-150">
            PantryNotes
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-neutral-800 mt-auto">
        <div className="w-full max-w-3xl mx-auto py-8 px-6">
          <p className="text-xs text-stone-400 dark:text-neutral-600">
            PantryNotes © {new Date().getFullYear()} — Recipes shared for informational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
