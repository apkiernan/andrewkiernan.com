import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

type Props = {
  title: string;
  heading: string;
  html: string;
  contentComponent: (p: any) => ReactElement;
};

export const IndexPageTemplate = ({ heading, html, contentComponent }: Props) => {
  const PageContent = contentComponent || Content;
  return (
    <section className="section">
      <div>
        <h1>{heading}</h1>
        <PageContent content={html} />
      </div>
    </section>
  );
};

type PageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        heading: string;
        description: string;
      };
      html: string;
    };
  };
};

const IndexPage = ({ data }: PageProps) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <Helmet titleTemplate="Andrew Kiernan | %s">
        <title>{`${frontmatter.title}`}</title>
        <meta name="description" content={`${frontmatter.description}`} />
      </Helmet>
      <IndexPageTemplate title={frontmatter.title} heading={frontmatter.heading} html={html} contentComponent={HTMLContent} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
  }
`;
