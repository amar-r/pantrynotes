import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-neutral-900">
      {/* Header */}
      <header className="bg-neutral-900 text-white dark:bg-neutral-900 dark:text-white sticky top-0 z-50 shadow-header">
        <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3 group focus-visible">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-700 transition-colors duration-200 shadow-card">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight">PantryNotes</span>
          </Link>
          {/* Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-indigo-400 hover:text-white font-semibold transition-colors duration-200 focus-visible">
              Recipes
            </Link>
            <ThemeToggle />
          </nav>
          {/* Mobile menu (just theme toggle for now) */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-screen-lg mx-auto px-4 py-10 bg-gray-50 dark:bg-neutral-900 transition-colors duration-200">
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-neutral-900 text-white dark:bg-neutral-900 dark:text-white border-t border-neutral-800 mt-auto">
        <div className="w-full max-w-screen-lg mx-auto py-8 text-center space-y-2 px-4">
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            PantryNotes © {new Date().getFullYear()} • Powered by React & Tailwind CSS
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-600">
            Disclaimer: These recipes are shared for informational purposes only. Please use your own judgment regarding food safety and dietary restrictions. The author is not responsible for any adverse effects from following these recipes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 