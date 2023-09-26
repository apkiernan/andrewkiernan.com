import { fetchGraphQL } from '$lib/api';
import { PUBLIC_CONTENTFUL_HEADSHOT_ID } from '$env/static/public';
import type { PageLoad } from './$types';
// import { transformImage } from '$lib/transformImage';

export const load: PageLoad<{ headshot: Headshot }> = async () => {
	const data = await getData();

	return {
		headshot: data.headshot
	};
};

type Headshot = {
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

	// const headshot = await transformImage(data.headshot);
	// headshot.url = `${headshot.url}?fm=webp`;
	return {
		headshot: data.headshot as Headshot
	};
}
