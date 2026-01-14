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
    },
    {
        id: "authhub",
        featured: true,
        tech: ["Python 3.13", "FastAPI", "React 19", "TypeScript", "PostgreSQL", "Redis", "JWT"],
        hasArchitecture: true,
        metrics: [
            { id: "apps", value: "7" },
        ],
    },
    {
        id: "dayu",
        featured: false, // Not in main 3 grid, but has page
        tech: ["Python", "FastAPI", "React", "Astro", "TypeScript", "PostgreSQL", "Docker", "AWS EC2"],
        comingSoon: true,
    },
    {
        id: "pbill",
        featured: false,
        tech: ["Python", "Docker", "SQLite", "Mandrill API", "FastAPI"],
    },
    {
        id: "gate",
        featured: false,
        tech: ["C#", ".NET", "JavaScript", "PostgreSQL", "Clean Architecture"],
    },
    {
        id: "staff",
        featured: false,
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Zustand"],
    },
    {
        id: "marketing",
        featured: false,
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "pandas"],
    },
    {
        id: "abacus",
        featured: false,
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "InterBase"],
    },
    {
        id: "llmgateway",
        featured: false,
        tech: ["Python", "FastAPI", "Redis", "LINE Messaging API", "OpenAI API", "xAI Grok"],
        repoUrl: "https://github.com/doluludadada/chat_friend",
    },
];

export const getProject = (id: string) => projectsConfig.find(p => p.id === id);