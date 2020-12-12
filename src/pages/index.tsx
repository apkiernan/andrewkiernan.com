import { graphql } from 'gatsby';
import React from 'react';

import { Layout } from '../components/Layout';

type PageProps = {
  data: {
    headshot: { file: { url: string } };
  };
};

const IndexPage = ({ data }: PageProps) => {

  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl={data.headshot.file.url}
    >
      <section>
        <p>I am a Boston based web developer, currently employed at <a href="https://www.salsify.com">Salsify</a>.</p>
        <p>
          I'm originally from Abington, Massachusetts, but have been living all around Boston for the last 8 years, currently residing in the North End neighborhood.
          If I'm not working on various side projects, and it is between the months of October and June (playoffs permitting), you will most likely find me heading to the TD Garden for a Celtics game.
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    headshot: contentfulAsset(title: { eq: "Headshot" }) {
      file {
        url
      }
    }
  }
`