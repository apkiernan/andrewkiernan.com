import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider, ThemeProps, createGlobalStyle } from 'styled-components';

import Footer from './Footer';
import Navbar from './Navbar';
import { Head } from './Head';
import useSiteMetadata from './SiteMetadata';
import { useSiteTheme } from '../hooks/useSiteTheme';

const lightTheme = {
  font: {
    main: '16px'
  },
  palette: {
    backgroundColor: '#fafafa',
    textColor: '#333',
    primary: '#08234F',
    linkColor: '#08234F'
  }
};

const darkTheme = {
  font: {
    main: '16px'
  },
  palette: {
    backgroundColor: '#282c35',
    textColor: '#fff',
    primary: '#729FE3',
    linkColor: '#729FE3'
  }
};

export type Theme = ThemeProps<typeof lightTheme | typeof darkTheme>;

const Global = createGlobalStyle<Theme>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
    color: ${props => props.theme.palette.textColor};
  }
  body {
    margin: 0;
    background: ${props => props.theme.palette.backgroundColor};
  }
  p,
  a {
    font-size: 1.25rem;
  }
  a {
    color: ${props => props.theme.palette.linkColor}
  }
`;

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
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { title, description } = useSiteMetadata();
  const [siteTheme, setSiteTheme] = useSiteTheme();
  return (
    <ThemeProvider theme={siteTheme === 'light' ? lightTheme : darkTheme}>
      <Global />
      <Page>
        <Helmet>
          <Head title={title} description={description} />
        </Helmet>
        <Navbar siteTheme={siteTheme} setSiteTheme={setSiteTheme} />
        <Content>{children}</Content>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};
