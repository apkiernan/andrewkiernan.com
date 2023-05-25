import { getAllPosts } from '$lib/api';
import { BlogPost } from './BlogPost';

export default async () => {
	const { posts } = await getData();
	return (
		<>
			{posts.map(bp => (
				<BlogPost post={bp} key={bp.slug} />
			))}
		</>
	);
};

async function getData() {
	const { posts } = await getAllPosts();

	return {
		posts
	};
}
