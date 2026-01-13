import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        summary: z.string(), 
        tags: z.array(z.string()), // e.g. ["Python", "Clean Arch"]
        infrastructure: z.array(z.string()).optional(), // e.g. ["AWS", "Docker"]
        repoUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        priority: z.number().default(10), 
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    projects: projectsCollection,
};