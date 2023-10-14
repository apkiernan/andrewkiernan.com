import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const { slug } = params;

		const post = await import(`../../../posts/${slug}.md`);

		return {
			post: {
				title: post.metadata.title,
				description: post.metadata.description,
				date_posted: post.metadata.date_posted,
				slug: post.metadata.slug,
				content: post.default,
				coverPhoto: post.metadata.cover_photo
			}
		};
	} catch (err) {
		throw error(404, 'Post not found');
	}
};
