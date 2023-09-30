import { getPlaiceholder } from 'plaiceholder';

export type TransformedImg = { url: string; blur: string };

export const transformImage = async (url: string): Promise<TransformedImg> => {
	const data = await fetch(`https:${url}`);
	const buffer = Buffer.from(await data.arrayBuffer());
	const { base64 } = await getPlaiceholder(buffer, { size: 10 });

	return {
		url,
		blur: base64
	};
};
