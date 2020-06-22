import React from 'react';
import styled, {
  ThemeProvider,
  ThemeProps,
  createGlobalStyle
} from 'styled-components';

import Footer from './Footer';
import Navbar from './Navbar';
import { useSiteTheme } from '../hooks/useSiteTheme';

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
    linkColor: '#08234F'
  }
};

const darkTheme = {
  ...baseTheme,
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
    font-family: 'Poppins', sans-serif;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
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
};

export const Layout = ({ children }: LayoutProps) => {
  const [siteTheme, setSiteTheme] = useSiteTheme();
  return (
    <ThemeProvider theme={siteTheme === 'light' ? lightTheme : darkTheme}>
      <Global />
      <Page>
        <Navbar siteTheme={siteTheme} setSiteTheme={setSiteTheme} />
        <Content>{children}</Content>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};
