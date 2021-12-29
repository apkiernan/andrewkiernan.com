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
};

export const CoverPhoto = (props: Props) => {
  return (
    <Img
      layout="responsive"
      src={props.image}
      height={props.height}
      width={props.width}
    />
  );
};
