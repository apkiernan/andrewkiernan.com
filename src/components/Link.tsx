import React from 'react';
import { Link as L } from 'gatsby';

export const Link = props => (
  <L activeClassName="active" className="navbar-item" to={props.to}>
    {props.children}
  </L>
);
