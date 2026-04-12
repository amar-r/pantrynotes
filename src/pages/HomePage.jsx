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
      <SEO
        description="A collection of my favorite tested recipes, cooking techniques, and kitchen notes."
      />

      {/* Hero */}
      <section className="bg-forest-700 dark:bg-forest-900 py-16 sm:py-24 text-center px-6 transition-colors duration-200">
        <p className="text-terra-300 text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5">
          A personal cookbook
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-5 sm:mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Pantry Notes
        </h1>
        <p className="text-cream/70 text-base sm:text-lg max-w-sm sm:max-w-md mx-auto leading-relaxed">
          Real recipes, kept for keeps. From quick weeknight meals to long, slow weekends.
        </p>
      </section>

      {/* Stats bar */}
      <div className="bg-forest-800 dark:bg-forest-950 border-b border-forest-900 dark:border-forest-800 transition-colors duration-200">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-center gap-10 sm:gap-12">
          <div className="text-center">
            <div
              className="text-2xl sm:text-3xl font-bold text-cream"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {recipesData.length}
            </div>
            <div className="text-xs text-cream/50 uppercase tracking-widest font-semibold mt-0.5">Recipes</div>
          </div>
          <div className="w-px h-8 bg-forest-600 dark:bg-forest-700" />
          <div className="text-center">
            <div
              className="text-2xl sm:text-3xl font-bold text-cream"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {availableTags.length}
            </div>
            <div className="text-xs text-cream/50 uppercase tracking-widest font-semibold mt-0.5">Categories</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-6 sm:space-y-8">
        <SearchBar
          onSearch={setSearchTerm}
          onTagFilter={setSelectedTag}
          availableTags={availableTags}
        />
        <div className="animate-slide-up">
          <RecipeList
            recipes={recipesData}
            searchTerm={searchTerm}
            selectedTag={selectedTag}
          />
        </div>
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
