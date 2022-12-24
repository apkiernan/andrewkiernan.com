import { fetchGraphQL } from '$lib/api';
import type { RouteParams } from '../blog/$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	fetch,
	params
}: {
	fetch: typeof global.fetch;
	params: RouteParams & { slug: string };
}) => {
	const { data } = await fetchGraphQL(
		fetch,
		`
  query {
    post: blogPostCollection(where: { slug: "${params.slug}" }) {
      items {
        title
        content 
        coverPhoto {
          url
          height
          width
        }
      }
    }
  }
`
	);
	const [post] = data.post.items;
	return {
		post
	};
};
