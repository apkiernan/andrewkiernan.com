import React from 'react';
import { Link, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';

import { Layout } from '../components/Layout';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  grid-gap: 2rem;
`;

type BlogProps = {
  data: {
    allStrapiBlogPost: {
      edges: {
        node: {
          title: string;
          slug: string;
          overview: string;
          coverPhoto: {
            childImageSharp: {
              fluid: FluidObject;
            };
          };
        };
      }[];
    };
  };
};

const Blog = (props: BlogProps) => {
  return (
    <Layout>
      {props.data.allStrapiBlogPost.edges.map(bp => (
        <Grid key={bp.node.slug}>
          <Image fluid={bp.node.coverPhoto.childImageSharp.fluid} />
          <div>
            <Link to={`/${bp.node.slug}`}>
              <p>{bp.node.title}</p>
            </Link>
            <p>{bp.node.overview}</p>
          </div>
        </Grid>
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
          overview
          coverPhoto {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
