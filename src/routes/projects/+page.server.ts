import { fetchGraphQL } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const { data } = await fetchGraphQL(
		fetch,
		`
  query PortfolioPage {
    projects:projectCollection(order: title_ASC) {
      items {
        title
        slug
        featureBullets
        photosCollection {
          items {
            url
            height
            width
          }
        }
      }
    }
  }
`
	);

	const {
		projects: { items }
	} = data;
	return {
		projects: items
	};
};
