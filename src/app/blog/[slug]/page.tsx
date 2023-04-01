import { fetchGraphQL } from '$lib/api';
import { transformImage } from '$lib/transformImage';
import { Post } from './post';

const BlogPost = async ({ params }) => {
	const { post } = await getData(params);

	return <Post post={post} />;
};

export default BlogPost;

async function getData(params) {
	const { data } = await fetchGraphQL(`
		query {
			post: blogPostCollection(where: { slug: "${params.slug}" }) {
				items {
					title
					content 
					coverPhoto {
						url
						height
						width
					}
				}

			}
		}
	`);
	const [post] = data.post.items;
	const image = await transformImage(post.coverPhoto);
	return {
		post: {
			...post,
			coverPhoto: image
		}
	};
}
