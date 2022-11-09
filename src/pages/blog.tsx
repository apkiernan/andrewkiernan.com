import React from 'react';
import Image from 'next/image';

import { Link } from '$components/Link';
import { Layout } from '$components/Layout';
import { getAllPosts } from '$lib/api';
import styles from '$styles/blog.module.css';

type BlogProps = {
	headshot: {
		url: string;
	};
	posts: {
		title: string;
		content: string;
		slug: string;
		coverPhoto: {
			url: string;
			height: number;
			width: number;
			blur: string;
		};
	}[];
};

const Blog = (props: BlogProps) => (
	<Layout
		title="A Boston based web developer specializing in performant web applications"
		imageUrl={props.headshot.url}
	>
		{props.posts.map(bp => (
			<div className={styles.grid} key={bp.slug}>
				<Image
					className={styles.img}
					layout="responsive"
					src={bp.coverPhoto.url}
					height={bp.coverPhoto.height}
					width={bp.coverPhoto.width}
					blurDataURL={bp.coverPhoto.blur}
					placeholder="blur"
				/>
				<div>
					<Link to={`/${bp.slug}`}>
						<p>{bp.title}</p>
					</Link>
				</div>
			</div>
		))}
	</Layout>
);

export default Blog;

export async function getServerSideProps() {
	const { headshot, posts } = await getAllPosts();

	return {
		props: {
			headshot,
			posts
		}
	};
}
