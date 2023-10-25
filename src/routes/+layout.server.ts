import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async ({ cookies }) => {
	const themeCookie = cookies.get('ak_theme');

	return {
		theme: themeCookie
	};
};
