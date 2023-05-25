import cx from 'classnames';

import styles from '$styles/home.module.css';
import { fetchGraphQL } from '$lib/api';
import { transformImage } from '$lib/transformImage';
import { Headshot } from './Headshot';

export const metadata = {
	title: 'Andrew Kiernan | Boston based JavaScript developer'
};

export default async () => {
	const { headshot } = await getData();

	return (
		<>
			<div className={styles.flex} style={{ marginBottom: '2rem' }}>
				<div className={styles.titleContainer}>
					<h1 className={styles.h1}>Hi, I'm Andrew</h1>
					<div className={styles.arrow}>&rarr;</div>
				</div>
				<div className={styles.headshotWrapper}>
					<Headshot headshot={headshot} />
				</div>
			</div>
			<div className={cx(styles.flex, styles.reverse)}>
				<p>JavaScript ninja, CSS wizard, HTML rockstar. Master of hyperbole.</p>
			</div>
		</>
	);
};

async function getData() {
	const { data } = await fetchGraphQL(`
		query {
			headshot: asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
				width
				height
				url
			}
		}
	`);

	const headshot = await transformImage(data.headshot);
	headshot.url = `${headshot.url}?fm=webp`;
	return {
		headshot
	};
}
