import { Metadata } from 'next';

import { fetchGraphQL } from '$lib/api';
import { transformImage } from '$lib/transformImage';
import { Post } from './post';
import { getClient } from '$lib/contentful';

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

type ContentfulBlogPost = {
	title: string;
	content: string;
	coverPhoto: ContentfulAsset;
};

type ContentfulAsset = {
	fields: {
		file: {
			url: string;
			details: {
				image: {
					height: number;
					width: number;
				};
			};
		};
	};
};

async function getData(params) {
	const client = getClient();
	const { items } = await client.getEntries<ContentfulBlogPost>({
		content_type: 'blogPost',
		'fields.slug': params.slug
	});

	const [entry] = items;

	const photo = {
		url: `https:${entry.fields.coverPhoto.fields.file.url}?fm=jpg&fl=progressive&w=936`,
		height: (936 * 9) / 16,
		width: 936 // max-width of content currently
	};

	const image = await transformImage(photo);

	return {
		post: {
			title: entry.fields.title,
			content: entry.fields.content,
			coverPhoto: image
		}
	};
}
