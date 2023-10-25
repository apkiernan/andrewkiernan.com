import jimp from 'jimp';

export type TransformedImg = { blur: string };

export const transformImage = async (data: Buffer): Promise<TransformedImg> => {
	try {
		const img = await jimp.read(data);
		const base64 = await img.blur(5).getBase64Async(jimp.MIME_JPEG);

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
