import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs/promises';
import path from 'path';

export type TransformedImg = { url: string; blur: string };

export const transformImage = async (url: string): Promise<TransformedImg> => {
	try {
		const resolvedPath = path.resolve(process.cwd(), `static${url}`);
		const data = await fs.readFile(resolvedPath);
		const { base64 } = await getPlaiceholder(data, { size: 10 });

		return {
			url,
			blur: base64
		};
	} catch (err) {
		console.error(err);
		return {
			url,
			blur: ''
		};
	}
};
