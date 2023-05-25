'use client';

import { motion } from 'framer-motion';

import { Link } from '$components/Link';
import { Img } from '$components/Img';
import styles from './blog.module.css';

type Props = {
	post: {
		slug: string;
		title: string;
		coverPhoto: {
			url: string;
			width: number;
			height: number;
			blur: string;
		};
	};
};

export const BlogPost = (props: Props) => {
	return (
		<motion.div
			className={styles.grid}
			key={props.post.slug}
			initial={{ translateY: '20vh', opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{ duration: 0.3, ease: 'easeIn' }}
		>
			<Img
				alt="blog-post-header"
				className={styles.img}
				src={props.post.coverPhoto.url}
				height={props.post.coverPhoto.height}
				width={props.post.coverPhoto.width}
				blurDataURL={props.post.coverPhoto.blur}
				placeholder="blur"
			/>
			<div>
				<Link to={`/blog/${props.post.slug}`}>
					<p>{props.post.title}</p>
				</Link>
			</div>
		</motion.div>
	);
};
