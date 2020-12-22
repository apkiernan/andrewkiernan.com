import React from 'react';
import styled, {
  ThemeProvider,
  ThemeProps,
  createGlobalStyle
} from 'styled-components';

import Footer from './Footer';
import Navbar from './Navbar';
import { useSiteTheme } from '../hooks/useSiteTheme';
import { SEO } from './SEO';

const baseTheme = {
  font: {
    main: '16px'
  },
  breakpoints: {
    medium: '500px'
  }
};

const lightTheme = {
  ...baseTheme,
  palette: {
    backgroundColor: '#fafafa',
    textColor: '#333',
    primary: '#08234F',
    linkColor: '#08234F',
    codeColor: '#d5057a'
  }
};

const darkTheme = {
  ...baseTheme,
  palette: {
    backgroundColor: '#282c35',
    textColor: '#fff',
    primary: '#729FE3',
    linkColor: '#729FE3',
    codeColor: '#ff7ba4'
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
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.palette.textColor};
  }
  body {
    margin: 0;
    background: ${props => props.theme.palette.backgroundColor};
  }
  p {
    font-size: 1.25rem;
  }
  a {
    color: ${props => props.theme.palette.linkColor}
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  code {
    color: ${props => props.theme.palette.codeColor};
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
  width: 100%;
  max-width: 1000px;
  padding: 2rem;
`;

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  imageUrl: string;
};

export const Layout = ({ children, title, imageUrl }: LayoutProps) => {
  const [siteTheme, setSiteTheme] = useSiteTheme();
  return (
    <ThemeProvider theme={siteTheme === 'dark' ? darkTheme : lightTheme}>
      <SEO title={title} description={title} imageUrl={imageUrl} />
      <Global />
      <Page>
        <Navbar siteTheme={siteTheme} setSiteTheme={setSiteTheme} />
        <Content>{children}</Content>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};
