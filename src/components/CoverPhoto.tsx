'use client';
import { ImageProps } from 'next/image';

import styles from '$styles/cover-photo.module.css';
import { Img } from './Img';

type Props = {
	image: ImageProps['src'];
	height: ImageProps['height'];
	width: ImageProps['width'];
	blur: string;
};

export const CoverPhoto = (props: Props) => (
	<Img
		alt="cover-photo"
		className={styles.coverPhoto}
		src={props.image}
		blurDataURL={props.blur}
		placeholder="blur"
		priority
		fill
		style={{
			objectFit: 'cover'
		}}
	/>
);
