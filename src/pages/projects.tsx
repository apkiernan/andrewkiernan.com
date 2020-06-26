import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import { FluidObject } from 'gatsby-image';

const Grid = styled.div`
  @media screen and (min-width: 625px) {
    display: grid;
    grid-template-columns: 40% 60%;
  }
`;

type ProjectProps = {
  name: string;
  slug: string;
  featureBullets: string;
  media: FluidObject;
};

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ProjectImage = styled(Image)`
  border-radius: 10px;
  max-height: 50vh;
`;

export const Project = ({ name, featureBullets, media }: ProjectProps) => {
  return (
    <Section>
      <div>
        <h1>{name}</h1>
        <Grid>
          <ProjectImage fluid={media} />
          <Content content={featureBullets} />
        </Grid>
      </div>
    </Section>
  );
};

type PortfolioPageProps = {
  data: {
    image: {
      coverPhoto: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
    projects: {
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
  const { projects, image } = props.data;

  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl={image.coverPhoto.childImageSharp.fluid.src}
    >
      {projects.edges.map(({ node }) => (
        <Project
          key={node.slug}
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
    image: strapiAbout {
      coverPhoto {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    projects: allStrapiProject(sort: { fields: updated_at, order: DESC }) {
      edges {
        node {
          name
          slug
          featureBullets
          media {
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
