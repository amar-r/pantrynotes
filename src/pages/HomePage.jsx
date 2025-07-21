import { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import recipesData from '../data/recipes.json';

const CookingPotCSS = () => (
  <div className="relative flex flex-col items-center justify-center" style={{ height: 140 }} aria-hidden="true">
    {/* Pot */}
    <div className="relative z-10">
      {/* Pot body */}
      <div className="w-28 h-12 bg-neutral-300 dark:bg-neutral-700 rounded-b-3xl rounded-t-xl mx-auto shadow-md animate-pot-bounce" />
      {/* Pot rim */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-6 bg-neutral-400 dark:bg-neutral-600 rounded-full shadow animate-pot-bounce" style={{ zIndex: 2 }} />
      {/* Handles */}
      <div className="absolute left-0 top-6 w-6 h-6 rounded-full border-4 border-neutral-400 dark:border-neutral-600" style={{ zIndex: 1 }} />
      <div className="absolute right-0 top-6 w-6 h-6 rounded-full border-4 border-neutral-400 dark:border-neutral-600" style={{ zIndex: 1 }} />
    </div>
    {/* Steam */}
    <div className="absolute left-1/2 top-2 -translate-x-1/2 flex space-x-2 z-20">
      <span className="block w-2 h-8 rounded-full bg-gradient-to-t from-neutral-200/0 via-neutral-200/80 to-white/90 dark:from-neutral-700/0 dark:via-neutral-500/80 dark:to-neutral-200/90 animate-steam1" />
      <span className="block w-2 h-7 rounded-full bg-gradient-to-t from-neutral-200/0 via-neutral-200/80 to-white/90 dark:from-neutral-700/0 dark:via-neutral-500/80 dark:to-neutral-200/90 animate-steam2" />
      <span className="block w-2 h-6 rounded-full bg-gradient-to-t from-neutral-200/0 via-neutral-200/80 to-white/90 dark:from-neutral-700/0 dark:via-neutral-500/80 dark:to-neutral-200/90 animate-steam3" />
    </div>
  </div>
);

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Get all unique tags from recipes
  const availableTags = useMemo(() => {
    const allTags = recipesData.flatMap(recipe => recipe.tags);
    return [...new Set(allTags)].sort();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
  };

  const hasRecipes = recipesData.length > 0;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16 animate-fade-in">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 leading-tight">
              Recipe Collection
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Organize and discover your favorite recipes with clarity and ease. 
              Designed for everyone, from beginners to experienced cooks.
            </p>
          </div>
          {hasRecipes && (
            <div className="flex items-center justify-center space-x-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{recipesData.length}</div>
                <div className="text-sm text-muted font-medium">Recipes</div>
              </div>
              <div className="w-px h-12 bg-neutral-300 dark:bg-neutral-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">{availableTags.length}</div>
                <div className="text-sm text-muted font-medium">Categories</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* If no recipes, show coming soon message */}
      {!hasRecipes ? (
        <div className="flex flex-col items-center justify-center py-24 animate-fade-in">
          <div className="section max-w-lg mx-auto text-center space-y-6">
            <CookingPotCSS />
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">Recipes coming soon!</h2>
            <p className="text-muted text-lg">We’re cooking up something delicious. Check back soon!</p>
          </div>
        </div>
      ) : (
        <>
          {/* Search and Filter */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <SearchBar 
              onSearch={handleSearch}
              onTagFilter={handleTagFilter}
              availableTags={availableTags}
            />
          </div>

          {/* Recipe List */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <RecipeList 
              recipes={recipesData}
              searchTerm={searchTerm}
              selectedTag={selectedTag}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage; 