import { useState } from 'react';

const SearchBar = ({ onSearch, onTagFilter, availableTags }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleTagChange = (tag) => {
    const value = selectedTag === tag ? '' : tag;
    setSelectedTag(value);
    onTagFilter(value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    onSearch('');
    onTagFilter('');
  };

  const hasFilters = searchTerm || selectedTag;

  return (
    <div className="bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 rounded-2xl shadow-card dark:shadow-none p-5 sm:p-6 transition-colors duration-200">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Search */}
        <div className="sm:col-span-2">
          <label htmlFor="search" className="block text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-cream/40 mb-2">
            Search
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Name, ingredient, description..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="input pl-10"
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-forest-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category filter */}
        <div>
          <label htmlFor="tag-filter" className="block text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-cream/40 mb-2">
            Category
          </label>
          <select
            id="tag-filter"
            value={selectedTag}
            onChange={handleTagChange}
            className="input appearance-none cursor-pointer"
          >
            <option value="">All Categories</option>
            {availableTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Active filters */}
      {(searchTerm || selectedTag) && (
        <div className="mt-4 pt-4 border-t border-forest-50 dark:border-forest-800 flex flex-wrap items-center gap-3">
          <span className="text-xs text-neutral-400 dark:text-cream/40 font-medium">Active:</span>
          {searchTerm && <span className="tag">"{searchTerm}"</span>}
          {selectedTag && <span className="tag">{selectedTag}</span>}
          <button
            onClick={clearFilters}
            className="ml-auto text-xs font-semibold text-forest-600 dark:text-forest-400 hover:text-forest-800 dark:hover:text-forest-200 transition-colors"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
