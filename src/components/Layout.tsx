import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Footer from './Footer';
import Navbar from './Navbar';
import { Head } from './Head';
import useSiteMetadata from './SiteMetadata';

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
  }
  body {
    margin: 0;
    background: #fafafa
  }
  p,
  a {
    font-size: 1.25rem;
  }
`;

const theme = {
  font: {
    main: '16px'
  },
  palette: {
    grayDark: '#333'
  }
};

const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 800px;
  padding: 2rem;
`;

type LayoutProps = {
  children: React.ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Page>
        <Helmet>
          <Head title={title} description={description} />
        </Helmet>
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};
