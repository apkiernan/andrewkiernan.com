import React from 'react';
import { withPrefix } from 'gatsby';

type HeadProps = {
  title: string;
  description: string;
};
export const Head = (props: HeadProps) => {
  return (
    <React.Fragment>
      <html lang="en" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
      <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />
      <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={props.title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
    </React.Fragment>
  );
};
