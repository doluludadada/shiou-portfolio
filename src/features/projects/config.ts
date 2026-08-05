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
        tech: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker", "GitLab CI/CD"],
        hasArchitecture: true,
    },
    {
        id: "authhub",
        featured: false,
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "JWT"],
        hasArchitecture: true,
        metrics: [
            { id: "apps", value: "6" },
        ],
    },
    {
        id: "dayu",
        featured: false,
        tech: ["Python", "FastAPI", "React", "Astro", "TypeScript", "PostgreSQL", "Docker", "AWS EC2"],
        comingSoon: true,
    },
    {
        id: "pbill",
        featured: true,
        tech: ["Python", "FastAPI", "PostgreSQL", "AsyncIO", "Docker", "Mandrill API"],
        metrics: [
            { id: "perf", value: "95%" },
            { id: "proc", value: "10 min" },
        ],
    },
    {
        id: "gate",
        featured: false,
        tech: ["C#", ".NET", "JavaScript", "PostgreSQL"],
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
