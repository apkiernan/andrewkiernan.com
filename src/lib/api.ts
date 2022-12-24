import { PUBLIC_CONTENTFUL_SPACE_ID, PUBLIC_CONTENTFUL_ACCESS_TOKEN } from '$env/static/public';

export type Post = {
	title: string;
	content: string;
	slug: string;
	coverPhoto: {
		url: string;
		height: number;
		width: number;
	};
};

export async function fetchGraphQL(fetch: any, query: string) {
	const result = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${PUBLIC_CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
			},
			body: JSON.stringify({ query })
		}
	);
	const response = await result?.json();
	return response;
}

export async function getAllPosts(fetch: any): Promise<{ posts: Post[] }> {
	const { data } = await fetchGraphQL(
		fetch,
		`
    query BlogPosts {
      posts: blogPostCollection {
        items {
          title
          slug
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
	const {
		posts: { items }
	} = data;
	return { posts: items };
}
