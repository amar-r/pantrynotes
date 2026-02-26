import { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import SEO from '../components/SEO';
import recipesData from '../data/recipes.json';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const availableTags = useMemo(() => {
    const allTags = recipesData.flatMap(recipe => recipe.tags);
    return [...new Set(allTags)].sort();
  }, []);

  return (
    <>
      <SEO description="A collection of tested recipes, cooking techniques, and kitchen notes." />

      {/* Page heading */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-stone-900 dark:text-white mb-1">Recipes</h1>
        <p className="text-sm text-stone-400 dark:text-neutral-500">
          {recipesData.length} recipes · {availableTags.length} categories
        </p>
      </div>

      {/* Search + filters */}
      <SearchBar
        onSearch={setSearchTerm}
        onTagFilter={setSelectedTag}
        availableTags={availableTags}
      />

      {/* Recipe list */}
      {recipesData.length === 0 ? (
        <p className="text-sm text-stone-400 dark:text-neutral-600 py-12 text-center">No recipes yet.</p>
      ) : (
        <RecipeList
          recipes={recipesData}
          searchTerm={searchTerm}
          selectedTag={selectedTag}
        />
      )}
    </>
  );
};

export default HomePage;
