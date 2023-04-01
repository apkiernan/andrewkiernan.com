'use client';

import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type LinkProps = {
	to: string;
	children: React.ReactNode;
	className?: string;
};

export const Link = (props: LinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === props.to;
	return (
		<NextLink
			className={`${props.className ?? ''} ${isActive ? 'active' : ''}`.trim()}
			href={props.to}
			passHref
		>
			{props.children}
		</NextLink>
	);
};
