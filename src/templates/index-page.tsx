import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { useLocalRemarkForm } from 'gatsby-tinacms-remark';
import { RemarkNode } from 'gatsby-tinacms-remark/src/remark-node';

import { Layout } from '../components/Layout';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

type IRemarkNode = RemarkNode & { html: string };
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
    markdownRemark: any;
  };
};

const IndexPage = ({ data }: PageProps) => {
  const [remark] = useLocalRemarkForm(data.markdownRemark);
  return (
    <Layout>
      <Helmet titleTemplate="Andrew Kiernan | %s">
        <title>{`${remark.frontmatter.title}`}</title>
        <meta name="description" content={`${remark.frontmatter.description}`} />
      </Helmet>
      <IndexPageTemplate
        title={remark.frontmatter.title}
        heading={remark.frontmatter.heading}
        html={(remark as IRemarkNode).html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      ...TinaRemark
      frontmatter {
        title
        heading
        description
      }
      html
    }
  }
`;
