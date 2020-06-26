import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { FluidObject } from 'gatsby-image';
import { Content } from '../components/Content';
import { CoverPhoto } from '../components/CoverPhoto';

type Props = {
  data: {
    strapiBlogPost: {
      Title: string;
      content: string;
      coverPhoto: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
};

const BlogPost = (props: Props) => {
  const { strapiBlogPost: post } = props.data;

  return (
    <Layout
      title={post.Title}
      imageUrl={post.coverPhoto.childImageSharp.fluid.src}
    >
      <h1>{post.Title}</h1>
      <CoverPhoto image={post.coverPhoto.childImageSharp.fluid} />
      <Content content={post.content} />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPost($slug: String) {
    strapiBlogPost(slug: { eq: $slug }) {
      Title
      content
      coverPhoto {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;
