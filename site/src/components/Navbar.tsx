import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import SVG from 'react-inlinesvg';

import { SiteTheme } from '../hooks/useSiteTheme';
import logoLight from '../img/logo.svg';
import logoDark from '../img/logo-inverted.svg';
import lightIcon from '../img/light-mode-icon.svg';
import darkIcon from '../img/dark-mode-icon.svg';

const Nav = styled.nav`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 3rem;
  justify-content: space-between;

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    height: 5rem;
    padding: 0 2rem;
  }
`;

const NavBrand = styled.div`
  display: flex;
  height: 100%;
`;

const SiteThemeToggle = styled.div`
  flex: 1;
`;

const BrandLink = styled(Link)`
  display: flex;
  height: 100%;
  padding: 0.5rem;
`;

const NavMenu = styled.div`
  font-size: ${props => props.theme.font.main};
  color: ${props => props.theme.palette.textColor};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  border-bottom: 0.3rem solid transparent;
  color: ${props => props.theme.palette.textColor};
  padding: 1.5rem;
  padding-bottom: 0.6rem;

  &::visited: {
    color: ${props => props.theme.palette.textColor};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
    font-size: 1.25rem;
    padding: 2rem;
    padding-bottom: 1.5rem;
  }
`;

const SwitchContainer = styled.div`
  align-items: center;
  display: flex;
`;
const SwitchIcon = styled(SVG)`
  border-radius: 2rem;
  height: 2rem;
  width: 2rem;
  fill: ${props => props.theme.palette.textColor};
`;

type Props = {
  siteTheme: SiteTheme;
  setSiteTheme: (st: SiteTheme) => void;
};

const Switch = (p: Props) => {
  return (
    <label htmlFor="site-theme">
      <SwitchContainer>
        <SwitchIcon src={p.siteTheme === 'light' ? lightIcon : darkIcon} />
      </SwitchContainer>
      <input
        id="site-theme"
        type="checkbox"
        hidden
        checked={p.siteTheme === 'dark'}
        onChange={() => {
          p.setSiteTheme(p.siteTheme === 'light' ? 'dark' : 'light');
        }}
      />
    </label>
  );
};

const Navbar = (p: Props) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Nav>
      <NavBrand>
        <BrandLink to="/">
          <SVG src={p.siteTheme === 'light' ? logoLight : logoDark} style={{ height: '100%', width: 'auto' }} />
        </BrandLink>
      </NavBrand>
      <SiteThemeToggle>
        <Switch siteTheme={p.siteTheme} setSiteTheme={p.setSiteTheme} />
      </SiteThemeToggle>
      <NavMenu>
        <NavLink activeStyle={{ borderBottomColor: theme.palette.primary }} to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink activeStyle={{ borderBottomColor: theme.palette.primary }} to="/contact">
          Contact
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
