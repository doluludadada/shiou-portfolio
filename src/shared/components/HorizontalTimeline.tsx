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

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
    green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
};

export default function HorizontalTimeline({ items }: Props) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="relative overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {/* Connection line */}
            <div className="absolute top-[52px] left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

            <div className="flex gap-4 min-w-max">
                {items.map((item, index) => {
                    const colors = colorMap[item.color] || colorMap.cyan;
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={item.id}
                            className="relative flex flex-col items-center w-56 flex-shrink-0"
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            {/* Year */}
                            <span className="text-xs font-mono text-zinc-500 mb-3">{item.year}</span>

                            {/* Node */}
                            <div className={`
                relative w-8 h-8 rounded-full border-2 flex items-center justify-center z-10
                transition-all duration-300 cursor-pointer
                ${item.current ? 'bg-cyan-500 border-cyan-500' : `bg-zinc-900 ${colors.border}`}
                ${isActive ? 'scale-125' : ''}
              `}>
                                <span className="text-sm">{item.icon}</span>
                                {item.current && (
                                    <span className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-30" />
                                )}
                            </div>

                            {/* Card */}
                            <div className={`
                mt-4 p-4 rounded-xl border transition-all duration-300 w-full
                ${isActive ? `${colors.bg} ${colors.border}` : 'bg-zinc-900/50 border-zinc-800'}
              `}>
                                <h3 className="font-semibold text-zinc-100 text-sm">{item.company}</h3>
                                <p className={`text-xs font-medium mt-1 ${colors.text}`}>{item.role}</p>

                                <div className={`
                  overflow-hidden transition-all duration-300
                  ${isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                `}>
                                    <p className="text-xs text-zinc-400">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}