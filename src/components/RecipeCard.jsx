import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block group focus-visible">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-card p-8 h-full flex flex-col justify-between transition-transform duration-200 hover:scale-[1.025] hover:shadow-lg hover:brightness-105 dark:hover:brightness-110">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
            {recipe.title}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-300 text-base line-clamp-3 leading-relaxed mb-4">
            {recipe.description}
          </p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-cyan-900/30 text-indigo-700 dark:text-cyan-200 border border-indigo-100 dark:border-cyan-800">
              {tag}
            </span>
          ))}
          {recipe.tags.length > 3 && (
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 border border-gray-200 dark:border-neutral-600">
              +{recipe.tags.length - 3} more
            </span>
          )}
        </div>
        {/* Footer Info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-neutral-700">
          <div className="flex items-center space-x-4 text-sm text-neutral-400 dark:text-neutral-300">
            {recipe.cookTime && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-indigo-500 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {recipe.cookTime}
              </span>
            )}
            {recipe.servings && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-indigo-500 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {recipe.servings}
              </span>
            )}
          </div>
          <span className="text-sm text-indigo-600 dark:text-cyan-400 group-hover:text-indigo-700 dark:group-hover:text-cyan-300 transition-colors duration-200 font-semibold">
            View Recipe →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard; 