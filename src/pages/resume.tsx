import React from 'react';
import styled from 'styled-components';

import { Layout } from '../components/Layout';
import { fetchGraphQL } from '../lib/api';

type ResumePageProps = {
	headshot: { url: string };
};

const JobHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
`;

const JobBlock = styled.section`
	margin-bottom: 2rem;
`;

const BulletList = styled.ul`
	padding-left: 1rem;
	display: grid;
	grid-row-gap: 0.5rem;
`;

const CompanyName = styled.a`
	text-decoration: none;
	cursor: pointer;
	font-size: 1.25rem;
`;
const ResumePage = (props: ResumePageProps) => {
	const { headshot } = props;

	return (
		<Layout
			title="A Boston based web developer specializing in performant web applications"
			imageUrl={headshot.url}
		>
			<JobBlock>
				<JobHeader>
					<CompanyName href="https://connectrn.com">ConnectRN</CompanyName>
					<span>January 2022 - Present</span>
				</JobHeader>
				<div>
					<em>Tech Lead - Senior Frontend Engineer</em>
				</div>
				<section>
					<BulletList>
						<li>
							Implemented system to coordinate tech debt and codebase
							improvements in web portals.
						</li>
						<li>
							Build out and expand infrastructure to improve unit and
							integration testing of new and legacy code.
						</li>
					</BulletList>
				</section>
			</JobBlock>
			<JobBlock>
				<JobHeader>
					<CompanyName href="https://swell.is">Swell</CompanyName>
					<span>April 2021 - December 2021</span>
				</JobHeader>
				<div>
					<em>Full Stack Software Engineer</em>
				</div>
				<section>
					<BulletList>
						<li>
							Built ability to pause and restart user subscriptions for
							e-commerce merchant stores
						</li>
						<li>
							Added enhanced notification email support for various subscription
							events
						</li>
						<li>
							Expanded reporting dashboard with subscription based metrics using
							MongoDb aggregation pipeline
						</li>
						<li>
							Led triage of platform error reports via Sentry and wrote up
							issues for development
						</li>
					</BulletList>
				</section>
			</JobBlock>
			<JobBlock>
				<JobHeader>
					<CompanyName href="https://salsify.com">Salsify</CompanyName>
					<span>October 2020 - April 2021</span>
				</JobHeader>
				<div>
					<em>Software Engineer 2</em>
				</div>
				<section>
					<BulletList>
						<li>
							Led project to build dashboard where customers can view their
							usage and various entitlements in the platform, coordinating with
							Design and Product Management
						</li>
					</BulletList>
				</section>
				<JobHeader>
					<em>Software Engineer</em>
					<span>December 2019 - October 2020</span>
				</JobHeader>
				<section>
					<BulletList>
						<li>
							Rearchitected validation of property values in the new product
							edit experience
						</li>
						<li>
							Added tree-browser style sidebar to product index page to help
							users navigate their product categories
						</li>
					</BulletList>
				</section>
			</JobBlock>
			<JobBlock>
				<JobHeader>
					<CompanyName href="https://bondlink.com">BondLink</CompanyName>
					<span>January 2019 - December 2019</span>
				</JobHeader>
				<div>
					<em>Full Stack Software Engineer</em>
				</div>
				<section>
					<BulletList>
						<li>
							Launched investor portal for users utilizing React, Typescript and
							functional programming with fp-ts/io-ts/fp-ts-routing
						</li>
						<li>
							Added and changed Scala API functionality to support new investor
							portal
						</li>
						<li>
							Led research process into front-end framework technologies and
							laid foundational work for new investor portal
						</li>
						<li>
							Built out components for style guide and use in static issuer site
							redesign in TypeScript and SCSS
						</li>
						<li>
							Implemented API methods to render newly redesigned static sites in
							Scala
						</li>
					</BulletList>
				</section>
			</JobBlock>
			<JobBlock>
				<JobHeader>
					<CompanyName href="https://carbonite.com">Carbonite</CompanyName>
					<span>September 2016 - January 2019</span>
				</JobHeader>
				<section>
					<BulletList>
						<li>
							Member of group tasked with researching technology and JavaScript
							framework choices for new Carbonite Data Protection Console (CDPC)
						</li>
						<li>Built new CDPC in React, Redux, TypeScript, RxJS</li>
						<li>Set up webpack build system with code-splitting for CDPC</li>
						<li>
							Built proof-of-concept feature flags dashboard and GraphQL server
							for CI/CD pipeline, using React, TypeScript, Apollo-GraphQL,
							NodeJS
						</li>
					</BulletList>
				</section>
			</JobBlock>
		</Layout>
	);
};

export default ResumePage;

export async function getServerSideProps() {
	const { data } = await fetchGraphQL(`
	query ResumePage {
		headshot: asset(id: "${process.env.CONTENTFUL_HEADSHOT_ID}") {
			url
			height
			width
		}
	}
`);
	const { headshot } = data;
	return {
		props: {
			headshot
		}
	};
}
