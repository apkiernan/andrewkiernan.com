import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import cx from 'classnames';

import styles from '$styles/home.module.css';
import { Layout } from '$components/Layout';
import { fetchGraphQL } from '$lib/api';
import { transformImage } from '$lib/transformImage';

type PageProps = {
	headshot: {
		url: string;
		height: number;
		width: number;
		blur: string;
	};
};

const IndexPage = (props: PageProps) => {
	return (
		<Layout
			title="A Boston based web developer specializing in performant web applications"
			imageUrl={props.headshot.url}
		>
			<div className={styles.flex} style={{ marginBottom: '2rem' }}>
				<div className={styles.titleContainer}>
					<h1 className={styles.h1}>Hi, I&apos;m Andrew</h1>
					<div className={styles.arrow}>&rarr;</div>
				</div>
				<div className={styles.headshotWrapper}>
					<div style={{ height: '100%', width: '100%' }}>
						<Image
							className={styles.headshot}
							src={props.headshot.url}
							height={props.headshot.height}
							width={props.headshot.width}
							blurDataURL={props.headshot.blur}
							priority
							layout="responsive"
							placeholder="blur"
							alt="my ugly mug"
						/>
					</div>
				</div>
			</div>
			<div className={cx(styles.flex, styles.reverse)}>
				<p>JavaScript ninja, CSS wizard, HTML rockstar. Master of hyperbole.</p>
			</div>
		</Layout>
	);
};

export default IndexPage;

export async function getServerSideProps() {
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
	return {
		props: {
			headshot
		}
	};
}
