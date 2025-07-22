import { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import SEO from '../components/SEO';
import recipesData from '../data/recipes.json';

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
    <>
      <SEO 
        description="A collection of my favorite tested recipes, cooking techniques, and kitchen notes. Shared for inspiration and culinary exploration."
      />
      <div className="space-y-8">
        {/* Hero Section with gradient background */}
        <section className="relative text-center py-10 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500 via-cyan-400 to-white dark:from-indigo-900 dark:via-cyan-800 dark:to-neutral-900 opacity-30" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Recipe Collection
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-200 max-w-2xl mx-auto mb-4">
            Organize and discover your favorite recipes with clarity and ease. Designed for everyone, from beginners to experienced cooks.
          </p>
          {hasRecipes && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-2">
              <div className="flex-1 card py-6 px-8 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent mb-0.5">{recipesData.length}</div>
                <div className="text-sm text-neutral-500 font-semibold uppercase tracking-wide">Recipes</div>
              </div>
              <div className="flex-1 card py-6 px-8 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent mb-0.5">{availableTags.length}</div>
                <div className="text-sm text-neutral-500 font-semibold uppercase tracking-wide">Categories</div>
              </div>
            </div>
          )}
        </section>
        {/* SearchBar (tighter spacing) */}
        <div className="max-w-3xl mx-auto -mt-2">
          <SearchBar 
            onSearch={handleSearch}
            onTagFilter={handleTagFilter}
            availableTags={availableTags}
          />
        </div>
        {/* If no recipes, show coming soon message */}
        {!hasRecipes ? (
          <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-card max-w-lg mx-auto text-center space-y-6 p-10">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Recipes coming soon!</h2>
              <p className="text-neutral-500 dark:text-neutral-300 text-lg">We’re cooking up something delicious. Check back soon!</p>
            </div>
          </div>
        ) : (
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <RecipeList 
              recipes={recipesData}
              searchTerm={searchTerm}
              selectedTag={selectedTag}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage; 