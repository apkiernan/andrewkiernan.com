import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Link } from '$components/Link';
import { Layout } from '$components/Layout';
import { getAllPosts } from '$lib/api';

const Grid = styled.div`
	@media screen and (min-width: 700px) {
		display: grid;
		grid-template-columns: 35% 65%;
		grid-gap: 2rem;
	}
`;

const Img = styled(Image)`
	height: auto;
	max-height: 25vh;
	width: 100%;

	@media screen and (min-width: 700px) {
		max-height: unset;
	}
`;

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
			<Grid key={bp.slug}>
				<Img
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
			</Grid>
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
