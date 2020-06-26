import React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { Layout } from '../components/Layout';
import { Content } from '../components/Content';
import { CoverPhoto } from '../components/CoverPhoto';

type PageProps = {
  data: {
    strapiAbout: {
      title: string;
      content: string;
      coverPhoto: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
};

const IndexPage = ({ data }: PageProps) => {
  const { strapiAbout: page } = data;

  return (
    <Layout
      title={page.title}
      imageUrl={page.coverPhoto.childImageSharp.fluid.src}
    >
      <section>
        <CoverPhoto image={page.coverPhoto.childImageSharp.fluid} />
        <Content content={page.content} />
      </section>
    </Layout>
  );
};

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
