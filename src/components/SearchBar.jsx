import { useState } from 'react';

const SearchBar = ({ onSearch, onTagFilter, availableTags }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleTagChange = (e) => {
    const value = e.target.value;
    setSelectedTag(value);
    onTagFilter(value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    onSearch('');
    onTagFilter('');
  };

  return (
    <div className="section">
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Search Input */}
          <div className="lg:col-span-2 space-y-2">
            <label htmlFor="search" className="block text-sm font-medium text-neutral-700">
              Search Recipes
            </label>
            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder="Search by name, ingredients, or description..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="input pl-10"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Tag Filter */}
          <div className="space-y-2">
            <label htmlFor="tag-filter" className="block text-sm font-medium text-neutral-700">
              Filter by Category
            </label>
            <select
              id="tag-filter"
              value={selectedTag}
              onChange={handleTagChange}
              className="input appearance-none cursor-pointer"
            >
              <option value="">All Categories</option>
              {availableTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters and Clear Button */}
        {(searchTerm || selectedTag) && (
          <div className="pt-6 divider">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted">Active filters:</span>
                {searchTerm && (
                  <span className="tag">
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedTag && (
                  <span className="tag">
                    Category: {selectedTag}
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="btn-secondary text-sm"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar; 