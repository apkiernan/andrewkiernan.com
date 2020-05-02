import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import { Link } from './Link';
import logo from '../img/logo.svg';

const Nav = styled.nav`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 3rem;
  justify-content: space-between;

  @media screen and (min-width: 500px) {
    height: 5rem;
    padding: 0 2rem;
  }
`;

const NavBrand = styled.div`
  display: flex;
  flex: 50%;
  height: 100%;
`;

const BrandLink = styled(Link)`
  display: flex;
  height: 100%;
  padding: 0.5rem;
`;

const NavMenu = styled.div`
  font-size: ${props => props.theme.font.main};
  color: ${props => props.theme.palette.grayDark};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.palette.grayDark};
  padding: 2rem;
  &::visited: {
    color: ${props => props.theme.palette.grayDark};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavBrand>
        <BrandLink to="/">
          <SVG src={logo} style={{ height: '100%', width: 'auto' }} />
        </BrandLink>
      </NavBrand>
      <NavMenu>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
