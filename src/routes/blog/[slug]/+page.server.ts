import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { transformImage } from '$lib/transformImage';

export const load: PageServerLoad = async ({ params, fetch }) => {
	try {
		const { slug } = params;

		const post = await import(`../../../posts/${slug}.md`);

		const imgRes = await fetch(post.metadata.cover_photo);
		const imgBuffer = await imgRes.arrayBuffer();

		const { blur } = await transformImage(Buffer.from(imgBuffer));
		return {
			post: {
				title: post.metadata.title,
				description: post.metadata.description,
				date_posted: post.metadata.date_posted,
				slug: post.metadata.slug,
				content: post.default.render().html,
				coverPhoto: { url: post.metadata.cover_photo, blur }
			}
		};
	} catch (err) {
		error(404, 'Post not found');
	}
};
