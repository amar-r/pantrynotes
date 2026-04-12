import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block group focus-visible h-full">
      <div className="bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 rounded-2xl shadow-card dark:shadow-none p-6 sm:p-7 h-full flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-warm hover:border-forest-200 dark:hover:border-forest-600">

        {/* Body */}
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {recipe.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-terra-50 dark:bg-terra-900/40 text-terra-600 dark:text-terra-300 border border-terra-100 dark:border-terra-800/60"
              >
                {tag}
              </span>
            ))}
            {recipe.tags.length > 3 && (
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-forest-800 text-neutral-500 dark:text-cream/50">
                +{recipe.tags.length - 3}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className="text-lg sm:text-xl font-bold text-bark dark:text-cream mb-2 line-clamp-2 leading-snug group-hover:text-forest-700 dark:group-hover:text-forest-300 transition-colors duration-200"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {recipe.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-500 dark:text-cream/60 text-sm line-clamp-3 leading-relaxed">
            {recipe.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-forest-50 dark:border-forest-800">
          <div className="flex items-center gap-4 text-xs text-neutral-400 dark:text-cream/40">
            {recipe.cookTime && (
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-terra-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="truncate max-w-[100px]">{recipe.cookTime}</span>
              </span>
            )}
            {recipe.servings && (
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-terra-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate max-w-[80px]">{recipe.servings}</span>
              </span>
            )}
          </div>
          <span className="text-xs font-semibold text-forest-600 dark:text-forest-400 group-hover:text-forest-800 dark:group-hover:text-forest-300 transition-colors duration-200 flex-shrink-0 ml-2">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
