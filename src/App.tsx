// src/App.tsx

import { useState } from 'react';
import type { Category, MenuItem } from './types';
import { MENU_ITEMS } from './data';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ResultsCount from './components/ResultsCount';
import MenuGrid from './components/MenuGrid';
import './styles.css';

export default function App() {

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  // Need to go over themes and how they work?
  // Same pattern as activeCategory — just a boolean this time
  const [isDark, setIsDark] = useState<boolean>(false);
  
  // Toggle function — flips between true and false
  function toggleTheme(): void {
    setIsDark(prev => !prev);
  }
  
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

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <Header isDark={isDark} onToggle={toggleTheme} />
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ResultsCount filtered={filteredItems.length} total={MENU_ITEMS.length} />
      <MenuGrid items={filteredItems} searchQuery={searchQuery} />
    </div>
  );
}