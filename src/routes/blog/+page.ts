import type { PageLoad } from '../$types';
import { getAllPosts } from '$lib/api';

export const load: PageLoad = async ({ fetch }) => {
	const { posts } = await getAllPosts(fetch);

	return { posts };
};
