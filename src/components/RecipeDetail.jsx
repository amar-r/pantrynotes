import { Link } from 'react-router-dom';
import WakeLock from './WakeLock';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className="text-center py-24 animate-fade-in px-4">
        <div className="bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 rounded-2xl shadow-card max-w-md mx-auto p-8 sm:p-10 space-y-6">
          <div className="w-16 h-16 mx-auto bg-terra-50 dark:bg-terra-900/30 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-terra-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6" />
            </svg>
          </div>
          <div>
            <h3
              className="text-xl font-bold text-bark dark:text-cream mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Recipe not found
            </h3>
            <p className="text-neutral-500 dark:text-cream/60 leading-relaxed text-sm">
              The recipe you're looking for doesn't exist or has been removed.
            </p>
          </div>
          <Link to="/" className="btn-primary justify-center">
            ← Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Back link + Wake Lock row */}
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-2 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="text-forest-600 dark:text-forest-400 hover:text-forest-800 dark:hover:text-forest-200 font-medium text-sm inline-flex items-center gap-1.5 transition-colors focus-visible"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All Recipes
        </Link>
        <WakeLock />
      </div>

      <div className="max-w-screen-md mx-auto px-4 sm:px-6 pb-16 space-y-6 sm:space-y-8">
        {/* Header card */}
        <div className="bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 rounded-2xl shadow-card dark:shadow-none p-6 sm:p-10 space-y-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full bg-terra-50 dark:bg-terra-900/40 text-terra-600 dark:text-terra-300 border border-terra-100 dark:border-terra-800/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-bark dark:text-cream leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {recipe.title}
          </h1>

          <p className="text-neutral-500 dark:text-cream/60 text-base sm:text-lg leading-relaxed">
            {recipe.description}
          </p>

          {/* Meta stats */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t border-forest-50 dark:border-forest-800">
            {recipe.cookTime && (
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-terra-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-bark dark:text-cream">{recipe.cookTime}</span>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-terra-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold text-bark dark:text-cream">{recipe.servings}</span>
              </div>
            )}
          </div>
        </div>

        {/* Ingredients + Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Ingredients */}
          <div className="bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 rounded-2xl shadow-card dark:shadow-none p-6 sm:p-8">
            <h2
              className="text-base sm:text-lg font-bold text-forest-700 dark:text-forest-300 mb-4 sm:mb-5 pb-3 border-b border-forest-100 dark:border-forest-800"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-terra-400 mt-2 flex-shrink-0" />
                  <span className="text-bark dark:text-cream/90 text-sm leading-relaxed">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 rounded-2xl shadow-card dark:shadow-none p-6 sm:p-8">
            <h2
              className="text-base sm:text-lg font-bold text-forest-700 dark:text-forest-300 mb-4 sm:mb-5 pb-3 border-b border-forest-100 dark:border-forest-800"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Instructions
            </h2>
            <ol className="space-y-4 sm:space-y-5">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest-700 dark:bg-forest-600 text-cream text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-bark dark:text-cream/90 text-sm leading-relaxed">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Notes */}
        {recipe.notes && (
          <div className="bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 rounded-2xl shadow-card dark:shadow-none p-6 sm:p-8">
            <h2
              className="text-base sm:text-lg font-bold text-forest-700 dark:text-forest-300 mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Notes
            </h2>
            <div className="bg-terra-50 dark:bg-terra-900/20 rounded-xl p-4 sm:p-5 border-l-4 border-terra-300 dark:border-terra-700">
              <p className="text-bark dark:text-cream/80 text-sm leading-relaxed italic">{recipe.notes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
