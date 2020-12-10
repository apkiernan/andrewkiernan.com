import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import { FluidObject } from 'gatsby-image';

const Grid = styled.div`
  @media screen and (min-width: 625px) {
    display: grid;
    grid-template-columns: 40% 60%;
  }
`;

type ProjectProps = {
  name: string;
  slug: string;
  featureBullets: string;
  media: FluidObject;
};

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ProjectImage = styled(Image)`
  border-radius: 10px;
  max-height: 50vh;
`;

export const Project = ({ name, featureBullets, media }: ProjectProps) => {
  return (
    <Section>
      <div>
        <h1>{name}</h1>
        <Grid>
          <ProjectImage fluid={media} />
          <Content content={featureBullets} />
        </Grid>
      </div>
    </Section>
  );
};

type PortfolioPageProps = {
  data: {};
};

const PortfolioPage = (props: PortfolioPageProps) => {
  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl=""
    >
    </Layout>
  );
};

export default PortfolioPage;
