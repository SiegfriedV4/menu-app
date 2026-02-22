// src/components/SortBar.tsx
import type { SortOrder } from '../types';

interface SortBarProps {
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

function SortBar({ sortOrder, onSortChange }: SortBarProps) {
  return (
    <div className="sort-bar">
      <span className="sort-label">Sort by price:</span>

      {/* A native HTML select dropdown */}
      {/* e.target.value is the selected option's value — cast to SortOrder */}
      <select
        className="sort-select"
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as SortOrder)}
      >
        <option value="none">Default</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>
    </div>
  );
}

export default SortBar;