import React from 'react';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

const Img = styled(Image)`
	max-height: 450px;
	margin-bottom: 2rem;
`;

type Props = {
	image: ImageProps['src'];
	height: ImageProps['height'];
	width: ImageProps['width'];
	blur: string;
};

export const CoverPhoto = (props: Props) => (
	<Img
		layout="responsive"
		src={props.image}
		height={1000}
		width={props.width}
		blurDataURL={props.blur}
		placeholder="blur"
		priority
	/>
);
