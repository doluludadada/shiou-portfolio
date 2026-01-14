export interface TimelineItemConfig {
    id: string;
    year: string;
    icon: string;
    color: string;
    current?: boolean;
}

// Single source of truth for timeline structure
export const timelineConfig: TimelineItemConfig[] = [
    { id: "aidc", year: "2019-2020", icon: "✈️", color: "orange" },
    { id: "stgiles", year: "2021", icon: "📚", color: "blue" },
    { id: "glasgow", year: "2022-2024", icon: "🎓", color: "purple" },
    { id: "itri", year: "Jan-Mar 2025", icon: "💼", color: "green" },
    { id: "acc", year: "Mar 2025-", icon: "🚀", color: "cyan", current: true },
];