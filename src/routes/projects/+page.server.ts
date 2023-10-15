import type { PageServerLoad } from './$types';
import { transformImage } from '$lib/transformImage';
import type { GlobResult } from '../blog/+page.server';

export const load: PageServerLoad = async ({ fetch }) => {
	const paths = import.meta.glob('/src/projects/*.md', { eager: true }) as Record<
		string,
		GlobResult
	>;

	const projects = [];

	for (const path in paths) {
		const proj = paths[path];

		const imgResponse = await fetch(proj.metadata.cover_photo);
		const buffer = await imgResponse.arrayBuffer();
		const { blur } = await transformImage(Buffer.from(buffer));
		projects.push({
			content: proj.default.render().html,
			photos: [{ url: proj.metadata.cover_photo, blur }],
			title: proj.metadata.title,
			slug: proj.metadata.slug
		});
	}
	return {
		projects
	};
};
