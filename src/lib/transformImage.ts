import { getPlaiceholder } from 'plaiceholder';

type Img = {
	url: string;
	height: number;
	width: number;
};

export type TransformedImg = Img & { blur: string };

export const transformImage = async (image: Img): Promise<TransformedImg> => {
	const data = await fetch(`https:${image.url}`);
	const buffer = Buffer.from(await data.arrayBuffer());
	const { base64 } = await getPlaiceholder(buffer, { size: 10 });
	return {
		...image,
		blur: base64
	};
};
