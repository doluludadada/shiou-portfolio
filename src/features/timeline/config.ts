export interface TimelineItemConfig {
    id: string;
    year: string;
    company: string; // Sometimes this is a proper noun, but can be i18n'd if needed
    icon: string;
    color: string;
    current?: boolean;
}

export const timelineConfig: Record<string, TimelineItemConfig[]> = {
    en: [
        { id: "aidc", year: "2019-2020", company: "AIDC", icon: "✈️", color: "orange" },
        { id: "stgiles", year: "2021", company: "St Giles", icon: "📚", color: "blue" },
        { id: "glasgow", year: "2022-2024", company: "U of Glasgow", icon: "🎓", color: "purple" },
        { id: "itri", year: "Jan-Mar 2025", company: "ITRI", icon: "💼", color: "green" },
        { id: "acc", year: "Mar 2025-", company: "American Club", icon: "🚀", color: "cyan", current: true },
    ],
    zh: [
        { id: "aidc", year: "2019-2020", company: "漢翔航空", icon: "✈️", color: "orange" },
        { id: "stgiles", year: "2021", company: "St Giles", icon: "📚", color: "blue" },
        { id: "glasgow", year: "2022-2024", company: "格拉斯哥大學", icon: "🎓", color: "purple" },
        { id: "itri", year: "2025年1-3月", company: "工研院", icon: "💼", color: "green" },
        { id: "acc", year: "2025年3月-", company: "台北美國俱樂部", icon: "🚀", color: "cyan", current: true },
    ]
};