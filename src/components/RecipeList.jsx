import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, searchTerm, selectedTag }) => {
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = searchTerm === '' ||
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesTag = selectedTag === '' || recipe.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  if (filteredRecipes.length === 0) {
    return (
      <div className="text-center py-16 sm:py-20 animate-fade-in">
        <div className="bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 rounded-2xl shadow-card max-w-md mx-auto p-8 sm:p-10 space-y-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-terra-50 dark:bg-terra-900/30 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-terra-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3
            className="text-lg font-bold text-bark dark:text-cream"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            No recipes found
          </h3>
          <p className="text-neutral-500 dark:text-cream/60 text-sm leading-relaxed">
            {searchTerm || selectedTag
              ? 'Try adjusting your search or filter.'
              : 'No recipes yet — check back soon.'}
          </p>
          {(searchTerm || selectedTag) && (
            <button onClick={() => window.location.reload()} className="btn-secondary text-sm">
              Clear filters
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="flex items-center justify-between">
        <h2
          className="text-xl sm:text-2xl font-bold text-forest-700 dark:text-forest-300"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {filteredRecipes.length === recipes.length
            ? 'All Recipes'
            : `${filteredRecipes.length} of ${recipes.length}`}
        </h2>
        {(searchTerm || selectedTag) && (
          <span className="text-xs text-neutral-400 dark:text-cream/40 font-medium uppercase tracking-wide">
            Filtered
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {filteredRecipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className="animate-fade-in h-full"
            style={{ animationDelay: `${index * 0.04}s` }}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
