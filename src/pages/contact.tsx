import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Layout } from '../components/Layout';
import github from '../img/github-icon.svg';
import twitter from '../img/social/twitter.svg';
import email from '../img/social/email.svg';
import { fetchGraphQL } from '../lib/api';

const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
`;

const IconContainer = styled.div`
  margin-right: 2rem;
  flex: 1;
  > svg {
    fill: var(--primary-color);
  }
`;

const ExternalLink = styled.a`
  flex: 10;
`;

type Props = {
  headshot: { url: string; height: number; width: number };
};
const Contact = ({ headshot }: Props) => (
  <Layout
    title="Contact me to build a website or web app for you or your business"
    imageUrl={headshot.url}
  >
    <Section>
      <div>
        <div>
          <h1>Contact</h1>
          <p>
            Looking to build a new site or web app? Want to talk about why the
            Celtics are the best team in the NBA? Just want to say hi? Feel free
            to contact me through the platforms listed below
          </p>
          <Section>
            <IconContainer>
              <Image src={email} />
            </IconContainer>
            <ExternalLink href="mailto:apkiernan@gmail.com">
              Shoot me an email
            </ExternalLink>
          </Section>
          <Section>
            <IconContainer>
              <Image src={github} />
            </IconContainer>
            <ExternalLink href="https://github.com/apkiernan">
              Find me on Github
            </ExternalLink>
          </Section>
          <Section>
            <IconContainer>
              <Image src={twitter} />
            </IconContainer>
            <ExternalLink href="https://twitter.com/apkiernan">
              Find me on Twitter (I don&apos;t tweet at all, but my DMs are
              open)
            </ExternalLink>
          </Section>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Contact;

export async function getStaticProps() {
  const response = await fetchGraphQL(`
    query {
      headshot: asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
        url
        height
        width
      }
    }
  `);
  return {
    props: {
      headshot: response.data.headshot,
    },
  };
}
