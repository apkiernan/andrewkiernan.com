import { transformImage } from './transformImage';
import {
	PUBLIC_CONTENTFUL_ACCESS_TOKEN,
	PUBLIC_CONTENTFUL_HEADSHOT_ID,
	PUBLIC_CONTENTFUL_SPACE_ID
} from '$env/static/public';

export async function fetchGraphQL(query: string, preview = false) {
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

export async function getAllPosts() {
	const { data } = await fetchGraphQL(`
		query BlogPosts {
			headshot: asset(id: "${PUBLIC_CONTENTFUL_HEADSHOT_ID}") {
				url
				height
				width
			}
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
	`);
	const {
		posts: { items },
		headshot
	} = data;

	const posts = await Promise.all(
		items.map(async (item: any) => {
			const image = await transformImage(item.coverPhoto);
			image.url = `${image.url}?fm=webp`;
			return {
				...item,
				coverPhoto: image
			};
		})
	);

	return { posts, headshot };
}
