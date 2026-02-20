// src/components/FilterBar.tsx

import type { Category } from '../types';
import { ALL_CATEGORIES } from '../data';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

function FilterBar({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search menu... (e.g. chicken, spicy)"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearchChange(e.target.value)
        }
      />
      <div className="category-buttons">
        <button
          className={`cat-btn ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => onCategoryChange('All')}
        >
          All
        </button>
        {ALL_CATEGORIES.map((cat: Category) => (
          <button
            key={cat}
            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;