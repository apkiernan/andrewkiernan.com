import { getClient } from '$lib/contentful';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const contentfulClient = getClient();

	const data = await contentfulClient.getEntries({
		content_type: 'project'
	});

	return {
		projects: data.items.map(toProject)
	};
};

function toProject(data: any): Project {
	return {
		title: data.fields.title,
		slug: data.fields.slug,
		featureBullets: data.fields.featureBullets,
		photos: data.fields.photos.map((photo: any) => ({
			url: photo.fields.file,
			width: 533,
			height: 200
		}))
	};
}

type Photo = {
	url: string;
	filename: string;
};

type Project = {
	title: string;
	slug: string;
	featureBullets: string;
	photos: {
		url: Photo;
		height: number;
		width: number;
	}[];
};
