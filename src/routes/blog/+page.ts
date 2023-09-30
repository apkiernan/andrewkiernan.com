import { getClient } from '$lib/contentful';
import type { PageLoad } from './$types';
import { toPost } from './toPost';

export const load: PageLoad = async () => {
	const client = getClient();

	const data = await client.getEntries({ content_type: 'blogPost' });

	return {
		posts: data.items.map(toPost)
	};
};
