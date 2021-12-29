import {
  ThemeProps,
  createGlobalStyle,
  ThemeProvider
} from 'styled-components';

const baseTheme = {
  font: {
    main: '16px'
  },
  breakpoints: {
    medium: '500px'
  }
};

export type Theme = ThemeProps<typeof baseTheme>;

const Global = createGlobalStyle<Theme>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .theme-dark {
    --primary-color: #729FE3;
    --background-color: #282c35;
    --text-color: #fff;
    --link-color: #729FE3;
    --code-color: #ff7ba4;
  }
  .theme-light {
    --primary-color: #08234F;
    --background-color: #fafafa;
    --text-color: #333;
    --link-color: #08234F;
    --code-color: #d5057a;
  }
  html {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }
  body {
    background: var(--background-color);
    color: var(--text-color);
    margin: 0;
  }
  p {
    font-size: 1rem;
    
    @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
      font-size: 1.25rem;
    }
  }
  a {
    color: var(--link-color);
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

  h2 {
    font-size: 1.5rem;
    @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
      font-size: 2rem;
    }
  }

  code {
    color: var(--code-color);
  }
`;

type AppProps = {
  Component: any;
  pageProps: unknown;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={baseTheme}>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
