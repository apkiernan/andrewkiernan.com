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
  title: string;
  slug: string;
  featureBullets: {
    childMarkdownRemark: {
      rawMarkdownBody: string;
    };
  };
  photos: FluidObject;
};

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ProjectImage = styled(Image)`
  border-radius: 10px;
  max-height: 50vh;
`;

export const Project = ({ title, featureBullets, photos }: ProjectProps) => {
  return (
    <Section>
      <div>
        <h1>{title}</h1>
        <Grid>
          <ProjectImage fluid={photos} />
          <Content content={featureBullets.childMarkdownRemark.rawMarkdownBody} />
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
          title: string;
          slug: string;
          featureBullets: {
            childMarkdownRemark: {
              rawMarkdownBody: string;
            };
          };
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

  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl=""
    >
      {projects.edges.map(({ node }) => (
        <Project
          key={node.slug}
          title={node.title}
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
            childMarkdownRemark {
              rawMarkdownBody
            }
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
