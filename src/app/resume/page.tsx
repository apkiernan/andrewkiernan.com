import styles from './resume.module.css';

export const metadata = {
	title: 'My resume'
};

const ResumePage = () => {
	return (
		<>
			<div className={styles['job-block']}>
				<div className={styles['job-header']}>
					<a className={styles['company-name']} href="https://connectrn.com">
						ConnectRN
					</a>
					<span>January 2022 - Present</span>
				</div>
				<div>
					<em>Tech Lead - Senior Frontend Engineer</em>
				</div>
				<section>
					<ul className={styles['bullet-list']}>
						<li>
							Implemented system to coordinate tech debt and codebase
							improvements in web portals.
						</li>
						<li>
							Build out and expand infrastructure to improve unit and
							integration testing of new and legacy code.
						</li>
					</ul>
				</section>
			</div>
			<div className={styles['job-block']}>
				<div className={styles['job-header']}>
					<a className={styles['company-name']} href="https://swell.is">
						Swell
					</a>
					<span>April 2021 - December 2021</span>
				</div>
				<div>
					<em>Full Stack Software Engineer</em>
				</div>
				<section>
					<ul className={styles['bullet-list']}>
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
					</ul>
				</section>
			</div>
			<div className={styles['job-block']}>
				<div className={styles['job-header']}>
					<a className={styles['company-name']} href="https://salsify.com">
						Salsify
					</a>
					<span>October 2020 - April 2021</span>
				</div>
				<div>
					<em>Software Engineer 2</em>
				</div>
				<section>
					<ul className={styles['bullet-list']}>
						<li>
							Led project to build dashboard where customers can view their
							usage and various entitlements in the platform, coordinating with
							Design and Product Management
						</li>
					</ul>
				</section>
				<div className={styles['job-header']}>
					<em>Software Engineer</em>
					<span>December 2019 - October 2020</span>
				</div>
				<section>
					<ul className={styles['bullet-list']}>
						<li>
							Rearchitected validation of property values in the new product
							edit experience
						</li>
						<li>
							Added tree-browser style sidebar to product index page to help
							users navigate their product categories
						</li>
					</ul>
				</section>
			</div>
			<div className={styles['job-block']}>
				<div className={styles['job-header']}>
					<a className={styles['company-name']} href="https://bondlink.com">
						BondLink
					</a>
					<span>January 2019 - December 2019</span>
				</div>
				<div>
					<em>Full Stack Software Engineer</em>
				</div>
				<section>
					<ul className={styles['bullet-list']}>
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
					</ul>
				</section>
			</div>
			<div className={styles['job-block']}>
				<div className={styles['job-header']}>
					<a className={styles['company-name']} href="https://carbonite.com">
						Carbonite
					</a>
					<span>September 2016 - January 2019</span>
				</div>
				<section>
					<ul className={styles['bullet-list']}>
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
					</ul>
				</section>
			</div>
		</>
	);
};

export default ResumePage;
