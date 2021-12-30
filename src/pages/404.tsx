import React from 'react';
import { Layout } from '../components/Layout';
import { fetchGraphQL } from '../lib/api';

type Props = {
  data: { url: string };
};

const NotFoundPage = (props: Props) => (
  <Layout
    title="A Boston based web developer specializing in performant web applications"
    imageUrl={props.data.url}
  >
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;

export async function getStaticProps() {
  const response = await fetchGraphQL(`
    query {
      asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
        width 
        height
        url
      }
    }
  `);

  return {
    props: {
      data: response.data.asset,
    },
  };
}
