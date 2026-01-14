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
    orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30', line: 'bg-orange-500' },
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30', line: 'bg-blue-500' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30', line: 'bg-purple-500' },
    green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30', line: 'bg-green-500' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30', line: 'bg-cyan-500' },
};

export default function VerticalTimeline({ items }: Props) {
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
                        {/* Left: Year (desktop only) */}
                        <div className="hidden md:flex w-32 shrink-0 justify-end pt-1">
                            <span className="text-sm font-mono text-zinc-500">{item.year}</span>
                        </div>

                        {/* Center: Line and Icon */}
                        <div className="relative flex flex-col items-center">
                            {/* Icon circle */}
                            <div className={`
                                relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center
                                transition-all duration-300 cursor-pointer
                                ${item.current ? 'bg-cyan-500 border-cyan-500' : `bg-zinc-900 ${colors.border}`}
                                ${isActive ? 'scale-110' : ''}
                            `}>
                                <span className="text-base">{item.icon}</span>
                                {item.current && (
                                    <span className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-30" />
                                )}
                            </div>

                            {/* Vertical line */}
                            {!isLast && (
                                <div className={`
                                    w-0.5 flex-1 mt-2
                                    ${item.current ? 'bg-gradient-to-b from-cyan-500 to-zinc-700' : 'bg-zinc-700'}
                                `} />
                            )}
                        </div>

                        {/* Right: Content card */}
                        <div className="flex-1 pt-1">
                            {/* Year (mobile only) */}
                            <span className="md:hidden text-xs font-mono text-zinc-500 mb-1 block">
                                {item.year}
                            </span>

                            <div className={`
                                p-4 rounded-xl border transition-all duration-300
                                ${isActive ? `${colors.bg} ${colors.border}` : 'bg-zinc-900/50 border-zinc-800'}
                            `}>
                                <h3 className="font-semibold text-zinc-100">{item.company}</h3>
                                <p className={`text-sm font-medium mt-1 ${colors.text}`}>{item.role}</p>
                                <p className={`
                                    text-sm text-zinc-400 overflow-hidden transition-all duration-300
                                    ${isActive ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                                `}>
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