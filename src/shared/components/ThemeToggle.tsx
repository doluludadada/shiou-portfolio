import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check for saved preference or system preference
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default to dark
        setTheme(initialTheme);
        document.documentElement.classList.toggle('light', initialTheme === 'light');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('light', newTheme === 'light');
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <button
                className="relative p-2 rounded-lg border theme-transition"
                style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderColor: 'var(--color-border)',
                }}
                aria-label="Toggle theme"
            >
                <div className="w-4 h-4" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg border theme-transition hover:border-accent group"
            style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
            }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <div className="relative w-4 h-4 overflow-hidden">
                {/* Sun icon */}
                <Sun 
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
                        theme === 'light' 
                            ? 'rotate-0 scale-100 opacity-100' 
                            : 'rotate-90 scale-0 opacity-0'
                    }`}
                    style={{ color: 'var(--color-accent)' }}
                />
                {/* Moon icon */}
                <Moon 
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${
                        theme === 'dark' 
                            ? 'rotate-0 scale-100 opacity-100' 
                            : '-rotate-90 scale-0 opacity-0'
                    }`}
                    style={{ color: 'var(--color-text-secondary)' }}
                />
            </div>
        </button>
    );
}
