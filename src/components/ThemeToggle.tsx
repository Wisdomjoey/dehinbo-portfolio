import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full card"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      ) : (
        <Moon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      )}
    </button>
  );
};

export default ThemeToggle;