import { Metadata } from 'next';

import { transformImage } from '$lib/transformImage';
import { Post } from './Post';
import { getClient } from '$lib/contentful';
import styles from './blog-post.module.css';
import { CoverPhoto } from '$components/CoverPhoto';
import { getAllPosts } from '$lib/api';

export async function generateMetadata({ params }): Promise<Metadata> {
	const slug = params.slug as string;
	return {
		title: slug.replace('-', ' ')
	};
}

export async function generateStaticParams() {
	const { posts } = await getAllPosts();

	return posts.map(post => ({
		slug: post.slug
	}));
}

export default async ({ params }) => {
	const { post } = await getData(params);

	return (
		<>
			<h1>{post.title}</h1>
			<div className={styles.coverPhotoWrapper}>
				<CoverPhoto
					image={post.coverPhoto.url}
					height={post.coverPhoto.height}
					width={post.coverPhoto.width}
					blur={post.coverPhoto.blur}
				/>
			</div>
			<Post post={post} />
		</>
	);
};

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

type Params = {
	slug: string;
};

async function getData(params: Params) {
	const client = getClient();
	const { items } = await client.getEntries<ContentfulBlogPost>({
		content_type: 'blogPost',
		'fields.slug': params.slug
	});

	const [entry] = items;

	const photo = {
		url: `https:${entry.fields.coverPhoto.fields.file.url}?fm=webp`,
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
