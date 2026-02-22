// src/App.tsx

import { useState } from 'react';
import type { Category, MenuItem, SortOrder } from './types';
import { MENU_ITEMS } from './data';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import SortBar from './components/SortBar';
import ResultsCount from './components/ResultsCount';
import MenuGrid from './components/MenuGrid';
import DrinksSection from './components/DrinksSection';
import './styles.css';

export default function App() {

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  // New state for sorting — default is 'none'
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');

  // Need to go over themes and how they work?
  // Same pattern as activeCategory — just a boolean this time
  const [isDark, setIsDark] = useState<boolean>(false);
  
  // Toggle function — flips between true and false
  function toggleTheme(): void {
    setIsDark(prev => !prev);
  }
  
  // the sorting logic — creates a new sorted array based on the filtered items and the selected sort order
  const filteredItems: MenuItem[] = MENU_ITEMS.filter((item: MenuItem) => {
    const matchesCategory: boolean =
      activeCategory === 'All' || item.category === activeCategory;

    const query: string = searchQuery.toLowerCase();
    const matchesSearch: boolean =
      query === '' ||
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const sortedItems: MenuItem[] = [...filteredItems].sort((a, b) => {
    switch (sortOrder) {
      case 'low-high':  return a.price - b.price;  // cheapest first
      case 'high-low':  return b.price - a.price;  // most expensive first
      default:          return 0;                  // 'none' — keep original order
    }
  });

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <Header isDark={isDark} onToggle={toggleTheme} />
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <SortBar sortOrder={sortOrder} onSortChange={setSortOrder} />
      <ResultsCount filtered={filteredItems.length} total={MENU_ITEMS.length} />
      <MenuGrid items={sortedItems} searchQuery={searchQuery} />

      <DrinksSection />
    </div>
  );
}