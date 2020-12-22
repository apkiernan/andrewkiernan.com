import React from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Layout } from '../components/Layout';

type PageProps = {
  data: {
    headshot: {
      fluid: FluidObject;
      file: { url: string };
    };
  };
};

const animation = keyframes`
  25% {
    transform: translateX(2.5%)
  }
  50% {
    transform: translateX(5%)
  }

  75% {
    transform: translateX(7.5%)
  }

  100% {
    transform: translateX(10%)
  }
`;

const Arrow = styled.div`
  animation: 1s ${animation} infinite;
  padding: 0 1rem;
  font-size: 3rem;
`;

const H1 = styled.h1`
  margin: 0;
`;

const IndexPage = ({ data }: PageProps) => {
  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl={data.headshot.file.url}
    >
      <div style={{ display: 'flex' }}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginRight: '4rem' }}
        >
          <H1>Hi, I'm Andrew</H1>
          <Arrow>&rarr;</Arrow>
        </div>
        <Image
          style={{ height: '15rem', width: '15rem', borderRadius: '2rem' }}
          fluid={data.headshot.fluid}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    headshot: contentfulAsset(title: { eq: "Headshot" }) {
      fluid {
        ...GatsbyContentfulFluid
      }
      file {
        url
      }
    }
  }
`;
