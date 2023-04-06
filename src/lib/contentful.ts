import { ContentfulClientApi, createClient } from 'contentful';

let client: ContentfulClientApi;

export const getClient = () => {
	if (!client) {
		client = createClient({
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
			space: process.env.CONTENTFUL_SPACE_ID!,
			host: process.env.CONTENTFUL_HOST!
		});
	}

	return client;
};
