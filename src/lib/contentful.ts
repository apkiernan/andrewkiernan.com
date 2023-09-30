import contentful from 'contentful';

import {
	PUBLIC_CONTENTFUL_ACCESS_TOKEN,
	PUBLIC_CONTENTFUL_HOST,
	PUBLIC_CONTENTFUL_SPACE_ID
} from '$env/static/public';

let client: contentful.ContentfulClientApi<any>;

export const getClient = () => {
	if (!client) {
		client = contentful.createClient({
			accessToken: PUBLIC_CONTENTFUL_ACCESS_TOKEN,
			space: PUBLIC_CONTENTFUL_SPACE_ID,
			host: PUBLIC_CONTENTFUL_HOST
		});
	}

	return client;
};
