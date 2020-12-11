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
  photos: FluidObject;
};

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ProjectImage = styled(Image)`
  border-radius: 10px;
  max-height: 50vh;
`;

export const Project = ({ name, featureBullets, photos }: ProjectProps) => {
  return (
    <Section>
      <div>
        <h1>{name}</h1>
        <Grid>
          <ProjectImage fluid={photos} />
          <Content content={featureBullets} />
        </Grid>
      </div>
    </Section>
  );
};

type PortfolioPageProps = {
  data: {
    projects: {
      edges: {
        node: {
          name: string;
          slug: string;
          featureBullets: string;
          photos: {
            fluid: FluidObject;
          }[];
        };
      }[];
    };
  };
};

const PortfolioPage = (props: PortfolioPageProps) => {
  const { projects } = props.data;
  debugger;
  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl=""
    >
      {projects.edges.map(({ node }) => (
        <Project
          key={node.slug}
          name={node.name}
          slug={node.slug}
          featureBullets={node.featureBullets}
          photos={node.photos[0]?.fluid}
        />
      ))}
    </Layout>
  );
};

export default PortfolioPage;

export const PortfolioPageQuery = graphql`
  query PortfolioPage {
    projects: allContentfulProject(sort: { fields: updatedAt, order: DESC }) {
      edges {
        node {
          title
          slug
          featureBullets {
            raw
          }
          photos {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
