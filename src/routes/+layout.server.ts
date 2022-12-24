import { fetchGraphQL } from '$lib/api';
import { CONTENTFUL_HEADSHOT_ID } from '$env/static/private';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }): Promise<{ headshot: { url: string } }> => {
	const query = `query {
    headshot: asset(id: "${CONTENTFUL_HEADSHOT_ID}") {
      url
      height
      width
    }
  }`;

	const result = await fetchGraphQL(fetch, query);
	return result.data;
};
