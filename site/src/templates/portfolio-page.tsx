import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';

import { HTMLContent } from '../components/Content';
import { Layout } from '../components/Layout';
import { RemarkNode } from 'gatsby-tinacms-remark/src/remark-node';

type PortfolioPageTemplateProps = {
  title: string;
  content?: string;
};

export const PortfolioPageTemplate = ({ title, content }: PortfolioPageTemplateProps) => {
  return (
    <section className="section">
      <div className="container">
        <h1>{title}</h1>
        <HTMLContent content={content} />
      </div>
    </section>
  );
};

type PortfolioPageProps = {
  data: {
    markdownRemark: RemarkNode & { html: string };
  };
};

const PortfolioPage = ({ data }: PortfolioPageProps) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Helmet titleTemplate="Andrew Kiernan | %s">
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={`${post.frontmatter.description}`} />
      </Helmet>

      <PortfolioPageTemplate title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

const options = {
  fields: [
    {
      label: 'Title',
      name: 'frontmatter.title',
      description: 'The title of the page (Portfolio)',
      component: 'text'
    },
    {
      label: 'Description',
      name: 'frontmattter.description',
      component: 'text'
    },
    {
      label: 'Content',
      name: 'rawMarkdownBody',
      description: 'The main content of the page',
      component: 'markdown'
    }
  ]
};

export default remarkForm(PortfolioPage, options);

export const PortfolioPageQuery = graphql`
  query PortfolioPage {
    markdownRemark(frontmatter: { templateKey: { eq: "portfolio-page" } }) {
      ...TinaRemark
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
