import { graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../../components/Layout';

type Props ={
  data: {
    headshot: {
      file: { url: string }
    }
  }
}
export default (props: Props) => (
  <Layout title="A Boston based web developer specializing in performant web applications" imageUrl={props.data.headshot.file.url}>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
        </div>
      </div>
    </section>
  </Layout>
);

export const pageQuery = graphql`
  query ContactPageThanksQuery {
    headshot: contentfulAsset(title: { eq: "Headshot" }) {
      file {
        url
      }
    }
  }
`
