'use client';

import Image, { ImageProps } from 'next/image';

const customLoader = ({ src, width }) => `${src}&w=${width}`;

export const Img = (props: ImageProps) => {
	return <Image {...props} loader={customLoader} />;
};
