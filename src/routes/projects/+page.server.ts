import type { PageServerLoad } from './$types';
import { transformImage } from '$lib/transformImage';
import type { GlobResult } from '../blog/+page.server';

export const load: PageServerLoad = async () => {
	const paths = import.meta.glob('/src/projects/*.md', { eager: true }) as Record<
		string,
		GlobResult
	>;

	const projects = [];

	for (const path in paths) {
		const proj = paths[path];

		const img = await transformImage(proj.metadata.cover_photo);
		projects.push({
			content: proj.default.render().html,
			photos: [img],
			title: proj.metadata.title,
			slug: proj.metadata.slug
		});
	}
	return {
		projects
	};
};
