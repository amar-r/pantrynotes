import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, searchTerm, selectedTag }) => {
  // Filter recipes based on search term and selected tag
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
      <div className="text-center py-24 animate-fade-in">
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-card max-w-md mx-auto p-10">
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-indigo-50 dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-indigo-500 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">No recipes found</h3>
              <p className="text-neutral-500 dark:text-neutral-300 leading-relaxed">
                {searchTerm || selectedTag 
                  ? "Try adjusting your search criteria or browse all recipes." 
                  : "Start building your collection by adding your first recipe."
                }
              </p>
            </div>
            {(searchTerm || selectedTag) && (
              <button 
                onClick={() => window.location.reload()} 
                className="btn-primary"
              >
                View All Recipes
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 w-full max-w-screen-lg mx-auto">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg md:text-2xl font-bold text-indigo-600 dark:text-cyan-400">
          {filteredRecipes.length === recipes.length 
            ? `All Recipes (${recipes.length})`
            : `${filteredRecipes.length} of ${recipes.length} recipes`
          }
        </h2>
        {(searchTerm || selectedTag) && (
          <span className="text-neutral-400 dark:text-neutral-300 text-base font-medium">Filtered results</span>
        )}
      </div>
      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {filteredRecipes.map((recipe, index) => (
          <div 
            key={recipe.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList; 