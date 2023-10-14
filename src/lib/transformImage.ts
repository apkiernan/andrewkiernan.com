import fs from 'fs/promises';
import path from 'path';

import { getPlaiceholder } from 'plaiceholder';

export type TransformedImg = { url: string; blur: string };

export const transformImage = async (url: string): Promise<TransformedImg> => {
	const post = `/static${url}`;
	console.log({ post });
	const data = await fs.readFile(post);
	const { base64 } = await getPlaiceholder(data, { size: 10 });

	return {
		url,
		blur: base64
	};
};
