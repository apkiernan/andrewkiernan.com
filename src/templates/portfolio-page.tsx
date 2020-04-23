import React, { ReactElement } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { RemarkForm } from 'gatsby-tinacms-remark';

import Content, { HTMLContent } from '../components/Content';
import { Layout } from '../components/Layout';
import { RemarkNode } from 'gatsby-tinacms-remark/src/remark-node';

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
      <RemarkForm
        remark={post}
        render={({ markdownRemark }) => (
          <PortfolioPageTemplate contentComponent={HTMLContent} title={markdownRemark.frontmatter.title} content={markdownRemark.html} />
        )}
      />
    </Layout>
  );
};

export default PortfolioPage;

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
