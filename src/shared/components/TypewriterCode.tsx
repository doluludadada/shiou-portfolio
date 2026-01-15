import { useState, useEffect, type JSX } from 'react';

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

// Tokenizer-based syntax highlighting to avoid regex conflicts
function highlightSyntax(text: string): JSX.Element[] {
    const keywords = new Set(['class', 'def', 'return', 'self']);
    const elements: JSX.Element[] = [];
    let i = 0;
    let key = 0;

    const pushToken = (content: string, className?: string) => {
        if (!content) return;
        elements.push(
            <span key={key++} className={className}>
                {content}
            </span>
        );
    };

    while (i < text.length) {
        // Match strings (double quotes)
        if (text[i] === '"') {
            const start = i;
            i++; // skip opening quote
            while (i < text.length && text[i] !== '"') {
                if (text[i] === '\\') i++; // skip escaped char
                i++;
            }
            i++; // skip closing quote
            pushToken(text.slice(start, i), 'syntax-string');
            continue;
        }

        // Match identifiers and keywords
        if (/[a-zA-Z_]/.test(text[i])) {
            const start = i;
            while (i < text.length && /[a-zA-Z0-9_]/.test(text[i])) {
                i++;
            }
            const word = text.slice(start, i);

            if (keywords.has(word)) {
                pushToken(word, 'syntax-keyword');
            } else if (word === 'Developer') {
                pushToken(word, 'syntax-class');
            } else if (word === 'build') {
                pushToken(word, 'syntax-function');
            } else if (word === 'legacy_system') {
                pushToken(word, 'syntax-param');
            } else if (word === 'modern_architecture') {
                pushToken(word, 'syntax-return');
            } else if (['name', 'role', 'location', 'skills'].includes(word)) {
                pushToken(word, 'syntax-property');
            } else {
                pushToken(word);
            }
            continue;
        }

        // Match numbers
        if (/[0-9]/.test(text[i])) {
            const start = i;
            while (i < text.length && /[0-9.]/.test(text[i])) {
                i++;
            }
            pushToken(text.slice(start, i), 'syntax-number');
            continue;
        }

        // Everything else (whitespace, operators, punctuation)
        pushToken(text[i]);
        i++;
    }

    return elements;
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
            {/* Syntax highlighting styles */}
            <style>{`
                .syntax-string { color: #fbbf24; }
                .syntax-keyword { color: #f472b6; }
                .syntax-class { color: var(--color-accent); }
                .syntax-function { color: #facc15; }
                .syntax-param { color: #fb923c; }
                .syntax-return { color: #4ade80; }
                .syntax-property { color: #60a5fa; }
                
                :root.light .syntax-string { color: #b45309; }
                :root.light .syntax-keyword { color: #be185d; }
                :root.light .syntax-function { color: #a16207; }
                :root.light .syntax-param { color: #c2410c; }
                :root.light .syntax-return { color: #15803d; }
                :root.light .syntax-property { color: #1d4ed8; }
            `}</style>

            <div
                className="rounded-xl border overflow-hidden theme-transition"
                style={{
                    backgroundColor: 'var(--code-bg)',
                    borderColor: 'var(--color-border)',
                    boxShadow: 'var(--shadow-lg)',
                }}
            >
                {/* Window Header */}
                <div
                    className="flex items-center gap-2 px-4 py-3 border-b theme-transition"
                    style={{
                        backgroundColor: 'var(--code-header)',
                        borderColor: 'var(--color-border)',
                    }}
                >
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239, 68, 68, 0.8)' }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(234, 179, 8, 0.8)' }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34, 197, 94, 0.8)' }}></div>
                    </div>
                    <span
                        className="ml-4 text-xs font-mono"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        about.py
                    </span>
                </div>

                {/* Code Content */}
                <div className="p-4 font-mono text-sm leading-relaxed min-h-80">
                    {displayedLines.map((line, index) => (
                        <div key={index} className="flex">
                            <span
                                className="w-8 text-right pr-4 select-none"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                {index + 1}
                            </span>
                            <span style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre' }}>
                                {line ? highlightSyntax(line) : '\u00A0'}
                            </span>
                            {index === currentLineIndex && isTyping && (
                                <span
                                    className="animate-pulse"
                                    style={{ color: 'var(--color-accent)' }}
                                >
                                    ▋
                                </span>
                            )}
                        </div>
                    ))}
                    {!isTyping && (
                        <div className="flex">
                            <span
                                className="w-8 text-right pr-4 select-none"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                {displayedLines.length + 1}
                            </span>
                            <span
                                className="animate-pulse"
                                style={{ color: 'var(--color-accent)' }}
                            >
                                ▋
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Glow Effect */}
            <div
                className="absolute -inset-4 rounded-2xl blur-2xl -z-10"
                style={{ background: 'var(--color-accent-glow)' }}
            ></div>
        </div>
    );
}