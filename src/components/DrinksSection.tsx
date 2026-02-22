// src/components/DrinksSection.tsx

import { useState } from 'react';
import type { DrinkItem, DrinkCategory } from '../types';
import { DRINK_ITEMS, ALL_DRINK_CATEGORIES } from '../data';

function DrinksSection() {
  // Local state — only this component needs to know the active drink category
  const [activeCategory, setActiveCategory] = useState<DrinkCategory | 'All'>('All');

  // Filter drinks by selected category — same pattern as the food filter
  const filtered: DrinkItem[] = DRINK_ITEMS.filter((drink: DrinkItem) =>
    activeCategory === 'All' || drink.category === activeCategory
  );

  return (
    <div className="drinks-section">
      <h2 className="drinks-title">🥤 Drinks</h2>

      {/* Category filter — reuses the same cat-btn styles from the food menu */}
      <div className="category-buttons" style={{ marginBottom: 16 }}>
        <button
          className={`cat-btn ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        {ALL_DRINK_CATEGORIES.map((cat: DrinkCategory) => (
          <button
            key={cat}
            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Drinks grid — reuses menu-grid and menu-card CSS */}
      <div className="menu-grid">
        {filtered.map((drink: DrinkItem) => (
          <div key={drink.id} className="menu-card">
            <img src={drink.image} alt={drink.name} className="card-image" />
            <span className="category-badge">{drink.category}</span>
            <h3 className="item-name">{drink.name}</h3>
            <p className="item-description">{drink.description}</p>
            <div className="item-price">R{drink.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrinksSection;