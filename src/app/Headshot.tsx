'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '$styles/home.module.css';
import { TransformedImg } from '$lib/transformImage';
import { FC } from 'react';

type Props = {
	headshot: TransformedImg;
};

export const Headshot: FC<Props> = ({ headshot }) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: '100%' }}
			animate={{ opacity: 1, translateX: 0 }}
			transition={{ duration: 0.3 }}
			style={{ height: '100%', width: '100%' }}
		>
			<Image
				className={styles.headshot}
				src={headshot.url}
				height={headshot.height}
				width={headshot.width}
				blurDataURL={headshot.blur}
				priority
				placeholder="blur"
				alt="my ugly mug"
			/>
		</motion.div>
	);
};
