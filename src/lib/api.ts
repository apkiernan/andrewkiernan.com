export async function fetchGraphQL(query, preview = false) {
	const result = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`
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
			headshot: asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
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
	return { posts: items, headshot };
}
