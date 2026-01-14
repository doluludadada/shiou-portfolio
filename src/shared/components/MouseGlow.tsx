import { useEffect, useState } from 'react';

export default function MouseGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            setIsLightMode(document.documentElement.classList.contains('light'));
        };
        checkTheme();

        // Watch for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Different glow colors for light/dark mode
    const glowColor = isLightMode
        ? 'rgba(8, 145, 178, 0.04)'
        : 'rgba(34, 211, 238, 0.06)';

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <div
                className="absolute w-125 h-125 rounded-full transition-colors duration-300"
                style={{
                    left: position.x - 250,
                    top: position.y - 250,
                    background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
                }}
            />
        </div>
    );
}
