import React from 'react';

import styles from '$styles/layout.module.css';
import Footer from '$components/Footer';
import Navbar from '$components/Navbar';
import { SEO } from '$components/SEO';

type LayoutProps = {
	children: React.ReactNode;
	title: string;
	imageUrl: string;
};

export const Layout = ({ children, title, imageUrl }: LayoutProps) => (
	<>
		<SEO title={title} description={title} imageUrl={imageUrl} />
		<main className={styles.main}>
			<Navbar />
			<div className={styles.content}>{children}</div>
			<Footer />
		</main>
	</>
);
