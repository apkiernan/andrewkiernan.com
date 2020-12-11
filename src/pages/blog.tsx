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
    posts: {
      edges: {
        node: {
          title: string;
          slug: string;
          coverPhoto: {
            fluid: FluidObject;
          };
        };
      }[];
    };
  };
};

const Blog = (props: BlogProps) => {
  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl=""
    >
      {props.data.posts.edges.map(bp => (
        <Grid key={bp.node.slug}>
          <Img fluid={bp.node.coverPhoto.fluid} />
          <div>
            <Link to={`/${bp.node.slug}`}>
              <p>{bp.node.title}</p>
            </Link>
          </div>
        </Grid>
      ))}
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogPosts {
    posts: allContentfulBlogPost {
      edges {
        node {
          title
          slug
          coverPhoto {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;