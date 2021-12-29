import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};
export const Link = (props: LinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === props.to;
  return (
    <NextLink href={props.to} passHref>
      <a
        className={`${props.className ?? ''} ${
          isActive ? 'active' : ''
        }`.trim()}
      >
        {props.children}
      </a>
    </NextLink>
  );
};
