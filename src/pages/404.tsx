import React from 'react';
import { Layout } from '../components/Layout';
import { fetchGraphQL } from '../lib/api';

type Props = {
	data: { url: string };
};

const NotFoundPage = (props: Props) => (
	<Layout
		title="A Boston based web developer specializing in performant web applications"
		imageUrl={props.data.url}
	>
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<p>
				How...how did you get here? There&apos;s nothing to see here. It
				doesn&apos;t exist.
			</p>
		</div>
	</Layout>
);

export default NotFoundPage;

export async function getStaticProps() {
	const response = await fetchGraphQL(`
		query {
			asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
				width 
				height
				url
			}
		}
	`);

	return {
		props: {
			data: response.data.asset
		}
	};
}
