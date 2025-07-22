import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-600 sticky top-0 z-50 transition-colors duration-200 shadow-subtle">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group focus-visible">
              <div className="w-12 h-12 bg-primary-600 dark:bg-primary-500 rounded-xl flex items-center justify-center group-hover:bg-primary-700 dark:group-hover:bg-primary-600 transition-colors duration-200 shadow-subtle">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">PantryNotes</h1>
                <p className="text-sm text-muted">Recipe Collection</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link focus-visible">
                All Recipes
              </Link>
              <ThemeToggle />
            </nav>

            {/* Mobile menu */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button className="theme-toggle" aria-label="Menu">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container animate-fade-in">
        {children}
      </main>

                  {/* Footer */}
            <footer className="bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-600 mt-auto transition-colors duration-200 shadow-subtle">
              <div className="container">
                <div className="text-center space-y-3">
                  <p className="text-muted text-sm">
                    Crafted with care for everyone
                  </p>
                  <p className="text-xs text-subtle">
                    PantryNotes © {new Date().getFullYear()} • Accessible & Inclusive Design
                  </p>
                  <p className="text-xs text-subtle mt-2">
                    Disclaimer: These recipes are shared for informational purposes only. Please use your own judgment regarding food safety and dietary restrictions. The author is not responsible for any adverse effects from following these recipes.
                  </p>
                </div>
              </div>
            </footer>
    </div>
  );
};

export default Layout; 