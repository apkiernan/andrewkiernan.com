import { fetchGraphQL } from '$lib/api';
import { PUBLIC_CONTENTFUL_HEADSHOT_ID } from '$env/static/public';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }): Promise<{ headshot: { url: string } }> => {
	const query = `query {
    headshot: asset(id: "${PUBLIC_CONTENTFUL_HEADSHOT_ID}") {
      url
      height
      width
    }
  }`;

	const result = await fetchGraphQL(fetch, query);
	return result.data;
};
