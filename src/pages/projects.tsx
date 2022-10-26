import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { Layout } from '$components/Layout';
import { fetchGraphQL } from '$lib/api';
import { getPlaiceholder } from 'plaiceholder';

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
	photo: {
		url: string;
		height: number;
		width: number;
		blur: string;
	};
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
	photosCollection: {
		url: string;
		height: number;
		width: number;
		blur: string;
	}[];
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
					photo={node.photosCollection[0]}
				/>
			))}
		</Layout>
	);
};

export const Project = ({ title, featureBullets, photo }: ProjectProps) => (
	<Section>
		<div>
			<h1>{title}</h1>
			<Grid>
				<ProjectImage
					src={photo.url}
					height={photo.height}
					width={photo.width}
					layout="responsive"
					blurDataURL={photo.blur}
					placeholder="blur"
					alt={`cover photo for ${title}`}
					priority
				/>
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

	const projects = await Promise.all(
		items.map(async item => {
			const photosCollection = await Promise.all(
				item.photosCollection.items.map(async pc => {
					const { img, base64 } = await getPlaiceholder(pc.url, { size: 10 });
					return {
						...pc,
						url: img,
						blur: base64
					};
				})
			);
			return {
				...item,
				photosCollection
			};
		})
	);
	console.log(JSON.stringify(projects, null, 2));
	return {
		props: {
			projects,
			headshot
		}
	};
}
