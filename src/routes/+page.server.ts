import type { PageServerLoad } from './$types';
import { transformImage } from '$lib/transformImage';

export const load: PageServerLoad = async ({ fetch }) => {
	const data = await getData(fetch);

	return {
		headshot: data.headshot
	};
};

export type Headshot = {
	width: number;
	height: number;
	url: string;
};

async function getData(relFetch: typeof window.fetch) {
	const res = await relFetch('/Headshot.jpg');
	const buffer = await res.arrayBuffer();
	const { blur } = await transformImage(Buffer.from(buffer));

	return {
		headshot: { url: '/Headshot.jpg', blur }
	};
}
