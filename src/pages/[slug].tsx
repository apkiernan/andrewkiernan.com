import React from 'react';
import { Layout } from '../components/Layout';
import { Content } from '../components/Content';
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
      <Content content={post.content} />
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
  console.log(data);
  return {
    props: {
      post: data.post.items[0]
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
