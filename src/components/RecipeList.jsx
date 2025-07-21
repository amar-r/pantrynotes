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
      <div className="text-center py-16 animate-fade-in">
        <div className="section max-w-md mx-auto">
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">No recipes found</h3>
              <p className="text-muted leading-relaxed">
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
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
            {filteredRecipes.length === recipes.length 
              ? `All Recipes (${recipes.length})`
              : `${filteredRecipes.length} of ${recipes.length} recipes`
            }
          </h2>
          {(searchTerm || selectedTag) && (
            <p className="text-sm text-muted mt-2 font-medium">
              Filtered results
            </p>
          )}
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe, index) => (
          <div 
            key={recipe.id} 
            className="animate-scale-in"
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