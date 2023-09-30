import { getClient } from '$lib/contentful';
import { PUBLIC_CONTENTFUL_HEADSHOT_ID } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { transformImage } from '$lib/transformImage';

export const load: PageServerLoad = async () => {
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
	const client = getClient();
	const headshot = await client.getAsset(PUBLIC_CONTENTFUL_HEADSHOT_ID);

	const img = await transformImage(headshot.fields.file?.url as string);

	return {
		headshot: img
	};
}
