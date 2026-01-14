import { useState } from 'react';

interface TimelineItem {
    id: string;
    year: string;
    company: string;
    role: string;
    description: string;
    icon: string;
    color: string;
    current?: boolean;
}

interface Props {
    items: TimelineItem[];
}

const colorMap: Record<string, { bg: string; text: string; border: string; line: string }> = {
    orange: {
        bg: 'rgba(251, 146, 60, 0.1)',
        text: '#fb923c',
        border: 'rgba(251, 146, 60, 0.3)',
        line: '#fb923c'
    },
    blue: {
        bg: 'rgba(96, 165, 250, 0.1)',
        text: '#60a5fa',
        border: 'rgba(96, 165, 250, 0.3)',
        line: '#60a5fa'
    },
    purple: {
        bg: 'rgba(168, 85, 247, 0.1)',
        text: '#a855f7',
        border: 'rgba(168, 85, 247, 0.3)',
        line: '#a855f7'
    },
    green: {
        bg: 'rgba(74, 222, 128, 0.1)',
        text: '#4ade80',
        border: 'rgba(74, 222, 128, 0.3)',
        line: '#4ade80'
    },
    cyan: {
        bg: 'var(--color-accent-glow)',
        text: 'var(--color-accent)',
        border: 'rgba(34, 211, 238, 0.3)',
        line: 'var(--color-accent)'
    },
};

export default function TimelineFun({ items }: Props) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="relative">
            {items.map((item, index) => {
                const colors = colorMap[item.color] || colorMap.cyan;
                const isActive = activeIndex === index;
                const isLast = index === items.length - 1;

                return (
                    <div
                        key={item.id}
                        className="relative flex gap-6 pb-12 last:pb-0"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        {/* Year - Desktop */}
                        <div className="hidden md:flex w-32 shrink-0 justify-end pt-1">
                            <span
                                className="text-sm font-mono"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                {item.year}
                            </span>
                        </div>

                        {/* Timeline Line & Dot */}
                        <div className="relative flex flex-col items-center">
                            {/* Dot */}
                            <div
                                className={`
                                    relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center
                                    transition-all duration-300 cursor-pointer
                                    ${isActive ? 'scale-110' : ''}
                                `}
                                style={{
                                    backgroundColor: item.current ? 'var(--color-accent)' : 'var(--color-bg-secondary)',
                                    borderColor: item.current ? 'var(--color-accent)' : colors.border,
                                }}
                            >
                                <span className="text-base">{item.icon}</span>
                                {item.current && (
                                    <span
                                        className="absolute inset-0 rounded-full animate-ping opacity-30"
                                        style={{ backgroundColor: 'var(--color-accent)' }}
                                    />
                                )}
                            </div>

                            {/* Line */}
                            {!isLast && (
                                <div
                                    className="w-0.5 flex-1 mt-2"
                                    style={{
                                        background: item.current
                                            ? `linear-gradient(to bottom, var(--color-accent), var(--color-border-subtle))`
                                            : 'var(--color-border-subtle)'
                                    }}
                                />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                            {/* Year - Mobile */}
                            <span
                                className="md:hidden text-xs font-mono mb-1 block"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                {item.year}
                            </span>

                            <div
                                className="p-4 rounded-xl border transition-all duration-300"
                                style={{
                                    backgroundColor: isActive ? colors.bg : 'var(--color-bg-elevated)',
                                    borderColor: isActive ? colors.border : 'var(--color-border)',
                                }}
                            >
                                <h3
                                    className="font-semibold"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {item.company}
                                </h3>
                                <p
                                    className="text-sm font-medium mt-1"
                                    style={{ color: colors.text }}
                                >
                                    {item.role}
                                </p>
                                <p
                                    className={`
                                        text-sm overflow-hidden transition-all duration-300
                                        ${isActive ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                                    `}
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
