import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Helmet from 'react-helmet';

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
};

export const IndexPageTemplate = ({ image, heading, description }: Props) => (
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
        <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
        <p>{description}</p>
      </div>
    </section>
  </div>
);

type PageProps = {
  data: {
    markdownRemark: {
      frontmatter: any;
    }
  }
};

const IndexPage = ({ data }: PageProps) => {
  const { frontmatter } = data.markdownRemark;

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
