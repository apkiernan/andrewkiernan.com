'use client';

import { FC } from 'react';
import Image from 'next/image';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from './projects.module.css';

type Photo = {
	url: string;
	height: number;
	width: number;
	blur: string;
};

type Proj = {
	title: string;
	slug: string;
	featureBullets: string;
	photosCollection: Photo[];
};

type Props = {
	projects: Proj[];
};

export const ProjectList: FC<Props> = props => {
	return (
		<>
			{props.projects.map(node => (
				<Project
					key={node.slug}
					title={node.title}
					slug={node.slug}
					featureBullets={node.featureBullets}
					photo={node.photosCollection[0]}
				/>
			))}
		</>
	);
};

type ProjectProps = {
	title: string;
	slug: string;
	featureBullets: string;
	photo: Photo;
};

const Project = ({ title, featureBullets, photo }: ProjectProps) => {
	return (
		<section className={styles.section}>
			<div>
				<h1>{title}</h1>
				<div className={styles.grid}>
					<Image
						className={styles.image}
						src={photo.url}
						width={533}
						height={300}
						blurDataURL={photo.blur}
						placeholder="blur"
						alt={`Cover photo for ${title}`}
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
				</div>
			</div>
		</section>
	);
};
