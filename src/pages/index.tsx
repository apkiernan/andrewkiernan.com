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
  12.5% {
    transform: translateX(2.5%)
  }
  25% {
    transform: translateX(5%)
  }
  37.5% {
    transform: translateX(7.5%)
  }
  50% {
    transform: translateX(10%)
  }
  62.5% {
    transform: translateX(7.5%)
  }
  75% {
    transform: translateX(5%)
  }
  87.5% {
    transform: translateX(2.5%)
  }
  100% {
    transform: translateX(0)
  }
`;

const Arrow = styled.div`
  animation: 1s ${animation} infinite;
  padding: 0 1rem;
  font-size: 3rem;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 2rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    font-size: 3rem;
  }
`;

type FlexProps = {
  reverse?: boolean;
  marginBottom?: string;
};

const Flex = styled.div<FlexProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    margin-right: 4rem;
  }
`;

const Headshot = styled(Image)`
  border-radius: 5rem;
  height: 5rem;
  width: 7rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    border-radius: 15rem;
    height: 15rem;
    width: 15rem;
  }
`;

const IndexPage = ({ data }: PageProps) => {
  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl={data.headshot.file.url}
    >
      <Flex marginBottom="2rem">
        <TitleContainer>
          <H1>Hi, I'm Andrew</H1>
          <Arrow>&rarr;</Arrow>
        </TitleContainer>
        <Headshot fluid={data.headshot.fluid} />
      </Flex>
      <Flex reverse>
        <p>JavaScript ninja, CSS wizard, HTML rockstar. Master of hyperbole.</p>
      </Flex>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    headshot: contentfulAsset(title: { eq: "Headshot" }) {
      fluid {
        ...GatsbyContentfulFluid_tracedSVG
      }
      file {
        url
      }
    }
  }
`;
