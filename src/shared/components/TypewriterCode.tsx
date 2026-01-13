import { useState, useEffect } from 'react';

const codeLines = [
    { text: 'class Developer:', delay: 0 },
    { text: '    name = "YiShiou"', delay: 100 },
    { text: '    role = "Software Engineer"', delay: 200 },
    { text: '    location = "Taipei"', delay: 300 },
    { text: '', delay: 400 },
    { text: '    skills = [', delay: 500 },
    { text: '        "Python",', delay: 600 },
    { text: '        "FastAPI",', delay: 700 },
    { text: '        "React",', delay: 800 },
    { text: '        "Clean Architecture",', delay: 900 },
    { text: '    ]', delay: 1000 },
    { text: '', delay: 1100 },
    { text: '    def build(self, legacy_system):', delay: 1200 },
    { text: '        return modern_architecture', delay: 1300 },
];

function highlightSyntax(text: string) {
    const keywords = ['class', 'def', 'return', 'self'];
    const stringRegex = /"[^"]*"/g;

    let result = text;
    result = result.replace(stringRegex, '<span class="text-amber-400">$&</span>');
    keywords.forEach(kw => {
        const regex = new RegExp(`\\b${kw}\\b`, 'g');
        result = result.replace(regex, `<span class="text-pink-400">${kw}</span>`);
    });
    result = result.replace(/Developer/g, '<span class="text-cyan-400">Developer</span>');
    result = result.replace(/build/g, '<span class="text-yellow-300">build</span>');
    result = result.replace(/legacy_system/g, '<span class="text-orange-300">legacy_system</span>');
    result = result.replace(/modern_architecture/g, '<span class="text-green-400">modern_architecture</span>');
    result = result.replace(/\b(name|role|location|skills)\b(?=\s*=)/g, '<span class="text-blue-300">$1</span>');

    return result;
}

export default function TypewriterCode() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (!isTyping) return;
        if (currentLineIndex >= codeLines.length) {
            setIsTyping(false);
            return;
        }

        const currentLine = codeLines[currentLineIndex].text;

        if (currentCharIndex <= currentLine.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines(prev => {
                    const newLines = [...prev];
                    newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex);
                    return newLines;
                });
                setCurrentCharIndex(prev => prev + 1);
            }, 30);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1);
                setCurrentCharIndex(0);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex, isTyping]);

    return (
        <div className="relative">
            <div className="rounded-xl border border-zinc-800 bg-[#1a1a1c] shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#252528] border-b border-zinc-800">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="ml-4 text-xs text-zinc-500 font-mono">about.py</span>
                </div>

                <div className="p-4 font-mono text-sm leading-relaxed min-h-[320px]">
                    {displayedLines.map((line, index) => (
                        <div key={index} className="flex">
                            <span className="w-8 text-right pr-4 text-zinc-600 select-none">
                                {index + 1}
                            </span>
                            <span
                                className="text-gray-300"
                                dangerouslySetInnerHTML={{ __html: highlightSyntax(line) || '&nbsp;' }}
                            />
                            {index === currentLineIndex && isTyping && (
                                <span className="animate-pulse text-cyan-400">▋</span>
                            )}
                        </div>
                    ))}
                    {!isTyping && (
                        <div className="flex">
                            <span className="w-8 text-right pr-4 text-zinc-600 select-none">
                                {displayedLines.length + 1}
                            </span>
                            <span className="animate-pulse text-cyan-400">▋</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="absolute -inset-4 bg-cyan-500/5 rounded-2xl blur-2xl -z-10"></div>
        </div>
    );
}