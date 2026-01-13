export interface ProjectMetricData {
    id: string;
    value: string;
}

export interface ProjectConfig {
    id: string;
    tech: string[];
    hasArchitecture?: boolean;
    metrics?: ProjectMetricData[];
    repoUrl?: string;
    comingSoon?: boolean;
    featured?: boolean;
    highlightCount: number; // Used to fetch highlight.0, highlight.1, etc.
}

export const projectsConfig: ProjectConfig[] = [
    {
        id: "datacontrol",
        featured: true,
        tech: ["Python 3.13", "FastAPI", "React 18", "TypeScript", "PostgreSQL", "Docker", "GitLab CI/CD"],
        hasArchitecture: true,
        metrics: [
            { id: "perf", value: "95%" },
            { id: "proc", value: "10 min" },
        ],
        highlightCount: 4
    },
    {
        id: "authhub",
        featured: true,
        tech: ["Python 3.13", "FastAPI", "React 19", "TypeScript", "PostgreSQL", "Redis", "JWT"],
        hasArchitecture: true,
        metrics: [
            { id: "apps", value: "7" },
        ],
        highlightCount: 4
    },
    {
        id: "dayu",
        featured: false, // Not in main 3 grid, but has page
        tech: ["Python", "FastAPI", "React", "Astro", "TypeScript", "PostgreSQL", "Docker", "AWS EC2"],
        comingSoon: true,
        highlightCount: 3
    },
    {
        id: "pbill",
        featured: false,
        tech: ["Python", "Docker", "SQLite", "Mandrill API", "FastAPI"],
        highlightCount: 3
    },
    {
        id: "gate",
        featured: false,
        tech: ["C#", ".NET", "JavaScript", "PostgreSQL", "Clean Architecture"],
        highlightCount: 3
    },
    {
        id: "staff",
        featured: false,
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Zustand"],
        highlightCount: 3
    },
    {
        id: "marketing",
        featured: false,
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "pandas"],
        highlightCount: 3
    },
    {
        id: "abacus",
        featured: false,
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "InterBase"],
        highlightCount: 2
    },
    {
        id: "llmgateway",
        featured: false,
        tech: ["Python", "FastAPI", "Redis", "LINE Messaging API", "OpenAI API", "xAI Grok"],
        repoUrl: "https://github.com/doluludadada/chat_friend",
        highlightCount: 3
    },
];

export const getProject = (id: string) => projectsConfig.find(p => p.id === id);