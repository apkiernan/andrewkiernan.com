'use client';

import SVG from 'react-inlinesvg';

import github from '../../img/github-icon.svg';
import twitter from '../../img/social/twitter.svg';
import email from '../../img/social/email.svg';

import styles from './contact.module.css';

export const Contact = () => {
	return (
		<section className={styles.section}>
			<div>
				<div>
					<h1>Contact</h1>
					<p>
						Looking to build a new site or web app? Want to talk about why the
						Celtics are the best team in the NBA? Just want to say hi? Feel free
						to contact me through the platforms listed below
					</p>
					<section className={styles.section}>
						<div className={styles.iconContainer}>
							<SVG src={email.src} />
						</div>
						<a
							className={styles.externalLink}
							href="mailto:apkiernan@gmail.com"
						>
							Shoot me an email
						</a>
					</section>
					<section className={styles.section}>
						<div className={styles.iconContainer}>
							<SVG src={github.src} />
						</div>
						<a
							className={styles.externalLink}
							href="https://github.com/apkiernan"
						>
							Find me on Github
						</a>
					</section>
					<section className={styles.section}>
						<div className={styles.iconContainer}>
							<SVG src={twitter.src} />
						</div>
						<a
							className={styles.externalLink}
							href="https://twitter.com/apkiernan"
						>
							Find me on Twitter (I don&apos;t tweet at all, but my DMs are
							open)
						</a>
					</section>
				</div>
			</div>
		</section>
	);
};
