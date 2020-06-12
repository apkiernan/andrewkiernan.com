import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  align-items: center;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  height: 3rem;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    height: 5rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>&copy; Andrew Kiernan {new Date().getFullYear()}</span>
    </FooterWrapper>
  );
};

export default Footer;
