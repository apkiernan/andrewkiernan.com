import React from 'react';
import { Link, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';

import { Layout } from '../components/Layout';

const Grid = styled.div`
  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 35% 65%;
    grid-gap: 2rem;
  }
`;

const Img = styled(Image)`
  height: auto;
  max-height: 25vh;
  width: 100%;

  @media screen and (min-width: 700px) {
    max-height: unset;
  }
`;

type BlogProps = {
  data: {};
};

const Blog = (props: BlogProps) => {
  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl=""
    >
    </Layout>
  );
};

export default Blog;
