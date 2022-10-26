import React from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getPlaiceholder } from 'plaiceholder';

import { Layout } from '$components/Layout';
import { CoverPhoto } from '$components/CoverPhoto';
import { fetchGraphQL, getAllPosts } from '$lib/api';

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

const BlogPost = (props: Props) => {
	const { post } = props;

	return (
		<Layout title={post.title} imageUrl={post.coverPhoto.url}>
			<h1>{post.title}</h1>
			<div style={{ marginBottom: '2rem' }}>
				<CoverPhoto
					image={post.coverPhoto.url}
					height={post.coverPhoto.height}
					width={post.coverPhoto.width}
					blur={post.coverPhoto.blur}
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
				{post.content}
			</Markdown>
		</Layout>
	);
};

export default BlogPost;

export async function getStaticProps({ params }): Promise<{ props: Props }> {
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
	const { img, base64 } = await getPlaiceholder(post.coverPhoto.url, {
		size: 10
	});
	return {
		props: {
			post: {
				...post,
				coverPhoto: {
					...post.coverPhoto,
					url: img,
					blur: base64
				}
			}
		}
	};
}

export async function getStaticPaths() {
	const { posts } = await getAllPosts();
	return {
		paths: posts.map(p => ({ params: { slug: p.slug } })),
		fallback: false
	};
}
