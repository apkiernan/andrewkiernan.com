import React from 'react';
import { ThemeProps, ThemeProvider } from 'styled-components';
import '$styles/global.css';

const baseTheme = {
	font: {
		main: '16px'
	},
	breakpoints: {
		medium: '500px'
	}
};

export type Theme = ThemeProps<typeof baseTheme>;

type AppProps = {
	Component: any;
	pageProps: Record<string, unknown>;
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={baseTheme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
