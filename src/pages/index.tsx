import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';

import { Layout } from '../components/Layout';
import { Content } from '../components/Content';

type Props = {
  title: string;
  html: string;
  image: GatsbyImageProps['fluid'];
};

export const IndexPageTemplate = ({ html, image }: Props) => {
  return (
    <section className="section">
      <Img fluid={image} />
      <Content content={html} />
    </section>
  );
};

type PageProps = {
  data: {
    strapiAbout: {
      title: string;
      content: string;
      coverPhoto: {
        childImageSharp: {
          fluid: GatsbyImageProps['fluid'];
        };
      };
    };
  };
};

const IndexPage = ({ data }: PageProps) => (
  <Layout title={data.strapiAbout.title}>
    <IndexPageTemplate
      title={data.strapiAbout.title}
      html={data.strapiAbout.content}
      image={data.strapiAbout.coverPhoto.childImageSharp.fluid}
    />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    strapiAbout {
      title
      content
      coverPhoto {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;
