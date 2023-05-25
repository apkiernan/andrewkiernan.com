import { FC, PropsWithChildren } from 'react';

import styles from '$styles/layout.module.css';
import Footer from '$components/Footer';
import Navbar from '$components/Navbar';

import '$styles/global.css';

export const metadata = {
	title: "Andrew Kiernan's personal site"
};

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
	<html lang="en">
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
		<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
		<body suppressHydrationWarning={true}>
			<main className={styles.main}>
				<Navbar />
				<div className={styles.content}>{children}</div>
				<Footer />
			</main>
		</body>
	</html>
);

export default Layout;
