import { transformImage } from '$lib/transformImage';
import type { PageServerLoad } from './$types';

export type GlobResult = {
	default: { render: () => { html: string } };
	metadata: {
		title: string;
		description: string;
		date_posted: string;
		published: boolean;
		slug: string;
		cover_photo: string;
	};
};

export const load: PageServerLoad = async ({ fetch }) => {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true }) as Record<string, GlobResult>;

	const posts = [];

	for (const mod of Object.values(paths)) {
		if (mod.metadata.published) {
			const imgResponse = await fetch(mod.metadata.cover_photo);
			const buffer = await imgResponse.arrayBuffer();
			const { blur } = await transformImage(Buffer.from(buffer));
			posts.push({ ...mod.metadata, cover_photo: { url: mod.metadata.cover_photo, blur } });
		}
	}

	return {
		posts
	};
};
