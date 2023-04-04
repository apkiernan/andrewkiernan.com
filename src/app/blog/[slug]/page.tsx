import { Metadata } from 'next';
import { fetchGraphQL } from '$lib/api';
import { transformImage } from '$lib/transformImage';
import { Post } from './post';

export async function generateMetadata({ params }): Promise<Metadata> {
	const slug = params.slug as string;
	return {
		title: slug.replace('-', ' ')
	};
}

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
