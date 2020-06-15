import React from "react";
import { graphql, Link } from "gatsby";

import { Content } from "../components/Content";
import { Layout } from "../components/Layout";

type ProjectProps = {
  name: string;
  slug: string;
  featureBullets: string;
};

export const Project = ({ name, featureBullets, slug }: ProjectProps) => {
  return (
    <section className="section">
      <div className="container">
        <h1>
          <Link to={`/projects/${slug}`}>{name}</Link>
        </h1>
        <Content content={featureBullets} />
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
        }
      }
    }
  }
`;
