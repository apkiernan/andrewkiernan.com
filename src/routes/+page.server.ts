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
	const img = await transformImage('/Headshot.jpg');

	return {
		headshot: img
	};
}
