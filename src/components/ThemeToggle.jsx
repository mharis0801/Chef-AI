import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();
    
    return (
        <button 
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
}