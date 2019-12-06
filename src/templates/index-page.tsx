import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

type Img = {
  childImageSharp: {
    fluid: {
      src: string;
    }
  }
};

type Props = {
  image: Img | string;
  title: string;
  heading: string;
  subheading: string;
  description: string;
  html: string;
};

export const IndexPageTemplate = ({ image, heading, html }: Props) => (
  <div>
    <div
      className="full-width-image"
      style={{
        position: 'relative',
        backgroundImage: `url(${typeof image === 'string' ? image : image.childImageSharp.fluid.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    ></div>
    <section className="section section--gradient">      
      <div className="column is-12">
        <h1>{heading}</h1>
        <HTMLContent content={html} />
      </div>
    </section>
  </div>
);

type PageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        image: Img | string;
        title: string;
        heading: string;
        subheading: string;
        description: string;
      };
      html: string;
    }
  }
};

const IndexPage = ({ data }: PageProps) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <Helmet titleTemplate="Andrew Kiernan | %s">
        <title>{`${frontmatter.title}`}</title>
        <meta
          name="description"
          content={`${frontmatter.description}`}
        />
      </Helmet>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        html={html}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        description
      },
      html
    }
  }
`;
