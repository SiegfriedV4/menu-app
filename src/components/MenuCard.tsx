// src/components/MenuCard.tsx

import type { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="menu-card">
      <div className="card-header">
        <span className="category-badge">{item.category}</span>
        {item.spicy && <span className="spicy-badge">🌶 Spicy</span>}
      </div>
      <h3 className="item-name">{item.name}</h3>
      <p className="item-description">{item.description}</p>
      <div className="item-price">R{item.price.toFixed(2)}</div>
    </div>
  );
}

export default MenuCard;