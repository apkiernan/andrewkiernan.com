import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import { FluidObject } from 'gatsby-image';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`;

type ProjectProps = {
  name: string;
  slug: string;
  featureBullets: string;
  media: FluidObject;
};

export const Project = ({ name, featureBullets, media }: ProjectProps) => {
  return (
    <section className="section">
      <div className="container">
        <h1>{name}</h1>
        <Grid>
          <Image fluid={media} style={{ borderRadius: '10px' }} />
          <Content content={featureBullets} />
        </Grid>
      </div>
    </section>
  );
};

type PortfolioPageProps = {
  data: {
    allStrapiProject: {
      edges: {
        node: {
          name: string;
          slug: string;
          featureBullets: string;
          media: {
            childImageSharp: {
              fluid: FluidObject;
            };
          };
        };
      }[];
    };
  };
};

const PortfolioPage = (props: PortfolioPageProps) => {
  const { allStrapiProject } = props.data;

  return (
    <Layout>
      {allStrapiProject.edges.map(({ node }) => (
        <Project
          name={node.name}
          slug={node.slug}
          featureBullets={node.featureBullets}
          media={node.media.childImageSharp.fluid}
        />
      ))}
    </Layout>
  );
};

export default PortfolioPage;

export const PortfolioPageQuery = graphql`
  query PortfolioPage {
    allStrapiProject {
      edges {
        node {
          name
          slug
          featureBullets
          media {
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
