// src/components/Header.tsx

interface HeaderProps {
  isDark: boolean;
  onToggle: () => void;
}

function Header({ isDark, onToggle }: HeaderProps) {
  return (
    <div className="app-header">
      <h1>🍽 Restaurant Menu</h1>
      <p>Browse our full menu or filter by category</p>

      {/* Show different emoji based on current theme */}
      <button className="theme-btn" onClick={onToggle}>
        {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
      </button>
    </div>
  );
}
export default Header;
