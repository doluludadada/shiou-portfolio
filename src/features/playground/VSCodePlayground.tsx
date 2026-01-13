// src/features/playground/VSCodePlayground.tsx
import { useState, type JSX } from 'react';
import { playgroundFiles, playgroundCode, terminalContent, statusBar, type PlaygroundFile } from '../../i18n/playground';
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
  Info
} from 'lucide-react';

// Syntax highlighting helper
function highlightPython(code: string): JSX.Element[] {
  const lines = code.split('\n');
  
  return lines.map((line, lineIndex) => {
    // Tokenize each line
    const tokens: JSX.Element[] = [];
    let remaining = line;
    let key = 0;
    
    // Patterns for Python syntax
    const patterns: [RegExp, string][] = [
      // Comments
      [/^(#.*)/, 'vscode-comment'],
      // Triple-quoted strings
      [/^(""".*?"""|'''.*?''')/, 'vscode-string'],
      // Strings
      [/^(f?"[^"]*"|f?'[^']*')/, 'vscode-string'],
      // Keywords
      [/^(from|import|class|def|return|if|else|elif|for|while|try|except|finally|with|as|in|is|not|and|or|None|True|False|async|await|yield|lambda|pass|break|continue|raise|global|nonlocal)\b/, 'vscode-keyword'],
      // Decorators
      [/^(@\w+)/, 'vscode-function'],
      // Type hints and annotations
      [/^(str|int|float|bool|list|dict|tuple|set|Optional|Literal|TypeAlias|List|Dict|Tuple|Set)\b/, 'vscode-class'],
      // Function definitions
      [/^(\w+)(?=\s*\()/, 'vscode-function'],
      // Class names (after class keyword is handled separately)
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
    
    while (remaining.length > 0) {
      let matched = false;
      
      for (const [pattern, className] of patterns) {
        const match = remaining.match(pattern);
        if (match) {
          const text = match[1];
          if (className) {
            tokens.push(
              <span key={key++} className={className}>
                {text}
              </span>
            );
          } else {
            tokens.push(<span key={key++}>{text}</span>);
          }
          remaining = remaining.slice(text.length);
          matched = true;
          break;
        }
      }
      
      if (!matched) {
        // Fallback: consume one character
        tokens.push(<span key={key++}>{remaining[0]}</span>);
        remaining = remaining.slice(1);
      }
    }
    
    return (
      <div key={lineIndex} className="table-row">
        <span className="table-cell pr-4 text-right select-none vscode-text-muted w-12">
          {lineIndex + 1}
        </span>
        <span className="table-cell">
          {tokens.length > 0 ? tokens : '\u00A0'}
        </span>
      </div>
    );
  });
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
        group flex items-center gap-2 px-3 py-2 border-r vscode-border cursor-pointer
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
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    '$ whoami',
    terminalContent.commands.whoami,
    '$ skills --backend',
    terminalContent.commands['skills --backend'],
    '$ _'
  ]);

  const handleFileClick = (file: PlaygroundFile) => {
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
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
      <div className="flex items-center justify-between px-4 h-8 bg-[#323233] vscode-text text-xs select-none">
        <div className="flex items-center gap-4">
          <span className="font-semibold">YiShiou's Portfolio - VS Code</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-white/10 rounded">
            <Minus className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-white/10 rounded">
            <Square className="w-3.5 h-3.5" />
          </button>
          <a 
            href="/en"
            className="p-1 hover:bg-red-500 rounded"
            title="Exit to normal site"
          >
            <X className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 vscode-sidebar border-r vscode-border flex flex-col shrink-0">
          {/* Explorer Header */}
          <div className="px-4 py-2 text-xs uppercase tracking-wider vscode-text-muted">
            Explorer
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
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex bg-[#252526] border-b vscode-border overflow-x-auto">
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
          <div className="flex-1 overflow-auto vscode-bg p-4">
            {activeFile && (
              <pre className="table w-full">
                {highlightPython(getFileContent(activeFile))}
              </pre>
            )}
          </div>

          {/* Terminal Panel */}
          {terminalOpen && (
            <div className="h-48 border-t vscode-border flex flex-col shrink-0">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-1 bg-[#252526] border-b vscode-border">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1 text-xs vscode-text">
                    <TerminalIcon className="w-4 h-4" />
                    Terminal
                  </button>
                  <button className="flex items-center gap-1 text-xs vscode-text-muted hover:vscode-text">
                    <AlertCircle className="w-4 h-4" />
                    Problems
                  </button>
                  <button className="flex items-center gap-1 text-xs vscode-text-muted hover:vscode-text">
                    <Info className="w-4 h-4" />
                    Output
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
              <div className="flex-1 p-2 overflow-y-auto vscode-bg font-mono text-sm">
                {terminalHistory.map((line, i) => (
                  <div key={i} className={line.startsWith('$') ? 'text-green-400' : 'vscode-text'}>
                    {line === '$ _' ? (
                      <span className="flex items-center">
                        <span className="text-green-400">$ </span>
                        <input
                          type="text"
                          value={terminalInput}
                          onChange={(e) => setTerminalInput(e.target.value)}
                          onKeyDown={handleTerminalSubmit}
                          className="flex-1 bg-transparent outline-none vscode-text"
                          autoFocus
                        />
                        <span className="animate-blink">▋</span>
                      </span>
                    ) : (
                      <span style={{ whiteSpace: 'pre-wrap' }}>{line}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] flex items-center justify-between px-2 text-xs text-white select-none shrink-0">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <GitBranch className="w-3.5 h-3.5" />
            {statusBar.branch}
          </span>
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5" />
            0 Problems
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>{statusBar.encoding}</span>
          <span>{statusBar.language}</span>
          <span>{statusBar.position}</span>
          <a 
            href="https://github.com/doluludadada" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:bg-white/20 px-1 rounded"
          >
            GitHub
          </a>
          <Bell className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
