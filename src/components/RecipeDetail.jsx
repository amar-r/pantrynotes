import { Link } from 'react-router-dom';
import WakeLockToggle from './WakeLockToggle';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className="py-24 text-center animate-fade-in">
        <p className="text-stone-400 dark:text-neutral-600 text-sm mb-4">Recipe not found.</p>
        <Link to="/" className="text-sm text-stone-900 dark:text-white underline underline-offset-4 hover:opacity-60 transition-opacity">
          ← Back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Top nav */}
      <div className="flex items-center justify-between mb-10 no-print">
        <Link
          to="/"
          className="text-sm text-stone-500 dark:text-neutral-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-150"
        >
          ← Recipes
        </Link>
        <div className="flex items-center gap-2">
          <WakeLockToggle />
          <button
            onClick={() => window.print()}
            className="text-xs text-stone-400 dark:text-neutral-500 hover:text-stone-700 dark:hover:text-neutral-300 transition-colors duration-150 px-2 py-1"
            aria-label="Print recipe"
            title="Print this recipe"
          >
            Print
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-stone-900 dark:text-white mb-3 leading-tight">
        {recipe.title}
      </h1>
      <p className="text-stone-500 dark:text-neutral-400 leading-relaxed mb-6">
        {recipe.description}
      </p>

      {/* Meta + Tags */}
      <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-stone-200 dark:border-neutral-800">
        {recipe.cookTime && (
          <span className="text-sm text-stone-500 dark:text-neutral-400">{recipe.cookTime}</span>
        )}
        {recipe.servings && (
          <span className="text-sm text-stone-500 dark:text-neutral-400">{recipe.servings}</span>
        )}
        {recipe.tags.map((tag) => (
          <span key={tag} className="text-xs text-stone-500 dark:text-neutral-500 bg-stone-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
        {/* Ingredients */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-neutral-500 mb-5">
            Ingredients
          </h2>
          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-stone-700 dark:text-neutral-300 leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 dark:bg-neutral-600 flex-shrink-0" />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-neutral-500 mb-5">
            Instructions
          </h2>
          <ol className="space-y-5">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 text-xs font-semibold text-stone-300 dark:text-neutral-600 pt-0.5 w-4 text-right">
                  {index + 1}
                </span>
                <span className="text-sm text-stone-700 dark:text-neutral-300 leading-relaxed">
                  {instruction}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Notes */}
      {recipe.notes && (
        <div className="pt-8 border-t border-stone-200 dark:border-neutral-800">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-neutral-500 mb-4">
            Notes
          </h2>
          <p className="text-sm text-stone-600 dark:text-neutral-400 leading-relaxed italic">
            {recipe.notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
