import { fetchGraphQL } from '$lib/api';
import { transformImage } from '$lib/transformImage';

import { ProjectList } from './project';

const PortfolioPage = async () => {
	const { projects } = await getData();

	return <ProjectList projects={projects} />;
};

export default PortfolioPage;

async function getData() {
	const { data } = await fetchGraphQL(`
	query PortfolioPage {
		headshot: asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
			url
			height
			width
		}
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
`);
	const {
		projects: { items },
		headshot
	} = data;

	const projects = await Promise.all(
		items.map(async item => {
			const photosCollection = await Promise.all(
				item.photosCollection.items.map(async pc => {
					const image = await transformImage(pc);
					return image;
				})
			);
			return {
				...item,
				photosCollection
			};
		})
	);

	return {
		projects,
		headshot
	};
}
