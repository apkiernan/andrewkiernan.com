import { fetchGraphQL } from '$lib/api';
import { PUBLIC_CONTENTFUL_HEADSHOT_ID } from '$env/static/public';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad<{ headshot: Headshot }> = async () => {
	const data = await getData();

	return {
		headshot: data.headshot
	};
};

export type Headshot = {
	width: number;
	height: number;
	url: string;
};

async function getData() {
	const { data } = await fetchGraphQL(`
		query {
			headshot: asset(id: "${PUBLIC_CONTENTFUL_HEADSHOT_ID}") {
				width
				height
				url
			}
		}
	`);

	return {
		headshot: data.headshot
	};
}
