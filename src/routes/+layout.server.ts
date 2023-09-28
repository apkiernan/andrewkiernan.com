import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const themeCookie = cookies.get('ak_theme');

	return {
		theme: themeCookie
	};
};
