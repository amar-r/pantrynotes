import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block group focus-visible">
      <div className="card card-hover p-6 h-full">
        <div className="flex flex-col h-full space-y-4">
          {/* Header */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
              {recipe.title}
            </h3>
            <p className="text-muted text-sm line-clamp-3 leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {recipe.tags.slice(0, 3).map((tag, index) => (
              <span key={tag} className={index % 2 === 0 ? 'tag' : 'tag-accent'}>
                {tag}
              </span>
            ))}
            {recipe.tags.length > 3 && (
              <span className="tag">
                +{recipe.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Footer Info */}
          <div className="mt-auto pt-4 divider">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted">
                {recipe.cookTime && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{recipe.cookTime}</span>
                  </span>
                )}
                {recipe.servings && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium">{recipe.servings}</span>
                  </span>
                )}
              </div>
              
              <span className="text-sm text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200 font-semibold">
                View Recipe →
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard; 