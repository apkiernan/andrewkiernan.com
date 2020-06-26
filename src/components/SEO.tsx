import React from 'react';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';

type SEOProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export const SEO = (props: SEOProps) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{props.title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix('/')}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-16x16.png`}
        sizes="16x16"
      />
      <link
        rel="mask-icon"
        href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
        color="#ff4400"
      />

      <meta name="description" content={props.description} />
      <meta name="theme-color" content="#fff" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content={props.imageUrl} />
    </Helmet>
  );
};
