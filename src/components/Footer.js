import React from 'react';
import SVG from 'react-inlinesvg';

import logo from '../img/logo-inverted.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div
          className="content has-text-centered"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <SVG
            src={logo}
            alt="AK logo"
            style={{ width: '7em', height: '5em' }}
          />
          <span>&copy; andrewkiernan.com {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }
};

export default Footer;
