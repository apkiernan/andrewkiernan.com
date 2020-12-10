import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { FluidObject } from 'gatsby-image';
import { Content } from '../components/Content';
import { CoverPhoto } from '../components/CoverPhoto';

type Props = {
  data: {};
};

const BlogPost = (props: Props) => {
  return (
    <Layout
      title=""
      imageUrl=""
    >
    </Layout>
  );
};

export default BlogPost;
