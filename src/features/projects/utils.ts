import { useTranslations } from "@/shared/i18n/utils";
import { getProject } from "./config";
import type { Lang } from "@/shared/i18n/ui";

export function getProjectPageData(slug: string, lang: Lang) {
    const config = getProject(slug);
    if (!config) return null;

    const t = useTranslations(lang);

    const title = t(`project.${slug}.title` as any);
    const summary = t(`project.${slug}.summary` as any);

    const highlights: string[] = [];
    for (let i = 0; i < 10; i++) {
        const key = `project.${slug}.highlight.${i}` as any;
        const text = t(key);
        if (!text || text === key) break;
        highlights.push(text);
    }

    const metrics = config.metrics?.map((m) => ({
        value: m.value,
        label: t(`project.${slug}.metric.${m.id}.label` as any),
        sub: t(`project.${slug}.metric.${m.id}.sub` as any),
    }));

    return {
        config,
        title,
        summary,
        highlights,
        metrics,
    };
}