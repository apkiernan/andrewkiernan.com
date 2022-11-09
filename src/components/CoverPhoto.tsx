import React from 'react';
import Image, { ImageProps } from 'next/image';

import styles from '$styles/cover-photo.module.css';

type Props = {
	image: ImageProps['src'];
	height: ImageProps['height'];
	width: ImageProps['width'];
	blur: string;
};

export const CoverPhoto = (props: Props) => (
	<Image
		className={styles.coverPhoto}
		layout="responsive"
		src={props.image}
		height={1000}
		width={props.width}
		blurDataURL={props.blur}
		placeholder="blur"
		priority
	/>
);
