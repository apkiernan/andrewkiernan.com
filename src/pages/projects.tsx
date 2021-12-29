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
  featureBullets: string;
  photoUrl: string;
  photoHeight: number;
  photoWidth: number;
};

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ProjectImage = styled(Image)`
  border-radius: 10px;
  max-height: 50vh;
`;

export const Project = ({
  title,
  featureBullets,
  photoUrl,
  photoHeight,
  photoWidth
}: ProjectProps) => {
  return (
    <Section>
      <div>
        <h1>{title}</h1>
        <Grid>
          <ProjectImage
            src={photoUrl}
            height={photoHeight}
            width={photoWidth}
          />
          <Content content={featureBullets} />
        </Grid>
      </div>
    </Section>
  );
};

type Project = {
  title: string;
  slug: string;
  featureBullets: string;
  photosCollection: { items: { url: string; height: number; width: number }[] };
};

type PortfolioPageProps = {
  headshot: { url: string };
  projects: Project[];
};

const PortfolioPage = (props: PortfolioPageProps) => {
  const { projects, headshot } = props;

  return (
    <Layout
      title="A Boston based web developer specializing in performant web applications"
      imageUrl={headshot.url}
    >
      {projects.map(node => (
        <Project
          key={node.slug}
          title={node.title}
          slug={node.slug}
          featureBullets={node.featureBullets}
          photoUrl={node.photosCollection.items[0].url}
          photoHeight={node.photosCollection.items[0].height}
          photoWidth={node.photosCollection.items[0].width}
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
      height
      width
    }
    projects:projectCollection(order: title_ASC) {
      items {
        title
        slug
        featureBullets
        photosCollection {
          items {
            url
            height
            width
          }
        }
      }
    }
  }
`);
  const {
    projects: { items },
    headshot
  } = data;
  return {
    props: {
      projects: items,
      headshot
    }
  };
}
