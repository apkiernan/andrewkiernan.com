import React from 'react';

import { Layout } from '../components/Layout';
import { Link, graphql } from 'gatsby';

type BlogProps = {
  data: {
    allStrapiBlogPost: {
      edges: {
        node: {
          title: string;
          slug: string;
        };
      }[];
    };
  };
};

const Blog = (props: BlogProps) => {
  return (
    <Layout>
      {props.data.allStrapiBlogPost.edges.map(bp => (
        <div key={bp.node.slug}>
          <Link to={`/${bp.node.slug}`}>
            <h2>{bp.node.title}</h2>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogPosts {
    allStrapiBlogPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
