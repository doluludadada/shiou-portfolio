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
        id: "club",
        featured: true,
        tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "GitLab CI/CD"],
        metrics: [{ id: "billing", value: "3h → 10 min" }],
    },
    {
        id: "cafe",
        featured: true,
        tech: ["TypeScript", "React", "Vite", "Firebase Auth", "Firestore", "Playwright"],
    },
    {
        id: "stockagent",
        featured: true,
        tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "React", "TypeScript"],
        repoUrl: "https://github.com/doluludadada/stock-agent",
    },
    {
        id: "whereisthis",
        featured: true,
        tech: ["Swift 6", "SwiftUI", "MapKit", "GameKit"],
    },
    {
        id: "portal",
        tech: ["Python", "FastAPI", "React", "TypeScript", "Docker", "Caddy", "AWS EC2"],
    },
    {
        id: "duoary",
        tech: ["Python", "FastAPI", "PostgreSQL", "React Native", "React", "TypeScript"],
    },
    {
        id: "cheques",
        tech: ["TypeScript", "React", "Vite", "Firestore", "Vitest"],
    },
    {
        id: "dissertation",
        tech: ["Java", "LibGDX", "Box2D"],
        repoUrl: "https://github.com/doluludadada/Dissertation_TuringTumble_Java",
    },
];

export const getProject = (id: string) => projectsConfig.find(p => p.id === id);
