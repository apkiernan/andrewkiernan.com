import React from 'react';
import Image, { FluidObject } from 'gatsby-image';
import styled from 'styled-components';

const Img = styled(Image)`
  max-height: 450px;
  margin-bottom: 2rem;
`;

type Props = {
  image: FluidObject;
};

export const CoverPhoto = (props: Props) => {
  return <Img fluid={props.image} />;
};
