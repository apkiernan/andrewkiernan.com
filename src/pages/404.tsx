import { graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

type Props = {
  data: {
    contentfulAsset: {
      file: { url: string }
    }
  }  
};

const NotFoundPage = (props: Props) => (
  <Layout 
    title="A Boston based web developer specializing in performant web applications" 
    imageUrl={props.data.contentfulAsset.file.url}
  >
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;

export const pageQuewry = graphql`
  query Headshot {
    contentfulAsset(title: { eq: "Headshot" }) {
      file {
        url
      }
    }
  }
`
