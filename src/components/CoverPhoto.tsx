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
		alt="cover-photo"
		className={styles.coverPhoto}
		src={props.image}
		height={1000}
		width={props.width}
		blurDataURL={props.blur}
		placeholder="blur"
		priority
	/>
);
