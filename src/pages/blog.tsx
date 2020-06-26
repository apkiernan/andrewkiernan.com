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
    image: {
      coverPhoto: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
    posts: {
      edges: {
        node: {
          Title: string;
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
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl={props.data.image.coverPhoto.childImageSharp.fluid.src}
    >
      {props.data.posts.edges.map(bp => (
        <Grid key={bp.node.slug}>
          <Img fluid={bp.node.coverPhoto.childImageSharp.fluid} />
          <div>
            <Link to={`/${bp.node.slug}`}>
              <p>{bp.node.Title}</p>
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
    image: strapiAbout {
      coverPhoto {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    posts: allStrapiBlogPost {
      edges {
        node {
          Title
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
