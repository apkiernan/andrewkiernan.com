import React from 'react';
import { graphql } from 'gatsby';

import { HTMLContent } from '../components/Content';
import { Layout } from '../components/Layout';

type ProjectProps = {
  name: string;
  description?: string;
};

export const Project = ({ name, description }: ProjectProps) => {
  return (
    <section className="section">
      <div className="container">
        <h1>{name}</h1>
        <HTMLContent content={description} />
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
          description: string;
        };
      }[];
    };
  };
};

const PortfolioPage = ({ data }: PortfolioPageProps) => {
  const { allStrapiProject } = data;

  return (
    <Layout>
      {allStrapiProject.edges.map(({ node }) => (
        <Project name={node.name} description={node.description} />
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
          description
        }
      }
    }
  }
`;
