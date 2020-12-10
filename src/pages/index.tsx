import React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { Layout } from '../components/Layout';
import { Content } from '../components/Content';
import { CoverPhoto } from '../components/CoverPhoto';

type PageProps = {
  data: {};
};

const IndexPage = ({ data }: PageProps) => {

  return (
    <Layout
      title=""
      imageUrl=""
    >
      <section>
      </section>
    </Layout>
  );
};

export default IndexPage;
