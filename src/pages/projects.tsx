import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { Layout } from '$components/Layout';
import { fetchGraphQL } from '$lib/api';

const Grid = styled.div`
	@media screen and (min-width: 625px) {
		display: grid;
		grid-template-columns: 40% 60%;
	}
`;

type ProjectProps = {
	title: string;
	slug: string;
	featureBullets: string;
	photoUrl: string;
	photoHeight: number;
	photoWidth: number;
};

const Section = styled.section`
	margin-bottom: 2rem;
`;

const ProjectImage = styled(Image)`
	border-radius: 10px;
	max-height: 50vh;
`;

type ProjectDescription = {
	title: string;
	slug: string;
	featureBullets: string;
	photosCollection: { items: { url: string; height: number; width: number }[] };
};

type PortfolioPageProps = {
	headshot: { url: string };
	projects: ProjectDescription[];
};

const PortfolioPage = (props: PortfolioPageProps) => {
	const { projects, headshot } = props;

	return (
		<Layout
			title="A Boston based web developer specializing in performant web applications"
			imageUrl={headshot.url}
		>
			{projects.map(node => (
				<Project
					key={node.slug}
					title={node.title}
					slug={node.slug}
					featureBullets={node.featureBullets}
					photoUrl={node.photosCollection.items[0].url}
					photoHeight={node.photosCollection.items[0].height}
					photoWidth={node.photosCollection.items[0].width}
				/>
			))}
		</Layout>
	);
};

export const Project = ({
	title,
	featureBullets,
	photoUrl,
	photoHeight,
	photoWidth
}: ProjectProps) => (
	<Section>
		<div>
			<h1>{title}</h1>
			<Grid>
				<ProjectImage src={photoUrl} height={photoHeight} width={photoWidth} />
				<Markdown
					components={{
						code({ node, inline, className, children, ...componentProps }) {
							const match = /language-(\w+)/.exec(className || '');
							return !inline && match ? (
								<SyntaxHighlighter
									style={dark}
									language={match[1]}
									PreTag="div"
									{...componentProps}
								>
									{String(children).replace(/\n$/, '')}
								</SyntaxHighlighter>
							) : (
								<code className={className} {...componentProps}>
									{children}
								</code>
							);
						}
					}}
				>
					{featureBullets}
				</Markdown>
			</Grid>
		</div>
	</Section>
);

export default PortfolioPage;

export async function getStaticProps() {
	const { data } = await fetchGraphQL(`
	query PortfolioPage {
		headshot: asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
			url
			height
			width
		}
		projects:projectCollection(order: title_ASC) {
			items {
				title
				slug
				featureBullets
				photosCollection {
					items {
						url
						height
						width
					}
				}
			}
		}
	}
`);
	const {
		projects: { items },
		headshot
	} = data;
	return {
		props: {
			projects: items,
			headshot
		}
	};
}
