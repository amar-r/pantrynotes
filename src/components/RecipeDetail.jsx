import { Link } from 'react-router-dom';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="section max-w-md mx-auto">
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.1-5.5-2.709" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">Recipe not found</h3>
              <p className="text-muted leading-relaxed">
                The recipe you're looking for doesn't exist or has been removed.
              </p>
            </div>
            <Link to="/" className="btn-primary">
              ← Back to All Recipes
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Back Button */}
      <div className="animate-slide-up">
        <Link 
          to="/" 
          className="nav-link inline-flex items-center focus-visible"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Recipes
        </Link>
      </div>

      {/* Recipe Header */}
      <div className="section animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 leading-tight">
              {recipe.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              {recipe.description}
            </p>
          </div>

          {/* Recipe Meta */}
          <div className="flex flex-wrap items-center gap-6 pt-4 divider">
            {recipe.cookTime && (
              <div className="flex items-center text-muted">
                <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">{recipe.cookTime}</span>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center text-muted">
                <svg className="w-5 h-5 mr-2 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-semibold">{recipe.servings} servings</span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag, index) => (
              <span key={tag} className={index % 2 === 0 ? 'tag' : 'tag-accent'}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ingredients */}
        <div className="section animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Ingredients</h2>
          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-neutral-700 dark:text-neutral-300 font-medium">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="section animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Instructions</h2>
          <ol className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start">
                <span className="w-7 h-7 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-bold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">{instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Notes */}
      {recipe.notes && (
        <div className="section animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Notes</h2>
          <div className="bg-accent-50 dark:bg-accent-900/30 rounded-xl p-6 border-l-4 border-accent-200 dark:border-accent-800">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed italic font-medium">
              {recipe.notes}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail; 