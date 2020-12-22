import React from 'react';
import { graphql } from 'gatsby';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData
} from 'gatsby-source-contentful/rich-text';

import { Layout } from '../components/Layout';
import { FluidObject } from 'gatsby-image';
import { Content } from '../components/Content';
import { CoverPhoto } from '../components/CoverPhoto';

type Props = {
  data: {
    contentfulBlogPost: {
      title: string;
      content: {
        childMarkdownRemark: {
          rawMarkdownBody: string;
        };
      };
      photoCredit: RenderRichTextData<ContentfulRichTextGatsbyReference>;
      coverPhoto: {
        fluid: FluidObject;
      };
    };
  };
};

const BlogPost = (props: Props) => {
  const { contentfulBlogPost: post } = props.data;

  return (
    <Layout title={post.title} imageUrl={post.coverPhoto.fluid.src}>
      <h1>{post.title}</h1>
      <CoverPhoto image={post.coverPhoto.fluid} />
      <Content content={post.content.childMarkdownRemark.rawMarkdownBody} />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPost($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      coverPhoto {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
