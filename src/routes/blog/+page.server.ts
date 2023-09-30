import { getClient } from '$lib/contentful';
import type { PageServerLoad } from './$types';
import { toPost } from './toPost';

export const load: PageServerLoad = async () => {
	const client = getClient();

	const data = await client.getEntries({ content_type: 'blogPost' });

	return {
		posts: data.items.map(toPost)
	};
};
