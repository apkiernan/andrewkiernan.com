import { fetchGraphQL } from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
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
