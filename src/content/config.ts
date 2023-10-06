// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const environmentCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			image: z.object({
				url: image()
			}),
			text: z.string(),
			addInfo: z.string().optional()
		})
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	environments: environmentCollection
};
