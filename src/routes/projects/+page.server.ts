import type { Asset, EntrySkeletonType } from 'contentful';

import type { PageServerLoad } from './$types';
import { getClient } from '$lib/contentful';
import { transformImage, type TransformedImg } from '$lib/transformImage';

export const load: PageServerLoad = async () => {
	const contentfulClient = getClient();

	const data = await contentfulClient.getEntries<EntrySkeletonType<Project>>({
		content_type: 'project'
	});

	const projects = await Promise.all(
		data.items.map((item) => {
			return toProject(item as unknown as EntrySkeletonType<ContentfulProject>);
		})
	);
	return {
		projects
	};
};

type ContentfulProject = {
	title: string;
	description: string;
	featureBullets: string;
	slug: string;
	photos: Asset[];
};

type Project = {
	title: string;
	description: string;
	featureBullets: string;
	slug: string;
	photos: TransformedImg[];
};

async function toProject(data: EntrySkeletonType<ContentfulProject>): Promise<Project> {
	const photos = await Promise.all(
		data.fields.photos.map((photo: Asset) => {
			return transformImage(photo.fields.file?.url as string);
		})
	);

	return {
		description: data.fields.description,
		title: data.fields.title,
		slug: data.fields.slug,
		featureBullets: data.fields.featureBullets,
		photos
	};
}
