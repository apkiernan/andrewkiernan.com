import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { transformImage } from '$lib/transformImage';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const { slug } = params;

		const post = await import(`../../../posts/${slug}.md`);

		const img = await transformImage(post.metadata.cover_photo);
		return {
			post: {
				title: post.metadata.title,
				description: post.metadata.description,
				date_posted: post.metadata.date_posted,
				slug: post.metadata.slug,
				content: post.default.render().html,
				coverPhoto: img
			}
		};
	} catch (err) {
		throw error(404, 'Post not found');
	}
};
