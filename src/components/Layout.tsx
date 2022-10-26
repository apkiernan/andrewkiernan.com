import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Navbar from './Navbar';
import { SEO } from './SEO';

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

export const Layout = ({ children, title, imageUrl }: LayoutProps) => (
	<>
		<SEO title={title} description={title} imageUrl={imageUrl} />
		<Page>
			<Navbar />
			<Content>{children}</Content>
			<Footer />
		</Page>
	</>
);
