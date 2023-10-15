import { getPlaiceholder } from 'plaiceholder';

export type TransformedImg = { blur: string };

export const transformImage = async (data: Buffer): Promise<TransformedImg> => {
	try {
		const { base64 } = await getPlaiceholder(data, { size: 10 });

		return {
			blur: base64
		};
	} catch (err) {
		console.error(err);
		return {
			blur: ''
		};
	}
};
