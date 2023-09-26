import { getPlaiceholder } from 'plaiceholder';

type Img = {
	url: string;
	height: number;
	width: number;
};

export type TransformedImg = Img & { blur: string };

export const transformImage = async (image: Img): Promise<TransformedImg> => {
	console.log('IMG', image.url);
	const { base64 } = await getPlaiceholder(image.url, { size: 10 });
	return {
		...image,
		blur: base64
	};
};
