import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';

import { Layout } from '../components/Layout';
import { HTMLContent } from '../components/Content';

type Props = {
  title: string;
  html: string;
  image: GatsbyImageProps['fluid'];
};

export const IndexPageTemplate = ({ html, image }: Props) => {
  return (
    <section className="section">
      <Img fluid={image} />
      <HTMLContent content={html} />
    </section>
  );
};

type PageProps = {
  data: {
    strapiHome: {
      title: string;
      body: string;
      coverPhoto: {
        childImageSharp: {
          fluid: GatsbyImageProps['fluid'];
        };
      };
    };
  };
};

const IndexPage = ({ data }: PageProps) => (
  <Layout>
    <Helmet titleTemplate="Andrew Kiernan | %s">
      <title>{`${data.strapiHome.title}`}</title>
      <meta name="description" content={`${data.strapiHome.title}`} />
    </Helmet>
    <IndexPageTemplate title={data.strapiHome.title} html={data.strapiHome.body} image={data.strapiHome.coverPhoto.childImageSharp.fluid} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    strapiHome {
      title
      body
      coverPhoto {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
