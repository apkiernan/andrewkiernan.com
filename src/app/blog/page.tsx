import fs from 'fs';
import path from 'path';
import { compiler } from 'markdown-to-jsx';
import { GrayMatterFile, read } from 'gray-matter';

export default async () => {
	const { posts } = await getPosts();
	return (
		<>
			{posts.map((bp) => {
				return (
					<>
						<h1>{bp.data.title}</h1>
						<p>{bp.data['date-created'].toISOString()}</p>
						{compiler(bp.content)}
					</>
				);
			})}
		</>
	);
};

async function getPosts() {
	const dirPath = path.resolve(process.cwd(), 'src', 'posts');
	const filenames = await getFiles(dirPath);

	const posts = await getPostContents(dirPath, filenames);

	return { posts };
}

function getFiles(dirPath: string): Promise<string[]> {
	return new Promise<string[]>((res, rej) => {
		fs.readdir(dirPath, (err, files) => {
			if (err) rej(err);

			res(files);
		});
	});
}

function getPostContents(
	dirPath: string,
	files: string[]
): Promise<GrayMatterFile<string>[]> {
	return Promise.all(
		files.map((file) => getPostContent(path.resolve(dirPath, file)))
	);
}

function getPostContent(filePath: string): Promise<GrayMatterFile<string>> {
	return new Promise<GrayMatterFile<string>>((res, rej) => {
		try {
			const content = read(filePath);
			res(content);
		} catch (err) {
			rej(err);
		}
	});
}
