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
    <div className="mb-8">
      {/* Search input */}
      <div className="relative mb-4">
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-6 pr-4 py-2 text-sm bg-transparent border-b border-stone-300 dark:border-neutral-700 focus:border-stone-900 dark:focus:border-neutral-300 focus:outline-none text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-neutral-600 transition-colors duration-150"
        />
      </div>

      {/* Tag filters */}
      {availableTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {availableTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`text-xs px-3 py-1 rounded-full border transition-colors duration-150 ${
                selectedTag === tag
                  ? 'bg-stone-900 dark:bg-white text-white dark:text-stone-900 border-stone-900 dark:border-white'
                  : 'bg-transparent text-stone-500 dark:text-neutral-400 border-stone-300 dark:border-neutral-700 hover:border-stone-500 dark:hover:border-neutral-500'
              }`}
            >
              {tag}
            </button>
          ))}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-xs px-3 py-1 text-stone-400 dark:text-neutral-500 hover:text-stone-700 dark:hover:text-neutral-300 transition-colors duration-150"
            >
              Clear
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
