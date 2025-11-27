import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		githubLink: z.string().url(),
		docsLink: z.string().url().optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
};
