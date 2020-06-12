import React from 'react';
import { Link as L } from 'gatsby';

type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};
export const Link = (props: LinkProps) => (
  <L activeClassName="active" className={props.className ?? ''} to={props.to}>
    {props.children}
  </L>
);
