'use client';

import Image, { ImageProps } from 'next/image';

const customLoader = ({ src }) => src;

export const Img = (props: ImageProps) => {
	return <Image {...props} loader={customLoader} />;
};
