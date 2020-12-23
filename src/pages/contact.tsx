import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SVG from 'react-inlinesvg';

import { Layout } from '../components/Layout';
import github from '../img/github-icon.svg';
import twitter from '../img/social/twitter.svg';
import email from '../img/social/email.svg';

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
  data: {
    headshot: { file: { url: string } };
  };
};
export default (props: Props) => (
  <Layout
    title="Contact me to build a website or web app for you or your business"
    imageUrl={props.data.headshot.file.url}
  >
    <Section>
      <div>
        <div>
          <h1>Contact</h1>
          <p>
            Are you looking to build a new site or web app? Want to talk about
            why the Celtics are the best team in the NBA? Just want to say hi?
            Feel free to contact me through the platforms listed below
          </p>
          <Section>
            <IconContainer>
              <SVG src={email} />
            </IconContainer>
            <ExternalLink href="mailto:apkiernan@gmail.com">
              Shoot me an email
            </ExternalLink>
          </Section>
          <Section>
            <IconContainer>
              <SVG src={github} />
            </IconContainer>
            <ExternalLink href="https://github.com/apkiernan">
              Find me on Github
            </ExternalLink>
          </Section>
          <Section>
            <IconContainer>
              <SVG src={twitter} />
            </IconContainer>
            <ExternalLink href="https://twitter.com/apkiernan">
              Find me on Twitter (I don't tweet at all, but my DMs are open)
            </ExternalLink>
          </Section>
        </div>
      </div>
    </Section>
  </Layout>
);

export const pageQuery = graphql`
  query ContactPageQuery {
    headshot: contentfulAsset(title: { eq: "Headshot" }) {
      file {
        url
      }
    }
  }
`;
