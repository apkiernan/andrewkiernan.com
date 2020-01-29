import React from 'react';
import SVG from 'react-inlinesvg';
import { Link } from './Link';
import logo from '../img/logo-inverted.svg';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <SVG src={logo} />
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
