import React from 'react';
import { Layout } from '../components/Layout';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CoverPhoto } from '../components/CoverPhoto';
import { fetchGraphQL, getAllPosts } from '../lib/api';

type Props = {
  post: {
    title: string;
    content: string;
    coverPhoto: {
      url: string;
      height: number;
      width: number;
    };
  };
};

const BlogPost = (props: Props) => {
  const { post } = props;

  return (
    <Layout title={post.title} imageUrl={post.coverPhoto.url}>
      <h1>{post.title}</h1>
      <CoverPhoto
        image={post.coverPhoto.url}
        height={post.coverPhoto.height}
        width={post.coverPhoto.width}
      />
      <Markdown
        components={{
          code({ node, inline, className, children, ref, ...componentProps }) {
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

export async function getStaticProps({ params }) {
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
  return {
    props: {
      post
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
