import { useState, type JSX, useEffect } from 'react';
import { playgroundFiles, playgroundCode, terminalContent, statusBar, type PlaygroundFile } from '../../shared/i18n/playground';
import {
    ChevronRight,
    ChevronDown,
    File,
    Folder,
    FolderOpen,
    X,
    Minus,
    Square,
    GitBranch,
    Bell,
    Check,
    Terminal as TerminalIcon,
    AlertCircle,
    Info,
    Menu // Added for mobile sidebar toggle
} from 'lucide-react';

// Improved parser that handles multi-line strings with prefixes (f-strings) correctly
function highlightPython(code: string): JSX.Element[] {
    const lines = code.split('\n');
    const elements: JSX.Element[] = [];

    // State to track if we are currently inside a multi-line string/docstring
    // Stores the closing sequence we are looking for (e.g., '"""' or "'''")
    let inMultiLineString: null | string = null;

    lines.forEach((line, lineIndex) => {
        const tokens: JSX.Element[] = [];
        let remaining = line;
        let key = 0;

        // Helper to push text
        const pushToken = (text: string, className?: string) => {
            if (!text) return;
            tokens.push(<span key={key++} className={className}>{text}</span>);
        };

        // 1. If inside a multi-line string, check if it ends on this line
        if (inMultiLineString) {
            const endIdx = remaining.indexOf(inMultiLineString);
            if (endIdx !== -1) {
                // Found end of multi-line string
                const content = remaining.slice(0, endIdx + 3); // +3 for the length of """ or '''
                pushToken(content, 'vscode-string');
                remaining = remaining.slice(endIdx + 3);
                inMultiLineString = null;
            } else {
                // Still inside multi-line string, consume whole line
                pushToken(remaining, 'vscode-string');
                remaining = '';
            }
        }

        // 2. Normal parsing loop (when not inside a multi-line string)
        while (remaining.length > 0 && !inMultiLineString) {

            // --- Special Case: Multi-line String Starters (including f-strings) ---
            // We must check this BEFORE checking for generic "vscode-string" regex
            // otherwise f""" might match 'f' as text and '"""' as string start separately.

            let multiLineQuoteType: string | null = null;
            let prefixLength = 0;

            // Check for f""", r""", """, etc.
            if (remaining.startsWith('"""')) { multiLineQuoteType = '"""'; prefixLength = 0; }
            else if (remaining.startsWith("'''")) { multiLineQuoteType = "'''"; prefixLength = 0; }
            else if (remaining.startsWith('f"""') || remaining.startsWith('r"""') || remaining.startsWith('u"""')) { multiLineQuoteType = '"""'; prefixLength = 1; }
            else if (remaining.startsWith("f'''") || remaining.startsWith("r'''") || remaining.startsWith("u'''")) { multiLineQuoteType = "'''"; prefixLength = 1; }

            if (multiLineQuoteType) {
                // Check if it closes on the same line
                // We look for the closer AFTER the opener
                const openerLength = prefixLength + 3;
                const closeIdx = remaining.indexOf(multiLineQuoteType, openerLength);

                if (closeIdx !== -1) {
                    // Closed on same line
                    pushToken(remaining.slice(0, closeIdx + 3), 'vscode-string');
                    remaining = remaining.slice(closeIdx + 3);
                } else {
                    // Open multi-line string state
                    pushToken(remaining, 'vscode-string');
                    inMultiLineString = multiLineQuoteType;
                    remaining = '';
                }
                continue;
            }

            // --- Comment (only if not inside string) ---
            if (remaining.startsWith('#')) {
                pushToken(remaining, 'vscode-comment');
                remaining = '';
                continue;
            }

            // --- Regex Patterns for other tokens ---
            const patterns: [RegExp, string][] = [
                // Single line strings (including f-strings)
                [/^(f|r|u)?"(?:[^"\\]|\\.)*"/, 'vscode-string'],
                [/^(f|r|u)?'(?:[^'\\]|\\.)*'/, 'vscode-string'],

                // Keywords
                [/^(from|import|class|def|return|if|else|elif|for|while|try|except|finally|with|as|in|is|not|and|or|None|True|False|async|await|yield|lambda|pass|break|continue|raise|global|nonlocal)\b/, 'vscode-keyword'],

                // Decorators
                [/^(@\w+)/, 'vscode-function'],

                // Type hints and annotations
                [/^(str|int|float|bool|list|dict|tuple|set|Optional|Literal|TypeAlias|List|Dict|Tuple|Set)\b/, 'vscode-class'],

                // Function definitions
                [/^(\w+)(?=\s*\()/, 'vscode-function'],

                // Class names (Capitals)
                [/^([A-Z]\w*)/, 'vscode-class'],

                // Numbers
                [/^(\d+\.?\d*)/, 'vscode-number'],

                // Operators and punctuation
                [/^([=+\-*/<>!&|^~%:,.\[\]{}()])/, 'vscode-text'],

                // Regular text/identifiers
                [/^(\w+)/, 'vscode-text'],

                // Whitespace
                [/^(\s+)/, ''],
            ];

            let matched = false;
            for (const [pattern, className] of patterns) {
                const match = remaining.match(pattern);
                if (match) {
                    const text = match[0]; // match[0] is the full match
                    pushToken(text, className);
                    remaining = remaining.slice(text.length);
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                // Fallback: consume one char to prevent infinite loop
                pushToken(remaining[0]);
                remaining = remaining.slice(1);
            }
        }

        elements.push(
            <div key={lineIndex} className="table-row">
                <span className="table-cell pr-4 text-right select-none vscode-text-muted w-8 md:w-12 text-[10px] md:text-sm pt-0.5 align-top">
                    {lineIndex + 1}
                </span>
                <span className="table-cell whitespace-pre-wrap break-all align-top">
                    {tokens.length > 0 ? tokens : '\u00A0'}
                </span>
            </div>
        );
    });

    return elements;
}

interface FileTreeItemProps {
    name: string;
    isFolder?: boolean;
    isOpen?: boolean;
    isActive?: boolean;
    level?: number;
    onClick?: () => void;
}

function FileTreeItem({ name, isFolder, isOpen, isActive, level = 0, onClick }: FileTreeItemProps) {
    const paddingLeft = level * 12 + 8;

    return (
        <button
            onClick={onClick}
            className={`
        w-full flex items-center gap-1.5 py-1 px-2 text-left text-sm
        transition-colors duration-100
        ${isActive ? 'vscode-active vscode-text' : 'vscode-text-muted hover:vscode-text hover:bg-white/5'}
      `}
            style={{ paddingLeft }}
        >
            {isFolder ? (
                <>
                    {isOpen ? (
                        <ChevronDown className="w-4 h-4 shrink-0" />
                    ) : (
                        <ChevronRight className="w-4 h-4 shrink-0" />
                    )}
                    {isOpen ? (
                        <FolderOpen className="w-4 h-4 shrink-0 text-yellow-500" />
                    ) : (
                        <Folder className="w-4 h-4 shrink-0 text-yellow-500" />
                    )}
                </>
            ) : (
                <>
                    <span className="w-4" />
                    <File className="w-4 h-4 shrink-0 text-blue-400" />
                </>
            )}
            <span className="truncate">{name}</span>
        </button>
    );
}

interface TabProps {
    name: string;
    isActive: boolean;
    onSelect: () => void;
    onClose: () => void;
}

function Tab({ name, isActive, onSelect, onClose }: TabProps) {
    return (
        <div
            className={`
        group flex items-center gap-2 px-3 py-2 border-r vscode-border cursor-pointer min-w-fit
        ${isActive ? 'vscode-bg vscode-text border-t-2 border-t-blue-500' : 'bg-[#2d2d2d] vscode-text-muted hover:vscode-text'}
      `}
            onClick={onSelect}
        >
            <File className="w-4 h-4 text-blue-400" />
            <span className="text-sm">{name}</span>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                className="opacity-0 group-hover:opacity-100 hover:bg-white/10 rounded p-0.5"
            >
                <X className="w-3 h-3" />
            </button>
        </div>
    );
}

export default function VSCodePlayground() {
    const [openFiles, setOpenFiles] = useState<PlaygroundFile[]>(['about.py']);
    const [activeFile, setActiveFile] = useState<PlaygroundFile>('about.py');
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [terminalOpen, setTerminalOpen] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true); // Control sidebar visibility
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalHistory, setTerminalHistory] = useState<string[]>([
        '$ whoami',
        terminalContent.commands.whoami,
        '$ skills --backend',
        terminalContent.commands['skills --backend'],
        '$ _'
    ]);

    // Auto-hide sidebar/terminal on mobile on initial load
    useEffect(() => {
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
            setTerminalOpen(false);
        }
    }, []);

    const handleFileClick = (file: PlaygroundFile) => {
        if (!openFiles.includes(file)) {
            setOpenFiles([...openFiles, file]);
        }
        setActiveFile(file);
        // On mobile, close sidebar after selecting a file
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };

    const handleCloseTab = (file: PlaygroundFile) => {
        const newOpenFiles = openFiles.filter(f => f !== file);
        setOpenFiles(newOpenFiles);
        if (activeFile === file && newOpenFiles.length > 0) {
            setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
        }
    };

    const handleTerminalSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && terminalInput.trim()) {
            const cmd = terminalInput.trim();
            const response = terminalContent.commands[cmd] || `Command not found: ${cmd}. Type 'help' for available commands.`;

            if (cmd === 'clear') {
                setTerminalHistory(['$ _']);
            } else {
                setTerminalHistory([
                    ...terminalHistory.slice(0, -1),
                    `$ ${cmd}`,
                    response,
                    '$ _'
                ]);
            }
            setTerminalInput('');
        }
    };

    const getFileContent = (file: PlaygroundFile): string => {
        const contentKey = playgroundFiles[file];
        return playgroundCode[contentKey] || '# File not found';
    };

    return (
        <div className="h-screen w-screen flex flex-col vscode-bg overflow-hidden font-mono text-sm">
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 h-10 md:h-8 bg-[#323233] vscode-text text-xs select-none shrink-0">
                <div className="flex items-center gap-3 md:gap-4">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-1 hover:bg-white/10 rounded"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <span className="font-semibold truncate">YiShiou's Portfolio - VS Code</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-white/10 rounded hidden md:block">
                        <Minus className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded hidden md:block">
                        <Square className="w-3.5 h-3.5" />
                    </button>
                    <a
                        href="/"
                        className="p-1 hover:bg-red-500 rounded"
                        title="Exit to normal site"
                    >
                        <X className="w-5 h-5 md:w-4 md:h-4" />
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden relative">
                {/* Sidebar */}
                <div className={`
            absolute md:static z-20 h-full
            w-64 md:w-56 vscode-sidebar border-r vscode-border flex flex-col shrink-0
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0 shadow-2xl md:shadow-none' : '-translate-x-full md:translate-x-0 md:flex'}
        `}>
                    {/* Explorer Header */}
                    <div className="px-4 py-2 text-xs uppercase tracking-wider vscode-text-muted flex justify-between items-center">
                        <span>Explorer</span>
                        <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* File Tree */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="py-1">
                            <FileTreeItem
                                name="portfolio"
                                isFolder
                                isOpen
                                level={0}
                            />

                            <FileTreeItem
                                name="about.py"
                                isActive={activeFile === 'about.py'}
                                level={1}
                                onClick={() => handleFileClick('about.py')}
                            />

                            <FileTreeItem
                                name="skills.py"
                                isActive={activeFile === 'skills.py'}
                                level={1}
                                onClick={() => handleFileClick('skills.py')}
                            />

                            <FileTreeItem
                                name="experience.py"
                                isActive={activeFile === 'experience.py'}
                                level={1}
                                onClick={() => handleFileClick('experience.py')}
                            />

                            <FileTreeItem
                                name="projects"
                                isFolder
                                isOpen={projectsOpen}
                                level={1}
                                onClick={() => setProjectsOpen(!projectsOpen)}
                            />

                            {projectsOpen && (
                                <>
                                    <FileTreeItem
                                        name="__init__.py"
                                        isActive={activeFile === 'projects/__init__.py'}
                                        level={2}
                                        onClick={() => handleFileClick('projects/__init__.py')}
                                    />
                                    <FileTreeItem
                                        name="data_control.py"
                                        isActive={activeFile === 'projects/data_control.py'}
                                        level={2}
                                        onClick={() => handleFileClick('projects/data_control.py')}
                                    />
                                    <FileTreeItem
                                        name="auth_hub.py"
                                        isActive={activeFile === 'projects/auth_hub.py'}
                                        level={2}
                                        onClick={() => handleFileClick('projects/auth_hub.py')}
                                    />
                                </>
                            )}

                            <FileTreeItem
                                name="contact.py"
                                isActive={activeFile === 'contact.py'}
                                level={1}
                                onClick={() => handleFileClick('contact.py')}
                            />
                        </div>
                    </div>
                </div>

                {/* Editor Area */}
                <div className="flex-1 flex flex-col overflow-hidden w-full">
                    {/* Tabs */}
                    <div className="flex bg-[#252526] border-b vscode-border overflow-x-auto scrollbar-hide">
                        {openFiles.map(file => (
                            <Tab
                                key={file}
                                name={file.split('/').pop() || file}
                                isActive={file === activeFile}
                                onSelect={() => setActiveFile(file)}
                                onClose={() => handleCloseTab(file)}
                            />
                        ))}
                    </div>

                    {/* Editor Content */}
                    <div className="flex-1 overflow-auto vscode-bg p-2 md:p-4" onClick={() => window.innerWidth < 768 && setSidebarOpen(false)}>
                        {activeFile && (
                            <div className="table w-full">
                                {highlightPython(getFileContent(activeFile))}
                            </div>
                        )}
                    </div>

                    {/* Terminal Panel */}
                    {terminalOpen && (
                        <div className="h-1/3 md:h-48 border-t vscode-border flex flex-col shrink-0 absolute bottom-0 w-full md:relative bg-[#1e1e1e] z-10 shadow-up md:shadow-none">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-1 bg-[#252526] border-b vscode-border select-none">
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-1 text-xs vscode-text uppercase">
                                        <TerminalIcon className="w-3 h-3 md:w-4 md:h-4" />
                                        Terminal
                                    </button>
                                    <button className="hidden md:flex items-center gap-1 text-xs vscode-text-muted hover:vscode-text">
                                        <AlertCircle className="w-4 h-4" />
                                        Problems
                                    </button>
                                </div>
                                <button
                                    onClick={() => setTerminalOpen(false)}
                                    className="p-1 hover:bg-white/10 rounded"
                                >
                                    <X className="w-4 h-4 vscode-text-muted" />
                                </button>
                            </div>

                            {/* Terminal Content */}
                            <div className="flex-1 p-2 overflow-y-auto vscode-bg font-mono text-xs md:text-sm pb-8 md:pb-2">
                                {terminalHistory.map((line, i) => (
                                    <div key={i} className={line.startsWith('$') ? 'text-green-400' : 'vscode-text'}>
                                        {line === '$ _' ? (
                                            <span className="flex items-center">
                                                <span className="text-green-400 mr-2">$</span>
                                                <input
                                                    type="text"
                                                    value={terminalInput}
                                                    onChange={(e) => setTerminalInput(e.target.value)}
                                                    onKeyDown={handleTerminalSubmit}
                                                    className="flex-1 bg-transparent outline-none vscode-text min-w-0"
                                                    autoFocus
                                                    autoCapitalize="none"
                                                />
                                            </span>
                                        ) : (
                                            <span style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{line}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Status Bar - Hide on small mobile to save space */}
            <div className="h-6 bg-[#007acc] hidden md:flex items-center justify-between px-2 text-xs text-white select-none shrink-0 z-30">
                <div className="flex items-center gap-3">
                    <button
                        className="flex items-center gap-1 hover:bg-white/20 px-1 rounded"
                        onClick={() => setTerminalOpen(!terminalOpen)}
                    >
                        <TerminalIcon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Toggle Terminal</span>
                    </button>
                    <span className="flex items-center gap-1">
                        <GitBranch className="w-3.5 h-3.5" />
                        {statusBar.branch}
                    </span>
                    <span className="hidden sm:flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        0 Problems
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="hidden sm:inline">{statusBar.encoding}</span>
                    <span>{statusBar.language}</span>
                    <span className="hidden sm:inline">{statusBar.position}</span>
                    <Bell className="w-3.5 h-3.5" />
                </div>
            </div>

            {/* Mobile Terminal Toggle Button (Floating) if Terminal is closed */}
            {!terminalOpen && (
                <button
                    onClick={() => setTerminalOpen(true)}
                    className="md:hidden absolute bottom-4 right-4 z-40 bg-[#007acc] text-white p-3 rounded-full shadow-lg"
                >
                    <TerminalIcon className="w-5 h-5" />
                </button>
            )}
        </div>
    );
}