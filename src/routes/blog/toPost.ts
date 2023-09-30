export function toPost(data: any): Post {
	return {
		title: data.fields.title,
		slug: data.fields.slug,
		content: data.fields.content,
		coverPhoto: {
			url: data.fields.coverPhoto.fields.file.url,
			width: 533,
			height: 200
		}
	};
}

export type Post = {
	title: string;
	content: string;
	slug: string;
	coverPhoto: {
		url: string;
		width: number;
		height: number;
	};
};
