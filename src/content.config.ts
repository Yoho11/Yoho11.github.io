import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			tech: z.array(z.string()),
			links: z
				.object({
					appStore: z.string().url().optional(),
					playStore: z.string().url().optional(),
					github: z.string().url().optional(),
					demo: z.string().url().optional(),
					video: z.string().url().optional(),
				})
				.optional(),
			cover: image().optional(),
			order: z.number().optional(),
		}),
});

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			tags: z.array(z.string()),
			cover: image().optional(),
			excerpt: z.string().optional(),
		}),
});

export const collections = { projects, posts };
