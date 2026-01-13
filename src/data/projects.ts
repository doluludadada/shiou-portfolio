// src/data/projects.ts

export interface ProjectMetricData {
    id: string;  
    value: string;
}

export interface ProjectDetail {
    tech: string[];
    highlights: string[]; 
    hasArchitecture?: boolean;
    metrics?: ProjectMetricData[];
    repoUrl?: string;
    comingSoon?: boolean;
}

export const projectsData: Record<string, ProjectDetail> = {
    datacontrol: {
        tech: [
            "Python 3.13", "FastAPI", "React 18", "TypeScript",
            "PostgreSQL", "Docker", "GitLab CI/CD", "APScheduler"
        ],
        highlights: ["highlight1", "highlight2", "highlight3", "highlight4"],
        hasArchitecture: true,
        metrics: [
            { id: "perf", value: "95%" },
            { id: "proc", value: "10 min" },
        ],
    },
    authhub: {
        tech: [
            "Python 3.13", "FastAPI", "React 19", "TypeScript",
            "PostgreSQL", "Redis", "JWT (RS256/HS256)", "Argon2"
        ],
        highlights: ["highlight1", "highlight2", "highlight3", "highlight4"],
        hasArchitecture: true,
        metrics: [
            { id: "apps", value: "7" },
        ],
    },
    pbill: {
        tech: ["Python", "Docker", "SQLite", "Mandrill API", "FastAPI"],
        highlights: ["highlight1", "highlight2", "highlight3", "highlight4"],
    },
    gate: {
        tech: ["C#", ".NET", "JavaScript", "PostgreSQL", "Clean Architecture"],
        highlights: ["highlight1", "highlight2", "highlight3"],
    },
    staff: {
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Zustand", "TanStack Query"],
        highlights: ["highlight1", "highlight2", "highlight3"],
    },
    marketing: {
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "pandas", "openpyxl"],
        highlights: ["highlight1", "highlight2", "highlight3"],
    },
    abacus: {
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "InterBase"],
        highlights: ["highlight1", "highlight2"],
    },
    dayu: {
        tech: ["Python", "FastAPI", "React", "Astro", "TypeScript", "PostgreSQL", "Docker", "Caddy", "AWS EC2"],
        highlights: ["highlight1", "highlight2", "highlight3", "highlight4"],
        comingSoon: true,
    },
    llmgateway: {
        tech: ["Python", "FastAPI", "Redis", "LINE Messaging API", "OpenAI API", "xAI Grok"],
        highlights: ["highlight1", "highlight2", "highlight3"],
        repoUrl: "https://github.com/doluludadada/chat_friend",
    },
};