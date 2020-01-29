import React from 'react';
import SVG from 'react-inlinesvg';

import logo from '../img/logo-inverted.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <SVG src={logo} alt="AK logo" style={{ width: '5em', height: '3.5em', marginBottom: '1rem' }} />
          <span>&copy; Andrew Kiernan {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }
};

export default Footer;
