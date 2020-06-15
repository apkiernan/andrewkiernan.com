import React from 'react';
import Markdown from 'react-markdown';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import Image, { GatsbyImageProps } from 'gatsby-image';
import { CodeBlock } from '../components/CodeBlock';
import { Content } from '../components/Content';

type Props = {
  data: {
    strapiBlogPost: {
      title: string;
      content: string;
      coverPhoto: {
        childImageSharp: {
          fluid: GatsbyImageProps['fluid'];
        };
      };
    };
  };
};

const BlogPost = (props: Props) => {
  return (
    <Layout>
      <h1>{props.data.strapiBlogPost.title}</h1>
      <Image
        style={{ maxHeight: '450px' }}
        fluid={props.data.strapiBlogPost.coverPhoto.childImageSharp.fluid}
      />
      <Content content={props.data.strapiBlogPost.content} />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPost($slug: String) {
    strapiBlogPost(slug: { eq: $slug }) {
      title
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
