import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

type PageContentProps = {
  className: string;
  content: string;
};

type PortfolioPageTemplateProps = {
  title: string;
  content?: string;
  contentComponent: (p: PageContentProps) => ReactElement;
};

export const PortfolioPageTemplate = ({ title, content, contentComponent }: PortfolioPageTemplateProps) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <h1>{title}</h1>
        <PageContent className="content" content={content} />
      </div>
    </section>
  );
};

type PortfolioPageProps = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
};

const PortfolioPage = ({ data }: PortfolioPageProps) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PortfolioPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

export default PortfolioPage;

export const PortfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;