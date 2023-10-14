import type { PageServerLoad } from './$types';

export type GlobResult = {
	default: unknown;
	metadata: {
		title: string;
		description: string;
		date_posted: string;
		published: boolean;
		slug: string;
		cover_photo: string;
	};
};

export const load: PageServerLoad = async () => {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true }) as Record<string, GlobResult>;

	const posts = Object.values(paths).reduce((posts, mod) => {
		if (!mod.metadata.published) return posts;

		posts.push(mod.metadata);
		return posts;
	}, [] as GlobResult['metadata'][]);

	return {
		posts
	};
};
