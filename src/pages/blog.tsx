import React from 'react';
import { Link, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';

import { Layout } from '../components/Layout';

const Grid = styled.div`
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 35% 65%;
    grid-gap: 2rem;
  }
`;

const Img = styled(Image)`
  height: auto;
  max-height: 25vh;
  width: 100%;

  @media screen and (min-width: 700px) {
    max-height: unset;
  }
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
    <Layout title="A Boston based web developer specializing in performant web applications">
      {props.data.allStrapiBlogPost.edges.map(bp => (
        <Grid key={bp.node.slug}>
          <Img fluid={bp.node.coverPhoto.childImageSharp.fluid} />
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
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
