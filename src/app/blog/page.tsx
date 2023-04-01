import Image from 'next/image';

import { Link } from '$components/Link';
import { getAllPosts } from '$lib/api';
import styles from './blog.module.css';

const Blog = async () => {
	const { posts } = await getData();
	return (
		<>
			{posts.map(bp => (
				<div className={styles.grid} key={bp.slug}>
					<Image
						alt="blog-post-header"
						className={styles.img}
						src={bp.coverPhoto.url}
						height={bp.coverPhoto.height}
						width={bp.coverPhoto.width}
						blurDataURL={bp.coverPhoto.blur}
						placeholder="blur"
					/>
					<div>
						<Link to={`/blog/${bp.slug}`}>
							<p>{bp.title}</p>
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default Blog;

async function getData() {
	const { posts } = await getAllPosts();

	return {
		posts
	};
}
