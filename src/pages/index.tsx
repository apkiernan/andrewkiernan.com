import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

import { Layout } from '$components/Layout';
import { fetchGraphQL } from '$lib/api';
import { transformImage } from '$lib/transformImage';

type PageProps = {
	headshot: {
		url: string;
		height: number;
		width: number;
		blur: string;
	};
};

const animation = keyframes`
	12.5% {
		transform: translateX(2.5%)
	}
	25% {
		transform: translateX(5%)
	}
	37.5% {
		transform: translateX(7.5%)
	}
	50% {
		transform: translateX(10%)
	}
	62.5% {
		transform: translateX(7.5%)
	}
	75% {
		transform: translateX(5%)
	}
	87.5% {
		transform: translateX(2.5%)
	}
	100% {
		transform: translateX(0)
	}
`;

const Arrow = styled.div`
	animation: 1s ${animation} infinite;
	padding: 0 1rem;
	font-size: 3rem;
`;

const H1 = styled.h1`
	margin: 0;
	font-size: 2rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
		font-size: 3rem;
	}
`;

type FlexProps = {
	reverse?: boolean;
	marginBottom?: string;
};

const Flex = styled.div<FlexProps>`
	align-items: center;
	display: flex;
	flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
	margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	margin-right: 2rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
		margin-right: 4rem;
	}
`;

const Headshot = styled(Image)`
	border-radius: 5rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
		border-radius: 15rem;
	}
`;

const HeadshotWrapper = styled.div`
	display: flex;
	height: 5rem;
	width: 7rem;

	@media screen and (min-width: ${props => props.theme.breakpoints.medium}) {
		height: 15rem;
		width: 15rem;
	}
`;

const IndexPage = (props: PageProps) => {
	return (
		<Layout
			title="A Boston based web developer specializing in performant web applications"
			imageUrl={props.headshot.url}
		>
			<Flex marginBottom="2rem">
				<TitleContainer>
					<H1>Hi, I&apos;m Andrew</H1>
					<Arrow>&rarr;</Arrow>
				</TitleContainer>
				<HeadshotWrapper>
					<div style={{ height: '100%', width: '100%' }}>
						<Headshot
							src={props.headshot.url}
							height={props.headshot.height}
							width={props.headshot.width}
							blurDataURL={props.headshot.blur}
							priority
							layout="responsive"
							alt="my ugly mug"
						/>
					</div>
				</HeadshotWrapper>
			</Flex>
			<Flex reverse>
				<p>JavaScript ninja, CSS wizard, HTML rockstar. Master of hyperbole.</p>
			</Flex>
		</Layout>
	);
};

export default IndexPage;

export async function getStaticProps() {
	const { data } = await fetchGraphQL(`
		query {
			headshot: asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
				width
				height
				url
			}
		}
	`);

	const headshot = await transformImage(data.headshot);
	return {
		props: {
			headshot
		}
	};
}
