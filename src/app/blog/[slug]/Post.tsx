'use client';

import { FC } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
	);
};
