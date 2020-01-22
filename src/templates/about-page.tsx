import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

type PageContentProps = {
  className: string;
  content: string;
};

type AboutPageTemplateProps = {
  title: string;
  content?: string;
  contentComponent: (p: PageContentProps) => ReactElement;
};

export const AboutPageTemplate = ({ title, content, contentComponent }: AboutPageTemplateProps) => {
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

type AboutPageProps = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
};

const AboutPage = ({ data }: AboutPageProps) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
