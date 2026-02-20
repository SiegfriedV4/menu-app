// src/components/MenuGrid.tsx

import type { MenuItem } from '../types';
import MenuCard from './MenuCard';

interface MenuGridProps {
  items: MenuItem[];
  searchQuery: string;
}

function MenuGrid({ items, searchQuery }: MenuGridProps) {
  if (items.length === 0) {
    return (
      <div className="no-results">
        <span>🔍</span>
        No items found for &quot;{searchQuery}&quot;
      </div>
    );
  }

  return (
    <div className="menu-grid">
      {items.map((item: MenuItem) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuGrid;