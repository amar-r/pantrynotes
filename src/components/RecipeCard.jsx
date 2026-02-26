import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block group focus-visible">
      <div className="py-6 border-b border-stone-200 dark:border-neutral-800 hover:bg-stone-50 dark:hover:bg-neutral-900 -mx-4 px-4 transition-colors duration-150">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-medium text-stone-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-150 mb-1">
              {recipe.title}
            </h3>
            <p className="text-sm text-stone-500 dark:text-neutral-400 line-clamp-2 leading-relaxed mb-3">
              {recipe.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {recipe.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs text-stone-500 dark:text-neutral-500 bg-stone-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 text-right hidden sm:block">
            {recipe.cookTime && (
              <p className="text-xs text-stone-400 dark:text-neutral-500 mb-1">{recipe.cookTime}</p>
            )}
            {recipe.servings && (
              <p className="text-xs text-stone-400 dark:text-neutral-500">{recipe.servings}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
