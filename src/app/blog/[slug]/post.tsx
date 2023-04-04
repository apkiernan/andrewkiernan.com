'use client';

import { FC } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import styles from './blog-post.module.css';
import { CoverPhoto } from '$components/CoverPhoto';

type Props = {
	post: {
		title: string;
		content: string;
		coverPhoto: {
			url: string;
			height: number;
			width: number;
			blur: string;
		};
	};
};

export const Post: FC<Props> = props => {
	return (
		<>
			<h1>{props.post.title}</h1>
			<div className={styles.coverPhotoWrapper}>
				<CoverPhoto
					image={props.post.coverPhoto.url}
					height={(props.post.coverPhoto.width * 9) / 16}
					width={props.post.coverPhoto.width}
					blur={props.post.coverPhoto.blur}
				/>
			</div>
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
				{props.post.content}
			</Markdown>
		</>
	);
};
