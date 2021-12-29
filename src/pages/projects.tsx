import React from 'react';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

import { Content } from '../components/Content';
import { Layout } from '../components/Layout';
import { fetchGraphQL } from '../lib/api';

const Grid = styled.div`
  @media screen and (min-width: 625px) {
    display: grid;
    grid-template-columns: 40% 60%;
  }
`;

type ProjectProps = {
  title: string;
  slug: string;
  featureBullets: {
    childMarkdownRemark: {
      rawMarkdownBody: string;
    };
  };
  photos: ImageProps['src'];
};

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ProjectImage = styled(Image)`
  border-radius: 10px;
  max-height: 50vh;
`;

export const Project = ({ title, featureBullets, photos }: ProjectProps) => {
  return (
    <Section>
      <div>
        <h1>{title}</h1>
        <Grid>
          <ProjectImage src={photos} />
          <Content
            content={featureBullets.childMarkdownRemark.rawMarkdownBody}
          />
        </Grid>
      </div>
    </Section>
  );
};

type PortfolioPageProps = {
  data: {
    headshot: { url: string };
    projects: {
      items: {
        title: string;
        slug: string;
        featureBullets: {
          childMarkdownRemark: {
            rawMarkdownBody: string;
          };
        };
        photos: {
          url: string;
        }[];
      }[];
    };
  };
};

const PortfolioPage = (props: PortfolioPageProps) => {
  const { projects, headshot } = props.data;

  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl={headshot.url}
    >
      {projects.items.map(node => (
        <Project
          key={node.slug}
          title={node.title}
          slug={node.slug}
          featureBullets={node.featureBullets}
          photos={node.photos[0]?.url}
        />
      ))}
    </Layout>
  );
};

export default PortfolioPage;

export async function getStaticProps() {
  const { data } = await fetchGraphQL(`
  query PortfolioPage {
    headshot: asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
        url
    }
    projects: projectCollection(sort: { fields: updatedAt, order: DESC }) {
      items {
          title
          slug
          featureBullets {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          photos {
            url
          }
        }
      }
    }
  }
`);

  const { projects, headshot } = data;
  return {
    props: {
      projects,
      headshot
    }
  };
}
