import { getClient } from '$lib/contentful';
import { transformImage } from '$lib/transformImage';
import { toPost } from '../toPost';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const client = getClient();

	const data = await client.getEntries({
		content_type: 'blogPost',
		'fields.slug': slug
	});

	const [item] = data.items;

	const post = toPost(item);

	try {
		const img = await transformImage(post.coverPhoto);

		return {
			post: {
				...post,
				coverPhoto: img
			}
		};
	} catch (err) {
		console.error(err);
		return {
			post: {}
		};
	}
};
