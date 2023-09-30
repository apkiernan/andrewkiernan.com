import { getClient } from '$lib/contentful';
import { transformImage } from '$lib/transformImage';
import { toPost } from '../toPost';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const client = getClient();

	const data = await client.getEntries({
		content_type: 'blogPost',
		'fields.slug': slug
	});

	const [item] = data.items;
	const post = toPost(item);
	const img = await transformImage(post.coverPhoto.url);

	return {
		post: {
			...post,
			coverPhoto: img
		}
	};
};
